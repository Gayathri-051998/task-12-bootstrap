import React, { useState } from 'react';
import API from '../utils/axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/signup', form);
      toast.success(res.data.message);
      setForm({ username: '', email: '', password: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
        <input className="form-control mb-2" placeholder="Email" type="email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-2" placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
