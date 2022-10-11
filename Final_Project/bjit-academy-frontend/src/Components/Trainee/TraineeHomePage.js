import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

const TraineeHomePage = () => {
  return (
    <div className='container'>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Course Management:</button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/courseSessions'>All Course Sessions</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Assignment Management:</button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignments'>All Assignments</Link></button></div>
            
          </div>
    </div>
  )
}

export default TraineeHomePage