import React from 'react';

// Higher-Order Component for Authorization
const withAuthorization = (WrappedComponent, allowedRoles = []) => {
    return class extends React.Component {
        render() {
            const { isAuthenticated, user } = this.props;


            // Check if the user is authenticated
            if (!isAuthenticated) {
                return <div>Unauthorized: Please log in.</div>;
            }

            // Check if the user has one of the allowed roles (if roles are specified)
            if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
                return <div>Unauthorized: You do not have access to this resource.</div>;
            }

            // If the user is authenticated and has the proper role, render the component
            return <WrappedComponent {...this.props} />;
        }
    };
};

export default withAuthorization;