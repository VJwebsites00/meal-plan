// ============================================================
// MEAL PLAN — data.js
// Variable globale `recipes` lue par app.js au chargement.
// ⚠️  PAS de module ES6 (import/export) — GitHub Pages static.
//
// Ce fichier contient 3 recettes de DÉMONSTRATION pour tester
// toutes les fonctionnalités du site (timers, portions, badges).
// Il sera remplacé par le fichier de production avec les 20
// recettes réelles lors de la Phase 2.
//
// Schema d'un objet recette :
// {
//   id:           string   — identifiant unique "saison-XX"
//   title:        string   — nom du plat
//   season:       string   — "été" | "automne" | "hiver" | "printemps"
//   type:         string   — "carné" | "végétarien"
//   cuisine:      string   — ex. "Français", "Méditerranéen", "Asiatique"
//   prepTime:     number   — durée totale en minutes
//   description:  string   — accroche courte (1–2 phrases)
//   baseServings: number   — nombre de personnes de référence (2)
//   ingredients:  Array<{
//                   id:     string  — identifiant à 4 chiffres "0001"
//                   name:   string  — nom de l'ingrédient
//                   amount: number  — quantité pour baseServings
//                   unit:   string|null — "g"|"kg"|"ml"|"l"|"tsp"|"tbsp"|
//                                        "cup"|"fl_oz"|"oz"|"lb"|"pinch"|null
//                 }>
//   steps:        Array<{
//                   id:           string       — identifiant "s1", "s2"…
//                   title:        string       — titre court de l'étape
//                   content:      string       — instructions détaillées
//                   timerSeconds: number|null  — durée en secondes, null si pas de timer
//                 }>
//   notes:        string|null — astuce du chef, null si aucune
// }
// ============================================================

const recipes = [

  // ──────────────────────────────────────────────────────────
  // ÉTÉ · Carné · Français
  // Teste : timer court (5 min) + timer moyen (7 min),
  //         badge carné, portions × 2 sur des entiers et tbsp
  // ──────────────────────────────────────────────────────────
  {
    id: "ete-01",
    title: "Poulet sauté aux tomates cerises et basilic",
    season: "été",
    type: "carné",
    cuisine: "Français",
    prepTime: 25,
    description: "Des morceaux de poulet dorés, des tomates cerises éclatées et du basilic frais — l'essentiel de l'été dans une seule poêle.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "filets de poulet",        amount: 2,   unit: null    },
      { id: "0002", name: "tomates cerises",          amount: 250, unit: "g"     },
      { id: "0003", name: "gousses d'ail",            amount: 3,   unit: null    },
      { id: "0004", name: "huile d'olive",            amount: 2,   unit: "tbsp"  },
      { id: "0005", name: "feuilles de basilic frais",amount: 10,  unit: null    },
      { id: "0006", name: "sel",                      amount: 0.5, unit: "tsp"   },
      { id: "0007", name: "poivre noir",              amount: 1,   unit: "pinch" }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer le poulet",
        content: "Couper les filets de poulet en morceaux de 3 cm. Saler et poivrer généreusement des deux côtés.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Dorer le poulet",
        content: "Chauffer l'huile d'olive dans une grande poêle à feu vif. Ajouter les morceaux en une seule couche et dorer 5 minutes en remuant régulièrement — ne pas couvrir pour obtenir une belle coloration.",
        timerSeconds: 300
      },
      {
        id: "s3",
        title: "Cuire les tomates",
        content: "Ajouter l'ail écrasé et les tomates cerises entières. Baisser à feu moyen et couvrir. Cuire 7 minutes jusqu'à ce que les tomates éclatent et libèrent leur jus.",
        timerSeconds: 420
      },
      {
        id: "s4",
        title: "Finition au basilic",
        content: "Éteindre le feu. Déchirer les feuilles de basilic à la main directement dans la poêle — la chaleur résiduelle suffit à les parfumer sans les cuire. Servir immédiatement.",
        timerSeconds: null
      }
    ],
    notes: "Pour intensifier la saveur, laisser mariner le poulet 30 minutes avec un filet de citron, de l'ail écrasé et de l'huile d'olive avant cuisson."
  },


  // ──────────────────────────────────────────────────────────
  // HIVER · Végétarien · Français
  // Teste : timer long (20 min), timer très court (2 min),
  //         badge végétarien, unités ml + tbsp + tsp + pinch
  // ──────────────────────────────────────────────────────────
  {
    id: "hiver-01",
    title: "Velouté de courge butternut au gingembre",
    season: "hiver",
    type: "végétarien",
    cuisine: "Français",
    prepTime: 30,
    description: "Un velouté onctueux et réconfortant — la douceur sucrée de la courge équilibrée par le piquant frais du gingembre.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "courge butternut (en cubes)", amount: 600, unit: "g"    },
      { id: "0002", name: "oignon moyen",                amount: 1,   unit: null   },
      { id: "0003", name: "gingembre frais râpé",        amount: 1,   unit: "tbsp" },
      { id: "0004", name: "lait de coco",                amount: 200, unit: "ml"   },
      { id: "0005", name: "bouillon de légumes",         amount: 400, unit: "ml"   },
      { id: "0006", name: "huile d'olive",               amount: 1,   unit: "tbsp" },
      { id: "0007", name: "sel",                         amount: 0.5, unit: "tsp"  },
      { id: "0008", name: "poivre noir",                 amount: 1,   unit: "pinch"}
    ],
    steps: [
      {
        id: "s1",
        title: "Faire revenir les aromates",
        content: "Émincer finement l'oignon. Dans une casserole à fond épais, faire revenir l'oignon dans l'huile d'olive à feu moyen jusqu'à ce qu'il soit translucide et légèrement doré.",
        timerSeconds: 300
      },
      {
        id: "s2",
        title: "Cuire la courge",
        content: "Ajouter les cubes de courge et le gingembre râpé. Remuer pour bien enrober. Verser le bouillon et porter à ébullition, puis baisser le feu et couvrir.",
        timerSeconds: 1200
      },
      {
        id: "s3",
        title: "Mixer",
        content: "Retirer du feu. Mixer au mixeur plongeant jusqu'à obtenir un velouté parfaitement lisse. Attention aux projections : tenir un torchon sur le côté et mixer en commençant à basse vitesse.",
        timerSeconds: null
      },
      {
        id: "s4",
        title: "Incorporer le lait de coco",
        content: "Verser le lait de coco et remettre sur feu doux. Réchauffer 2 minutes sans faire bouillir pour préserver l'onctuosité. Rectifier l'assaisonnement.",
        timerSeconds: 120
      }
    ],
    notes: "Pour un effet restaurant : garnir d'une cuillère de crème fraîche, de graines de courge torréfiées à sec à la poêle et d'un filet d'huile de sésame."
  },


  // ──────────────────────────────────────────────────────────
  // PRINTEMPS · Carné · Méditerranéen
  // Teste : timer de marinade (10 min) + deux timers égaux (3 min),
  //         fractions dans les portions (¾ tsp sel),
  //         étape sans timer entre deux étapes avec timer
  // ──────────────────────────────────────────────────────────
  {
    id: "printemps-01",
    title: "Côtelettes d'agneau marinées aux herbes",
    season: "printemps",
    type: "carné",
    cuisine: "Méditerranéen",
    prepTime: 25,
    description: "Des côtelettes d'agneau tendres saisies à la poêle, parfumées d'une marinade aux herbes fraîches et au citron.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "côtelettes d'agneau",   amount: 4,    unit: null    },
      { id: "0002", name: "huile d'olive",          amount: 3,    unit: "tbsp"  },
      { id: "0003", name: "brins de romarin frais", amount: 3,    unit: null    },
      { id: "0004", name: "brins de thym frais",    amount: 4,    unit: null    },
      { id: "0005", name: "gousses d'ail",          amount: 2,    unit: null    },
      { id: "0006", name: "jus de citron",          amount: 2,    unit: "tbsp"  },
      { id: "0007", name: "sel",                    amount: 0.75, unit: "tsp"   },
      { id: "0008", name: "poivre noir",            amount: 1,    unit: "pinch" }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer la marinade",
        content: "Dans un plat creux, mélanger l'huile d'olive, le jus de citron, l'ail écrasé, les feuilles de romarin et de thym effeuillées. Saler et poivrer.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Mariner",
        content: "Enduire généreusement les côtelettes de marinade des deux côtés. Laisser reposer à température ambiante — cela détend la viande et intensifie les arômes.",
        timerSeconds: 600
      },
      {
        id: "s3",
        title: "Saisir les côtelettes",
        content: "Chauffer une poêle à feu vif sans huile supplémentaire — la marinade suffit. Saisir les côtelettes 3 minutes de chaque côté pour une cuisson rosée. Ajuster selon l'épaisseur.",
        timerSeconds: 180
      },
      {
        id: "s4",
        title: "Repos de la viande",
        content: "Déposer les côtelettes sur une assiette chaude et couvrir lâchement d'aluminium. Laisser reposer 3 minutes : les jus se redistribuent et la viande gagne en tendreté.",
        timerSeconds: 180
      }
    ],
    notes: "Accompagner d'une salade de roquette, de tomates cerises et d'asperges vertes sautées à l'ail pour un repas printanier complet."
  }

];
