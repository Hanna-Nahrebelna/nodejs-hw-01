import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    // Зчитуємо дані
    const readData = await fs.readFile(PATH_DB, 'utf-8');

    // Парсимо JSON-рядок масив контактів
    const contacts = JSON.parse(readData);

    if (contacts.length > 0) {
      contacts.pop()

      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Successfully removed the last contact.');
    } else {
      console.log('No contacts to remove.');
    }    
  
  } catch (error) {
    console.error('Error reading contacts:', error);  
}};

removeLastContact();
