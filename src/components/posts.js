import React from "react"

export default ({ data, title, card: Card }) => (
  <>
    <h2 className="text-3xl font-bold text-center mt-12">{title}</h2>
    <div className="flex mt-8 overflow-x-auto">
      {data.map((el, index) => (
        <Card element={el} key={"card-" + index} />
      ))}
    </div>
  </>
)
