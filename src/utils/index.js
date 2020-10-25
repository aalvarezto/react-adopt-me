"use strict"

const lowerNoSpaces = x => x.replace(" ", "").toLowerCase()
const capFirstOf = x => x.slice(0, 1).toUpperCase() + x.slice(1)
const map = x => y => y.map(x)

export { lowerNoSpaces, capFirstOf, map }
