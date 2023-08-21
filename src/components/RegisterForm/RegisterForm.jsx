import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './../Phonebook/Phonebook.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectIsLoading } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log({
      name: `${form.elements.name.value}`,
      email: `${form.elements.email.value}`,
      password: `${form.elements.password.value}`,
    });
    dispatch(
      register({
        name: `${form.elements.name.value}`,
        email: `${form.elements.email.value}`,
        password: `${form.elements.password.value}`,
      })
    );
  };

  return (
    <>
      <div className={`${css.card}`}>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            title="Only for display, doesn't have to be short. Cannot be modified later."
            placeholder="Displayed username"
            required
          />

          <label className={css.label} htmlFor="email">
            Email
          </label>
          <input
            className={css.input}
            type="email"
            id="email"
            name="email"
            title="Email address used to log in."
            placeholder="email@domain.com"
            required
          />

          <label className={css.label} htmlFor="password">
            Password
          </label>
          <input
            className={css.input}
            type="password"
            id="password"
            name="password"
            title="Password used to log in."
            placeholder="password"
            required
          />
          <button className={`${css.login} ${css.button}`} type="submit">
            Register
          </button>
        </form>
        {loading ? <Loader /> : ''}
      </div>
    </>
  );
};
