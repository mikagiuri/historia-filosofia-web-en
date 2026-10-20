// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/republica_dialogos.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const REP_DIAL = {
 "regimenes": [
  {
   "id": "aristocracia",
   "emoji": "🏛️",
   "min": 8,
   "name": "Aristocracy",
   "lema": "The best rule: reason commands the city just as it commands the soul.",
   "causa": "This is the just city: each class does its own part, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*).",
   "cita": "‘For each person to do their own work and not meddle in many things is justice.’",
   "loc": "Republic IV, 433a",
   "glo": [
    "g-la-ciudad-justa",
    "g-justicia"
   ]
  },
  {
   "id": "timocracia",
   "emoji": "🛡️",
   "min": 6,
   "name": "Timocracy",
   "lema": "Spirit rules: honour and war weigh more than reason.",
   "causa": "Discord enters among the rulers: the best lose command and the lovers of honour take it.",
   "cita": "‘Every constitution changes because of those who hold power, when discord arises among them.’",
   "loc": "Republic VIII, 545d",
   "glo": [
    "g-timocracia",
    "g-alma-irascible"
   ]
  },
  {
   "id": "oligarquia",
   "emoji": "💰",
   "min": 4,
   "name": "Oligarchy",
   "lema": "The rich rule: wealth takes the place of honour.",
   "causa": "The love of money displaces virtue, and the city splits in two: the rich and the poor.",
   "cita": "‘The more they value wealth, the less they value virtue.’",
   "loc": "Republic VIII, 550e",
   "glo": [
    "g-alma-concupiscible"
   ]
  },
  {
   "id": "democracia",
   "emoji": "🗳️",
   "min": 2,
   "name": "Democracy",
   "lema": "The people rule: freedom is the highest good.",
   "causa": "The poor defeat the rich and share out the offices among everyone, often by lot.",
   "cita": "‘The city is full of freedom and frankness, and in it everyone can do as they wish.’",
   "loc": "Republic VIII, 557b",
   "glo": []
  },
  {
   "id": "tirania",
   "emoji": "⛓️",
   "min": -999,
   "name": "Tyranny",
   "lema": "One person rules, a slave to his desires.",
   "causa": "A champion of the people gets hold of a bodyguard and of power, and never lets go.",
   "cita": "‘Excessive freedom seems to turn into nothing other than excessive slavery, for the individual and for the city alike.’",
   "loc": "Republic VIII, 564a",
   "glo": [
    "g-tirania"
   ]
  }
 ],
 "dialogos": [
  {
   "id": "trasimaco",
   "emoji": "🦁",
   "quien": "Thrasymachus",
   "loc": "Republic I, 338c",
   "situacion": "The sophist Thrasymachus bursts into the assembly and shouts that your guardians are naive.",
   "cita": "‘I say that the just is nothing other than what is to the advantage of the stronger.’",
   "griego": "τὸ τοῦ κρείττονος συμφέρον (*tò toû kreíttonos symphéron*): ‘what is to the advantage of the stronger’.",
   "pregunta": "How do you reply?",
   "opts": [
    {
     "t": "Agree with him: let the guardians rule for their own benefit.",
     "razon": "That way they will never lack strength or the will to command.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "The guardians are paid to rule: you have more resources (+2 AP), but the people distrust them (−1 harmony)."
    },
    {
     "t": "Refute him: whoever rules well seeks the good of the ruled, as a doctor seeks the good of the patient.",
     "razon": "A craft looks to the good of what it deals with, not of the person who practises it.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "You convince the assembly (+1 harmony), but the debate takes time (−1 AP)."
    },
    {
     "t": "Throw him out: you do not argue with a sophist.",
     "razon": "His words sow disorder among the young.",
     "ef": {
      "arm": 1,
      "sj": -1
     },
     "r": "The assembly falls silent (+1 harmony), but your guardians lose the habit of giving reasons (−1 wisdom each)."
    }
   ],
   "platon": {
    "txt": "‘No ruler, insofar as he is a ruler, examines or commands what is advantageous to himself, but what is advantageous to the one he rules.’",
    "loc": "Republic I, 342e"
   },
   "critica": {
    "autor": "Thrasymachus",
    "txt": "‘Do you think that shepherds and cowherds look to the good of the sheep or the cattle, and fatten and tend them with anything in mind other than the good of their masters and their own?’",
    "loc": "Republic I, 343b"
   },
   "glo": [
    "g-justicia",
    "g-sofistas"
   ]
  },
  {
   "id": "giges",
   "emoji": "💍",
   "quien": "Glaucon",
   "loc": "Republic II, 359c-360d",
   "situacion": "Glaucon tells the story of Gyges, a shepherd who found a ring that made him invisible and used it to seize power. Now one of your city's guardians has found one just like it.",
   "cita": "‘Nobody is just willingly, but only under compulsion.’",
   "griego": "",
   "pregunta": "What do you do?",
   "opts": [
    {
     "t": "More surveillance and more punishments: let no one escape the city's gaze.",
     "razon": "If justice is born of fear, you must inspire fear.",
     "ef": {
      "mov": 1
     },
     "r": "A producer becomes a warrior in order to keep watch. But who watches the watchers?"
    },
    {
     "t": "Trust in education: the just person is just even if nobody sees them.",
     "razon": "Justice is an order of the soul, not a fear of being seen.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Your guardians are truly just: the ring does not tempt them (+2 harmony)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Your guardians are not well educated and the one with the ring abuses it (−2 harmony)."
     }
    },
    {
     "t": "Have the guardians live in full view of everyone, with no closed houses and no gold.",
     "razon": "This is what Plato proposes for them (416d-417a).",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Nobody can hide (+1 harmony), but keeping watch is costly (−1 AP)."
    }
   ],
   "platon": {
    "txt": "‘I place it among the finest goods: those that anyone who is to be happy must love, both for their own sake and for what comes of them.’",
    "loc": "Republic II, 358a"
   },
   "critica": {
    "autor": "Glaucon",
    "txt": "‘If someone with that power never wished to do injustice or to touch what belongs to others, those who saw it would think him the most wretched and foolish of men.’",
    "loc": "Republic II, 360d"
   },
   "glo": [
    "g-justicia",
    "g-virtud"
   ]
  },
  {
   "id": "adimanto",
   "emoji": "🏠",
   "quien": "Adimantus",
   "loc": "Republic IV, 419a",
   "situacion": "Adimantus complains: your guardians have no land, no houses and no gold. They rule the city, but live like hired soldiers.",
   "cita": "‘What would you say in your defence, Socrates, if someone said that you are not making these men at all happy, and that through their own fault?’",
   "griego": "",
   "pregunta": "What do you decide?",
   "opts": [
    {
     "t": "Give them houses, land and gold: whoever rules deserves a reward.",
     "razon": "A happy guardian rules better.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "They are content (+2 AP), but they begin to look after their own estates: according to Plato, this makes them masters instead of allies (417a-b) (−2 harmony)."
    },
    {
     "t": "Keep them without property: the city is not founded so that one class may be happy.",
     "razon": "What matters is the happiness of the whole city.",
     "ef": {
      "arm": 1
     },
     "r": "The city stays united (+1 harmony). The question remains open: can they be happy like this?"
    }
   ],
   "platon": {
    "txt": "‘We did not found the city looking to make one single class especially happy, but to make the whole city as happy as possible.’",
    "loc": "Republic IV, 420b"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "‘It is not possible for the whole to be happy unless most of its parts, or all of them, or some of them, are.’",
    "loc": "Politics II 5, 1264b17-19"
   },
   "glo": [
    "g-la-ciudad-justa"
   ]
  },
  {
   "id": "metales",
   "emoji": "🥇",
   "quien": "Socrates",
   "loc": "Republic III, 414b-c",
   "situacion": "Everyone must accept their place in the city. Socrates proposes telling a myth: you were all born of the earth and are brothers, but the god mixed gold into some of you, silver into others, and iron and bronze into the rest.",
   "cita": "‘How might we devise one single noble lie to persuade, above all, the rulers themselves and, failing that, the rest of the city?’",
   "griego": "γενναῖον ψεῦδος (*gennaîon pseûdos*): ‘noble lie’, or ‘noble fiction’, depending on the translator.",
   "pregunta": "Do you tell the myth?",
   "opts": [
    {
     "t": "Tell the myth of the metals.",
     "razon": "A united city needs a shared story.",
     "ef": {
      "arm": 2
     },
     "r": "The city accepts its order (+2 harmony). But it accepts it because it believes a myth, not because it understands."
    },
    {
     "t": "Tell the truth: the classes are a division of functions that can be debated.",
     "razon": "Whoever obeys has the right to know why.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Your guardians can explain it and the assembly accepts it (+1 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Nobody can explain the reason why, and discontent grows (−1 harmony)."
     }
    },
    {
     "t": "Let each person choose their own class.",
     "razon": "Nobody should be tied to their birth.",
     "ef": {
      "arm": -1,
      "ap": 1
     },
     "r": "Many want to command and few want to work: the city loses order (−1 harmony), though it gains initiative (+1 AP)."
    }
   ],
   "platon": {
    "txt": "‘You in the city are all brothers, but the god, when shaping you, mixed gold into those able to rule, silver into the auxiliaries, and iron and bronze into the farmers and the other craftsmen.’ And if a child of bronze is born to golden parents, he must move to the class that suits him, and the other way round.",
    "loc": "Republic III, 415a-c"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "He sees in the noble lie a piece of propaganda that rulers use so that the ruled accept their place (paraphrase). Other readers understand it as a founding myth, like those every community has.",
    "loc": "The Open Society and Its Enemies, I, ch. 8 (1945)"
   },
   "glo": [
    "g-las-tres-partes-del-alma"
   ]
  },
  {
   "id": "comunidad",
   "emoji": "👪",
   "quien": "Socrates",
   "loc": "Republic V, 457c-d",
   "situacion": "Socrates proposes that the guardians have no families of their own: that way nobody will say ‘this is mine’ and the city will be one single family.",
   "cita": "‘These women shall all be shared by all these men, and none shall live privately with any of them; and the children shall be shared too, and neither shall a father know his child nor a child its father.’",
   "griego": "",
   "pregunta": "Do you apply it to your guardians?",
   "opts": [
    {
     "t": "Apply it: without private families, nothing divides the guardians.",
     "razon": "What unites the city is its greatest good.",
     "ef": {
      "arm": 2,
      "ap": -2
     },
     "r": "The guardians form one body (+2 harmony), but raising all the children in common takes great effort (−2 AP)."
    },
    {
     "t": "Respect the guardians' families.",
     "razon": "Everyone takes better care of what is their own.",
     "ef": {
      "arm": -1,
      "ap": 1
     },
     "r": "Each guardian looks after their own (+1 AP), but ‘mine’ and ‘yours’ appear (−1 harmony)."
    }
   ],
   "platon": {
    "txt": "‘Do we have any greater evil for a city than what tears it apart and makes it many instead of one? Or any greater good than what binds it together and makes it one?’",
    "loc": "Republic V, 462a-b"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "‘What is common to the greatest number receives the least care.’",
    "loc": "Politics II 3, 1261b33-34"
   },
   "glo": [
    "g-la-ciudad-justa"
   ]
  },
  {
   "id": "filosofo",
   "emoji": "🦉",
   "quien": "Glaucon",
   "loc": "Republic V, 473c-d",
   "situacion": "The assembly debates who should rule. Socrates makes the proposal that, by his own admission, will make everyone laugh.",
   "cita": "‘Unless philosophers rule as kings in the cities, or those who are now called kings and rulers philosophise genuinely and properly, there will be no respite from evils for cities, dear Glaucon, nor, I think, for the human race.’",
   "griego": "",
   "pregunta": "To whom do you give power?",
   "opts": [
    {
     "t": "To the wisest.",
     "razon": "Ruling is a form of knowledge, like piloting a ship.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "You have guardians of full wisdom: they rule well (+2 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "None of your guardians is fully wise: the ‘wise’ disappoint (−1 harmony)."
     }
    },
    {
     "t": "To whoever is chosen by lot, as in democratic Athens.",
     "razon": "All citizens are worth the same.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "The assembly gets involved (+2 AP), but for Plato this is leaving the helm to someone who cannot sail (−1 harmony)."
    },
    {
     "t": "To the bravest, as in Sparta.",
     "razon": "Whoever defends the city deserves to command it.",
     "req": "ejercito",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Your army is strong and keeps order (+1 harmony), though honour begins to weigh more than reason."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Your warriors are few and nobody respects them (−2 harmony)."
     }
    }
   ],
   "platon": {
    "txt": "‘The true pilot must attend to the year, the seasons, the sky, the stars, the winds and everything that belongs to his craft, if he is really to command a ship.’",
    "loc": "Republic VI, 488d"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "He proposes replacing the question ‘who should rule?’ with this one: how should institutions be organised so that bad rulers do the least possible harm? (paraphrase)",
    "loc": "The Open Society and Its Enemies, I, ch. 7 (1945)"
   },
   "glo": [
    "g-el-bien",
    "g-sabiduria"
   ]
  },
  {
   "id": "caverna",
   "emoji": "🕯️",
   "quien": "Glaucon",
   "loc": "Republic VII, 519c-520d",
   "situacion": "Your best guardians have come out of the cave and contemplate the Good. They do not want to go back down to rule among shadows.",
   "cita": "‘So you must go down, each in your turn, to the common dwelling of the others.’",
   "griego": "καταβατέον (*katabatéon*): ‘one must go down’.",
   "pregunta": "Do you force them to go back?",
   "opts": [
    {
     "t": "Force them to go down in turns.",
     "razon": "They owe the city the education they received.",
     "ef": {
      "arm": 2,
      "sj": -1
     },
     "r": "They return to rule (+2 harmony), though, back in the darkness, their eyes take time to adjust to the shadows (−1 wisdom each)."
    },
    {
     "t": "Let them contemplate: they have earned that freedom.",
     "razon": "There is no higher life than that of the one who knows.",
     "ef": {
      "arm": -2,
      "sj": 1
     },
     "r": "They are wiser than ever (+1 wisdom each), but the city is left in the hands of those who have not come out (−2 harmony)."
    }
   ],
   "platon": {
    "txt": "‘The law is not concerned that one single class in the city should fare especially well, but contrives that this happens in the city as a whole.’",
    "loc": "Republic VII, 519e"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "The contemplative life is the highest and the most self-sufficient (paraphrase): why should the wise person abandon it?",
    "loc": "Nicomachean Ethics X 7, 1177a12-b1"
   },
   "glo": [
    "g-el-mito-de-la-caverna",
    "g-el-bien",
    "g-dialectica-ap"
   ]
  },
  {
   "id": "poetas",
   "emoji": "🎭",
   "quien": "Adimantus",
   "loc": "Republic II, 377b-c",
   "situacion": "The city's children listen to Homer and Hesiod: gods who lie, quarrel and take revenge. Socrates proposes keeping watch over the myths that are told.",
   "cita": "‘First, it seems, we must supervise the makers of myths: accept the one they compose well and reject the one they do not.’",
   "griego": "",
   "pregunta": "What do you do about the poets?",
   "opts": [
    {
     "t": "Censor the myths that show the gods as unjust or cowardly.",
     "razon": "Children imitate what they hear.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Young people grow up with models of virtue (+1 harmony), but reviewing the myths is costly (−1 AP)."
    },
    {
     "t": "Leave the poets free.",
     "razon": "A city also thinks itself through its stories.",
     "ef": {
      "arm": -1,
      "ap": 2
     },
     "r": "Theatre and poetry flourish (+2 AP), but young people learn from gods who take revenge (−1 harmony)."
    },
    {
     "t": "Banish all poetry, except hymns to the gods and praise of good people.",
     "razon": "This is what Plato ends up proposing in book X.",
     "ef": {
      "arm": 2,
      "sj": -1
     },
     "r": "Order reigns (+2 harmony), but the city loses a way of learning (−1 wisdom each)."
    }
   ],
   "platon": {
    "txt": "‘Of poetry, only hymns to the gods and praises of good people should be admitted into the city.’",
    "loc": "Republic X, 607a"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "Imitation comes naturally to human beings from childhood, and through imitation they acquire their first knowledge (paraphrase).",
    "loc": "Poetics 4, 1448b5-9"
   },
   "glo": [
    "g-paideia"
   ]
  }
 ],
 "ui": {
  "regTitulo": "Your city's regime (Republic, book VIII)",
  "degenera": "Your city degenerates",
  "seguir": "Continue →",
  "dialogo": "Dialogue",
  "elige": "Elige tu postura y su razón:",
  "porque": "Because",
  "resultado": "What happens in your city",
  "responde": "What Plato replies",
  "objeta": "What is objected to him",
  "abierto": "Open debate: the game does not say which position is the right one. You decide, with reasons.",
  "finRegimen": "Final regime",
  "hunde": "The city sinks into tyranny",
  "escalera": "This is how Plato ranks the regimes, from best to worst. Aristotle ranks them differently: of the deviant forms, democracy is the most moderate and tyranny the worst (Politics IV 2, 1289a-b). Is democracy a degeneration or the best defence against the tyrant?",
  "posturas": "Your positions in the dialogues",
  "disertacion": "For your essay",
  "dTesis": "Thesis: can a city be just if each class limits itself to doing its own part?",
  "dPlaton": "Plato's argument: justice is the harmony of the parts, in the city as in the soul (Republic IV, 433a and 441d-e).",
  "dObjecion": "Objection: choose one of the criticisms that came up in your game (Thrasymachus, Glaucon, Aristotle, Popper…) and explain it in your own words.",
  "dTuya": "Your conclusion: which position from your game would you defend in writing, and why?",
  "glosario": "Concepts in the glossary",
  "sinDialogos": "There were no dialogues in this game.",
  "hudReg": "Regime"
 }
};
