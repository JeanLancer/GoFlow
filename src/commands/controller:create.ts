import { GluegunToolbox } from 'gluegun';

import path = require('path');

module.exports = {
  name: 'controller:create',
  run: async (toolbox: GluegunToolbox) => {
    const name = toolbox.parameters.first;

    const modules = toolbox.parameters.options?.module || name;

    await toolbox.createFolder(
      path.resolve(
        'src',
        'modules',
        modules.toLowerCase(),
        'infra',
        'http',
        'controllers',
      ),
    );

    await toolbox.createFile(
      path.resolve(
        'src',
        'modules',
        modules.toLowerCase(),
        'infra',
        'http',
        'controllers',
        `${name}Controller.ts`,
      ),
      'controllers/Default.ejs',
      modules,
      false,
    );
  },
};
