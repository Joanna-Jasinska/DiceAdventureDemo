import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './../Phonebook/Phonebook.module.css';
// import PropTypes from 'prop-types';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <div className={`${css.card}`}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="email">
          Email
        </label>
        <input
          className={css.input}
          type="email"
          id="email"
          name="email"
          // value={userEmail}
          // onChange={emailHandle}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Email address used to log in."
          // placeholder="email@domain.com"
          placeholder="mariola@poczta.pl"
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
          // value={'mariola'}
          // onChange={e => setpassword(e.target.value)}
          //   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Password used to log in."
          // placeholder="password"
          placeholder="mariola"
          required
        />
        <button className={`${css.login} ${css.button}`} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};

// LoginForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
//   addContactHandle: PropTypes.func.isRequired,
//   setName: PropTypes.func.isRequired,
//   setpassword: PropTypes.func.isRequired,
// };
