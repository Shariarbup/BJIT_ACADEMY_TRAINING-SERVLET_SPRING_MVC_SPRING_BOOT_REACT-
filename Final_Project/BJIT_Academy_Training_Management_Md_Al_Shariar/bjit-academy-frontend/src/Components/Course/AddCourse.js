import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BatchService from "../../Service/BatchService";
import CourseService from "../../Service/CourseService";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [batchName, setbatchName] = useState("");

  const navigate = useNavigate();
  const { courseId } = useParams();

  const saveCourseForm = (e) => {
    e.preventDefault();
    const batch = {
      name: batchName,
    };
    console.log(batchName);
    const course = {
      name,
      description,
      batch,
    };
    if (courseId) {
      //update course
      CourseService.updateCourse(courseId, course)
        .then((response) => {
          console.log("Course data updated successfully", response.data);
          navigate("/courses");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      //create course
      CourseService.saveCourse(course)
        .then((response) => {
          console.log("Course added successfully", response.data);
          navigate("/courses");
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  //Getting All Batches
  const [batches, SetBatches] = useState([]);

  const init = () => {
    BatchService.getAllBatches()
      .then((response) => {
        console.log("Printing batches data", response.data);
        SetBatches(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
    if (courseId) {
      CourseService.getCourseById(courseId)
        .then((res) => {
          console.log("Course by ID: ", res.data);
          setName(res.data.name);
          setDescription(res.data.description);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, [courseId]);
  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 mt-3">
        <Link
            to="/courses"
            className="text white btn btn-info btn-lg btn-block mt-2"
          >
            Courses
          </Link>
          {courseId ? (
            <h3 className="text-center mt-3">Update Course</h3>
          ) : (
            <h3 className="text-center mt-3">Add Course</h3>
          )}
          <div className="card-body">
            <div className="batch-form">
              <form className="text-left">
                <div className="form-group text-left">
                  <label>Course Name: </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter Description"
                    required
                  />
                </div>
                <br></br>
                <div className="form-group text-left">
                  <label for="batch">Batch:</label>
                  <select
                    className="form-control"
                    id="batch"
                    value={batchName}
                    onChange={(e) => setbatchName(e.target.value)}
                  >
                    <option>Select Batches: </option>
                    {batches?.map((batch) => (
                      <option value={batch?.name}>{batch?.name}</option>
                    ))}
                  </select>
                </div>
                <br></br>
                <div className="mt-3">
                  {courseId ? (
                    <button
                      onClick={(e) => saveCourseForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={(e) => saveCourseForm(e)}
                      className="btn btn-outline-success waves-effect btn-sm"
                      style={{ marginRight: "5px" }}
                    >
                      Save
                    </button>
                  )}
                  <Link
                    to="/courses"
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

export default AddCourse;
