// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/logica_ejercicios.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const LOGX = {
 "t": {
  "puentesEjTit": "Exercise: the same law in the five languages",
  "puentesEjIntro": "Each law is given in one of the five languages. Write it in the other four and then open the answer. To check it, run it through the truth table (Truth tables) or do the sums with 0 and 1. One of the ten is a trap.",
  "puentesDada": "Given in ‘{l}’:",
  "puentesVer": "See the law in the five languages",
  "silEjTit": "Exercise: from the syllogism to the Venn diagram, step by step",
  "silEjIntro": "For each syllogism: which regions each premise shades (universal ones first), where the ✕ goes and whether the conclusion is already drawn. Do it on paper or in the diagram above and then look at the answer. One of them is a case where Euler misleads and Venn does not.",
  "silCargar": "See it in the diagram",
  "silSol": "Step-by-step answer",
  "silMayor": "Major premise:",
  "silMenor": "Minor premise:",
  "silCruz": "The ✕:",
  "silConcl": "The conclusion:",
  "silEuler": "Euler and Venn:",
  "silValido": "Valid",
  "silNoValido": "Not valid",
  "silTrad": "Valid only if what the middle term names exists",
  "nomTit": "Informal fallacies: the Corner’s list",
  "nomIntro": "The traps that lie not in the form of the reasoning but in its content: what is said, about whom and what for. Each name takes you to its dictionary entry, which is where it is defined; here you will find other names, an example and how to counter it.",
  "nomOtros": "Other names:",
  "nomEj": "Example:",
  "nomParar": "How to counter it:",
  "qfTit": "Exercise: which fallacy is it?",
  "qfIntro": "Twenty cases. In three of them there is no fallacy at all: you also have to be able to recognise a good argument.",
  "qfNo": "It's not a fallacy",
  "qfBien": "Correct.",
  "qfMal": "No: it is ‘{x}’.",
  "qfCuenta": "Correct: {a} of {n}"
 },
 "lenguajes": [
  "Statements",
  "Sets",
  "Boolean algebra",
  "Ordinary numbers (with 0 and 1)",
  "Gates"
 ],
 "puentes": [
  {
   "ley": "Double negation",
   "dada": 0,
   "v": [
    "¬¬p ↔ p",
    "(Aᶜ)ᶜ = A",
    "x″ = x",
    "1 − (1 − x) = x",
    "NOT of NOT = the plain wire"
   ]
  },
  {
   "ley": "Commutativity of conjunction",
   "dada": 1,
   "v": [
    "p ∧ q ↔ q ∧ p",
    "A ∩ B = B ∩ A",
    "x · y = y · x",
    "x · y = y · x",
    "AND with its inputs swapped = the same AND"
   ]
  },
  {
   "ley": "Idempotence of disjunction",
   "dada": 2,
   "v": [
    "p ∨ p ↔ p",
    "A ∪ A = A",
    "x + x = x",
    "x + x − x · x = x",
    "OR with both inputs joined = the plain wire"
   ]
  },
  {
   "ley": "Absorption",
   "dada": 3,
   "v": [
    "p ∧ (p ∨ q) ↔ p",
    "A ∩ (A ∪ B) = A",
    "x · (x + y) = x",
    "x · (x + y − x · y) = x",
    "AND of x with (x OR y) = x"
   ]
  },
  {
   "ley": "Excluded middle",
   "dada": 4,
   "v": [
    "p ∨ ¬p (tautology)",
    "A ∪ Aᶜ = U",
    "x + x′ = 1",
    "x + (1 − x) − x · (1 − x) = 1",
    "x OR (NOT x): the lamp always on"
   ]
  },
  {
   "ley": "Non-contradiction",
   "dada": 0,
   "v": [
    "¬(p ∧ ¬p) (tautology: p ∧ ¬p is always false)",
    "A ∩ Aᶜ = ∅",
    "x · x′ = 0",
    "x · (1 − x) = 0",
    "x AND (NOT x): the lamp always off"
   ]
  },
  {
   "ley": "De Morgan, for disjunction",
   "dada": 1,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∧ ¬q",
    "(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ",
    "(x + y)′ = x′ · y′",
    "1 − (x + y − x · y) = (1 − x) · (1 − y)",
    "NOR = AND of two NOTs"
   ]
  },
  {
   "ley": "Distribution of conjunction over disjunction",
   "dada": 2,
   "v": [
    "p ∧ (q ∨ r) ↔ (p ∧ q) ∨ (p ∧ r)",
    "A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)",
    "x · (y + z) = x · y + x · z",
    "x · (y + z − y · z) = x · y + x · z − x · y · z",
    "x AND (y OR z) = (x AND y) OR (x AND z)"
   ]
  },
  {
   "ley": "Identity element of conjunction",
   "dada": 3,
   "v": [
    "p ∧ (q ∨ ¬q) ↔ p",
    "A ∩ U = A",
    "x · 1 = x",
    "x · 1 = x",
    "AND with one input always at 1 = the plain wire"
   ]
  },
  {
   "ley": "Trick case: a ‘law’ that is not one",
   "dada": 2,
   "trampa": true,
   "v": [
    "¬(p ∨ q) ↔ ¬p ∨ ¬q: false with p true and q false",
    "(A ∪ B)ᶜ = Aᶜ ∪ Bᶜ: false if there is something in A and not in B",
    "(x + y)′ = x′ + y′: with x = 1, y = 0, it gives 0 = 1",
    "1 − (x + y − x · y) = (1 − x) + (1 − y) − (1 − x) · (1 − y): with x = 1, y = 0, it gives 0 = 1",
    "NOR = OR of two NOTs: no; NOR is AND of two NOTs, and OR of two NOTs is NAND"
   ],
   "nota": "It is given in Boolean algebra as if it were a law, but it is not: it is the mistake of distributing the negation without changing the operation. A single row of the table (or a sum with 0 and 1) is enough to refute it. The real law is De Morgan’s, further up."
  }
 ],
 "silogismos": [
  {
   "code": "AAA-1",
   "S": "dog",
   "P": "vertebrate",
   "M": "mammal",
   "tipo": "si",
   "mayor": "‘All mammals are vertebrates’: shade the part of ‘mammal’ that lies outside ‘vertebrate’ (both its regions: the one inside ‘dog’ and the one outside it).",
   "menor": "‘All dogs are mammals’: shade the part of ‘dog’ that lies outside ‘mammal’ (two regions).",
   "cruz": "There isn’t one: both premises are universal.",
   "concl": "‘All dogs are vertebrates’ requires the part of ‘dog’ outside ‘vertebrate’ to be empty. Both its regions are already grey, one from each premise: the conclusion is already drawn. It is Barbara."
  },
  {
   "code": "EAE-1",
   "S": "lizard",
   "P": "animal with fur",
   "M": "reptile",
   "tipo": "si",
   "mayor": "‘No reptile is an animal with fur’: shade where ‘reptile’ and ‘animal with fur’ overlap (two regions).",
   "menor": "‘All lizards are reptiles’: shade the part of ‘lizard’ outside ‘reptile’ (two regions).",
   "cruz": "There isn’t one.",
   "concl": "‘No lizard is an animal with fur’ requires the overlap of ‘lizard’ and ‘animal with fur’ to be empty. One of its regions was shaded by the major premise and the other by the minor: it is already drawn. It is Celarent."
  },
  {
   "code": "AII-1",
   "S": "object on the table",
   "P": "conductor",
   "M": "metal",
   "tipo": "si",
   "mayor": "‘All metals are conductors’: shade the part of ‘metal’ outside ‘conductor’ (two regions). It goes first because it is universal.",
   "menor": "‘Some object on the table is metal’: it requires an ✕ in the overlap of ‘object on the table’ and ‘metal’.",
   "cruz": "That overlap has two regions, but the one outside ‘conductor’ is already grey: the ✕ goes in the other one, inside all three circles.",
   "concl": "‘Some object on the table is a conductor’ requires an ✕ in the overlap of ‘object on the table’ and ‘conductor’: there is one already. It is Darii."
  },
  {
   "code": "EIO-1",
   "S": "number on the list",
   "P": "even number",
   "M": "prime greater than 2",
   "tipo": "si",
   "mayor": "‘No prime greater than 2 is an even number’: shade the overlap of ‘prime greater than 2’ and ‘even number’ (two regions).",
   "menor": "‘Some number on the list is a prime greater than 2’: it requires an ✕ in the overlap of ‘number on the list’ and ‘prime greater than 2’.",
   "cruz": "Of its two regions, the one inside ‘even number’ is already grey: the ✕ goes in the other one, outside ‘even number’.",
   "concl": "‘Some number on the list is not an even number’ requires an ✕ in ‘number on the list’ outside ‘even number’: it is already there. It is Ferio."
  },
  {
   "code": "AAA-2",
   "S": "dog",
   "P": "cat",
   "M": "mammal",
   "tipo": "no",
   "mayor": "‘All cats are mammals’: shade the part of ‘cat’ outside ‘mammal’.",
   "menor": "‘All dogs are mammals’: shade the part of ‘dog’ outside ‘mammal’.",
   "cruz": "There isn’t one.",
   "concl": "‘All dogs are cats’ would require the part of ‘dog’ outside ‘cat’ to be empty. One of its regions, the one inside ‘mammal’, is still blank: the conclusion is not drawn. It is not valid: the middle term (‘mammal’) is not taken in its full extension in either premise."
  },
  {
   "code": "AII-2",
   "S": "scientist",
   "P": "poet",
   "M": "dreamer",
   "tipo": "no",
   "mayor": "‘All poets are dreamers’: shade the part of ‘poet’ outside ‘dreamer’.",
   "menor": "‘Some scientist is a dreamer’: it requires an ✕ in the overlap of ‘scientist’ and ‘dreamer’.",
   "cruz": "That overlap has two regions, one inside ‘poet’ and one outside, and both are still blank: we do not know which one that scientist is in. The ✕ goes on the line that separates them.",
   "concl": "‘Some scientist is a poet’ would require an ✕ clearly inside the overlap of ‘scientist’ and ‘poet’. The ✕ is on the line: it is not drawn. It is not valid.",
   "euler": "A case where Euler misleads: it is easy to draw ‘scientist’ cutting across ‘poet’ inside ‘dreamer’, and then it looks as if some scientist is a poet. But there is another drawing, just as faithful to the premises, in which the dreaming scientists lie outside the poets. Euler forces you to choose one drawing; Venn does not choose: it puts the ✕ on the line."
  },
  {
   "code": "AAI-3",
   "S": "horse",
   "P": "white",
   "M": "unicorn",
   "tipo": "trad",
   "mayor": "‘All unicorns are white’: shade the part of ‘unicorn’ outside ‘white’.",
   "menor": "‘All unicorns are horses’: shade the part of ‘unicorn’ outside ‘horse’.",
   "cruz": "There isn’t one: both premises are universal.",
   "concl": "«Some horse is white» calls for an ✕, and there is none: the conclusion is not drawn, even though it is true. This is Darapti: Aristotle regarded it as valid because he took it for granted that terms are not empty; with «unicorn» that assumption fails. With the premise «there is some unicorn» (an ✕ in the only zone of «unicorn» that remains blank) it does come out."
  },
  {
   "code": "OAO-3",
   "S": "thinker",
   "P": "author of books",
   "M": "philosopher",
   "tipo": "si",
   "mayor": "‘Some philosopher is not an author of books’: it requires an ✕ in ‘philosopher’ outside ‘author of books’. Wait for the minor premise, which is universal.",
   "menor": "‘All philosophers are thinkers’: shade the part of ‘philosopher’ outside ‘thinker’ (two regions).",
   "cruz": "The region of ‘philosopher’ outside ‘author of books’ has two parts; the one outside ‘thinker’ is already grey. The ✕ goes in the other: a philosopher-thinker who wrote no books (Socrates, for example).",
   "concl": "‘Some thinker is not an author of books’ requires an ✕ in ‘thinker’ outside ‘author of books’: it is already there. It is Bocardo."
  }
 ],
 "falacias": [
  {
   "g": "g-fil-ad-hominem",
   "nom": "Ad hominem",
   "otros": "Attack on the person; poisoning the well; tu quoque is a variant",
   "ej": "‘Don’t listen to her: she only says that because she’s a science person.’",
   "parar": "Separate the person from the reason: ‘And what’s wrong with what they’re saying?’"
  },
  {
   "g": "g-fil-tu-quoque",
   "nom": "Tu quoque",
   "otros": "You too; appeal to hypocrisy",
   "ej": "‘You’re telling me not to smoke? You smoked at my age!’",
   "parar": "The other person being inconsistent does not make the criticism false: ‘Maybe, but am I right or not?’"
  },
  {
   "g": "g-fil-hombre-de-paja",
   "nom": "Straw man",
   "otros": "Man of straw; caricature of the argument",
   "ej": "‘She wants less homework: in other words, she wants us never to study.’",
   "parar": "Repeat the exact thesis: ‘That’s not what I said; I said…’"
  },
  {
   "g": "g-fil-apelacion-a-la-autoridad",
   "nom": "Appeal to authority",
   "otros": "Ad verecundiam; false authority",
   "ej": "‘This shampoo is the best: a footballer says so.’",
   "parar": "Ask whether they are an expert in that field and whether the experts agree."
  },
  {
   "g": "g-fil-apelacion-a-la-mayoria",
   "nom": "Appeal to the majority",
   "otros": "Ad populum; bandwagon effect",
   "ej": "‘If everyone is sharing it, it must be true.’",
   "parar": "Lots of people believing it is not a reason: ‘Why do they believe it?’"
  },
  {
   "g": "g-fil-apelacion-a-la-emocion",
   "nom": "Appeal to emotion",
   "otros": "Ad misericordiam (to pity); ad baculum (to fear or threat)",
   "ej": "‘If you fail me, my parents will ground me all summer.’",
   "parar": "Acknowledge the emotion and go back to the question: ‘But is the exam good or not?’"
  },
  {
   "g": "g-fil-apelacion-a-la-ignorancia",
   "nom": "Appeal to ignorance",
   "otros": "Ad ignorantiam",
   "ej": "‘Nobody has proved that ghosts don’t exist; so they exist.’",
   "parar": "The burden of proof lies with whoever makes the claim: not knowing that it is false is not knowing that it is true."
  },
  {
   "g": "g-fil-falso-dilema",
   "nom": "False dilemma",
   "otros": "False dichotomy; black-and-white thinking",
   "ej": "‘You’re either with me or against me.’",
   "parar": "Look for the third option: ‘What if it’s neither of the two?’"
  },
  {
   "g": "g-fil-pendiente-resbaladiza",
   "nom": "Slippery slope",
   "otros": "Snowball",
   "ej": "‘If I let you stay out until eleven tonight, tomorrow you’ll want to come back at three.’",
   "parar": "Ask for each step in the chain to be justified."
  },
  {
   "g": "g-fil-generalizacion-apresurada",
   "nom": "Hasty generalisation",
   "otros": "Insufficient or biased sample",
   "ej": "‘My cousin is from Burgos and he’s very serious: people from Burgos are serious.’",
   "parar": "Ask how many cases there are and whether they are representative."
  },
  {
   "g": "g-fil-causa-falsa",
   "nom": "False cause",
   "otros": "Post hoc, ergo propter hoc; cum hoc (correlation is not causation)",
   "ej": "‘Since I started wearing this bracelet, I’ve been passing: the bracelet brings me luck.’",
   "parar": "Look for other causes, chance or a common cause."
  },
  {
   "g": "g-fil-falsa-analogia",
   "nom": "False analogy",
   "otros": "Weak analogy",
   "ej": "‘A school is like a company: you have to sack the pupils who don’t perform.’",
   "parar": "Look for the difference between the two things that matters."
  },
  {
   "g": "g-fil-peticion-de-principio",
   "nom": "Begging the question",
   "otros": "Petitio principii; circular reasoning",
   "ej": "‘This book tells the truth because the book itself says so.’",
   "parar": "Point out that the premise already contains the conclusion."
  },
  {
   "g": "g-fil-equivoco",
   "nom": "Equivocation",
   "otros": "Amphiboly (if the double meaning belongs to the sentence); homonymy",
   "ej": "‘A bank is the side of a river; the Bank of Spain is a bank; so it is the side of a river.’",
   "parar": "Ask what the word means in each premise."
  },
  {
   "g": "g-fil-pregunta-compleja",
   "nom": "Complex question",
   "otros": "Trick question; loaded question",
   "ej": "‘Why do you keep lying?’",
   "parar": "Reject the assumption before answering: ‘I don’t accept that I’m lying.’"
  },
  {
   "g": "g-fil-pista-falsa",
   "nom": "Red herring",
   "otros": "False trail; changing the subject",
   "ej": "‘I broke the vase? And who left the window open?’",
   "parar": "Go back to the topic: ‘That’s another matter; we were talking about…’"
  }
 ],
 "qf": [
  {
   "txt": "‘Don’t listen to what the minister says about the economy: he’s been divorced twice.’",
   "tipo": "g-fil-ad-hominem",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "It attacks the private life of the speaker, which has nothing to do with what he says about the economy."
  },
  {
   "txt": "‘You’re telling me off for being late? You were late on Monday!’",
   "tipo": "g-fil-tu-quoque",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-hombre-de-paja",
    "g-fil-causa-falsa"
   ],
   "por": "The other person having been late too does not make it false that being late is wrong."
  },
  {
   "txt": "—We should recycle more at school. —Of course, and ban plastics, cars and electric light while we’re at it.",
   "tipo": "g-fil-hombre-de-paja",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-hombre-de-paja",
    "g-fil-falso-dilema"
   ],
   "por": "It exaggerates the proposal to the point of ridicule and attacks that caricature. If it said ‘if we recycle, we’ll end up banning cars’, it would be a slippery slope."
  },
  {
   "txt": "‘The dentist from the TV series recommends this yoghurt for your heart.’",
   "tipo": "g-fil-apelacion-a-la-autoridad",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-falsa-analogia"
   ],
   "por": "He is an actor, and besides, the heart is not his field even in the series: an authority outside their field."
  },
  {
   "txt": "‘Ten million people can’t be wrong: this video is telling the truth.’",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-apelacion-a-la-autoridad"
   ],
   "por": "Views measure popularity, not truth."
  },
  {
   "txt": "«Please, I beg you, pass me: I have had a horrible week and I am very sad.»",
   "tipo": "g-fil-apelacion-a-la-emocion",
   "o": [
    "g-fil-apelacion-a-la-emocion",
    "g-fil-pendiente-resbaladiza",
    "g-fil-falso-dilema"
   ],
   "por": "It seeks compassion instead of giving reasons why the exam deserves a pass: the sadness may be real, but it says nothing about what the exam is worth."
  },
  {
   "txt": "‘Nobody has shown that this supplement doesn’t work; so it works.’",
   "tipo": "g-fil-apelacion-a-la-ignorancia",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "g-fil-peticion-de-principio"
   ],
   "por": "Not knowing that something is false does not prove that it is true: whoever claims that it works has to prove it."
  },
  {
   "txt": "‘Either you pass everything in June or you’re not cut out for studying.’",
   "tipo": "g-fil-falso-dilema",
   "o": [
    "g-fil-falso-dilema",
    "g-fil-generalizacion-apresurada",
    "g-fil-pregunta-compleja"
   ],
   "por": "There are many more possibilities: passing in September, changing your method, having a bad year."
  },
  {
   "txt": "‘If we let people use their phones at break time, then they’ll use them in class, then in exams, and in the end nobody will learn anything.’",
   "tipo": "g-fil-pendiente-resbaladiza",
   "o": [
    "g-fil-hombre-de-paja",
    "g-fil-pendiente-resbaladiza",
    "g-fil-causa-falsa"
   ],
   "por": "It strings together ever worse consequences without justifying any of the steps."
  },
  {
   "txt": "‘I’ve met two French people and both of them were unfriendly: French people are unfriendly.’",
   "tipo": "g-fil-generalizacion-apresurada",
   "o": [
    "g-fil-generalizacion-apresurada",
    "g-fil-falsa-analogia",
    "g-fil-ad-hominem"
   ],
   "por": "Two cases are not enough to talk about millions of people."
  },
  {
   "txt": "‘Since they put up the new street lamp, there have been fewer burglaries. The light scares the burglars off.’",
   "tipo": "g-fil-causa-falsa",
   "o": [
    "g-fil-causa-falsa",
    "g-fil-apelacion-a-la-ignorancia",
    "no-es-falacia"
   ],
   "por": "Maybe, but one thing coming after another does not prove that it causes it: perhaps there was more policing, or it was chance. You would need to compare. Trick case: the conclusion might be true; what is fallacious is taking it as proved."
  },
  {
   "txt": "‘Pupils are like the customers in a shop: they are always right.’",
   "tipo": "g-fil-falsa-analogia",
   "o": [
    "g-fil-falsa-analogia",
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-hombre-de-paja"
   ],
   "por": "A pupil does not buy a product: they go to learn what they do not yet know, and that is the difference that matters."
  },
  {
   "txt": "‘God exists because the Bible says so, and the Bible tells the truth because it is the word of God.’",
   "tipo": "g-fil-peticion-de-principio",
   "o": [
    "g-fil-peticion-de-principio",
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-ignorancia"
   ],
   "por": "The argument uses as a premise what it wants to prove. Careful: logic judges this reasoning, not the existence of God, which is an open question in philosophy."
  },
  {
   "txt": "‘The end of life is death. The end of a thing is its perfection. Therefore the perfection of life is death.’",
   "tipo": "g-fil-equivoco",
   "o": [
    "g-fil-equivoco",
    "g-fil-pista-falsa",
    "g-fil-falso-dilema"
   ],
   "por": "‘End’ means ‘finish’ in the first premise and ‘goal’ in the second: the reasoning only seems valid because it uses the same word."
  },
  {
   "txt": "‘Have you stopped cheating in exams yet?’",
   "tipo": "g-fil-pregunta-compleja",
   "o": [
    "g-fil-pregunta-compleja",
    "g-fil-ad-hominem",
    "g-fil-falso-dilema"
   ],
   "por": "Whether you answer ‘yes’ or ‘no’, you admit that you used to cheat. You have to reject the assumption before answering."
  },
  {
   "txt": "—Why haven’t you done your homework? —And why is nobody talking about how badly the heating works?",
   "tipo": "g-fil-pista-falsa",
   "o": [
    "g-fil-tu-quoque",
    "g-fil-pista-falsa",
    "g-fil-apelacion-a-la-emocion"
   ],
   "por": "It changes the subject so as not to answer. It is not tu quoque, because it does not accuse the other person of doing the same thing."
  },
  {
   "txt": "‘Most of the world’s climate scientists agree, after decades of data, that the planet is warming because of human activity. It is reasonable to accept this as long as there is no evidence against it.’",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-apelacion-a-la-autoridad",
    "g-fil-apelacion-a-la-mayoria",
    "no-es-falacia"
   ],
   "por": "Trick case: this is not a fallacy. Relying on the agreement of experts in their own field, which is based on data and open to revision, is a legitimate reason, though not a proof."
  },
  {
   "txt": "‘Don’t trust what that witness says about the accident: yesterday she admitted that she had lied about that very accident.’",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-ad-hominem",
    "g-fil-tu-quoque",
    "no-es-falacia"
   ],
   "por": "Trick case: this is not a fallacious ad hominem. A witness having lied about the very thing they are reporting is relevant to deciding how far to believe them. What is fallacious is attacking the person for something that has nothing to do with what they say."
  },
  {
   "txt": "«If you do not pay the enrolment fee before the 30th, you lose your place; if you lose your place, you will not be able to do the course this year. So, if you do not pay before the 30th, you will not be able to do the course this year.»",
   "tipo": "no-es-falacia",
   "o": [
    "g-fil-pendiente-resbaladiza",
    "g-fil-apelacion-a-la-emocion",
    "no-es-falacia"
   ],
   "por": "Trick case: it is not a slippery slope. Each step is justified by a known rule, and the conclusion follows by hypothetical syllogism (p → q, q → r; therefore p → r; level 4). The slippery slope chains steps that are only possible or probable."
  },
  {
   "txt": "«You must believe in horoscopes: millions of people read them.»",
   "tipo": "g-fil-apelacion-a-la-mayoria",
   "o": [
    "g-fil-apelacion-a-la-mayoria",
    "g-fil-generalizacion-apresurada",
    "no-es-falacia"
   ],
   "por": "That many people read it does not make it true: popularity is not proof. (If they said «it got my aunt right twice, so it gets things right», that would be a hasty generalisation.)"
  }
 ]
};
