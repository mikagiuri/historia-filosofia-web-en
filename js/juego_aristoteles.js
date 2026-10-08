// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/juego_aristoteles.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const JUEGO_ARIS = {
 "meta": {
  "imgBase": "media/juegos/aristoteles/",
  "etapas": [
   {
    "id": "j",
    "label": "Youth",
    "rondas": 3
   },
   {
    "id": "m",
    "label": "Maturity",
    "rondas": 6,
    "paso": {
     "hac": 3,
     "t": "The years go by: your lands and your work bear fruit."
    }
   },
   {
    "id": "v",
    "label": "Old age",
    "rondas": 3,
    "paso": {
     "hac": 1,
     "sal": -1,
     "t": "Old age arrives: you have savings and income, but your body begins to suffer."
    }
   }
  ]
 },
 "stats": [
  {
   "k": "sal",
   "em": "🏋️",
   "label": "Health",
   "niveles": [
    [
     2,
     "at the limit"
    ],
    [
     4,
     "frail"
    ],
    [
     7,
     "good"
    ],
    [
     99,
     "robust"
    ]
   ]
  },
  {
   "k": "hac",
   "em": "💰",
   "label": "Wealth",
   "niveles": [
    [
     2,
     "on the brink of ruin"
    ],
    [
     4,
     "scant"
    ],
    [
     7,
     "comfortable"
    ],
    [
     99,
     "rich"
    ]
   ]
  },
  {
   "k": "car",
   "em": "🧠",
   "label": "Character",
   "niveles": [
    [
     2,
     "degraded"
    ],
    [
     4,
     "wavering"
    ],
    [
     7,
     "firm"
    ],
    [
     99,
     "exemplary"
    ]
   ]
  },
  {
   "k": "rep",
   "em": "🏛️",
   "label": "Reputation",
   "niveles": [
    [
     2,
     "despised"
    ],
    [
     4,
     "modest"
    ],
    [
     7,
     "respected"
    ],
    [
     99,
     "famous"
    ]
   ]
  },
  {
   "k": "ene",
   "em": "⚔️",
   "label": "Enemies",
   "niveles": [
    [
     1,
     "none"
    ],
    [
     3,
     "some"
    ],
    [
     5,
     "many"
    ],
    [
     7,
     "powerful"
    ],
    [
     99,
     "they want you dead"
    ]
   ]
  },
  {
   "k": "phr",
   "em": "🧭",
   "label": "Prudence",
   "niveles": [
    [
     3,
     "impulsive"
    ],
    [
     6,
     "sensible"
    ],
    [
     99,
     "very prudent"
    ]
   ]
  }
 ],
 "chars": [
  {
   "id": "socrates",
   "name": "Socrates",
   "orient": "Contemplative",
   "sal": 8,
   "hac": 4,
   "car": 8,
   "rep": 4,
   "ene": 2,
   "phr": 8,
   "virtud": "Voluntary poverty",
   "virtudT": "Money matters little to him: he loses half as much as usual when something costs him money.",
   "debilidad": "Misunderstood",
   "debilidadT": "Every truth spoken in public wins him more enemies than it does for others.",
   "mods": {
    "verdad": {
     "ene": 1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "Poor, as healthy as a soldier and very prudent; the city knows him more as a nuisance than as a wise man.",
   "frase": "I only know that I know nothing.",
   "destino": "Condemned to drink hemlock in 399 BC, accused of impiety and of corrupting the young; he refused to flee from prison."
  },
  {
   "id": "hipatia",
   "name": "Hypatia",
   "orient": "Contemplative",
   "sal": 6,
   "hac": 6,
   "car": 8,
   "rep": 7,
   "ene": 2,
   "phr": 7,
   "virtud": "Prestige",
   "virtudT": "Her pupils respect her: she gains reputation more easily.",
   "debilidad": "Social distrust",
   "debilidadT": "Everything she does in full view of everyone wins her enemies.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "A respected teacher from a well-off family; her fame protects her… and exposes her.",
   "frase": "Knowledge is my strength.",
   "destino": "Murdered in 415 by a mob of Christians in Alexandria, in the midst of the confrontation between Bishop Cyril and the prefect Orestes."
  },
  {
   "id": "platon",
   "name": "Plato",
   "orient": "Contemplative",
   "sal": 7,
   "hac": 8,
   "car": 7,
   "rep": 6,
   "ene": 1,
   "phr": 7,
   "virtud": "Idealism",
   "virtudT": "Acting justly strengthens his character more than it does for others.",
   "debilidad": "Rigidity",
   "debilidadT": "Pacts and compromises wear down his character.",
   "mods": {
    "justo": {
     "car": 1
    },
    "pacto": {
     "car": -1
    }
   },
   "perfil": "A rich, well-connected aristocrat, with few enemies and a project: that the wise should rule.",
   "frase": "Let the lover of wisdom rule.",
   "destino": "He travelled three times to Syracuse to educate its tyrants and, according to tradition, on one of those journeys he was sold as a slave. He died an old man in Athens, at the head of the Academy."
  },
  {
   "id": "protagoras",
   "name": "Protagoras",
   "orient": "Discursive",
   "sal": 6,
   "hac": 8,
   "car": 6,
   "rep": 8,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "virtud": "Master of rhetoric",
   "virtudT": "He charges dearly for teaching: everything he does in full view of everyone earns him money.",
   "debilidad": "Agnostic",
   "debilidadT": "What he says about the gods causes scandal: every uncomfortable truth wins him more enemies.",
   "mods": {
    "publico": {
     "hac": 1
    },
    "verdad": {
     "ene": 1
    }
   },
   "perfil": "The most famous and best-paid sophist in Greece; a friend of Pericles and suspect to the devout.",
   "frase": "Man is the measure of all things.",
   "destino": "Pericles commissioned him to draw up the laws of the colony of Thurii. According to tradition, he was accused of impiety for his book On the Gods, his books were burned in the agora, and he died in a shipwreck while fleeing from Athens."
  },
  {
   "id": "diogenes",
   "name": "Diogenes",
   "orient": "Contemplative",
   "sal": 8,
   "hac": 2,
   "car": 7,
   "rep": 4,
   "ene": 2,
   "phr": 6,
   "sinImg": true,
   "noRuina": true,
   "virtud": "Autarky",
   "virtudT": "He needs almost nothing: running out of money does not finish him, and he loses it at half the rate of others.",
   "debilidad": "Shamelessness (anaideia)",
   "debilidadT": "He mocks everyone: every truth spoken in public wins him enemies and costs him reputation.",
   "mods": {
    "verdad": {
     "ene": 1,
     "rep": -1
    }
   },
   "mult": {
    "hac": {
     "down": 0.5
    }
   },
   "perfil": "He lives in a jar, begs for alms and laughs at conventions. He is healthy and free, and has almost nothing to lose.",
   "frase": "Stand aside, you are blocking my sun.",
   "destino": "He lived in Athens and Corinth, poor by choice and mocking conventions. He died very old in Corinth around 323 BC; according to tradition, in the same year as Alexander."
  },
  {
   "id": "aspasia",
   "name": "Aspasia",
   "orient": "Discursive",
   "sal": 6,
   "hac": 6,
   "car": 6,
   "rep": 5,
   "ene": 2,
   "phr": 6,
   "virtud": "Eloquence",
   "virtudT": "Her speeches persuade: she gains reputation more easily.",
   "debilidad": "Dependence",
   "debilidadT": "A foreigner and a woman, she depends on protectors: when she loses reputation, she loses twice as much.",
   "mult": {
    "rep": {
     "up": 1.5,
     "down": 2
    }
   },
   "perfil": "A cultured, eloquent foreigner in a city that does not let women vote; her position depends on others.",
   "frase": "Words have power too.",
   "destino": "Pericles’s companion. According to Plutarch, she was accused of impiety and Pericles wept before the jury to save her."
  },
  {
   "id": "aristofanes",
   "name": "Aristophanes",
   "orient": "Discursive",
   "sal": 6,
   "hac": 6,
   "car": 5,
   "rep": 6,
   "ene": 2,
   "phr": 5,
   "virtud": "Wit and satire",
   "virtudT": "Speaking truths in public brings him fame…",
   "debilidad": "Biting tongue",
   "debilidadT": "…and enemies too.",
   "mods": {
    "verdad": {
     "rep": 1,
     "ene": 1
    }
   },
   "perfil": "A successful comic playwright, neither rich nor poor, with a tongue the city applauds and the powerful fear.",
   "frase": "Laughter tells the truth too.",
   "destino": "Cleon denounced him for ridiculing Athens before foreigners; he went on writing comedies into old age."
  },
  {
   "id": "pericles",
   "name": "Pericles",
   "orient": "Politics",
   "sal": 7,
   "hac": 8,
   "car": 6,
   "rep": 9,
   "ene": 4,
   "phr": 7,
   "sinImg": true,
   "riesgo": 0.1,
   "virtud": "Political prudence",
   "virtudT": "Aristotle holds him up as an example of a prudent man: his risky decisions turn out well more often.",
   "debilidad": "Target of his rivals",
   "debilidadT": "Since they cannot beat him, they attack those close to him: everything he does in public wins him enemies.",
   "mods": {
    "publico": {
     "ene": 1
    }
   },
   "perfil": "A rich aristocrat, elected general year after year; the most powerful politician in Athens, surrounded by friends… and by accusations against them.",
   "frase": "We love beauty with simplicity and wisdom without softness.",
   "destino": "He led Athens for some thirty years, known as the ‘Age of Pericles’. His rivals prosecuted Phidias, Anaxagoras and Aspasia. He died in 429 BC of the plague, at the beginning of the Peloponnesian War."
  },
  {
   "id": "aristides",
   "name": "Aristides",
   "orient": "Politics",
   "sal": 7,
   "hac": 6,
   "car": 9,
   "rep": 7,
   "ene": 3,
   "phr": 6,
   "sinImg": true,
   "ostracismo": 0.7,
   "virtud": "The Just",
   "virtudT": "Acting justly brings him fame, and acting unjustly weighs on him more than on anyone.",
   "debilidad": "Justice without concessions",
   "debilidadT": "Every just act wins him enemies, and the city grows tired of hearing him called ‘the Just’: if he has great fame, ostracism threatens him twice as much.",
   "mods": {
    "justo": {
     "rep": 1,
     "ene": 1
    },
    "injusto": {
     "car": -1
    }
   },
   "perfil": "An aristocrat of modest fortune and a general at Marathon. All Athens calls him ‘the Just’, and some already find that irritating.",
   "frase": "Nothing would be more advantageous… or more unjust.",
   "destino": "Ostracised in 482 BC. According to Plutarch, a peasant who could not write asked him to inscribe ‘Aristides’ himself on the ostrakon, because he was tired of hearing him called ‘the Just’. He returned in 480 to fight at Salamis and Plataea, fairly fixed the tribute of the Delian League, and died so poor that the city provided dowries for his daughters."
  },
  {
   "id": "alcibiades",
   "name": "Alcibiades",
   "orient": "Politics",
   "sal": 8,
   "hac": 9,
   "car": 4,
   "rep": 8,
   "ene": 3,
   "phr": 3,
   "virtud": "Charisma and daring",
   "virtudT": "He gains reputation more easily than anyone.",
   "debilidad": "Hedonism",
   "debilidadT": "Pleasures damage his character and health more.",
   "mods": {
    "placer": {
     "car": -1,
     "sal": -1
    }
   },
   "mult": {
    "rep": {
     "up": 1.5
    }
   },
   "perfil": "Young, rich, handsome and famous; not very prudent and surrounded by envy.",
   "frase": "My brilliance will guide the others.",
   "destino": "Accused of sacrilege, he went over to Sparta, then to Persia, and returned to Athens; he was murdered in Phrygia in 404 BC."
  },
  {
   "id": "cleon",
   "name": "Cleon",
   "orient": "Politics",
   "sal": 6,
   "hac": 7,
   "car": 3,
   "rep": 7,
   "ene": 3,
   "phr": 3,
   "virtud": "Popular oratory",
   "virtudT": "When he gains reputation, he gains double…",
   "debilidad": "Demagoguery",
   "debilidadT": "…and when he loses it, he also loses double.",
   "mult": {
    "rep": {
     "up": 2,
     "down": 2
    }
   },
   "perfil": "A wealthy merchant who rules the assembly by shouting; little character and plenty of ambition.",
   "frase": "The people want firmness.",
   "destino": "He died in 422 BC at the battle of Amphipolis, at the head of the Athenian army."
  },
  {
   "id": "critias",
   "name": "Critias",
   "orient": "Politics",
   "sal": 6,
   "hac": 8,
   "car": 3,
   "rep": 5,
   "ene": 3,
   "phr": 4,
   "virtud": "Political cunning",
   "virtudT": "Imposing himself by force brings him more money…",
   "debilidad": "Tyranny",
   "debilidadT": "…but makes him more enemies.",
   "mods": {
    "fuerza": {
     "hac": 1,
     "ene": 1
    }
   },
   "perfil": "A rich, cultured aristocrat, resentful of democracy.",
   "frase": "Order is imposed.",
   "destino": "Leader of the Thirty Tyrants in 404 BC; he died the following year fighting the democrats at Munichia."
  },
  {
   "id": "trasimaco",
   "name": "Thrasymachus",
   "orient": "Politics",
   "sal": 6,
   "hac": 7,
   "car": 4,
   "rep": 5,
   "ene": 2,
   "phr": 3,
   "virtud": "Cunning",
   "virtudT": "He makes money easily when he plays dirty…",
   "debilidad": "Moral cynicism",
   "debilidadT": "…but, since he does not believe in justice, acting well strengthens him by half.",
   "mods": {
    "injusto": {
     "hac": 1
    }
   },
   "mult": {
    "car": {
     "up": 0.5
    }
   },
   "perfil": "A successful sophist who charges dearly; he thinks justice is whatever suits the stronger.",
   "frase": "Justice serves the powerful.",
   "destino": "A sophist from Chalcedon known above all from Plato’s Republic; we hardly know how his life ended."
  },
  {
   "id": "alejandro",
   "name": "Alexander the Great",
   "orient": "Politics",
   "sal": 9,
   "hac": 10,
   "car": 4,
   "rep": 8,
   "ene": 4,
   "phr": 4,
   "virtud": "Ambition and command",
   "virtudT": "Imposing himself by force brings him fame.",
   "debilidad": "Excess",
   "debilidadT": "He is incapable of choosing the middle-way options in which others take refuge.",
   "mods": {
    "fuerza": {
     "rep": 1
    }
   },
   "bloquea": [
    "medida"
   ],
   "perfil": "Heir to a kingdom, immensely rich, strong and famous, with enemies from the cradle.",
   "frase": "The world is not enough.",
   "destino": "He conquered an empire as far as India and died in Babylon in 323 BC, aged 32."
  }
 ],
 "dilemmas": [
  {
   "id": "efebo",
   "etapa": "j",
   "virtue": "Courage (andreia)",
   "sit": "You are eighteen and begin your service as an ephebe: two years of guard duty on the frontiers of Attica.",
   "opts": [
    {
     "t": "Train hard and make friends in the garrison.",
     "sal": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "You come back strong and with friends who will defend you."
    },
    {
     "t": "Get a comfortable posting thanks to your family’s contacts.",
     "rep": -1,
     "car": -1,
     "hac": 1,
     "r": "You save yourself cold and marching, but the others know it."
    },
    {
     "t": "Prove your courage by picking fights with the shepherds on the frontier.",
     "sal": -2,
     "rep": 1,
     "ene": 1,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "You earn a reputation for bravery… and a needless scar or two."
    },
    {
     "t": "Use the night watches to read and argue with other ephebes.",
     "phr": 2,
     "car": 1,
     "sal": -1,
     "r": "You sleep little, but you learn to think before acting."
    }
   ]
  },
  {
   "id": "maestro",
   "etapa": "j",
   "virtue": "Prudence (phronesis)",
   "sit": "You want an education. In the agora, a sophist charges a lot to teach you how to win lawsuits; a philosopher charges nothing, but asks questions that make the powerful uncomfortable.",
   "hist": "Protagoras came to charge 100 minas for a course; Socrates boasted that he never charged.",
   "opts": [
    {
     "t": "Pay the sophist: rhetoric opens every door.",
     "hac": -3,
     "rep": 2,
     "phr": 1,
     "r": "You learn to persuade anyone. Your purse feels it."
    },
    {
     "t": "Follow the philosopher, even if you are seen with someone who is frowned upon.",
     "car": 1,
     "phr": 2,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "r": "You learn to examine yourself; some parents no longer want their sons to associate with you."
    },
    {
     "t": "Neither: learn your family’s trade.",
     "hac": 2,
     "phr": 1,
     "rep": -1,
     "r": "You gain money and a trade, but in the agora nobody knows who you are."
    },
    {
     "t": "Both at once, working by day to pay the sophist.",
     "hac": -2,
     "sal": -2,
     "phr": 2,
     "rep": 1,
     "r": "You learn everything… and end up exhausted."
    }
   ]
  },
  {
   "id": "simposio",
   "etapa": "j",
   "virtue": "Temperance (sophrosyne)",
   "sit": "At a symposium in a rich man’s house, the wine flows unmixed with water and you are challenged to drink until dawn.",
   "hist": "The Greeks considered drinking unmixed wine barbaric; in Plato’s Symposium, Socrates drinks all night without getting drunk.",
   "opts": [
    {
     "t": "Accept the challenge and win it.",
     "sal": -2,
     "rep": 2,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "You are the legend of the night; your liver does not share that view."
    },
    {
     "t": "Drink little and stay for the conversation.",
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "You leave with a clear head and two new friends."
    },
    {
     "t": "Leave, saying out loud what you think of such parties.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Aristotle would also call that insensibility a vice: they take you for a killjoy."
    },
    {
     "t": "Ask to be symposiarch and decide yourself how much the wine is watered.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 1,
      "r": "You run the night with grace: everyone wants to invite you again."
     },
     "lose": {
      "rep": -2,
      "r": "They take you for a pedant and boo you."
     }
    }
   ]
  },
  {
   "id": "herencia",
   "etapa": "j",
   "virtue": "Generosity (eleutheriotes)",
   "sit": "Your father dies. He leaves you some olive groves in Attica and debts to several neighbours.",
   "opts": [
    {
     "t": "Pay all the debts first, even if you are left with little.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "You are short of money, but you have kept your word."
    },
    {
     "t": "Sell the olive groves and live on the income in the city.",
     "hac": 1,
     "rep": 1,
     "phr": -1,
     "r": "A comfortable life in the city; the creditors will have to wait."
    },
    {
     "t": "Take out more loans to buy a merchant ship.",
     "risk": true,
     "win": {
      "hac": 5,
      "r": "The ship returns laden with grain from the Black Sea."
     },
     "lose": {
      "hac": -4,
      "r": "The ship sinks off Euboea with its entire cargo."
     }
    },
    {
     "t": "Do not pay the poorest neighbours: they cannot take you to court.",
     "hac": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "You gain a few drachmas and lose your neighbours."
    }
   ]
  },
  {
   "id": "aval",
   "etapa": "j",
   "virtue": "Friendship (philia)",
   "sit": "A childhood friend asks you to guarantee an enormous loan for his shipping business.",
   "opts": [
    {
     "t": "Guarantee all of it: friends have everything in common.",
     "car": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "hac": 1,
      "r": "The business goes well and your friend is grateful to you for life."
     },
     "lose": {
      "hac": -5,
      "r": "The business goes bankrupt and the creditor comes after you."
     }
    },
    {
     "t": "Refuse: friendship should not be mixed with money.",
     "car": -1,
     "rep": -1,
     "r": "Your friend understands… halfway."
    },
    {
     "t": "Lend him only what you can lose without being ruined.",
     "hac": -2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "It does not save him entirely, but you do not let him down."
    },
    {
     "t": "Guarantee it in exchange for half the business.",
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "A good deal… although the friendship is no longer the same."
     },
     "lose": {
      "hac": -4,
      "r": "It goes bankrupt, and on top of that your friend resents you."
     }
    }
   ]
  },
  {
   "id": "delion",
   "etapa": "j",
   "virtue": "Courage (andreia)",
   "sit": "Your first battle as a hoplite. The phalanx begins to give way and the man on your left falls wounded.",
   "hist": "At the battle of Delium (424 BC), according to Alcibiades in the Symposium, Socrates withdrew without losing his composure and covered his comrades.",
   "opts": [
    {
     "t": "Throw down your shield and run.",
     "rep": -3,
     "car": -2,
     "r": "You save your life, but in Athens there is no greater disgrace than losing your shield."
    },
    {
     "t": "Charge the enemy alone.",
     "tags": [
      "fuerza"
     ],
     "muerte": 0.12,
     "muerteT": "You fall, pierced by a Theban spear.",
     "risk": true,
     "win": {
      "rep": 3,
      "car": 1,
      "r": "You break the enemy line and everyone sings your name."
     },
     "lose": {
      "sal": -4,
      "r": "They surround you; you come out alive by a miracle."
     }
    },
    {
     "t": "Withdraw in good order, covering the wounded man.",
     "sal": -1,
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "You bring the wounded man to safety. That, and nothing else, is what being brave means."
    },
    {
     "t": "Stand still with your shield raised, waiting for orders that never come.",
     "sal": -2,
     "r": "You survive without glory and with a wound in your arm."
    }
   ]
  },
  {
   "id": "olimpia",
   "etapa": "j",
   "virtue": "Temperance (sophrosyne)",
   "sit": "You are selected to compete at Olympia. One trainer proposes an extreme diet; another, bribing the judges.",
   "hist": "With the fines paid by cheats, statues of Zeus, the Zanes, were erected at Olympia, with the cheat’s name engraved on them.",
   "opts": [
    {
     "t": "Train hard, but with rest.",
     "sal": 1,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "You do not win, but you put up a good showing."
    },
    {
     "t": "Extreme diet and training without rest.",
     "risk": true,
     "win": {
      "rep": 3,
      "r": "An olive crown! Your city will feed you free for the rest of your life."
     },
     "lose": {
      "sal": -3,
      "r": "You get injured before the final."
     }
    },
    {
     "t": "Bribe the judges.",
     "car": -2,
     "tags": [
      "injusto"
     ],
     "risk": true,
     "win": {
      "rep": 3,
      "hac": -2,
      "r": "You win… and you know how."
     },
     "lose": {
      "rep": -4,
      "hac": -3,
      "ene": 1,
      "r": "You are found out: your name is engraved on a statue of shame."
     }
    },
    {
     "t": "Withdraw to devote yourself to study.",
     "phr": 1,
     "rep": -1,
     "r": "Your family does not understand."
    }
   ]
  },
  {
   "id": "arginusas",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "You are chosen by lot to preside over the assembly. The crowd demands that the generals who failed to rescue the shipwrecked be tried together, in a single vote. It is illegal.",
   "hist": "Arginusae, 406 BC: Socrates, who was presiding that day, refused to put it to the vote. The generals were executed all the same.",
   "opts": [
    {
     "t": "Put it to the vote: the people are sovereign.",
     "rep": 1,
     "car": -3,
     "r": "The generals are executed. The following year, the city repents."
    },
    {
     "t": "Refuse to vote on something illegal, even if they threaten you.",
     "car": 3,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "They shout ‘traitor’ at you. You do not give way."
    },
    {
     "t": "Pretend to be ill and let someone else preside.",
     "car": -1,
     "rep": -1,
     "r": "You escape the mess, but not your conscience."
    },
    {
     "t": "Propose separate trials with legal arguments.",
     "phr": 1,
     "tags": [
      "justo"
     ],
     "risk": true,
     "win": {
      "car": 2,
      "rep": 2,
      "ene": 1,
      "r": "You manage to calm the assembly… for a day."
     },
     "lose": {
      "ene": 2,
      "rep": -1,
      "r": "Nobody listens to you and you are put on the list of suspects."
     }
    }
   ]
  },
  {
   "id": "leon",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "The oligarchic government orders you to arrest Leon of Salamis, an innocent man, so as to seize his property. It wants to dirty your hands.",
   "hist": "In 404 BC the Thirty gave that order to Socrates and four others. The others went; Socrates went home.",
   "opts": [
    {
     "t": "Obey: orders are orders.",
     "hac": 2,
     "car": -3,
     "set": "colaborador",
     "r": "Leon dies. You are paid with part of his property."
    },
    {
     "t": "Go home without saying anything.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "justo"
     ],
     "r": "You arrest nobody. The Thirty take note of your name."
    },
    {
     "t": "Warn Leon in secret so that he can flee.",
     "car": 2,
     "ene": 1,
     "risk": true,
     "win": {
      "r": "Leon escapes and nobody knows it was you."
     },
     "lose": {
      "ene": 3,
      "r": "A servant has seen you. Now they are watching you."
     }
    },
    {
     "t": "Denounce the order before everyone in the agora.",
     "car": 3,
     "ene": 5,
     "rep": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "muerte": 0.12,
     "muerteT": "That same night, the Thirty’s men come looking for you.",
     "r": "The city admires you in whispers. The Thirty hate you out loud."
    }
   ]
  },
  {
   "id": "jurado",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "You are a juror in a lawsuit. A powerful merchant offers you money to vote against a penniless metic.",
   "opts": [
    {
     "t": "Accept the money.",
     "hac": 3,
     "car": -3,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "The metic loses everything. You gain a secret."
    },
    {
     "t": "Refuse it and vote according to your conscience.",
     "car": 1,
     "ene": 1,
     "tags": [
      "justo"
     ],
     "r": "The merchant does not forget."
    },
    {
     "t": "Refuse it and denounce the bribe before the court.",
     "car": 2,
     "rep": 1,
     "ene": 3,
     "tags": [
      "justo",
      "publico"
     ],
     "r": "The merchant is fined and swears revenge."
    },
    {
     "t": "Accept the money and vote according to your conscience all the same.",
     "hac": 3,
     "car": -1,
     "ene": 3,
     "phr": -1,
     "r": "You have cheated a powerful man. That has a price."
    }
   ]
  },
  {
   "id": "trierarca",
   "etapa": "m",
   "virtue": "Magnificence (megaloprepeia)",
   "sit": "The city appoints you trierarch: for a year you must pay for and command a war trireme.",
   "hist": "Liturgies were the public services paid for by the rich. With the antidosis you could challenge another man to take over… or to exchange his fortune for yours.",
   "opts": [
    {
     "t": "Pay what is necessary and do your duty well.",
     "hac": -2,
     "rep": 1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "A good ship and a duty fulfilled."
    },
    {
     "t": "Spend a fortune to have the best ship in the fleet.",
     "hac": -5,
     "rep": 3,
     "r": "Your trireme is the envy of Piraeus. Your steward weeps."
    },
    {
     "t": "Resort to the antidosis: let someone richer pay.",
     "ene": 2,
     "risk": true,
     "win": {
      "r": "The other man agrees to pay. You are off the hook, and you have made an enemy."
     },
     "lose": {
      "hac": -3,
      "rep": -1,
      "r": "The court half agrees with you: you pay all the same, and the costs as well."
     }
    },
    {
     "t": "Economise on rowers and sails.",
     "hac": -1,
     "rep": -2,
     "risk": true,
     "win": {
      "r": "The ship lasts the year."
     },
     "lose": {
      "sal": -3,
      "rep": -2,
      "r": "A storm sinks the poorly equipped ship: you swim to the shore."
     }
    }
   ]
  },
  {
   "id": "sicilia",
   "etapa": "m",
   "virtue": "Courage (andreia)",
   "sit": "The assembly, in high spirits, votes to invade Sicily. They offer you command of part of the fleet.",
   "hist": "The Sicilian expedition (415-413 BC) ended in disaster: most of the men died or ended up in the quarries of Syracuse. Nicias had spoken against it.",
   "opts": [
    {
     "t": "Accept the command and the glory.",
     "rep": 3,
     "hac": 2,
     "ene": 2,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "You die in the quarries of Syracuse, like so many Athenians.",
     "risk": true,
     "win": {
      "rep": 2,
      "r": "You return among the few, with honours."
     },
     "lose": {
      "sal": -4,
      "hac": -2,
      "r": "You return defeated, ill and with nothing."
     }
    },
    {
     "t": "Speak against it, even if they call you a coward.",
     "car": 2,
     "rep": -2,
     "ene": 2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "You lose the vote. You were right, but that consoles no one."
    },
    {
     "t": "Vote in favour, but stay at home.",
     "car": -1,
     "r": "Neither glory nor risk."
    },
    {
     "t": "Take charge of supplies and keep a share.",
     "hac": 4,
     "car": -3,
     "ene": 1,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "The fleet sets sail with less grain than it should have."
    }
   ]
  },
  {
   "id": "peste",
   "etapa": "m",
   "virtue": "Generosity (eleutheriotes)",
   "sit": "Plague breaks out in Athens. You have stores of grain and medicines.",
   "hist": "The plague of 430 BC killed perhaps a third of the Athenians, Pericles among them. Thucydides suffered it and described it.",
   "opts": [
    {
     "t": "Sell it dear: it will never be worth so much.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "rep": -2,
     "tags": [
      "injusto"
     ],
     "r": "You grow rich while the city buries its dead."
    },
    {
     "t": "Hand it out free yourself.",
     "hac": -4,
     "car": 3,
     "rep": 2,
     "risk": true,
     "win": {
      "r": "You come through the sick unharmed."
     },
     "lose": {
      "sal": -4,
      "r": "You catch the disease."
     }
    },
    {
     "t": "Flee to the countryside with your family.",
     "rep": -2,
     "car": -1,
     "sal": 1,
     "r": "You are safe. Nobody forgets that you left."
    },
    {
     "t": "Organise a distribution at a fair price together with others.",
     "hac": -1,
     "car": 2,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "risk": true,
     "win": {
      "r": "The system works and you are saved."
     },
     "lose": {
      "sal": -2,
      "r": "You fall ill, but you survive."
     }
    }
   ]
  },
  {
   "id": "tirano",
   "etapa": "m",
   "virtue": "Prudence (phronesis)",
   "sit": "The tyrant of Syracuse invites you to his court: he wants you to turn him into a philosopher-ruler.",
   "hist": "Plato went to Syracuse three times to educate Dionysius I and Dionysius II. He failed all three times.",
   "opts": [
    {
     "t": "Accept for the influence and the money.",
     "hac": 3,
     "car": -2,
     "set": "colaborador",
     "r": "You live in a palace and advise a man who does not listen to you."
    },
    {
     "t": "Decline the invitation.",
     "car": 1,
     "r": "You stay at home. Syracuse stays the same."
    },
    {
     "t": "Go and try to truly educate him.",
     "car": 1,
     "risk": true,
     "win": {
      "car": 1,
      "rep": 2,
      "r": "The tyrant softens a law or two. It is little, but it is not nothing."
     },
     "lose": {
      "hac": -4,
      "ene": 2,
      "sal": -1,
      "r": "He tires of you and sells you as a slave; some friends pay your ransom."
     }
    },
    {
     "t": "Go and pass information to his enemies.",
     "car": -1,
     "ene": 2,
     "hac": 1,
     "risk": true,
     "win": {
      "rep": 1,
      "r": "The democrats of Syracuse thank you."
     },
     "lose": {
      "sal": -3,
      "ene": 3,
      "r": "You are found out. You flee by night in a fishing boat."
     }
    }
   ]
  },
  {
   "id": "impiedad",
   "etapa": "m",
   "virtue": "Friendship (philia)",
   "sit": "Your old teacher is accused of impiety for saying that the sun is a red-hot stone.",
   "hist": "Anaxagoras was accused of impiety for that very reason, around 430 BC; Pericles helped him leave Athens.",
   "opts": [
    {
     "t": "Testify in his favour.",
     "car": 2,
     "ene": 3,
     "rep": -1,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "Your teacher embraces you. The accusation notes down your name."
    },
    {
     "t": "Keep silent.",
     "car": -1,
     "r": "He is condemned. Nobody asks you anything."
    },
    {
     "t": "Help him flee by night.",
     "car": 1,
     "ene": 2,
     "hac": -1,
     "risk": true,
     "win": {
      "r": "He reaches Lampsacus safely."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "r": "You are discovered in the port."
     }
    },
    {
     "t": "Testify against him to save yourself.",
     "car": -4,
     "ene": -2,
     "rep": 1,
     "set": "delator",
     "r": "The accusers regard you as one of their own."
    }
   ]
  },
  {
   "id": "deudas",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "The farmers, drowning in debt, ask for debts to be forgiven. Many owe money to you.",
   "hist": "Solon (594 BC) carried out the seisachtheia, ‘the shaking off of burdens’: he cancelled debts and banned debt slavery.",
   "opts": [
    {
     "t": "Demand to be paid to the last obol.",
     "hac": 2,
     "ene": 2,
     "rep": -2,
     "car": -1,
     "r": "You collect. The farmers do not forget."
    },
    {
     "t": "Forgive first the debts that are owed to you.",
     "hac": -4,
     "car": 2,
     "rep": 2,
     "r": "You lose a lot, and you win over a whole district."
    },
    {
     "t": "Propose a law that forgives part, like Solon.",
     "hac": -2,
     "car": 2,
     "rep": 1,
     "ene": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "Neither the rich nor the poor are entirely satisfied. A good sign."
    },
    {
     "t": "Sell the debts to a moneylender before they are passed.",
     "hac": 1,
     "car": -2,
     "rep": -1,
     "tags": [
      "injusto"
     ],
     "r": "You get rid of the problem, and pass it on to others."
    }
   ]
  },
  {
   "id": "mitilene",
   "etapa": "m",
   "virtue": "Gentleness (praotes)",
   "sit": "An allied city has rebelled. The people, furious, want to kill all its men. It falls to you to speak in the assembly.",
   "hist": "Mytilene, 427 BC: Cleon called for the massacre; Diodotus persuaded the assembly the following day, and a second trireme arrived in time to prevent it.",
   "opts": [
    {
     "t": "Call for the massacre: the people will thank you.",
     "rep": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "fuerza"
     ],
     "r": "They cheer you. A thousand people are going to die."
    },
    {
     "t": "Ask for only the guilty to be punished.",
     "car": 2,
     "rep": -1,
     "risk": true,
     "win": {
      "rep": 2,
      "r": "You convince the assembly. A trireme sets out at full speed to stop the massacre."
     },
     "lose": {
      "ene": 2,
      "r": "They accuse you of having been bought by the rebels."
     }
    },
    {
     "t": "Do not speak.",
     "car": -1,
     "rep": -1,
     "r": "Others decide for you."
    },
    {
     "t": "Call for the maximum punishment in public and vote against it in secret.",
     "car": -1,
     "phr": -1,
     "ene": 1,
     "r": "Even you no longer know what you think."
    }
   ]
  },
  {
   "id": "rumor",
   "etapa": "m",
   "virtue": "Truthfulness (aletheia)",
   "sit": "A false rumour is going round about you. You can prove that your rival started it, but to do so you would have to reveal a friend’s secret.",
   "opts": [
    {
     "t": "Reveal your friend’s secret.",
     "rep": 2,
     "car": -2,
     "ene": 1,
     "r": "Your reputation is saved. Your friendship is not."
    },
    {
     "t": "Endure the rumour in silence.",
     "rep": -3,
     "car": 1,
     "r": "You lose standing. Your friend will never know what you did for him."
    },
    {
     "t": "Spread a worse rumour about your rival yourself.",
     "rep": 1,
     "car": -2,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "A draw in the mud."
    },
    {
     "t": "Speak to your rival in private and negotiate.",
     "phr": 1,
     "tags": [
      "pacto"
     ],
     "risk": true,
     "win": {
      "rep": 1,
      "ene": -1,
      "r": "You reach an agreement: he denies it and you forget."
     },
     "lose": {
      "rep": -2,
      "r": "He uses the conversation against you."
     }
    }
   ]
  },
  {
   "id": "prestamo",
   "etapa": "m",
   "virtue": "Generosity (eleutheriotes)",
   "sit": "You are offered a maritime loan: if the ship returns from the Black Sea, you double your money; if it sinks, you lose it.",
   "hist": "Aristotle distinguished household management, which seeks what is necessary, from chrematistics, which seeks to accumulate money without limit.",
   "opts": [
    {
     "t": "Invest your whole fortune.",
     "risk": true,
     "win": {
      "hac": 6,
      "r": "The ship returns. You are rich."
     },
     "lose": {
      "hac": -7,
      "r": "The ship does not return."
     }
    },
    {
     "t": "Invest a part.",
     "risk": true,
     "win": {
      "hac": 2,
      "r": "A good profit."
     },
     "lose": {
      "hac": -2,
      "r": "You lose what you invested."
     }
    },
    {
     "t": "Do not invest: you have what you need.",
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "You sleep soundly."
    },
    {
     "t": "Invest and pay the captain not to sail through dangerous waters.",
     "hac": -1,
     "car": -1,
     "risk": true,
     "win": {
      "hac": 3,
      "r": "The ship returns."
     },
     "lose": {
      "hac": -3,
      "r": "The captain keeps your money and disappears."
     }
    }
   ]
  },
  {
   "id": "stasis",
   "etapa": "m",
   "virtue": "Courage (andreia)",
   "sit": "Civil war in the city: democrats and oligarchs are killing each other in the streets, and both sides demand that you choose.",
   "hist": "A law attributed to Solon stripped citizens of their rights if they did not take sides in a civil war. Thucydides describes the stasis of Corcyra as the end of all morality.",
   "opts": [
    {
     "t": "Join the oligarchs.",
     "hac": 2,
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "set": "oligarca",
     "r": "Your side wins… for now."
    },
    {
     "t": "Join the democrats.",
     "rep": 1,
     "ene": 3,
     "r": "You fight in Piraeus alongside the rowers and the artisans."
    },
    {
     "t": "Shut yourself in at home until it passes.",
     "rep": -2,
     "ene": 1,
     "car": -1,
     "r": "Both sides despise you."
    },
    {
     "t": "Mediate between the two sides.",
     "phr": 1,
     "muerte": 0.08,
     "muerteT": "A fanatic kills you in the middle of the negotiations.",
     "risk": true,
     "win": {
      "car": 2,
      "rep": 3,
      "ene": -2,
      "r": "You achieve a truce. They owe you the peace."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "Both sides accuse you of treason."
     }
    }
   ]
  },
  {
   "id": "ostrakon",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "An ostracism is being voted on. A rival proposes uniting your supporters to banish a third man and share out his power between you.",
   "hist": "In 416 BC, Alcibiades and Nicias came to an agreement so that the man banished would be Hyperbolus. It was the last ostracism in Athens.",
   "opts": [
    {
     "t": "Accept the pact.",
     "rep": 2,
     "ene": 2,
     "car": -2,
     "tags": [
      "pacto"
     ],
     "r": "The third man goes away for ten years. You and your rival keep watch on each other."
    },
    {
     "t": "Refuse it and vote for whoever you truly believe to be dangerous.",
     "car": 1,
     "ene": 1,
     "r": "You vote according to your conscience; your rival takes it badly."
    },
    {
     "t": "Warn the victim of the plot.",
     "car": 1,
     "ene": 2,
     "rep": 1,
     "r": "The plot fails. Now you know who hates you."
    },
    {
     "t": "Do not vote.",
     "rep": -1,
     "r": "Others decide."
    }
   ]
  },
  {
   "id": "mina",
   "etapa": "m",
   "virtue": "Justice (dikaiosyne)",
   "sit": "You are offered the lease of a concession in the silver mines of Laurion. It is very profitable if you do not mind how the slaves work in the tunnels.",
   "opts": [
    {
     "t": "Lease it and squeeze it for all it is worth.",
     "hac": 4,
     "car": -3,
     "tags": [
      "injusto"
     ],
     "r": "The silver flows. Better not to go down and see how."
    },
    {
     "t": "Lease it, but with decent shifts and food.",
     "hac": 2,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "You earn less than others, but you earn."
    },
    {
     "t": "Stay out of that business.",
     "car": 1,
     "r": "Someone else leases it in your place."
    },
    {
     "t": "Lease it and go into debt to open more tunnels.",
     "car": -2,
     "risk": true,
     "win": {
      "hac": 6,
      "r": "You strike a very rich vein."
     },
     "lose": {
      "hac": -5,
      "sal": -1,
      "r": "The tunnel collapses."
     }
    }
   ]
  },
  {
   "id": "libro",
   "etapa": "m",
   "orient": [
    "Contemplative",
    "Discursive"
   ],
   "virtue": "Truthfulness (aletheia)",
   "sit": "Your book says that about the gods one cannot know whether they exist. A friend advises you not to publish it.",
   "hist": "Protagoras began his work On the Gods in this way; according to tradition, his books were burned in the agora.",
   "opts": [
    {
     "t": "Publish it as it is.",
     "car": 1,
     "rep": 2,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "It is read throughout Greece. And in the temples."
    },
    {
     "t": "Publish it in more cautious language.",
     "phr": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "It says the same thing, but you have to know how to read it."
    },
    {
     "t": "Read it only to your disciples.",
     "phr": 1,
     "r": "Your ideas circulate in whispers."
    },
    {
     "t": "Burn it yourself.",
     "car": -2,
     "phr": -1,
     "r": "Nobody will accuse you of anything. Nobody will know what you thought."
    }
   ]
  },
  {
   "id": "escuela",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Generosity (eleutheriotes)",
   "sit": "You found a school. How are you going to sustain it?",
   "opts": [
    {
     "t": "Charge a lot, like the sophists.",
     "hac": 4,
     "rep": 1,
     "car": -1,
     "r": "The school is rich; so are the pupils."
    },
    {
     "t": "Charge nothing and live on donations.",
     "hac": -2,
     "car": 1,
     "rep": 1,
     "r": "You live on very little, surrounded by people who want to learn."
    },
    {
     "t": "Charge each person according to what they can pay.",
     "hac": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "The rich pay for the poor, and everyone learns."
    },
    {
     "t": "Accept only sons of powerful families.",
     "hac": 2,
     "rep": 2,
     "ene": 1,
     "car": -1,
     "r": "Your pupils will govern the city. The rest bear you a grudge."
    }
   ]
  },
  {
   "id": "alejandria",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Prudence (phronesis)",
   "sit": "The bishop and the prefect of the city are at loggerheads; pupils from both sides come to your classes.",
   "hist": "Alexandria, 415: Hypatia was a friend and adviser of the prefect Orestes. The mob that killed her blamed her for preventing reconciliation.",
   "opts": [
    {
     "t": "Support the prefect in public: he is right.",
     "rep": 1,
     "ene": 4,
     "tags": [
      "publico"
     ],
     "muerte": 0.1,
     "muerteT": "A mob drags you through the streets.",
     "r": "The prefect thanks you. The bishop’s faction singles you out."
    },
    {
     "t": "Keep teaching as usual, without voicing an opinion.",
     "ene": 1,
     "r": "Your silence is interpreted too."
    },
    {
     "t": "Stop teaching in public for a while.",
     "rep": -2,
     "ene": -2,
     "hac": -1,
     "r": "They forget you a little. Better that way."
    },
    {
     "t": "Try to reconcile the two.",
     "phr": 1,
     "risk": true,
     "win": {
      "rep": 2,
      "car": 2,
      "ene": -1,
      "r": "A fragile truce, but a truce."
     },
     "lose": {
      "ene": 3,
      "r": "Each side thinks you are working for the other."
     }
    }
   ]
  },
  {
   "id": "alumno",
   "etapa": "m",
   "orient": [
    "Contemplative"
   ],
   "virtue": "Friendship (philia)",
   "sit": "A brilliant, rich and arrogant young man wants to become your disciple to learn how to govern.",
   "hist": "Alcibiades was a disciple and friend of Socrates. At the trial of 399 BC, many remembered it.",
   "opts": [
    {
     "t": "Teach him, even if he does not change.",
     "rep": 1,
     "set": "alumno",
     "r": "He listens to you, admires you… and does what he likes."
    },
    {
     "t": "Turn him down.",
     "rep": -1,
     "r": "He looks for another teacher, a less demanding one."
    },
    {
     "t": "Teach him and criticise him in public when he is wrong.",
     "car": 1,
     "ene": 1,
     "tags": [
      "verdad"
     ],
     "set": "alumno",
     "r": "He respects you more than anyone; his family, less."
    },
    {
     "t": "Use him to gain influence.",
     "hac": 2,
     "rep": 2,
     "car": -2,
     "set": "alumno",
     "r": "He opens the doors of the best houses for you."
    }
   ]
  },
  {
   "id": "comedia",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Truthfulness (aletheia)",
   "sit": "You are preparing a play that ridicules the most powerful politician in the city.",
   "hist": "In 426 BC, Cleon brought Aristophanes before the Council over The Babylonians; two years later, Aristophanes ridiculed him again in The Knights.",
   "opts": [
    {
     "t": "Stage it as it is.",
     "rep": 3,
     "ene": 4,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "The whole theatre laughs. He does not."
    },
    {
     "t": "Soften it.",
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "A good reception. Nobody is too offended."
    },
    {
     "t": "Better to ridicule a philosopher who has no power.",
     "rep": 2,
     "car": -2,
     "r": "Easy success. Years later, the public will remember your caricature at a trial."
    },
    {
     "t": "Put it away in a drawer.",
     "rep": -2,
     "r": "You do not stage anything this year."
    }
   ]
  },
  {
   "id": "logografo",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Truthfulness (aletheia)",
   "sit": "A rich man pays you to write his defence speech. You know he is guilty.",
   "opts": [
    {
     "t": "Write the best speech possible for a lot of money.",
     "hac": 3,
     "car": -1,
     "rep": 1,
     "r": "He is acquitted. Your fame as a speechwriter rises."
    },
    {
     "t": "Decline the commission.",
     "car": 1,
     "r": "Someone else will write it for you."
    },
    {
     "t": "Write it, but without lying about anything.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "An honest speech for a dubious cause."
    },
    {
     "t": "Write it and pass the truth to the prosecution.",
     "hac": 2,
     "car": -1,
     "ene": 2,
     "r": "He is convicted. Your client suspects you."
    }
   ]
  },
  {
   "id": "acusacion",
   "etapa": "m",
   "orient": [
    "Discursive"
   ],
   "virtue": "Courage (andreia)",
   "sit": "To attack your political protector, they accuse you of impiety.",
   "hist": "According to Plutarch, Aspasia was accused of impiety by the comic playwright Hermippus, and Pericles wept before the jury to save her.",
   "opts": [
    {
     "t": "Defend yourself before the court.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "Your defence is so good that it is quoted for years."
     },
     "lose": {
      "ene": 2,
      "rep": -2,
      "hac": -2,
      "r": "You are sentenced to an enormous fine."
     }
    },
    {
     "t": "Ask your protector to speak for you.",
     "rep": -1,
     "ene": -1,
     "r": "He saves you, but now you owe him your life."
    },
    {
     "t": "Flee the city.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "You start from scratch somewhere else."
    },
    {
     "t": "Counterattack by accusing your accusers.",
     "ene": 3,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "Open war in the courts."
    }
   ]
  },
  {
   "id": "golpe",
   "etapa": "m",
   "orient": [
    "Politics"
   ],
   "virtue": "Temperance (sophrosyne)",
   "sit": "Your supporters offer to seize the Acropolis tonight and proclaim you tyrant.",
   "hist": "Peisistratos tried it three times in the 6th century BC and stayed on the third. Cylon, before him, failed and his supporters were murdered.",
   "opts": [
    {
     "t": "Carry out the coup.",
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "muerte": 0.2,
     "muerteT": "The coup fails: they kill you on the Acropolis.",
     "risk": true,
     "win": {
      "rep": 3,
      "hac": 4,
      "ene": 5,
      "set": "tirano",
      "r": "You wake up as master of the city."
     },
     "lose": {
      "ene": 4,
      "hac": -3,
      "r": "It fails. You escape by a miracle."
     }
    },
    {
     "t": "Refuse and warn the Council.",
     "car": 2,
     "ene": 3,
     "rep": 1,
     "tags": [
      "justo"
     ],
     "r": "The coup is dismantled. Your former supporters hate you."
    },
    {
     "t": "Refuse in silence.",
     "car": 1,
     "ene": 1,
     "r": "Nobody knows anything. For now."
    },
    {
     "t": "Propose legal reforms for what they are demanding.",
     "phr": 1,
     "car": 1,
     "rep": 1,
     "ene": 1,
     "tags": [
      "medida"
     ],
     "r": "Some are satisfied; others call you soft."
    }
   ]
  },
  {
   "id": "melos",
   "etapa": "m",
   "orient": [
    "Politics"
   ],
   "virtue": "Justice (dikaiosyne)",
   "sit": "As a general, you have forced a small neutral island to surrender. The assembly asks you what to do with the defeated.",
   "hist": "Melos, 416 BC: Athens killed the men and enslaved the women and children. Thucydides tells it in the ‘Melian dialogue’.",
   "opts": [
    {
     "t": "Kill the men and enslave the rest, as a warning.",
     "hac": 3,
     "rep": 1,
     "car": -4,
     "ene": 1,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Nobody else will dare to be neutral."
    },
    {
     "t": "Ask for clemency.",
     "car": 2,
     "rep": -2,
     "ene": 1,
     "r": "They accuse you of being soft."
    },
    {
     "t": "Settle colonists and collect tribute, without a massacre.",
     "car": 1,
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "A conquest, but without useless bloodshed."
    },
    {
     "t": "Keep the spoils before the order arrives.",
     "hac": 4,
     "car": -3,
     "ene": 2,
     "set": "corrupto",
     "tags": [
      "injusto"
     ],
     "r": "Nobody counted the amphorae properly."
    }
   ]
  },
  {
   "id": "hermes",
   "etapa": "m",
   "orient": [
    "Politics"
   ],
   "virtue": "Truthfulness (aletheia)",
   "sit": "On the eve of your expedition the city’s statues of Hermes are found mutilated. Your rivals accuse you of sacrilege.",
   "hist": "In 415 BC they accused Alcibiades. He asked to be tried before sailing; they would not let him. Condemned in his absence, he went over to Sparta.",
   "opts": [
    {
     "t": "Demand to be tried now, before sailing.",
     "tags": [
      "publico"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "ene": -2,
      "r": "You are acquitted and set sail with a clean record."
     },
     "lose": {
      "ene": 3,
      "r": "They postpone the trial: you will be tried when you are not there."
     }
    },
    {
     "t": "Set sail and let them try you in your absence.",
     "ene": 4,
     "rep": -1,
     "r": "You are sentenced to death in your absence."
    },
    {
     "t": "Bribe the witnesses.",
     "hac": -3,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -1,
      "r": "The witnesses retract."
     },
     "lose": {
      "ene": 4,
      "rep": -2,
      "r": "One of them tells everything."
     }
    },
    {
     "t": "Go over to the enemy before you are arrested.",
     "car": -3,
     "rep": -3,
     "ene": 3,
     "hac": 2,
     "set": "traidor",
     "r": "Sparta welcomes you with open arms. Athens, with a death sentence."
    }
   ]
  },
  {
   "id": "flota",
   "etapa": "m",
   "orient": [
    "Politics"
   ],
   "virtue": "Justice (dikaiosyne)",
   "sit": "Your rival tells you his plan in secret: to set fire to the allies’ fleet, moored in the harbour. Athens would dominate the sea without competition. The assembly entrusts you with judging it.",
   "hist": "According to Plutarch, Themistocles proposed something of the kind and the assembly entrusted Aristides with examining it. Aristides said that nothing would be more advantageous or more unjust, and the Athenians rejected it without knowing what it was.",
   "opts": [
    {
     "t": "Support it: what suits Athens is just.",
     "hac": 2,
     "rep": 1,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto",
      "fuerza"
     ],
     "r": "The allied fleet burns. Athens rules the sea, and nobody trusts her again."
    },
    {
     "t": "Tell the assembly that it is very advantageous… and very unjust.",
     "car": 2,
     "ene": 2,
     "tags": [
      "justo",
      "publico",
      "verdad"
     ],
     "risk": true,
     "win": {
      "rep": 2,
      "r": "The assembly rejects it without asking for details. Your rival does not forgive you."
     },
     "lose": {
      "rep": -1,
      "ene": 1,
      "r": "They accuse you of putting morality before the fatherland."
     }
    },
    {
     "t": "Warn the allies in secret.",
     "car": 1,
     "ene": 3,
     "rep": -2,
     "r": "The allies are saved. In Athens, someone suspects you."
    },
    {
     "t": "Propose instead a league with the allies and a fair tribute.",
     "car": 1,
     "rep": 1,
     "phr": 1,
     "tags": [
      "justo",
      "medida"
     ],
     "r": "The allies trust you to set what each city pays."
    }
   ]
  },
  {
   "id": "hifasis",
   "etapa": "m",
   "orient": [
    "Politics"
   ],
   "virtue": "Temperance (sophrosyne)",
   "sit": "Your army is exhausted after years of campaigning and wants to go home. You want to carry on to the end of the world.",
   "hist": "On the banks of the river Hyphasis (326 BC), Alexander’s soldiers refused to go on. He turned back, but through the Gedrosian desert, where thousands died.",
   "opts": [
    {
     "t": "Order them to go on.",
     "rep": 1,
     "sal": -2,
     "ene": 3,
     "car": -1,
     "tags": [
      "fuerza"
     ],
     "r": "They obey you reluctantly."
    },
    {
     "t": "Go home.",
     "rep": -1,
     "car": 1,
     "tags": [
      "medida"
     ],
     "r": "Your soldiers bless you."
    },
    {
     "t": "Execute those who protest.",
     "ene": 4,
     "car": -3,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "r": "Silence falls. A dangerous silence."
    },
    {
     "t": "Return through the harshest desert, to prove your courage.",
     "sal": -4,
     "rep": 1,
     "car": -1,
     "r": "You make it. Many do not."
    }
   ]
  },
  {
   "id": "demagogo",
   "etapa": "m",
   "orient": [
    "Politics",
    "Discursive"
   ],
   "virtue": "Truthfulness (aletheia)",
   "sit": "The city is hungry. You can win the elections for general by promising cheap grain that you will not be able to obtain.",
   "opts": [
    {
     "t": "Promise everything.",
     "rep": 3,
     "car": -2,
     "set": "promesa",
     "r": "You win by a landslide."
    },
    {
     "t": "Tell the truth: belts will have to be tightened.",
     "car": 2,
     "rep": -2,
     "tags": [
      "verdad",
      "publico"
     ],
     "r": "You lose. But nobody will be able to reproach you for anything."
    },
    {
     "t": "Promise what you can really deliver.",
     "rep": 1,
     "car": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "You win narrowly."
    },
    {
     "t": "Blame the metics for the hunger.",
     "rep": 2,
     "car": -3,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "It works. It always works."
    }
   ]
  },
  {
   "id": "juicio",
   "etapa": "v",
   "cond": {
    "ene": 5
   },
   "virtue": "Courage (andreia)",
   "sit": "Now an old man, you are accused of corrupting the young and not believing in the city’s gods. The jury is made up of 501 citizens.",
   "hist": "That is how the trial of Socrates (399 BC) went, according to Plato’s Apology. He asked, as his ‘punishment’, to be fed free in the Prytaneion, and they sentenced him to death.",
   "opts": [
    {
     "t": "Weep and plead with the jury.",
     "car": -3,
     "ene": -2,
     "rep": -1,
     "r": "They acquit you out of pity. You know what you have done."
    },
    {
     "t": "Defend your life with pride, without begging for mercy.",
     "car": 3,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "pBase": 0,
     "win": {
      "rep": 2,
      "r": "You are acquitted by a few votes. It was the best defence anyone can remember."
     },
     "lose": {
      "set": "preso",
      "r": "You are sentenced to death. They take you to prison to await execution."
     }
    },
    {
     "t": "Propose exile yourself as the penalty.",
     "hac": -3,
     "rep": -2,
     "ene": -3,
     "r": "They accept. You will end your days far from the city."
    },
    {
     "t": "Flee before the trial.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "car": -1,
     "r": "You leave before they try you. Some call you a coward."
    }
   ]
  },
  {
   "id": "carcel",
   "etapa": "v",
   "req": "preso",
   "urgente": true,
   "virtue": "Justice (dikaiosyne)",
   "sit": "You are in prison awaiting execution. Your friends have bribed the guard: you can escape tonight.",
   "hist": "In Plato’s Crito, Socrates refuses to escape: it would be to return injustice for injustice to the laws.",
   "opts": [
    {
     "t": "Escape: the sentence is unjust.",
     "car": -1,
     "hac": -2,
     "rep": -1,
     "r": "You live, exiled and on everyone’s lips."
    },
    {
     "t": "Stay: one does not answer an injustice with another.",
     "car": 3,
     "muerte": 1,
     "muerteT": "You carry out the sentence. Your disciples will never stop talking about you."
    },
    {
     "t": "Escape and go on teaching from abroad.",
     "hac": -2,
     "rep": 1,
     "ene": 1,
     "r": "You go on teaching in another city."
    }
   ]
  },
  {
   "id": "testamento",
   "etapa": "v",
   "virtue": "Generosity (eleutheriotes)",
   "sit": "The time comes to make your will.",
   "hist": "Aristotle provided in his will for the freeing of several of his slaves, according to Diogenes Laertius.",
   "opts": [
    {
     "t": "Leave everything to your children.",
     "r": "Your family is protected."
    },
    {
     "t": "Found a library or a school with your property.",
     "hac": -4,
     "rep": 2,
     "car": 1,
     "r": "Your name will remain on the door for centuries."
    },
    {
     "t": "Free your slaves and share out part of it among them.",
     "hac": -2,
     "car": 2,
     "tags": [
      "justo"
     ],
     "r": "Some neighbours consider it madness."
    },
    {
     "t": "Spend it all in your lifetime on banquets.",
     "sal": -2,
     "hac": -3,
     "car": -1,
     "tags": [
      "placer"
     ],
     "r": "Let the heirs pay."
    }
   ]
  },
  {
   "id": "retiro",
   "etapa": "v",
   "virtue": "Prudence (phronesis)",
   "sit": "The doctor advises you to leave public life and retire to the countryside.",
   "opts": [
    {
     "t": "Stay in the assembly until the end.",
     "rep": 1,
     "sal": -2,
     "ene": 1,
     "r": "They respect you, and you wear yourself out."
    },
    {
     "t": "Retire to the countryside.",
     "sal": 2,
     "rep": -1,
     "ene": -2,
     "tags": [
      "medida"
     ],
     "r": "Your enemies forget you. Your olive trees do not."
    },
    {
     "t": "Retire and write your memoirs.",
     "sal": 1,
     "phr": 1,
     "rep": 1,
     "r": "Remembering in an orderly way is also thinking."
    },
    {
     "t": "Pay a famous quack for a miracle remedy.",
     "hac": -3,
     "risk": true,
     "win": {
      "sal": 2,
      "r": "By chance or not, you feel better."
     },
     "lose": {
      "sal": -2,
      "r": "The remedy was worse than the disease."
     }
    }
   ]
  },
  {
   "id": "estatua",
   "etapa": "v",
   "virtue": "Magnanimity (megalopsychia)",
   "sit": "The city wants to put up a statue of you in the agora.",
   "hist": "For Aristotle, the magnanimous man knows himself worthy of great honours and accepts them without craving them; the vain man seeks them without deserving them.",
   "opts": [
    {
     "t": "Accept it and pay for it yourself.",
     "hac": -3,
     "rep": 2,
     "r": "A worthy statue."
    },
    {
     "t": "Refuse it with false modesty.",
     "car": -1,
     "r": "Everyone knows you were dying to have it."
    },
    {
     "t": "Accept it and ask that the leftover money go to war orphans.",
     "car": 2,
     "rep": 1,
     "tags": [
      "medida"
     ],
     "r": "The statue is small, and the gesture, great."
    },
    {
     "t": "Demand that it be bigger than your rival’s.",
     "rep": 1,
     "ene": 2,
     "car": -1,
     "r": "Now there are two statues that do not speak to each other."
    }
   ]
  },
  {
   "id": "amnistia",
   "etapa": "v",
   "virtue": "Gentleness (praotes)",
   "sit": "Those who persecuted you have fallen. Now it is for you to decide what is done with them.",
   "hist": "In 403 BC, after the fall of the Thirty, Athens voted an amnesty: it was forbidden to ‘recall past wrongs’. It is one of the first in history.",
   "opts": [
    {
     "t": "Take revenge: let them pay for what they did.",
     "ene": 3,
     "hac": 2,
     "car": -2,
     "tags": [
      "fuerza"
     ],
     "r": "Justice, some say. Revenge, say others."
    },
    {
     "t": "Support a general amnesty.",
     "car": 2,
     "rep": 2,
     "ene": -3,
     "tags": [
      "justo"
     ],
     "r": "The city breathes."
    },
    {
     "t": "Ask for trial only for those who killed.",
     "car": 1,
     "ene": -1,
     "phr": 1,
     "tags": [
      "medida",
      "justo"
     ],
     "r": "A difficult justice, but justice."
    },
    {
     "t": "Leave the city: you do not want to see them.",
     "rep": -1,
     "ene": -2,
     "r": "You spare yourself grudges."
    }
   ]
  },
  {
   "id": "herederos",
   "etapa": "v",
   "virtue": "Justice (dikaiosyne)",
   "sit": "Your children are fighting over the family business. One wants to sell it to a buyer known for mistreating his workers.",
   "opts": [
    {
     "t": "Sell to the highest bidder.",
     "hac": 3,
     "car": -2,
     "r": "Quick money. Better not to ask."
    },
    {
     "t": "Do not sell, and divide it among your children.",
     "hac": -1,
     "car": 1,
     "r": "They will fight all the same, but without selling."
    },
    {
     "t": "Sell, but setting conditions in the contract.",
     "hac": 1,
     "phr": 1,
     "tags": [
      "medida"
     ],
     "r": "The buyer accepts them grudgingly."
    },
    {
     "t": "Keep it and squeeze the workers yourself.",
     "hac": 3,
     "car": -3,
     "ene": 1,
     "tags": [
      "injusto"
     ],
     "r": "If someone has to be squeezed, let the profit be yours."
    }
   ]
  },
  {
   "id": "c-colaborador",
   "etapa": [
    "m",
    "v"
   ],
   "req": "colaborador",
   "virtue": "Justice (dikaiosyne)",
   "sit": "The government you served has fallen. Now you are being tried for collaborating with it.",
   "opts": [
    {
     "t": "Blame others.",
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "They believe you."
     },
     "lose": {
      "ene": 3,
      "rep": -2,
      "r": "The others accuse you, with evidence."
     }
    },
    {
     "t": "Own up to your share and take advantage of the amnesty.",
     "car": 2,
     "rep": -1,
     "hac": -2,
     "ene": -1,
     "r": "You pay a fine. You can look your neighbours in the face."
    },
    {
     "t": "Flee with whatever you can carry.",
     "hac": -3,
     "rep": -3,
     "ene": -2,
     "r": "A new life, far away and nameless."
    },
    {
     "t": "Buy witnesses.",
     "hac": -4,
     "car": -2,
     "risk": true,
     "win": {
      "ene": -2,
      "r": "You are acquitted."
     },
     "lose": {
      "ene": 4,
      "rep": -3,
      "r": "The purchase is discovered."
     }
    }
   ]
  },
  {
   "id": "c-corrupto",
   "etapa": [
    "m",
    "v"
   ],
   "req": "corrupto",
   "virtue": "Truthfulness (aletheia)",
   "sit": "A former accomplice threatens to reveal your corruption unless you pay him.",
   "opts": [
    {
     "t": "Pay him.",
     "hac": -3,
     "r": "He will ask again."
    },
    {
     "t": "Confess first and return what you took.",
     "rep": -3,
     "car": 3,
     "hac": -3,
     "r": "Scandal, a fine… and relief."
    },
    {
     "t": "Threaten him instead.",
     "ene": 3,
     "car": -1,
     "r": "Now you share a secret and a hatred."
    },
    {
     "t": "Have him silenced for ever.",
     "car": -5,
     "tags": [
      "fuerza",
      "injusto"
     ],
     "risk": true,
     "win": {
      "r": "You will never hear of him again."
     },
     "lose": {
      "ene": 5,
      "rep": -3,
      "r": "The hired assassin talks."
     }
    }
   ]
  },
  {
   "id": "c-tirano",
   "etapa": [
    "m",
    "v"
   ],
   "req": "tirano",
   "virtue": "Temperance (sophrosyne)",
   "sit": "You have been ruling as a tyrant for years. A rumour reaches you of a conspiracy to kill you at the next procession.",
   "hist": "Harmodius and Aristogiton killed Hipparchus, son of Peisistratos, at the Panathenaea of 514 BC; Athens put up a statue to them as tyrannicides.",
   "opts": [
    {
     "t": "Personal guard and preventive executions.",
     "ene": 2,
     "car": -3,
     "hac": -2,
     "tags": [
      "fuerza"
     ],
     "r": "You survive. The city fears you more than ever."
    },
    {
     "t": "Give up power and restore the laws.",
     "car": 3,
     "rep": 2,
     "ene": -4,
     "hac": -2,
     "r": "Few tyrants did so. You will be remembered for it."
    },
    {
     "t": "Negotiate in secret with the conspirators.",
     "phr": 1,
     "risk": true,
     "win": {
      "ene": -3,
      "r": "You reach an agreement."
     },
     "lose": {
      "ene": 2,
      "sal": -3,
      "r": "It was a trap: you are wounded in the procession."
     }
    },
    {
     "t": "Pay no attention: nobody will dare.",
     "muerte": 0.4,
     "muerteT": "The conspirators stab you at the procession.",
     "r": "Nothing happens. This time."
    }
   ]
  },
  {
   "id": "c-alumno",
   "etapa": [
    "m",
    "v"
   ],
   "req": "alumno",
   "virtue": "Friendship (philia)",
   "sit": "Your former disciple has gone over to the enemy, and the city blames you for having corrupted him.",
   "opts": [
    {
     "t": "Defend yourself by explaining what you really taught him.",
     "phr": 1,
     "tags": [
      "verdad",
      "publico"
     ],
     "risk": true,
     "win": {
      "ene": -2,
      "r": "Some understand."
     },
     "lose": {
      "ene": 3,
      "r": "Nobody wants to hear nuances."
     }
    },
    {
     "t": "Disown him in public.",
     "car": -1,
     "ene": -1,
     "r": "You half save yourself. He finds out."
    },
    {
     "t": "Keep silent.",
     "ene": 2,
     "r": "Silence means consent, they say."
    },
    {
     "t": "Leave the city for a while.",
     "hac": -2,
     "ene": -3,
     "rep": -1,
     "r": "When you return, there will be another culprit."
    }
   ]
  },
  {
   "id": "c-delator",
   "etapa": [
    "m",
    "v"
   ],
   "req": "delator",
   "virtue": "Friendship (philia)",
   "sit": "The teacher against whom you testified has died in exile. His disciples point you out in the street.",
   "opts": [
    {
     "t": "Ask forgiveness in public.",
     "car": 2,
     "rep": -1,
     "r": "Some forgive you; you do not."
    },
    {
     "t": "Justify yourself: you did what had to be done.",
     "car": -1,
     "ene": 2,
     "r": "Nobody believes you, not even you."
    },
    {
     "t": "Pay for the education of his poor disciples.",
     "hac": -3,
     "car": 2,
     "rep": 1,
     "r": "It does not erase anything, but it repairs something."
    },
    {
     "t": "Denounce his disciples too.",
     "car": -3,
     "ene": 3,
     "tags": [
      "injusto"
     ],
     "r": "There is no turning back now."
    }
   ]
  },
  {
   "id": "c-oligarca",
   "etapa": [
    "m",
    "v"
   ],
   "req": "oligarca",
   "virtue": "Justice (dikaiosyne)",
   "sit": "The democrats have retaken the city. Your side has lost.",
   "opts": [
    {
     "t": "Hold out at Eleusis with the last oligarchs.",
     "ene": 3,
     "tags": [
      "fuerza"
     ],
     "muerte": 0.15,
     "muerteT": "You fall in the last skirmish.",
     "r": "A lost cause, but yours."
    },
    {
     "t": "Take advantage of the amnesty.",
     "ene": -3,
     "rep": -1,
     "r": "You become an ordinary citizen again."
    },
    {
     "t": "Betray your former comrades in exchange for a pardon.",
     "car": -3,
     "ene": -2,
     "r": "You are pardoned. They are not."
    },
    {
     "t": "Go into exile with your fortune.",
     "hac": -2,
     "rep": -2,
     "ene": -2,
     "r": "A comfortable life in exile."
    }
   ]
  },
  {
   "id": "c-traidor",
   "etapa": [
    "m",
    "v"
   ],
   "req": "traidor",
   "virtue": "Friendship (philia)",
   "sit": "You have spent years serving the enemy, and there too they do not trust you. Athens offers you the chance to return if you bring her a victory.",
   "hist": "Alcibiades returned to Athens in 407 BC, acclaimed as a hero; the following year, after a defeat suffered by his lieutenant, he was dismissed.",
   "opts": [
    {
     "t": "Return with the victory.",
     "risk": true,
     "win": {
      "rep": 4,
      "ene": -2,
      "r": "You return as a hero."
     },
     "lose": {
      "ene": 3,
      "sal": -2,
      "r": "The battle goes badly and now both sides hate you."
     }
    },
    {
     "t": "Stay where you are.",
     "ene": 1,
     "r": "A foreigner everywhere."
    },
    {
     "t": "Go to Persia and live off your fame.",
     "hac": 1,
     "rep": -1,
     "ene": 1,
     "r": "A satrap takes you in, for the moment."
    },
    {
     "t": "Withdraw to a fortress with your men.",
     "hac": -2,
     "ene": -1,
     "r": "Alone, but safe."
    }
   ]
  },
  {
   "id": "c-promesa",
   "etapa": [
    "m",
    "v"
   ],
   "req": "promesa",
   "virtue": "Truthfulness (aletheia)",
   "sit": "The cheap grain you promised has not arrived. The people begin to shout your name, and not to applaud.",
   "opts": [
    {
     "t": "Pay for it out of your own pocket.",
     "hac": -5,
     "rep": 2,
     "r": "You deliver, even if it ruins you."
    },
    {
     "t": "Blame the rich and confiscate their grain.",
     "ene": 4,
     "rep": 1,
     "tags": [
      "fuerza"
     ],
     "r": "The people eat. The rich conspire."
    },
    {
     "t": "Admit that you promised the impossible.",
     "car": 2,
     "rep": -3,
     "r": "Honest, late and costly."
    },
    {
     "t": "Invent a foreign enemy.",
     "car": -3,
     "rep": 1,
     "ene": 2,
     "tags": [
      "injusto"
     ],
     "r": "War makes people forget hunger… for a while."
    }
   ]
  }
 ],
 "chance": [
  {
   "t": "Support of the people",
   "d": "The people take your side.",
   "rep": 2,
   "ene": -1,
   "img": "azar-apoyo"
  },
  {
   "t": "Subtle speech",
   "d": "Your words strike an admirable balance.",
   "rep": 1,
   "phr": 1,
   "img": "azar-sutil"
  },
  {
   "t": "Successful reform",
   "d": "One of your measures works out.",
   "rep": 1,
   "hac": 1,
   "img": "azar-reforma"
  },
  {
   "t": "Inspiration",
   "d": "You find a clarity that orders your judgement.",
   "phr": 2,
   "img": "azar-inspiracion"
  },
  {
   "t": "Peace treaty",
   "d": "Peace is signed and the city breathes.",
   "sal": 1,
   "hac": 1,
   "ene": -1,
   "img": "azar-paz"
  },
  {
   "t": "Stroke of luck",
   "d": "Fortune smiles for once.",
   "hac": 3,
   "img": "azar-suerte"
  },
  {
   "t": "Resistance of the elites",
   "d": "The powerful block your initiative.",
   "hac": -2,
   "ene": 2,
   "img": "azar-elites",
   "bad": true
  },
  {
   "t": "Reaction of the fanatics",
   "d": "You receive a violent response.",
   "sal": -2,
   "ene": 1,
   "img": "azar-fanaticos",
   "bad": true
  },
  {
   "t": "The plague",
   "d": "An epidemic ravages the city.",
   "sal": -3,
   "img": "azar-peste",
   "bad": true
  },
  {
   "t": "Economic ruin",
   "d": "A bad investment leaves you without resources.",
   "hac": -3,
   "img": "azar-ruina",
   "bad": true
  },
  {
   "t": "Betrayal",
   "d": "Someone you trusted sells you out.",
   "rep": -2,
   "ene": 2,
   "hac": -1,
   "img": "azar-traicion",
   "bad": true
  },
  {
   "t": "Civil war",
   "d": "Internal conflict devours everything.",
   "sal": -2,
   "hac": -2,
   "img": "azar-guerra",
   "bad": true
  },
  {
   "t": "Public scandal",
   "d": "Your name is dragged through the mud.",
   "rep": -3,
   "img": "azar-escandalo",
   "bad": true
  }
 ],
 "chanceProb": 0.35,
 "peligro": {
  "umbral": 4,
  "porPunto": 0.06,
  "max": 0.5,
  "juicio": {
   "t": "You are taken to trial",
   "img": null,
   "em": "⚖️",
   "salidas": [
    {
     "min": 0.7,
     "t": "Acquitted",
     "d": "The jury acquits you by a few votes.",
     "ene": -2
    },
    {
     "min": 0.45,
     "t": "Fine and prison",
     "d": "You are sentenced to a fine you cannot pay in full: a few months in prison.",
     "hac": -2,
     "sal": -1,
     "ene": -2
    },
    {
     "min": 0.22,
     "t": "Exile",
     "d": "You are sentenced to exile: you lose home, friends and property.",
     "hac": -2,
     "rep": -2,
     "ene": -4,
     "img": "azar-destierro"
    },
    {
     "min": -99,
     "t": "Death sentence",
     "d": "The jury sentences you to death.",
     "muerte": true
    }
   ]
  },
  "ostracismo": {
   "t": "Ostracism",
   "d": "The assembly writes your name on the ostraka: ten years outside the city, although you keep your property.",
   "rep": -3,
   "hac": -1,
   "ene": -4,
   "img": "azar-destierro"
  },
  "atentado": {
   "t": "Attack",
   "img": "azar-fanaticos",
   "salidas": [
    {
     "min": 0.15,
     "t": "You survive an attack",
     "d": "They assault you at night; you come out wounded.",
     "sal": -3,
     "ene": -1
    },
    {
     "min": -99,
     "t": "Murdered",
     "d": "They assault you at night in a street of the Kerameikos.",
     "muerte": true
    }
   ]
  }
 },
 "finales": {
  "muerte_noble": {
   "emoji": "🕯️",
   "label": "Noble life cut short",
   "texto": "You die true to yourself. Aristotle would admire your character, but would not call you happy: eudaimonia is a whole life well lived, and yours has been cut off."
  },
  "muerte": {
   "emoji": "💀",
   "label": "Wasted life",
   "texto": "You die without having become who you could have been. Neither virtue nor fortune has been on your side."
  },
  "ruina_noble": {
   "emoji": "🥀",
   "label": "Virtuous in poverty",
   "texto": "You keep your character, but you are left with nothing. For Aristotle, virtue alone is not enough: without goods one cannot act well or live well."
  },
  "ruina": {
   "emoji": "🪨",
   "label": "Ruined",
   "texto": "You have lost everything, and with it the possibility of taking part in the life of the city."
  },
  "prospero": {
   "emoji": "🪙",
   "label": "Prosperous but not happy",
   "texto": "You have wealth and fame, but a degraded character. For Aristotle, external goods are means: without virtue there is no eudaimonia."
  }
 },
 "bands": [
  {
   "min": 46,
   "emoji": "🌿",
   "label": "Happy and excellent life"
  },
  {
   "min": 38,
   "emoji": "⚖️",
   "label": "Balanced life"
  },
  {
   "min": 28,
   "emoji": "⚠️",
   "label": "Conflict-ridden life"
  },
  {
   "min": -999,
   "emoji": "🥀",
   "label": "Life on the brink of failure"
  }
 ],
 "reflect": [
  "If your character died virtuous, was he happy? What would Aristotle say, who recalls that nobody calls Priam happy?",
  "What has weighed most in your life: your character, your possessions or fortune?",
  "Aristotle says that virtue is a mean ‘relative to us’. Was it as hard for you to act well as it was for other characters?",
  "Is it worth being incorruptible if that may cost you your life?",
  "What distinguishes the political, the discursive and the contemplative life? Which, according to Aristotle, is the happiest?",
  "Why is phronesis (prudence) so important for living well?"
 ]
};
