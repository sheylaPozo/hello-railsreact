import { configureStore } from '@reduxjs/toolkit';
import reducer from './messages/messages';

const store = configureStore({
    reducer,
});

export default store;