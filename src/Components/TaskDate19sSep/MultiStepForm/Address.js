import React, { useState } from 'react';

const Address = ({ formData, setFormData, nextStep, prevStep }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.address) {
            valid = false;
            newErrors.address = 'Address is required';
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
        <div style={{ margin: "20px", padding: "20px", border: "5px double darkred" }}>
            <h1>Task no .5</h1>
            <h2>Address</h2>
            <label>Address:</label>
            <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            {errors.address && <p>{errors.address}</p>}

            <button onClick={prevStep}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Address;
