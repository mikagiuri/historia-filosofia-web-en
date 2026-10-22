// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/laboratorio_induccion.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const IND = {
 "t": {
  "inLede": "Many good arguments are not deductive: their premises can be true and their conclusion false. That does not make them bad; they are stronger or weaker. Here you will learn to recognise four ways of reasoning without certainty and what makes them stronger or weaker.",
  "inTiposTit": "Four ways of reasoning without certainty",
  "inHumeTit": "Hume’s problem",
  "inHume": "David Hume asked what entitles us to pass from «the sun has risen every day» to «the sun will rise tomorrow». It is not a deduction: its not rising would not be a contradiction. Nor is it acceptable to rely on experience («induction has always worked»), because that is already an induction: the argument goes round in a circle (Enquiry Concerning Human Understanding, 1748, section IV, part 2; already in A Treatise of Human Nature, 1739, book I, part III, section 6). His «sceptical solution» is that we expect the same by custom, not by reason: custom is «the great guide of human life» (Enquiry, section V, part 1). The question remains open: there are answers, but none convinces everyone.",
  "inPeirceTit": "Peirce’s abduction",
  "inPeirce": "Charles S. Peirce called abduction the inference that proposes a hypothesis to explain a surprising fact: «The surprising fact, C, is observed; but if A were true, C would be a matter of course; hence there is reason to suspect that A is true» (Collected Papers 5.189, from his 1903 lectures). For Peirce, abduction is above all proposing a hypothesis that deserves to be tested. It has the form of affirming the consequent, so it is not deductively valid. It is usually linked with «inference to the best explanation», a name coined by Gilbert Harman in 1965, which chooses the best among the possible explanations; but they are not the same: Peirce focuses on proposing the hypothesis and Harman on choosing it.",
  "inCasosTit": "Twenty cases",
  "inCasosAyuda": "Read the case, say which way of reasoning it is and then think about what would make it stronger or weaker.",
  "inCaso": "Case {n} of {t}",
  "inQueTipo": "Which way of reasoning is it?",
  "inBien": "Right: it is {x}.",
  "inMal": "No: it is {x}.",
  "inPregunta": "Something to think about:",
  "inVer": "See the answer",
  "inRespuesta": "Answer:",
  "inVecina": "The neighbouring fallacy:",
  "inAnterior": "Previous",
  "inSiguiente": "Next",
  "inAciertos": "Correct: {a} of {n}",
  "inLimiteTit": "How far it goes",
  "inLimite": "None of these forms is deductively valid, in the sense of level 1: it is always possible for the premises to be true and the conclusion false. What can be measured is their strength, and for that you need something more than logic: data, probability and knowledge of the subject. Science lives on these kinds of reasoning, but puts them to the test by looking for the case that refutes them."
 },
 "tipos": [
  {
   "tipo": "gen",
   "nom": "Generalisation",
   "frase": "a generalisation",
   "dice": "From what has been observed in some cases we pass to all, to most, or to the next case.",
   "fuerte": "It is stronger the more cases there are, the more varied they are and the better they represent the whole; and weaker if there is even one case against it."
  },
  {
   "tipo": "ana",
   "nom": "Analogy",
   "frase": "an analogy",
   "dice": "Two things are alike in many respects; one of them has a further property; so the other probably has it too.",
   "fuerte": "It is stronger if the similarities are relevant to the property in the conclusion, and weaker if there are differences that are relevant."
  },
  {
   "tipo": "cau",
   "nom": "Causal inference",
   "frase": "a causal inference",
   "dice": "Two things go together (or one comes after the other); so one is the cause of the other.",
   "fuerte": "It is stronger if other causes, chance and a common cause are ruled out, and better still with an experiment that changes only one thing."
  },
  {
   "tipo": "exp",
   "nom": "Inference to the best explanation",
   "frase": "an inference to the best explanation",
   "dice": "Faced with a fact, we choose the hypothesis that best explains it. It is usually linked with Peirce's abduction, which is above all proposing a hypothesis that deserves to be tested.",
   "fuerte": "It is stronger if the hypothesis explains more things, is simpler, fits with what we already know and its rivals have been ruled out."
  }
 ],
 "casos": [
  {
   "tipo": "gen",
   "txt": "My two neighbours from Burgos are very serious. People from Burgos are serious.",
   "q": "What would make it stronger?",
   "r": "Many more cases, from different places and ages; two are not enough to talk about a whole city.",
   "vecina": "Hasty generalisation (and stereotype)."
  },
  {
   "tipo": "cau",
   "txt": "Since I started wearing this bracelet, my back has hurt less. The bracelet is curing me.",
   "q": "What other explanations are there?",
   "r": "The pain was going to get better anyway, the placebo effect, or something else that changed at the same time. You would need to compare it with a group without the bracelet, without anyone knowing who is wearing it.",
   "vecina": "Post hoc, ergo propter hoc (‘after this, therefore because of this’)."
  },
  {
   "tipo": "ana",
   "txt": "My older sister passed with this teacher by studying a week before; I will pass that way too.",
   "q": "What weakens it?",
   "r": "The differences that matter: the school year, the syllabus, this year’s exam and how each of them studies.",
   "vecina": "False analogy."
  },
  {
   "tipo": "exp",
   "txt": "I get home, the door has been forced, the computer and the jewellery are missing, and there is mud on the rug. There has been a burglary.",
   "q": "Why is it the best explanation?",
   "r": "Because it explains all the facts at once with a single simple hypothesis. Others (a moment of carelessness, a prank) explain less.",
   "vecina": "Affirming the consequent, if it is taken as conclusive proof."
  },
  {
   "tipo": "cau",
   "txt": "In villages with more storks, more babies are born. Storks bring babies.",
   "q": "What explains the correlation?",
   "r": "A common cause: in the countryside there are more storks and, at some times and in some places, more births. Correlation is not causation.",
   "vecina": "Confusing correlation with causation (common cause)."
  },
  {
   "tipo": "gen",
   "txt": "2,000 people chosen at random across the country were asked, and 62% prefer the train to the plane for journeys of under 600 km. So most of the population prefers it.",
   "q": "What would weaken it?",
   "r": "The sample not being random: for example, if people had only been asked at railway stations.",
   "vecina": "Biased sample."
  },
  {
   "tipo": "exp",
   "txt": "The lights come on by themselves at night in the old house. There are ghosts.",
   "q": "Why is it a bad explanation?",
   "r": "Because there are simpler explanations that fit with what we already know and can be checked (a timer, an electrical fault). A hypothesis that cannot be put to the test explains very little.",
   "vecina": "Appeal to ignorance: ‘I don’t know what it is, so it is a ghost’."
  },
  {
   "tipo": "ana",
   "txt": "The Earth and Mars orbit the Sun and have seasons, an atmosphere and frozen water. The Earth has life; so Mars probably does too.",
   "q": "What weakens it?",
   "r": "Differences that bear on life: Mars has a very thin atmosphere, has no liquid water on the surface and receives a lot of radiation.",
   "vecina": "False analogy."
  },
  {
   "tipo": "gen",
   "txt": "I have tossed the coin five times and it has come up heads all five. If the coin is not rigged, it must now come up tails.",
   "q": "Why is it bad reasoning?",
   "r": "If the coin is not rigged, the tosses are independent: the coin does not remember what has come up and the probability of tails is still one half. And if five heads in a row arouse suspicion, it is about the coin: if it were rigged, what we would expect is another head, not tails.",
   "vecina": "Gambler’s fallacy."
  },
  {
   "tipo": "cau",
   "txt": "Students who eat a good breakfast get better marks. Eating a good breakfast improves your marks.",
   "q": "What would have to be ruled out?",
   "r": "Both things depending on a third (routines, the atmosphere at home, hours of sleep). An experiment that changed only breakfast would settle it.",
   "vecina": "Common cause."
  },
  {
   "tipo": "exp",
   "txt": "The orbit of Uranus did not follow Newton’s laws exactly. Le Verrier supposed that another planet was pulling on it, calculated where it would be, and in 1846 Neptune was found.",
   "q": "What made this hypothesis strong?",
   "r": "It predicted something new that could be checked: where to look. A good explanation does not just fit what is already known: it takes a risk.",
   "vecina": "None: it is the model of successful abduction."
  },
  {
   "tipo": "ana",
   "txt": "This medicine worked in mice with the same disease; it will probably work in people.",
   "q": "What would make it stronger?",
   "r": "The mechanism of the disease being the same in mice and in people and, above all, trials in people. Many drugs that work in mice later fail.",
   "vecina": "False analogy."
  },
  {
   "tipo": "cau",
   "txt": "The more firefighters go to a fire, the more damage there is. Firefighters cause the damage.",
   "q": "What lies behind the correlation?",
   "r": "A common cause: a big fire causes both more damage and more firefighters attending. The firefighters do not cause the damage; both facts depend on the size of the fire.",
   "vecina": "Confusing correlation with causation (common cause)."
  },
  {
   "tipo": "gen",
   "txt": "The medicine brought down the fever in 85% of the 3,000 patients in the trial. It will probably bring down yours.",
   "q": "What would weaken it?",
   "r": "You belonging to a group that was not in the trial (because of age or another illness), or the trial having no control group.",
   "vecina": "Accident (secundum quid): applying to a special case what holds in general."
  },
  {
   "tipo": "ana",
   "txt": "A state is like a ship: you need a captain who knows how to navigate, and nobody votes on who takes the helm. So the state should be governed by those who know (Plato, Republic VI).",
   "q": "Where can it go wrong?",
   "r": "In that the ship’s destination is set by the passengers, not by the captain: in politics we argue about where to go, not only how. It is an open debate about democracy.",
   "vecina": "False analogy (according to its critics)."
  },
  {
   "tipo": "exp",
   "txt": "The patient has a fever and a cough and has lost their sense of smell; there is a flu epidemic in the city. It is flu.",
   "q": "What would weaken it?",
   "r": "Another illness explaining the symptoms better (loss of smell also points to other viruses). That is why tests are done to rule out the rivals.",
   "vecina": "Jumping to conclusions: not ruling out rival hypotheses."
  },
  {
   "tipo": "gen",
   "txt": "All the swans that had been seen in Europe for centuries were white. So all swans are white.",
   "q": "What happened to this generalisation?",
   "r": "In 1697 black swans were seen in Australia: a single case against it is enough to refute an ‘all’, however many cases there are in its favour.",
   "vecina": "None: centuries of observation are not a hasty generalisation. It is the limit of all induction: no number of favourable cases guarantees an «all» (Hume), and a single case against is enough to refute it (Popper)."
  },
  {
   "tipo": "exp",
   "txt": "Mercury’s orbit did not follow Newton either. Le Verrier supposed another planet, Vulcan, closer to the Sun. It was never found.",
   "q": "What does it teach us, compared with the Neptune case?",
   "r": "That the same way of reasoning can fail. The right explanation turned out to be a different one: Einstein’s general relativity (1915) explained the orbit without any new planet.",
   "vecina": "None at the time of proposing it: supposing Vulcan was as reasonable as supposing Neptune. It would have been an ad hoc hypothesis to keep Vulcan after failing to find it, inventing excuses only to save the theory."
  },
  {
   "tipo": "cau",
   "txt": "Semmelweis observed in Vienna (1847) that on the ward run by doctors, who came straight from performing autopsies, far more women died after childbirth than on the midwives’ ward. He ordered hand-washing with chlorinated lime, and the death rate fell.",
   "q": "Why is it a strong causal inference?",
   "r": "Because he changed just one thing (hand-washing) and the effect appeared; he also ruled out other explanations one by one. Even so, his colleagues took years to accept it.",
   "vecina": "None: it is a good example of method."
  },
  {
   "tipo": "ana",
   "txt": "A watch has parts fitted to a purpose, and a watchmaker made it. The eye has parts fitted to a purpose; therefore a designer made it (William Paley, Natural Theology, 1802).",
   "q": "What objections have been raised to it?",
   "r": "Before Paley, Hume (Dialogues Concerning Natural Religion, 1779) had already objected to the argument from design in the version defended by the character Cleanthes: the world is little like a machine and the analogy says nothing about the designer. Later, Darwin (1859) offered another explanation of the fit. It is an open debate in the philosophy of religion, not a question settled by logic.",
   "vecina": "False analogy (according to its critics)."
  }
 ]
};
