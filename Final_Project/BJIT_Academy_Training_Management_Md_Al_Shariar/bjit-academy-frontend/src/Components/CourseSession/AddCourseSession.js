import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BatchService from "../../Service/BatchService";
import CourseService from "../../Service/CourseService";
import CourseSessionService from "../../Service/CourseSessionService";
import TrainerService from "../../Service/TrainerService";

const AddCourseSession = () => {
  const [name, setName] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startTime, setStartTime] = useState("");
  const [description, setDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [trainerEmail, setTrainerEmail] = useState("");

  const navigate = useNavigate();
  const { courseSessionId } = useParams();

  const saveCourseSessionForm = (e) => {
    e.preventDefault();
    const course = {
      name: courseName,
    };
    const trainer = {
      email: trainerEmail,
    };
    const courseSession = {
      name,
      endTime,
      startTime,
      description,
      course,
      trainer,
    };
    if (courseSessionId) {
      //update course
      CourseSessionService.updateCourseSession(courseSessionId, courseSession)
        .then((response) => {
          console.log(
            "Course Session data updated successfully",
            response.data
          );
          navigate("/courseSessions");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create course session
      CourseSessionService.saveCourseSession(courseSession)
        .then((response) => {
          console.log("Course session added successfully", response.data);
          navigate("/courseSessions");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  //Getting All Course Session
  const [courses, SetCourses] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const initCourse = () => {
    CourseService.getAllCourses()
      .then((response) => {
        console.log("Printing course session data", response.data);
        SetCourses(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const initTrainer = () => {
    TrainerService.getAllTrainers()
      .then((response) => {
        console.log("Printing trainer session data", response.data);
        setTrainers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    initCourse();
    initTrainer();
    if (courseSessionId) {
      CourseSessionService.getCourseSessionById(courseSessionId)
        .then((res) => {
          console.log("Course session by ID: ", res.data);
          setName(res.data.name);
          setDescription(res.data.description);
          setStartTime(res.data.startTime);
          setEndTime(res.data.endTime);
          setCourseName(res.data.course.name);
          setTrainerEmail(res.data.trainer.email);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [courseSessionId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link
            to="/courseSessions"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Course Sessions
          </Link>
          {courseSessionId ? (
            <h3 className="text-center mt-3">Update Course Session Info</h3>
          ) : (
            <h3 className="text-center mt-3">Add Course Session</h3>
          )}
          <div className="card-body">
            <div className="batch-form">
              <form className="text-left">
                <div className="form-group text-left">
                  <label>Course Session Name: </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Course Session Name"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    name="desccription"
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Session Description"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Start Time: </label>
                  <input
                    name="stratTime"
                    id="startTime"
                    type="time"
                    className="form-control"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    min="09:00"
                    max="18:00"
                    required
                  />
                </div>
                <br></br>

                <div className="form-group">
                  <label>End Time: </label>
                  <input
                    name="endTime"
                    id="endTime"
                    type="time"
                    className="form-control"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    min="09:00"
                    max="18:00"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="course">Course:</label>
                  <select
                    className="form-control"
                    id="course"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                  >
                    <option>Select Courses: </option>
                    {courses?.map((course) => (
                      <option value={course?.name}>{course?.name}</option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="trainer">Trainer:</label>
                  <select
                    className="form-control"
                    id="trainer"
                    value={trainerEmail}
                    onChange={(e) => setTrainerEmail(e.target.value)}
                  >
                    <option>Select Trainer: </option>
                    {trainers?.map((trainer) => (
                      <option value={trainer?.email}>
                        {trainer?.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div className="mt-3">
                  {courseSessionId ? (
                    <button
                      onClick={(e) => saveCourseSessionForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveCourseSessionForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/courseSessions"
                    className="btn btn-outline-danger waves-effect btn-sm"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourseSession;
