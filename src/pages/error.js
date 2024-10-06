import React from 'react';
import { useNavigate } from 'react-router';

export default function ErrorPage() {
    const navigate = useNavigate()
  return (
    <div className="error-page">
      <h1>Oops! Something went wrong.</h1>
      <p> Please try again later.</p>
      <button onClick={() => navigate(-1)}>Retry</button>
    </div>
  );
}
