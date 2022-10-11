import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CourseService from "../../Service/CourseService";

const TrainerCourses = () => {
  const [courses, SetCourses] = useState([]);
  const init = () => {
    CourseService.getAllCourses()
      .then((response) => {
        console.log("Printing courses data", response.data);
        SetCourses(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {courses?.map((course) => (
          <div className="col-md-3 m-3">
            <div
              className="card"
              style={{ width: "18rem" }}
              key={course?.courseId}
            >
              <div className="card-body">
                <h5 className="card-title">{course?.name}</h5>
                <p className="card-text">{course?.description}</p>
                <a class="btn btn-primary">
                  <Link
                    to={`/trainer/courses/session/${course.courseId}`}
                    className="text-white"
                  >
                    Course Sessions
                  </Link>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerCourses;
