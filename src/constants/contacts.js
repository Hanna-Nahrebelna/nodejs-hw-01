import path from 'node:path'
import { fileURLToPath } from 'url';

// Дістаємо поточний директорій
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);


export const PATH_DB = path.join(dirname, '../db/db.json');
