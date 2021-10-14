export const saveToLocalStorage = (name, data) => {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(name, serializedData)

  } catch (err) {
    console.log(err)
  }
}

export const loadFromLocalStorage = (name) => {
  try {
    const serializedData = localStorage.getItem(name)
    if (serializedData === null) return null
    return JSON.parse(serializedData)
  } catch (err) {
    console.log(err)
  }
}
