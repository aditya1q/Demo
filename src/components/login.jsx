import { useState } from 'react';
import { useUser } from '../userContext';
import { Navigate } from 'react-router-dom';

function Login() {
  const { login, user } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please provide username and password');
      return;
    }
    login(username, password);
  };
  if (user) {
    return <Navigate to='/home' />
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-12 rounded-lg h-[60%] shadow-2xl w-96 flex flex-col gap-6">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-3 py-2 mb-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Log In
        </button>
        <p className='text-xs text-gray-500'>If you are new here please register here <a href="/register" className='text-blue-500 hover:underline'>Register</a></p>
      </div>
    </div>
  );
}

export default Login;
