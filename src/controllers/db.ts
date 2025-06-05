import { Keyv } from 'keyv';
import { KeyvFile } from 'keyv-file';

export const db = new Keyv({
  store: new KeyvFile({
    filename: 'database.json',
    serialize: JSON.stringify,
    deserialize: JSON.parse,
  }),
});
