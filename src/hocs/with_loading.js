import React from 'react';

const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <p>Be Hold, fetching data may take some time :)</p> :
      <WrappedComponent {...props} />;
  }
};

export default withLoading;