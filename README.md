# Portfólio de Gustavo Denardi França

Site estático (HTML, CSS e JavaScript puro), pronto para o GitHub Pages.

## Estrutura

```
portfolio/
├── index.html            Página inicial
├── projeto-modelo.html   Modelo de página de projeto
├── style.css             Estilos, tema claro/escuro e animações
├── script.js             Tema, busca, parallax, scroll e onda
└── assets/
    ├── img/
    │   ├── foto-perfil.jpg       Sua foto (proporção 4:5)
    │   ├── video-capa.jpg        Capa do vídeo (opcional)
    │   └── projetos/             Imagens dos projetos
    └── video/
        └── apresentacao.mp4      Seu vídeo de apresentação
```

## O que editar

1. `index.html`: bio, links do LinkedIn e do GitHub (troque `SEU-USUARIO`), e-mail e textos dos cards.
2. `assets/`: coloque a foto, o vídeo e as imagens dos projetos. Enquanto faltarem, a página mostra um papel milimetrado no lugar.
3. Para criar a página de um projeto: duplique `projeto-modelo.html` (por exemplo, `projeto-medfasee.html`), edite o conteúdo e aponte o link "Ver detalhes" do card para o novo arquivo.
4. Imagem de fundo: troque a URL em `.bg-parallax__img` no `style.css`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos desta pasta para a raiz dele.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`.
3. Aguarde alguns minutos. O endereço será `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Se o repositório se chamar `SEU-USUARIO.github.io`, o site fica direto em `https://SEU-USUARIO.github.io/`.

## Atalhos

- Tecla `/` foca a busca de projetos; `Esc` limpa o texto.
- Os botões de tecnologia no topo (Python, C/C++, MATLAB, Simulink) filtram os projetos.
- Links como `index.html?busca=ESP32#projetos` abrem a lista já filtrada.
