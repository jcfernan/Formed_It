import React from 'react';
import { Link } from 'react-router-dom';

class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patients: [],
        };
    }

    componentDidMount() {
        const url = "/api/vi/patients/index";
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(result => this.setState({patients: result}))
            .catch(() => this.props.history.push("/"))
    }

    render() {
        const { patients } = this.state;
        const allPatients = patients.map((patient, index) => (
            <div key={index} className='col-md-6 col-lg-4'>
                <div className='card mb-4'>
                    <img
                        src={patient.image}
                        className='card-image-top'
                        alt={`${patient.name} image`}
                    />
                    <div className='card-body'>
                        <h5 className='card-title'>{patient.name}</h5>
                        <Link to={`/patient/${patient.id}`} className='btn custom-button'>
                            View Patient
                        </Link>
                    </div>
                </div>
            </div>
        ));
        const noPatient = (
            <div className='vw-100 vh-50 d-flex align-items-center justify-content-center'>
                <h4>
                    No Patients yet. Let use <Link to="/new_patient">add one</Link>
                </h4>
            </div>
        );

        return (
            <>
                <section className='jumbotron jumbotron-fluid text-center'>
                    <div className='container py-5'>
                        <h1 className='display-4'>Our Patients</h1>
                        <p className='lead text-muted'>
                            We are proud to serve our community in all their health needs.
                        </p>
                    </div>
                </section>
                <div className='py-5'>
                    <main className='container'>
                        <div className='text-right mb-3'>
                            <Link to="/patient" className='btn custom-button'>
                                Add a Patient
                            </Link>
                        </div>
                        <div className='row'>
                            {patients.length > 0 ? allPatients : noPatient}
                        </div>
                        <Link to="/" className='btn btn-link'>
                            Home
                        </Link>
                    </main>
                </div>
            </>
        );
    }
}

export default Patients;