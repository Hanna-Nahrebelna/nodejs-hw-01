import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function generateContacts(count) {
    try {
        // Зчитуємо існуючі контакти
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        // Створюємо нові контакти
        const newContacts = Array.from({ length: count }, createFakeContact);

        // Додавємо нові контакти до існуючого масиву
        const updatedContacts = [...contacts, ...newContacts];

        // Записуємо оновлений масив контактів у файл
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
          console.log(`Successfully generated ${count} contacts.`);
        } catch (error) {
          console.error('Error generating contacts:', error);
        }
}

// Викликаємо функцію з потрібним числом контактів
const numContactsToGenerate = 5;
generateContacts(numContactsToGenerate);