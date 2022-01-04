import http, { Server } from "http"

export default class XthunderServer extends Server {
  constructor(port = 7777) {
    super()
    this.port = port
  }

  listen = (port, backlogFn) => super.listen(port = this.port, backlogFn)
}