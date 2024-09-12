import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
    name: 'nav',
    initialState: { //inidial state for the slice
        currentSection: '',
        modalState:false,
        page: ''
    },
    reducers: {
        changeSection(state, action) {
            console.log('Changing sections (reducer)');
            console.log(action.payload);
            state.currentSection = action.payload; //state that only this slice controls
        },
        handleModal(state,action) {
            console.log('Modal toggle');
            state.modalState = !state.modalState;
        },
        setPageState(state, action) {
            console.log('Changing pages (reducer)')
            state.page = action.payload
            console.log('Page name:')
            console.log(state.page)

        }
    },
});

export const {changeSection, setPageState} = navSlice.actions;
export const navReducer = navSlice.reducer; //this reducer is the large reducer full of the mini reducers