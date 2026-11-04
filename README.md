# Portfólio de Engenharia — Gustavo Denardi França

Site estático multilíngue (**Inglês, Francês e Português**) desenvolvido com HTML5, CSS3 e JavaScript puro (Vanilla JS), hospedado no GitHub Pages (`https://gudfranca.github.io/`).

---

## Estrutura de Arquivos do Repositório

```text
gudfranca.github.io/
├── index.html            Página inicial (estrutura e seções principais)
├── projeto-modelo.html   Página dinâmica que exibe os detalhes de qualquer projeto
├── traducoes.js          Textos fixos do site nos 3 idiomas (EN, FR, PT)
├── projetos.js           Banco de dados de todos os projetos (EN, FR, PT)
├── style.css             Estilos visuais, tema escuro/claro e responsividade
├── script.js             Lógica de idiomas, projetos, tema, busca e onda
├── README.md             Este guia completo de manutenção
└── assets/
    ├── img/
    │   ├── foto-perfil.jpg          Foto de perfil do topo (proporção 4:5)
    │   ├── video-capa.jpg           Miniatura do vídeo de apresentação (16:9)
    │   └── projetos/                Imagens de capa e galeria dos projetos
    │       ├── esp32-capa.jpg
    │       ├── esp32-01.jpg
    │       ├── medfasee-capa.jpg
    │       └── ...
    └── video/
        └── apresentacao.mp4         Vídeo de apresentação da página inicial
```

---

## Guia Rápido: Perguntas Frequentes

* **"Quero mudar minha bio ou um texto fixo em inglês, francês e português. Qual arquivo abro?"**
  Abra o arquivo **`traducoes.js`** e edite o texto dentro dos blocos `en`, `fr` e `pt`.
* **"Quero adicionar, editar ou remover um projeto. Qual arquivo abro?"**
  Abra apenas o arquivo **`projetos.js`**. Não é necessário criar novos arquivos `.html`.
* **"Quero alterar a ordem dos projetos ou colocar um projeto em destaque."**
  No arquivo **`projetos.js`**, altere o número do campo `ordem: 1` (menores aparecem primeiro) e `destaque: true` ou `false`.
* **"Quero trocar a imagem de capa de um projeto."**
  Suba a imagem na pasta `assets/img/projetos/` e atualize o campo `imagemCapa` daquele projeto dentro do arquivo **`projetos.js`**.
* **"Quero adicionar um vídeo de demonstração a um projeto."**
  No arquivo **`projetos.js`**, preencha o campo `video.url` do projeto com o link de incorporação do YouTube ou caminho do arquivo `.mp4`.

---

## 1. Como Editar Diretamente pelo Site do GitHub (Sem Terminal)

Você pode fazer qualquer atualização de texto, projeto, imagem ou link diretamente pelo navegador:

1. Acesse `https://github.com/gudfranca/gudfranca.github.io`.
2. Clique sobre o arquivo que deseja editar (por exemplo, `projetos.js` ou `traducoes.js`).
3. No canto superior direito da visualização do arquivo, clique no **ícone de lápis (`Edit this file`)**.
4. Faça as alterações desejadas no editor de texto.
5. Clique no botão verde **`Commit changes...`** no canto superior direito.
6. Na janela que abrir, mantenha marcada a opção *Commit directly to the `main` branch* e clique em **`Commit changes`**.
7. **Tempo de atualização:** O GitHub Pages leva entre **1 e 2 minutos** para publicar a nova versão. Após aguardar 1 minuto, recarregue o seu site usando `Ctrl + F5` (ou `Cmd + Shift + R` no Mac) para limpar o cache do navegador.

---

## 2. Como Gerenciar Traduções (EN, FR, PT)

O idioma padrão do portfólio é o **Inglês (`en`)**, seguido por **Francês (`fr`)** e **Português (`pt`)**.

* Você também pode compartilhar links diretos abrindo o site já em um idioma específico:
  * Inglês: `https://gudfranca.github.io/?lang=en`
  * Francês: `https://gudfranca.github.io/?lang=fr`
  * Português: `https://gudfranca.github.io/?lang=pt`

### Como alterar um texto existente
1. Abra o arquivo **`traducoes.js`**.
2. Localize a chave desejada nos 3 blocos (`en`, `fr` e `pt`). Exemplo:
   * `hero.role`: subtítulo abaixo do seu nome.
   * `hero.bio`: parágrafo de apresentação pessoal.
   * `videoSection.lead`: descrição da seção de vídeo.
3. Edite o texto mantendo sempre as aspas `"` no início e no fim.

### Como garantir que os 3 idiomas fiquem sincronizados
* Sempre que alterar uma informação factual (como instituição, ferramenta ou resumo), atualize a mesma chave em `en`, `fr` e `pt` antes de salvar o arquivo.

---

## 3. Como Gerenciar Projetos (`projetos.js`)

Todos os projetos ficam dentro da lista `window.PROJETOS = [ ... ]` no arquivo **`projetos.js`**.
Você **não** precisa duplicar o `projeto-modelo.html`: o site gera o link `projeto-modelo.html?id=IDENTIFICADOR` automaticamente.

### 3.1. Adicionar um novo projeto (Passo a Passo)
1. Se o projeto tiver imagens, envie-as primeiro para a pasta `assets/img/projetos/` (veja a seção 4 abaixo).
2. Abra o arquivo **`projetos.js`** no GitHub e clique no ícone de lápis (**Edit**).
3. Vá até o final da lista (antes do último `];`), coloque uma vírgula `,` após o último `}` do projeto anterior e cole o bloco do novo projeto.
4. Preencha os campos:
   * `id`: identificador único, curto, em letras minúsculas, sem espaços ou acentos (ex.: `"inversor-trifasico"`).
   * `ordem`: número inteiro que define a posição (ex.: `1`, `2`, `3`).
   * `destaque`: `true` (exibe o selo *Featured / À la une / Destaque* e prioriza na lista) ou `false`.
   * `imagemCapa`: caminho da imagem principal (ex.: `"assets/img/projetos/inversor-capa.jpg"`).
   * `video`: objeto com `url` (vazio `""` se não tiver vídeo), `tipo` (`"youtube"` ou `"mp4"`) e `poster`.
   * `links`: URLs para `github`, `relatorio` e `demo` (se deixar `""`, o botão daquele link é ocultado automaticamente).
   * `galeria`: lista de fotos da página do projeto com `alt` e `legenda` em `en`, `fr` e `pt`.
   * `textos`: blocos `en`, `fr` e `pt` contendo `titulo`, `resumo`, `tags`, `funcao`, `periodo`, `ferramentas`, `contexto`, `contextoTecnico` (lista de parágrafos), `diagrama` e `resultados` (linhas da tabela).
5. Clique em **Commit changes...**.

#### Exemplo Completo de Projeto (Modelo para Copiar e Colar)

```javascript
  {
    id: "conversor-cc-cc",
    ordem: 3,
    destaque: false,
    categoria: "Power Electronics",
    imagemCapa: "assets/img/projetos/conversor-capa.jpg",
    video: {
      url: "",
      tipo: "youtube",
      poster: "assets/img/projetos/conversor-capa.jpg"
    },
    links: {
      github: "[https://github.com/gudfranca/dc-dc-converter-example](https://github.com/gudfranca/dc-dc-converter-example)",
      relatorio: "",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/conversor-01.jpg",
        larga: true,
        alt: {
          en: "Closed-loop Buck converter simulation in Simulink",
          fr: "Simulation en boucle fermée du convertisseur Buck sous Simulink",
          pt: "Simulação em malha fechada do conversor Buck no Simulink"
        },
        legenda: {
          en: "Transient response of output voltage under load step.",
          fr: "Réponse transitoire de la tension de sortie lors d'un échelon de charge.",
          pt: "Resposta transitória da tensão de saída sob degrau de carga."
        }
      }
    ],
    textos: {
      en: {
        titulo: "[EXAMPLE] Digital Control of a Buck Converter",
        resumo: "Modeling, small-signal analysis, and PID controller design for a step-down DC-DC converter in MATLAB/Simulink.",
        altCapa: "Buck converter waveform chart",
        tags: ["MATLAB", "Simulink", "Power Electronics", "Control"],
        funcao: "Modeling & control design",
        periodo: "2026",
        ferramentas: "MATLAB, Simulink, PLECS",
        contexto: "Power Electronics coursework (ENSEEIHT)",
        contextoTecnico: [
          "State-space averaging and small-signal linearization of a synchronous Buck DC-DC converter operating at 100 kHz.",
          "Design of a digital voltage-mode compensator to guarantee phase margin above 60 degrees and fast load-step recovery."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [
          { metrica: "Switching frequency", valor: "100 kHz", obs: "PWM modulation" },
          { metrica: "Output voltage ripple", valor: "< 1.0 %", obs: "Nominal load" }
        ]
      },
      fr: {
        titulo: "[EXEMPLE] Commande Numérique d'un Convertisseur Buck",
        resumo: "Modélisation petits signaux et synthèse d'un correcteur PID pour un hacheur série abaisseur sous MATLAB/Simulink.",
        altCapa: "Formes d'ondes du convertisseur Buck",
        tags: ["MATLAB", "Simulink", "Électronique de puissance", "Automatique"],
        funcao: "Modélisation et loi de commande",
        periodo: "2026",
        ferramentas: "MATLAB, Simulink, PLECS",
        contexto: "Projet académique (ENSEEIHT)",
        contextoTecnico: [
          "Modélisation aux valeurs moyennes et linéarisation petits signaux d'un convertisseur DC-DC abaisseur synchrone à 100 kHz.",
          "Dimensionnement du correcteur numérique pour assurer une marge de phase supérieure à 60 degrés."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [
          { metrica: "Fréquence de découpage", valor: "100 kHz", obs: "Modulation MLI (PWM)" },
          { metrica: "Ondulation de tension", valor: "< 1,0 %", obs: "Charge nominale" }
        ]
      },
      pt: {
        titulo: "[EXEMPLO] Controle Digital de Conversor Buck",
        resumo: "Modelagem de pequenos sinais e projeto de controlador PID para conversor CC-CC abaixador no MATLAB/Simulink.",
        altCapa: "Formas de onda do conversor Buck",
        tags: ["MATLAB", "Simulink", "Eletrônica de Potência", "Controle"],
        funcao: "Modelagem e controle",
        periodo: "2026",
        ferramentas: "MATLAB, Simulink, PLECS",
        contexto: "Projeto acadêmico (ENSEEIHT)",
        contextoTecnico: [
          "Modelagem por valores médios no espaço de estados e linearização de pequenos sinais de um conversor Buck síncrono a 100 kHz.",
          "Projeto do compensador digital garantindo margem de fase superior a 60 graus e rápida rejeição a distúrbios de carga."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [
          { metrica: "Frequência de chaveamento", valor: "100 kHz", obs: "Modulação PWM" },
          { metrica: "Ripple de tensão de saída", valor: "< 1,0 %", obs: "Carga nominal" }
        ]
      }
    }
  }
```

### 3.2. Editar um projeto existente
* **Título, resumo, função, período, ferramentas, contexto técnico ou tabela:** Edite apenas o texto correspondente dentro de `projetos.js` nos blocos `en`, `fr` e `pt`.
* **Tecnologias (Tags):** Edite a lista `tags: ["Python", "MATLAB", ...]` dentro de `projetos.js`. Se quiser que um novo botão de filtro rápido apareça também no topo da página inicial (Hero), adicione um `<button class="chip" data-filtro="NomeDaTecnologia">` em `index.html`.
* **Ordem e Destaque:** Em `projetos.js`, altere `ordem` (1, 2, 3...) ou `destaque` (`true` ou `false`). Projetos com `destaque: true` aparecem primeiro.

### 3.3. Remover um projeto sem quebrar o site
1. Abra `projetos.js` no GitHub.
2. Apague o bloco inteiro `{ id: "...", ... }` referente ao projeto que deseja remover (cuidando para não deixar duas vírgulas seguidas `, ,`).
3. Faça o commit. O card e a página do projeto deixarão de existir imediatamente.
4. *(Opcional — limpeza de arquivos locais):* Se quiser liberar espaço no repositório, vá até `assets/img/projetos/`, clique nas imagens exclusivas daquele projeto, clique no ícone de três pontos `...` no canto superior direito e selecione **Delete file**.

---

## 4. Gerenciamento de Imagens pelo GitHub

### Onde cada imagem deve ficar
* **Sua foto de perfil (proporção 4:5, ex: 640×800 px):** `assets/img/foto-perfil.jpg`
* **Capa do vídeo de apresentação (proporção 16:9, ex: 1280×720 px):** `assets/img/video-capa.jpg`
* **Capas e fotos de projetos (proporção 16:10 ou 16:9, ex: 1200×750 px):** `assets/img/projetos/`

### Como enviar uma nova imagem pelo site do GitHub
1. No GitHub, clique na pasta `assets` > `img` > `projetos`.
2. No canto superior direito, clique em **Add file** > **Upload files**.
3. Arraste a imagem do seu computador para a área indicada.
4. Clique no botão verde **Commit changes**.

### Regras de ouro para evitar imagens quebradas
1. **Nomes de arquivos limpos:** Use apenas letras minúsculas, números e hífen (`-`).
   * **Correto:** `assets/img/projetos/medfasee-capa.jpg`
   * **Evite:** espaços, acentos, cedilha ou caracteres especiais (`MedFasee Automação (1).JPG`).
2. **Atenção a maiúsculas e minúsculas (Case-sensitive):** O GitHub Pages roda em servidores Linux, onde `.JPG` e `.jpg` são arquivos diferentes. Se o arquivo enviado se chama `esp32-capa.jpg`, escreva exatamente `"assets/img/projetos/esp32-capa.jpg"` no `projetos.js`.
3. **Caminhos relativos (sem `/` no início):** Sempre comece os caminhos locais com `assets/...` (e não `/assets/...`). Assim o site funciona em qualquer endereço ou pasta.
4. **Formatos e tamanhos recomendados:** Prefira `.jpg` ou `.webp` com largura entre `800px` e `1600px` e peso abaixo de `400 KB` por foto para carregamento instantâneo.

---

## 5. Gerenciamento de Vídeos

### Comparativo das alternativas
| Opção | Vantagens | Limitações | Recomendação |
| :--- | :--- | :--- | :--- |
| **YouTube Incorporado (`youtube-nocookie.com`)** | Não consome espaço do GitHub, adapta qualidade à internet do visitante, funciona em todos os celulares. | Depende de conta no YouTube (pode ser listado como *Não listado*). | **Recomendado para vídeos de demonstração de projetos** ou vídeos longos (> 25 MB). |
| **Arquivo `.mp4` no repositório (`assets/video/`)** | Player nativo limpo, sem interface de terceiros. | O GitHub limita uploads via web a **25 MB** por arquivo (e 100 MB via Git). | **Bom para vídeos curtos de até 15–20 MB** em 720p/1080p comprimidos. |

### Como adicionar ou alterar um vídeo de demonstração em um projeto
1. Abra `projetos.js` e localize o bloco `video` do projeto desejado:
   * **Opção A — YouTube (Recomendado):**
     Pegue o ID do seu vídeo no YouTube (ex.: se o link é `https://www.youtube.com/watch?v=AbCdEf12345`, o ID é `AbCdEf12345`) e preencha:
     ```javascript
     video: {
       url: "[https://www.youtube-nocookie.com/embed/AbCdEf12345](https://www.youtube-nocookie.com/embed/AbCdEf12345)",
       tipo: "youtube",
       poster: ""
     },
     ```
   * **Opção B — Arquivo MP4 no repositório:**
     Suba o vídeo em `assets/video/meu-projeto.mp4` e preencha:
     ```javascript
     video: {
       url: "assets/video/meu-projeto.mp4",
       tipo: "mp4",
       poster: "assets/img/projetos/esp32-capa.jpg"
     },
     ```
2. **Para remover o vídeo de um projeto:** Basta deixar `url: ""` dentro do bloco `video`. A seção de vídeo ficará oculta automaticamente na página daquele projeto.
