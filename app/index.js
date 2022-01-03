import XthunderRouter from "./Router"
import XthunderServer from "./Server"

export default class Xthunder {
  constructor() {
    this.server = new XthunderServer()
    this.router = new XthunderRouter()
  }

  get = (path, handlers) => this.router.addRoute('get',)



}