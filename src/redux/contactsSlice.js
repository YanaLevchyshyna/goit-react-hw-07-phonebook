import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'redux/operatoins';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // Додаємо обробку зовнішніх екшенів
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload); //  Додаємо новий контакт,
        // так як під капотом IMMER пуш на пряму не мутує state
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);

        // state.contacts.filter(contact => contact.id !== action.payload);
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {
//   addContact,
//   deleteContact,
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Redux Toolkit «під капотом» використовує бібліотеку Immer,
// яка значно спрощує логіку роботи зі станом, дозволяючи нам писати код
// оновлення стану в редюсері так, ніби ми безпосередньо змінювали стан.
// Насправді редюсери отримують копію стану,
// а Immer перетворює всі мутації на еквівалентні операції оновлення.
