const paddingLeft = (str, lenght) => {
  if (str.length >= lenght) {
    return str
  } else {
    return paddingLeft('0' + str, lenght)
  }
}

export default paddingLeft
