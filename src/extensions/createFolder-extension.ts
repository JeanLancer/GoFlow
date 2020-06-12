import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.createFolder = async (path, file) => {
    toolbox.print.info('Criando pasta: ' + path)

    await toolbox.filesystem.dirAsync(path, file)
  }
}
