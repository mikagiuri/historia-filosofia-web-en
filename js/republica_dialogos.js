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
 "versiones": {
  "degen": {
   "emoji": "⛓️",
   "eyebrow": "Version A",
   "name": "Degeneration of regimes",
   "libros": "Republic VIII-IX and X",
   "lema": "City and soul become corrupted: from aristocracy to tyranny.",
   "intro": "Found the just city and hold out: each crisis can make it step down a rung. Whoever does not fall wins."
  },
  "clases": {
   "emoji": "⚖️",
   "eyebrow": "Version B",
   "name": "The classes that save the pólis",
   "libros": "Republic II-IV",
   "lema": "Each class performs its function and justice saves the city.",
   "intro": "Distribute the three classes, educate the guardians and make sure everyone does their own part: wisdom at the top, courage in the auxiliaries, moderation in all."
  }
 },
 "acciones": [
  {
   "id": "censura",
   "v": "a",
   "ap": 1,
   "img": "ac-censura",
   "name": "Censorship of the poets",
   "src": "República II-III, 377b-392c",
   "d": "Young people grow up with models of virtue: +1 wisdom for each guardian."
  },
  {
   "id": "limite",
   "v": "a",
   "ap": 1,
   "img": "ac-limite",
   "name": "Limit on wealth",
   "src": "Leyes V, 744d-e",
   "d": "Nobody may own more than four times what the poorest person has: this curbs oligarchy (+1 harmony)."
  },
  {
   "id": "sorteo",
   "v": "a",
   "ap": 1,
   "img": "ac-sorteo",
   "name": "Offices by lot",
   "src": "República VIII, 557a",
   "d": "More citizens govern (+2 AP), but for Plato this is the step towards democracy (−1 harmony)."
  },
  {
   "id": "escolta",
   "v": "a",
   "ap": 2,
   "img": "ac-escolta",
   "name": "Personal bodyguard",
   "src": "República VIII, 566b",
   "d": "A champion of the people asks for an escort: +2 harmony now, but −0.5 on every following turn."
  },
  {
   "id": "consejo",
   "v": "a",
   "ap": 2,
   "img": "ac-consejo",
   "name": "Nocturnal Council",
   "src": "Leyes XII, 961a-b",
   "d": "The best citizens meet to watch over the laws: +2 harmony."
  },
  {
   "id": "zanganos",
   "v": "a",
   "ap": 1,
   "img": "ac-zanganos",
   "name": "Out with the drones",
   "src": "República VIII, 552c",
   "d": "The idle who spend without producing are the disease of the hive: +1 harmony."
  },
  {
   "id": "oficio",
   "v": "b",
   "ap": 1,
   "img": "ac-oficio",
   "name": "One trade per person",
   "src": "República II, 370a-c",
   "d": "Each person does one single thing, the one that suits their nature: +6 production."
  },
  {
   "id": "musica",
   "v": "b",
   "ap": 1,
   "img": "ac-musica",
   "name": "Music and gymnastics",
   "src": "República III, 410c-412a",
   "d": "Education of soul and body: +1 wisdom for each guardian."
  },
  {
   "id": "lana",
   "v": "b",
   "ap": 1,
   "img": "ac-lana",
   "name": "Dyeing the wool",
   "src": "República IV, 429d-430b",
   "d": "Education fixes in the auxiliaries the right opinion about what is to be feared, like a dye that does not wash out: this turn the warriors are worth ×1.5."
  },
  {
   "id": "pruebas",
   "v": "b",
   "ap": 2,
   "img": "ac-pruebas",
   "name": "Trials of the guardians",
   "src": "República III, 413c-414a",
   "d": "Only those who withstand pleasures and fears rule: all your guardians count as just."
  },
  {
   "id": "comun",
   "v": "b",
   "ap": 2,
   "img": "ac-comun",
   "name": "Communal life of the guardians",
   "src": "República III, 416d-417b",
   "d": "With no gold and no houses of their own, nothing separates them from the city: +2 harmony."
  },
  {
   "id": "mito",
   "v": "b",
   "ap": 1,
   "img": "ac-mito",
   "name": "Myth of the metals",
   "src": "República III, 415a-c",
   "d": "A shared story unites the city: +1 harmony."
  },
  {
   "id": "rey",
   "v": "b",
   "ap": 3,
   "img": "ac-rey",
   "name": "Philosopher-king",
   "src": "República V, 473c-d",
   "d": "If you have guardians of full wisdom, they rule: +3 harmony. If not, it is of no use."
  },
  {
   "id": "bajar",
   "v": "b",
   "ap": 1,
   "img": "ac-bajar",
   "name": "Returning to the cave",
   "src": "República VII, 519c-520d",
   "d": "The wise go down to rule: +2 harmony, but −1 wisdom for each guardian."
  }
 ],
 "fases": [
  {
   "name": "Specialisation",
   "lema": "Each person, one trade: the city is born from the fact that nobody is self-sufficient (369b)."
  },
  {
   "name": "Guardians",
   "lema": "Educating those who defend: music, gymnastics and right opinion."
  },
  {
   "name": "Government",
   "lema": "Who commands? Those who know, if there are any."
  },
  {
   "name": "Test",
   "lema": "Does justice hold when crises arrive?"
  }
 ],
 "funciones": [
  {
   "k": "sophia",
   "emoji": "🦉",
   "name": "Wisdom",
   "gr": "σοφία (*sophía*)",
   "clase": "rulers",
   "ok": "There are rulers of full wisdom, with knowledge of the Good.",
   "no": "No guardian reaches full wisdom.",
   "loc": "Republic IV, 428b-429a"
  },
  {
   "k": "andreia",
   "emoji": "🛡️",
   "name": "Courage",
   "gr": "ἀνδρεία (*andreía*)",
   "clase": "auxiliaries",
   "ok": "The auxiliaries are enough to defend the city and preserve right opinion about what is to be feared.",
   "no": "There are too few defenders.",
   "loc": "Republic IV, 429b-430c"
  },
  {
   "k": "sophrosyne",
   "emoji": "🍷",
   "name": "Moderation",
   "gr": "σωφροσύνη (*sophrosýne*)",
   "clase": "all classes",
   "ok": "The city is self-sufficient: everyone accepts who rules.",
   "no": "Production falls short: appetite overwhelms the city.",
   "loc": "Republic IV, 430d-432a"
  },
  {
   "k": "dikaiosyne",
   "emoji": "⚖️",
   "name": "Justice",
   "gr": "δικαιοσύνη (*dikaiosýne*)",
   "clase": "the whole city",
   "ok": "Each class does its own part: the city is just.",
   "no": "One of the three is missing: there is not yet justice.",
   "loc": "Republic IV, 433a-434c"
  }
 ],
 "doxa": "The auxiliaries do not have knowledge, ἐπιστήμη (*epistéme*), but right opinion, ὀρθὴ δόξα (*orthè dóxa*): their courage is ‘the preservation of right and lawful opinion about what is to be feared and what is not’ (Republic IV, 430b). Only the rulers leave the cave.",
 "finB": [
  {
   "min": 20,
   "todas": true,
   "emoji": "🏛️",
   "name": "Kallipolis: the just city",
   "lema": "The three classes do their own part and the city holds together."
  },
  {
   "min": 12,
   "emoji": "⚖️",
   "name": "A city still standing, not yet fully just",
   "lema": "It endures, but some function fails."
  },
  {
   "min": 0.1,
   "emoji": "⚠️",
   "name": "A disorderly city",
   "lema": "Each class invades the part of the others."
  },
  {
   "min": -999,
   "emoji": "💥",
   "name": "The city dissolves",
   "lema": "Without justice, the city ceases to be one."
  }
 ],
 "er": {
  "titulo": "Epilogue · the myth of Er",
  "situacion": "Er, a warrior killed in battle, comes back to life on the pyre and tells what he saw: souls choose their next life. The first to choose, without thinking, takes that of the most powerful tyrant; then he discovers that it is written in it that he will devour his own children.",
  "cita": "‘The blame lies with the one who chooses; the god is blameless.’",
  "loc": "Republic X, 617e",
  "griego": "αἰτία ἑλομένου· θεὸς ἀναίτιος (*aitía heloménou; theòs anaítios*).",
  "pregunta": "It is your turn to choose a life. Which do you pick?",
  "opts": [
   {
    "t": "The life of the tyrant: unlimited power.",
    "r": "This is the choice of the first soul, who came from a well-ordered city but had been virtuous ‘by habit, without philosophy’ (619c-d)."
   },
   {
    "t": "The quiet life of a private citizen, like Odysseus.",
    "r": "Odysseus, cured of his ambition, searches for a long time for the life of a private man without office, and chooses it gladly (620c-d)."
   },
   {
    "t": "The life that best knows how to tell good from bad.",
    "r": "This is what Socrates advises: learning always to choose the best life among those possible is what matters most (618b-c)."
   }
  ],
  "cierre": "This is how the Republic ends: ‘the myth was saved and was not lost, and it will save us if we heed it’ (621b-c)."
 },
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
  "glosario": "Concepts in the dictionary",
  "sinDialogos": "There were no dialogues in this game.",
  "hudReg": "Regime",
  "elegir": "Choose a version",
  "accionesMax": "Actions (max. 3 this turn)",
  "justiciaTurno": "⚖️ The city is just: each class does its own (+0.5).",
  "opcional": "optional",
  "clasesB": [
   "Rulers",
   "Auxiliaries",
   "Producers"
  ],
  "rosterB": [
   "🦉 Rulers: σοφία (*sophía*) <span class=\"rep-floor\">all three virtues ≥4 · few, those who deliberate about the whole</span>",
   "🛡️ Auxiliaries: ἀνδρεία (*andreía*) <span class=\"rep-floor\">courage and moderation ≥4 · they keep right opinion</span>",
   "🌾 Producers: σωφροσύνη (*sophrosýne*) <span class=\"rep-floor\">moderation ≥4 · they feed the city</span>"
  ],
  "elegirIntro": "Two games with the same engine and different focuses. You can switch whenever you like.",
  "jugarEsta": "Play this version →",
  "cambiar": "↺ Change version",
  "fase": "Phase",
  "nuevaFase": "New phase: +2 AP",
  "funciones": "The functions of the city",
  "escolta": "The personal bodyguard grows: −0.5 harmony.",
  "erElige": "Your choice",
  "verFin": "See the ending →",
  "version": "Version",
  "chuleta": "📋 Game cheat sheet",
  "chuletaT": "Cheat sheet: all the rules and formulas",
  "volver": "← Back",
  "cAcciones": "Action cards (cost in AP and effect)",
  "cComunes": "Common to both versions",
  "cEventos": "Events (what triggers them and what they do)",
  "cEconomia": "Points economy",
  "cEconomiaT": "You start with 8 AP. Each turn you gain 1 more AP; in Version B, each new phase gives 2 AP. You can use up to 3 actions per turn, each one once.",
  "cVictoria": "How you win and how you lose",
  "cVictoriaA": "Version A: you start as an aristocracy with 10 harmony. Below 8, timocracy; below 6, oligarchy; below 4, democracy; below 2, tyranny. There is no going back up. With 0 harmony or fewer than 3 inhabitants, the city sinks. You win if you end in aristocracy or timocracy.",
  "cVictoriaB": "Version B: you win Kallipolis if you finish with 20 or more harmony and the city is just (all three functions fulfilled); with 12 or more, the city still stands. With 0 harmony or fewer than 3 inhabitants, it dissolves. In B harmony rises fast: the hard part is reaching the end with each class in its place.",
  "cFunciones": "The functions of the city (in both versions): wisdom = some guardian with wisdom 5; courage = warriors ≥ producers ÷ 2.5; moderation = production ≥ population. Justice is not a fourth virtue: it is all three being fulfilled at once, each class doing its own (Republic IV, 433a-c). On every turn the city is just, +0.5 harmony.",
  "cClases": "The classes and their cost",
  "cClasesT": "Cost of each profile = sum of its three virtues. Guardian: all three ≥4. Warrior: courage and moderation ≥4. Producer: moderation ≥4; each producer feeds 2 people. Below 30 inhabitants, the ‘Shrinking City’ event subtracts. In Real, producers ≥ 2 × (guardians + warriors): this is a rule of the game, not of Plato.",
  "cDialogos": "Dialogues: those of your version appear, one every three turns. You choose a position and a reason; the result changes the city.",
  "cDestino": "Fate cards (plague, war, earthquake, death of the founder): they subtract and kill, whatever your decisions. 3 appear in Real and 2 in Easy.",
  "cTurnos": "Length: 12 turns in Easy and 14 in Real."
 }
};
