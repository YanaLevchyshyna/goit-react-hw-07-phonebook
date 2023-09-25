import { useDispatch } from 'react-redux';
import { BsXCircleFill } from 'react-icons/bs';
import { ContactsListBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/operatoins';

import PropTypes from 'prop-types';

export default function ContactItem({ name, phone, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <span>{name}:</span>
      <span>{phone}</span>
      <ContactsListBtn type="button" onClick={handleDelete}>
        <BsXCircleFill size="16" />
      </ContactsListBtn>
    </>
  );
}

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
