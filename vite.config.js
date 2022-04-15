import {
  dirname,
  join,
} from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const rollupInput = {
  index: join(currentDir, 'index.html'),
  another: join(currentDir, 'another.html'),
};
console.log('rollupInput', rollupInput);

// eslint-disable-next-line import/no-default-export
export default {
  build: {
    rollupOptions: {
      input: rollupInput,
    },
  },
};
