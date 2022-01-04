export default function resProcessor(req, res) {
  res.end(JSON.stringify(res.body))
}