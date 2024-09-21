# Next 13

Next.JS: FrameWork do React que abstrai configurações e algumas estruturas adicionais e otimizações para sua aplicação.

DOM: Estrutura de Dados de Arvore que representa a User-Interface do client, que é interpretado por um Browser.

Programação Imperativa: O Programador diz exatamente o que o computador deve fazer. Na web ele o faz pelo javascript manipulando a DOM diretamente.
Programação Declarativa: O Programador diz o que ele quer sem, mas não lida com todas as instruções para faze-lo, mas deixa a responsabilidade por uma abstração dizer ao computador.

ReactJs: Uma blibioteca declarativa para montar interfaces de usuario.

Principais Features do Next:

- Sistema de Roteamento: Baseado na estrutura de arquivos e suporta: layouts, nested routes, dynamic routes, loading, error handling
- Renderização: Renderização de Componentes no Lado do Cliente e do Servidor, e streaming de paginas com Nodejs ou Edge runtime
- Data Feching: Simplificação de requisições async em Server Componentes e Extensão da api do Fetch com cache
- Estilização:
- Caching:
- Otimizações de Assets

## Renderização

Client: Browser de um usuario
Server: Computador que contem o código da nossa aplicação

Server Components: Componentes que são renderizados do lado do servidor, fazendo todas as suas operações e deixando um arquivo pronto para ser consumido por todos os clients
Client Components: Componentes que contem interações e são renderizados no lado do cliente, e também tem acesso as Api's do Browser
Misto: Os server componentes são renderizados primeiro, e se conterem componentes de clients dentro deles, esses são juntados em uma árvore quando o código é mandado ao cliente.

NextJs: Usa Server Components como default.

Seo: Com server-components os Bots que fazem o SEO conseguem pegar o conteúdo da pagina e indexa-lo corretamente.

Sempre usar Server-Components: Sempre usar server-componentes quando der, e fazer apenas pequenos componentes dinamicos que são client-side, pois assim pouco javascript precisará ser rodado pelo browser, dimiuindo a latência da sua aplicação.

Renderização:

- Static: Deixar a pagina cacheada indefinidamente
- Caching: Por padrão o NextJs faz um cache da sua pagina
- Dynamic: É preciso forçar a

Os componentes são server-side, então sendo renderizados no servidor podemos realizar requisições neles

- Implementações do Next
  - Rotas da aplicação basedo na estrutura de pastas da pasta `app`
  - Route handlers: Possibilidade de escrever rotas backend para sua aplicação em server-side dentro do código do NextJs em arquivos route.tsx
  - Layout: Componentes que não muda e servem de base para outros componentes, eles nunca são re-renderizados em trocas de paginas

## Data Fecting

Data Fetching no Nest: Em componentes Server-side é possível criar funções asyncs para fazer requisições ao backend ou acessar um banco de dados.

Execução: As requisições são feitas em paralelo.

Extensão da Fetch Api pelo Next: Next vai traquear todas as requisições para o mesmo recurso e deixar em cache, melhorando a performance.

Passos para renderizar um Componente:

- 1: Data Fetching dos dados do servidor
- 2: Renderizar o componente do servidor
- 3: Enviar o HTML para o browser
- 4: Browser renderizar a pagina não interativa
- 5: Browser executar o javascript da pagina quando o React hidrata a pagina, fazendo-a interativa

Streaming: Nextjs lida automaticamente fazendo esses steps simultaneamente e os compondo conforme eles vão acontecendo, usando a api de Streams do Nodejs. E podemos definir uma pagina de loading que será renderizada pelo Next enquanto ele realiza o stream dessa pagina.
