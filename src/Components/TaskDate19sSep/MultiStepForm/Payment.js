import React, { useState } from 'react';

const Payment = ({ formData, setFormData, prevStep, submitForm }) => {
    const [errors, setErrors] = useState({});

    const validate = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.cardNumber) {
            valid = false;
            newErrors.cardNumber = 'Card Number is required';
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = () => {
        if (validate()) {
            submitForm();
            alert("Form submited successfully");
        }
    };

    return (
        <div style={{ margin: "20px", padding: "20px", border: "5px double darkred" }}>
            <h1>Task no .5</h1>
            <h2>Payment</h2>
            <label>Card Number:</label>
            <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            />
            {errors.cardNumber && <p>{errors.cardNumber}</p>}

            <button onClick={prevStep}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Payment;
