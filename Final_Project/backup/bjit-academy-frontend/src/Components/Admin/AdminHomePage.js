import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const AdminHomePage = () => {
    return (
        <div className='container'>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>User Management:</button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainers'>Trainers</Link></button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainees'>Trainees</Link></button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/admins'>Admins</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Batch Management:</button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/batches'>Batches</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Course Management:</button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/courses'>Courses</Link></button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/courseSessions'>Course Sessions</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Assignment Management:</button></div>
            <div className='col-2'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignments'>Assignments</Link></button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignmentMarks'>Assignments Mark</Link></button></div>
          </div>
         
         
        </div>
      )
}

export default AdminHomePage