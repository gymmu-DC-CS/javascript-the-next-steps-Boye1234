//all of this code is not copied or looked up in the Internet. I solved everything alone or with slight help of classmates.

export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") result.push("")
    else if (currentElement === "E") result.push("")
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}

export function exercise02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    const capitalizedElement = currentElement.toUpperCase()
    result.push(capitalizedElement)
  }
  return result.join("")
}

export function exercise03(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      count = count + 1
    } else if (currentElement === "0") {
      count = count - 1
    }
  }
  return count
}

export function exercise05(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()

    if (currentElement >= 65 && currentElement <= 90) {
      return true
    }
  }
  return false
}

export function exercise06(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt()
    if (
      (currentElement >= 33 && currentElement <= 47) ||
      (currentElement >= 58 && currentElement <= 64) ||
      (currentElement >= 91 && currentElement <= 96) ||
      (currentElement >= 123 && currentElement <= 126)
    ) {
      return true
    }
  }
  return false
}

export function exercise07(args) {
  const input = args

  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i].charCodeAt()
    const previousElement = input[i - 1].charCodeAt()
    const nextElement = input[i + 1].charCodeAt()

    if (
      (currentElement === 110 &&
        previousElement === 97 &&
        nextElement === 100) ||
      (previousElement === 65 && nextElement === 100)
    ) {
      return true
    }
  }
  return false
}

export function exercise08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") result.push("3")
    else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
