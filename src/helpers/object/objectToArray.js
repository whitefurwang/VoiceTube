const objectToArray = obj => (
  Object.keys(obj).map((key) => ({
    key: key,
    value: obj[key]
  }))
)

export default objectToArray
