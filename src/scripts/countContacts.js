import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    // Зчитуємо дані
    const readData = await fs.readFile(PATH_DB, 'utf8');

    // Парсимо JSON-рядок у масив контактів
    const contacts = JSON.parse(readData);

    // Повертаємо кількість контактів
    return contacts.length;

  } catch (error) {
    console.error('Error counting contacts:', error);    
  }
};

console.log(await countContacts());
