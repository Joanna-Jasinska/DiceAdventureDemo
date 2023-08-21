import { Loader } from 'components/Loader/Loader';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logOut } from 'redux/auth/operations';

export const LogoutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logOut({}));
    console.log('attempting to log out');
  }, [dispatch]);
  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <Loader txt="logout" />
    </main>
  );
};

export default LogoutPage;
