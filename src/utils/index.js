"use strict"

const lowerNoSpaces = x => x.replace(" ", "").toLowerCase()
const capFirstOf = x => x.slice(0, 1).toUpperCase() + x.slice(1)
const map = x => y => y.map(x)
const prop = x => y => y[x]
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x)
const chain = compose(map, prop)
const nullish = x => (x === undefined || x === null ? [] : x)

export { lowerNoSpaces, capFirstOf, map, prop, compose, chain, peek, nullish }

function peek(x) {
	console.log(x)
	return x
}
