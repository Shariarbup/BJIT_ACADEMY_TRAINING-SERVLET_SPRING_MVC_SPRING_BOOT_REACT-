import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
const HomePage = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-offset-3'>
                    <p className='h1'>Welcome to the Student ERP</p>
                    <p className='h2'> For Accessing this website please, <a><Link to='/login'>Login.</Link></a> </p>

                </div>
            </div>
        </div>
    )
}

export default HomePage