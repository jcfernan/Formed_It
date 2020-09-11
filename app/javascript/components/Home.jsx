import React from 'react'
import {Link} from 'react-router-dom'

export default () => (
    <div className='vw-100 vh-100 primary-color d-flex align-items-center justify-content-center'>
        <div className= 'jumbotron jumbotron-fluid bg-transparent'>
            <div className= 'containter secondary-color'>
                <h1 className= 'display-4'>Patient Records</h1>
                <p className= 'lead'>
                    The records of the current patients in our system.
                </p>
                <hr className= 'my-4'/>
                <Link
                    to= '/patients'
                    className= 'btn btn-lg custom-button'
                    role= 'button'
                >
                    View Patients
                </Link>
            </div>
        </div>
    </div>
);