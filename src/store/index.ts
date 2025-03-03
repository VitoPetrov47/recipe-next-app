import { configureStore } from '@reduxjs/toolkit';
import { wishListReducer } from '@/reducer/wishListSlice';

export const store = configureStore({
    reducer: {
        wishList: wishListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;