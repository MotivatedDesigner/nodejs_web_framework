import XthunderRouter from "./Router"
import XthunderServer from "./server/Server"

export default class Xthunder {
  constructor() {
    this.server = new XthunderServer()
    this.router = new XthunderRouter()
  }

  get = (path, handlers) => this.router.addRoute('get',)



}