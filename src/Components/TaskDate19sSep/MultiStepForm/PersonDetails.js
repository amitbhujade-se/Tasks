import React, { useState } from 'react';

const PersonalDetails = ({ formData, setFormData, nextStep }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.firstName) {
            valid = false;
            newErrors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            valid = false;
            newErrors.lastName = 'Last Name is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleNext = () => {
        if (validate()) {
            nextStep();
        }
    };

    return (
        <div style={{margin: "20px",  padding: "20px", border: "5px double darkred"}}> 
            <h1>Task no .5</h1>
            <h2>Personal Details</h2>
            <label>First Name:</label>
            <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            {errors.firstName && <p>{errors.firstName}</p>}

            <label>Last Name:</label>
            <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            {errors.lastName && <p>{errors.lastName}</p>}

            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default PersonalDetails;
