import { useUser } from './userContext';
import { Navigate } from 'react-router-dom';
import Home from './components/Home'
function HomePage() {
  const { user } = useUser();

  if (user) {
    return (
      <>
        <Home />
      </>
    );
  } else {
    return (
      <Navigate to='/register' />

    );
  }
}
export default HomePage;