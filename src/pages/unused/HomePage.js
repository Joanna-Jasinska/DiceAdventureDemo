import { Navigate } from 'react-router-dom';
export const HomePage = () => {
  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <Navigate to="/login" />
    </main>
  );
};

export default HomePage;
