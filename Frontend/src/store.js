import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reduces/rootReuducer";

const store=configureStore(
    {
        reducer:rootReducer,
    }
);
export default store;