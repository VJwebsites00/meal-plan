// ============================================================
// MEAL PLAN — data.js (PRODUCTION — 20 recettes réelles)
// Variable globale `recipes` lue par app.js au chargement.
// ⚠️  PAS de module ES6 (import/export) — GitHub Pages static.
//
// 20 recettes : 5 par saison, 3 carnées + 2 végétariennes
//
// Unités acceptées pour `unit` :
//   "g" "kg" "ml" "l" "tsp" "tbsp" "cup" "fl_oz" "oz" "lb" "pinch" null
//   null = ingrédient compté à l'unité (ex. 2 côtelettes, 3 gousses d'ail)
// ============================================================

const recipes = [

  // ════════════════════════════════════════════════════════════
  // ÉTÉ — 3 carnés · 2 végétariens
  // Mutualisés : tomates · oignon · ail · herbes de Provence ·
  //              sauce soja · gingembre
  // ════════════════════════════════════════════════════════════

  {
    id: "ete-01",
    title: "Poulet à la provençale",
    season: "été",
    type: "carné",
    cuisine: "Français",
    prepTime: 25,
    description: "Des cuisses de poulet dorées mijotées dans un coulis de tomates fraîches aux herbes de Provence. Le classique du Sud en une seule poêle.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "cuisses de poulet",  amount: 4,    unit: null   },
      { id: "0002", name: "tomates",            amount: 3,    unit: null   },
      { id: "0003", name: "oignon",             amount: 1,    unit: null   },
      { id: "0004", name: "gousses d'ail",      amount: 3,    unit: null   },
      { id: "0005", name: "huile d'olive",      amount: 2,    unit: "tbsp" },
      { id: "0006", name: "herbes de Provence", amount: 1,    unit: "tsp"  },
      { id: "0007", name: "sel",                amount: 0.5,  unit: "tsp"  },
      { id: "0008", name: "poivre",             amount: 0.25, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer les légumes",
        content: "Couper les tomates en dés grossiers. Émincer l'oignon et les gousses d'ail.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Faire dorer le poulet",
        content: "Chauffer l'huile d'olive à feu moyen-vif dans une grande poêle. Déposer les cuisses côté peau, sans les bouger. Laisser dorer jusqu'à ce que la peau soit bien colorée.",
        timerSeconds: 600
      },
      {
        id: "s3",
        title: "Retourner et ajouter les légumes",
        content: "Retourner les cuisses. Ajouter l'oignon et l'ail autour du poulet, laisser revenir 2 min. Ajouter les tomates, les herbes de Provence, le sel et le poivre. Mélanger légèrement.",
        timerSeconds: 120
      },
      {
        id: "s4",
        title: "Mijoter à couvert",
        content: "Couvrir la poêle, baisser à feu moyen-doux. Le poulet va finir de cuire dans le jus des tomates. Vérifier la cuisson : le jus doit être transparent quand on pique la cuisse.",
        timerSeconds: 900
      }
    ],
    notes: "Si les tomates rendent peu d'eau, ajouter 2-3 cuillères à soupe d'eau pour éviter que ça accroche. Servir avec du pain bio ou de la semoule pour saucer."
  },

  {
    id: "ete-02",
    title: "Bœuf haché sauté thaï au basilic",
    season: "été",
    type: "carné",
    cuisine: "Asiatique",
    prepTime: 20,
    description: "Le pad kra pao revisité — bœuf haché à feu vif, poivrons croquants, sauce soja et basilic frais. Le plat le plus rapide du plan, et probablement le plus addictif.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "bœuf haché",                     amount: 400, unit: "g"    },
      { id: "0002", name: "poivrons rouges",                 amount: 2,   unit: null   },
      { id: "0003", name: "oignon",                          amount: 1,   unit: null   },
      { id: "0004", name: "gousses d'ail",                   amount: 3,   unit: null   },
      { id: "0005", name: "gingembre frais râpé",            amount: 1,   unit: "tsp"  },
      { id: "0006", name: "sauce soja",                      amount: 3,   unit: "tbsp" },
      { id: "0007", name: "huile neutre (tournesol ou coco)",amount: 1,   unit: "tbsp" },
      { id: "0008", name: "feuilles de basilic frais",       amount: 20,  unit: "g"    },
      { id: "0009", name: "riz basmati",                     amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Mettre dans une casserole avec 1,5× son volume d'eau froide. Porter à ébullition, couvrir, réduire à feu doux. Ne pas soulever le couvercle pendant la cuisson.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer les légumes",
        content: "Émincer l'oignon et l'ail. Couper les poivrons en lanières fines. Râper le gingembre. Pendant que le riz cuit.",
        timerSeconds: 180
      },
      {
        id: "s3",
        title: "Sauter le bœuf à feu vif",
        content: "Chauffer l'huile à feu vif. Ajouter l'ail et le gingembre, remuer 30 secondes. Ajouter le bœuf haché et écraser à la spatule pour bien l'égrener. La viande doit légèrement brunir — c'est le goût.",
        timerSeconds: 300
      },
      {
        id: "s4",
        title: "Légumes et sauce",
        content: "Ajouter l'oignon et les poivrons, sauter 2-3 min à feu vif. Verser la sauce soja, mélanger. Cuire encore 1 min.",
        timerSeconds: 240
      },
      {
        id: "s5",
        title: "Basilic et service",
        content: "Éteindre le feu. Ajouter les feuilles de basilic en entier, mélanger — la chaleur résiduelle va les faner doucement. Servir immédiatement sur le riz.",
        timerSeconds: null
      }
    ],
    notes: "La clé du plat : feu VIF tout le long. Un feu trop doux va bouillir la viande au lieu de la saisir. Le basilic s'ajoute toujours hors du feu pour conserver ses arômes."
  },

  {
    id: "ete-03",
    title: "Saumon laqué miel-soja, haricots verts",
    season: "été",
    type: "carné",
    cuisine: "Asiatique",
    prepTime: 25,
    description: "Une laque miel-soja-gingembre qui caramélise sur le saumon, haricots verts croquants. La Sainte-Trinité de la cuisine asiatique facile — résultat restaurant, effort minimal.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "filets de saumon (150 g chacun)", amount: 2,   unit: null   },
      { id: "0002", name: "haricots verts",                  amount: 400, unit: "g"    },
      { id: "0003", name: "sauce soja",                      amount: 2,   unit: "tbsp" },
      { id: "0004", name: "miel",                            amount: 1,   unit: "tbsp" },
      { id: "0005", name: "gingembre frais râpé",            amount: 1,   unit: "tsp"  },
      { id: "0006", name: "riz basmati",                     amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Couvrir d'1,5× son volume d'eau, porter à ébullition, couvrir, feu doux. Ne pas soulever le couvercle.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer la laque",
        content: "Dans un petit bol, mélanger la sauce soja, le miel et le gingembre râpé à la fourchette jusqu'à ce que le miel soit bien dissous. Réserver.",
        timerSeconds: 60
      },
      {
        id: "s3",
        title: "Cuire les haricots verts",
        content: "Porter à ébullition une casserole d'eau salée. Ajouter les haricots verts. Ils doivent être tendres mais encore croquants.",
        timerSeconds: 480
      },
      {
        id: "s4",
        title: "Saisir le saumon côté peau",
        content: "Chauffer une poêle à sec (sans huile) à feu moyen-vif. Déposer les filets côté peau. Ne pas bouger. La peau va devenir croustillante.",
        timerSeconds: 240
      },
      {
        id: "s5",
        title: "Laquer et finir la cuisson",
        content: "Retourner les filets. Verser la laque préparée sur le dessus du saumon. La laque va caraméliser. Arrêter la cuisson dès que le cœur est encore légèrement rosé.",
        timerSeconds: 180
      },
      {
        id: "s6",
        title: "Dresser et servir",
        content: "Servir les filets sur le riz, haricots verts à côté, napper du reste de laque dans la poêle.",
        timerSeconds: null
      }
    ],
    notes: "Le saumon se cuit côté peau en premier — ça protège la chair et donne une texture croustillante. Signe de cuisson parfaite : la chair passe du translucide à rosé opaque sur les 2/3 de la hauteur avant de retourner. Si tu la retournes trop tôt, elle va coller."
  },

  {
    id: "ete-04",
    title: "Poêlée de légumes d'été à la provençale",
    season: "été",
    type: "végétarien",
    cuisine: "Méditerranéen",
    prepTime: 25,
    description: "La ratatouille express — aubergine, courgettes, poivron, tomates, herbes. L'ordre de cuisson est la seule technique à maîtriser. Encore meilleur réchauffé le lendemain.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "courgettes",         amount: 2,    unit: null   },
      { id: "0002", name: "aubergine",          amount: 1,    unit: null   },
      { id: "0003", name: "tomates",            amount: 2,    unit: null   },
      { id: "0004", name: "poivron rouge",      amount: 1,    unit: null   },
      { id: "0005", name: "oignon",             amount: 1,    unit: null   },
      { id: "0006", name: "gousses d'ail",      amount: 2,    unit: null   },
      { id: "0007", name: "huile d'olive",      amount: 3,    unit: "tbsp" },
      { id: "0008", name: "herbes de Provence", amount: 1,    unit: "tsp"  },
      { id: "0009", name: "sel",                amount: 0.5,  unit: "tsp"  },
      { id: "0010", name: "poivre",             amount: 0.25, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Couper tous les légumes",
        content: "Couper l'aubergine en dés de 2 cm. Couper les courgettes en rondelles épaisses. Couper les tomates en quartiers. Couper le poivron en lanières. Émincer l'oignon et l'ail. Regrouper par légume.",
        timerSeconds: 300
      },
      {
        id: "s2",
        title: "Faire dorer l'aubergine en premier",
        content: "Chauffer 2 cuillères à soupe d'huile d'olive à feu moyen-vif. Ajouter l'aubergine. Ne pas trop remuer — laisser dorer une face avant de mélanger. L'aubergine absorbe l'huile : c'est normal, ne pas en rajouter.",
        timerSeconds: 480
      },
      {
        id: "s3",
        title: "Ajouter oignon, poivron, courgette",
        content: "Ajouter l'oignon et l'ail, remuer. Puis ajouter le poivron et les courgettes. Mélanger et laisser cuire à feu moyen.",
        timerSeconds: 480
      },
      {
        id: "s4",
        title: "Finir avec les tomates et assaisonner",
        content: "Ajouter les tomates, les herbes de Provence, le sel, le poivre et le reste d'huile d'olive. Mélanger doucement pour ne pas réduire les tomates en purée. Goûter et rectifier.",
        timerSeconds: 300
      }
    ],
    notes: "L'ordre d'ajout est clé : légumes qui prennent le plus longtemps en premier (aubergine), les plus fragiles en dernier (tomate). Servir avec du pain bio grillé ou de la semoule."
  },

  {
    id: "ete-05",
    title: "Dal de lentilles corail coco-tomate",
    season: "été",
    type: "végétarien",
    cuisine: "Fusion",
    prepTime: 25,
    description: "Lentilles corail fondues dans une sauce coco-tomate épicée. Plat complet, rassasiant, zéro technique difficile. Le plat végé le plus nourrissant du plan.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "lentilles corail",    amount: 200, unit: "g"    },
      { id: "0002", name: "tomates fraîches",    amount: 3,   unit: null   },
      { id: "0003", name: "lait de coco",        amount: 200, unit: "ml"   },
      { id: "0004", name: "oignon",              amount: 1,   unit: null   },
      { id: "0005", name: "gousses d'ail",       amount: 3,   unit: null   },
      { id: "0006", name: "cumin en poudre",     amount: 1,   unit: "tsp"  },
      { id: "0007", name: "coriandre en poudre", amount: 1,   unit: "tsp"  },
      { id: "0008", name: "huile d'olive",       amount: 2,   unit: "tbsp" },
      { id: "0009", name: "sel",                 amount: 0.5, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Rincer les lentilles et préparer",
        content: "Mettre les lentilles corail dans une passoire et rincer abondamment sous l'eau froide jusqu'à ce que l'eau soit claire. Couper les tomates en dés. Émincer l'oignon et les gousses d'ail.",
        timerSeconds: 120
      },
      {
        id: "s2",
        title: "Faire revenir oignon et épices",
        content: "Chauffer l'huile d'olive à feu moyen dans une casserole. Ajouter l'oignon, faire revenir jusqu'à transparence. Ajouter l'ail, le cumin et la coriandre. Remuer 1 minute — les épices doivent sentir bon sans brûler.",
        timerSeconds: 180
      },
      {
        id: "s3",
        title: "Ajouter tout et porter à ébullition",
        content: "Ajouter les lentilles, les tomates en dés, le lait de coco et 400 ml d'eau. Remuer. Porter à ébullition en mélangeant régulièrement pour éviter que ça attache au fond.",
        timerSeconds: 180
      },
      {
        id: "s4",
        title: "Mijoter à feu doux",
        content: "Réduire à feu doux. Laisser mijoter en remuant toutes les 3-4 minutes. Les lentilles vont fondre et le dal va épaissir naturellement. Ajouter le sel. Si trop épais, ajouter un peu d'eau.",
        timerSeconds: 900
      },
      {
        id: "s5",
        title: "Rectifier et servir",
        content: "Goûter et rectifier : sel, un filet de jus de citron optionnel pour équilibrer le sucré du coco. Servir dans des bols creux.",
        timerSeconds: null
      }
    ],
    notes: "Les lentilles corail ne nécessitent pas de trempage — elles fondent et épaississent naturellement le plat. Si le dal est trop épais en fin de cuisson, ajouter un peu d'eau chaude et remuer. Encore meilleur réchauffé le lendemain."
  },


  // ════════════════════════════════════════════════════════════
  // AUTOMNE — 3 carnés · 2 végétariens
  // Mutualisés : champignons · gingembre · oignon · ail · thym
  // ════════════════════════════════════════════════════════════

  {
    id: "automne-01",
    title: "Escalopes de dinde crème-champignons",
    season: "automne",
    type: "carné",
    cuisine: "Français",
    prepTime: 25,
    description: "Le classique bistrot français — sauce crémeuse aux champignons et thym, escalopes dorées. Le plat réconfortant par excellence quand les soirées fraîchissent.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "escalopes de dinde",                amount: 2,    unit: null   },
      { id: "0002", name: "champignons de Paris",              amount: 300,  unit: "g"    },
      { id: "0003", name: "oignon",                            amount: 1,    unit: null   },
      { id: "0004", name: "gousses d'ail",                     amount: 2,    unit: null   },
      { id: "0005", name: "crème fraîche épaisse pasteurisée", amount: 150,  unit: "ml"   },
      { id: "0006", name: "huile d'olive",                     amount: 1,    unit: "tbsp" },
      { id: "0007", name: "thym séché",                        amount: 1,    unit: "tsp"  },
      { id: "0008", name: "sel",                               amount: 0.5,  unit: "tsp"  },
      { id: "0009", name: "poivre",                            amount: 0.25, unit: "tsp"  },
      { id: "0010", name: "tagliatelles",                      amount: 180,  unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer les pâtes",
        content: "Porter une grande casserole d'eau salée à ébullition. Ajouter les tagliatelles et cuire selon les indications du paquet. La cuisson des pâtes se fait en parallèle du reste.",
        timerSeconds: 600
      },
      {
        id: "s2",
        title: "Préparer les légumes",
        content: "Émincer l'oignon et l'ail. Trancher les champignons en lamelles épaisses (pas trop fines — ils vont réduire à la cuisson).",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Saisir les escalopes",
        content: "Chauffer l'huile d'olive à feu moyen-vif. Déposer les escalopes, cuire 3 min sans les bouger, retourner, encore 3 min. Elles doivent être bien dorées. Réserver sur une assiette.",
        timerSeconds: 360
      },
      {
        id: "s4",
        title: "Faire revenir champignons et oignon",
        content: "Dans la même poêle sans nettoyer, ajouter l'oignon et l'ail. Remuer 2 min, puis ajouter les champignons. Laisser l'eau des champignons s'évaporer complètement.",
        timerSeconds: 300
      },
      {
        id: "s5",
        title: "Préparer la sauce crème",
        content: "Ajouter la crème fraîche, le thym, le sel et le poivre. Mélanger et laisser épaissir à feu moyen. La sauce est prête quand elle nappe légèrement la cuillère.",
        timerSeconds: 180
      },
      {
        id: "s6",
        title: "Finir et servir",
        content: "Remettre les escalopes dans la sauce, napper, chauffer 1 min. Servir sur les tagliatelles égouttées.",
        timerSeconds: null
      }
    ],
    notes: "Ne pas nettoyer la poêle entre les escalopes et les champignons — les sucs caramélisés au fond sont la base de saveur de la sauce. Si la sauce est trop épaisse, ajouter 2-3 cuillères à soupe d'eau de cuisson des pâtes."
  },

  {
    id: "automne-02",
    title: "Porc sauté champignons-soja-gingembre",
    season: "automne",
    type: "carné",
    cuisine: "Asiatique",
    prepTime: 25,
    description: "Filet de porc en lanières fines, champignons et sauce soja-gingembre. Version japonisante umami-maximale — feu vif, 20 min, une seule poêle.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "filet de porc",        amount: 350, unit: "g"    },
      { id: "0002", name: "champignons de Paris",  amount: 200, unit: "g"    },
      { id: "0003", name: "oignon",               amount: 1,   unit: null   },
      { id: "0004", name: "gousses d'ail",        amount: 2,   unit: null   },
      { id: "0005", name: "gingembre frais râpé", amount: 1,   unit: "tsp"  },
      { id: "0006", name: "sauce soja",           amount: 3,   unit: "tbsp" },
      { id: "0007", name: "huile neutre",         amount: 1,   unit: "tbsp" },
      { id: "0008", name: "riz basmati",          amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Mettre dans une casserole avec 1,5× son volume d'eau froide. Porter à ébullition, couvrir, réduire à feu doux. Ne pas soulever le couvercle.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer viande et légumes",
        content: "Couper le filet de porc en lanières de 0,5 cm. Émincer l'oignon et l'ail. Trancher les champignons en lamelles. Râper le gingembre.",
        timerSeconds: 180
      },
      {
        id: "s3",
        title: "Saisir le porc à feu vif",
        content: "Chauffer l'huile à feu vif. Ajouter le porc en une seule couche, sans remuer pendant 2 min pour obtenir une belle coloration. Mélanger ensuite.",
        timerSeconds: 240
      },
      {
        id: "s4",
        title: "Ajouter légumes et champignons",
        content: "Ajouter l'ail et le gingembre, remuer 30 secondes. Ajouter l'oignon et les champignons. Faire sauter à feu vif — l'eau des champignons doit s'évaporer complètement.",
        timerSeconds: 300
      },
      {
        id: "s5",
        title: "Sauce soja et service",
        content: "Verser la sauce soja, mélanger à feu vif pendant 1 min. La sauce doit lustrer les ingrédients. Servir immédiatement sur le riz.",
        timerSeconds: 60
      }
    ],
    notes: "Couper le filet de porc en lanières très fines (0,5 cm max) : ça garantit une cuisson rapide et une texture tendre. Si tu n'as pas de filet, l'échine fonctionne bien — juste un peu plus de gras, ce qui n'est pas un problème à la poêle."
  },

  {
    id: "automne-03",
    title: "Boulettes d'agneau épicées, carottes fondantes",
    season: "automne",
    type: "carné",
    cuisine: "Méditerranéen",
    prepTime: 25,
    description: "Boulettes d'agneau au cumin-cannelle, carottes en rondelles fondantes. Inspiration nord-africaine — le parfum dans la cuisine vaut le déplacement.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "agneau haché",        amount: 400,  unit: "g"    },
      { id: "0002", name: "carottes",            amount: 3,    unit: null   },
      { id: "0003", name: "oignon",              amount: 1,    unit: null   },
      { id: "0004", name: "gousses d'ail",       amount: 3,    unit: null   },
      { id: "0005", name: "cumin en poudre",     amount: 1,    unit: "tsp"  },
      { id: "0006", name: "coriandre en poudre", amount: 1,    unit: "tsp"  },
      { id: "0007", name: "cannelle",            amount: 0.25, unit: "tsp"  },
      { id: "0008", name: "huile d'olive",       amount: 2,    unit: "tbsp" },
      { id: "0009", name: "sel",                 amount: 0.5,  unit: "tsp"  },
      { id: "0010", name: "semoule fine",        amount: 200,  unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Former les boulettes",
        content: "Dans un bol, mélanger l'agneau haché avec la moitié des épices (cumin, coriandre, cannelle), 1 gousse d'ail écrasée et le sel. Mélanger juste assez pour intégrer — ne pas pétrir. Former 8 boulettes de taille égale.",
        timerSeconds: 300
      },
      {
        id: "s2",
        title: "Couper carottes et oignon",
        content: "Couper les carottes en fines rondelles (3-4 mm max). Émincer l'oignon et les 2 gousses d'ail restantes.",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Faire dorer les boulettes",
        content: "Chauffer l'huile d'olive à feu moyen-vif. Déposer les boulettes sans les toucher. Laisser dorer 2-3 min avant de les rouler. Puis les tourner pour dorer sur toutes les faces.",
        timerSeconds: 300
      },
      {
        id: "s4",
        title: "Faire revenir carottes et oignon",
        content: "Réserver les boulettes. Dans la même poêle, ajouter l'oignon, l'ail restant et les carottes. Saupoudrer le reste des épices. Mélanger et faire revenir 3 min.",
        timerSeconds: 180
      },
      {
        id: "s5",
        title: "Mijoter à couvert",
        content: "Remettre les boulettes sur les carottes. Ajouter 4 cuillères à soupe d'eau. Couvrir et baisser à feu moyen. Les carottes doivent devenir tendres et les boulettes cuire à cœur.",
        timerSeconds: 600
      },
      {
        id: "s6",
        title: "Préparer la semoule en parallèle",
        content: "Verser la semoule dans un bol, couvrir d'eau bouillante au même volume. Couvrir avec une assiette. Laisser gonfler puis égrener à la fourchette.",
        timerSeconds: 180
      }
    ],
    notes: "Le secret des boulettes moelleuses : ne pas trop travailler la viande et ne pas les bouger pendant les 2 premières minutes de cuisson. Couper les carottes très fines (3-4 mm max). Un filet de citron pressé au service équilibre parfaitement les épices."
  },

  {
    id: "automne-04",
    title: "Velouté butternut-coco-gingembre",
    season: "automne",
    type: "végétarien",
    cuisine: "Fusion",
    prepTime: 30,
    description: "Courge butternut mixée au lait de coco et gingembre. Velouté onctueux et réconfortant — la douceur sucrée de la courge équilibrée par le piquant frais du gingembre. Nécessite un mixeur plongeant.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "courge butternut",              amount: 800, unit: "g"    },
      { id: "0002", name: "oignon",                        amount: 1,   unit: null   },
      { id: "0003", name: "lait de coco",                  amount: 200, unit: "ml"   },
      { id: "0004", name: "gingembre frais râpé",          amount: 1,   unit: "tsp"  },
      { id: "0005", name: "cube de bouillon de légumes bio",amount: 1,  unit: null   },
      { id: "0006", name: "huile d'olive",                 amount: 1,   unit: "tbsp" },
      { id: "0007", name: "sel",                           amount: 0.5, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer la butternut",
        content: "Couper la butternut en deux dans le sens de la longueur. Retirer les graines à la cuillère. Éplucher et couper la chair en dés de 3 cm environ. Émincer l'oignon.",
        timerSeconds: 420
      },
      {
        id: "s2",
        title: "Faire revenir oignon et gingembre",
        content: "Chauffer l'huile d'olive à feu moyen dans une grande casserole. Ajouter l'oignon, faire revenir jusqu'à transparence, environ 3 min. Ajouter le gingembre râpé, remuer 30 secondes.",
        timerSeconds: 180
      },
      {
        id: "s3",
        title: "Ajouter butternut et bouillon",
        content: "Ajouter les dés de butternut dans la casserole. Verser 600 ml d'eau chaude et émietter le cube de bouillon. Porter à ébullition en remuant pour dissoudre.",
        timerSeconds: 180
      },
      {
        id: "s4",
        title: "Cuire la butternut",
        content: "Baisser à feu moyen. Cuire à semi-couvert jusqu'à ce que la butternut soit complètement tendre — une fourchette doit rentrer sans résistance.",
        timerSeconds: 900
      },
      {
        id: "s5",
        title: "Mixer le velouté",
        content: "Hors du feu, utiliser le mixeur plongeant directement dans la casserole. Mixer jusqu'à consistance lisse et veloutée. Tenir un torchon sur le côté pour éviter les projections.",
        timerSeconds: 60
      },
      {
        id: "s6",
        title: "Incorporer le coco et servir",
        content: "Ajouter le lait de coco, mélanger. Rectifier le sel. Le velouté doit être crémeux mais pas trop épais — ajuster avec un peu d'eau si nécessaire. Servir chaud.",
        timerSeconds: null
      }
    ],
    notes: "Matériel requis : un mixeur plongeant. Pour éplucher la butternut sans galérer : passer 3 min au micro-ondes avant de la couper, ça ramollit la peau. Tenir un torchon sur la casserole quand on mixe pour éviter les projections. Un filet de crème au moment de servir, c'est le petit luxe qui change tout."
  },

  {
    id: "automne-05",
    title: "Poêlée champignons-poireaux-lentilles",
    season: "automne",
    type: "végétarien",
    cuisine: "Français",
    prepTime: 30,
    description: "Lentilles vertes du Puy, champignons dorés, poireaux fondants. Le plat végé le plus ancré dans le terroir — simple, nourrissant, profondément satisfaisant.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "lentilles vertes du Puy", amount: 150,  unit: "g"    },
      { id: "0002", name: "champignons de Paris",    amount: 300,  unit: "g"    },
      { id: "0003", name: "poireaux",                amount: 2,    unit: null   },
      { id: "0004", name: "gousses d'ail",           amount: 2,    unit: null   },
      { id: "0005", name: "huile d'olive",           amount: 2,    unit: "tbsp" },
      { id: "0006", name: "thym séché",              amount: 1,    unit: "tsp"  },
      { id: "0007", name: "sel",                     amount: 0.5,  unit: "tsp"  },
      { id: "0008", name: "poivre",                  amount: 0.25, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer les lentilles en premier",
        content: "Rincer les lentilles à l'eau froide. Mettre dans une casserole, couvrir de 3× leur volume d'eau froide non salée. Porter à ébullition, réduire à feu moyen. C'est la tâche la plus longue — tout le reste se fait en parallèle.",
        timerSeconds: 1500
      },
      {
        id: "s2",
        title: "Préparer les légumes",
        content: "Couper les poireaux en rondelles (partie blanche et vert tendre uniquement). Trancher les champignons en lamelles. Émincer l'ail.",
        timerSeconds: 240
      },
      {
        id: "s3",
        title: "Faire revenir poireaux et ail",
        content: "Chauffer l'huile d'olive à feu moyen. Ajouter les poireaux et l'ail. Faire revenir doucement jusqu'à ce que les poireaux soient fondants et légèrement dorés.",
        timerSeconds: 360
      },
      {
        id: "s4",
        title: "Ajouter champignons et thym",
        content: "Monter à feu moyen-vif. Ajouter les champignons et le thym. Laisser l'eau des champignons s'évaporer complètement — c'est là que la saveur se concentre.",
        timerSeconds: 480
      },
      {
        id: "s5",
        title: "Mélanger lentilles et poêlée",
        content: "Égoutter les lentilles quand elles sont tendres. Les ajouter à la poêle. Mélanger délicatement. Assaisonner avec le sel et le poivre. Goûter et rectifier.",
        timerSeconds: null
      }
    ],
    notes: "Ne jamais saler les lentilles en début de cuisson — le sel durcit leur peau et allonge le temps de cuisson. On sale uniquement à la fin. Les poireaux ont tendance à accrocher : baisser le feu si nécessaire et ajouter une cuillère d'eau. Ce plat se réchauffe très bien le lendemain avec un trait d'huile d'olive."
  },


  // ════════════════════════════════════════════════════════════
  // HIVER — 3 carnés · 2 végétariens
  // Mutualisés : moutarde · épinards · gingembre · crème fraîche ·
  //              oignon · ail · thym · tomates concassées (boîte)
  // ════════════════════════════════════════════════════════════

  {
    id: "hiver-01",
    title: "Poulet à la moutarde et crème fraîche",
    season: "hiver",
    type: "carné",
    cuisine: "Français",
    prepTime: 25,
    description: "Le grand classique bistrot français — sauce moutarde-crème fraîche en 5 min, poulet fondant. Le genre de plat qui fait croire qu'on a cuisiné pendant des heures.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "blancs de poulet",                   amount: 2,    unit: null   },
      { id: "0002", name: "échalote",                           amount: 1,    unit: null   },
      { id: "0003", name: "gousses d'ail",                      amount: 2,    unit: null   },
      { id: "0004", name: "crème fraîche épaisse pasteurisée",  amount: 150,  unit: "ml"   },
      { id: "0005", name: "moutarde de Dijon",                  amount: 2,    unit: "tbsp" },
      { id: "0006", name: "huile d'olive",                      amount: 1,    unit: "tbsp" },
      { id: "0007", name: "thym séché",                         amount: 1,    unit: "tsp"  },
      { id: "0008", name: "sel",                                amount: 0.5,  unit: "tsp"  },
      { id: "0009", name: "poivre",                             amount: 0.25, unit: "tsp"  },
      { id: "0010", name: "tagliatelles",                       amount: 180,  unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer les pâtes",
        content: "Porter une grande casserole d'eau salée à ébullition. Ajouter les tagliatelles, cuire selon les indications du paquet. Tout le reste se fait en parallèle.",
        timerSeconds: 600
      },
      {
        id: "s2",
        title: "Préparer échalote et ail",
        content: "Émincer finement l'échalote et l'ail. Réserver ensemble.",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Saisir le poulet",
        content: "Chauffer l'huile d'olive à feu moyen-vif. Déposer les blancs de poulet, cuire 3-4 min sans bouger jusqu'à coloration dorée. Retourner, encore 3 min. Réserver sur une assiette — ils finiront de cuire dans la sauce.",
        timerSeconds: 420
      },
      {
        id: "s4",
        title: "Faire revenir échalote et ail",
        content: "Dans la même poêle sans nettoyer, baisser à feu moyen. Ajouter l'échalote et l'ail, remuer 2 min jusqu'à légère dorure.",
        timerSeconds: 120
      },
      {
        id: "s5",
        title: "Construire la sauce moutarde-crème",
        content: "Ajouter la moutarde, mélanger 30 secondes pour enrober. Verser la crème fraîche, ajouter le thym, le sel et le poivre. Laisser épaissir à feu doux en remuant — la sauce est prête quand elle nappe une cuillère.",
        timerSeconds: 180
      },
      {
        id: "s6",
        title: "Finir et servir",
        content: "Remettre les blancs de poulet dans la sauce. Couvrir 1 min à feu doux pour finir la cuisson à cœur. Servir sur les tagliatelles égouttées, napper généreusement de sauce.",
        timerSeconds: null
      }
    ],
    notes: "La moutarde ne doit jamais bouillir — elle devient amère. Toujours l'ajouter hors ébullition et ne pas faire réduire trop fort après. Si la sauce tranche, baisser le feu immédiatement et ajouter 1 cuillère à soupe d'eau tiède en remuant."
  },

  {
    id: "hiver-02",
    title: "Saumon glacé miso-gingembre, épinards sautés",
    season: "hiver",
    type: "carné",
    cuisine: "Asiatique",
    prepTime: 20,
    description: "La glaze miso caramélisée sur le saumon, les épinards fondants à l'ail — un équilibre umami-douceur qui sort complètement de l'ordinaire. Le plat le plus rapide du plan hiver.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "filets de saumon (150 g chacun)",  amount: 2,   unit: null   },
      { id: "0002", name: "épinards frais",                   amount: 200, unit: "g"    },
      { id: "0003", name: "pâte miso blanche (shiro miso)",  amount: 2,   unit: "tbsp" },
      { id: "0004", name: "sauce soja",                       amount: 1,   unit: "tbsp" },
      { id: "0005", name: "miel",                             amount: 1,   unit: "tbsp" },
      { id: "0006", name: "gingembre frais râpé",             amount: 1,   unit: "tsp"  },
      { id: "0007", name: "gousse d'ail",                     amount: 1,   unit: null   },
      { id: "0008", name: "huile neutre",                     amount: 1,   unit: "tbsp" },
      { id: "0009", name: "riz basmati",                      amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Mettre dans une casserole avec 1,5× son volume d'eau froide. Porter à ébullition, couvrir, réduire à feu doux. Ne pas soulever le couvercle.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer la glaze miso",
        content: "Dans un petit bol, mélanger la pâte miso, la sauce soja, le miel et le gingembre râpé à la fourchette. La pâte miso peut être difficile à dissoudre — remuer énergiquement. Réserver.",
        timerSeconds: 60
      },
      {
        id: "s3",
        title: "Saisir le saumon côté peau",
        content: "Chauffer une poêle à sec à feu moyen-vif. Déposer les filets côté peau. Ne pas bouger. Cuire jusqu'à ce que la chair soit opaque aux 2/3 de la hauteur.",
        timerSeconds: 240
      },
      {
        id: "s4",
        title: "Retourner et laquer",
        content: "Retourner les filets. Badigeonner généreusement la face supérieure de glaze miso. La glaze va caraméliser à la chaleur. Éteindre quand le cœur est encore légèrement rosé.",
        timerSeconds: 180
      },
      {
        id: "s5",
        title: "Sauter les épinards à l'ail",
        content: "Dans une deuxième poêle (ou la même après avoir réservé le saumon), chauffer un filet d'huile à feu vif. Ajouter l'ail émincé, remuer 30 sec. Ajouter les épinards en une fois, remuer vivement jusqu'à ce qu'ils tombent.",
        timerSeconds: 150
      },
      {
        id: "s6",
        title: "Dresser et servir",
        content: "Servir les filets de saumon sur le riz, épinards à côté. Napper du reste de glaze caramélisée dans la poêle.",
        timerSeconds: null
      }
    ],
    notes: "La pâte miso est ici incorporée dans une glaze qui caramélise sur le saumon — elle est toujours chauffée. Préférer le miso blanc (shiro miso) pour un goût plus doux. Les épinards frais réduisent considérablement à la cuisson : 200 g donnent à peine 2 portions — c'est normal."
  },

  {
    id: "hiver-03",
    title: "Porc aux pommes et moutarde, façon normande",
    season: "hiver",
    type: "carné",
    cuisine: "Français",
    prepTime: 25,
    description: "La Normandie dans une assiette — pommes acidulées dorées, moutarde, crème fraîche. Le trio normand transforme un simple filet de porc en quelque chose de très cuisiné.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "filet de porc",                      amount: 350,  unit: "g"    },
      { id: "0002", name: "pommes acidulées (type Granny Smith)",amount: 2,    unit: null   },
      { id: "0003", name: "oignon",                             amount: 1,    unit: null   },
      { id: "0004", name: "crème fraîche épaisse pasteurisée",  amount: 100,  unit: "ml"   },
      { id: "0005", name: "moutarde de Dijon",                  amount: 1.5,  unit: "tbsp" },
      { id: "0006", name: "beurre",                             amount: 1,    unit: "tbsp" },
      { id: "0007", name: "thym séché",                         amount: 0.5,  unit: "tsp"  },
      { id: "0008", name: "sel",                                amount: 0.5,  unit: "tsp"  },
      { id: "0009", name: "poivre",                             amount: 0.25, unit: "tsp"  },
      { id: "0010", name: "semoule fine",                       amount: 200,  unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer viande et pommes",
        content: "Couper le filet de porc en médaillons de 2 cm d'épaisseur. Couper les pommes en quartiers sans éplucher (retirer juste le trognon). Émincer l'oignon.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Saisir les médaillons de porc",
        content: "Chauffer le beurre à feu moyen-vif. Déposer les médaillons de porc, cuire 3 min sans bouger, retourner, encore 2 min. Réserver sur assiette.",
        timerSeconds: 300
      },
      {
        id: "s3",
        title: "Dorer oignon et pommes",
        content: "Dans la même poêle, ajouter l'oignon. Remuer 2 min. Ajouter les quartiers de pomme, laisser dorer en retournant pour colorer les deux faces.",
        timerSeconds: 300
      },
      {
        id: "s4",
        title: "Construire la sauce normande",
        content: "Ajouter la moutarde, mélanger rapidement pour enrober. Verser la crème fraîche, ajouter le thym, le sel et le poivre. Remuer à feu doux jusqu'à épaississement.",
        timerSeconds: 180
      },
      {
        id: "s5",
        title: "Préparer la semoule",
        content: "Verser la semoule dans un bol. Couvrir d'eau bouillante au même volume. Couvrir d'une assiette. Laisser gonfler puis égrener à la fourchette.",
        timerSeconds: 180
      },
      {
        id: "s6",
        title: "Finir et servir",
        content: "Remettre les médaillons de porc dans la sauce. Couvrir 1 min à feu doux. Servir sur la semoule, avec les quartiers de pomme dorés.",
        timerSeconds: null
      }
    ],
    notes: "Ne pas éplucher les pommes — la peau tient les quartiers à la cuisson et apporte une légère mâche. Choisir une pomme acidulée (Granny Smith, Reinette) plutôt que sucrée (Golden) : l'acidité équilibre la richesse de la crème."
  },

  {
    id: "hiver-04",
    title: "Curry de pois chiches épinards-coco",
    season: "hiver",
    type: "végétarien",
    cuisine: "Indien",
    prepTime: 25,
    description: "Pois chiches fondants, épinards, lait de coco et épices — le curry végé d'hiver par excellence. Plat complet, protéiné et profondément réconfortant. Tout en un seul poêlon.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "boîte de pois chiches égouttés",  amount: 400, unit: "g"    },
      { id: "0002", name: "épinards frais",                  amount: 200, unit: "g"    },
      { id: "0003", name: "boîte de tomates concassées",    amount: 400, unit: "g"    },
      { id: "0004", name: "lait de coco",                   amount: 200, unit: "ml"   },
      { id: "0005", name: "oignon",                         amount: 1,   unit: null   },
      { id: "0006", name: "gousses d'ail",                  amount: 2,   unit: null   },
      { id: "0007", name: "gingembre frais râpé",           amount: 1,   unit: "tsp"  },
      { id: "0008", name: "curcuma en poudre",              amount: 1,   unit: "tsp"  },
      { id: "0009", name: "cumin en poudre",                amount: 1,   unit: "tsp"  },
      { id: "0010", name: "huile d'olive",                  amount: 2,   unit: "tbsp" },
      { id: "0011", name: "sel",                            amount: 0.5, unit: "tsp"  },
      { id: "0012", name: "riz basmati",                    amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Mettre dans une casserole avec 1,5× son volume d'eau froide. Porter à ébullition, couvrir, réduire à feu doux.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer les éléments",
        content: "Émincer finement l'oignon et l'ail. Râper le gingembre. Égoutter et rincer les pois chiches.",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Faire revenir oignon et aromatiques",
        content: "Chauffer l'huile d'olive à feu moyen. Ajouter l'oignon, faire revenir 3-4 min jusqu'à transparence. Ajouter l'ail et le gingembre, remuer 30 sec.",
        timerSeconds: 270
      },
      {
        id: "s4",
        title: "Faire frire les épices",
        content: "Ajouter le curcuma et le cumin directement dans la poêle. Mélanger à feu moyen pendant 30-60 secondes. Les épices doivent sentir fort — c'est le signal qu'elles sont activées.",
        timerSeconds: 60
      },
      {
        id: "s5",
        title: "Mijoter le curry",
        content: "Ajouter les pois chiches, les tomates concassées et le lait de coco. Remuer, ajouter le sel. Porter à ébullition douce puis réduire à feu moyen.",
        timerSeconds: 600
      },
      {
        id: "s6",
        title: "Ajouter les épinards hors du feu",
        content: "Éteindre le feu. Ajouter les épinards en une fois, mélanger. La chaleur résiduelle va les faner en 1-2 min sans les surcuire. Servir sur le riz.",
        timerSeconds: null
      }
    ],
    notes: "Toujours faire frire les épices 30-60 secondes avant d'ajouter le liquide — c'est ce qui libère les arômes et fait la différence entre un curry profond et un curry fade. Les épinards s'ajoutent en toute dernière minute hors du feu : trop cuits, ils deviennent gris et amers."
  },

  {
    id: "hiver-05",
    title: "Minestrone hivernal",
    season: "hiver",
    type: "végétarien",
    cuisine: "Italien",
    prepTime: 25,
    description: "La soupe repas italienne — légumes d'hiver, haricots blancs, petites pâtes. Rustique, généreux, rassasiant. Le minestrone se bonifie avec ce qu'on a sous la main.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "carottes",                            amount: 2,    unit: null   },
      { id: "0002", name: "branches de céleri",                  amount: 2,    unit: null   },
      { id: "0003", name: "oignon",                             amount: 1,    unit: null   },
      { id: "0004", name: "gousses d'ail",                      amount: 2,    unit: null   },
      { id: "0005", name: "boîte de haricots blancs égouttés",  amount: 400,  unit: "g"    },
      { id: "0006", name: "boîte de tomates concassées",        amount: 400,  unit: "g"    },
      { id: "0007", name: "petites pâtes (orzo ou ditalini)",   amount: 80,   unit: "g"    },
      { id: "0008", name: "cube de bouillon de légumes bio",    amount: 1,    unit: null   },
      { id: "0009", name: "huile d'olive",                      amount: 2,    unit: "tbsp" },
      { id: "0010", name: "thym séché",                         amount: 1,    unit: "tsp"  },
      { id: "0011", name: "sel",                                amount: 0.5,  unit: "tsp"  },
      { id: "0012", name: "poivre",                             amount: 0.25, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Couper tous les légumes",
        content: "Couper les carottes en petits dés (1 cm). Émincer le céleri en rondelles fines. Émincer l'oignon et l'ail. Égoutter et rincer les haricots blancs.",
        timerSeconds: 240
      },
      {
        id: "s2",
        title: "Faire revenir la base aromatique",
        content: "Chauffer l'huile d'olive à feu moyen dans une grande casserole. Ajouter l'oignon, l'ail et le céleri. Faire revenir 3 min jusqu'à légère dorure.",
        timerSeconds: 180
      },
      {
        id: "s3",
        title: "Ajouter légumes et bouillon",
        content: "Ajouter les carottes, les tomates concassées, les haricots blancs et le thym. Émietter le cube de bouillon dans la casserole. Verser 800 ml d'eau chaude. Remuer. Porter à ébullition.",
        timerSeconds: 300
      },
      {
        id: "s4",
        title: "Cuire les légumes",
        content: "Maintenir une ébullition modérée. Les carottes doivent commencer à ramollir.",
        timerSeconds: 600
      },
      {
        id: "s5",
        title: "Ajouter les pâtes",
        content: "Ajouter les petites pâtes directement dans la soupe. Mélanger pour éviter que ça colle au fond. Les pâtes vont épaissir le bouillon.",
        timerSeconds: 480
      },
      {
        id: "s6",
        title: "Assaisonner et servir",
        content: "Rectifier avec le sel et le poivre. Servir dans des bols profonds avec un filet d'huile d'olive crue. Facultatif : copeaux de parmesan.",
        timerSeconds: null
      }
    ],
    notes: "Ajouter les pâtes directement dans la soupe — elles absorbent le bouillon et épaississent naturellement. Si tu prépares à l'avance, cuire les pâtes séparément et les ajouter au moment de servir pour éviter qu'elles gonflent. Un filet d'huile d'olive crue et du parmesan râpé au service — c'est le finish à l'italienne."
  },


  // ════════════════════════════════════════════════════════════
  // PRINTEMPS — 3 carnés · 2 végétariens
  // Mutualisés : asperges · petits pois · citron · courgette ·
  //              ail · huile d'olive
  // ════════════════════════════════════════════════════════════

  {
    id: "printemps-01",
    title: "Côtelettes d'agneau aux herbes, asperges poêlées",
    season: "printemps",
    type: "carné",
    cuisine: "Français",
    prepTime: 20,
    description: "Le plat de printemps par excellence — agneau frotté au romarin et ail, asperges dorées à la poêle. Simple, rapide, et le genre d'assiette qui fait son effet sans effort.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "côtelettes d'agneau", amount: 4,    unit: null   },
      { id: "0002", name: "asperges vertes",     amount: 300,  unit: "g"    },
      { id: "0003", name: "gousses d'ail",       amount: 3,    unit: null   },
      { id: "0004", name: "romarin séché",       amount: 1,    unit: "tsp"  },
      { id: "0005", name: "huile d'olive",       amount: 2,    unit: "tbsp" },
      { id: "0006", name: "sel",                 amount: 0.5,  unit: "tsp"  },
      { id: "0007", name: "poivre",              amount: 0.25, unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer les côtelettes",
        content: "Écraser l'ail avec le plat d'un couteau (ou émincer très finement). Frotter les côtelettes des deux côtés avec l'ail, le romarin, le sel et le poivre. Laisser reposer 5 min à température ambiante pendant que tu prépares les asperges.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Préparer les asperges",
        content: "Tenir chaque asperge aux deux extrémités et plier doucement — elle cassera naturellement à l'endroit où la tige devient ligneuse. Jeter la base dure. Rincer.",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Saisir les côtelettes à feu vif",
        content: "Chauffer 1 cuillère à soupe d'huile d'olive dans une poêle à feu vif. Déposer les côtelettes, ne pas bouger. La chaleur doit être assez forte pour entendre un gréssillement franc. Retourner après coloration.",
        timerSeconds: 360
      },
      {
        id: "s4",
        title: "Laisser reposer sous papier alu",
        content: "Retirer les côtelettes et poser sur une assiette. Recouvrir de papier aluminium. Ce repos est obligatoire : il redistribue les jus et attendrit la viande. Ne pas sauter cette étape.",
        timerSeconds: 300
      },
      {
        id: "s5",
        title: "Poêler les asperges",
        content: "Dans la même poêle avec le reste d'huile d'olive, ajouter les asperges et une pincée de sel. Faire sauter à feu moyen-vif en remuant régulièrement. Elles sont prêtes quand elles sont tendres mais encore légèrement croquantes.",
        timerSeconds: 360
      },
      {
        id: "s6",
        title: "Dresser et servir",
        content: "Disposer les asperges dans les assiettes. Poser les côtelettes par-dessus. Verser le jus de repos accumulé sous le papier alu directement sur les côtelettes.",
        timerSeconds: null
      }
    ],
    notes: "Le repos de la viande (étape 4) est aussi important que la cuisson elle-même — une côtelette coupée immédiatement perd tout son jus dans l'assiette. La cuisson rosée est idéale pour l'agneau. Si tu préfères bien cuit, ajouter 2 min par face."
  },

  {
    id: "printemps-02",
    title: "Crevettes sautées citron-gingembre, petits pois",
    season: "printemps",
    type: "carné",
    cuisine: "Asiatique",
    prepTime: 20,
    description: "Crevettes roses en 3 min, petits pois sucrés, zeste de citron. Le plat le plus rapide des 20 fiches — léger, parfumé, printanier à 100%.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "crevettes crues décortiquées",    amount: 300, unit: "g"    },
      { id: "0002", name: "petits pois (frais ou surgelés)", amount: 200, unit: "g"    },
      { id: "0003", name: "citron (jus + zeste)",            amount: 1,   unit: null   },
      { id: "0004", name: "gingembre frais râpé",            amount: 1,   unit: "tsp"  },
      { id: "0005", name: "gousses d'ail",                   amount: 2,   unit: null   },
      { id: "0006", name: "sauce soja",                      amount: 1,   unit: "tbsp" },
      { id: "0007", name: "huile neutre",                    amount: 1,   unit: "tbsp" },
      { id: "0008", name: "riz basmati",                     amount: 200, unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer le riz",
        content: "Rincer le riz à l'eau froide. Mettre dans une casserole avec 1,5× son volume d'eau froide. Porter à ébullition, couvrir, réduire à feu doux. Ne pas soulever le couvercle.",
        timerSeconds: 720
      },
      {
        id: "s2",
        title: "Préparer citron, ail et gingembre",
        content: "Presser le citron, récupérer le zeste avec une râpe (frotter la peau dorée, pas la partie blanche amère). Émincer l'ail. Râper le gingembre. Garder zeste et jus séparés.",
        timerSeconds: 120
      },
      {
        id: "s3",
        title: "Saisir les crevettes à feu vif",
        content: "Chauffer l'huile à feu vif. Ajouter l'ail et le gingembre, remuer 20 secondes. Ajouter les crevettes en une couche. Ne pas remuer pendant 1 min pour obtenir une belle coloration.",
        timerSeconds: 90
      },
      {
        id: "s4",
        title: "Ajouter petits pois et sauce",
        content: "Dès que les crevettes deviennent roses sur le dessous, les retourner. Ajouter les petits pois, la sauce soja et le jus de citron. Remuer et cuire 2 min à feu vif.",
        timerSeconds: 120
      },
      {
        id: "s5",
        title: "Zeste et service",
        content: "Éteindre le feu. Ajouter le zeste de citron, mélanger. Servir immédiatement sur le riz — les crevettes continuent de cuire hors du feu.",
        timerSeconds: null
      }
    ],
    notes: "Les crevettes cuisent extrêmement vite — le signal de cuisson parfaite : elles passent du gris translucide au rose opaque et se recourbent en C. Un C = cuit. Un O (ovale fermé) = trop cuit et caoutchouteux. Retirer la poêle du feu dès le C obtenu."
  },

  {
    id: "printemps-03",
    title: "Poulet piccata citron-câpres, courgettes sautées",
    season: "printemps",
    type: "carné",
    cuisine: "Italien",
    prepTime: 25,
    description: "La piccata — technique italienne simple : escalope farinée, sauce citron-câpres en 2 min. Le farinage donne une croûte légère dorée et épaissit naturellement la sauce. Résultat restaurant, effort bistrot.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "escalopes de poulet", amount: 2,    unit: null   },
      { id: "0002", name: "courgette",           amount: 1,    unit: null   },
      { id: "0003", name: "citron (jus + zeste)",amount: 1,    unit: null   },
      { id: "0004", name: "câpres",              amount: 1,    unit: "tbsp" },
      { id: "0005", name: "gousses d'ail",       amount: 2,    unit: null   },
      { id: "0006", name: "farine",              amount: 2,    unit: "tbsp" },
      { id: "0007", name: "huile d'olive",       amount: 2,    unit: "tbsp" },
      { id: "0008", name: "sel",                 amount: 0.5,  unit: "tsp"  },
      { id: "0009", name: "poivre",              amount: 0.25, unit: "tsp"  },
      { id: "0010", name: "semoule fine",        amount: 200,  unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Fariner les escalopes et préparer",
        content: "Couper la courgette en demi-rondelles. Émincer l'ail. Presser le citron et garder le zeste. Verser la farine dans une assiette creuse. Passer les escalopes dedans des deux côtés, secouer l'excédent.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Saisir les escalopes farinées",
        content: "Chauffer l'huile d'olive à feu moyen-vif. Déposer les escalopes farinées. Cuire 3 min sans bouger jusqu'à dorure, retourner, encore 3 min. Réserver sur assiette.",
        timerSeconds: 360
      },
      {
        id: "s3",
        title: "Sauter courgettes et ail",
        content: "Dans la même poêle, ajouter l'ail et la courgette. Faire sauter à feu moyen 4 min jusqu'à légère dorure des courgettes.",
        timerSeconds: 240
      },
      {
        id: "s4",
        title: "Déglacer citron-câpres",
        content: "Verser le jus de citron dans la poêle. Ajouter les câpres. Mélanger 30 secondes à feu vif — la sauce se forme en décollant les sucs du fond. Elle va légèrement épaissir grâce à la farine résiduelle.",
        timerSeconds: 60
      },
      {
        id: "s5",
        title: "Finir et préparer la semoule",
        content: "Remettre les escalopes dans la sauce 1 min. Pendant ce temps, verser la semoule dans un bol, couvrir d'eau bouillante au même volume, couvrir d'une assiette, laisser gonfler. Servir escalopes nappées de sauce, semoule à côté.",
        timerSeconds: 180
      }
    ],
    notes: "Le farinage est la technique clé de la piccata : enrober légèrement de farine, secouer l'excédent, cuire immédiatement. L'excédent de farine brûle dans la poêle et rend la sauce amère — secouer bien. Les câpres se rincent rapidement si elles sont en saumure (trop salées sinon)."
  },

  {
    id: "printemps-04",
    title: "Frittata aux asperges et fromage de chèvre",
    season: "printemps",
    type: "végétarien",
    cuisine: "Italien",
    prepTime: 20,
    description: "La frittata — l'omelette italienne épaisse qui se cuit couverte. Asperges fondantes, chèvre coulant. Plat végé élégant en 20 min avec une seule poêle.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "œufs (calibre M)",              amount: 4,    unit: null   },
      { id: "0002", name: "asperges vertes",               amount: 200,  unit: "g"    },
      { id: "0003", name: "bûche de chèvre pasteurisée",  amount: 80,   unit: "g"    },
      { id: "0004", name: "gousse d'ail",                  amount: 1,    unit: null   },
      { id: "0005", name: "huile d'olive",                 amount: 1,    unit: "tbsp" },
      { id: "0006", name: "sel",                           amount: 0.5,  unit: "tsp"  },
      { id: "0007", name: "poivre",                        amount: 0.25, unit: "tsp"  },
      { id: "0008", name: "herbes de Provence",            amount: 0.5,  unit: "tsp"  }
    ],
    steps: [
      {
        id: "s1",
        title: "Préparer les asperges",
        content: "Tenir chaque asperge aux deux extrémités, plier — elle casse naturellement au bon endroit. Couper les tiges gardées en tronçons de 3 cm. Émincer l'ail.",
        timerSeconds: null
      },
      {
        id: "s2",
        title: "Battre les œufs",
        content: "Casser les œufs dans un bol. Battre vigoureusement à la fourchette pendant 1 minute — le mélange doit être homogène et légèrement mousseux. Ajouter le sel, le poivre et les herbes de Provence. Mélanger.",
        timerSeconds: 60
      },
      {
        id: "s3",
        title: "Sauter asperges et ail",
        content: "Chauffer l'huile d'olive à feu moyen dans une poêle à bords hauts. Ajouter l'ail, remuer 30 sec. Ajouter les tronçons d'asperges, sauter 4 min en remuant. Les asperges doivent être mi-tendres.",
        timerSeconds: 270
      },
      {
        id: "s4",
        title: "Ajouter chèvre et œufs",
        content: "Émietter le fromage de chèvre en petits morceaux sur les asperges, répartis uniformément. Verser le mélange d'œufs par-dessus. Baisser immédiatement à feu doux.",
        timerSeconds: null
      },
      {
        id: "s5",
        title: "Cuire à couvert à feu doux",
        content: "Couvrir la poêle. La frittata cuit lentement par la chaleur de dessous et la vapeur de dessus. Elle est prête quand le centre ne tremble plus au secouage.",
        timerSeconds: 600
      },
      {
        id: "s6",
        title: "Servir",
        content: "Servir directement à la poêle en découpant en parts, ou faire glisser sur une planche. Elle doit être dorée dessous et juste prise dessus.",
        timerSeconds: null
      }
    ],
    notes: "La frittata se distingue de l'omelette par sa cuisson lente à couvert. Test de cuisson : secouer légèrement la poêle, le centre ne doit plus trembler comme du liquide. Utiliser une poêle à bords hauts (20-22 cm de diamètre idéalement). Servir avec une tranche de pain bio."
  },

  {
    id: "printemps-05",
    title: "Pâtes primavera petits pois-courgette-citron",
    season: "printemps",
    type: "végétarien",
    cuisine: "Italien",
    prepTime: 25,
    description: "Pâtes + légumes de printemps + zeste de citron. Le plat le plus frais et lumineux du plan annuel. L'eau de cuisson des pâtes est le secret d'une sauce crémeuse sans crème.",
    baseServings: 2,
    ingredients: [
      { id: "0001", name: "linguines ou spaghetti",                 amount: 180,  unit: "g"    },
      { id: "0002", name: "petits pois (frais ou surgelés)",        amount: 150,  unit: "g"    },
      { id: "0003", name: "courgette",                              amount: 1,    unit: null   },
      { id: "0004", name: "citron (jus + zeste)",                   amount: 1,    unit: null   },
      { id: "0005", name: "gousses d'ail",                          amount: 2,    unit: null   },
      { id: "0006", name: "parmesan râpé",                          amount: 40,   unit: "g"    },
      { id: "0007", name: "huile d'olive",                          amount: 2,    unit: "tbsp" },
      { id: "0008", name: "sel",                                    amount: 0.5,  unit: "tsp"  },
      { id: "0009", name: "poivre",                                 amount: 0.25, unit: "tsp"  },
      { id: "0010", name: "feuilles de menthe fraîche (facultatif)",amount: 10,   unit: "g"    }
    ],
    steps: [
      {
        id: "s1",
        title: "Lancer les pâtes",
        content: "Porter une grande casserole d'eau généreusement salée à ébullition. Ajouter les pâtes. Cuire selon les indications du paquet jusqu'à al dente (légèrement ferme sous la dent).",
        timerSeconds: 600
      },
      {
        id: "s2",
        title: "Préparer légumes et citron",
        content: "Couper la courgette en très petits dés (1 cm). Émincer l'ail. Presser le citron et récupérer son zeste.",
        timerSeconds: null
      },
      {
        id: "s3",
        title: "Faire revenir ail et courgette",
        content: "Chauffer l'huile d'olive à feu moyen. Ajouter l'ail, remuer 30 sec. Ajouter la courgette en dés. Faire sauter jusqu'à légère coloration.",
        timerSeconds: 240
      },
      {
        id: "s4",
        title: "Ajouter les petits pois",
        content: "Ajouter les petits pois dans la poêle. Cuire 3 min à feu moyen. Les petits pois surgelés n'ont pas besoin de décongélation préalable.",
        timerSeconds: 180
      },
      {
        id: "s5",
        title: "Récupérer l'eau de cuisson — important",
        content: "Avant d'égoutter les pâtes, prélever 1 grand verre d'eau de cuisson. Égoutter ensuite les pâtes.",
        timerSeconds: null
      },
      {
        id: "s6",
        title: "Mélanger et créer la sauce",
        content: "Ajouter les pâtes dans la poêle avec les légumes. Verser le jus de citron, le parmesan râpé, le sel, le poivre et 3-4 cuillères à soupe d'eau de cuisson. Mélanger vivement à feu doux — la sauce se crée par émulsion. Ajouter de l'eau de cuisson si nécessaire. Finir avec le zeste de citron et les feuilles de menthe.",
        timerSeconds: null
      }
    ],
    notes: "L'eau de cuisson des pâtes est de l'or liquide — riche en amidon, elle lie la sauce et l'émulsionne avec l'huile d'olive. Toujours en garder un verre avant d'égoutter. La menthe fraîche avec les petits pois, c'est une association classique italienne qui surprend toujours."
  }

];
