import { GluegunToolbox } from 'gluegun';

import path = require('path');

module.exports = {
  name: 'infra:create',
  run: async (toolbox: GluegunToolbox) => {
    const { type } = toolbox.parameters.options;

    if (Boolean(type) === false) {
      toolbox.print.error('Type of infra not specified');
      return;
    }

    switch (type) {
      case 'typeorm':
        await toolbox.createFolder(
          path.resolve('src', 'shared', 'infra', 'typeorm'),
        );
        await toolbox.createFile(
          path.resolve('src', 'shared', 'infra', 'typeorm', 'index.ts'),
          'infra/typeorm/connection.ejs',
        );
        break;

      default:
        toolbox.print.error('Type not found');
    }
  },
};
