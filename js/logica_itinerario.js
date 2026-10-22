// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/logica_itinerario.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const LOG_ITIN = {
 "titulo": "Pathway: from zero to expert",
 "intro": "Twelve levels, from Aristotle’s syllogism to proving propositions of Spinoza’s Ethics with a proof assistant. Take it slowly: each level says what you will know by the end, what to do and in what order, how to check whether you can move on to the next, and how far what you have learned reaches. The tools of one level are put to the test in the next: sometimes they still hold and sometimes they show their limit.",
 "tarjeta": "Twelve levels in order, from the syllogism to proving with Isabelle. Start here if you do not know where to start.",
 "abrir": "See the pathway",
 "nivel": "Nivel {n}",
 "meta": "By the end you will know how to:",
 "pasos": "What to do, in this order",
 "control": "Checkpoint:",
 "falta": "In preparation:",
 "limite": "How far it reaches:",
 "hecho": "I have passed it",
 "progreso": "You have passed {n} of {t} levels.",
 "progresoNada": "Tick each level when you pass its checkpoint: it is saved only in this browser.",
 "noAqui": "not on this website",
 "ramasTit": "Side branches",
 "ramasIntro": "You can enter them from the level indicated, without leaving the main path.",
 "desde": "From level {n}",
 "puentesTit": "Bridges: the same law in five languages",
 "puentes": {
  "cab": [
   "Statements",
   "Sets",
   "Boolean algebra",
   "Ordinary numbers (with 0 and 1)",
   "Gates"
  ],
  "filas": [
   [
    "¬p",
    "Aᶜ",
    "x′",
    "1 − x",
    "NOT"
   ],
   [
    "p ∧ q",
    "A ∩ B",
    "x · y",
    "x · y",
    "AND"
   ],
   [
    "p ∨ q",
    "A ∪ B",
    "x + y (with 1 + 1 = 1)",
    "x + y − x · y",
    "OR"
   ],
   [
    "¬(p ∧ q) ↔ ¬p ∨ ¬q",
    "(A ∩ B)ᶜ = Aᶜ ∪ Bᶜ",
    "(x · y)′ = x′ + y′",
    "1 − x · y = (1 − x) + (1 − y) − (1 − x)(1 − y)",
    "NAND = OR of two NOTs"
   ],
   [
    "tautology",
    "U, the universe",
    "1",
    "always 1",
    "the lamp always on"
   ],
   [
    "contradiction",
    "∅, the empty set",
    "0",
    "always 0",
    "the lamp always off"
   ]
  ],
  "nota": "Each row says the same thing five times. Check it: De Morgan’s law can be seen in a truth table, in a Venn diagram, by doing the sum with 0 and 1, and with two gates."
 },
 "niveles": [
  {
   "n": 1,
   "titulo": "The syllogism: validity, truth and degrees of generality",
   "meta": "that an argument can be valid with false premises and invalid with everything true; what it is to deduce and what it is to induce; and that “all”, “some” and “none” are different degrees of generality, which give a valid argument only if they are put together properly.",
   "pasos": [
    {
     "t": "Logic and argumentation (topic 4): validity and truth, deduction and induction",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Hints: valid or true?",
     "h": "#pistas/fil-validez"
    },
    {
     "t": "Syllogisms: the four propositions (A, E, I, O), the three terms, the figures and the rules",
     "h": "#logica/silogismos"
    },
    {
     "t": "Fallacies of the syllogism: which rule each one breaks",
     "h": "#logica/falacias"
    }
   ],
   "control": {
    "t": "Quiz for topic 4",
    "h": "#cuestionarios/fil-t4-banco"
   },
   "limite": "The syllogism works with groups of things and with three terms. It does not know what to do with sentences joined by “if…, then” or by “or”: that comes at level 3."
  },
  {
   "n": 2,
   "titulo": "From the syllogism to the drawing: Euler and Venn",
   "meta": "translate each proposition and each syllogism into an Euler diagram and a Venn diagram, and read off the drawing whether the conclusion is already in the premises.",
   "pasos": [
    {
     "t": "Logic and argumentation (topic 4): Euler and Venn diagrams",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Syllogisms: the diagrams of the premises and of the conclusion",
     "h": "#logica/silogismos"
    }
   ],
   "control": {
    "t": "Quiz: propositions, classes and Euler and Venn diagrams",
    "h": "#cuestionarios/fil-venn-q"
   },
   "limite": "Euler illustrates but does not prove: a single drawing can deceive. Venn does prove, but with three sets it is already hard, and it cannot draw relations between things."
  },
  {
   "n": 3,
   "titulo": "Propositional logic",
   "meta": "the connectives, first by their use and then by their name; formalising sentences with “only if”, “unless” or “neither… nor”; making truth tables; recognising a tautology and a contradiction; and seeing that the same logic makes a circuit work.",
   "pasos": [
    {
     "t": "Laboratory, “Let's talk”: work out what a connective means from how it is used",
     "h": "#logica/hablamos"
    },
    {
     "t": "Formalise: 13 sentences with a trick case",
     "h": "#logica/formalizar"
    },
    {
     "t": "Truth tables: tautology, contradiction and contingency",
     "h": "#logica/tablas"
    },
    {
     "t": "Logic gates: the formula as a circuit",
     "h": "#logica/puertas"
    }
   ],
   "control": {
    "t": "Quiz: truth tables and logic",
    "h": "#cuestionarios/fil-logica-q"
   },
   "falta": "A formalisation quiz and an extended version of the truth tables one.",
   "limite": "The truth table decides everything, but it grows very fast: with 5 letters it is already 32 rows. To reason without writing out the whole table you need laws and rules: level 4."
  },
  {
   "n": 4,
   "titulo": "Logical laws and deduction",
   "meta": "the laws of propositional logic, the valid rules (modus ponens, modus tollens, hypothetical and disjunctive syllogism, dilemma) and their false imitations, and how to deduce a conclusion step by step without the table.",
   "pasos": [
    {
     "t": "Logical laws: 70 laws, each one checkable in its table",
     "h": "#logica/leyes"
    },
    {
     "t": "Rules of inference and the “rule or trap?” exercise",
     "h": "#logica/inferencia"
    },
    {
     "t": "Logical laws: the 21 derived rules",
     "h": "#logica/leyes"
    }
   ],
   "control": {
    "t": "The “rule or trap?” exercise in Rules of inference, with 10 correct out of 12",
    "h": "#logica/inferencia"
   },
   "falta": "Proofs in natural deduction, applying the rules line by line.",
   "limite": "Each rule of deduction is a tautology of the table: the table justifies them and the rules save work. But all this speaks of whole sentences, not of what is inside them."
  },
  {
   "n": 5,
   "titulo": "Classes, sets and Boolean algebra",
   "meta": "the operations with classes and sets, their laws, Boolean algebra and, above all, that they are the same laws as those of propositional logic, those of everyday sums with 0 and 1, and those of logic gates.",
   "pasos": [
    {
     "t": "Logic and argumentation (topic 4): classes, operations, laws and Russell’s paradox",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Set laws: compare two expressions in Venn (and the trick law)",
     "h": "#logica/conjuntos"
    },
    {
     "t": "Logic and argumentation (topic 4): Boole and the gates",
     "h": "#teoria/fil-t4"
    },
    {
     "t": "Logic gates: De Morgan with two gates",
     "h": "#logica/puertas"
    },
    {
     "t": "Leibniz’s Workshop: binary and characteristic numbers",
     "h": "#leibniz"
    }
   ],
   "puentes": true,
   "control": {
    "t": "Write one and the same law (for example, De Morgan) in the five languages of the bridges table and check it in the truth table and in Venn."
   },
   "limite": "With classes you can say “all A are B”, but not “every A loves some B”: you need to be able to talk about each thing separately. That is level 6."
  },
  {
   "n": 6,
   "titulo": "Predicate logic: “all”, “some”, “none”",
   "meta": "to read “all”, “some” and “none” in the old way and in today’s way, with ∀ and ∃; the square of opposition and conversion in its two versions; the problem of the empty subject; and to handle variables (x, y): what is bound and what is free.",
   "pasos": [
    {
     "t": "Square of opposition, with the traditional and the current reading, and conversion",
     "h": "#logica/cuadrado"
    },
    {
     "t": "Quantifiers: A, E, I and O with ∀ and ∃, and the world of five individuals",
     "h": "#logica/cuantificadores"
    }
   ],
   "control": {
    "t": "The Quantifiers exercise (10 sentences)",
    "h": "#logica/cuantificadores"
   },
   "falta": "A quiz on quantifiers and conversion.",
   "limite": "The old square takes it for granted that there is something being talked about; today’s logic does not. That is why some traditional inferences (Darapti) hold only if that premise is added."
  },
  {
   "n": 7,
   "titulo": "Applying what you have learned: classic arguments, paradoxes and fallacies",
   "meta": "to analyse with these tools arguments by authors, classic paradoxes and fallacies, and to check validity with a truth tree.",
   "pasos": [
    {
     "t": "Classic arguments: Monica, Augustine and the necessary and sufficient condition",
     "h": "#logica/clasicos/monica"
    },
    {
     "t": "Exercises: sentences with logical form",
     "h": "#logica/ejercicios"
    },
    {
     "t": "Paradoxes: the liar, the barber, Zeno…",
     "h": "#logica/paradojas"
    },
    {
     "t": "Classic fallacies",
     "h": "#logica/falacias"
    },
    {
     "t": "Laboratory, “Truth tree”: the cogito, the problem of evil, the dilemma",
     "h": "#logica/arbol"
    },
    {
     "t": "What the Tortoise said to Achilles",
     "h": "#logica/paradojas/carroll"
    }
   ],
   "control": {
    "t": "Choose a paradox and a fallacy and say, with whatever tool is needed, where the false step is."
   },
   "limite": "Carroll’s tortoise shows the deepest limit: a rule cannot be turned into one more premise without falling into an infinite regress. To apply logic you have to accept rules."
  },
  {
   "n": 8,
   "titulo": "Worlds and relations",
   "meta": "to decide whether a sentence is true in a particular world, and to recognise the properties of a relation (reflexive, symmetric, transitive…) and what follows from which.",
   "pasos": [
    {
     "t": "Laboratory, “World of shapes”: the five challenges",
     "h": "#logica/mundo"
    },
    {
     "t": "Laboratory, “Relations”: the five challenges",
     "h": "#logica/relaciones"
    },
    {
     "t": "Laboratory, “Spinoza”: the properties map of the review",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "The challenges of the World of shapes and of Relations",
    "h": "#logica/mundo"
   },
   "limite": "A small world can refute a sentence, but not prove it: some sentences fail only in large or infinite worlds."
  },
  {
   "n": 9,
   "titulo": "From logic to mathematics",
   "meta": "to follow a mathematical proof and find its weak step, to tell what is proved from what is presupposed, and to see which judgements Kant distinguished and what remains of them in today’s logic.",
   "pasos": [
    {
     "t": "Laboratory, “Guided proofs”: root of 2, Euclid, Meno, Anselm",
     "h": "#logica/demos"
    },
    {
     "t": "Laboratory, “Kant's judgements”",
     "h": "#logica/kant"
    }
   ],
   "control": {
    "t": "Do a guided proof from start to finish without making a mistake in any step."
   },
   "limite": "A proof written by hand can skip a step without anyone noticing. What if a program checked every step? That is what comes next."
  },
  {
   "n": 10,
   "titulo": "Isabelle, level 1: the worlds of time",
   "meta": "what a proof assistant is, to look for countermodels and remove premises to see which ones are needed, and to write your own propositions and premises.",
   "pasos": [
    {
     "t": "Laboratory, “Spinoza”: “About Isabelle, and thank you”",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laboratory, “Spinoza”, practice world: time, duration and creation",
     "h": "#logica/spinoza"
    },
    {
     "t": "Laboratory, “Spinoza”, world “Time, defined”",
     "h": "#logica/spinoza"
    },
    {
     "t": "“✎ Write your own proposition”, in either of the two worlds",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "In “Time, defined”, explain why proposition 9 does not force you to accept something uncreated: which three theses cannot go together."
   },
   "limite": "The page’s search tool only looks at worlds of up to four things; what it does not find is not proved. What is proved is what Isabelle has checked."
  },
  {
   "n": 11,
   "titulo": "Isabelle, level 2: the Five Ways",
   "meta": "to break a famous argument down into its premises, see which one does the work at each step and where the objections put their finger.",
   "pasos": [
    {
     "t": "Laboratory, “Spinoza”, world “The Five Ways”",
     "h": "#logica/spinoza"
    },
    {
     "t": "The Five Ways and where they come from",
     "h": "#teoria/hf-cinco-vias"
    }
   ],
   "control": {
    "t": "Explain in your own words the countermodel of propositions 5 and 9: which premise is missing and why."
   },
   "limite": "That one premise does all the work does not make it false: deciding whether to accept it is no longer logic, it is philosophy."
  },
  {
   "n": 12,
   "titulo": "Isabelle, level 3: Spinoza’s Ethics",
   "meta": "to read Part I of the Ethics as a system, discover the premises the author does not write, see which are redundant and which clash, and understand what it means for a program to check an entire work.",
   "pasos": [
    {
     "t": "Laboratory, “Spinoza”, world “Spinoza, Ethics I”: layers, “Is any premise redundant?” and “Write your own proposition”",
     "h": "#logica/spinoza"
    }
   ],
   "control": {
    "t": "Choose a proposition, remove as many premises as you can, and defend in writing whether the most debatable one is acceptable."
   },
   "limite": "Spinoza speaks of attributes of substance, and speaking of properties of properties goes beyond first-order predicate logic: it is the door to higher-order logic, that of Isabelle/HOL."
  }
 ],
 "ramas": [
  {
   "titulo": "Non-formal fallacies and rhetoric",
   "desde": 1,
   "txt": "The traps that are not of form but of content, and the art of arguing.",
   "pasos": [
    {
     "t": "Fallacies",
     "h": "#logica/falacias"
    },
    {
     "t": "Duel of Reasons",
     "h": "#duelo"
    },
    {
     "t": "The Art of the Word",
     "h": "#palabra"
    }
   ]
  },
  {
   "titulo": "History of logic",
   "desde": 1,
   "txt": "Aristotle, Leibniz, Kant, Frege and Russell: where each tool comes from.",
   "pasos": [
    {
     "t": "Leibniz’s Workshop",
     "h": "#leibniz"
    },
    {
     "t": "Kant: judgements and today’s logic",
     "h": "#teoria/hf-kant-juicios"
    },
    {
     "t": "Analytic philosophy: Russell and Wittgenstein",
     "h": "#teoria/hf-analitica"
    }
   ]
  },
  {
   "titulo": "Induction and abduction",
   "desde": 1,
   "txt": "Reasoning without certainty: generalising, comparing and looking for the best explanation.",
   "pasos": [
    {
     "t": "Logic and argumentation (topic 4): abduction and analogy",
     "h": "#teoria/fil-t4"
    }
   ],
   "falta": "A table of inductive strength, analogy and best explanation."
  }
 ]
};
