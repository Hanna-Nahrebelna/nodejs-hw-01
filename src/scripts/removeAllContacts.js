import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    // Зчитуємо дані
    const readData = await fs.readFile(PATH_DB, 'utf-8');

    // Парсимо JSON-рядок масив контактів
    const contacts = JSON.parse(readData);
    
    // Повертаємо порожній масив
    return [];
    
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

removeAllContacts();
