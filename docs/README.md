# Sistema de Cadastro de Alunos

Este projeto é um sistema simples de cadastro de alunos, que permite adicionar, editar, excluir e exibir informações de alunos como Nome, RA, Média e Resultado (Aprovado ou Reprovado). Além disso, o sistema oferece funcionalidades de ordenação, persistência local de dados e importação/exportação de registros.

## Funcionalidades

- **Cadastro de Alunos:** Permite o cadastro de alunos com nome, RA (Registro Acadêmico), média e resultado (Aprovado/Reprovado). O sistema verifica se o RA já existe para evitar duplicidade.
  
- **Edição e Exclusão:** É possível editar os dados de um aluno já cadastrado ou excluir o aluno da lista.

- **Ordenação dos Alunos:** Os alunos podem ser exibidos em ordem crescente por nome ou em ordem decrescente por RA. Além disso, há uma opção para listar apenas os alunos aprovados (com média maior ou igual a 6), ordenados por nome.

- **Validações:** Validações básicas para garantir que o RA seja único e que a média esteja entre 0 e 10.

- **Persistência de Dados:** Os dados são armazenados no `localStorage` do navegador, garantindo que as informações não sejam perdidas ao atualizar a página.

- **Importação e Exportação:** O sistema permite exportar os dados dos alunos em formato JSON e importar dados de um arquivo JSON. RA duplicados são verificados durante a importação.

## Tecnologias Utilizadas

- **HTML5:** Estrutura da aplicação.
- **CSS3:** Estilos para a interface do usuário, com aplicação de cores institucionais da FATEC (azul #003DA5).
- **JavaScript:** Lógica de negócios, validações, manipulação de DOM e armazenamento no `localStorage`.

## Como Usar

- **Cadastro de Aluno:**
   - Preencha os campos "Nome", "RA" e "Média".
   - O campo "Resultado" será automaticamente preenchido como "Aprovado" se a média for maior ou igual a 6, e "Reprovado" caso contrário.
   - Clique no botão "Cadastrar" para adicionar o aluno.

- **Editar/Excluir Aluno:**
   - Use os botões de edição e exclusão ao lado de cada aluno na tabela para modificar ou remover o registro.

- **Ordenar Alunos:**
   - Clique no botão "Ordenar por Nome" para exibir os alunos em ordem crescente por nome.
   - Clique no botão "Ordenar por RA" para exibir os alunos em ordem decrescente de RA.
   - Clique no botão "Alunos Aprovados" para listar apenas os alunos aprovados.

- **Exportar Dados:**
   - Clique no botão "Exportar" para baixar os dados de alunos em formato JSON.

- **Importar Dados:**
   - Clique no botão "Importar" e selecione um arquivo JSON com dados de alunos para adicioná-los ao sistema.

## Requisitos Funcionais

- Permitir o cadastro, edição, exclusão, ordenação e exibição de alunos.
- Validar RA duplicados e médias entre 0 e 10.
- Salvar e carregar dados do `localStorage`.
- Exportar e importar dados no formato JSON.

## Requisitos Não Funcionais

- Layout responsivo, com adaptação para diferentes tamanhos de tela.
- Utilização de cores da FATEC, com destaque para o azul institucional (#003DA5).
- Armazenamento local de dados via `localStorage`.
- Desempenho aceitável para uma quantidade moderada de registros.

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo a estrutura HTML da aplicação.
- `style.css`: Estilos aplicados à interface do usuário, incluindo cores e layout.
- `script.js`: Lógica da aplicação, incluindo manipulação do DOM, validações e interações com o `localStorage`.

## Como Executar o Projeto

- Clone este repositório.
- Abra o arquivo `index.html` em um navegador web moderno.
- Utilize as funcionalidades disponíveis diretamente na página.

## Melhorias Futuras

- Adição de filtros avançados.
- Integração com um banco de dados para persistência mais robusta.
- Implementação de testes automatizados para validação do sistema.

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [giovanni-teixeira](https://github.com/giovanni-teixeira)
- [igor-knoll](https://github.com/igor-knoll)
