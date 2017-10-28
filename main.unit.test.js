"use strict"

const { asBinary, render } = require("./lib")

describe("our test example", () => {
  test("has a working int to binary converter", () => {
    expect(asBinary(1234567890)).toEqual("01001001100101100000001011010010")
  })

  test("should end in a smile", () => {
    const data = [
      [0, 4, 1, 9, 3, 2, 8, 0],
      [0, 8, 3, 8, 8, 0, 9, 6],
      [1, 6, 7, 7, 6, 9, 6, 0],
      [3, 3, 5, 5, 4, 3, 0, 4],
      [3, 1, 7, 0, 4, 9, 6, 0],
      [3, 1, 7, 0, 4, 9, 6, 0],
      [3, 1, 7, 0, 4, 9, 6, 0],
      [3, 3, 5, 5, 4, 3, 0, 4],
      [3, 3, 5, 5, 4, 3, 0, 4],
      [2, 9, 3, 5, 9, 4, 8, 8],
      [3, 1, 4, 5, 6, 1, 2, 8],
      [3, 1, 4, 5, 9, 2, 0, 0],
      [1, 5, 7, 3, 2, 4, 8, 0],
      [0, 8, 3, 8, 8, 0, 9, 6],
      [0, 4, 1, 9, 3, 2, 8, 0],
    ]

    const smiley = [
      ".  ..  ..  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<.  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  .>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<.  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  .>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  ..  .",
      ".  ..  ..  ..  ..  ..  ..  ..  ..  ..  .>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<>==<.  ..  ..  ..  ..  ..  ..  ..  ..  ..  .",
    ]

    expect(render(data)).toEqual(smiley)
  })
})
