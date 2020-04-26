import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Posts from "./posts"
import Certificate from "./certificate"
import Course from "./course"

export default () => {
  const data = useStaticQuery(graphql`
    {
      codigofacilitoJson {
        data {
          certificates {
            title
            score
            code
          }
          courses {
            title
            progress
            url
          }
        }
      }
    }
  `)

  return (
    <section>
      <div className="mt-24">
        <div className="max-w-4xl mx-auto">
          <Posts
            data={data.codigofacilitoJson.data.certificates}
            title={"Mis certificados online en CódigoFacilito"}
            card={Certificate}
          />
          <Posts
            data={data.codigofacilitoJson.data.courses.filter(
              c => c.progress > 0
            )}
            title={"Mis cursos"}
            card={Course}
          />
        </div>
      </div>
    </section>
  )
}
