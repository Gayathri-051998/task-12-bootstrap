import React, { useState } from 'react';
import API from '../utils/axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/request-reset', { email });
      toast.success(res.data.message);
      setForm({ email: ''});
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send reset link');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn btn-warning" type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
