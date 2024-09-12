import { configureStore } from "@reduxjs/toolkit";
import { navReducer, changeSection, setPageState } from "./slices/navSlice";

const store = configureStore({
    reducer: {
        nav: navReducer,
    }
});

export {store, changeSection, setPageState};