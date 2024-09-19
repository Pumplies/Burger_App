import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    email: '',
    phone: '',
    password: '',
    name: '',
    image: '',
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    resetRegistration: (state) => {
      state.email = '';
      state.phone = '';
      state.password = '';
      state.name = '';
      state.image = '';
    },
  },
});

export const { setEmail, setPhone, setPassword, setName, setImage, resetRegistration } = registrationSlice.actions;
export default registrationSlice.reducer;
