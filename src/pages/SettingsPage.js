import { useSelector } from "react-redux";
import { selectError } from "redux/auth/selectors";
import css from "./../components/Phonebook/Phonebook.module.css";
import { Title } from "components/Phonebook/Title/Title";

// ------------------------------
// removing all ersisted data:
// import { persistStore } from 'redux-persist';
// import store from './your-redux-store'; // Import your Redux store

// const persistor = persistStore(store);

// // Call the `purge` method to remove all stored data
// persistor.purge().then(() => {
//   console.log('All stored data has been removed.');
// });
// ------------------------------

export const SettingsPage = () => {
  const error = useSelector(selectError);
  return (
    <main
      style={{ width: "100%", boxSizing: "border-box", padding: "0.4em 0px" }}
    >
      {error ? <span className={css.error}>{error}</span> : ""}
      <Title title="Settings" />
    </main>
  );
};

export default SettingsPage;