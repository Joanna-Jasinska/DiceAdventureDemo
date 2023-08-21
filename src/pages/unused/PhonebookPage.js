import { Phonebook } from 'components/Phonebook/Phonebook';
export const PhonebookPage = () => {
  return (
    <main
      style={{ width: '100%', boxSizing: 'border-box', padding: '0.4em 0px' }}
    >
      <Phonebook />
    </main>
  );
};

export default PhonebookPage;
