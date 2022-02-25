import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchMessages from './fetchMessages';

export const getMessages = createAsyncThunk('messages/getMessages', async () => {
    const messages = await fetchMessages();
    return messages.map(({ greeting }) => (greeting));
});

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        status: null,
    },
    extraReducers: {
        [getMessages.pending]: (state) => {
            state.status = 'loading';
        },
        [getMessages.fulfilled]: (state, { payload }) => {
            state.messages = payload;
            state.status = 'success';
        },
        [getMessages.rejected]: (state) => {
            state.status = 'failed';
        },
    },
});

export default messagesSlice.reducer;