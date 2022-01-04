export class Route {
  constructor(method, path, handlers) {
    this.method = method
    this.path = path
    this.handlers = handlers
  }
}

export class DynamicRoute {
  constructor(method, regexPath, slots, handlers) {
    this.method = method
    this.regexPath = regexPath
    this.slots = slots
    this.handlers = handlers
  }
}