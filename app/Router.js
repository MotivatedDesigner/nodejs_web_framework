import Route from "./Route.js"

export default class XthunderRouter {
  constructor() {
    this.routes = []
  }

  addRoute = (method, path, handlers) => {
    const [regexPath, slots] = this.handleDynamicPath(path)
    this.routes.push(new Route(method, new RegExp(regexPath), slots, handlers))
  }

  dispatch = (path) => {
    this.routes.find(route => {
      ro
    })
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
// route.addRoute('ll','/projects/:projectId/tasks/:taskId','mmm')
// console.log(route.routes);
// console.log(new RegExp(route.routes[0].regexPath).test('/projects/sd/tasks/ze'))