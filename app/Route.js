export default class Route {
  constructor(method, regexPath, slots, fns) {
    this.method = method
    this.regexPath = regexPath
    this.slots = slots
    this.fns = fns
  }
}

