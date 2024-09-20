import React from 'react';
import "./BlogPost.css"

class BlogPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data, loading: false });
            })
            .catch((error) => {
                this.setState({ error: error.message, loading: false });
            });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.someProp !== this.props.someProp) {
            this.fetchData();
        }
    }

    componentWillUnmount() {
        console.log("Component will unmount!");
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Taskdate 19-09-2024</h1>
                <div className='blogpost-container'>
                    <h2>Task no. 1</h2>
                    <h3>Fetched Data:</h3>
                    <pre style={{ color: "blue", textWrap: "wrap" }}>{JSON.stringify(data)}</pre>
                </div>
            </div>
        );
    }
}

export default BlogPost;
