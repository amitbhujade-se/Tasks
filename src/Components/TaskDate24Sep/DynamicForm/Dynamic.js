import React from 'react';
import Form from './Form';
import DynamicForm from './DynamicForm';

const Dynamic = () => {
    // Array of field configurations
    const fields = [
        { name: 'Name', type: 'text', placeholder: 'Enter your name' },
        { name: 'Email', type: 'email', placeholder: 'Enter your email' },
        {
            name: 'Gender',
            type: 'select',
            options: [
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' }
            ]
        },
        { name: 'Password', type: 'password', placeholder: 'Enter your password' },
    ];

    return (
        <div className='dynamic-container'>
            <h1>Task no. 3</h1>
            <h2>Dynamic Form with Children</h2>

            {/* Reusable Form Component */}
            <Form title="User Registration">
                <DynamicForm fields={fields} />
                <button className='submit-btn' type="submit">Submit</button>
            </Form>
        </div>
    );
};

export default Dynamic;
