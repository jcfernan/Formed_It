import React from 'react';
import {Link} from 'react-router-dom';

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {patient: {
            name: "",
            age: "", 
            weight: "", 
            height: "", 
            phonenumber: "", 
        }};

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deletePatient = this.deletePatient.bind(this)
    }

componentDidMount() {
    const {
        match: {
            params: {id}
        }
} = this.props;

const url = `api/v1/show/${id}`;

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(result => this.setState({patient: result}))
    .catch(() => this.props.history.push("/patients"));
}

addHtmlEntities(str) {
    return String(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">");
}

deletePatient() {
const {
    match: {
    params: { id }
    }
} = this.props;
const url = `/api/v1/destroy/${id}`;
const token = document.querySelector('meta[name="csrf-token"]').content;

fetch(url, {
    method: "DELETE",
    headers: {
    "X-CSRF-Token": token,
    "Content-Type": "application/json"
    }
})
    .then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Network response was not ok.");
    })
    .then(() => this.props.history.push("/patients"))
    .catch(error => console.log(error.message));
}

render() {
    const { patient, name, age, weight, height, phonenumber, history } = this.state;
    // let infoList = "No information available";

        {infoList = (patient.name, patient.age, patient.weight, patient.phonenumber, patient.history)
        .split(",")
        .map((info, index) => (
            <li key={index} className="list-group-item">
            {info}
            </li>
        ));
        }
    const patientInformation = this.addHtmlEntities(patient.name, patient.age, patient.weight, patient.phonenumber, patient.history);

    return (
        <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
            <img
            src={patient.image}
            alt={`${patient.name} image`}
            className="img-fluid position-absolute"
            />
            <div className="overlay bg-dark position-absolute" />
            <h1 className="display-4 position-relative text-white">
            {patient.name}
            </h1>
        </div>
        <div className="container py-5">
            <div className="row">
            <div className="col-sm-12 col-lg-3">
                <ul className="list-group">
                <h5 className="mb-2">info</h5>
                {infoList}
                </ul>
                </div>
            <div className="col-sm-12 col-lg-7">
                <h5 className="mb-2">Information</h5>
                <div
                dangerouslySetInnerHTML={{
                    __html: `${patientInformation}`
                }}
                />
            </div>
            <div className="col-sm-12 col-lg-2">
                <button type="button" className="btn btn-danger" onClick={this.deletePatient}>
                Delete Patient
                </button>
            </div>
            </div>
            <Link to="/patients" className="btn btn-link">
            Back to Patients
            </Link>
        </div>
        </div>
    );
    }

}

export default Patient;