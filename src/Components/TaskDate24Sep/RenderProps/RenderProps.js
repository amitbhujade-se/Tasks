import React from 'react';
import Toggle from './Toggle';
import Modal from './Modal';

const RenderProps = () => {
    return (
        <div style={{borderBottom: "2px solid black"}}>
            <h1>Task no. 2</h1>

            <h2>Render Props Toggle Example</h2>
            <Toggle>
                {({ isOpen, toggle }) => (
                    <>
                        <button onClick={toggle}>
                            {isOpen ? 'Hide Modal' : 'Show Modal'}
                        </button>
                        <Modal isOpen={isOpen}>
                            <h2>Modal Content</h2>
                            <p>This content is inside the modal.</p>
                            <button onClick={toggle}>Close Modal</button>
                        </Modal>
                    </>
                )}
            </Toggle>
        </div>
    );
};

export default RenderProps;
