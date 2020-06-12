import { GluegunToolbox } from 'gluegun';

import path = require('path');

module.exports = {
  name: 'config:create',
  run: async (toolbox: GluegunToolbox) => {
    const { type, database } = toolbox.parameters.options;

    if (Boolean(type) === false) {
      toolbox.print.error('Type of configuration not specified');
      return;
    }

    switch (type) {
      case 'typeorm':
        await toolbox.createFile(
          path.resolve('ormconfig.json'),
          'configs/ormconfig.ejs',
          database,
        );
        break;

      default:
        toolbox.print.error('Type not found');
    }
  },
};
