import React from "react"
import ilustration from "../imgs/undraw_grid_design_obmd.svg"
import Form from "../components/contact-form"

export default () => (
  <header className="bg-blue-100">
    <div className="container mx-auto p-12 max-w-5xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-teal-700 text-6xl">
            ¡Hola, Soy Alberto Leyva!
          </h1>
          <p className="text-xl font-light">
            Me gusta mucho la tecnología y el mundo!
          </p>
        </div>
        <img
          src={ilustration}
          alt="Hombre de Negocios"
          style={{ height: "300px" }}
        />
      </div>

      <div>
        <Form />
      </div>
    </div>
  </header>
)
