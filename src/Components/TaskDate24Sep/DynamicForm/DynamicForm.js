import React from 'react';
import "./Dynamic.css"

const DynamicForm = ({ fields }) => {
    return (
        <>
            {fields.map((field, index) => {
                const { name, type, placeholder, options } = field;

                if (type === 'select') {
                    return (
                        <div key={index}>
                            <label>{name}</label>
                            <select name={name}>
                                {options.map((option, idx) => (
                                    <option key={idx} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );
                }

                return (
                    <div key={index}>
                        <label>{name}</label>
                        <input type={type} name={name} placeholder={placeholder} />
                    </div>
                );
            })}
        </>
    );
};

export default DynamicForm;
