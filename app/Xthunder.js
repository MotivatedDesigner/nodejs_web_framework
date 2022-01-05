import XthunderRouter from "#Router"
// import { reqProcessor } from '#Middlewares'
import http from 'http'

export default class Xthunder {
  constructor() {
    this.router = new XthunderRouter()
    this.server
  }

  get = (path, ...handlers) => this.router.addRoute('get', path ,handlers)

  listen = ( port = 3333, backlog = () => console.log('Server is Up, Port: ',port) ) => {
    this.server = http.createServer(this.requestListener)
    this.server.listen(port, backlog)
  }

  requestListener = (req, res) => {
    console.log(req);
  }
}