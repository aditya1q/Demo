import { useState } from 'react';
import { useUser } from '../userContext';
import { Navigate } from 'react-router-dom';

function Register() {
  const { register, user } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      alert('Please provide username, password, and confirm password');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    register(username, password);
    setIsRegister(true);
  }

  if (user) {
    return <Navigate to="/" />
  }
  if (isRegister) {
    return <Navigate to='/login' />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-12 h-[70%] flex flex-col gap-6 rounded-lg shadow-2xl w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleRegister}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Register
        </button>
        <p className='text-xs text-gray-500'>If you already register go to <a href="/login" className='text-blue-500 hover:underline'>Login</a> page</p>
      </div>
    </div>
  );
}

export default Register;
