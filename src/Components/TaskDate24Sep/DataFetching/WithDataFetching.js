import React, { useState, useEffect } from 'react';

const withDataFetching = (url) => (WrappedComponent) => {
    const DataFetchingComponent = (props) => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            // Fetch data from the provided URL
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(`Error: ${response.status}`);
                    }
                    const result = await response.json();
                    setData(result);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }, [url]);

        // Return a loading indicator if data is still being fetched
        if (loading) {
            return <div>Loading...</div>;
        }

        // Return an error message if the API call fails
        if (error) {
            return <div>Error: {error}</div>;
        }

        // Pass the fetched data as props to the wrapped component
        return <WrappedComponent data={data} {...props} />;
    };

    return DataFetchingComponent;
};

export default withDataFetching;
