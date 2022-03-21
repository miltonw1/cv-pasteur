export function commonExpressError (res) {
  return (err) => {
    return res.status(500).send(err)
  }
}
