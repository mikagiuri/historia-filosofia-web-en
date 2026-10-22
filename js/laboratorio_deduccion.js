// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/laboratorio_deduccion.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const DED = {
 "t": {
  "dnLede": "Proving without making the table: you start from the premises and add one line at a time, applying a rule to lines that are already there. If you reach the conclusion, the reasoning is valid. Choose the lines (the order in which you click them does not matter), choose the rule and click «Apply»: the workbench checks whether the rule holds for those lines and, if it gives more than one result, lets you choose.",
  "dnEjercicios": "Exercises",
  "dnEsc": "Stage {n}",
  "dnEj": "Exercise {n}:",
  "dnComo": "1. Press the numbers of the lines you are going to use. 2. Choose a rule. 3. Press ‘Apply’.",
  "dnReglas": "Rules",
  "dnUsar": "Use this line",
  "dnPremisa": "premise",
  "dnSupuesto": "assumption",
  "dnAbiertos": "Open assumptions: {n}. Close them with PC or RA before you finish: whatever depends on an assumption does not hold outside it.",
  "dnExtraSup": "Provisional assumption (the formula you assume):",
  "dnExtraAd": "Formula you add with ‘or’:",
  "dnAplicar": "Apply",
  "dnDeshacer": "Undo",
  "dnReiniciar": "Start again",
  "dnNoSe": "Cannot be derived",
  "dnSiguiente": "Next exercise",
  "dnPista": "A hint",
  "dnPistaN": "Hint {n}.",
  "dnSol": "Show the full derivation",
  "dnOcultar": "Hide the derivation",
  "dnElige": "Choose a rule first.",
  "dnVarias": "The rule gives more than one result: choose which one you want to add.",
  "dnHecho": "Proved! You have reached the conclusion with no open assumptions: the argument is valid.",
  "dnTrampaBien": "Well spotted: it cannot be derived. Counterexample from the table: {fila}. With those values the premises are true and the conclusion false.",
  "dnTrampaMal": "It can be derived: in the table there is no row with the premises true and the conclusion false. Keep looking for the rules.",
  "dnErrRegla": "I don’t know that rule.",
  "dnErrExtra": "Write the formula the rule asks for.",
  "dnErrFormula": "I don’t understand the formula: {m}",
  "dnErrAcceso": "One of the chosen lines is inside an assumption that has already been closed: it can no longer be used.",
  "dnErrSinSup": "There is no open assumption to close. Open one with ‘Sup’.",
  "dnErrNum": "This rule applies to {n} line(s): choose that number of lines.",
  "dnErrContra": "For reductio ad absurdum, choose two lines that contradict each other: a formula and its negation.",
  "dnErrNoAplica": "The rule does not apply to those lines. Look at its form in the table of rules.",
  "dnNivel": "Within {n} assumption(s).",
  "dnCerrada": "Line from an assumption that has already been closed: it cannot be used.",
  "dnReglasTit": "The rules and why they work",
  "dnReglasIntro": "Each rule is a tautology from the truth table (level 3): that is why it never leads from true premises to a false conclusion. You can check each one in ‘Truth tables’.",
  "dnColRegla": "Rule",
  "dnColForma": "Form",
  "dnColTaut": "Tautology that justifies it",
  "dnSinTaut": "opens or closes an assumption: it is justified because A → B is true whenever, assuming A, you reach B",
  "dnLimiteTit": "How far it goes",
  "dnLimite": "The truth table and deduction reach the same result by different routes: with the five connectives of the workbench (¬, ∧, ∨, → and ↔), everything the table counts as valid can be derived with these rules, and everything that is derived is valid in the table (propositional logic is sound and complete). Deduction saves rows, but both look only at whole sentences, not at what is inside them. «All humans are mortal; Socrates is human; therefore Socrates is mortal» cannot be proved this way: you need to look inside the sentences, with «all» and «some». That is level 6."
 },
 "esc": [
  "Step 1: the basic rules, almost always in a single step.",
  "Stage 2: two or three steps.",
  "Stage 3: longer derivations.",
  "Stage 4: provisional assumptions (conditional proof and reductio ad absurdum).",
  "Step 5: combining, proving without premises, recognising what cannot be derived and using the biconditional."
 ],
 "reglas": {
  "mp": {
   "nom": "Modus ponens",
   "dice": "From a conditional and its antecedent, the consequent follows."
  },
  "mt": {
   "nom": "Modus tollens",
   "dice": "From a conditional and the negation of its consequent, the negation of the antecedent follows."
  },
  "sh": {
   "nom": "Hypothetical syllogism",
   "dice": "Two chained conditionals give a conditional."
  },
  "sd": {
   "nom": "Disjunctive syllogism",
   "dice": "From a disjunction and the negation of one part, the other follows."
  },
  "ci": {
   "nom": "Conjunction introduction",
   "dice": "Two lines can be joined with ‘and’."
  },
  "ce": {
   "nom": "Conjunction elimination (simplification)",
   "dice": "From a conjunction, each of its parts follows."
  },
  "ad": {
   "nom": "Addition",
   "dice": "From a line follows that line ‘or’ any other formula: the inclusive ‘or’ only requires one part to be true."
  },
  "dc": {
   "nom": "Constructive dilemma",
   "dice": "If two paths lead to the same thing and one of the two holds, you get there."
  },
  "dn": {
   "nom": "Double negation",
   "dice": "¬¬A and A can be exchanged for one another. It applies to the whole line, not to part of it."
  },
  "dm": {
   "nom": "De Morgan",
   "dice": "Negating a conjunction is asserting the disjunction of the negations, and negating a disjunction, the conjunction of the negations. It applies to the whole line, not to part of it."
  },
  "cp": {
   "nom": "Contraposition",
   "dice": "A conditional is equivalent to its contrapositive. It applies to the whole line, not to part of it."
  },
  "bie": {
   "nom": "Biconditional elimination",
   "dice": "From A ↔ B it follows that A → B, and also B → A: choose which one you want."
  },
  "bii": {
   "nom": "Biconditional introduction",
   "dice": "If you have A → B and also B → A, you can write A ↔ B."
  },
  "rep": {
   "nom": "Repetition",
   "dice": "Copies a line that can still be used (to bring it inside an assumption)."
  },
  "sup": {
   "nom": "Provisional assumption",
   "dice": "Assume any formula to see what follows from it. Everything you derive stays inside the assumption until you close it."
  },
  "pc": {
   "nom": "Conditional proof",
   "dice": "If, assuming A, you have reached B, close the assumption and write A → B."
  },
  "ra": {
   "nom": "Reductio ad absurdum",
   "dice": "If, assuming A, you have reached a contradiction (B and ¬B), close the assumption and write ¬A."
  }
 },
 "ej": {
  "d01": {
   "pistas": [
    "You have a conditional and its antecedent.",
    "Choose lines 1 and 2 and the rule MP."
   ]
  },
  "d02": {
   "pistas": [
    "You have a conditional and the negation of its consequent.",
    "Choose lines 1 and 2 and the rule MT."
   ]
  },
  "d03": {
   "pistas": [
    "First split the conjunction with E∧: twice, once for each part.",
    "Then join them with I∧: the workbench lets you choose between p ∧ q and q ∧ p."
   ]
  },
  "d04": {
   "pistas": [
    "A disjunction and the negation of one of its parts.",
    "Lines 1 and 2, rule SD."
   ]
  },
  "d05": {
   "pistas": [
    "The two conditionals are chained through q.",
    "Lines 1 and 2, rule SH."
   ]
  },
  "d06": {
   "pistas": [
    "Start with the conditional whose antecedent you already have.",
    "With q in hand, the second conditional gives r."
   ]
  },
  "d07": {
   "pistas": [
    "To use p → r you need p on its own.",
    "Take p out of the conjunction with E∧ and apply MP."
   ]
  },
  "d08": {
   "pistas": [
    "The conditional needs p, and you have ¬¬p.",
    "Remove the double negation with DN and apply MP."
   ]
  },
  "d09": {
   "pistas": [
    "¬(p ∨ q) says that neither of the two is the case.",
    "De Morgan turns it into ¬p ∧ ¬q; then E∧."
   ]
  },
  "d10": {
   "pistas": [
    "De Morgan turns ¬(p ∧ q) into ¬p ∨ ¬q.",
    "For the disjunctive syllogism you need to negate ¬p: write ¬¬p from p with DN.",
    "Now SD with ¬p ∨ ¬q and ¬¬p."
   ]
  },
  "d11": {
   "pistas": [
    "The consequent of the first premise is another conditional.",
    "MP with 1 and 2 gives q → r; MP again with q."
   ]
  },
  "d12": {
   "pistas": [
    "The conditional needs p ∨ q and you only have p.",
    "Addition lets you go from p to p ∨ q (write q in the box)."
   ]
  },
  "d13": {
   "pistas": [
    "The first three premises have the form of the constructive dilemma.",
    "DC with 1, 2 and 3 gives r; then MP with the fourth."
   ]
  },
  "d14": {
   "pistas": [
    "To use r → p with modus tollens you need ¬p.",
    "¬(p ∨ q) gives ¬p ∧ ¬q by De Morgan; take out ¬p with E∧."
   ]
  },
  "d15": {
   "pistas": [
    "Split the conjunction in the first premise.",
    "With q ∨ r and ¬q, SD gives r. Join it to p with I∧."
   ]
  },
  "d16": {
   "pistas": [
    "The conclusion is a conditional: assume its antecedent, p ∧ r.",
    "Inside the assumption, take out p, apply MP and close with PC by choosing the line with q."
   ]
  },
  "d17": {
   "pistas": [
    "Assume p.",
    "Bring q inside the assumption with R (repetition) and close with PC."
   ]
  },
  "d18": {
   "pistas": [
    "It is the hypothetical syllogism, but without using it: prove it.",
    "Assume p, apply MP twice and close with PC."
   ]
  },
  "d19": {
   "pistas": [
    "Assume the opposite of what you want: p.",
    "From p you get q and ¬q: a contradiction. Close with RA by choosing those two lines."
   ]
  },
  "d20": {
   "pistas": [
    "Assume ¬p.",
    "From ¬p you get q, which clashes with ¬q. RA gives ¬¬p, and DN gives p."
   ]
  },
  "d21": {
   "pistas": [
    "Assume p.",
    "MP gives q ∧ r; take out r with E∧ and close with PC."
   ]
  },
  "d22": {
   "pistas": [
    "Take out the two conditionals with E∧.",
    "Assume p, get q and r, join them with I∧ and close with PC."
   ]
  },
  "d23": {
   "pistas": [
    "With no premises, all you can do is assume. Assume exactly what you want to deny.",
    "From p ∧ ¬p you get p and ¬p: RA."
   ]
  },
  "d24": {
   "pistas": [
    "Try the table: is there a row with p → q and q true and p false?",
    "If there is, press ‘Cannot be derived’."
   ],
   "contra": "It is the fallacy of affirming the consequent: with p false and q true, both premises are true and the conclusion false. No combination of valid rules can lead to it."
  },
  "d25": {
   "pistas": [
    "Remember that the ‘or’ of logic is inclusive.",
    "Can p and q be true at the same time?"
   ],
   "contra": "It is the fallacy of affirming a disjunct: with p and q true, the premises are true and ¬q is false. To conclude ¬q you would need the exclusive ‘or’."
  },
  "d26": {
   "pistas": [
    "Compare it with exercise 24: here the premise is a biconditional, which goes in both directions.",
    "E↔ with line 1 gives q → p; then, MP with q."
   ]
  },
  "d27": {
   "pistas": [
    "To reach a biconditional, prove the two conditionals and join them with I↔.",
    "Suppose p ∧ q, draw out the two parts, join them the other way round and close with PC; do the same starting from q ∧ p."
   ]
  }
 }
};
