/* =========================================================
   projetos.js | Base de Dados de Projetos e Experiências (EN, FR, PT)
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
      relatorio: "assets/relatorio-spider-sense.pdf",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/esp32-01.jpeg",
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
        src: "assets/img/projetos/esp32-02.jpeg",
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
        src: "assets/img/projetos/esp32-03.jpeg",
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
        src: "assets/img/projetos/esp32-04.jpg",
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
        src: "assets/img/projetos/esp32-05.jpg",
        larga: false,
        alt: {
          en: "3D slicing of the cylindrical base enclosure that houses the internal electronics and battery",
          fr: "Tranchage 3D de la base cylindrique abritant l'électronique interne et la batterie",
          pt: "Modelagem e fatiamento 3D da base cilíndrica das carcaças para abrigar o hardware e a bateria"
        },
        legenda: {
          en: "3D modeling and slicing (Anycubic i3 Mega S / PLA, 53.12 g, 5h12m) of the ergonomic cylindrical base designed to house the ESP32 and battery circuit.",
          fr: "Modélisation et tranchage 3D (Anycubic i3 Mega S / PLA, 53,12 g, 5h12m) de la base cylindrique ergonomique abritant l'ESP32 et la batterie.",
          pt: "Modelagem e fatiamento 3D em filamento PLA (53,12 g, tempo estimado de 5h12min) da base cilíndrica ergonômica projetada para abrigar o circuito e a bateria."
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
    categoria: "Power Systems & Synchrophasors",
    imagemCapa: "assets/img/projetos/medfasee-capa",
    video: {
      url: "",
      tipo: "youtube",
      poster: "assets/img/projetos/medfasee-capa"
    },
    links: {
      github: "",
      relatorio: "",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/medfasee-01",
        larga: true,
        alt: {
          en: "Map of the Brazilian National Interconnected System (SIN) monitored via synchronized phasor measurement units",
          fr: "Carte du Système Interconnecté National brésilien (SIN) surveillé par unités de mesure de phaseurs synchronisés (PMU)",
          pt: "Mapa do Sistema Interligado Nacional (SIN) monitorado por Unidades de Medição Fasorial Sincronizada (PMUs)"
        },
        legenda: {
          en: "Brazilian National Interconnected System (SIN): wide-area monitoring context for PMU power quality assessment and electromechanical oscillation detection.",
          fr: "Système Interconnecté National brésilien (SIN) : cadre de surveillance étendue (WAMS) pour la qualité de l'énergie et la détection d'oscillations par PMU.",
          pt: "Sistema Interligado Nacional (SIN): contexto de monitoramento fasorial em larga escala para avaliação de QEE e detecção de oscilações via PMUs."
        }
      },
      {
        src: "assets/img/projetos/medfasee-02.png",
        larga: false,
        alt: {
          en: "High-resolution PMU frequency event plot generated in MedPlot evaluating ONS operational thresholds",
          fr: "Graphique haute résolution d'un événement de fréquence PMU sous MedPlot évaluant les limites opérationnelles de l'ONS",
          pt: "Gráfico de evento de frequência em PMU gerado no MedPlot avaliando os critérios operacionais do ONS"
        },
        legenda: {
          en: "Phase 1 — MedFasee (Power Quality): 60 phasors/s frequency event inspection in MedPlot against ONS grid compliance thresholds (59.8 Hz – 60.2 Hz, 50 ms limit).",
          fr: "Phase 1 — MedFasee (QEE) : Analyse d'un événement de fréquence (60 phaseurs/s) sous MedPlot selon les critères de conformité de l'ONS (59,8 – 60,2 Hz, limite de 50 ms).",
          pt: "Fase 1 — MedFasee (QEE): Inspeção de evento de frequência (60 fasores/s) no MedPlot frente aos critérios de conformidade do ONS (faixa de 59,8 a 60,2 Hz, limite de 50 ms)."
        }
      },
      {
        src: "assets/img/projetos/medfasee-03.png",
        larga: false,
        alt: {
          en: "Multiband power spectral density (PSD) segmentation across four frequency bands for oscillation analysis",
          fr: "Segmentation multibande de la densité spectrale de puissance (PSD) en quatre bandes de fréquence pour l'analyse d'oscillations",
          pt: "Segmentação multibanda da densidade espectral de potência (PSD) em quatro faixas de frequência para análise de oscilações"
        },
        legenda: {
          en: "Phase 2 — OpenWAMS: Multiband frequency segmentation (0.01–0.15 Hz, 0.15–1.0 Hz, 1.0–5.0 Hz, and > 5 Hz) used in RMS energy and Welch PSD oscillation detection.",
          fr: "Phase 2 — OpenWAMS : Découpage multibande (0,01–0,15 Hz ; 0,15–1,0 Hz ; 1,0–5,0 Hz et > 5 Hz) utilisé pour la détection par énergie RMS et PSD de Welch.",
          pt: "Fase 2 — OpenWAMS: Segmentação em quatro faixas de frequência (0,01–0,15 Hz; 0,15–1,0 Hz; 1,0–5,0 Hz e > 5 Hz) aplicada na detecção por energia RMS e PSD de Welch."
        }
      },
      {
        src: "assets/img/projetos/medfasee-04.png",
        larga: false,
        alt: {
          en: "Oscillation detection severity evaluation across frequency bands using real-world PMU measurements",
          fr: "Évaluation de la sévérité des oscillations par bande de fréquence à partir de mesures PMU réelles",
          pt: "Avaliação da presença e severidade de oscilações por faixa de frequência a partir de medições reais de PMU"
        },
        legenda: {
          en: "Phase 2 — OpenWAMS: Detection evaluation comparing moving-window RMS energy with information-theoretic Oscillation Presence Index (OPI) thresholds to suppress false alarms.",
          fr: "Phase 2 — OpenWAMS : Évaluation comparant l'énergie RMS en fenêtre glissante et l'indice OPI issu de la théorie de l'information afin de limiter les fausses alarmes.",
          pt: "Fase 2 — OpenWAMS: Avaliação de detecção comparando energia RMS em janela móvel e limiares do índice OPI (Teoria da Informação) para mitigar falsos positivos."
        }
      }
    ],
    textos: {
      en: {
        titulo: "Power Quality & Oscillation Detection in Synchrophasor Systems (MedFasee & OpenWAMS)",
        resumo: "Undergraduate research at LabPlan (UFSC) in collaboration with the Brazilian National System Operator (ONS), covering PMU-based Power Quality (QEE) compliance in wind farms and multiband electromechanical oscillation detection.",
        altCapa: "Synchrophasor power quality and oscillation monitoring in the Brazilian power grid",
        tags: ["Python", "Synchrophasors", "PMU", "Power Quality", "Signal Processing"],
        funcao: "Undergraduate Researcher (LabPlan – UFSC)",
        periodo: "Mar 2025 – Sep 2026",
        ferramentas: "Python, MedPlot, PMU Data (60 phasors/s), ONS VPN",
        contexto: "MedFasee (QEE) & OpenWAMS Projects — LabPlan / ONS",
        contextoTecnico: [
          "Conducted at the Electric Energy Systems Planning Laboratory (LabPlan – UFSC) in partnership with the Brazilian National System Operator (ONS), this research evolved across two complementary fronts in Wide Area Monitoring Systems (WAMS) using real-world Phasor Measurement Unit (PMU) data.",
          "### Phase 1 — MedFasee Project: Power Quality (QEE) Assessment",
          "During the initial phase within the MedFasee project, my activities focused on the monthly Power Quality (QEE) evaluation of wind power complexes and buses monitored by PMUs across Brazil's National Interconnected System (SIN). Accessing synchronized measurements at 60 phasors per second through the ONS VPN and visualizing waveforms in MedPlot, I analyzed key electrical variables including frequency, three-phase voltages (phases A, B, and C), active power, and reactive power.",
          "Using automated Python routines, I identified monthly grid events—characterized by abrupt or significant deviations in frequency, voltage, or power—compiled verification spreadsheets, and evaluated the most severe disturbances per PMU against ONS regulatory requirements. For instance, frequency compliance verification checks whether excursions below 59.8 Hz or above 60.2 Hz persist for longer than 50 ms (such as a 54 ms event in March 2025 reaching 59.72 Hz and 60.23 Hz without violating the duration limit). These findings were formalized into monthly technical reports delivered to the ONS.",
          "### Phase 2 — OpenWAMS Project: Electromechanical Oscillation Detection",
          "Subsequently, I joined the OpenWAMS project—also in partnership with the ONS—dedicated to researching and validating automated oscillation detection methods in synchrophasor time series. I worked with a Python-based Multiband RMS Energy Detector capable of batch offline analysis (zero-phase filtering), simulated real-time block processing (rectangular and Kaiser windows), and side-by-side comparisons, incorporating persistence timers and signal-specific threshold calibration across four standard frequency bands: very slow/governor modes (0.01–0.15 Hz), inter-area modes (0.15–1.0 Hz), local/intra-plant modes (1.0–5.0 Hz), and high-frequency/torsional modes (> 5 Hz).",
          "To overcome known limitations of conventional RMS-energy detectors—namely heavy reliance on historical baselining and false alarms triggered by sudden step changes or ramps in Band 1—my research also incorporated information-theoretic spectral methods from the recent IEEE literature, specifically the Oscillation Presence Index (OPI). Computed from the normalized Welch Power Spectral Density (PSD) and scaled Shannon entropy (spectral flatness), OPI provides a standardized 0-to-1 severity metric (with thresholds K1 = 0.35 and K2 = 0.65) independent of PMU location or variable scale."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Block diagram of the LabPlan PMU Power Quality and Oscillation Detection workflow",
          descSvg: "Synchronized PMU measurements from the SIN feed MedPlot QEE compliance checks and Python OpenWAMS multiband oscillation detectors.",
          bloco1Titulo: "PMUs / MedFasee",
          bloco1Sub: "60 phasors/s (SIN)",
          bloco2Titulo: "QEE & MedPlot",
          bloco2Sub: "ONS grid criteria",
          blocoCentralTitulo: "OpenWAMS (Python)",
          blocoCentralSub: "RMS & PSD / OPI",
          blocoSaidaTitulo: "Modes & Reports",
          blocoSaidaSub: "0.01 to > 5 Hz",
          legenda: "Interactive research workflow — hover or click each block to inspect how PMU measurements are processed across MedFasee and OpenWAMS.",
          dicaPadrao: "Hover or tap any block above to inspect each stage of the synchrophasor analysis workflow.",
          detalhes: {
            b1: "Synchronized Data Acquisition: PMUs distributed across Brazil's SIN record frequency, three-phase voltages (Va, Vb, Vc), and active/reactive power at 60 phasors/s, accessed securely via ONS VPN.",
            b2: "MedFasee Power Quality (QEE): Monthly event detection scripts and MedPlot inspection verify wind-farm and grid disturbances against ONS operational limits (e.g., 59.8–60.2 Hz for > 50 ms).",
            bc: "OpenWAMS Detection Engine: Python multiband filtering and RMS energy evaluation (offline & real-time modes with persistence timers), complemented by Welch PSD and Shannon-entropy OPI research.",
            bs: "Operational Diagnostics: Classification of sustained oscillations across 4 frequency bands (governor, inter-area, local, high-frequency) and delivery of monthly QEE compliance reports to the ONS."
          }
        },
        resultados: [
          { metrica: "PMU Sampling Resolution", valor: "60 phasors/s", obs: "Frequency, 3-phase voltages, active & reactive power (SIN)" },
          { metrica: "ONS Frequency QEE Criterion", valor: "59.8 – 60.2 Hz (≤ 50 ms)", obs: "Validated via MedPlot & Python monthly event reports" },
          { metrica: "Multiband RMS Detector", valor: "4 Frequency Bands (0.01 to > 5 Hz)", obs: "RMS windows: 120 s, 20 s, 2 s, 0.3 s; Offline/Real-time modes" },
          { metrica: "Spectral OPI Research Basis", valor: "0 – 1 Standardized Index", obs: "Welch PSD & spectral flatness (K1 = 0.35, K2 = 0.65); step-robust" }
        ],
        conclusao: [
          "Working across the MedFasee and OpenWAMS initiatives at LabPlan provided hands-on engineering experience with real-world synchrophasor measurements from the Brazilian National Interconnected System (SIN) under actual National System Operator (ONS) requirements.",
          "Evaluating Power Quality compliance at high temporal resolution established a solid foundation in PMU instrumentation and grid standards, while investigating multiband RMS energy and information-theoretic PSD/OPI methods demonstrated how robust signal processing enhances real-time dynamic stability monitoring and situational awareness in modern power grids."
        ]
      },
      fr: {
        titulo: "Qualité de l'Énergie et Détection d'Oscillations par Synchrophaseurs (MedFasee & OpenWAMS)",
        resumo: "Recherche universitaire au LabPlan (UFSC) en partenariat avec l'opérateur national brésilien (ONS), portant sur l'évaluation de la qualité de l'énergie (QEE) par PMU dans les parcs éoliens et la détection multibande d'oscillations électromécaniques.",
        altCapa: "Surveillance de la qualité de l'énergie et des oscillations par synchrophaseurs sur le réseau brésilien",
        tags: ["Python", "Synchrophaseurs", "PMU", "Qualité de l'énergie", "Traitement du signal"],
        funcao: "Chercheur en Cycle Ingénieur (LabPlan – UFSC)",
        periodo: "Mars 2025 – Sept 2026",
        ferramentas: "Python, MedPlot, Données PMU (60 phaseurs/s), VPN ONS",
        contexto: "Projets MedFasee (QEE) & OpenWAMS — LabPlan / ONS",
        contextoTecnico: [
          "Menés au Laboratoire de Planification des Systèmes d'Énergie Électrique (LabPlan – UFSC) en collaboration avec l'Opérateur National du Système Électrique brésilien (ONS), ces travaux de recherche se sont articulés autour de deux axes complémentaires en surveillance étendue (WAMS) basés sur des données réelles d'Unités de Mesure de Phaseurs Synchronisés (PMU).",
          "### Phase 1 — Projet MedFasee : Qualité de l'Énergie Électrique (QEE)",
          "Dans un premier temps, au sein du projet MedFasee, mes activités ont porté sur l'analyse mensuelle de la Qualité de l'Énergie Électrique (QEE) des parcs éoliens et des postes surveillés par PMU sur le Système Interconnecté National brésilien (SIN). À partir de mesures synchronisées à 60 phaseurs par seconde récupérées via le VPN de l'ONS et visualisées sous MedPlot, j'ai analysé la fréquence, les tensions triphasées (phases A, B et C) ainsi que les puissances active et réactive.",
          "À l'aide de routines Python d'identification d'événements, j'ai extrait les perturbations mensuelles majeures de chaque PMU, structuré les feuilles de vérification et contrôlé leur conformité par rapport aux exigences normatives de l'ONS — notamment la règle imposant que les excursions de fréquence hors de la plage 59,8 Hz – 60,2 Hz ne dépassent pas 50 ms (comme l'événement de 54 ms analysé en mars 2025 avec des extrema de 59,72 Hz et 60,23 Hz, validé conforme). Ces analyses ont alimenté les rapports techniques mensuels remis à l'ONS.",
          "### Phase 2 — Projet OpenWAMS : Détection d'Oscillations Électromécaniques",
          "J'ai ensuite intégré le projet OpenWAMS, également conduit avec l'ONS, dédié à l'identification automatisée d'oscillations basse fréquence dans les séries temporelles PMU. J'ai travaillé sur le paramétrage et l'évaluation d'un détecteur multibande d'énergie RMS développé en Python (modes OFFLINE à phase nulle, REALTIME par blocs avec fenêtres rectangulaire ou de Kaiser, et comparaison BOTH), intégrant un critère de persistance temporelle et une calibration des seuils sur quatre bandes de fréquence : régulateurs de vitesse / modes très lents (0,01–0,15 Hz), modes inter-zones (0,15–1,0 Hz), modes locaux (1,0–5,0 Hz) et haute fréquence / torsion (> 5 Hz).",
          "Afin de pallier les limites connues des détecteurs RMS classiques — forte dépendance aux données historiques et faux positifs en Bande 1 lors d'échelons ou de rampes — mes recherches se sont également appuyées sur des méthodes spectrales issues de la théorie de l'information (littérature IEEE récente), en particulier l'indice OPI (Oscillation Presence Index). Calculé à partir de la Densité Spectrale de Puissance (PSD de Welch) et de l'entropie de Shannon normalisée (planicité spectrale), l'OPI fournit une métrique standardisée entre 0 et 1 (seuils K1 = 0,35 et K2 = 0,65) robuste face aux transitoires non oscillatoires."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Schéma fonctionnel de l'analyse QEE MedFasee et détection d'oscillations OpenWAMS",
          descSvg: "Les mesures PMU du SIN alimentent l'évaluation QEE sous MedPlot et les moteurs de détection multibande OpenWAMS sous Python.",
          bloco1Titulo: "PMU / MedFasee",
          bloco1Sub: "60 phaseurs/s (SIN)",
          bloco2Titulo: "QEE & MedPlot",
          bloco2Sub: "critères de l'ONS",
          blocoCentralTitulo: "OpenWAMS (Python)",
          blocoCentralSub: "RMS & PSD / OPI",
          blocoSaidaTitulo: "Modes et Rapports",
          blocoSaidaSub: "0,01 à > 5 Hz",
          legenda: "Schéma interactif — survolez ou cliquez sur chaque bloc pour inspecter le traitement des mesures PMU.",
          dicaPadrao: "Survolez ou touchez un bloc ci-dessus pour inspecter chaque étape de la chaîne d'analyse.",
          detalhes: {
            b1: "Acquisition Synchronisée : Les PMU du SIN enregistrent la fréquence, les tensions triphasées et les puissances active/réactive à 60 phaseurs/s, accessibles via le VPN de l'ONS.",
            b2: "Qualité de l'Énergie (MedFasee) : Scripts de détection d'événements et graphiques MedPlot vérifiant la conformité des parcs éoliens aux seuils de l'ONS (ex. : 59,8–60,2 Hz pendant > 50 ms).",
            bc: "Moteur OpenWAMS : Filtrage multibande et calcul d'énergie RMS sous Python (modes hors ligne et temps réel avec persistance), complétés par l'étude spectrale PSD de Welch et indice OPI.",
            bs: "Diagnostic et Rapports : Identification des oscillations soutenues sur 4 bandes de fréquence et rédaction des rapports mensuels de conformité transmis à l'ONS."
          }
        },
        resultados: [
          { metrica: "Résolution des mesures PMU", valor: "60 phaseurs/s", obs: "Fréquence, tensions triphasées, puissances active et réactive" },
          { metrica: "Critère QEE de fréquence (ONS)", valor: "59,8 – 60,2 Hz (≤ 50 ms)", obs: "Vérifié via MedPlot et scripts mensuels d'événements" },
          { metrica: "Détecteur multibande RMS", valor: "4 bandes (0,01 à > 5 Hz)", obs: "Fenêtres RMS : 120 s, 20 s, 2 s, 0,3 s ; modes Offline/Realtime" },
          { metrica: "Base spectrale (indice OPI)", valor: "Indice normalisé 0 – 1", obs: "PSD de Welch et entropie spectrale (K1 = 0,35 ; K2 = 0,65)" }
        ],
        conclusao: [
          "Ma participation aux projets MedFasee et OpenWAMS au sein du LabPlan m'a permis d'acquérir une expérience rigoureuse sur des mesures réelles de synchrophaseurs issues du Système Interconnecté National brésilien (SIN) dans le cadre opérationnel de l'ONS.",
          "L'alliance entre l'évaluation réglementaire de la qualité de l'énergie et la recherche de méthodes avancées de détection d'oscillations (énergie RMS multibande et approche PSD/OPI) illustre le rôle déterminant du traitement du signal pour la stabilité dynamique et la supervision en temps réel des grands réseaux électriques."
        ]
      },
      pt: {
        titulo: "Qualidade de Energia e Detecção de Oscilações via Sincrofasores (MedFasee & OpenWAMS)",
        resumo: "Pesquisa de Iniciação Científica no LabPlan (UFSC) em parceria com o ONS, abrangendo a avaliação de Qualidade da Energia Elétrica (QEE) em PMUs no projeto MedFasee e a detecção multibanda de oscilações eletromecânicas no projeto OpenWAMS.",
        altCapa: "Monitoramento fasorial de qualidade de energia e oscilações no Sistema Interligado Nacional",
        tags: ["Python", "Sincrofasores", "PMU", "Qualidade de Energia", "Processamento de sinais"],
        funcao: "Pesquisador de Iniciação Científica (LabPlan – UFSC)",
        periodo: "Mar 2025 – Set 2026",
        ferramentas: "Python, MedPlot, Dados de PMU (60 fasores/s), VPN ONS",
        contexto: "Projetos MedFasee (QEE) e OpenWAMS — LabPlan / ONS",
        contextoTecnico: [
          "Desenvolvida no Laboratório de Planejamento de Sistemas de Energia Elétrica (LabPlan – UFSC) em parceria com o Operador Nacional do Sistema Elétrico (ONS), esta pesquisa abrangeu duas frentes complementares em sistemas de monitoramento fasorial de grandes áreas (WAMS) a partir de medições reais de PMUs (Phasor Measurement Units).",
          "### Fase 1 — Projeto MedFasee: Qualidade da Energia Elétrica (QEE)",
          "No ingresso ao laboratório, atuei na frente de Qualidade da Energia Elétrica (QEE) do projeto MedFasee, voltada à avaliação mensal do desempenho de parques eólicos e barramentos monitorados por PMUs espalhadas pelo Sistema Interligado Nacional (SIN). A partir de dados acessados via VPN do ONS em resolução de 60 fasores por segundo e plotados no software MedPlot, avaliei como variáveis como frequência, tensão nas fases A, B e C, potência ativa e potência reativa se comportam diante de perturbações na rede.",
          "Por meio de rotinas em Python para detecção automática de eventos mensais (alterações significativas de frequência, tensão ou potência), realizei a geração de planilhas de verificação e a análise dos eventos mais severos de cada PMU frente às normas e requisitos impostos pelo ONS — como o critério de que desvios de frequência fora da faixa de 59,8 Hz a 60,2 Hz não ultrapassem 50 ms (por exemplo, um evento de 54 ms analisado em março de 2025 com extremos de 59,72 Hz e 60,23 Hz, verificado em conformidade). Os resultados eram consolidados nos relatórios técnicos mensais entregues ao ONS.",
          "### Fase 2 — Projeto OpenWAMS: Identificação de Oscilações no SIN",
          "Na sequência, passei a atuar no projeto OpenWAMS, igualmente em conjunto com o ONS, focado na pesquisa e determinação de oscilações eletromecânicas em medições reais de sincrofasores. Trabalhei nos testes e na parametrização de um Detector Multibanda de Energia RMS em Python (operando em modo OFFLINE de fase zero, modo REALTIME em blocos com janelas retangular e de Kaiser, e modo comparativo BOTH), empregando temporizadores de persistência e calibração de limiares por tipo de sinal em quatro faixas de frequência: modos muito lentos / reguladores de velocidade (0,01–0,15 Hz), modos interárea (0,15–1,0 Hz), modos locais/intraplanta (1,0–5,0 Hz) e alta frequência / modos torsionais (> 5 Hz).",
          "Em paralelo, a pesquisa fundamentou-se em abordagens espectrais recentes baseadas em Teoria da Informação (literatura IEEE), em especial o Oscillation Presence Index (OPI). Calculado a partir da Densidade Espectral de Potência (PSD via método de Welch) e da entropia espectral de Shannon (planicidade espectral), o índice OPI estabelece uma métrica padronizada de 0 a 1 (com limiares recomendados K1 = 0,35 e K2 = 0,65), reduzindo a dependência de histórico prévio e mitigando falsos alarmes na Banda 1 causados por degraus ou rampas no sinal."
        ],
        diagrama: {
          mostrar: true,
          tituloSvg: "Diagrama de blocos das atividades de QEE (MedFasee) e detecção de oscilações (OpenWAMS)",
          descSvg: "As medições de PMUs do SIN alimentam as verificações de QEE no MedPlot e os detectores multibanda em Python do OpenWAMS.",
          bloco1Titulo: "PMUs / MedFasee",
          bloco1Sub: "60 fasores/s (SIN)",
          bloco2Titulo: "QEE e MedPlot",
          bloco2Sub: "critérios do ONS",
          blocoCentralTitulo: "OpenWAMS (Python)",
          blocoCentralSub: "RMS & PSD / OPI",
          blocoSaidaTitulo: "Modos e Relatórios",
          blocoSaidaSub: "0,01 a > 5 Hz",
          legenda: "Diagrama interativo do fluxo de trabalho — passe o cursor ou toque em cada bloco para inspecionar as etapas da pesquisa.",
          dicaPadrao: "Passe o cursor ou toque em qualquer bloco acima para inspecionar cada etapa das atividades no LabPlan.",
          detalhes: {
            b1: "Aquisição Fasorial Sincronizada: PMUs instaladas no Sistema Interligado Nacional (SIN) registram frequência, tensões trifásicas e potências ativa/reativa a 60 fasores/s, com acesso via VPN do ONS.",
            b2: "MedFasee (Qualidade de Energia): Identificação mensal de eventos via código e inspeção no MedPlot, verificando a conformidade de parques eólicos e barramentos frente aos parâmetros do ONS (ex.: 59,8–60,2 Hz por > 50 ms).",
            bc: "Motor OpenWAMS em Python: Filtragem multibanda e energia RMS (modos offline e tempo real com critério de persistência), somadas à pesquisa de detecção espectral por PSD de Welch e índice OPI.",
            bs: "Diagnóstico e Entregas: Caracterização de oscilações sustentadas nas 4 faixas de frequência (interárea, local e alta frequência) e elaboração de relatórios técnicos mensais ao ONS."
          }
        },
        resultados: [
          { metrica: "Taxa de amostragem das PMUs", valor: "60 fasores/s", obs: "Frequência, tensões trifásicas, potências ativa e reativa" },
          { metrica: "Critério de frequência QEE (ONS)", valor: "59,8 – 60,2 Hz (≤ 50 ms)", obs: "Verificado no MedPlot e consolidado em relatórios mensais" },
          { metrica: "Detector Multibanda RMS", valor: "4 faixas (0,01 a > 5 Hz)", obs: "Janelas RMS: 120 s, 20 s, 2 s e 0,3 s (Offline / Tempo real)" },
          { metrica: "Referência espectral (OPI)", valor: "Índice padronizado 0 – 1", obs: "PSD de Welch e entropia de Shannon (K1 = 0,35; K2 = 0,65)" }
        ],
        conclusao: [
          "A atuação integrada nos projetos MedFasee e OpenWAMS no LabPlan proporcionou contato direto com medições fasoriais reais do Sistema Interligado Nacional (SIN) e com os requisitos normativos e operacionais do ONS.",
          "A experiência na verificação de indicadores de Qualidade da Energia Elétrica consolidou a base prática em monitoramento por PMUs, enquanto a pesquisa e os testes de detecção multibanda de oscilações (energia RMS e abordagem espectral OPI) evidenciaram a importância do processamento de sinais para a supervisão dinâmica e a estabilidade dos sistemas de potência."
        ]
      }
    }
  },

  {
    id: "pet-eel",
    ordem: 3,
    destaque: false,
    categoria: "Academic Excellence & Leadership",
    imagemCapa: "assets/img/projetos/pet-capa.jpg",
    video: {
      url: "",
      tipo: "youtube",
      poster: ""
    },
    links: {
      github: "",
      relatorio: "",
      site: "https://peteel.ufsc.br/",
      demo: ""
    },
    galeria: [
      {
        src: "assets/img/projetos/pet-01.jpg",
        larga: true,
        alt: {
          en: "PET EEL UFSC members group photo from the 2024.1 semester",
          fr: "Photo de groupe des membres du PET EEL UFSC au semestre 2024.1",
          pt: "Foto oficial do grupo PET EEL UFSC no semestre 2024.1"
        },
        legenda: {
          en: "PET EEL group in 2024.1 — academic excellence group at UFSC built on teamwork, teaching, research, and extension.",
          fr: "Le groupe PET EEL en 2024.1 — groupe d'excellence académique de l'UFSC fondé sur le travail d'équipe, l'enseignement, la recherche et la vulgarisation.",
          pt: "Grupo PET EEL em 2024.1 — grupo de excelência acadêmica da UFSC pautado em trabalho em equipe, ensino, pesquisa e extensão."
        }
      },
      {
        src: "assets/img/projetos/pet-02.jpg",
        larga: false,
        alt: {
          en: "Gustavo Denardi França wearing the official PET EEL polo shirt",
          fr: "Gustavo Denardi França portant le polo officiel du PET EEL",
          pt: "Gustavo Denardi França vestindo a polo oficial do PET EEL"
        },
        legenda: {
          en: "Representing PET EEL during my tenure as a member, Management Coordinator, and event organizer.",
          fr: "Représentation du PET EEL au cours de mon parcours en tant que membre, coordinateur de gestion et organisateur d'événements.",
          pt: "Representando o PET EEL durante minha trajetória como membro, Coordenador de Gestão e organizador de eventos."
        }
      },
      {
        src: "assets/img/projetos/pet-03.jpg",
        larga: false,
        alt: {
          en: "Volta ao Mundo do Conhecimento (VMC 2025) technical study trip organized by PET EEL",
          fr: "Voyage technique Volta ao Mundo do Conhecimento (VMC 2025) organisé par le PET EEL",
          pt: "Viagem técnica Volta ao Mundo do Conhecimento (VMC 2025) organizada pelo PET EEL"
        },
        legenda: {
          en: "VMC 2025 (Volta ao Mundo do Conhecimento): the largest technical study trip of UFSC's Technological Center (CTC).",
          fr: "VMC 2025 (Volta ao Mundo do Conhecimento) : le plus grand voyage d'études techniques du Centre Technologique (CTC) de l'UFSC.",
          pt: "VMC 2025 (Volta ao Mundo do Conhecimento): a maior viagem técnica do Centro Tecnológico (CTC) da UFSC."
        }
      }
    ],
    textos: {
      en: {
        titulo: "PET EEL — Tutorial Education Program in Electrical Engineering",
        resumo: "Two-year tenure at UFSC's academic excellence group in Electrical Engineering: leadership roles, selection process management, MATLAB/Simulink training, engineering projects, and organization of major national technical trips (VMC).",
        altCapa: "Gustavo Denardi França wearing the PET EEL polo shirt",
        tags: ["Leadership", "MATLAB", "Simulink", "Event Management", "Networking"],
        funcao: "Member & Management Coordinator",
        periodo: "Apr 2024 – Apr 2026",
        ferramentas: "MATLAB, Simulink, Project & People Management",
        contexto: "Academic Excellence Group — UFSC",
        ctaTexto: "Visit the PET EEL website",
        tituloContexto: "About PET EEL & My Experience",
        contextoTecnico: [
          "### What is PET EEL?",
          "The Tutorial Education Program in Electrical and Electronic Engineering (PET EEL) at the Federal University of Santa Catarina (UFSC) is an academic excellence group supported by the Brazilian Ministry of Education. Structured around the triad of teaching, research, and university extension, the program brings together undergraduate engineering students to foster technical mastery, leadership, professional maturity, and collective impact across the university.",
          "### Leadership, Teamwork & Technical Training",
          "During my stay in the group, I took on leadership positions—including Management Coordinator—and directly organized the program's competitive selection process for new members. Working in a high-demand collaborative environment taught me a great deal about teamwork, accountability, and professionalism.",
          "On the technical side, PET EEL provided structured training in key engineering software such as MATLAB and Simulink, alongside hands-on internal development projects like Spider Sense, bridging classroom theory with practical hardware and software execution.",
          "### Organizing VMC — Technical Trips Across Brazil",
          "One of the highlights of my time in the group was serving on the organizing committee of Volta ao Mundo do Conhecimento (VMC), the largest technical trip of UFSC's Technological Center (CTC). I helped organize two editions, managing logistics, corporate outreach, and student delegations to major engineering hubs in Brazil:",
          "São Paulo Edition: technical visits to leading industry and research centers, including Embraer, WEG (Jaraguá do Sul), and INPE (National Institute for Space Research).",
          "Rio de Janeiro Edition: technical visits to the Brazilian National System Operator (ONS — Rio de Janeiro), the Angra Nuclear Power Plant (Usina de Angra), Nidec (Joinville), and Mercedes-Benz (São Bernardo do Campo).",
          "### Networking & Impact on My International Exchange",
          "Beyond technical and organizational growth, PET EEL offers an exceptional alumni network of former members working at renowned companies and institutions in Brazil and abroad—a connection that continuously enriches both academic and career perspectives. My tenure in this excellence group was deeply rewarding and played a decisive role in preparing me for my international double-degree exchange in France."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [],
        conclusao: []
      },
      fr: {
        titulo: "PET EEL — Programme d'Éducation Tutorielle en Génie Électrique",
        resumo: "Parcours de deux ans au sein du groupe d'excellence académique en Génie Électrique de l'UFSC : responsabilités de leadership, organisation du processus de sélection, formation MATLAB/Simulink, projets d'ingénierie et organisation des voyages techniques VMC.",
        altCapa: "Gustavo Denardi França portant le polo du PET EEL",
        tags: ["Leadership", "MATLAB", "Simulink", "Gestion d'événements", "Réseau"],
        funcao: "Membre et Coordinateur de Gestion",
        periodo: "Avr 2024 – Avr 2026",
        ferramentas: "MATLAB, Simulink, Gestion de projets et d'équipes",
        contexto: "Groupe d'Excellence Académique — UFSC",
        ctaTexto: "Visiter le site du PET EEL",
        tituloContexto: "À propos du PET EEL et mon parcours",
        contextoTecnico: [
          "### Qu'est-ce que le PET EEL ?",
          "Le Programme d'Éducation Tutorielle en Génie Électrique et Électronique (PET EEL) de l'Université Fédérale de Santa Catarina (UFSC) est un groupe d'excellence académique articulé autour de l'enseignement, de la recherche et de l'extension universitaire. Il rassemble des étudiants ingénieurs sélectionnés pour développer simultanément leurs compétences techniques, leur sens des responsabilités et leur maturité professionnelle.",
          "### Leadership, Travail d'Équipe et Formation Technique",
          "Au cours de mon engagement au sein du groupe, j'ai occupé des postes de leadership — notamment Coordinateur de Gestion — et organisé le processus de sélection des nouveaux membres. Cette expérience m'a énormément apporté en matière de travail collaboratif, d'organisation et de professionnalisme.",
          "Sur le plan technique, le PET EEL m'a permis de me former à des outils essentiels de l'ingénierie tels que MATLAB et Simulink, et de concevoir des projets internes concrets comme Spider Sense, reliant théorie académique et réalisation pratique.",
          "### Organisation de la VMC — Voyages Techniques Industriels",
          "J'ai également fait partie du comité d'organisation de la Volta ao Mundo do Conhecimento (VMC), le plus grand voyage d'études techniques du Centre Technologique (CTC) de l'UFSC. J'ai contribué à l'organisation de deux éditions complètes, mêlant logistique, relations entreprises et coordination des étudiants :",
          "Édition São Paulo : visites techniques au sein d'acteurs majeurs de l'industrie et de la recherche, tels qu'Embraer, WEG (Jaraguá do Sul) et l'INPE (Institut National de Recherche Spatiale).",
          "Édition Rio de Janeiro : visites techniques auprès de l'Opérateur National du Système Électrique (ONS — Rio de Janeiro), de la Centrale Nucléaire d'Angra, de Nidec (Joinville) et de Mercedes-Benz (São Bernardo do Campo).",
          "### Réseau d'Anciens Membres et Tremplin vers l'Échange",
          "Le PET EEL se distingue également par la richesse de son réseau d'anciens membres (alumni), aujourd'hui en poste dans des entreprises de renom au Brésil et à l'international. Ce séjour extrêmement enrichissant au sein d'un groupe d'excellence a été un atout majeur dans la préparation et la réussite de mon échange en double diplôme en France."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [],
        conclusao: []
      },
      pt: {
        titulo: "PET EEL — Programa de Educação Tutorial da Engenharia Elétrica",
        resumo: "Trajetória de dois anos no grupo de excelência acadêmica da Engenharia Elétrica da UFSC: cargos de liderança, organização de processos seletivos, capacitação em MATLAB/Simulink, projetos técnicos e organização da maior viagem técnica do CTC (VMC).",
        altCapa: "Gustavo Denardi França vestindo a polo do PET EEL",
        tags: ["Liderança", "MATLAB", "Simulink", "Gestão de Eventos", "Networking"],
        funcao: "Membro e Coordenador de Gestão",
        periodo: "Abr 2024 – Abr 2026",
        ferramentas: "MATLAB, Simulink, Gestão de Pessoas e Projetos",
        contexto: "Grupo de Excelência Acadêmica — UFSC",
        ctaTexto: "Acessar o site do PET EEL",
        tituloContexto: "Sobre o PET EEL e Minha Trajetória",
        contextoTecnico: [
          "### O que é o PET EEL?",
          "O Programa de Educação Tutorial das Engenharias Elétrica e Eletrônica (PET EEL) da Universidade Federal de Santa Catarina (UFSC) é um grupo de excelência acadêmica estruturado sobre a tríade ensino, pesquisa e extensão. O programa reúne estudantes selecionados com o objetivo de oferecer uma formação ampla que combina aprofundamento técnico, protagonismo estudantil e desenvolvimento profissional.",
          "### Liderança, Profissionalismo e Capacitação Técnica",
          "Durante minha permanência no PET EEL, ocupei cargos de liderança — incluindo a função de Coordenador de Gestão — e fui responsável pela organização do processo seletivo de novos membros. O ritmo de entregas e a convivência no grupo me proporcionaram um enorme aprendizado em trabalho em equipe, comunicação e profissionalismo.",
          "Na parte técnica, me capacitei em ferramentas fundamentais da engenharia elétrica, como MATLAB e Simulink, além de desenvolver projetos práticos internos como o Spider Sense, aplicando na prática os conhecimentos construídos ao longo da graduação.",
          "### Organização da VMC — Volta ao Mundo do Conhecimento",
          "Integrei também a comissão organizadora da Volta ao Mundo do Conhecimento (VMC), a maior viagem técnica do Centro Tecnológico (CTC) da UFSC. Participei da organização de duas edições, cuidando do planejamento, contato institucional com empresas e logística dos estudantes:",
          "Edição São Paulo: roteiro com visitas técnicas a referências industriais e científicas como Embraer, WEG (Jaraguá do Sul) e INPE (Instituto Nacional de Pesquisas Espaciais).",
          "Edição Rio de Janeiro: roteiro com visitas técnicas ao Operador Nacional do Sistema Elétrico (ONS — Rio de Janeiro), à Usina Nuclear de Angra, à Nidec (Joinville) e à Mercedes-Benz (São Bernardo do Campo).",
          "### Networking e Impacto no Intercâmbio",
          "Outro grande diferencial do grupo é o networking construído com ex-membros que hoje atuam em diversas empresas e instituições de renome, gerando trocas valiosas de experiência e visão de carreira. A passagem pelo PET EEL foi extremamente enriquecedora e teve um papel decisivo na minha preparação para o intercâmbio de dupla diplomação na França."
        ],
        diagrama: {
          mostrar: false
        },
        resultados: [],
        conclusao: []
      }
    }
  }
];
