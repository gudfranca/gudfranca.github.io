/* =========================================================
   projetos.js | Base de Dados de Projetos (EN, FR, PT)
   Para adicionar, editar, reordenar ou remover projetos,
   basta editar esta lista diretamente pelo GitHub.
   ========================================================= */
window.PROJETOS = [
  {
    id: "esp32",
    ordem: 1,
    destaque: true,
    categoria: "Embedded Systems",
    imagemCapa: "assets/img/projetos/esp32-capa.jpg",
    video: {
      // Deixe url vazia "" se não quiser exibir vídeo na página deste projeto.
      // Aceita link de embed do YouTube (ex: "https://www.youtube-nocookie.com/embed/ID_DO_VIDEO")
      // ou caminho de arquivo MP4 no repositório (ex: "assets/video/esp32-demo.mp4")
      url: "",
      tipo: "youtube", // "youtube" ou "mp4"
      poster: "assets/img/projetos/esp32-capa.jpg"
    },
    links: {
      github: "https://github.com/gudfranca",
      relatorio: "",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/esp32-01.jpg",
        larga: true,
        alt: {
          en: "Complete assembly of the system on the breadboard",
          fr: "Montage complet du système sur platine d'essai",
          pt: "Montagem completa do sistema sobre a protoboard"
        },
        legenda: {
          en: "Complete assembly with ESP32, LEDs, and push buttons.",
          fr: "Montage complet avec ESP32, LED et boutons-poussoirs.",
          pt: "Montagem completa com ESP32, LEDs e botões."
        }
      },
      {
        src: "assets/img/projetos/esp32-02.jpg",
        larga: false,
        alt: {
          en: "Detail of push-button wiring to the ESP32",
          fr: "Détail du câblage des boutons vers l'ESP32",
          pt: "Detalhe da ligação dos botões ao ESP32"
        },
        legenda: {
          en: "Wiring of the push buttons to the microcontroller digital inputs.",
          fr: "Connexion des boutons aux entrées numériques du microcontrôleur.",
          pt: "Ligação dos botões às entradas do microcontrolador."
        }
      },
      {
        src: "assets/img/projetos/esp32-03.jpg",
        larga: false,
        alt: {
          en: "Scoreboard output displayed on the serial monitor",
          fr: "Tableau des scores affiché sur le moniteur série",
          pt: "Placar exibido no monitor serial"
        },
        legenda: {
          en: "Scoreboard and reaction time displayed on the serial monitor.",
          fr: "Score et temps de réaction affichés sur le moniteur série.",
          pt: "Placar exibido no monitor serial."
        }
      }
    ],
    textos: {
      en: {
        titulo: "Interactive Reflex Testing System with ESP32",
        resumo: "Microcontroller reaction system: the ESP32 randomly triggers an LED, measures the elapsed time until the button is pressed, and logs the score.",
        altCapa: "Assembly of the reflex testing system with ESP32",
        tags: ["ESP32", "C/C++", "Embedded Systems", "Electronics"],
        funcao: "Hardware & firmware design",
        periodo: "2024",
        ferramentas: "C/C++, ESP32, breadboard",
        contexto: "Academic / Research project (PET EEL - UFSC)",
        contextoTecnico: [
          "The ESP32 randomly selects which LED to light up, triggers a hardware timer, and measures—in microseconds—the interval until the corresponding button is pressed.",
          "The buttons trigger hardware interrupts with software debouncing, preventing false readings and keeping time measurement independent of the main execution loop. The firmware was written in C/C++.",
          "Developed for interactive reflex and response-time assessment applications, combining low-latency digital I/O handling with wireless/serial telemetry."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Block diagram of the reflex testing system",
          descSvg: "Push buttons send input signals to the ESP32, which drives the LEDs and outputs the scoreboard.",
          bloco1Titulo: "Buttons",
          bloco1Sub: "interrupt inputs",
          bloco2Titulo: "LEDs",
          bloco2Sub: "digital outputs",
          blocoCentralTitulo: "ESP32",
          blocoCentralSub: "logic & hardware timer",
          blocoSaidaTitulo: "Scoreboard",
          blocoSaidaSub: "serial or Wi-Fi",
          legenda: "System block diagram showing signal flow between inputs, ESP32 processing, and output interface."
        },
        resultados: [
          { metrica: "Measured response time", valor: "0.00 ms", obs: "Average across N rounds" },
          { metrica: "Timer resolution", valor: "1 µs", obs: "ESP32 hardware timer" },
          { metrica: "False triggers", valor: "0 %", obs: "With software debounce" }
        ]
      },
      fr: {
        titulo: "Système Interactif de Test de Réflexes avec ESP32",
        resumo: "Système de mesure de temps de réaction sur microcontrôleur : l'ESP32 sélectionne aléatoirement une LED, mesure le temps jusqu'à l'appui sur le bouton et enregistre le score.",
        altCapa: "Montage du système de test de réflexes avec ESP32",
        tags: ["ESP32", "C/C++", "Systèmes embarqués", "Électronique"],
        funcao: "Conception matérielle et firmware",
        periodo: "2024",
        ferramentas: "C/C++, ESP32, platine d'essai",
        contexto: "Projet académique / Recherche (PET EEL - UFSC)",
        contextoTecnico: [
          "L'ESP32 sélectionne aléatoirement quelle LED allumer, déclenche un temporisateur matériel (hardware timer) et mesure, en microsecondes, l'intervalle jusqu'à l'actionnement du bouton correspondant.",
          "Les boutons génèrent des interruptions matérielles avec anti-rebond (debounce) logiciel, ce qui évite les fausses lectures et maintient la mesure indépendante de la boucle principale. Le firmware a été développé en C/C++.",
          "Conçu pour des applications d'évaluation interactive des réflexes et du temps de réponse, alliant gestion d'entrées/sorties numériques à faible latence et transmission de données série/sans fil."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Schéma fonctionnel du système de réflexes",
          descSvg: "Les boutons envoient des signaux d'entrée à l'ESP32, qui pilote les LED et transmet le score.",
          bloco1Titulo: "Boutons",
          bloco1Sub: "entrées sur interruption",
          bloco2Titulo: "LED",
          bloco2Sub: "sorties numériques",
          blocoCentralTitulo: "ESP32",
          blocoCentralSub: "logique et chronomètre",
          blocoSaidaTitulo: "Score",
          blocoSaidaSub: "série ou Wi-Fi",
          legenda: "Schéma fonctionnel du système illustrant le flux de signaux entre les entrées, l'ESP32 et l'affichage."
        },
        resultados: [
          { metrica: "Temps de réponse mesuré", valor: "0,00 ms", obs: "Moyenne sur N essais" },
          { metrica: "Résolution du chronomètre", valor: "1 µs", obs: "Temporisateur matériel" },
          { metrica: "Déclenchements intempestifs", valor: "0 %", obs: "Avec anti-rebond logiciel" }
        ]
      },
      pt: {
        titulo: "Sistema Interativo de Reflexos com ESP32",
        resumo: "Jogo de reação em microcontrolador: o ESP32 sorteia um LED, mede o tempo até o botão ser pressionado e registra a pontuação.",
        altCapa: "Montagem do sistema de reflexos com ESP32",
        tags: ["ESP32", "C/C++", "Embarcados", "Eletrônica"],
        funcao: "Projeto de hardware e firmware",
        periodo: "2024",
        ferramentas: "C/C++, ESP32, protoboard",
        contexto: "Projeto acadêmico / Pesquisa (PET EEL - UFSC)",
        contextoTecnico: [
          "O ESP32 sorteia qual LED acender, dispara um temporizador de hardware e mede, em microssegundos, o intervalo até o acionamento do botão correspondente.",
          "Os botões geram interrupções com debounce em software, o que evita leituras falsas e mantém a medição independente do laço principal. O firmware foi escrito em C/C++.",
          "Desenvolvido para aplicações interativas de avaliação de reflexo e tempo de resposta, integrando leitura digital de baixa latência e comunicação sem fio/serial."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Diagrama de blocos do sistema de reflexos",
          descSvg: "Os botões enviam sinais de entrada ao ESP32, que aciona os LEDs e envia o placar.",
          bloco1Titulo: "Botões",
          bloco1Sub: "entradas com interrupção",
          bloco2Titulo: "LEDs",
          bloco2Sub: "saídas digitais",
          blocoCentralTitulo: "ESP32",
          blocoCentralSub: "lógica e cronômetro",
          blocoSaidaTitulo: "Placar",
          blocoSaidaSub: "serial ou Wi-Fi",
          legenda: "Diagrama de blocos do sistema. Troque por um diagrama seu, em SVG ou imagem."
        },
        resultados: [
          { metrica: "Tempo de resposta medido", valor: "0,00 ms", obs: "Média de N rodadas" },
          { metrica: "Resolução do cronômetro", valor: "1 µs", obs: "Temporizador de hardware" },
          { metrica: "Falsos acionamentos", valor: "0 %", obs: "Com debounce em software" }
        ]
      }
    }
  },

  {
    id: "medfasee",
    ordem: 2,
    destaque: true,
    categoria: "Power Systems",
    imagemCapa: "assets/img/projetos/medfasee-capa.jpg",
    video: {
      url: "",
      tipo: "youtube",
      poster: "assets/img/projetos/medfasee-capa.jpg"
    },
    links: {
      github: "https://github.com/gudfranca",
      relatorio: "",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/medfasee-capa.jpg",
        larga: true,
        alt: {
          en: "Phasor measurement oscillation chart from the MedFasee system",
          fr: "Graphique des oscillations issues des mesures de synchrophaseurs MedFasee",
          pt: "Gráfico de oscilações em medições fasoriais do MedFasee"
        },
        legenda: {
          en: "Synchronized phasor measurement analysis of low-frequency power system oscillations.",
          fr: "Analyse des mesures de synchrophaseurs pour le suivi des oscillations basse fréquence.",
          pt: "Análise de medições fasoriais sincronizadas para monitoramento de oscilações de baixa frequência."
        }
      }
    ],
    textos: {
      en: {
        titulo: "MedFasee Power System Oscillation Analysis",
        resumo: "Processing of synchronized phasor measurements (PMU) from the MedFasee project to identify and characterize low-frequency electromechanical oscillations in the power grid.",
        altCapa: "Chart of oscillations in phasor measurements from MedFasee",
        tags: ["Python", "MATLAB", "Synchrophasors", "Signal Processing"],
        funcao: "Undergraduate Researcher (LabPlan - UFSC)",
        periodo: "2025 – 2026",
        ferramentas: "Python, MATLAB, MedPlot, PMU data",
        contexto: "Power System Stability Research (MedFasee / ONS)",
        contextoTecnico: [
          "Synchronized Phasor Measurement Units (PMUs) provide high-resolution temporal data of voltage and frequency across the Brazilian National Interconnected System (SIN).",
          "This project processes synchrophasor data series using Python and MATLAB to detect, filter, and characterize low-frequency electromechanical oscillations and damping ratios in real-world grid events.",
          "The analysis supports wide-area monitoring, dynamic stability assessment, and validation of oscillation detection routines."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Block diagram of the synchrophasor analysis pipeline",
          descSvg: "PMU measurements from the MedFasee network are filtered and analyzed in Python and MATLAB to extract oscillation modes.",
          bloco1Titulo: "PMU / MedFasee",
          bloco1Sub: "synchronized data",
          bloco2Titulo: "Pre-processing",
          bloco2Sub: "filtering & detrending",
          blocoCentralTitulo: "Python / MATLAB",
          blocoCentralSub: "spectral & modal analysis",
          blocoSaidaTitulo: "Grid Modes",
          blocoSaidaSub: "frequency & damping",
          legenda: "Signal processing pipeline for synchrophasor oscillation analysis."
        },
        resultados: [
          { metrica: "Frequency band analyzed", valor: "0.1 – 2.0 Hz", obs: "Electromechanical oscillation modes" },
          { metrica: "Data source", valor: "PMU / MedFasee", obs: "Wide-area synchronized measurements" },
          { metrica: "Processing tools", valor: "Python & MATLAB", obs: "Automated signal analysis scripts" }
        ]
      },
      fr: {
        titulo: "Analyse des Oscillations Électromécaniques MedFasee",
        resumo: "Traitement de mesures de synchrophaseurs (PMU) du système MedFasee afin d'identifier et de caractériser les oscillations basse fréquence sur le réseau électrique.",
        altCapa: "Graphique des oscillations dans les mesures de phaseurs MedFasee",
        tags: ["Python", "MATLAB", "Synchrophaseurs", "Traitement du signal"],
        funcao: "Chercheur en cycle ingénieur/licence (LabPlan - UFSC)",
        periodo: "2025 – 2026",
        ferramentas: "Python, MATLAB, MedPlot, données PMU",
        contexto: "Recherche sur la stabilité des réseaux (MedFasee / ONS)",
        contextoTecnico: [
          "Les unités de mesure de phaseurs synchronisés (PMU) fournissent des données temporelles à haute résolution de la tension et de la fréquence sur le système interconnecté national brésilien (SIN).",
          "Ce projet traite les séries temporelles de synchrophaseurs sous Python et MATLAB afin de détecter, filtrer et caractériser les oscillations électromécaniques basse fréquence et leur amortissement lors d'événements réels sur le réseau.",
          "Ces analyses contribuent à la surveillance étendue (WAMS) et à l'évaluation de la stabilité dynamique des systèmes électriques de puissance."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Schéma fonctionnel de la chaîne d'analyse des synchrophaseurs",
          descSvg: "Les mesures PMU du réseau MedFasee sont filtrées et analysées sous Python et MATLAB pour extraire les modes d'oscillation.",
          bloco1Titulo: "PMU / MedFasee",
          bloco1Sub: "mesures synchronisées",
          bloco2Titulo: "Prétraitement",
          bloco2Sub: "filtrage des signaux",
          blocoCentralTitulo: "Python / MATLAB",
          blocoCentralSub: "analyse spectrale et modale",
          blocoSaidaTitulo: "Modes réseau",
          blocoSaidaSub: "fréquence et amortissement",
          legenda: "Chaîne de traitement du signal pour l'analyse des oscillations par synchrophaseurs."
        },
        resultados: [
          { metrica: "Bande de fréquence analysée", valor: "0,1 – 2,0 Hz", obs: "Modes d'oscillations électromécaniques" },
          { metrica: "Source de données", valor: "PMU / MedFasee", obs: "Mesures synchronisées à grande échelle" },
          { metrica: "Outils de traitement", valor: "Python & MATLAB", obs: "Scripts d'analyse automatisée" }
        ]
      },
      pt: {
        titulo: "Análise de Oscilações MedFasee",
        resumo: "Processamento de medições fasoriais sincronizadas do sistema MedFasee para identificar e caracterizar oscilações de baixa frequência na rede.",
        altCapa: "Gráfico de oscilações em medições fasoriais do MedFasee",
        tags: ["Python", "MATLAB", "Sincrofasores", "Processamento de sinais"],
        funcao: "Pesquisador de Iniciação Científica (LabPlan - UFSC)",
        periodo: "2025 – 2026",
        ferramentas: "Python, MATLAB, MedPlot, dados de PMU",
        contexto: "Pesquisa em Estabilidade de Sistemas de Potência (MedFasee / ONS)",
        contextoTecnico: [
          "As Unidades de Medição Fasorial Sincronizada (PMUs) fornecem dados de alta resolução temporal de tensão e frequência ao longo do Sistema Interligado Nacional (SIN).",
          "Este projeto realiza o processamento de séries temporais de sincrofasores utilizando Python e MATLAB para detectar, filtrar e caracterizar oscilações eletromecânicas de baixa frequência e taxas de amortecimento em eventos reais da rede elétrica.",
          "As análises apoiam o monitoramento fasorial de grandes áreas (WAMS) e a avaliação da estabilidade dinâmica do sistema elétrico de potência."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Diagrama de blocos do processamento de sincrofasores",
          descSvg: "As medições PMU da rede MedFasee são filtradas e analisadas em Python e MATLAB para identificar modos de oscilação.",
          bloco1Titulo: "PMU / MedFasee",
          bloco1Sub: "medições sincronizadas",
          bloco2Titulo: "Pré-processamento",
          bloco2Sub: "filtragem de sinais",
          blocoCentralTitulo: "Python / MATLAB",
          blocoCentralSub: "análise espectral e modal",
          blocoSaidaTitulo: "Modos da Rede",
          blocoSaidaSub: "frequência e amortecimento",
          legenda: "Fluxo de processamento de sinais para análise de oscilações via sincrofasores."
        },
        resultados: [
          { metrica: "Faixa de frequência analisada", valor: "0,1 – 2,0 Hz", obs: "Modos de oscilação eletromecânica" },
          { metrica: "Fonte de dados", valor: "PMU / MedFasee", obs: "Medições fasoriais sincronizadas" },
          { metrica: "Ferramentas de análise", valor: "Python e MATLAB", obs: "Scripts de processamento de sinais" }
        ]
      }
    }
  }
];
