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
    categoria: "Embedded Systems & IoT",
    imagemCapa: "assets/img/projetos/esp32-capa.jpg",
    video: {
      url: "",
      tipo: "youtube",
      poster: "assets/img/projetos/esp32-capa.jpg"
    },
    links: {
      github: "https://github.com/gudfranca",
      relatorio: "http://www.peteel.ufsc.br/projetos",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/esp32-01.jpg",
        larga: true,
        alt: {
          en: "Final prototype of the Spider Sense wireless system with master unit and 5 interactive button modules",
          fr: "Prototype final du système sans fil Spider Sense avec unité maître et 5 modules de boutons interactifs",
          pt: "Protótipo final do sistema sem fio Spider Sense com módulo mestre e 5 módulos de botões interativos"
        },
        legenda: {
          en: "Final Spider Sense prototype: central master station with integrated LCD display and 5 autonomous wireless button modules.",
          fr: "Prototype final Spider Sense : station maître centrale avec écran LCD intégré et 5 modules de boutons autonomes sans fil.",
          pt: "Protótipo final do Spider Sense: módulo central mestre com display LCD integrado e 5 módulos de botões autônomos sem fio."
        }
      },
      {
        src: "assets/img/projetos/esp32-02.jpg",
        larga: false,
        alt: {
          en: "First wired prototype (MVP) of Spider Sense with 6 arcade buttons and LCD screen",
          fr: "Premier prototype filaire (MVP) de Spider Sense avec 6 boutons d'arcade et écran LCD",
          pt: "Primeiro protótipo cabeado (MVP) do Spider Sense com 6 botões e display LCD"
        },
        legenda: {
          en: "Phase 1 (MVP): Initial wired prototype used to validate the 5-round reaction logic and LCD user instructions.",
          fr: "Phase 1 (MVP) : Premier prototype filaire utilisé pour valider la logique de réaction sur 5 manches et l'affichage LCD.",
          pt: "Fase 1 (MVP): Primeiro protótipo cabeado utilizado para validar a lógica das 5 rodadas e as instruções no display LCD."
        }
      },
      {
        src: "assets/img/projetos/esp32-03.jpg",
        larga: false,
        alt: {
          en: "Internal hardware assembly of a wireless module using ESP32 WROOM, battery power circuit, and arcade button",
          fr: "Montage matériel interne d'un module sans fil avec ESP32 WROOM, circuit d'alimentation par batterie et bouton",
          pt: "Montagem de hardware de um módulo utilizando ESP32 WROOM, circuito de alimentação a bateria e botão arcade"
        },
        legenda: {
          en: "Standalone module hardware: 30-pin ESP32 WROOM, voltage regulation/battery power supply, power switch, and illuminated button.",
          fr: "Matériel d'un module autonome : ESP32 WROOM 30 broches, alimentation par batterie, interrupteur et bouton lumineux.",
          pt: "Hardware do módulo autônomo: ESP32 WROOM de 30 pinos, alimentação por bateria e regulador, chave liga/desliga e botão iluminado."
        }
      },
      {
        src: "assets/img/projetos/esp32-04.jpg",
        larga: false,
        alt: {
          en: "Spider Sense master module showing title on LCD display alongside yellow and red slave modules",
          fr: "Module maître Spider Sense affichant le titre sur l'écran LCD à côté des modules jaune et rouge",
          pt: "Módulo mestre exibindo Spider Sense no display LCD ao lado dos módulos amarelo e vermelho"
        },
        legenda: {
          en: "Master control housing with integrated LCD screen and reset button alongside wireless peripheral nodes.",
          fr: "Boîtier de commande maître avec écran LCD intégré et bouton de réinitialisation à côté des modules périphériques.",
          pt: "Sistema montado na carcaça (housing) com display LCD e botão de inicialização ao lado dos módulos periféricos."
        }
      },
      {
        src: "assets/img/projetos/esp32-05.jpg",
        larga: false,
        alt: {
          en: "3D CAD modeling and slicing of the cylindrical enclosures in PLA for 3D printing",
          fr: "Modélisation CAO 3D et tranchage des boîtiers cylindriques en PLA pour impression 3D",
          pt: "Modelagem 3D e fatiamento das carcaças cilíndricas em PLA para impressão 3D"
        },
        legenda: {
          en: "3D modeling and slicing (PLA) of the custom ergonomic cylindrical enclosures and LCD top cover.",
          fr: "Modélisation et préparation à l'impression 3D (PLA) des boîtiers cylindriques ergonomiques et du couvercle LCD.",
          pt: "Modelagem e fatiamento 3D (em filamento PLA) das carcaças cilíndricas ergonômicas e da tampa com recorte para o LCD."
        }
      }
    ],
    textos: {
      en: {
        titulo: "Spider Sense: Wireless Reflex & Reaction Time Testing Device",
        resumo: "Interactive wireless system based on ESP32 microcontrollers and the ESP-NOW protocol designed to measure human reaction time for physiotherapy, motor rehabilitation, and athletic training.",
        altCapa: "Final prototype of the Spider Sense wireless reflex testing device",
        tags: ["ESP32", "C/C++", "ESP-NOW", "Embedded Systems", "3D Printing"],
        funcao: "Hardware, Firmware & 3D Enclosure Co-Developer",
        periodo: "2024 – 2025",
        ferramentas: "ESP32 WROOM, Arduino UNO, C/C++, ESP-NOW, LCD, 3D Printing (PLA)",
        contexto: "PET EEL Project — UFSC (with Ana Luiza Justo Imasaki)",
        contextoTecnico: [
          "Developed within the Electrical Engineering Tutorial Education Program (PET EEL — UFSC) in partnership with Ana Luiza Justo Imasaki, Spider Sense is an interactive reflex assessment device aimed at physiotherapy, motor rehabilitation, physical education, and high-performance sports training.",
          "The architecture comprises six modules: one central Master station (equipped with an LCD display and a start/reset button) and five autonomous interactive button modules (Red, Yellow, Green, Blue, and White). When a test cycle starts, the system waits a randomized interval (2 to 5 seconds) and lights up one of the five remote modules. Across 5 consecutive rounds, the firmware records the exact reaction time for each stimulus, computes the average response time, and classifies the user's performance into Gold (< 0.5 s), Silver (0.5 s – 1.0 s), or Bronze (1.0 s – 2.0 s) tiers.",
          "The engineering methodology followed three progressive stages: (1) an initial wired Minimum Viable Product (MVP) built on an Arduino UNO to validate stimulus randomization and timing logic; (2) migration to 30-pin ESP32 WROOM microcontrollers communicating wirelessly via the ESP-NOW protocol (MAC-address peer-to-peer pairing in WiFi_STA mode), eliminating physical cables and ensuring low latency without requiring an external Wi-Fi router; and (3) custom 3D-printed cylindrical PLA enclosures housing standalone battery power circuits and voltage regulators."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Block diagram of the Spider Sense wireless architecture",
          descSvg: "The Master ESP32 coordinates the LCD and Reset button and communicates via ESP-NOW with the 5 wireless Slave ESP32 button modules.",
          bloco1Titulo: "Start / Reset & LCD",
          bloco1Sub: "user interface & score",
          bloco2Titulo: "5 Wireless Nodes",
          bloco2Sub: "Slave ESP32 + LED + Button",
          blocoCentralTitulo: "Master ESP32",
          blocoCentralSub: "ESP-NOW wireless protocol",
          blocoSaidaTitulo: "Performance Tier",
          blocoSaidaSub: "Gold (<0.5s) / Silver / Bronze",
          legenda: "System architecture: Master ESP32 node communicating wirelessly via ESP-NOW with the 5 autonomous button/LED slave nodes."
        },
        resultados: [
          { metrica: "System Architecture", valor: "1 Master + 5 Wireless Nodes", obs: "30-pin ESP32 WROOM microcontrollers" },
          { metrica: "Wireless Protocol", valor: "ESP-NOW (2.4 GHz)", obs: "Direct MAC peer-to-peer, router-free, low latency" },
          { metrica: "Test Cycle & Stimulus Delay", valor: "5 rounds (2 to 5 s random)", obs: "Prevents user anticipation and memorization" },
          { metrica: "Performance Classification", valor: "Gold < 0.5s | Silver 0.5–1s | Bronze 1–2s", obs: "Automatic average calculation over 5 rounds" }
        ]
      },
      fr: {
        titulo: "Spider Sense : Dispositif Sans Fil de Test de Réflexes et Temps de Réaction",
        resumo: "Système interactif sans fil basé sur des microcontrôleurs ESP32 et le protocole ESP-NOW pour mesurer le temps de réaction en kinésithérapie, rééducation motrice et entraînement sportif.",
        altCapa: "Prototype final du dispositif sans fil de test de réflexes Spider Sense",
        tags: ["ESP32", "C/C++", "ESP-NOW", "Systèmes embarqués", "Impression 3D"],
        funcao: "Co-concepteur Matériel, Firmware et Modélisation 3D",
        periodo: "2024 – 2025",
        ferramentas: "ESP32 WROOM, Arduino UNO, C/C++, ESP-NOW, LCD, Impression 3D (PLA)",
        contexto: "Projet PET EEL — UFSC (avec Ana Luiza Justo Imasaki)",
        contextoTecnico: [
          "Développé au sein du Programme d'Éducation Tutorielle du Génie Électrique (PET EEL — UFSC) en binôme avec Ana Luiza Justo Imasaki, Spider Sense est un dispositif interactif d'évaluation des réflexes conçu pour la kinésithérapie, la rééducation motrice, l'éducation physique et l'entraînement d'athlètes.",
          "L'architecture repose sur six modules : une station centrale Maître (équipée d'un écran LCD et d'un bouton d'initialisation/reset) et cinq modules de boutons lumineux autonomes (Rouge, Jaune, Vert, Bleu et Blanc). Après le démarrage, le système attend un délai aléatoire (2 à 5 secondes) avant d'allumer l'un des cinq modules. Sur un cycle de 5 manches consécutives, le micrologiciel mesure le temps de réaction de chaque essai, calcule la moyenne et classe la performance en Or (< 0,5 s), Argent (0,5 s – 1,0 s) ou Bronze (1,0 s – 2,0 s).",
          "Le développement s'est déroulé en trois phases : (1) validation d'un prototype filaire initial (MVP) sur Arduino UNO ; (2) migration vers des microcontrôleurs ESP32 WROOM (30 broches) communiquant sans fil via le protocole ESP-NOW (appairage direct par adresse MAC sans routeur Wi-Fi externe, garantissant une faible latence et une portabilité totale) ; et (3) conception et impression 3D en PLA de boîtiers cylindriques ergonomiques intégrant batteries et régulateurs de tension."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Schéma fonctionnel de l'architecture sans fil Spider Sense",
          descSvg: "L'ESP32 Maître gère l'écran LCD et le bouton Reset et communique via ESP-NOW avec les 5 modules esclaves ESP32.",
          bloco1Titulo: "Bouton Reset & LCD",
          bloco1Sub: "interface et affichage",
          bloco2Titulo: "5 Modules Sans Fil",
          bloco2Sub: "ESP32 Esclave + LED + Bouton",
          blocoCentralTitulo: "ESP32 Maître",
          blocoCentralSub: "protocole sans fil ESP-NOW",
          blocoSaidaTitulo: "Classification",
          blocoSaidaSub: "Or (<0,5s) / Argent / Bronze",
          legenda: "Architecture du système : station maître ESP32 communiquant sans fil via ESP-NOW avec 5 modules autonomes."
        },
        resultados: [
          { metrica: "Architecture du système", valor: "1 Maître + 5 Modules sans fil", obs: "Microcontrôleurs ESP32 WROOM 30 broches" },
          { metrica: "Protocole de communication", valor: "ESP-NOW (2,4 GHz)", obs: "Pair-à-pair par adresse MAC, sans routeur Wi-Fi" },
          { metrica: "Cycle d'essai et délai", valor: "5 manches (2 à 5 s aléatoire)", obs: "Empêche l'anticipation par l'utilisateur" },
          { metrica: "Paliers de performance", valor: "Or < 0,5s | Argent 0,5–1s | Bronze 1–2s", obs: "Moyenne calculée automatiquement sur 5 essais" }
        ]
      },
      pt: {
        titulo: "Spider Sense: Dispositivo Sem Fio para Teste de Reação e Reflexo",
        resumo: "Sistema interativo sem fio baseado em microcontroladores ESP32 e comunicação ESP-NOW para medição de tempo de reação com aplicação em fisioterapia, reabilitação e treinamento esportivo.",
        altCapa: "Protótipo final do dispositivo sem fio de teste de reflexos Spider Sense",
        tags: ["ESP32", "C/C++", "ESP-NOW", "Embarcados", "Impressão 3D"],
        funcao: "Coautor — Hardware, Firmware e Modelagem 3D",
        periodo: "2024 – 2025",
        ferramentas: "ESP32 WROOM, Arduino UNO, C/C++, ESP-NOW, LCD, Impressão 3D (PLA)",
        contexto: "Projeto PET EEL — UFSC (com Ana Luiza Justo Imasaki)",
        contextoTecnico: [
          "Desenvolvido no grupo PET EEL (Programa de Educação Tutorial da Engenharia Elétrica da UFSC) em parceria com Ana Luiza Justo Imasaki, o Spider Sense é um dispositivo interativo de avaliação de reflexos voltado às áreas de fisioterapia, reabilitação motora, educação física e treinamento de atletas.",
          "O sistema é composto por seis módulos: uma estação central Mestre (com botão de inicialização/reset e display LCD integrado) e cinco módulos interativos autônomos (Vermelho, Amarelo, Verde, Azul e Branco). Ao pressionar o botão iniciar, o sistema aguarda um intervalo aleatório entre 2 e 5 segundos e aciona o LED de um dos cinco módulos. Ao longo de 5 rodadas consecutivas, o dispositivo mede o tempo exato de resposta até o acionamento do botão correspondente, calcula a média final e classifica o desempenho em Ouro (< 0,5 s), Prata (0,5 s – 1,0 s) ou Bronze (1,0 s – 2,0 s).",
          "A metodologia de engenharia foi dividida em três etapas: (1) construção de um Minimum Viable Product (MVP) cabeado utilizando Arduino UNO para validação da lógica de sorteio e temporização; (2) migração para microcontroladores ESP32 WROOM de 30 pinos com comunicação sem fio via protocolo ESP-NOW (pareamento direto por endereço MAC em modo WiFi_STA), eliminando cabos entre os módulos e garantindo baixa latência sem depender de roteador Wi-Fi externo; e (3) modelagem e impressão 3D em filamento PLA das carcaças cilíndricas ergonômicas com alimentação autônoma por bateria e reguladores de tensão."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Diagrama de blocos da arquitetura sem fio do Spider Sense",
          descSvg: "A ESP32 Mestre gerencia o display LCD e o botão Reset e se comunica via ESP-NOW com os 5 módulos escravos.",
          bloco1Titulo: "Reset e Display LCD",
          bloco1Sub: "interface e instruções",
          bloco2Titulo: "5 Módulos Sem Fio",
          bloco2Sub: "ESP32 Servo + LED + Botão",
          blocoCentralTitulo: "ESP32 Mestre",
          blocoCentralSub: "comunicação sem fio ESP-NOW",
          blocoSaidaTitulo: "Placar e Nível",
          blocoSaidaSub: "Ouro (<0,5s) / Prata / Bronze",
          legenda: "Arquitetura do Spider Sense: comunicação sem fio via protocolo ESP-NOW entre a ESP32 Mestre e os 5 módulos autônomos."
        },
        resultados: [
          { metrica: "Arquitetura do sistema", valor: "1 Mestre + 5 Módulos sem fio", obs: "Microcontroladores ESP32 WROOM (30 pinos)" },
          { metrica: "Protocolo de comunicação", valor: "ESP-NOW (2,4 GHz)", obs: "Pareamento direto via MAC sem roteador Wi-Fi" },
          { metrica: "Ciclo de teste e intervalo", valor: "5 rodadas (2 a 5 s aleatório)", obs: "Medição em ms/segundos com média ao final" },
          { metrica: "Classificação de desempenho", valor: "Ouro < 0,5s | Prata 0,5–1s | Bronze 1–2s", obs: "Acima de 2,0s de tempo médio indica fim de jogo" }
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
