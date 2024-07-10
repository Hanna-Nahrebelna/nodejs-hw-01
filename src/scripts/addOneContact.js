import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async (count) => {
  try {
    // Зчитуємо існуючі контакти
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    // Створюємо один новий контакт і додаємо в кінець масиву
    const newContact = createFakeContact();
    contacts.push(newContact);

    // Записуємо оновлений масив контактів у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Successfully generated ${count} contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error);
  }
};

// Викликаємо функцію для додавання одного контакту
addOneContact();
