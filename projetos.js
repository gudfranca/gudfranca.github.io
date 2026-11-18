/* =========================================================
   projetos.js | Base de Dados de Projetos (EN, FR, PT)
   ========================================================= */
window.PROJETOS = [
  {
    id: "esp32",
    ordem: 1,
    destaque: true,
    categoria: "Embedded Systems & IoT",
    imagemCapa: "assets/img/projetos/esp32-capa.jpeg",
    video: {
      url: "",
      tipo: "youtube",
      poster: "assets/img/projetos/esp32-capa.jpeg"
    },
    links: {
      github: "",
      relatorio: "",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/esp32-011.jpeg",
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
        src: "assets/img/projetos/esp32-01.jpeg",
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
        src: "assets/img/projetos/esp32-02.jpeg",
        larga: false,
        alt: {
          en: "First wireless tests of Spider Sense showing the master module with LCD display alongside the yellow and red wireless button modules",
          fr: "Premiers tests sans fil du Spider Sense montrant le module maître avec écran LCD aux côtés des modules de boutons jaune et rouge",
          pt: "Primeiros testes wireless do Spider Sense mostrando o módulo mestre com display LCD ao lado dos módulos de botões amarelo e vermelho"
        },
        legenda: {
          en: "First wireless tests: master module with integrated LCD display and illuminated start button communicating via ESP-NOW with the first two autonomous modules (yellow and red).",
          fr: "Premiers tests sans fil : module maître avec écran LCD intégré et bouton lumineux communiquant via ESP-NOW avec les deux premiers modules autonomes (jaune et rouge).",
          pt: "Primeiros testes wireless: módulo mestre com display LCD integrado e botão iluminado comunicando-se via ESP-NOW com os dois primeiros módulos autônomos (amarelo e vermelho)."
        }
      },
      {
        src: "assets/img/projetos/esp32-03.jpg",
        larga: false,
        alt: {
          en: "3D slicing of the master module top cover with cutouts for the LCD display and reset button",
          fr: "Tranchage 3D du couvercle supérieur du module maître avec découpes pour l'écran LCD et le bouton reset",
          pt: "Modelagem e fatiamento 3D da tampa superior do módulo mestre com recortes para o display LCD e botão de reset"
        },
        legenda: {
          en: "3D modeling and slicing (Anycubic i3 Mega S / PLA, 32.66 g, 2h43m) of the top cover with cutouts for the LCD screen and start/reset button.",
          fr: "Modélisation et tranchage 3D (Anycubic i3 Mega S / PLA, 32,66 g, 2h43m) du couvercle supérieur avec découpes pour l'écran LCD et le bouton.",
          pt: "Modelagem e fatiamento 3D em filamento PLA (32,66 g, tempo estimado de 2h43min) da tampa superior com recortes para o display LCD e o botão de reset."
        }
      },
      {
        src: "assets/img/projetos/esp32-04.jpg",
        larga: false,
        alt: {
          en: "3D slicing of the master module top cover with cutouts for the LCD display and reset button",
          fr: "Tranchage 3D du couvercle supérieur du module maître avec découpes pour l'écran LCD et le bouton reset",
          pt: "Modelagem e fatiamento 3D da tampa superior do módulo mestre com recortes para o display LCD e botão de reset"
        },
        legenda: {
          en: "3D modeling and slicing of the top cover with cutouts for the LCD screen and start/reset button.",
          fr: "Modélisation et tranchage 3D du couvercle supérieur avec découpes pour l'écran LCD et le bouton.",
          pt: "Modelagem e fatiamento 3D em filamento PLA da tampa superior com recortes para o display LCD e o botão de reset."
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
          bloco1Titulo: "Reset & LCD",
          bloco1Sub: "user interface",
          bloco2Titulo: "5 Wireless Nodes",
          bloco2Sub: "ESP32 + LED + Button",
          blocoCentralTitulo: "Master ESP32",
          blocoCentralSub: "ESP-NOW 2.4 GHz",
          blocoSaidaTitulo: "Score & Tier",
          blocoSaidaSub: "Gold / Silver / Bronze",
          legenda: "Interactive architecture diagram — hover or click each block to inspect the hardware and communication flow.",
          dicaPadrao: "Hover or tap any block above to inspect its hardware role and signal flow.",
          detalhes: {
            b1: "Master Interface: The start/reset button initiates the 5-round test cycle while the 16x2 LCD guides the user and displays real-time status messages.",
            b2: "5 Autonomous Slave Nodes: Each cylindrical 3D-printed module houses a 30-pin ESP32 WROOM, battery power circuit, LED, and arcade button, measuring response time locally in milliseconds via millis().",
            bc: "Master ESP32 Coordinator: Randomly selects one of the 5 nodes after a 2–5 s delay, transmits the start packet via ESP-NOW (peer-to-peer MAC pairing), and receives the elapsed reaction time.",
            bs: "Performance Output: Computes the 5-round mean reaction time with 6-decimal precision and categorizes results into Gold (< 0.5 s), Silver (0.5–1.0 s), Bronze (1.0–2.0 s), or Game Over (> 2.0 s)."
          }
        },
        resultados: [
          { metrica: "System Architecture", valor: "1 Master + 5 Wireless Nodes", obs: "30-pin ESP32 WROOM microcontrollers" },
          { metrica: "Wireless Protocol", valor: "ESP-NOW (2.4 GHz)", obs: "Direct MAC peer-to-peer, router-free, low latency" },
          { metrica: "Test Cycle & Stimulus Delay", valor: "5 rounds (2 to 5 s random)", obs: "Prevents user anticipation and memorization" },
          { metrica: "Performance Classification", valor: "Gold < 0.5s | Silver 0.5–1s | Bronze 1–2s", obs: "Automatic average calculation over 5 rounds" }
        ],
        conclusao: [
          "The development of Spider Sense enabled the practical integration of microcontrollers, electronic power circuits, embedded C/C++ programming, and 3D CAD modeling into a portable interactive device.",
          "Evolving the project from an initial wired Arduino UNO prototype (MVP) to a distributed wireless architecture with ESP32 and ESP-NOW eliminated physical cable constraints, improved response dynamics, and ensured full autonomy across modules.",
          "With its progressive multi-button logic, custom 3D-printed enclosures, and quantitative reaction-time classification, Spider Sense stands as a versatile tool ready for practical applications in physiotherapy, motor rehabilitation, physical education, and athletic reflex training."
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
          bloco1Titulo: "Reset et Écran LCD",
          bloco1Sub: "interface utilisateur",
          bloco2Titulo: "5 Modules Sans Fil",
          bloco2Sub: "ESP32 + LED + Bouton",
          blocoCentralTitulo: "ESP32 Maître",
          blocoCentralSub: "ESP-NOW 2,4 GHz",
          blocoSaidaTitulo: "Score et Niveau",
          blocoSaidaSub: "Or / Argent / Bronze",
          legenda: "Schéma d'architecture interactif — survolez ou cliquez sur chaque bloc pour inspecter son rôle matériel.",
          dicaPadrao: "Survolez ou touchez un bloc ci-dessus pour afficher son rôle technique et le flux de signaux.",
          detalhes: {
            b1: "Interface Maître : Le bouton Reset lance le cycle de 5 manches tandis que l'écran LCD intégré guide l'utilisateur et affiche les instructions en temps réel.",
            b2: "5 Modules Esclaves Autonomes : Chaque boîtier imprimé en 3D intègre un ESP32 WROOM, une batterie, une LED et un bouton, mesurant le temps de réaction localement via millis().",
            bc: "Coordinateur ESP32 Maître : Sélectionne aléatoirement l'un des 5 modules après un délai de 2 à 5 s, envoie le signal via ESP-NOW (appairage MAC direct) et reçoit le temps mesuré.",
            bs: "Évaluation des Performances : Calcule le temps moyen sur 5 manches et classe le résultat en Or (< 0,5 s), Argent (0,5–1,0 s), Bronze (1,0–2,0 s) ou Défaite (> 2,0 s)."
          }
        },
        resultados: [
          { metrica: "Architecture du système", valor: "1 Maître + 5 Modules sans fil", obs: "Microcontrôleurs ESP32 WROOM 30 broches" },
          { metrica: "Protocole de communication", valor: "ESP-NOW (2,4 GHz)", obs: "Pair-à-pair par adresse MAC, sans routeur Wi-Fi" },
          { metrica: "Cycle d'essai et délai", valor: "5 manches (2 à 5 s aléatoire)", obs: "Empêche l'anticipation par l'utilisateur" },
          { metrica: "Paliers de performance", valor: "Or < 0,5s | Argent 0,5–1s | Bronze 1–2s", obs: "Moyenne calculée automatiquement sur 5 essais" }
        ],
        conclusao: [
          "Le développement de Spider Sense a permis d'appliquer de manière concrète les concepts liés aux microcontrôleurs, aux circuits électroniques d'alimentation, à la programmation embarquée C/C++ et à la modélisation 3D au sein d'un système interactif complet.",
          "L'évolution du projet, depuis le premier prototype filaire (MVP) sous Arduino UNO jusqu'à la transition vers l'ESP32 avec le protocole ESP-NOW, a abouti à une architecture sans fil autonome, portable et à faible latence.",
          "Grâce à sa logique multi-boutons évolutive et à ses boîtiers ergonomiques imprimés en 3D, Spider Sense constitue un outil fonctionnel et prometteur pour la kinésithérapie, l'éducation physique et l'entraînement des réflexes chez les athlètes."
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
          bloco2Sub: "ESP32 + LED + Botão",
          blocoCentralTitulo: "ESP32 Mestre",
          blocoCentralSub: "ESP-NOW 2,4 GHz",
          blocoSaidaTitulo: "Placar e Nível",
          blocoSaidaSub: "Ouro / Prata / Bronze",
          legenda: "Diagrama interativo do Spider Sense — passe o cursor ou toque em cada bloco para inspecionar o funcionamento.",
          dicaPadrao: "Passe o cursor ou toque em qualquer bloco acima para inspecionar o papel do hardware e o fluxo de sinais.",
          detalhes: {
            b1: "Interface Mestre: O botão Reset inicia a sequência de 5 rodadas enquanto o display LCD integrado orienta o usuário com mensagens de status em tempo real.",
            b2: "5 Módulos Escravos Autônomos: Cada carcaça impressa em 3D abriga uma ESP32 WROOM, bateria, regulador, LED e botão arcade, medindo o tempo de reação via millis().",
            bc: "Coordenação ESP32 Mestre: Sorteia aleatoriamente um dos 5 módulos após intervalo de 2 a 5 s, envia o pacote de acionamento via protocolo ESP-NOW (MAC peer-to-peer) e recebe o tempo medido.",
            bs: "Placar e Classificação: Calcula a média das 5 rodadas com 6 casas decimais e classifica o desempenho em Ouro (< 0,5 s), Prata (0,5–1,0 s), Bronze (1,0–2,0 s) ou Fim de Jogo (> 2,0 s)."
          }
        },
        resultados: [
          { metrica: "Arquitetura do sistema", valor: "1 Mestre + 5 Módulos sem fio", obs: "Microcontroladores ESP32 WROOM (30 pinos)" },
          { metrica: "Protocolo de comunicação", valor: "ESP-NOW (2,4 GHz)", obs: "Pareamento direto via MAC sem roteador Wi-Fi" },
          { metrica: "Ciclo de teste e intervalo", valor: "5 rodadas (2 a 5 s aleatório)", obs: "Medição em ms/segundos com média ao final" },
          { metrica: "Classificação de desempenho", valor: "Ouro < 0,5s | Prata 0,5–1s | Bronze 1–2s", obs: "Acima de 2,0s de tempo médio indica fim de jogo" }
        ],
        conclusao: [
          "O desenvolvimento do Spider Sense permitiu a aplicação prática e integrada de conceitos de microcontroladores, circuitos eletrônicos de alimentação, programação embarcada em C/C++ e modelagem 3D, resultando em um dispositivo interativo portátil e autônomo.",
          "A evolução do projeto — desde a validação inicial do MVP cabeado com Arduino UNO até a transição definitiva para a ESP32 utilizando o protocolo ESP-NOW — viabilizou uma arquitetura totalmente sem fio, dinâmica e de baixa latência.",
          "A estruturação progressiva do código para múltiplos botões, aliada às carcaças ergonômicas impressas em 3D e ao sistema de classificação por níveis, consolida o Spider Sense como uma ferramenta promissora para aplicações reais em fisioterapia, reabilitação motora, educação física e treinamento de reflexos em atletas."
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
      github: "",
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
          legenda: "Interactive pipeline diagram — hover or click each block to inspect the signal processing stages.",
          dicaPadrao: "Hover or tap any block above to inspect its role in the synchrophasor analysis pipeline.",
          detalhes: {
            b1: "Data Acquisition: Synchronized Phasor Measurement Units (PMUs) installed across the Brazilian grid (MedFasee) record voltage and frequency phasors via GPS time-stamping.",
            b2: "Signal Conditioning: Removal of missing samples, detrending, and band-pass filtering (0.1 – 2.0 Hz) to isolate electromechanical oscillation modes.",
            bc: "Modal & Spectral Estimation: Python and MATLAB routines compute power spectral density and modal parameters during system disturbances.",
            bs: "Stability Assessment: Identification of dominant oscillation frequencies and damping ratios to support wide-area power system monitoring (WAMS)."
          }
        },
        resultados: [
          { metrica: "Frequency band analyzed", valor: "0.1 – 2.0 Hz", obs: "Electromechanical oscillation modes" },
          { metrica: "Data source", valor: "PMU / MedFasee", obs: "Wide-area synchronized measurements" },
          { metrica: "Processing tools", valor: "Python & MATLAB", obs: "Automated signal analysis scripts" }
        ],
        conclusao: [
          "Processing synchronized phasor measurements from the MedFasee network provides clear visibility into the dynamic behavior of the Brazilian National Interconnected System (SIN).",
          "Combining Python and MATLAB signal processing routines enables accurate identification of low-frequency electromechanical modes and damping ratios, contributing directly to power grid dynamic stability monitoring."
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
          blocoCentralSub: "analyse spectrale",
          blocoSaidaTitulo: "Modes Réseau",
          blocoSaidaSub: "fréquence / amortissement",
          legenda: "Schéma interactif — survolez ou cliquez sur chaque bloc pour inspecter les étapes du traitement.",
          dicaPadrao: "Survolez ou touchez un bloc ci-dessus pour inspecter son rôle dans l'analyse des synchrophaseurs.",
          detalhes: {
            b1: "Acquisition PMU : Les unités de mesure de phaseurs synchronisés du réseau MedFasee enregistrent la tension et la fréquence avec synchronisation GPS.",
            b2: "Conditionnement du Signal : Suppression des tendances et filtrage passe-bande (0,1 – 2,0 Hz) pour isoler les oscillations électromécaniques.",
            bc: "Analyse Spectrale et Modale : Scripts Python et MATLAB dédiés à l'extraction des composantes fréquentielles lors de perturbations sur le réseau.",
            bs: "Suivi de la Stabilité : Détermination des fréquences dominantes et des taux d'amortissement pour la surveillance dynamique du système électrique."
          }
        },
        resultados: [
          { metrica: "Bande de fréquence analysée", valor: "0,1 – 2,0 Hz", obs: "Modes d'oscillations électromécaniques" },
          { metrica: "Source de données", valor: "PMU / MedFasee", obs: "Mesures synchronisées à grande échelle" },
          { metrica: "Outils de traitement", valor: "Python & MATLAB", obs: "Scripts d'analyse automatisée" }
        ],
        conclusao: [
          "L'exploitation des mesures de synchrophaseurs du réseau MedFasee permet d'observer finement le comportement dynamique du système électrique brésilien (SIN).",
          "L'intégration d'outils d'analyse sous Python et MATLAB assure une caractérisation fiable des modes d'oscillation basse fréquence et renforce le suivi de la stabilité dynamique des grands réseaux."
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
          legenda: "Diagrama interativo — passe o cursor ou toque em cada bloco para ver os detalhes do processamento.",
          dicaPadrao: "Passe o cursor ou toque em qualquer bloco acima para inspecionar cada etapa da análise fasorial.",
          detalhes: {
            b1: "Aquisição Fasorial: PMUs instaladas no Sistema Interligado Nacional (projeto MedFasee) registram fasores de tensão e frequência sincronizados via GPS.",
            b2: "Condicionamento de Sinais: Limpeza de séries temporais, remoção de tendência e filtragem passa-faixa (0,1 a 2,0 Hz) para isolar modos eletromecânicos.",
            bc: "Processamento Python / MATLAB: Aplicação de métodos espectrais e modais para detectar oscilações de baixa frequência em eventos do sistema.",
            bs: "Diagnóstico da Rede: Extração da frequência dominante e taxa de amortecimento para monitoramento da estabilidade dinâmica do SIN."
          }
        },
        resultados: [
          { metrica: "Faixa de frequência analisada", valor: "0,1 – 2,0 Hz", obs: "Modos de oscilação eletromecânica" },
          { metrica: "Fonte de dados", valor: "PMU / MedFasee", obs: "Medições fasoriais sincronizadas" },
          { metrica: "Ferramentas de análise", valor: "Python e MATLAB", obs: "Scripts de processamento de sinais" }
        ],
        conclusao: [
          "O processamento das medições fasoriais sincronizadas da rede MedFasee permite observar com alta precisão o comportamento dinâmico do Sistema Interligado Nacional (SIN) diante de perturbações.",
          "A combinação de rotinas em Python e MATLAB viabiliza a identificação consistente dos modos de oscilação eletromecânica de baixa frequência e de seu amortecimento, apoiando o monitoramento da estabilidade de sistemas de potência."
        ]
      }
    }
  }
];
