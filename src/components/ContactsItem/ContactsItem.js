import PropTypes from 'prop-types';
import { ContactInfo, ContactInformation, DeleteButton } from "./ContactsItem.styled";

const ContactsItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <ContactInfo key={id}>
      <ContactInformation>- {name}: {number}</ContactInformation>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
   }),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;