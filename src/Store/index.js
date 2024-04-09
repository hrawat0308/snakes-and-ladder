import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game";

const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export const gameActions = gameSlice.actions;