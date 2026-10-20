// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/republica_mazo_b.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const REP_MAZO_B = {
 "acciones": [
  {
   "id": "oficio",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "One trade per person",
   "d": "Each person does one thing only, their own: +6 production and, if the producers do not overrun the city, +1 harmony.",
   "cita": "‘Each of us is born not quite like anyone else, but different by nature, suited to a different job. And more is done, and better and more easily, when one person does one thing only, their own, at the right time, leaving the others alone.’",
   "loc": "Republic II, 370a-c; IV, 433a-b",
   "nota": "The division of labour is the origin of the city and the root of justice: doing one’s own. That is why this card opens the deck. Simplified: ‘no class overrunning’ is measured as ‘the producers are not an excessive majority’.",
   "ef": {
    "prod": 6,
    "si": {
     "req": "!mayoriaE",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_mercado",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Market and currency",
   "d": "The city grows in comfort, not in justice: +10 production, no harmony. It opens the door to ‘The swollen city’.",
   "cita": "‘We shall need traders, a market and a currency, a token for exchange. So the city grows. But if we go after luxury, we are no longer founding a healthy city, but a feverish one, swollen with things that are not needed.’",
   "loc": "Republic II, 371a-d; 372e-373a",
   "nota": "Plato distinguishes the ‘healthy’ pólis from the ‘swollen’ one, φλεγμαίνουσα (*phlegmaínousa*). Material well-being is not, in itself, justice: useful for debating growth and limits.",
   "ef": {
    "prod": 10
   }
  },
  {
   "id": "b_labranza",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "Division of land and tasks",
   "d": "+8 production. If the producers feed the whole population, also +1 harmony.",
   "cita": "‘The farmer will not make his own plough or hoe: the smith will make them for him. And so each trade serves the others, and the city is born from the needs of many.’",
   "loc": "Republic II, 369b-370a",
   "nota": "The producing class is not the despised one: it is the foundation. Without its moderation and its work, neither government nor defence can be sustained.",
   "ef": {
    "prod": 8,
    "si": {
     "req": "alimenta",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_frugalidad",
   "v": "b",
   "fase": 0,
   "ap": 1,
   "name": "A healthy city, not a swollen one",
   "d": "Give up luxury: +1 harmony and this turn ‘The swollen city’ does no harm, but −4 production.",
   "cita": "‘Do you want us to examine a healthy city first? They will eat bread and wine, and have salt, olives and cheese; they will boil onions and vegetables. And they will spend their lives in peace and health, and die old, handing on the same life to their children.’",
   "loc": "Republic II, 372a-d",
   "nota": "The austerity of the first city. Glaucon calls it a ‘city of pigs’; the debate between need and desire remains open, with no verdict.",
   "ef": {
    "arm": 1,
    "prod": -4,
    "escudo": {
     "tags": [
      "b_ev_hinchada"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "musica",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Education: music (μουσική, *mousiké*)",
   "d": "Rhythm and harmony tune the soul: +1 courage and +1 moderation for each auxiliary guardian. It prepares ‘The attuned guardian’.",
   "cita": "‘Education in music is the most sovereign, because rhythm and harmony sink deepest into the soul and, if it is well educated, make it graceful; and if badly, the opposite.’",
   "loc": "Republic III, 401d-402a; II, 376e-377a",
   "nota": "For Plato ‘music’ covers word, story and melody: it shapes character before reasoning does. To educate is to tune the soul.",
   "ef": {
    "gv": 1,
    "et": 1
   }
  },
  {
   "id": "b_gimnasia",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "Education: gymnastics (γυμναστική, *gymnastiké*)",
   "d": "+1 courage for each auxiliary guardian. If ‘Music’ has already been played, +1 harmony for the balance achieved.",
   "cita": "‘It is not the good body that makes the soul good, but the other way round: the good soul, by its virtue, makes the body as good as it can be. Gymnastics and music are not one for the body and another for the soul: both educate, above all, the soul.’",
   "loc": "Republic III, 403c-404e; 410b-c",
   "nota": "Gymnastics without music brutalises; music without gymnastics softens. Simplified: without Music there is no proper punishment (the deck spoke of a guardian who is ‘fierce’ even with his own people).",
   "ef": {
    "gv": 1,
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_equilibrio_guardian",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "The attuned guardian",
   "d": "After Music and Gymnastics: +2 harmony. The guardian is fierce with the enemy and gentle with his own: ‘War over territory’ does half the damage.",
   "cita": "‘Whoever blends music and gymnastics in the fairest measure and applies them to the soul in due proportion, him we shall call the most perfectly educated and the most harmonious, far more than the tuner of strings.’",
   "loc": "Republic III, 410c-412a",
   "nota": "The just blend, μετριότης (*metriótes*): the well-educated spirit is an ally of reason (440e-441a). Simplified: Gymnastics is required and the +2 comes only if Music was also played; the halving of damage is applied by the event.",
   "req": "flag:b_gimnasia",
   "ef": {
    "si": {
     "req": "flag:musica",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "pruebas",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Trials of the guardians",
   "d": "If the auxiliaries are educated, the best one becomes a ruler (1 auxiliary to ruler). If not, the wrong person is promoted: −1 harmony.",
   "cita": "‘They must be watched at every age, to see whether they keep to this principle and let themselves be neither bewitched nor forced into forgetting the opinion that one must do what is best for the city. Whoever comes out of the test pure, like gold tried in fire, we shall set as ruler and guardian.’",
   "loc": "Republic III, 413c-414a",
   "nota": "Rulers come from among the guardians by proven merit, not by birth (415b-c). Simplified: education is checked only by whether Gymnastics has been played (the deck asks for Music and Gymnastics).",
   "ef": {
    "arm": -1,
    "si": {
     "req": "flag:b_gimnasia",
     "ef": {
      "arm": 1,
      "mov": [
       "G",
       "Z",
       1
      ]
     }
    }
   }
  },
  {
   "id": "mito",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "The myth of the metals",
   "d": "A shared story binds the pólis together: +2 harmony and, for 2 turns, ‘Rebellion over inequality’ does no harm.",
   "cita": "‘We shall say: you are brothers, but the god, when he fashioned you, mixed gold into those able to command, silver into the auxiliaries, and iron and bronze into the farmers and craftsmen. And the first and most important thing the god orders is to watch which metal is in each child’s soul.’",
   "loc": "Republic III, 414b-415c",
   "nota": "The ‘noble lie’, γενναῖον ψεῦδος (*gennaîon pseûdos*). Can a just city be founded on a story that is not literally true? Popper sees propaganda; others, a founding myth. Simplified: without the ‘truth / symbol’ choice.",
   "ef": {
    "arm": 2,
    "escudo": {
     "tags": [
      "b_ev_desigualdad"
     ],
     "turnos": 2
    }
   }
  },
  {
   "id": "b_hijo_bronce",
   "v": "b",
   "fase": 1,
   "ap": 1,
   "name": "A bronze child in a golden house",
   "d": "After the myth: each person goes to the class of their soul, not of their family. A producer with a golden soul rises to ruler; +1 harmony if the city stays in balance.",
   "cita": "‘If a child is born to them with bronze or iron in its soul, they must on no account feel pity: give it the rank its nature deserves and push it down among the craftsmen or farmers. And if one with gold or silver is born to these, honour it and lead it upwards.’",
   "loc": "Republic III, 415a-c",
   "nota": "The just counterpart of the myth: class is owed to the nature of the soul, not to inheritance. Simplified: movement is always from producer to ruler (the deck also allowed the reverse).",
   "req": "flag:mito",
   "ef": {
    "mov": [
     "E",
     "Z",
     1
    ],
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "comun",
   "v": "b",
   "fase": 1,
   "ap": 2,
   "name": "Guardians without property",
   "d": "No house, land or gold of their own: +2 harmony and no faction in the government, but −6 production. It opens the debate ‘Are the guardians happy?’.",
   "cita": "‘None of them will have a house, land or possession of his own. They will receive their upkeep from the others, as the wage for their guarding, and spend it in common. They alone are forbidden to touch gold and silver, lest, having something of their own, they stop guarding the good of all.’",
   "loc": "Republic III, 416d-417b",
   "nota": "The guardians’ community of goods. This is exactly what Aristotle criticises (Politics II, 1261a-1264b): what is common is neglected. Open debate.",
   "ef": {
    "arm": 2,
    "prod": -6
   }
  },
  {
   "id": "rey",
   "v": "b",
   "fase": 2,
   "ap": 3,
   "name": "The philosopher-king",
   "d": "Only if there is a ruler of full wisdom: +3 harmony. Without one, the card is blocked.",
   "cita": "‘Unless philosophers rule as kings in the cities, or those now called kings genuinely and vigorously philosophise, and political power and philosophy coincide in the same people, there is no rest from evils for the cities nor, I think, for the human race.’",
   "loc": "Republic V, 473c-d",
   "nota": "The most famous and most debated thesis: Popper points to it as the root of authoritarianism; others read it as ‘let the one who knows rule, not the one who wants to’. Simplified: it does not duplicate the wisdom cards.",
   "req": "sabios",
   "ef": {
    "arm": 3
   }
  },
  {
   "id": "bajar",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "Returning to the cave",
   "d": "After the philosopher-king: if there are wise rulers who go down to govern, +2 harmony at the start of each of the next 2 turns.",
   "cita": "‘Each in your turn, you will go down to live with the others, and you will grow used to seeing in the dark. For you will have seen the truth about the beautiful, the just and the good; and so the city will be governed awake, and not in a dream, as those of today are, which fight over shadows.’",
   "loc": "Republic VII, 519c-520d",
   "nota": "The philosopher does not stay above: their justice is to go back and govern. Simplified: the effect lasts 2 turns (not the rest of the game) and does not stop if the rulers disappear.",
   "req": "flag:rey",
   "ef": {
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "arm",
       "n": 2,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_consejo",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Council that deliberates",
   "d": "The rulers deliberate about the whole: +1 wisdom for each ruler and +1 harmony.",
   "cita": "‘The city founded according to nature would be wise as a whole through that part, the smallest, which stands at the head and rules; and it falls to that part, it seems, to share in the knowledge which, alone among all, deserves to be called σοφία (*sophía*).’",
   "loc": "Republic IV, 428c-429a",
   "nota": "The wisdom of the city lies in knowing how to deliberate about the whole, not in the sum of technical skills. Simplified: +1 wisdom per ruler (the deck said +2).",
   "ef": {
    "zsj": 1,
    "arm": 1
   }
  },
  {
   "id": "b_unidad",
   "v": "b",
   "fase": 2,
   "ap": 2,
   "name": "One single city",
   "d": "+1 harmony, or +2 if all three functions are fulfilled. Next turn, ‘Faction in the government’ does no harm.",
   "cita": "‘Is there any greater evil for a city than what tears it apart and makes it many instead of one? And any greater good than what binds it together and makes it one? When pleasure and pain are common among the citizens—all rejoicing and grieving at the same things—that sharing is what holds the city together.’",
   "loc": "Republic V, 462a-e; IV, 423c-d",
   "nota": "Unity is Plato’s political aim; Aristotle objects that a city that is too much one ceases to be a city (Politics II, 1261a). Simplified: it cancels the faction for one turn instead of halving its damage.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 1
     }
    },
    "escudo": {
     "tags": [
      "b_ev_faccion"
     ],
     "turnos": 1
    }
   }
  },
  {
   "id": "b_tamano",
   "v": "b",
   "fase": 2,
   "ap": 1,
   "name": "Neither large nor small",
   "d": "The city grows only as long as it remains one: if it has fewer than 30 inhabitants, +1 harmony to offset the size penalty.",
   "cita": "‘Let the city grow as far as it is willing to grow while remaining one; but no further. Let it be neither small in appearance nor large, but one and sufficient.’",
   "loc": "Republic IV, 423b-d",
   "nota": "The criterion for size is not greatness but unity and self-sufficiency, αὐτάρκεια (*autárkeia*). Simplified: +1 harmony with fewer than 30 inhabitants; it does not curb excessive growth.",
   "ef": {
    "si": {
     "req": "pequena",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_cada_cual_lo_suyo",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "Each to their own",
   "d": "Justice put into practice: +3 harmony if wisdom, defence and food are all met at once; otherwise +1. It never subtracts.",
   "cita": "‘This that we have been saying from the start—that each should do his own—turns out to be justice, or a form of it. To do one’s own and not busy oneself with the affairs of many: that is the just.’",
   "loc": "Republic IV, 433a-b; 443c-d",
   "nota": "The working definition of justice, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). Simplified: two levels (+3 or +1) instead of subtracting 1 for each class that fails.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "equilibrio",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "b_armonia_alma",
   "v": "b",
   "fase": 3,
   "ap": 2,
   "name": "The city and the soul",
   "d": "+2 harmony. If reason rules (there are wise rulers), for 2 turns each negative event subtracts 1 less.",
   "cita": "‘Just as in the city there are three classes, so in the soul of each person there are three parts: that with which one reasons, that with which one grows spirited, and that with which one desires. The just person is the one in whom each part does its own, and reason rules, and spirit obeys it as an ally.’",
   "loc": "Republic IV, 439d-441c; 441d-442d",
   "nota": "The soul–city parallel, the thing most often asked in the PAU: inner justice has the same structure as political justice. Simplified: the protection is decided when the card is played.",
   "ef": {
    "arm": 2,
    "si": {
     "req": "sabios",
     "ef": {
      "dura": {
       "k": "menos",
       "n": 1,
       "turnos": 2
      }
     }
    }
   }
  },
  {
   "id": "b_salud_alma",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Health of the soul",
   "d": "Reorder without expelling anyone: +1 harmony, and +1 more if any function of the city is failing.",
   "cita": "‘To produce justice is to set the parts of the soul in their natural order, some ruling and others being ruled; to produce injustice is the revolt of some against others. Justice is, then, the health of the soul; injustice, its sickness.’",
   "loc": "Republic IV, 443c-444e",
   "nota": "Justice = health; injustice = sickness of the soul: this answers Glaucon (is it worth being just?). Simplified: ‘clearing up a disorder’ becomes +1 harmony when balance is lacking.",
   "ef": {
    "arm": 1,
    "si": {
     "req": "!equilibrio",
     "ef": {
      "arm": 1
     }
    }
   }
  },
  {
   "id": "b_reparto_virtud",
   "v": "b",
   "fase": 3,
   "ap": 1,
   "name": "Honouring every class",
   "d": "No class is surplus: +1 harmony and +1 wisdom for each ruler, +1 courage for each auxiliary and +1 moderation for each producer.",
   "cita": "‘We are not founding the city so that one single class may be especially happy, but so that the whole city may be as happy as possible. For it is in such a city that we expected to find justice.’",
   "loc": "Republic IV, 420b-421c",
   "nota": "A reply to Adeimantus: the happiness of the whole before that of a part. The just ruler does not grow rich; he serves. It also prevents ‘Rebellion over inequality’.",
   "ef": {
    "arm": 1,
    "zsj": 1,
    "gv": 1,
    "et": 1
   }
  }
 ],
 "eventos": [
  {
   "id": "b_ev_entrometimiento",
   "v": "b",
   "name": "The cobbler wants to govern",
   "loc": "Republic IV, 434a-c",
   "cita": "‘For the carpenter to try to do the cobbler’s work, or the cobbler the carpenter’s, exchanging tools and honours, does not do much harm to the city. But for one who is a craftsman by nature to slip, emboldened, into the warrior class, or for the warrior to slip unworthily into that of the rulers: that exchange is the ruin of the city.’",
   "threat": "It tests whether each class is in its place: wisdom at the top, sufficient defence and food for all.",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "Each is in their own place: +1 harmony."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Some class meddles in what is not its own, πολυπραγμοσύνη (*polypragmosýne*): −2 harmony."
   },
   "nota": "Injustice defined: meddling in what is not one’s own. It is the exact reverse of ‘Each to their own’."
  },
  {
   "id": "b_ev_hinchada",
   "v": "b",
   "name": "The swollen city",
   "loc": "Republic II, 372e-373e",
   "cita": "‘If we want to see how justice and injustice arise in a city, let us look at the city that fills up with things that are not needed: hunters, artists, cooks, doctors for so much excess. The territory, once sufficient, becomes too small; and we shall have to cut off a piece of our neighbours’. And from there comes war.’",
   "threat": "After the market, if the producers are the great majority, luxury overruns the city.",
   "aparece": "flag:b_mercado",
   "req": "!mayoriaE",
   "si": {
    "ef": {},
    "msg": "The city stays healthy: luxury does not overrun it."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "The city swells with things that are not needed and eyes its neighbour’s territory: −2 harmony."
   },
   "nota": "Plato derives war from an excess of desire, not from nature. Open debate on consumption and conflict, with no moral. Simplified: ‘accumulated luxury’ is measured as a majority of producers; it does not lead on to war."
  },
  {
   "id": "b_ev_desigualdad",
   "v": "b",
   "name": "Rebellion over inequality",
   "loc": "Republic IV, 422e-423a",
   "cita": "‘Every city, however small, is in reality two cities at war: that of the poor and that of the rich; and within each, many others. If you treat them as one, you deceive yourself.’",
   "threat": "If nobody has built cohesion (neither the myth of the metals nor honouring every class), a class feels wronged.",
   "req": "flag:mito",
   "si": {
    "ef": {},
    "msg": "The shared story sustains cohesion: nobody rebels."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "flag:b_reparto_virtud",
      "ef": {
       "arm": 2
      }
     }
    },
    "msg": "Without a shared story, the city splits in two: −2 harmony (nothing, if you honoured every class)."
   },
   "nota": "Cohesion cannot be taken for granted: it has to be built (a shared story, recognition). It links with the critique of inequality. Simplified: the pólis does not split."
  },
  {
   "id": "b_ev_faccion",
   "v": "b",
   "name": "Faction in the government (στάσις, *stásis*)",
   "loc": "Republic III, 417a-b",
   "cita": "‘Having land, houses and money of their own, from guardians they will become householders and farmers; from allies of the other citizens, masters who hate and are hated; and they will spend their lives fearing those within more than the enemies without, already hurrying, they and the city, towards ruin.’",
   "threat": "If the guardians have private property, they fight over what is theirs.",
   "req": "flag:comun",
   "si": {
    "ef": {},
    "msg": "Without property, there is nothing to fight over at the top."
   },
   "no": {
    "ef": {
     "arm": -2,
     "si": {
      "req": "!justos",
      "ef": {
       "kill": [
        "Z",
        1
       ]
      }
     }
    },
    "msg": "The rulers fight over their estates: −2 harmony and, if they are not just, one falls."
   },
   "nota": "Why Plato takes property away from the guardians: so that there is no faction at the top. Aristotle’s objection awaits in ‘Guardians without property’. Simplified: the worsening is measured by ‘just’ rulers; it does not check whether there are several."
  },
  {
   "id": "b_ev_sofistas",
   "v": "b",
   "name": "The teacher who flatters the beast",
   "loc": "Republic VI, 493a-c",
   "cita": "‘It is as if someone, rearing a large and powerful animal, learned its moods and appetites: when it grows tame and when it grows furious, which sounds calm it; and, having learned this through long dealings with it, called it wisdom. But he would not know which of the animal’s tastes is fine or foul, just or unjust: he only names them as the beast opines.’",
   "threat": "If wisdom is lacking at the top, relativism seduces the young.",
   "req": "sabios",
   "si": {
    "ef": {
     "arm": 1
    },
    "msg": "The arguments are refuted: +1 harmony."
   },
   "no": {
    "ef": {
     "arm": -2
    },
    "msg": "Relativism seduces the young: −2 harmony."
   },
   "nota": "The Platonic critique of the sophist: he confuses flattering the masses with knowing. Open debate on rhetoric, public opinion and truth."
  },
  {
   "id": "b_ev_defensa",
   "v": "b",
   "name": "War over territory",
   "loc": "Republic II, 374a-e",
   "cita": "‘Shall we leave war to just anyone? Or is this too a craft? For if the cobbler cannot also be farmer, weaver and builder, how could one who has another trade be good at war? Guarding the city calls for more care than any other work, and more time, and skill, and dedication.’",
   "threat": "If the auxiliary guardians are not enough to defend the population, the enemy gets in.",
   "req": "defensa",
   "si": {
    "ef": {},
    "msg": "The guardians defend the city: the enemy does not pass."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ],
     "si": {
      "req": "flag:b_equilibrio_guardian",
      "ef": {
       "arm": 1
      }
     }
    },
    "msg": "The enemy gets in: −2 harmony and 2 producers die (−1 harmony if your guardians are attuned)."
   },
   "nota": "Defence is a specialised craft: from it the guardians arise. Simplified: ‘The attuned guardian’ halves the loss of harmony, not the deaths."
  },
  {
   "id": "b_ev_adimanto",
   "v": "b",
   "name": "Are the guardians happy?",
   "loc": "Republic IV, 419a-421c",
   "aparece": "flag:comun",
   "nota": "Adeimantus’ objection and Socrates’ reply. A live question: can some be asked to give things up for the common good? Simplified: option B does not add the risk of faction.",
   "elige": {
    "id": "b_ev_adimanto",
    "emoji": "🏠",
    "quien": "Adimantus",
    "loc": "Republic IV, 419a-421c",
    "situacion": "Your guardians live without property. Adeimantus protests: they rule the city, but do not enjoy it.",
    "cita": "‘Someone will say that you do not make them very happy, and that it is your own fault: masters of the city, they do not enjoy it; no lands, no fine houses, no gold. — We did not found the city for the happiness of one class apart, but for that of the whole; in the well-governed whole we hope to find justice.’",
    "griego": "",
    "pregunta": "How do you reply?",
    "opts": [
     {
      "t": "Happiness belongs to the whole, not to a part.",
      "razon": "The city is not founded so that one single class may be happy.",
      "ef": {
       "arm": 1
      },
      "r": "The city stays united (+1 harmony). The question remains open: can they be happy like this?"
     },
     {
      "t": "They must be given some good, or they will leave.",
      "razon": "Nobody sustains a sacrifice for long without reward.",
      "ef": {
       "prod": 4
      },
      "r": "The guardians stay content and the city performs better (+4 production), but ‘mine’ starts to show its face again."
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
   }
  },
  {
   "id": "b_ev_tres_olas",
   "v": "b",
   "name": "The three waves",
   "loc": "Republic V, 457b-c; 472b-473c",
   "cita": "‘Three waves threaten to laugh at us and sink us: the community of men and women, that of children, and the greatest of all, that philosophers should rule. But we shall have to say whether this city can come to be, and in what way. For the one who draws the model of the best is no less good for failing to show that it can exist.’",
   "threat": "Final test: are wisdom, defence and food all met at once?",
   "req": "equilibrio",
   "si": {
    "ef": {
     "arm": 3
    },
    "msg": "The city is possible: +3 harmony."
   },
   "no": {
    "ef": {
     "arm": -1,
     "si": {
      "req": "!defensa",
      "ef": {
       "arm": -1
      }
     }
    },
    "msg": "Some function fails: −1 harmony (−2 if defence is also lacking)."
   },
   "nota": "The close of arc B: is the just city possible, or is it only a model to measure ourselves against? Plato admits that it may never be realised and that it still serves as a pattern. Simplified: −1 or −2 instead of counting each function that fails."
  }
 ],
 "clases": [
  {
   "id": "b_gobernantes",
   "name": "Rulers — σοφία (*sophía*)",
   "txt": "They are few by nature and contribute wisdom. If at least one reaches full wisdom, the city ‘sees the light’: the Philosopher-King can be played and the first function is fulfilled.",
   "cita": "‘The city is wise through the smallest of its parts, the one that rules and deliberates in it; and that knowledge which watches over the whole, and not over a single matter, we rightly call σοφία (*sophía*).’",
   "loc": "Republic IV, 428c-429a; 441e-442c",
   "nota": "Wisdom is not knowing a lot, but knowing how to govern the whole; that is why a few are enough. It is the reason, λόγος (*lógos*), of the city’s soul."
  },
  {
   "id": "b_guardianes",
   "name": "Auxiliary guardians — ἀνδρεία (*andreía*)",
   "txt": "They contribute courage: they defend the pólis and carry out what the government decides. Their courage is to preserve the right opinion about what is to be feared that education imprinted.",
   "cita": "‘Courage I call a certain preservation: that of the opinion, born of law through education, about what things, and in what way, are to be feared. To preserve it amid pains and pleasures, fears and desires, that is ἀνδρεία (*andreía*).’",
   "loc": "Republic IV, 429a-430c; II, 374e-375c",
   "nota": "Platonic courage is not recklessness but educated firmness: the spirit, θυμός (*thymós*), that obeys reason. The guardian is ‘fierce with the enemy and gentle with his own’, like a good dog (375e)."
  },
  {
   "id": "b_productores",
   "name": "Producers — σωφροσύνη (*sophrosýne*)",
   "txt": "They generate the pólis’s production and embody moderation, which here means agreement: accepting who rules. Unlike the other virtues, moderation runs through all three classes.",
   "cita": "‘Moderation is like a harmony: it is agreement about who ought to rule, running through the whole city, from top to bottom, making the weakest, the strongest and those in the middle sing in unison.’",
   "loc": "Republic IV, 430d-432b; III, 389d-e",
   "nota": "σωφροσύνη (*sophrosýne*) is not just ‘eating little’: it is self-mastery and consensus. That is why everyone carries it, not only the common people. It is appetite, ἐπιθυμία (*epithymía*), allowing itself to be ordered."
  },
  {
   "id": "b_justicia",
   "name": "Justice — δικαιοσύνη (*dikaiosýne*)",
   "txt": "It is not a class, but the relation among the three: it exists when each class does its own and only its own, and is lost through meddling. In the game it is the harmony of the city.",
   "cita": "‘Justice is doing one’s own and not meddling in many things. When the one who produces, the one who assists and the one who governs each do their own in the city, that is what is just, and that is what makes it just.’",
   "loc": "Republic IV, 433a-434c; 443c-444a",
   "nota": "Justice is not the virtue of one class, but the harmony of the whole, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*). The same holds for the soul (441d-442d): a soul is just when each part performs its function."
  }
 ],
 "tabla": [
  {
   "name": "Rulers, ἄρχοντες (*árchontes*)",
   "alma": "Reason, λόγος (*lógos*)",
   "virtud": "σοφία (*sophía*): deliberating about the good of the whole",
   "cumple": "The city ‘sees’: sound deliberation; it adds to the balance.",
   "desborda": "Tyranny of knowledge, government without consent: tension with the other classes.",
   "falta": "A blind city: the mob or force decides and everything remains opinion, δόξα (*dóxa*)."
  },
  {
   "name": "Auxiliary guardians, ἐπίκουροι (*epíkouroi*)",
   "alma": "Spirit, θυμός (*thymós*)",
   "virtud": "ἀνδρεία (*andreía*): defending and carrying out what has been decided",
   "cumple": "Fierce outside, gentle within: firm defence; it adds to the balance.",
   "desborda": "Military coup, honour above reason: timocracy (a bridge to Version A).",
   "falta": "A defenceless city: it falls to outside attack or to revolt."
  },
  {
   "name": "Producers, δημιουργοί (*demiourgoí*)",
   "alma": "Appetite, ἐπιθυμία (*epithymía*)",
   "virtud": "σωφροσύνη (*sophrosýne*), shared with the other classes: producing and agreeing on who rules",
   "cumple": "A fed and willing pólis; it adds to the balance.",
   "desborda": "Luxury, a ‘swollen’ city, rebellion over wealth: oligarchy or democracy.",
   "falta": "Hunger: the material base does not support the other two classes."
  },
  {
   "name": "Justice, δικαιοσύνη (*dikaiosýne*)",
   "alma": "The whole soul in order",
   "virtud": "Each to their own, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*)",
   "cumple": "All three classes do their part: the pólis is one, healthy and just.",
   "desborda": "Meddling: the classes swap places; injustice, ἀδικία (*adikía*).",
   "falta": "Disintegration: the city becomes ‘many’ and at war with itself."
  }
 ]
};
