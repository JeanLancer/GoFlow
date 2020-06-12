import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  toolbox.createFile = async (path, template, value: string = null, isLowerCase = true) => {
    toolbox.print.info('Criando arquivo: ' + path)

    const propValue = isLowerCase ? value?.toLowerCase() : value;

    await toolbox.template.generate({
      template,
      target: path,
      props: { value: propValue }
    });
  }
}
