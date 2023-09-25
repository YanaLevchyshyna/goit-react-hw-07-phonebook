import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import { Container, Title, EmptyTitle } from './App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operatoins';

export const App = () => {
  const dispatch = useDispatch();

  // Отримуємо частини стану
  const contacts = useSelector(getContacts);

  // Викликаємо операцію
  useEffect(() => {
    // Запуск асинхронної Thunk-дії fetchContacts при монтуванні компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {/* {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>} */}
      <Title>Phonebook</Title>
      <Form />
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyTitle>
          Your contact list is empty. Please add contacts!
        </EmptyTitle>
      )}
      {contacts.length > 0 && <ContactsList />}
      {/* <p> {contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
      <ToastContainer />
    </Container>
  );
};
