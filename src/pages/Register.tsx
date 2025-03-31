import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  // Auto-redirect to dashboard for development
  React.useEffect(() => {
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div>Redirecting to dashboard...</div>
    </div>
  );
};

export default Register;