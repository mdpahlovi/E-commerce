import * as SecureStore from 'expo-secure-store';
import type { StateStorage } from 'zustand/middleware';

export const SecureStorage: StateStorage = {
    getItem: async (name: string): Promise<string | null> => {
        return (await SecureStore.getItemAsync(name)) || null;
    },
    setItem: async (name: string, value: string): Promise<void> => {
        await SecureStore.setItemAsync(name, value);
    },
    removeItem: async (name: string): Promise<void> => {
        await SecureStore.deleteItemAsync(name);
    },
};
