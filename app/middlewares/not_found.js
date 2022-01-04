export default function notFound(req, res, next) {
  res.error = {
    error: `Cannot ${req.method} to ${req.url} !`
  }
  next()
}