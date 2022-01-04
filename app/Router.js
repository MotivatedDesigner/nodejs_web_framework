import { MaxPriorityQueue } from "@datastructures-js/priority-queue"
import { Route, DynamicRoute } from "./Route.js"

export default class XthunderRouter {
  constructor() {
    this.dynamicRoutes = new MaxPriorityQueue({ priority: route => route.regexPath.source.length })
    this.routes = []
  }

  addRoute = (method, path, handlers) => {
    if(path.includes(':')){
      const [regexPath, slots] = this.handleDynamicPath(path)
      this.dynamicRoutes.enqueue(new DynamicRoute(method, new RegExp(regexPath), slots, handlers))
    } else {
      this.routes.push(new Route(method, path, handlers))
    }
  }

  dispatch = (method, path) => {
    if(!this.dynamicRoutes.isEmpty()) {
      this.routes.push(...this.dynamicRoutes.toArray().map(routeQueue => routeQueue.element))
      this.dynamicRoutes.clear()
    }
    return this.routes.find(
      route => route.method === method && ( route.path === path || route.regexPath?.test(path) )
    )
  }

  handleDynamicPath = path => {
    const fowardSlashRegex = /\//gm
    const fowardSlashReplace = '\\/'
    const slotRegex = /:(?:\w+)/gm
    const slotReplace = '(\\w+)'
    const slots = []

    let m
    while ((m = slotRegex.exec(path)) !== null) {
      if (m.index === slotRegex.lastIndex)
        slotRegex.lastIndex++
      m.forEach( (match) => slots.push(match.split(':')[1]) )
    }

    slots.forEach( slot => path = path.replace(`:${slot}`, slotReplace) )
    path = path.replace(fowardSlashRegex, fowardSlashReplace)
    return [path, slots]
  }

}

// const route = new XthunderRouter()

// route.addRoute('get','/projects/omma','111')
// route.addRoute('get','/projects/:projectId','111')
// route.addRoute('get','/projects/:projectId/tasks/:taskId','222')

// // console.log(route.dispatch('get','/projects/omma'))
// // console.log(route.dispatch('get','/projects/sd'))
// console.log(route.dispatch('get','/projects/sd/tasks/sd'))

// // console.log(route.routesMinQueue.toArray())
// // console.log(`route.routes`, route.routes)