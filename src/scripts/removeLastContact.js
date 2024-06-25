import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts = contacts.filter((_, index) => index !== contacts.length - 1);
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Successfully removed the last contact.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
