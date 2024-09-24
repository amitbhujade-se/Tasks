import React, { useState } from 'react';
import MouseTracker from './MouseTracker';
import './MouseRender.css';

const MouseRender = () => {
        // State to control the visibility of the mouse tracking area
   const [isTracking, setIsTracking] = useState(false);

    return (
        <div>
            <h1>Mouse Tracker with Toggle Button</h1>

            {/* Button to toggle mouse tracking */}
            {!isTracking ? (
                <button onClick={() => setIsTracking(true)} className="toggle-button">
                    Open Mouse Tracking
                </button>
            ) : (
                <>
                    {/* Button to close the mouse tracking area */}
                    <button onClick={() => setIsTracking(false)} className="toggle-button">
                        Close Mouse Tracking
                    </button>

                    {/* MouseTracker component only rendered when isTracking is true */}
                    <MouseTracker
                        render={({ x, y }) => (
                            <>
                                <div className="coordinates">
                                    Mouse position: ({x}, {y})
                                </div>
                                <div
                                    className="custom-cursor"
                                    style={{
                                        left: x - 15 + 'px',
                                        top: y - 15 + 'px',
                                    }}
                                />
                            </>
                        )}
                    />
                </>
            )}
        </div>
    );
};

export default MouseRender;
