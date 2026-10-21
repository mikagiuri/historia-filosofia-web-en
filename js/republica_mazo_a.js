// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/republica_mazo_a.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const REP_MAZO_A = {
 "acciones": [
  {
   "id": "censura",
   "v": "a",
   "ap": 1,
   "img": "ac-censura",
   "name": "Censorship of the poets",
   "d": "The myths young people hear are watched over: +1 wisdom for each guardian and −1 to the damage of next turn’s events.",
   "cita": "‘First we must supervise the makers of myths: accept the one they compose well and reject the one they do not.’",
   "loc": "Republic II, 377b-c; X, 607a",
   "nota": "Open debate: Plato shapes the spirit through myths; Aristotle reminds us that imitation is natural to us and that this is how we learn (Poetics 4, 1448b). Simplified: the brake works against any event, not just sophists/timocracy; without the +1 AP in democracy.",
   "ef": {
    "zsj": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 1
    }
   }
  },
  {
   "id": "limite",
   "v": "a",
   "ap": 1,
   "img": "ac-limite",
   "name": "Law against luxury",
   "d": "The accumulation of wealth is limited: +2 harmony if the city has already left aristocracy; in an aristocracy, there is nothing to hold back.",
   "cita": "‘The more they value wealth, the less they value virtue.’",
   "loc": "Republic VIII, 550d-551b",
   "nota": "It checks oligarchy by attacking its cause. Simplified: ‘in an oligarchy or sliding towards it’ = from timocracy onwards; the cancelling of oligarchy’s drip-drip is not programmed.",
   "ef": {
    "si": {
     "req": "reg>=1",
     "ef": {
      "arm": 2
     }
    }
   }
  },
  {
   "id": "sorteo",
   "v": "a",
   "ap": 1,
   "img": "../aristoteles/azar-suerte",
   "name": "Offices shared out by lot",
   "d": "Offices are shared among everyone: +2 AP, but −1 harmony and the city moves closer to democracy.",
   "cita": "‘They share out government and offices equally, and for the most part by lot.’",
   "loc": "Republic VIII, 557a",
   "nota": "An action that hastens the fall: not everything that gives energy saves the city. Simplified: without the −1 to the threshold for democracy.",
   "ef": {
    "ap": 2,
    "arm": -1
   }
  },
  {
   "id": "consejo",
   "v": "a",
   "ap": 2,
   "img": "ac-consejo",
   "name": "Council of elders",
   "d": "The most prudent watch over the constitution: +1 harmony and −1 to the damage of events for 2 turns.",
   "cita": "‘Every constitution changes because of those who hold power, when discord arises among them.’",
   "loc": "Republic VIII, 545d-e",
   "nota": "The card that ‘buys the most time’ before degeneration. Simplified: ‘+1 to the threshold of the next transition’ as a cushion against damage; without the +1 AP in democracy.",
   "ef": {
    "arm": 1,
    "dura": {
     "k": "menos",
     "n": 1,
     "turnos": 2
    }
   }
  },
  {
   "id": "zanganos",
   "v": "a",
   "ap": 1,
   "img": "ac-zanganos",
   "name": "Banishing the drone",
   "d": "The idler who lives off everyone else is expelled: +1 harmony; in an oligarchy or worse, the next coup does no damage.",
   "cita": "‘The drone with a sting stirs up the city, just as the one without a sting throws the hive into disorder.’ (paraphrase)",
   "loc": "Republic VIII, 552c-e; 564b-e",
   "nota": "The hive: the idler who stirs things up is the raw material of the demagogue. Simplified: ‘−1 to the probability of the coup’ as a one-turn shield. Paraphrase;",
   "ef": {
    "arm": 1,
    "si": {
     "req": "reg>=2",
     "ef": {
      "escudo": {
       "tags": [
        "golpe"
       ],
       "turnos": 1
      }
     }
    }
   }
  },
  {
   "id": "a_fundar_colonia",
   "v": "a",
   "ap": 2,
   "name": "Found a colony",
   "d": "Part of the people found another city and yours keeps its proper measure: this turn the ‘Shrinking city’ does not damage you.",
   "cita": "‘Let the city grow so long as it is willing to remain one, and no further.’ (paraphrase)",
   "loc": "Republic IV, 423b-c",
   "nota": "The right measure (*to métrion*): not so small that it cannot sustain itself, nor so large that it ceases to be one. Simplified: ‘+6 effective population against the threshold of 30’ as a shield against the event.",
   "ef": {
    "escudo": {
     "tags": [
      "menguada"
     ],
     "turnos": 1
    }
   }
  }
 ],
 "eventos": [
  {
   "id": "a_ev_dos_pueblos",
   "v": "a",
   "name": "The two peoples",
   "loc": "Republic VIII, 551d",
   "cita": "‘Such a city is not one but two: the city of the poor and the city of the rich, living in the same place and always plotting against each other.’",
   "threat": "In an oligarchy the city splits into rich and poor; if there are many more producers than warriors, conflict breaks out.",
   "req": "defensa",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "The city splits in two, but the warriors contain the clash: −2."
   },
   "no": {
    "ef": {
     "arm": -2,
     "kill": [
      "E",
      2
     ]
    },
    "msg": "Fighting breaks out between rich and poor: −2 and 2 producers die."
   },
   "aparece": "reg>=2",
   "nota": "Inequality is not a side-defect of oligarchy: it is its essence, and civil war its end. Simplified: ‘E > 3 × G’ as ‘!defence’ and ⌊E/10⌋ deaths as 2."
  },
  {
   "id": "a_ev_libertad_extrema",
   "v": "a",
   "name": "The freedom that turns into slavery",
   "loc": "Republic VIII, 563e-564a",
   "cita": "‘Excessive freedom seems to turn into nothing other than excessive slavery, for the individual and for the city alike.’",
   "threat": "Once the city is already a democracy, an excess of freedom pushes it towards the opposite extreme.",
   "req": "reg>=3",
   "si": {
    "ef": {
     "arm": -2
    },
    "msg": "The city, on the brink, takes a step towards tyranny: −2."
   },
   "no": {
    "ef": {
     "arm": 0
    },
    "msg": "There is still some slack: only a warning."
   },
   "aparece": "reg>=2",
   "nota": "The extreme breeds its opposite. Open debate: is it prevented by the middle way, or by institutions that limit power (Popper)? Simplified: ‘on the brink’ = already being in a democracy; without the −1 to the threshold for tyranny."
  },
  {
   "id": "a_ev_escolta_tirano",
   "v": "a",
   "name": "The tyrant asks for a bodyguard",
   "loc": "Republic VIII, 565d-566d",
   "cita": "‘The protector of the people, acclaimed as a saviour, asks for a guard to defend you; with it he stops being a protector and becomes a tyrant.’ (paraphrase)",
   "threat": "At the end of democracy, the protector of the people asks for a guard; if you have already given him one, the city falls.",
   "req": "semilla",
   "si": {
    "ef": {
     "arm": -3
    },
    "msg": "He already had his guard: the protector becomes a tyrant (−3)."
   },
   "no": {
    "ef": {
     "arm": -1
    },
    "msg": "He asks for the guard and the city hesitates: −1. You can still decide."
   },
   "aparece": "reg>=3",
   "nota": "The birth of the tyrant out of popular favour, according to Plato; it is set out, not pronounced upon. Paraphrase. Simplified: without the direct transition to tyranny (harmony decides it)."
  }
 ],
 "dialogos": [
  {
   "id": "a_sicilia",
   "emoji": "⛵",
   "quien": "An old general",
   "loc": "Republic VIII, 547e-548a",
   "situacion": "The assembly, in high spirits, votes to conquer a rich, distant island. The young dream of glory; an old general asks to speak against it.",
   "cita": "‘It will spend most of its time at war.’",
   "griego": "",
   "pregunta": "What does your city decide?",
   "opts": [
    {
     "t": "Set sail: glory belongs to those who dare.",
     "razon": "A city that does not dare does not grow.",
     "ef": {
      "arm": -2,
      "ap": 2,
      "mov": [
       "E",
       "G",
       1
      ]
     },
     "r": "The city fills with enthusiasm and soldiers (+2 AP, a producer enlists), but it stakes everything it has on a single gamble (−2 harmony)."
    },
    {
     "t": "Listen to the prudent general and do not go.",
     "razon": "You must gauge an enterprise before undertaking it.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "Your guardians know how to gauge the enterprise: the city stays put and preserves itself (+1 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Nobody knows how to defend prudence and the assembly calls you a coward (−1 harmony)."
     }
    },
    {
     "t": "Send only a small fleet, just to go through the motions.",
     "razon": "Neither all nor nothing.",
     "ef": {
      "ap": -1
     },
     "r": "Neither glory nor disaster; the city spends and gains nothing (−1 AP)."
    }
   ],
   "platon": {
    "txt": "The regime of honour ‘will spend most of its time at war’, because it values those who are good at fighting more than the wise (paraphrase).",
    "loc": "Republic VIII, 547e-548a"
   },
   "critica": {
    "autor": "Thucydides",
    "txt": "He attributes the disaster more to internal divisions and errors of command than to the desire for glory itself (paraphrase).",
    "loc": "History of the Peloponnesian War II 65, 11"
   },
   "glo": [
    "g-timocracia",
    "g-alma-irascible"
   ],
   "fase": 1,
   "nota": "*Thymós* without measure (*philonikía*, love of victory). Historically, it was democratic Athens that voted for it: is an excess of honour typical of one regime or of any?"
  },
  {
   "id": "a_leon",
   "emoji": "⚖️",
   "quien": "The Thirty",
   "loc": "Apology 32c-d",
   "situacion": "The Thirty, who rule the city, order several citizens to arrest Leon of Salamis, an innocent man, so that they can seize his property. They want everyone to have dirty hands.",
   "cita": "‘That government, powerful as it was, did not frighten me into doing anything unjust.’",
   "griego": "",
   "pregunta": "What do your guardians do?",
   "opts": [
    {
     "t": "Obey: orders are orders.",
     "razon": "Whoever commands answers for what they command.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "Leon dies and his property fills the coffers (+2 AP). The city learns that nobody is safe (−2 harmony)."
    },
    {
     "t": "Go home, as one of them did.",
     "razon": "Some orders are not to be obeyed.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Your guardians refuse without fuss; the Thirty take note (+1 harmony, −1 AP because of the surveillance they suffer)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Only one refuses; the rest obey (−1 harmony)."
     }
    },
    {
     "t": "Denounce the order in the agora.",
     "razon": "Injustice kept quiet is repeated.",
     "ef": {
      "arm": 2,
      "ap": -2,
      "zsj": -1
     },
     "r": "The city wakes up (+2 harmony), but the Thirty persecute those who spoke out (−2 AP) and your guardians live in fear (−1 wisdom each)."
    }
   ],
   "platon": {
    "txt": "‘That government, powerful as it was, did not frighten me into doing anything unjust. When we came out, the other four went to Salamis and brought back Leon, and I went home.’ (Socrates in his defence.) In the Seventh Letter, Plato recounts his disappointment with the Thirty (paraphrase; authenticity disputed).",
    "loc": "Apology 32c-d; Seventh Letter 324d-325a"
   },
   "critica": {
    "autor": "Critias",
    "txt": "Plato’s uncle and head of the Thirty, he presented his government as a remedy for the excesses of democracy (paraphrase of the tradition).",
    "loc": "Xenophon, Hellenica II 3, 24-34"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 2,
   "nota": "The real oligarchy that Plato saw at close quarters; Socrates’ disobedience as the limit of obedience. (Apology); Seventh Letter as paraphrase (authenticity disputed)."
  },
  {
   "id": "a_deudas",
   "emoji": "🪙",
   "quien": "The indebted farmers",
   "loc": "Republic VIII, 555c-556a",
   "situacion": "The farmers, drowning in debt, ask for it to be forgiven. The creditors are the ones who govern.",
   "cita": "‘Cancel the debts and redistribute the land.’",
   "griego": "χρεῶν ἀποκοπὰς καὶ γῆς ἀναδασμόν (*khreôn apokopàs kaì gês anadasmón*): ‘cancellation of debts and redistribution of land’.",
   "pregunta": "What does your city do?",
   "opts": [
    {
     "t": "Collect every last obol.",
     "razon": "What was agreed must be honoured.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "The coffers fill (+1 AP); the indebted become drones with nothing to lose (−2 harmony)."
    },
    {
     "t": "Forgive part of the debt by law, like Solon.",
     "razon": "A law that meets halfway avoids a rupture.",
     "ef": {
      "arm": 1,
      "ap": -1
     },
     "r": "Neither rich nor poor are entirely satisfied (+1 harmony, −1 AP)."
    },
    {
     "t": "Let a protector of the people promise to wipe out all debts.",
     "razon": "The people must be given what they ask for.",
     "ef": {
      "arm": 2,
      "escolta": true
     },
     "r": "The people acclaim him (+2 harmony). Plato would say this is how the tyrant begins."
    }
   ],
   "platon": {
    "txt": "Those who govern in the oligarchy, by lending money, ‘multiply drones and beggars in the city’ (paraphrase); and the would-be tyrant wins over the people by promising to ‘cancel the debts and redistribute the land’.",
    "loc": "Republic VIII, 555e and 565e-566a"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "He counts Solon’s *seisákhtheia* (‘the shaking-off of burdens’) as a remedy that averted tyranny rather than bringing it about (paraphrase).",
    "loc": "Constitution of the Athenians 6 and 11-12"
   },
   "glo": [
    "g-alma-concupiscible"
   ],
   "fase": 2,
   "nota": "The same measure, read as reform or as demagoguery: open debate about debt and power. Phase: oligarchy → democracy."
  },
  {
   "id": "a_stasis",
   "emoji": "🔥",
   "quien": "The two sides",
   "loc": "Republic VIII, 556e-557a",
   "situacion": "Rich and poor are killing each other in the streets; each side calls in allies from abroad. Both demand that your guardians choose.",
   "cita": "‘Democracy comes about, I think, when the poor win.’",
   "griego": "στάσις (*stásis*): ‘discord, civil war’.",
   "pregunta": "Whose side is your city on?",
   "opts": [
    {
     "t": "With the rich: order must be preserved.",
     "razon": "Without order there is no city.",
     "req": "ejercito",
     "si": {
      "ef": {
       "arm": -1,
       "ap": 1
      },
      "r": "Your army crushes the revolt (+1 AP), but the wound stays open (−1 harmony)."
     },
     "no": {
      "ef": {
       "arm": -3
      },
      "r": "The rich lose; the victors show no mercy (−3 harmony)."
     }
    },
    {
     "t": "With the poor: they are the majority.",
     "razon": "The city belongs to those who are most numerous.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "The poor win and share out the offices (+2 AP). The city goes down a rung towards freedom (−2 harmony)."
    },
    {
     "t": "Mediate between the two sides.",
     "razon": "A divided city is not a city.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 2
      },
      "r": "Your guardians secure a truce (+2 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "zsj": -1
      },
      "r": "Both sides accuse you of treachery (−1 harmony and −1 wisdom each)."
     }
    }
   ],
   "platon": {
    "txt": "‘Democracy comes about, I think, when the poor win: they kill some of the others, banish others, and with those who remain they share out government and offices equally.’",
    "loc": "Republic VIII, 556e-557a"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "Civil wars arise from opposing ideas of equality: some think they should be equal in everything because they are equal in something, others unequal in everything because they are unequal in something (paraphrase).",
    "loc": "Politics V 1, 1301a25-b4"
   },
   "glo": [
    "g-la-ciudad-justa"
   ],
   "fase": 2,
   "nota": "*Stásis* as the engine of regime change; for Plato, discord is always the beginning of the fall. Phase: oligarchy → democracy."
  },
  {
   "id": "a_arginusas",
   "emoji": "🌊",
   "quien": "The assembly",
   "loc": "Apology 32b-c",
   "situacion": "The city has won a naval battle, but a storm prevented the rescue of the shipwrecked. The assembly, furious, wants to condemn all the generals in a single vote. The law forbids it.",
   "cita": "‘I thought I had to run the risk with the law and with what is just.’",
   "griego": "",
   "pregunta": "What does the person presiding over the assembly do?",
   "opts": [
    {
     "t": "Hold the vote: the people are sovereign.",
     "razon": "What the assembly decides is law.",
     "ef": {
      "arm": -2,
      "ap": 2
     },
     "r": "The assembly feels strong (+2 AP). The generals are executed and the following year the city regrets it (−2 harmony)."
    },
    {
     "t": "Refuse to put an illegal measure to the vote.",
     "razon": "Not even the people stand above the law.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "Your guardians uphold the law even though they are called traitors (+1 harmony, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "Only one refuses and is pushed aside (−1 harmony)."
     }
    },
    {
     "t": "Propose separate trials.",
     "razon": "Each one deserves their own trial.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "You calm the assembly… for a day (+1 harmony)."
     },
     "no": {
      "ef": {
       "ap": -1
      },
      "r": "Nobody listens to you (−1 AP)."
     }
    }
   ],
   "platon": {
    "txt": "‘I was the only one of the prytaneis who opposed your doing anything against the laws, and I voted against; and although the orators were ready to denounce me and have me arrested, I thought I had to run the risk with the law and with what is just.’",
    "loc": "Apology 32b-c; cf. Republic VIII, 557b and 562d"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "Many people, gathered together, can judge better than a few experts, just as a banquet paid for by everyone is better than one provided by a single person (paraphrase). Was the error of Arginusae the fault of democracy, or of ignoring its own laws?",
    "loc": "Politics III 11, 1281a42-b10"
   },
   "glo": [
    "g-justicia"
   ],
   "fase": 3,
   "nota": "The assembly above the law; beware of reading this as a plain condemnation of democracy: the objection opens the debate. (Apology)."
  },
  {
   "id": "a_demagogo",
   "emoji": "📣",
   "quien": "An orator",
   "loc": "Republic VIII, 565c-d",
   "situacion": "The city is going hungry. An orator promises cheap grain for all if you give him command; there is no grain to keep the promise.",
   "cita": "‘From that root, and from no other, the tyrant sprouts.’",
   "griego": "προστάτης (*prostátes*): ‘protector, the one who stands at the front’.",
   "pregunta": "What does the assembly do?",
   "opts": [
    {
     "t": "Give him command: he promises what we need.",
     "razon": "When you are hungry, you do not wait.",
     "ef": {
      "arm": 1,
      "ap": 2,
      "escolta": true
     },
     "r": "They acclaim you (+1 harmony, +2 AP). When the grain fails to arrive, he will look for an external enemy so that the hunger is forgotten."
    },
    {
     "t": "Listen to the one who tells the truth: we will have to tighten our belts.",
     "razon": "An impossible promise is a lie.",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "The city accepts the sacrifice because it understands the reason why (+1 harmony, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Nobody knows how to explain it and hunger turns to rage (−2 harmony)."
     }
    },
    {
     "t": "Share out what there is at a fair price.",
     "razon": "The little there is, shared out, is enough for everyone.",
     "ef": {
      "ap": -2
     },
     "r": "Nobody gets rich and nobody starves (−2 AP)."
    }
   ],
   "platon": {
    "txt": "The people tend to ‘set one man at the front as their protector, and feed him and make him great’; and ‘from that root, and from no other, the tyrant sprouts’. Afterwards, so that the people need a leader, ‘he is always stirring up some war’.",
    "loc": "Republic VIII, 565c-d and 566e-567a"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "He proposes replacing ‘who should rule?’ with ‘how can we stop bad rulers from doing too much harm?’ (paraphrase).",
    "loc": "The Open Society and Its Enemies, I, ch. 7 (1945)"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "The passage from democracy to tyranny according to Plato; the game sets it out and leaves open the question of remedies."
  },
  {
   "id": "a_golpe",
   "emoji": "🏯",
   "quien": "The protector of the people",
   "loc": "Republic VIII, 565d-566b",
   "situacion": "The protector of the people returns wounded and says his enemies attacked him. He asks for a personal guard; his supporters also offer to seize the Acropolis tonight.",
   "cita": "‘The famous request of tyrants.’",
   "griego": "",
   "pregunta": "What does your city do?",
   "opts": [
    {
     "t": "Give him the guard: he must be protected.",
     "razon": "If something happens to him, who will defend the people?",
     "req": "semilla",
     "si": {
      "ef": {
       "arm": -3
      },
      "r": "He had already prepared the way: the city wakes up with a master (−3 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "escolta": true
      },
      "r": "He receives a small guard. It is the first step (−1 harmony)."
     }
    },
    {
     "t": "Refuse it and warn the Council.",
     "razon": "Whoever asks for arms against their fellow citizens has already chosen.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 2,
       "ap": -1
      },
      "r": "The coup is defused (+2 harmony, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -2
      },
      "r": "Nobody dares to refuse (−2 harmony)."
     }
    },
    {
     "t": "Address what his supporters ask for, but through laws.",
     "razon": "They must have some reason if there are so many of them.",
     "ef": {
      "arm": 1,
      "ap": -2
     },
     "r": "Some are satisfied and others call you soft (+1 harmony, −2 AP)."
    }
   ],
   "platon": {
    "txt": "When the protector finds himself in danger, he asks the people for a personal guard, ‘the famous request of tyrants’, and the people give it to him, fearing for him and confident in themselves.",
    "loc": "Republic VIII, 565d-566b (the historical example is Peisistratus; Herodotus I 59)"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "Peisistratus’ rule was moderate and popular, ‘more that of a citizen than of a tyrant’, and many remembered it as a golden age (paraphrase).",
    "loc": "Constitution of the Athenians 16"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 3,
   "nota": "How a tyrant is born out of popular favour; the objection prevents us from reducing the problem to ‘bad’ and ‘good’ people. Phase: democracy → tyranny."
  },
  {
   "id": "a_conjura",
   "emoji": "🗡️",
   "quien": "The tyrant",
   "loc": "Republic VIII, 567b-c",
   "situacion": "The city has been in the hands of a tyrant for years. There is a rumour of a conspiracy to kill him at the next procession.",
   "cita": "‘A purge the opposite of the doctors’.’",
   "griego": "",
   "pregunta": "What does the tyrant do?",
   "opts": [
    {
     "t": "More guards and pre-emptive executions.",
     "razon": "Better to prevent than to fall.",
     "ef": {
      "arm": -2,
      "ap": 1,
      "zsj": -1
     },
     "r": "He survives (+1 AP), but eliminates the best (−2 harmony and −1 wisdom for each guardian)."
    },
    {
     "t": "Restore the laws and step down.",
     "razon": "Power that is sustained only by fear is not worth having.",
     "ef": {
      "arm": 3,
      "ap": -3
     },
     "r": "Few tyrants have done so. The city breathes again (+3 harmony) and starts from scratch (−3 AP)."
    },
    {
     "t": "Pay no attention: nobody will dare.",
     "razon": "Whoever fears everyone has already lost.",
     "req": "defensa",
     "si": {
      "ef": {
       "arm": -1
      },
      "r": "Nothing happens this time… for now (−1 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "kill": [
        "Z",
        1
       ]
      },
      "r": "The conspiracy half succeeds: one of your guardians falls (−1 harmony)."
     }
    }
   ],
   "platon": {
    "txt": "The tyrant must rid himself of everyone who is worth anything, ‘a purge the opposite of the doctors: they remove the worst and leave the best, and he does the reverse’. And he lives ‘shut in as if in a prison’, the only one in the city who cannot travel abroad or see what others see.",
    "loc": "Republic VIII, 567b-c; IX, 579b-c"
   },
   "critica": {
    "autor": "Thucydides",
    "txt": "Athens raised a statue to the tyrannicides Harmodius and Aristogeiton; Thucydides corrects the legend: they killed the tyrant’s brother, and over a private grievance, not for the sake of freedom (paraphrase).",
    "loc": "History of the Peloponnesian War VI 54-59"
   },
   "glo": [
    "g-tirania"
   ],
   "fase": 4,
   "nota": "The tyrant’s soul in action: whoever can do the most is the most imprisoned. Simplified: a guardian’s death ‘with probability 0.4’ now depends on ‘defence’. (Rep. VIII-IX)."
  },
  {
   "id": "a_siracusa",
   "emoji": "🏛️",
   "quien": "A tyrant of Sicily",
   "loc": "Seventh Letter 328b-c",
   "situacion": "A tyrant from another city invites your best guardians to his court: he wants them to turn him into a philosopher-ruler.",
   "cita": "‘Merely a man of words, who never dares to lay a hand to any deed.’ (paraphrase)",
   "griego": "",
   "pregunta": "Do you let them go?",
   "opts": [
    {
     "t": "Let them go and try to truly educate him.",
     "razon": "If the philosopher does not act, what is he for?",
     "req": "sabios",
     "si": {
      "ef": {
       "arm": 1,
       "ap": -1
      },
      "r": "The tyrant moderates one law. It is little, but it is not nothing (+1 harmony, −1 AP)."
     },
     "no": {
      "ef": {
       "arm": -1,
       "ap": -2
      },
      "r": "He tires of them and sells them as slaves; you pay the ransom (−1 harmony, −2 AP)."
     }
    },
    {
     "t": "Let them go for influence and money.",
     "razon": "A powerful friend always helps.",
     "ef": {
      "ap": 2,
      "zsj": -1
     },
     "r": "They return rich and less wise (+2 AP, −1 wisdom each)."
    },
    {
     "t": "Do not let them go: you do not strike deals with a tyrant.",
     "razon": "You cannot educate someone who does not want to learn.",
     "ef": {},
     "r": "Syracuse stays the same, and so does your city."
    }
   ],
   "platon": {
    "txt": "He went to Syracuse mainly out of shame before himself, so as not to seem ‘merely a man of words, who never dares to lay a hand to any deed’ (paraphrase; authenticity disputed).",
    "loc": "Seventh Letter 328b-c; cf. Republic V, 473c-d"
   },
   "critica": {
    "autor": "Karl Popper",
    "txt": "He reads these journeys as proof that Plato was looking for a docile tyrant; other readers take them as proof that philosophy cannot govern someone who does not want to learn (paraphrase).",
    "loc": "The Open Society and Its Enemies, I (1945)"
   },
   "glo": [
    "g-sabiduria",
    "g-tirania"
   ],
   "fase": 4,
   "nota": "The philosopher-king proposal put to the test of history; a bridge to the myth of Er. Seventh Letter as paraphrase (authenticity disputed)."
  },
  {
   "id": "a_amnistia",
   "emoji": "🕊️",
   "quien": "Those who suffered",
   "loc": "Seventh Letter 325b-c",
   "situacion": "The government that persecuted so many has fallen. Its collaborators are still in the city. Those who suffered demand punishment.",
   "cita": "‘Those who returned then showed great moderation.’ (paraphrase)",
   "griego": "ἀμνηστία (*amnestía*): ‘forgetting’ of past wrongs.",
   "pregunta": "What does the city do?",
   "opts": [
    {
     "t": "Revenge: let them all pay.",
     "razon": "Without punishment there is no justice.",
     "ef": {
      "arm": -2,
      "ap": 1
     },
     "r": "Their property is confiscated (+1 AP); the city splits again (−2 harmony)."
    },
    {
     "t": "General amnesty: remembering past wrongs is forbidden.",
     "razon": "The city needs to become one again.",
     "ef": {
      "arm": 2,
      "ap": -1
     },
     "r": "The city breathes again (+2 harmony), although many of the guilty go unpunished (−1 AP)."
    },
    {
     "t": "Put on trial only those who killed with their own hands.",
     "razon": "Neither revenge nor oblivion: justice.",
     "req": "justos",
     "si": {
      "ef": {
       "arm": 1
      },
      "r": "A difficult justice, but justice (+1 harmony)."
     },
     "no": {
      "ef": {
       "arm": -1
      },
      "r": "The trials turn into settling of scores (−1 harmony)."
     }
    }
   ],
   "platon": {
    "txt": "After the fall of the Thirty, ‘those who returned then showed great moderation’ (paraphrase; authenticity disputed); although it was that same restored democracy that tried Socrates.",
    "loc": "Seventh Letter 325b-c; cf. Republic VIII, 545d"
   },
   "critica": {
    "autor": "Aristotle",
    "txt": "He praises this reconciliation as the noblest and most statesmanlike he knows of (paraphrase).",
    "loc": "Constitution of the Athenians 40, 2-3"
   },
   "glo": [
    "g-justicia",
    "g-la-ciudad-justa"
   ],
   "fase": 1,
   "nota": "The only card in the bank that slows the fall from below: the city does not move up a regime (546a), but the recovered harmony delays the next descent. It comes up after a descent of regime (phase 1 or worse). Seventh Letter as paraphrase (authenticity disputed)."
  }
 ],
 "almas": [
  {
   "id": "alma_razon",
   "name": "The aristocratic soul (reason rules)",
   "lema": "Each part does its own work within the soul too.",
   "txt": "Reason (*logistikón*) commands, spirit (*thymós*) defends it and appetite (*epithymía*) obeys. Justice is not only political: it is the inner order of the three parts of the soul.",
   "loc": "Republic IV, 441c-442d; IX, 580d-581a"
  },
  {
   "id": "alma_thymos",
   "name": "The timocratic soul (spirit rules)",
   "lema": "It loves honour and power more than knowledge.",
   "txt": "The timocratic man hands over command within himself to the spirited, victory-loving element. *Thymós* is the irascible or spirited part; its excess is ambition (*philotimía*).",
   "loc": "Republic VIII, 548d-550b"
  },
  {
   "id": "alma_epithymia_nec",
   "name": "The oligarchic soul (necessary appetite rules)",
   "lema": "It saves, fears spending and leaves unsatisfied every desire that brings no profit.",
   "txt": "The oligarchic man puts the appetitive, money-loving element on the throne. *Epithymía* is the appetitive part; here its ‘necessary’ form, that of money, dominates.",
   "loc": "Republic VIII, 553a-554e"
  },
  {
   "id": "alma_epithymia_libre",
   "name": "The democratic soul (equal appetites rule)",
   "lema": "It calls shamelessness courage, and anarchy freedom.",
   "txt": "It lives by surrendering each day to whatever desire comes its way: today it drinks and listens to music, tomorrow it fasts, the day after it takes up politics. With no part in command, there is no order within or without: freedom without measure puts the necessary and the superfluous on a par.",
   "loc": "Republic VIII, 561a-561e"
  },
  {
   "id": "alma_eros_tirano",
   "name": "The tyrannical soul (the desire with a sting rules: Eros)",
   "lema": "The one who can do everything outside is the greatest slave within.",
   "txt": "In the tyrant’s soul one ruling desire governs the rest like a sting; he is truly a slave even though he commands, full of fear, friendless, unable to do what he wants: the most wretched of men. Plato’s argument is set out here, not a judgement on any real regime.",
   "loc": "Republic IX, 571a-580a"
  }
 ],
 "tabla": [
  {
   "name": "Aristocracy",
   "alma": "reason (*logistikón*)",
   "causa": "discord among those who rule",
   "cita": "‘For each to do their own… is justice.’",
   "loc": "Republic IV, 433a"
  },
  {
   "name": "Timocracy",
   "alma": "spirit (*thymós*)",
   "causa": "the love of money displaces honour",
   "cita": "‘Every constitution changes… when discord arises.’",
   "loc": "Republic VIII, 545d"
  },
  {
   "name": "Oligarchy",
   "alma": "necessary appetite (money)",
   "causa": "the poor defeat the rich; the city splits",
   "cita": "‘The more they value wealth, the less they value virtue.’",
   "loc": "Republic VIII, 550e"
  },
  {
   "name": "Democracy",
   "alma": "equal appetites (freedom)",
   "causa": "an excess of freedom calls for a protector",
   "cita": "‘Everyone can do whatever they like.’",
   "loc": "Republic VIII, 557b"
  },
  {
   "name": "Tyranny",
   "alma": "king-desire (Eros)",
   "causa": "bottom of the ladder: collapse",
   "cita": "‘Excessive freedom… into excessive slavery.’",
   "loc": "Republic VIII, 564a"
  }
 ]
};
