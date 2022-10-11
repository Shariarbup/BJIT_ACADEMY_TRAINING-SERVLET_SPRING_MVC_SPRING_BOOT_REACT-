import { Link} from 'react-router-dom'

const TrainerHomePage = () => {
  return (
    <div className='container'>
          <div className='row m-3'>
             <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Batch Management:</button></div>
             <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainerBatchList'>All Assigned Batches</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Course Management:</button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/trainer/courses'>All Assigned Courses</Link></button></div>
          </div>
          <div className='row m-3'>
            <div className='col-4'><button type="button" class="btn btn-info btn-lg btn-block text-white" disabled>Assignment Management:</button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignments'>Assign Assignment</Link></button></div>
            <div className='col-4'><button type="button" class="btn btn-primary btn-lg btn-block"><Link className='text-white' to='/assignmentMarks'>Assign Assignment Mark</Link></button></div>
          </div>
    </div>
  )
}

export default TrainerHomePage