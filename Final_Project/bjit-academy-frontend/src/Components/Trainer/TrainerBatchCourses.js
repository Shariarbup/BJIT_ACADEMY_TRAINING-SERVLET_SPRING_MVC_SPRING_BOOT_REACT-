import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseService from "../../Service/CourseService";

const TrainerBatchCourses = () => {
    const { batchId } = useParams();
    const [trainerBatchcourses, SetTrainerBatchcourses] = useState([]);
    const init = () => {
      CourseService.getCourseByTrainerBatchId()
        .then((response) => {
          console.log("Printing Trainer batch courses data", response.data);
          SetTrainerBatchcourses(response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    };
    useEffect(() => {
      init();
    }, []);
  return (
    <div>
          <div className="container">
          <br />
          <table className="table table-info table-striped table-hover table-bordered caption-top">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">NAME</th>
                <th scope="col">Description</th>
                <th scope="col">Batch</th>
              </tr>
            </thead>
            <tbody>
              {trainerBatchcourses?.map((course) => (
                <tr key={course?.courseId}>
                  <td>{course?.courseId}</td>
                  <td>{course?.name}</td>
                  <td>{course?.description}</td>
                  <td>{course.batch?.name}</td>
                  
                  <td>
                  <Link
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                      to={`/courses/courseSessions/${course.courseId}`}
                    >
                      All sessions
                    </Link>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TrainerBatchCourses