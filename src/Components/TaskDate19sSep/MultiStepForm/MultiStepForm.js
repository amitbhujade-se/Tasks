import React, { useState } from 'react';
import PersonalDetails from './PersonDetails';
import Address from './Address';
import Payment from './Payment';
import "./MultiStepForm.css"

const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        cardNumber: ''
    });

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const submitForm = () => {
        console.log('Form submitted:', formData);
        // Handle form submission (e.g., send data to an API)
    };

    switch (currentStep) {
        case 1:
            return (
                <PersonalDetails
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            );
        case 2:
            return (
                <Address
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <Payment
                    formData={formData}
                    setFormData={setFormData}
                    prevStep={prevStep}
                    submitForm={submitForm}
                />
            );
        default:
            return <div>Step not found</div>;
    }
};

export default MultiStepForm;
