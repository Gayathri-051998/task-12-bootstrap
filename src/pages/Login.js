import React, { useState } from 'react';
import API from '../utils/axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/Login', form);
      toast.success(res.data.message);
      
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    }
    finally {


      
      // Reset the form in both success and failure
      setForm({ email: '', password: '' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Email" type="email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-success" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
