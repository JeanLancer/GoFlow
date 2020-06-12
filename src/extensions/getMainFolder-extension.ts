import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.getMainFolder = () => {
    const directory = toolbox.filesystem.cwd().split('/').slice(-1)[0];

    return directory;
  }
}
