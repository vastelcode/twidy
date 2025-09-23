import rootReducer from "./root-reducer.ts";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// создаём хранилище 

export const store = configureStore({
  reducer: persistedReducer, // передаём наш обернутый редюсер
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        // Игнорируем действия redux-persist, т.к. они не сериализуемы
        ignoredActions: ['persist/PERSIST'],
      }
    })
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispath = typeof store.dispatch;

