# Flow CLI

## Criar Projeto

```bash
flow project:create "Nome do Projeto"
```

## Criar arquivo de configuração

```bash
flow config:create --type="Tipo do arquivo de configuracao"
```

**Parametros:** 

**—type:** (obrigatorio)

**valores:** 

- typeorm: (requer parametro **—database**)

**—database:** nome do banco de dados criado no arquivo **ormconfig.json**

## Criar arquivo controller

```bash
flow controller:create "Nome do Controller"
```

**Parametros:**

**—module:** (Opcional) - cria um controller em uma pasta de modulos ja existente

## Criar um novo diretorio de infra compartilhado

```bash
flow infra:create "Nome da pasta"
```

**Parametros**

**—type:** (obrigatorio)

**valores:**

- typeorm: cria os diretorios de infra do typeorm dentro de **shared**