import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CourseSessionService from "../../Service/CourseSessionService";

const TrainerCourseSessions = () => {
    const { courseId } = useParams();
    const[courseSessions, setCourseSessions] = useState([]);
    const init = () => {
        CourseSessionService.getCourseSessionByCourseId(courseId)
          .then((response) => {
            console.log("Printing course sessions data", response.data);
            setCourseSessions(response.data);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      };
      useEffect(() => {
        init();
      }, [courseId]);
  return (
    <div className="container">
        <h2 className="text-center mt-3">All Session of This course</h2>
        <table className="table table-info table-striped table-hover table-bordered caption-top mt-3">
        {/* <caption>{courseSessions?.course?.name}</caption> */}
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Session NAME</th>
                <th scope="col">Description</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
                <th scope="col">Course Name</th>
                <th scope="col">Trainer Name</th>
              </tr>
            </thead>
          
            <tbody>
              {courseSessions?.map((session) => (
                <tr key={session?.courseSessionId}>
                  <td>{session?.courseSessionId}</td>
                  <td>{session?.name}</td>
                  <td>{session?.description}</td>
                  <td>{session?.startTime}</td>
                  <td>{session?.endTime}</td>
                   {session?.course === courseId ? 
                   <td>{session[0]?.course?.name}</td>
                   :
                  <td>{session?.course?.name}</td>
                  }
                  <td>{session?.trainer?.firstName} {session?.trainer?.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default TrainerCourseSessions