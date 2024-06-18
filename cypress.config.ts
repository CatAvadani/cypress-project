import { defineConfig } from 'cypress';
import { reseed } from './cypress/tasks/reseed';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here ###
      on('task', {
        reseed: reseed,
      });
    },
    baseUrl: 'http://localhost:3100',
  },
});
