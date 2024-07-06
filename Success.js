import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const { state: formData } = useLocation();

  return (
    <div>
      <h1>Form Submission Successful!</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default Success;
