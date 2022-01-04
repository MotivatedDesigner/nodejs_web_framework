

const biddersQueue = new MinPriorityQueue({ priority: route => route.regexPath.length })

biddersQueue.enqueue({regexPath: "1"})
biddersQueue.enqueue({regexPath: "11"})
biddersQueue.enqueue({regexPath: "111"})
biddersQueue.enqueue({regexPath: "1111"})

console.log(biddersQueue.toArray())



