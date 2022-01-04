export default function reqProcessor(req, res, next) {
  let body = ''
  res.on('data', chunk => body += chunk.toString())
  res.on('end', () => req.body = JSON.parse(body))
  next()
}