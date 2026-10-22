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
 "mapaIntro": "Click a level to open its page. The highlighted box is the next one for you.",
 "estHecho": "completed",
 "estSig": "next",
 "anterior": "Previous level",
 "siguiente": "Next level",
 "volverMapa": "Pathway map",
 "etapas": [
  {
   "titulo": "Classical logic",
   "de": 1,
   "a": 2
  },
  {
   "titulo": "Statements, laws and classes",
   "de": 3,
   "a": 5
  },
  {
   "titulo": "Predicates and application",
   "de": 6,
   "a": 9
  },
  {
   "titulo": "Isabelle: proving with a program",
   "de": 10,
   "a": 12
  }
 ],
 "guiaTit": "Work guide",
 "guiaObj": "Aim:",
 "guiaRec": "Route",
 "guiaPreg": "Questions: remove and add premises",
 "guiaRub": "Checkpoint rubric",
 "guiaNiv": [
  "Expert",
  "Advanced",
  "Developing",
  "Beginning"
 ],
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
    "t": "Quiz: validity and truth, deduction and induction",
    "h": "#cuestionarios/fil-validez-q",
    "mas": [
     {
      "t": "Quiz for topic 4",
      "h": "#cuestionarios/fil-t4-banco"
     }
    ]
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
    },
    {
     "t": "Syllogisms, at the end: eight syllogisms drawn in Venn step by step, including one where Euler misleads",
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
     "t": "Formalise: 23 sentences with trick cases",
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
    "t": "Quiz: formalising in propositional logic",
    "h": "#cuestionarios/fil-formalizar-q",
    "mas": [
     {
      "t": "Quiz: truth tables and logic",
      "h": "#cuestionarios/fil-logica-q"
     }
    ]
   },
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
    },
    {
     "t": "Laboratory, «Natural deduction»: 27 line-by-line proofs, with provisional assumptions",
     "h": "#logica/deduccion"
    }
   ],
   "control": {
    "t": "The ‘Rule or trap?’ exercise in Rules of inference, with 16 correct out of 20",
    "h": "#logica/inferencia"
   },
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
    "t": "Write one and the same law (for example, De Morgan) in the five languages of the bridges table and check it in the truth table and in Venn.",
    "mas": [
     {
      "t": "Quiz: the same law in five languages",
      "h": "#cuestionarios/fil-boole-q"
     }
    ]
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
    "t": "Quiz: quantifiers, the square of opposition and conversion",
    "h": "#cuestionarios/fil-cuantif-q",
    "mas": [
     {
      "t": "The Quantifiers exercise",
      "h": "#logica/cuantificadores"
     }
    ]
   },
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
     "t": "Informal fallacies: the Corner’s list and the exercise ‘Which fallacy is it?’ (20 cases)",
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
    "h": "#logica/mundo",
    "mas": [
     {
      "t": "Quiz: properties of relations and small worlds",
      "h": "#cuestionarios/fil-relaciones-q"
     }
    ]
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
   "guia": {
    "obj": "Follow a proof from start to finish, say what justifies each step and separate what is proved from what is taken for granted.",
    "rec": [
     "Guided proofs, ‘√2 is irrational’: do all the steps without looking at the hints.",
     "‘There are infinitely many primes’: notice the step that is not deduced from anything (constructing N).",
     "‘The square in the Meno’: what the slave knows at the beginning and what he knows at the end.",
     "‘The ontological argument’: follow the steps and match each objection to the step it targets.",
     "Kant’s judgements: classify ‘7 + 5 = 12’ and explain why Kant did not regard it as analytic."
    ],
    "preg": [
     "In the √2 proof, remove the premise ‘the fraction is in its simplest form’: is there still a contradiction? Which step no longer clashes?",
     "In the same proof, where is it used that every integer is even or odd? If you did not accept it, which step would fall?",
     "In Euclid’s proof, remove ‘every number greater than 1 has a prime divisor’: can you carry on? Why is it not enough to say that N is prime?",
     "Euclid constructs N. Is that a premise, a rule or a step? Could it be written as a natural deduction rule from level 4?",
     "In the ontological argument, remove the premise of step 4 (existing in reality is greater): is there a contradiction in step 5? Relate it to Kant’s objection.",
     "Put Gaunilo’s island in its place: write the argument with ‘the island than which no greater can be thought’. Which premise would you have to accept for it to work?",
     "Kant says that ‘7 + 5 = 12’ is synthetic a priori. What premise about the concept of ‘sum’ would have to be added for it to be analytic, as Leibniz thought?"
    ],
    "rub": [
     "Explains each step of a proof with its justification, says which premises it uses and which are taken for granted, and suggests a case in which removing a premise breaks the proof.",
     "Does the guided proof without mistakes and names the premises, but does not always say what would happen if one were missing.",
     "Follows the proof with the help of the hints; sometimes confuses a premise with a deduced step.",
     "Repeats the steps without being able to say why each one follows."
    ]
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
   "guia": {
    "obj": "Understand what a proof assistant does, use the countermodel search to see which premises are needed and write your own propositions.",
    "rec": [
     "‘Spinoza’ workbench, ‘About Isabelle, and thank you’: what Isabelle checks and what it does not.",
     "Practice world: the workbench’s ‘walk-through to get started’, in order.",
     "‘Time, defined’ world: propositions 9 and 10.",
     "‘✎ Write your own proposition’ in either of the two worlds."
    ],
    "preg": [
     "In the practice world, proposition 2: press ‘Does it follow?’ as it stands. Which premise is missing? Add it and try again.",
     "Proposition 4: it comes without the debatable premise and a countermodel appears. What real case resembles it? Would you accept the premise?",
     "Proposition 9 of the practice world: how many things does the world need for something to have two creators? Tick ‘Nothing has two creators’ and explain what changes.",
     "In ‘Time, defined’, which premises of the practice world have become theorems once time is defined? Why is that progress?",
     "Proposition 9 of time defined: remove one of the three theses that clash each time. Which one would you remove, and why?",
     "Write a proposition of your own that you think is true. Look for a countermodel; if none turns up, is it proved? What would Isabelle say?",
     "What is the difference between ‘I have not found a world in which it fails’ and ‘Proved in Isabelle’?"
    ],
    "rub": [
     "Uses the search to discover which premise is needed, interprets the countermodel with a real case and distinguishes precisely between not finding a countermodel and being proved.",
     "Finds the missing premises and reads the countermodels, but finds it hard to relate them to real cases.",
     "Does the propositions on the route with help; sometimes confuses ‘does not fail in small worlds’ with ‘proved’.",
     "Presses the buttons without interpreting what they see."
    ]
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
   "guia": {
    "obj": "Break a famous argument down into its premises, see which one does the work in each step and where the objections put their finger, without giving a verdict on the underlying question.",
    "rec": [
     "Read the exploration ‘The Five Ways and where they come from’.",
     "‘Spinoza’ workbench, ‘The Five Ways’ world: each way with its premises.",
     "Propositions 5 and 9: look for their countermodels.",
     "The note on causes ‘in themselves’ and time, at the foot of the definitions."
    ],
    "preg": [
     "In the first way, remove the premise that rules out infinite regress. What world does the workbench build? Is it a possible world?",
     "The ways do not speak of a beginning in time, and for Thomas God is not in time: he is eternal (Summa Theologiae I, question 10). In the chain of secondary causes, each cause acts at the same time as its effect; that «at the same time» holds for secondary causes, not for God. The dependence runs in one direction only: the effect depends on the cause, and not the other way round. What premise would you have to add in order to speak of a first instant? Does any of the ways need it?",
     "Proposition 5: where is the leap from ‘each thing is missing at some instant’ to ‘there is an instant at which there is nothing’? Write it with ∀ and ∃ (level 6).",
     "Proposition 9: why could a first mover and a first cause be two different things? What premise would be needed for them to be the same?",
     "Aquinas rejects the idea that something can be the cause of itself. Where does that idea appear on the workbench (in the premises or in the notes)? What would happen to the second way if it were allowed?",
     "Thomas holds it to be demonstrable that everything depends on God for its being (Summa Theologiae I, question 44), and holds it as a truth of faith, neither demonstrable nor refutable, that the world began in time (I, question 46, articles 1 and 2). How does that difference show in the premises on the workbench?",
     "Choose the premise that seems most debatable to you. Is it a problem of logic or of philosophy?"
    ],
    "rub": [
     "Identifies the premise that does the work in each way, explains the countermodel of propositions 5 and 9 and distinguishes between the validity of the argument and the acceptability of its premises, without treating the underlying question as settled.",
     "Explains the two countermodels, but does not always know which premise rules them out.",
     "Follows the workbench and recognises the premises, but mixes logical criticism with opinions about the conclusion.",
     "Gives a verdict on the existence of God instead of analysing the argument."
    ]
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
   "guia": {
    "obj": "Read Part I of the Ethics as a system, uncover the premises Spinoza does not write down, see which are redundant and which clash, and understand what it means for a program to check a whole work.",
    "rec": [
     "‘Spinoza’ workbench, ‘Spinoza, Ethics I’ world: start with the first layer.",
     "Choose a proposition and press ‘Is any premise redundant?’.",
     "Look for a premise beginning with H_ (the ones Spinoza does not write down) and read it carefully.",
     "‘✎ Write your own proposition’ with the terms of the Ethics."
    ],
    "preg": [
     "Choose a proposition. Remove the premises one by one: which are really needed? Do they match the ones Spinoza cites in his proof?",
     "Which H_ premise seems the most debatable to you? Remove it and look at the countermodel: what kind of world does it allow?",
     "If two premises clash, which would you remove? Which propositions would fall with it?",
     "Spinoza says that God is the cause of itself and Aquinas rejects this. Using the workbench, which definition or axiom of the Ethics makes a cause of itself possible?",
     "The Ethics speaks of attributes of substance, which are properties of properties. Why does that take us beyond first-order logic (level 6)?",
     "What does a reader gain when a program checks a whole work? What can the program not tell them?"
    ],
    "rub": [
     "Chooses a proposition, removes every premise they can, justifying it with countermodels, and argues in writing whether the most debatable premise is acceptable, distinguishing logic from philosophy.",
     "Removes premises and reads the countermodels, but the written argument is brief or does not separate logic from philosophy.",
     "Uses ‘Is any premise redundant?’ and describes what comes out, without evaluating it.",
     "Does not manage to relate the premises to Spinoza’s proof."
    ]
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
     "t": "Fallacies: the list of informal fallacies, linked to the glossary, and ‘Which fallacy is it?’",
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
   "txt": "Aristotle, the Stoics, the medievals, Leibniz, Kant, Frege and Russell: where each tool comes from.",
   "pasos": [
    {
     "t": "Stoic logic: Chrysippus’s five indemonstrables",
     "h": "#logica/clasicos/estoicos"
    },
    {
     "t": "Medieval logic: supposition, consequences and obligations",
     "h": "#logica/clasicos/medievales"
    },
    {
     "t": "Hellenism (Philosophy, Year 1): Stoics and Epicureans",
     "h": "#teoria/fil-helenismo"
    },
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
     "t": "Laboratory, ‘Induction and abduction’: four ways of reasoning without certainty, Hume’s problem, Peirce’s abduction and twenty cases",
     "h": "#logica/induccion"
    },
    {
     "t": "Logic and argumentation (topic 4): abduction and analogy",
     "h": "#teoria/fil-t4"
    }
   ]
  }
 ]
};
