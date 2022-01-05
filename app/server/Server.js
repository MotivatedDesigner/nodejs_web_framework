import http,{ Server } from "http"

export default class XthunderServer extends Server {
  constructor(port = 7777) {
    super()
    this.port = port
  }

  // listen = (port = this.port, backlogFn = () => console.log('Server is Up, Port: ',port)) => 
  //   super.listen(port, backlogFn)
}
http.createServer()
const server = new XthunderServer()
server.on('connection',(socket)=>
  socket.write('llll')
)
server.listen(3333,()=>{
  console.log('jjjj');
})



