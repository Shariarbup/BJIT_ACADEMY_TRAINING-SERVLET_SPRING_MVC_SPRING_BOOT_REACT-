import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='container'>
      <div className='row m-3'>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/batches'>All batches</Link></button></div>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainees'>All trainees</Link></button></div>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/admins'>All admins</Link></button></div>
      </div>
      
      <div className='row m-3'>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/courses'>All Courses</Link></button></div>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignments'>All Assignments</Link></button></div>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignmentMarks'>All Assignments Mark</Link></button></div>
      </div>
      <div className='row m-3'>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainers'>All Trainers</Link></button></div>
        <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/courseSessions'>All Course Sessions</Link></button></div>
      </div>
    </div>
  )
}

export default HomePage