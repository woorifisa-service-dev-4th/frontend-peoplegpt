// src/lib/storage.js
const PREFIX = 'peoplegpt_';

export const storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(PREFIX + key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    },
    
    get: (key) => {
        try {
            const item = localStorage.getItem(PREFIX + key);
            return item ? JSON.parse(item) : null;
        } catch (e) {
            console.error('Error reading from localStorage:', e);
            return null;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(PREFIX + key);
        } catch (e) {
            console.error('Error removing from localStorage:', e);
        }
    },
    
    clear: () => {
        try {
            Object.keys(localStorage)
                .filter(key => key.startsWith(PREFIX))
                .forEach(key => localStorage.removeItem(key));
        } catch (e) {
            console.error('Error clearing localStorage:', e);
        }
    }
};