import React from 'react'
import {Link} from 'react-router-dom'

    class NewPatient extends React.Component {
        constructor(props) {
            super(props);
                this.state = {
                    name: "",
                    age: "", 
                    weight: "", 
                    height: "", 
                    phonenumber: "", 
                    history: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        }

        onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/patients/create";
        const { name, age, weight, height, phonenumber, history } = this.state;

        if (name.length == 0 || age.length == 0 || weight.length == 0 || height.length == 0 || phonenumber.length == 0 || history.length == 0 )
            return;

        const body = {
            name,
            age,
            weight,
            height,
            phonenumber,
            history
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
            "X-CSRF-Token": token,
            "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
            })
            .then(response => this.props.history.push(`/patient/${response.id}`))
            .catch(error => console.log(error.message));
        }

        render() {
        return (
            <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                <h1 className="font-weight-normal mb-5">
                    Add a new patient
                </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label htmlFor="patientName">Patient name</label>
                    <input
                        type="text"
                        name="name"
                        id="patientName"
                        className="form-control"
                        required
                        onChange={this.onChange}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="patientInformation">Information</label>
                    <input
                        type="text"
                        name="information"
                        id="patientInformation"
                        className="form-control"
                        required
                        onChange={this.onChange}
                    />
                    <small id="patientsHelp" className="form-text text-muted">
                        Separate information with a comma
                    </small>
                    </div>
                    <label htmlFor="information">Information</label>
                    <textarea
                    className="form-control"
                    id="information"
                    name="information"
                    rows="5"
                    required
                    onChange={this.onChange}
                    />
                    <button type="submit" className="btn custom-button mt-3">
                    Create Patient
                    </button>
                    <Link to="/patients" className="btn btn-link mt-3">
                    Back to patients
                    </Link>
                </form>
                </div>
            </div>
            </div>
        );
        }

}

export default NewPatient;