export default function pipeline(middlewares) {
  if(middlewares && !Array.isArray(middlewares)) 
    throw TypeError('Middlewares passed to the Pipeline Must be of type array')

  const middlewaresStack = middlewares ?? []

  const push = (...middlewares) => middlewaresStack.push(...middlewares)

  const execute = (req, res) => {
    let executionCounter = -1
    async function runner(index) {
      if(index === middlewaresStack.length) 
        return
      if(index <= executionCounter) 
        throw RangeError('next() called multiple times')

      const middleware = middlewaresStack[index]
      if(typeof middleware != 'function') 
        throw TypeError('Middlware must be of type function')
      
      executionCounter++
      await middleware(req, res, () => runner(index + 1))
    }

    runner(0)
  }

  return { push, execute }
}


