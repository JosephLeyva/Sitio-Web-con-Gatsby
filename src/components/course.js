import React from "react"

export default ({ element: course }) => (
  <div className="shadow p-5 bg-white mr-4 rounded">
    <h4 className="font-bold h-16">
      <a href={course.url} target="_blank" rel="noopener noreferrer">
        {course.title}
      </a>
    </h4>
    <div className="text-center w-40">
      <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 rounded">
        Progreso: {parseInt(course.progress)}%
      </span>
    </div>
  </div>
)
