import { useState } from 'react';

const Signup = () => {
  const [values, setValues] = useState({
    name: 'Bob',
    email: 'bob@gmail.com',
    password: 'bob123',
    error: '',
    loading: false,
    message: '',
    showForm: true,
  });
  const { name, email, password, error, loading, showForm } = values;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password, error, loading, showForm });
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            onChange={handleChange('name')}
            type='text'
            value={name}
            className='form-control'
            placeholder='name'
          />
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange('email')}
            type='email'
            value={email}
            className='form-control'
            placeholder='email'
          />
        </div>
        <div className='form-group'>
          <input
            onChange={handleChange('password')}
            type='password'
            value={password}
            className='form-control'
            placeholder='password'
          />
        </div>
        <button className='btn btn-primary'>Signup</button>
      </form>
    </>
  );
};

export default Signup;
