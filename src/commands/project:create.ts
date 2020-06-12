import { GluegunToolbox } from 'gluegun';

import path = require('path');

module.exports = {
  name: 'project:create',
  run: async (toolbox: GluegunToolbox) => {
    const { parameters, print } = toolbox;

    const nameProject = parameters.first;

    if (!nameProject) {
      print.error('Name project not found');
      return;
    }

    await toolbox.createFolder(path.resolve(nameProject, 'src', '@types'));
    await toolbox.createFolder(path.resolve(nameProject, 'src', 'config'));
    await toolbox.createFolder(path.resolve(nameProject, 'src', 'modules'));
    await toolbox.createFolder(path.resolve(nameProject, 'src', 'shared'));
    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'container'),
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'src', 'shared', 'container', 'index.ts'),
      'app/container.ejs',
    );
    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'container', 'providers'),
    );
    await toolbox.createFile(
      path.resolve(
        nameProject,
        'src',
        'shared',
        'container',
        'providers',
        'index.ts',
      ),
      'app/provider.ejs',
    );

    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'errors'),
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'src', 'shared', 'errors', 'AppError.ts'),
      'app/apperror.ejs',
    );

    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'infra'),
    );
    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'infra', 'http'),
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'src', 'shared', 'infra', 'http', 'server.ts'),
      'app/server.ejs',
    );

    await toolbox.createFolder(
      path.resolve(nameProject, 'src', 'shared', 'infra', 'http', 'routes'),
    );
    await toolbox.createFile(
      path.resolve(
        nameProject,
        'src',
        'shared',
        'infra',
        'http',
        'routes',
        'index.ts',
      ),
      'app/routes.ejs',
    );

    await toolbox.createFolder(path.resolve(nameProject, 'tmp'));

    await toolbox.createFile(
      path.resolve(nameProject, '.eslintignore'),
      'configs/.eslintignore.ejs',
    );
    await toolbox.createFile(
      path.resolve(nameProject, '.eslintrc.json'),
      'configs/.eslintrc.ejs',
    );
    await toolbox.createFile(
      path.resolve(nameProject, '.gitignore'),
      'configs/.gitignore.ejs',
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'jest.config.js'),
      'configs/jest.config.ejs',
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'package.json'),
      'configs/package.ejs',
      nameProject,
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'prettier.config.js'),
      'configs/prettier.config.ejs',
    );
    await toolbox.createFile(
      path.resolve(nameProject, 'tsconfig.json'),
      'configs/tsconfig.ejs',
    );

    print.success('Finished');
  },
};
