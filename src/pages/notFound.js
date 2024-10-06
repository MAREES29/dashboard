import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The URL you entered does not exist.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default NotFound;
