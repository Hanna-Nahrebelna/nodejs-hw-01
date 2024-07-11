import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    // Зчитуємо дані
    const readData = await fs.readFile(PATH_DB, 'utf-8');

    // Парсимо JSON-рядок масив контактів
    const contacts = JSON.parse(readData);

    // Створюємо порожній масив
    const emptyArray = [];

    // Записуємо порожній масив у файл
    await fs.writeFile(PATH_DB, JSON.stringify(emptyArray, null, 2));
    console.log('All contacts have been removed.');
    
    // Повертаємо порожній масив
    return emptyArray;
    
  } catch (error) {
    console.error('Error reading contacts:', error);
  }
};

removeAllContacts();
