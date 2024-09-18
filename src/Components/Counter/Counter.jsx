import React, { useState } from "react";
import "./Counter.css";

// Class based component
// class Counter extends React.Component {

//     state = {
//         count: 0
//     };

//     increaseCount = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     resetCount = () => {
//         this.setState({ count: 0 });
//     };

//     render() {

//         return <div className="count-container">
//             <div className="main-count">
//                 <h1>Task No. 4</h1>
//                 <h2 className="counter">Count : {this.state.count}</h2>
//                 <button className="increment-btn" onClick={this.increaseCount}>Increment</button>
//                 <button className="reset-btn" onClick={this.resetCount}>Reset</button>
//             </div>
//         </div>
//     }
// }

const Counter = () => {

    const[count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const resetCount = () => {
        setCount(0);
    }


    return (
        <div className="count-container">
            <h1>Task No. 3</h1>
            <div className="main-count">
                <h2 className="counter">Count : {count}</h2>
                <button className="increment-btn" onClick={increaseCount}>Increment</button>
                <button className="reset-btn" onClick={resetCount}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;