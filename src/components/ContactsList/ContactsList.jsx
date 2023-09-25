import { useSelector } from 'react-redux';

import { selectContactBySearch } from 'redux/selectors';

import ContactItem from '../ContactItem/ContactItem';

import { ContactsListWrapp, List, ListItem } from './ContactsList.styled';

export default function ContactsList() {
  const contacts = useSelector(selectContactBySearch);
  // console.log('contacts ==>', contacts);

  return (
    <ContactsListWrapp>
      <List>
        {contacts.map(({ name, phone, id }) => {
          return (
            <ListItem key={id}>
              <ContactItem name={name} phone={phone} id={id} />
            </ListItem>
          );
        })}
      </List>
    </ContactsListWrapp>
  );
}
