import axios from 'axios';

axios.defaults.baseURL = 'https://656870759927836bd974cfd0.mockapi.io';

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
