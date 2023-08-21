import { useAuth } from 'hooks';
import { HeaderNavBtn } from '../HeaderNavBtn/HeaderNavBtn';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <header className={`header ${css.header}`}>
      <nav className={css.rightNav}>
        <HeaderNavBtn to="/logout" display="Log out" />
        <HeaderNavBtn
          to="/contacts"
          display={`${user.email}`}
          inactive={true}
        />
      </nav>
    </header>
  );
};
