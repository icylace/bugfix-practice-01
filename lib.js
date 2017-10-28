"use strict"

const asBinary = it => (it >>> 0).toString(2).padStart(32, "0")
const asFormatted = it => asBinary(it).replace(/0/g, ".  .").replace(/1/g, ">==<")
const render = it => it.map(row => row.reduce((acc, n) => acc + n, "")).map(parseInt).map(asFormatted)

module.exports = { asBinary, asFormatted, render }
