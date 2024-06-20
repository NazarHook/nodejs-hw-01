import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
  } catch (error) {
console.log(error.message);  
}
};
removeAllContacts();