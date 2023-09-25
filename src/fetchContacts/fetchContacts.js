import axios from 'axios';

axios.defaults.baseURL = 'https://65118ba8829fa0248e404ffa.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  // При успішному запиті повертаємо проміс із даними
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
