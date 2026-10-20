// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/laboratorio.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const LAB = {
 "t": {
  "tabLab": "Laboratory",
  "mesaHablamos": "Let's talk",
  "mesaArbol": "Truth tree",
  "mesaMundo": "World of shapes",
  "mesaRelaciones": "Relations",
  "mesaDemos": "Guided proofs",
  "intro": "Tables for doing logic with your hands: decipher an unknown connective, grow truth trees, build worlds where sentences are true, draw relations and follow famous proofs step by step.",
  "verdadera": "true",
  "falsa": "false",
  "V": "V",
  "F": "F",
  "relSi": "Yes",
  "relNo": "No",
  "errVacia": "Write a formula.",
  "errCar": "I don't understand the symbol ‘{c}’.",
  "errFalta": "Something is missing at the end of the formula.",
  "errParen": "A bracket has not been closed.",
  "errSobra": "There is something extra at the end of the formula.",
  "errConectiva": "There is a connective where a letter or a bracket should be.",
  "errMayus": "Write the letters in lower case: p, q, r, s, t or u.",
  "hbLede": "A speaker uses a word you don't know, {s}, to join two sentences. You know what the simple sentences mean; look at the scene, listen to when they say something is true and work out what their word means.",
  "hbNivel": "Level",
  "hbN1": "1 · common connectives",
  "hbN2": "2 · eight connectives",
  "hbN3": "3 · all sixteen",
  "hbPuntos": "Points",
  "hbRondas": "Rounds solved",
  "hbEscena": "The scene",
  "hbEntiendes": "What you already understand",
  "hbAyuda": "Help: see whether p, q, r are true (−3)",
  "hbDicho": "What the speaker has said",
  "hbPregunta": "The speaker says: ‘{o}’. Will it be true or false?",
  "hbResuelta": "Round solved.",
  "hbVerdadera": "True",
  "hbFalsa": "False",
  "hbTraduccion": "Your translation of {s}",
  "hbTablaAyuda": "Click the boxes to say when ‘A {s} B’ is true. When you have it, propose your translation.",
  "hbProponer": "Propose this translation",
  "hbNueva": "New round",
  "hbFila": "Row {f}: {v}",
  "hbOk10": "<strong>Well deduced (+10).</strong> Given what you had already heard, ‘{o}’ had to be {v}.",
  "hbMal15": "<strong>Inconsistent (−15).</strong> Given what you had already heard, ‘{o}’ could only be {v}. Check the data and the scene.",
  "hbOk5": "<strong>Correct (+5).</strong> It could not be known for certain yet: you had a good eye or good luck.",
  "hbMal3": "<strong>Blameless miss (−3).</strong> With the data you had, both answers were possible. Now you know a little more.",
  "hbRellena": "Fill in all four boxes before proposing the translation.",
  "hbCorrecta": "<strong>Correct translation! (+20)</strong> ‘{s}’ means <strong>{nom}</strong> ({sim}).",
  "hbRara": " There is no everyday word for this: the speaker has a connective that we don't use.",
  "hbNoEncaja": "<strong>Doesn't fit (−5).</strong> According to your table, ‘{o}’ would be {tuyo}, but the speaker said it is {suyo}.",
  "hbCabe": "<strong>It fits everything you have heard… but it isn't what the speaker means (−2).</strong> With these data there is still room for {n} different translations. Keep listening: this is Quine's indeterminacy of translation.",
  "hbEscenaAria": "Scene: {d}",
  "hbSaberTit": "Food for thought: how do we learn what a word means?",
  "hbSaber1": "Quine imagined a linguist facing a completely unknown language (<em>Word and Object</em>, 1960): a native points at a rabbit and says ‘gavagai’. Does it mean ‘rabbit’, ‘rabbit part’, ‘rabbithood’? The data are never quite enough to fix a single translation: this is the <em>indeterminacy of translation</em>. That is why, sometimes, your hypothesis will fit everything you have heard and still not be the right one.",
  "hbSaber2": "Davidson added that understanding someone means knowing under what conditions their sentences are true, and that to interpret them we have to assume they almost always tell the truth (the <em>principle of charity</em>). This game is exactly that: you know the world, you assume the speaker is not lying and you reconstruct the meaning of their word from its truth conditions.",
  "hbSaber3": "Scoring: getting right what could already be deduced is worth 10; getting it right by luck, 5. Getting it wrong when you couldn't have known costs only 3, but giving an answer that contradicts what you had already heard costs 15: inconsistency is punished more than bad luck.",
  "arLede": "To find out whether an argument is valid, assume the worst: that the premises are true and the conclusion false. Break down the formulas until you see whether that assumption is possible. If every branch ends in a contradiction, it isn't: the argument is valid.",
  "arModoVal": "Is the argument valid?",
  "arModoCon": "Can they be true at the same time?",
  "arPremisas": "Premises (one per line)",
  "arConclusion": "Conclusion",
  "arFormulas": "Formulas (one per line)",
  "arAyuda": "Letters: p, q, r, s, t, u. Connectives: ¬ (or ~), ∧ (or &), ∨ (or v), → (or ->), ↔ (or <->).",
  "arQueCrees": "Before you start, what do you think?",
  "arPredSi": "Valid",
  "arPredNo": "Not valid",
  "arPredSiC": "Yes, compatible",
  "arPredNoC": "No, they contradict each other",
  "arPlantar": "Plant the tree",
  "arPaso": "One step",
  "arTodo": "Finish",
  "arDeshacer": "Undo",
  "arEscribeConcl": "Write the conclusion.",
  "arAlMenosUna": "Write at least one formula.",
  "arPremisa": "premise",
  "arNegConcl": "¬ conclusion",
  "arDe": "{r} from {l}",
  "arTerminado": "Tree finished: {c} of {t} branches closed.",
  "arAbiertas": "Open branches: {a}. Click an underlined formula to break it down (tip: first the ones that don't open branches).",
  "arDesarrollar": "Break down line {l}",
  "arVerChoque": "See the contradiction between lines {a} and {b}",
  "arAbierta": "○ open",
  "arValido": "<strong>Valid.</strong> Assuming that the premises are true and the conclusion false leads to a contradiction in every branch: it is impossible.",
  "arNoValido": "<strong>Not valid.</strong> A branch has stayed open: it describes a case in which the premises are true and the conclusion false. Counterexample: {m}.",
  "arIncompat": "<strong>Incompatible.</strong> All the branches close: these formulas cannot be true at the same time.",
  "arCompat": "<strong>Compatible.</strong> An open branch gives a case in which they are all true: {m}.",
  "arOBien": "; or else ",
  "arCualquiera": "any value",
  "arPredOk": " Your prediction was correct.",
  "arPredMal": " Your prediction wasn't: it is worth looking at why.",
  "arReglasTit": "The rules of the tree",
  "arReglasTxt": "Some rules <strong>extend</strong> the branch (both things have to be true) and others <strong>split it in two</strong> (one is enough). A branch closes ✕ when it contains a formula and its negation.",
  "arAlarga": "extends the branch ( / = one below the other)",
  "arAbre": "opens two branches ( | = separates branches)",
  "muLede": "A sentence is not simply true or false: it is so <em>in a world</em>. Change the shapes and watch how the value of each sentence changes. The cells are in a row: cell 1 is to the left of all the others.",
  "muMundoAria": "The world: six cells",
  "muEditorAyuda": "Click a shape to change it, or an empty cell to add one.",
  "muForma": "Form",
  "muColor": "Colour",
  "muTam": "Size",
  "muNombre": "Name",
  "muSinNombre": "no name",
  "muQuitar": "Remove this shape",
  "muCasilla": "Cell {n}: {d}",
  "muCasillaVacia": "Cell {n} empty: add shape",
  "muSeLlama": ", called {x}",
  "muFigura": "{color} {forma}, {tam}",
  "muFalla": "Fails at {c}.",
  "muGracias": "Holds thanks to {c}.",
  "muLaCasilla": "cell {n}",
  "muVacua": "True because there are none: nothing breaks it (‘vacuous’ truth).",
  "muConseguido": "<strong>Challenge complete!</strong> In this world all the sentences are true.",
  "muSujetoVacio": " Notice: there are no triangles. For modern logic, ‘all S are P’ does not assert that any S exist.",
  "muImposible": "If you can't do it, it's not your fault: A and O are <strong>contradictories</strong>. In any world, one is true and the other false. Try it with different worlds and see how T and F are always shared out.",
  "muTuya": "Write your own sentence",
  "muAnadir": "Add",
  "muQuitarOr": "Remove",
  "muError": "error",
  "muVocTit": "Vocabulary of this world",
  "muVoc": "Properties: {p1}. Two-place relations: {p2} (‘x is to the left of y’), {p3}, {p4}, {p5}. Names: a, b, c, d, e, f (give them to the shapes in the editor). Variables: x, y, z, w.",
  "foEscribe": "Write a sentence.",
  "foPredDesc": "I don't know the predicate ‘{p}’.",
  "foParen": "After ‘{p}’ come brackets: {e}.",
  "foTermino": "A variable (x, y, z) or a name (a, b, c…) is missing.",
  "foCuant": "After ∀ or ∃ comes a variable: x, y, z or w.",
  "foCierra": "The bracket of ‘{p}’ has not been closed.",
  "foArgs1": "‘{p}’ needs one argument.",
  "foArgs2": "‘{p}’ needs two arguments.",
  "foSolo": "A name or a variable on its own is not a sentence.",
  "foMal": "The sentence is not well formed.",
  "foFalta": "Something is missing at the end of the sentence.",
  "foSobra": "There is something extra at the end of the sentence.",
  "foCierraP": "A bracket has not been closed.",
  "foSuelta": "The variable {v} is free: a ∀{v} or an ∃{v} is missing.",
  "foNoNombra": "The name ‘{v}’ does not name any object in the world.",
  "reLede": "‘Is a sibling of’, ‘is older than’, ‘knows’: relations have formal properties. Draw arrows between four people and see which properties the relation has. Click one person and then another to add or remove the arrow; click the same one twice to relate it to itself.",
  "reAyuda": "Click a person to start an arrow. Arrows: {n}.",
  "reAyudaSel": "Now click who the arrow from {x} goes to (or click {y} again to relate it to itself).",
  "reGrafo": "Graph of the relation",
  "reElegida": " (chosen)",
  "reProps": "Properties",
  "reFalla": "Fails: {c}.",
  "reRetos": "Challenges",
  "reRetosAyuda": "Build a relation that meets each task. One of them is impossible: which one, and why?",
  "reSaberTit": "To think about",
  "reSaber": "Relations that are reflexive, symmetric and transitive are called <em>equivalence relations</em>: they divide the world into groups (‘being the same height as’). Identity is the strictest of all. ‘Is a sibling of’ seems transitive, but it isn't quite: if Ana is Bea's sister and Bea is Ana's, Ana is not her own sister.",
  "reCSinRefl": "{x} is not related to itself",
  "reCRefl": "{x} is related to itself",
  "reCSim": "goes from {x} to {y}, but not from {y} to {x}",
  "reCVaVuelve": "goes there and back between {x} and {y}",
  "reCConexa": "{x} and {y} are not related",
  "reCTrans": "goes from {x} to {y} and from {y} to {z}, but not from {x} to {z}",
  "deLede": "Eight famous proofs, step by step. At each step, choose why it is correct. Several are reductios ad absurdum: the same idea that closes the branches of the truth tree, now with numbers, dominoes or God.",
  "deEsqueleto": "Logical skeleton",
  "dePorQue": "Why is this step correct?",
  "deElige": "Choose the answer",
  "deRespuesta": "Answer: ",
  "dePorque": "Because: ",
  "deCompleta": "<strong>Proof complete ({x}).</strong> ",
  "deSinFallo": "without a single mistake",
  "deUnFallo": "with 1 failed attempt",
  "deFallos": "with {n} failed attempts",
  "deOtraVez": "Start again",
  "deVerRaiz": "See why √2 is irrational",
  "rolSupuesto": "assumption",
  "rolPaso": "step",
  "rolChoque": "contradiction",
  "rolConclusion": "conclusion",
  "xRaizTit": "So close, but never",
  "xRaiz": "Some fractions get extremely close to √2. If any were exact, a² − 2b² would equal 0. Try your own: the proof guarantees that it will never come out as 0.",
  "xRaizDec": "decimal",
  "xRaizEnteros": "Write two positive whole numbers.",
  "xRaizNo": "It isn't 0: {f} is not √2.",
  "xEucTit": "Euclid's calculator",
  "xEuc": "Choose how many primes your list has. A new prime always appears, but it isn't always N: with six primes, N is not prime.",
  "xEucLista": "List: {l}",
  "xEucPrimo": "N is prime, and it is not on the list.",
  "xEucNoPrimo": "N is not prime: {n} = {f}. Its prime factors are not on the list either.",
  "xEucCuantos": "How many primes",
  "xTabTit": "Try it anyway",
  "xTab": "Click a square and then a neighbouring one to place a domino; click a domino to remove it. Watch the colour count.",
  "xTabCuenta": "Dominoes: {n} · free squares: {c} light and {o} dark.",
  "xTabSinOsc": " There are no dark ones left: the {c} light squares left over can no longer be covered.",
  "xTabSobran": " Each domino covers one square of each colour, so there will always be 2 light squares left over.",
  "xTabVaciar": "Clear the board",
  "xTabCasilla": "Row {r}, column {c}",
  "xTabConFicha": ", with a domino",
  "xTabAria": "Chessboard without two opposite corners",
  "xTabGrid": "Board for placing dominoes",
  "xBarTit": "Check it on the truth tree",
  "xBar": "Call p ‘the barber shaves himself’. The story says p ↔ ¬p. If the tree closes every branch, that sentence cannot be true in any case.",
  "xBarBtn": "Plant p ↔ ¬p in the tree",
  "xZenTit": "A 100-metre race",
  "xZen": "Move the slider to see how far Achilles still has to go after each stretch.",
  "xZenTramos": "Number of stretches",
  "xZenRes": "After {n} stretches, Achilles has covered {r} m of 100.<br>He still has <b>{f}</b> to go.",
  "xZenPelo": " Less than the thickness of a hair.",
  "xZenVirus": " Roughly the size of a virus.",
  "xZenM": "{x} m",
  "xZenMm": "{x} mm",
  "xZenMicras": "{x} microns",
  "xZenNm": "{x} nanometres",
  "xZenAria": "A square of area 1 split into successive halves: {n} pieces",
  "xTriTit": "The surprise: a triangle on a sphere",
  "xTri": "This triangle has one vertex at the North Pole and two on the equator. Its three angles are right angles: they add up to 270°. Which step of the proof no longer holds on a sphere?",
  "xTriAria": "Triangle on a sphere with three right angles",
  "xTriAria2": "Triangle ABC with the parallel to AB drawn through C",
  "xKantTit": "What about Kant?",
  "xKant1": "For Kant, space is an a priori form of our sensibility, and Euclid's geometry necessarily describes how we have to perceive it: its truths are synthetic (they extend our knowledge) and a priori (they do not depend on experience).",
  "xKant2": "Non-Euclidean geometries showed that the fifth postulate can be denied without contradiction, and Einstein's general relativity describes physical space-time as curved. Does that refute Kant? Some say yes; others say that Kant was talking about how we intuit space, not about how physics measures it. It makes a good class discussion.",
  "xAnsTit": "The three classic objections",
  "xAns": "Which step does each one target?",
  "xAnsPaso": "Step {n}",
  "xAnsTodo": "The whole argument",
  "xAnsBien": "<strong>Well spotted.</strong> ",
  "xAnsRevisa": "<strong>Revísalo.</strong> ",
  "xMenTit": "To think about",
  "xMen": "Socrates doesn't tell the slave any answer: he only asks questions. Is that true? Reread the questions in steps 4 and 5: do they really leave a choice, or do they already contain the answer? It is an old objection to anamnesis: perhaps the teacher teaches more than it seems.",
  "menLado2": "side 2 · area 4",
  "menLado4": "side 4 · area 16 (four times as much)",
  "menLado3": "side 3 · area 9",
  "menMitades": "four halves of 4 = 8",
  "menCuatro": "four squares of area 4",
  "menAria1": "Square with sides of 2 feet divided into 4 small squares",
  "menAria2": "Square with sides of 4 feet: it contains four squares like the original",
  "menAria3": "Square with sides of 3 feet with 9 small squares",
  "menAria4": "Four 2-foot squares with their diagonals, which form a tilted square"
 },
 "forma": {
  "circulo": "circle",
  "cuadrado": "square",
  "triangulo": "triangle"
 },
 "color": {
  "rj": "red",
  "az": "blue",
  "vd": "green"
 },
 "tam": {
  "grande": "large",
  "pequeno": "small"
 },
 "frase": {
  "circulo_rj": "The circle is red.",
  "circulo_az": "The circle is blue.",
  "circulo_grande": "The circle is large.",
  "circulo_pequeno": "The circle is small.",
  "cuadrado_rj": "The square is red.",
  "cuadrado_az": "The square is blue.",
  "cuadrado_grande": "The square is large.",
  "cuadrado_pequeno": "The square is small.",
  "triangulo_rj": "The triangle is red.",
  "triangulo_az": "The triangle is blue.",
  "triangulo_grande": "The triangle is large.",
  "triangulo_pequeno": "The triangle is small."
 },
 "conectiva": {
  "c1000": "and",
  "c1110": "or (inclusive)",
  "c1011": "if…, then",
  "c1001": "if and only if",
  "c0110": "either… or… (exclusive)",
  "c0111": "not both (NAND)",
  "c0001": "neither… nor… (NOR)",
  "c1101": "…if… (converse)",
  "c1111": "always true",
  "c0000": "always false",
  "c1100": "the first, nothing more",
  "c1010": "the second, nothing more",
  "c0011": "the opposite of the first",
  "c0101": "the opposite of the second",
  "c0100": "the first but not the second",
  "c0010": "the second but not the first"
 },
 "arEj": {
  "mp": {
   "nom": "Modus ponens",
   "glosa": "If it rains, the ground gets wet. It is raining. Therefore the ground gets wet."
  },
  "mt": {
   "nom": "Modus tollens",
   "glosa": ""
  },
  "ac": {
   "nom": "Affirming the consequent",
   "glosa": "Fallacy: the ground is wet, therefore it has rained."
  },
  "na": {
   "nom": "Denying the antecedent",
   "glosa": ""
  },
  "cogito": {
   "nom": "Cogito",
   "glosa": "p = I think, q = I exist. Only the form is examined: Descartes denied that the cogito was a syllogism; for him it is a simple intuition of the mind (Replies to the Second Objections)."
  },
  "mal": {
   "nom": "Problem of evil",
   "glosa": "p = God is omnipotent, q = God is good, r = evil exists. Hume attributes it to Epicurus (Dialogues Concerning Natural Religion, Part X)."
  },
  "dilema": {
   "nom": "Dilemma",
   "glosa": ""
  },
  "morgan": {
   "nom": "De Morgan",
   "glosa": ""
  },
  "sh": {
   "nom": "Hypothetical syllogism",
   "glosa": ""
  },
  "reciproca": {
   "nom": "Trap: the converse",
   "glosa": ""
  }
 },
 "muRetos": [
  {
   "nom": "1 · Names",
   "txt": "Make all four sentences true. To use a name, give it to a shape in the editor.",
   "glosas": [
    "a is a square.",
    "b is red.",
    "b is to the left of a.",
    "a is larger than b."
   ]
  },
  {
   "nom": "2 · All and some",
   "txt": "Quantifiers talk about the whole world at once. Click a false sentence to see which shape makes it fail.",
   "glosas": [
    "All squares are red.",
    "There is some large circle.",
    "There is nothing green.",
    "There are two different figures with the same shape."
   ]
  },
  {
   "nom": "3 · The empty subject",
   "txt": "Can ‘all triangles are large’ and ‘all triangles are small’ be true at the same time? Modern logic says yes… in a certain world.",
   "glosas": [
    "All triangles are large.",
    "All triangles are small.",
    "There is some square."
   ]
  },
  {
   "nom": "4 · Relations",
   "txt": "Now it matters where each shape is.",
   "glosas": [
    "Every circle has some square to its right.",
    "Figures with the same shape are the same colour.",
    "There is a shape larger than all the others.",
    "There is some circle."
   ]
  },
  {
   "nom": "5 · A and O",
   "txt": "The universal affirmative (A) and the particular negative (O) are contradictories. Try to make both true at the same time.",
   "glosas": [
    "A: all squares are blue.",
    "O: some square is not blue."
   ]
  }
 ],
 "pred": {
  "Cuadrado": "Square",
  "Circulo": "Circle",
  "Triangulo": "Triangle",
  "Rojo": "Red",
  "Azul": "Blue",
  "Verde": "Green",
  "Grande": "Large",
  "Pequeno": "Small",
  "Izquierda": "LeftOf",
  "MayorQue": "LargerThan",
  "MismoColor": "SameColour",
  "MismaForma": "SameShape"
 },
 "persona": {
  "a": "Ana",
  "b": "Bea",
  "c": "Carlos",
  "d": "Dani"
 },
 "reProps": {
  "refl": {
   "nom": "Reflexive",
   "dice": "every element is related to itself"
  },
  "irrefl": {
   "nom": "Irreflexive",
   "dice": "no element is related to itself"
  },
  "sim": {
   "nom": "Symmetric",
   "dice": "if it goes from x to y, it also comes back from y to x"
  },
  "asim": {
   "nom": "Asymmetric",
   "dice": "it never goes there and back (not even with itself)"
  },
  "antisim": {
   "nom": "Antisymmetric",
   "dice": "it only goes there and back between an element and itself"
  },
  "trans": {
   "nom": "Transitive",
   "dice": "if it goes from x to y and from y to z, it also goes from x to z"
  },
  "conexa": {
   "nom": "Connected",
   "dice": "two different elements are always related in one direction or the other"
  }
 },
 "rePresets": [
  {
   "nom": "is a sibling of",
   "glosa": "Ana, Bea and Carlos are siblings; Dani is an only child."
  },
  {
   "nom": "is older than",
   "glosa": "Ana > Bea > Carlos > Dani."
  },
  {
   "nom": "is the same height as",
   "glosa": "Ana and Bea are the same height; so are Carlos and Dani."
  },
  {
   "nom": "admires",
   "glosa": "Each one admires the next; Ana also admires herself."
  },
  {
   "nom": "clear",
   "glosa": ""
  }
 ],
 "reRetos": [
  "Symmetric but not transitive",
  "Transitive and asymmetric, with at least three arrows (a strict order)",
  "Reflexive, symmetric and transitive, but without relating everyone to everyone (an equivalence)",
  "Reflexive and antisymmetric, but not transitive",
  "Symmetric and asymmetric at the same time, with at least one arrow"
 ],
 "demos": [
  {
   "id": "raiz2",
   "nom": "√2 is irrational",
   "intro": "We want to prove that √2 cannot be written as a fraction of whole numbers. We will do it the other way round: we will assume that it can and see that this leads to a contradiction.",
   "pasos": [
    {
     "e": "Suppose that √2 = <i>a</i>/<i>b</i>, with <i>a</i> and <i>b</i> whole numbers and the fraction already simplified: <i>a</i> and <i>b</i> are not both even.",
     "tipo": "supuesto",
     "esq": "I assume the opposite: √2 is a fraction",
     "op": [
      [
       "It is what we want to refute: we assume the opposite to see where it leads",
       true,
       "Every reductio ad absurdum starts like this. The fraction can always be simplified: just divide top and bottom by 2 as long as both are even."
      ],
      [
       "We already know that every number is a fraction",
       false,
       "We don't know that: that is precisely what is in question."
      ],
      [
       "The definition of square root says so",
       false,
       "The definition only says that √2 · √2 = 2; it says nothing about fractions."
      ]
     ]
    },
    {
     "e": "2 = <i>a</i><sup>2</sup> / <i>b</i><sup>2</sup>",
     "tipo": "paso",
     "esq": "I square",
     "op": [
      [
       "I square both sides of the equation",
       true,
       "(√2)² = 2 and (a/b)² = a²/b²."
      ],
      [
       "I multiply both sides by b",
       false,
       "That would give √2 · b = a, not this equation."
      ],
      [
       "I divide both sides by 2",
       false,
       "Check: the 2 appears when the root is removed."
      ]
     ]
    },
    {
     "e": "<i>a</i><sup>2</sup> = 2<i>b</i><sup>2</sup>",
     "tipo": "paso",
     "esq": "I remove the denominator",
     "op": [
      [
       "I multiply both sides by b²",
       true,
       ""
      ],
      [
       "I square again",
       false,
       "Squaring again would give fourth powers."
      ],
      [
       "I add b² to both sides",
       false,
       "Adding doesn't remove a denominator: you have to multiply."
      ]
     ]
    },
    {
     "e": "<i>a</i><sup>2</sup> is even.",
     "tipo": "paso",
     "esq": "a² is even",
     "op": [
      [
       "It is twice a whole number (b²)",
       true,
       "Being even is exactly that: being 2 times some whole number."
      ],
      [
       "All squares are even",
       false,
       "No: 9 = 3² is odd."
      ],
      [
       "Because a is even",
       false,
       "We don't know that yet: it is the next thing to be proved. Using it now would be taking for granted what we want to prove."
      ]
     ]
    },
    {
     "e": "<i>a</i> is even.",
     "tipo": "paso",
     "esq": "a is even",
     "op": [
      [
       "If a were odd, a² would also be odd",
       true,
       "An odd number is 2m + 1, and (2m + 1)² = 4m² + 4m + 1 = 2(2m² + 2m) + 1: odd again. So if a² is even, a cannot be odd."
      ],
      [
       "The root of an even number is always even",
       false,
       "√8 is not even a whole number, and √4 = 2 is indeed even: the rule doesn't work like that."
      ],
      [
       "Because a² = 2b² and 2 is even",
       false,
       "This says that a² is even, but the step from a² to a is missing."
      ]
     ]
    },
    {
     "e": "<i>a</i> = 2<i>k</i> for some whole number <i>k</i>.",
     "tipo": "paso",
     "esq": "I write a = 2k",
     "op": [
      [
       "It is the definition of an even number",
       true,
       ""
      ],
      [
       "Because a is half of something",
       false,
       "The other way round: a is twice something."
      ],
      [
       "Because b is even",
       false,
       "We don't know anything about b yet."
      ]
     ]
    },
    {
     "e": "(2<i>k</i>)<sup>2</sup> = 2<i>b</i><sup>2</sup>, that is, 4<i>k</i><sup>2</sup> = 2<i>b</i><sup>2</sup>",
     "tipo": "paso",
     "esq": "I substitute",
     "op": [
      [
       "I substitute 2k for a in a² = 2b²",
       true,
       ""
      ],
      [
       "I square a = 2k",
       false,
       "Almost: that gives a² = 4k², but here we have put 2k into the equation from step 3."
      ],
      [
       "I multiply by 4",
       false,
       "The 4 comes from (2k)² = 4k²."
      ]
     ]
    },
    {
     "e": "<i>b</i><sup>2</sup> = 2<i>k</i><sup>2</sup>, so <i>b</i><sup>2</sup> is even and <i>b</i> is even.",
     "tipo": "paso",
     "esq": "b is even too",
     "op": [
      [
       "I divide by 2 and repeat the reasoning of steps 4 and 5",
       true,
       "What held for a now holds for b."
      ],
      [
       "Because a and b are equal",
       false,
       "They need not be; a/b equals √2, so a is greater than b."
      ],
      [
       "Because every fraction has an even denominator",
       false,
       "No: 1/3 has an odd denominator."
      ]
     ]
    },
    {
     "e": "<i>a</i> and <i>b</i> are both even… but we had assumed that the fraction was simplified. ✕",
     "tipo": "choque",
     "esq": "Contradiction with step 1",
     "op": [
      [
       "It clashes with the assumption in step 1",
       true,
       "The branch closes: the assumption leads to a contradiction."
      ],
      [
       "It's enough to simplify the fraction again",
       false,
       "If we simplify, the reasoning repeats in exactly the same way and two even numbers come out again: the clash doesn't go away, it repeats endlessly."
      ],
      [
       "It doesn't matter: there can be fractions with both terms even",
       false,
       "Of course there are (2/4), but ours was, by assumption, the simplified one."
      ]
     ]
    },
    {
     "e": "Therefore √2 is not a fraction of whole numbers: <b>it is irrational</b>. <span class=\"lb-qed\">Q.E.D.</span>",
     "tipo": "conclusion",
     "esq": "√2 is irrational",
     "op": [
      [
       "Reductio ad absurdum: if the assumption leads to a contradiction, it is false",
       true,
       "It is the rule of the truth tree: if every branch closes, what was assumed cannot be true."
      ],
      [
       "Because we haven't found any fraction",
       false,
       "Not finding something doesn't prove that it doesn't exist; here we have proved that it cannot exist."
      ],
      [
       "Because √2 = 1.414… has infinitely many decimal places",
       false,
       "That is a consequence of being irrational, not the reason; and 1/3 = 0.333… also has infinitely many decimal places and is rational."
      ]
     ]
    }
   ],
   "cierre": "Legend has it that the Pythagoreans, for whom everything was number (a ratio between whole numbers), drowned Hippasus of Metapontum for revealing this result: it is a late legend, not a proven fact. The diagonal of a square and its side are <em>incommensurable</em>: there is no unit, however small, that fits an exact number of times into both."
  },
  {
   "id": "euclides",
   "nom": "There are infinitely many primes",
   "intro": "Euclid (<em>Elements</em>, Book IX, Proposition 20) proved more than 2,300 years ago that the list of prime numbers never ends. Once again, we will assume the opposite.",
   "pasos": [
    {
     "e": "Suppose there are only finitely many primes: <i>p</i><sub>1</sub>, <i>p</i><sub>2</sub>, …, <i>p<sub>n</sub></i>.",
     "tipo": "supuesto",
     "esq": "I assume: the list of primes comes to an end",
     "op": [
      [
       "We assume the opposite of what we want to prove",
       true,
       ""
      ],
      [
       "It is a known fact that there are few primes",
       false,
       "It is not a fact: it is what we are going to refute."
      ],
      [
       "We have counted all the primes",
       false,
       "Nobody can count them all: that is why a proof is needed."
      ]
     ]
    },
    {
     "e": "Let <i>N</i> = <i>p</i><sub>1</sub> · <i>p</i><sub>2</sub> · … · <i>p<sub>n</sub></i> + 1",
     "tipo": "paso",
     "esq": "I build N",
     "op": [
      [
       "We build it like this: we multiply all the primes on the list and add 1",
       true,
       "This step is not deduced from anything: it is the brilliant idea of the proof."
      ],
      [
       "The assumption says so",
       false,
       "The assumption only gives the list; we make N ourselves."
      ],
      [
       "N is the next prime on the list",
       false,
       "Careful: N need not be prime (look at the calculator below)."
      ]
     ]
    },
    {
     "e": "<i>N</i> is greater than 1, so it has some prime divisor <i>q</i>.",
     "tipo": "paso",
     "esq": "N has a prime divisor q",
     "op": [
      [
       "Every number greater than 1 is either prime or breaks down into primes",
       true,
       "If N is prime, q = N; if not, q is one of its prime factors."
      ],
      [
       "Because N is prime",
       false,
       "It is the most common mistake: 2·3·5·7·11·13 + 1 = 30,031 = 59 · 509 is not prime. That is why we say ‘it has some prime divisor’, which is always true."
      ],
      [
       "Because N is even",
       false,
       "N is odd: 2 is on the list, so the product is even and N = even + 1."
      ]
     ]
    },
    {
     "e": "That prime <i>q</i> must be on the list: it is some <i>p<sub>i</sub></i>.",
     "tipo": "paso",
     "esq": "q is on the list",
     "op": [
      [
       "By the assumption, the list contains all the primes",
       true,
       ""
      ],
      [
       "Because q is small",
       false,
       "Size doesn't matter: what counts is the assumption in step 1."
      ],
      [
       "Because q divides N",
       false,
       "Dividing N doesn't put it on the list; what puts it there is that, by assumption, the list has them all."
      ]
     ]
    },
    {
     "e": "<i>q</i> divides <i>p</i><sub>1</sub> · … · <i>p<sub>n</sub></i> and also divides <i>N</i>; therefore it divides their difference, which is 1.",
     "tipo": "paso",
     "esq": "q divides 1",
     "op": [
      [
       "If a number divides two others, it divides their difference",
       true,
       "N − p₁·…·pₙ = 1."
      ],
      [
       "Because all numbers divide 1",
       false,
       "The other way round: 1 is divisible only by 1."
      ],
      [
       "Because q is prime",
       false,
       "Being prime is not enough: what matters is that it divides both numbers."
      ]
     ]
    },
    {
     "e": "But no prime divides 1. ✕",
     "tipo": "choque",
     "esq": "Contradiction",
     "op": [
      [
       "A prime is greater than 1, and no number greater than 1 divides 1",
       true,
       ""
      ],
      [
       "Because 1 is prime",
       false,
       "1 is not considered prime; and even if it were, it wouldn't fix anything."
      ],
      [
       "It is not a contradiction: q could be 1",
       false,
       "1 is not prime, and q is a prime."
      ]
     ]
    },
    {
     "e": "Therefore the assumption is false: <b>there are infinitely many prime numbers</b>. <span class=\"lb-qed\">Q.E.D.</span>",
     "tipo": "conclusion",
     "esq": "There are infinitely many primes",
     "op": [
      [
       "Reductio ad absurdum",
       true,
       "Given any finite list of primes, Euclid's construction guarantees that one is missing."
      ],
      [
       "Because N is a new prime",
       false,
       "Not always: sometimes N is composite, and then the new prime is one of its factors."
      ],
      [
       "Because numbers never run out",
       false,
       "That there are infinitely many numbers doesn't imply that there are infinitely many primes; that is what had to be proved."
      ]
     ]
    }
   ],
   "cierre": "Notice the difference from √2: here reasoning is not enough, you have to <em>build</em> something (the number N). Many mathematical proofs combine both things: logical rules and a good idea."
  },
  {
   "id": "menon",
   "nom": "The square in the Meno",
   "intro": "In Plato's <em>Meno</em> (82b-85b), Socrates asks questions of a slave who has never studied geometry until he discovers how to construct a square with twice the area. For Plato, the slave does not learn: he remembers (anamnesis). Put yourself in his place.",
   "pasos": [
    {
     "e": "This square has sides of 2 feet. What is its area?",
     "tipo": "paso",
     "esq": "Area of the square: 4",
     "preg": true,
     "img": "menon:base",
     "op": [
      [
       "4 square feet",
       true,
       "2 × 2 = 4: four small one-foot squares fit inside."
      ],
      [
       "8 square feet",
       false,
       "You have added up the four sides (2+2+2+2): that is the perimeter, not the area."
      ],
      [
       "2 square feet",
       false,
       "Count the small one-foot squares that fit inside."
      ]
     ]
    },
    {
     "e": "We want a square of 8 feet, twice as big. The slave says: ‘Easy, we double the side.’ What is the area of a square with sides of 4 feet?",
     "tipo": "paso",
     "esq": "Doubling the side gives 16",
     "preg": true,
     "img": "menon:lado4",
     "op": [
      [
       "16: four times as much, not double",
       true,
       "The slave thought he knew, and he didn't. It is the first step of the Socratic method: discovering your own ignorance."
      ],
      [
       "8: double",
       false,
       "Count the 2-foot squares that fit: there are four, not two."
      ],
      [
       "12",
       false,
       "4 × 4 = 16."
      ]
     ]
    },
    {
     "e": "So the side must be between 2 and 4. The slave tries 3 feet. What area does that give?",
     "tipo": "paso",
     "esq": "Side 3 gives 9: not that either",
     "preg": true,
     "img": "menon:lado3",
     "op": [
      [
       "9: one too many",
       true,
       "And there is no whole number between 2 and 3. The slave no longer knows what to say: this is aporia, the perplexity that, according to Socrates, drives us to search."
      ],
      [
       "8: just what we are looking for",
       false,
       "3 × 3 = 9, one too many."
      ],
      [
       "6",
       false,
       "You have multiplied 3 × 2. The side is multiplied by itself."
      ]
     ]
    },
    {
     "e": "Socrates draws four squares like the first one and draws a diagonal in each. The diagonals form a tilted square. What part of each small square lies inside it?",
     "tipo": "paso",
     "esq": "Each diagonal cuts it in half",
     "preg": true,
     "img": "menon:diagonales",
     "op": [
      [
       "Half",
       true,
       "The diagonal splits each square into two equal triangles."
      ],
      [
       "A quarter",
       false,
       "Look at one small square: the diagonal splits it into two equal triangles."
      ],
      [
       "The whole square",
       false,
       "Only one of the two triangles lies inside."
      ]
     ]
    },
    {
     "e": "So what is the area of the tilted square?",
     "tipo": "paso",
     "esq": "Area: 4 halves of 4 = 8",
     "preg": true,
     "img": "menon:mitades",
     "op": [
      [
       "8: four halves of 4",
       true,
       "Double! The square we were looking for is built on the diagonal of the first one."
      ],
      [
       "16",
       false,
       "That is the whole large square; the tilted one only takes up half of it."
      ],
      [
       "4",
       false,
       "It is four halves of a square of area 4: 4 × 2 = 8."
      ]
     ]
    },
    {
     "e": "Its side is the diagonal of the original square. Can the slave say how many feet long it is?",
     "tipo": "conclusion",
     "esq": "Constructible, but not expressible as a ratio",
     "preg": true,
     "op": [
      [
       "Not as a fraction: it is 2√2 feet long, and √2 is irrational",
       true,
       "He can draw it, but not measure it with any fraction of a foot. In the <em>Theaetetus</em> (147d-148b), Plato tells how Theodorus and the young Theaetetus studied these incommensurable magnitudes."
      ],
      [
       "Yes: 3 feet",
       false,
       "We have already seen that the square with side 3 has area 9, not 8."
      ],
      [
       "Yes: 2.8 feet",
       false,
       "2.8² = 7.84: close, but it isn't 8. No fraction gives exactly 8 when it is squared."
      ]
     ]
    }
   ],
   "cierre": "Socrates concludes that the slave had that truth within him and has ‘remembered’ it: to know is to remember what the soul contemplated before birth. You may disagree with the theory, but the method works: good questions, a mistake uncovered, perplexity and, in the end, the correct construction. Does the slave now know, or does he only have a true opinion? Socrates says that, for it to be knowledge, he will have to be asked the same thing many times and in many ways (85c-d), and that true opinions only become knowledge when they are tied down by reasoning about the cause (97e-98a)."
  },
  {
   "id": "tablero",
   "nom": "The mutilated chessboard",
   "intro": "We remove two opposite corners from a chessboard. Can what is left be covered with dominoes, each the size of two squares? You could try for hours… or reason for a minute.",
   "pasos": [
    {
     "e": "How many squares are left on the board?",
     "preg": true,
     "tipo": "paso",
     "esq": "62 squares are left: 31 dominoes would be needed",
     "img": "tablero:normal",
     "op": [
      [
       "62: 31 dominoes would be needed",
       true,
       "64 − 2 = 62, and each domino covers 2."
      ],
      [
       "63",
       false,
       "We have removed two corners, not one."
      ],
      [
       "60",
       false,
       "2 squares are removed, not 4."
      ]
     ]
    },
    {
     "e": "Place a domino anywhere on the board. Which squares does it cover?",
     "preg": true,
     "tipo": "paso",
     "esq": "Each domino covers one light and one dark square",
     "img": "tablero:domino",
     "op": [
      [
       "Always one light and one dark",
       true,
       "Two neighbouring squares are never the same colour: that is how the board is painted."
      ],
      [
       "It depends on where you put it",
       false,
       "Try it: horizontally or vertically, neighbouring squares change colour."
      ],
      [
       "Two of the same colour",
       false,
       "On a chessboard, neighbouring squares are never the same colour."
      ]
     ]
    },
    {
     "e": "What colour are the two corners we have removed?",
     "preg": true,
     "tipo": "paso",
     "esq": "The corners removed are the same colour",
     "img": "tablero:esquinas",
     "op": [
      [
       "The same colour: both dark",
       true,
       "Opposite corners are on the same diagonal, and a diagonal is all the same colour."
      ],
      [
       "One light and one dark",
       false,
       "Look at the diagonal joining them: it is all the same colour."
      ],
      [
       "The colour doesn't matter",
       false,
       "That is precisely where the key to the proof lies."
      ]
     ]
    },
    {
     "e": "So there are 32 light squares left and only 30 dark ones.",
     "tipo": "paso",
     "esq": "32 light and 30 dark are left",
     "op": [
      [
       "At the start there were 32 of each colour, and the two we removed were dark",
       true,
       ""
      ],
      [
       "Because there are always more light ones",
       false,
       "On the complete board there are 32 of each colour."
      ],
      [
       "We counted them one by one",
       false,
       "There is no need to count: it is enough to know how many there were and which ones we removed."
      ]
     ]
    },
    {
     "e": "But 31 dominoes would cover exactly 31 light and 31 dark squares, and there are only 30 dark ones. ✕",
     "tipo": "choque",
     "esq": "There aren't enough dark ones",
     "op": [
      [
       "Each domino needs a dark square, and there aren't enough dark ones",
       true,
       "There will always be two light squares left over, however you place the dominoes."
      ],
      [
       "It's just that we haven't tried every arrangement",
       false,
       "There is no need to try them: the colour count holds for all of them at once."
      ],
      [
       "You could place a domino diagonally",
       false,
       "Dominoes cover neighbouring squares, horizontally or vertically."
      ]
     ]
    },
    {
     "e": "Therefore <b>it is impossible to cover the board</b>, without having tried a single arrangement. <span class=\"lb-qed\">Q.E.D.</span>",
     "tipo": "conclusion",
     "esq": "Impossible to cover it",
     "op": [
      [
       "The colour count proves it for any arrangement",
       true,
       "A good idea (paying attention to the colours) replaces millions of attempts."
      ],
      [
       "Because nobody has ever managed it",
       false,
       "That would be induction: it doesn't prove that it is impossible."
      ],
      [
       "Because 62 is not a multiple of 4",
       false,
       "Dominoes cover 2 squares, and 62 is even: in terms of numbers there would be no problem."
      ]
     ]
    }
   ],
   "cierre": "This proof doesn't use any formula: only an <em>invariant</em>, something that doesn't change whatever you do (each domino covers one square of each colour). It is a good example of the difference between checking cases and proving: no number of failed attempts proves impossibility; a good reason does."
  },
  {
   "id": "barbero",
   "nom": "The barber paradox",
   "intro": "Bertrand Russell used it to explain a paradox that shook the foundations of mathematics. There is not a single number: only logic.",
   "pasos": [
    {
     "e": "Suppose that in a village there is a barber, who lives in the village, who shaves <b>all</b> the villagers who do not shave themselves, and <b>only</b> them.",
     "tipo": "supuesto",
     "esq": "I assume that such a barber exists",
     "op": [
      [
       "It is what we are going to put to the test: we assume that he exists",
       true,
       ""
      ],
      [
       "It is a fact: there are many villages like that",
       false,
       "That is precisely what we are going to discuss."
      ],
      [
       "It is the definition of a barber",
       false,
       "It is a very special condition, not the ordinary definition."
      ]
     ]
    },
    {
     "e": "First case: if the barber shaves himself, then he does <b>not</b> shave himself.",
     "tipo": "paso",
     "esq": "If he shaves himself, he doesn't shave himself",
     "op": [
      [
       "He only shaves those who do not shave themselves",
       true,
       "If he shaves himself, he is one of those who shave themselves, and he doesn't shave those."
      ],
      [
       "Because a barber never shaves himself",
       false,
       "The story doesn't say that; what counts is the condition ‘only them’."
      ],
      [
       "Because he is tired",
       false,
       "Logic doesn't go into things like that."
      ]
     ]
    },
    {
     "e": "Second case: if the barber does not shave himself, then he <b>does</b> shave himself.",
     "tipo": "paso",
     "esq": "If he doesn't shave himself, he shaves himself",
     "op": [
      [
       "He shaves all those who do not shave themselves",
       true,
       "If he doesn't shave himself, he is one of them, and he shaves all of them."
      ],
      [
       "Because someone has to shave him",
       false,
       "No: what forces it is the condition ‘all’."
      ],
      [
       "It is the same argument as the first case",
       false,
       "It looks similar, but it uses the other half of the condition: ‘all’, not ‘only them’."
      ]
     ]
    },
    {
     "e": "So he shaves himself if and only if he doesn't shave himself: <span class=\"lb-mono\" dir=\"ltr\">p ↔ ¬p</span>. ✕",
     "tipo": "choque",
     "esq": "p ↔ ¬p: contradiction",
     "op": [
      [
       "There are no other cases and both lead to the opposite: it is a contradiction",
       true,
       "A formula of the form p ↔ ¬p is false in every case: check it on the truth tree."
      ],
      [
       "It is a curious paradox, but not a contradiction",
       false,
       "p ↔ ¬p is false whatever happens: that is exactly a contradiction."
      ],
      [
       "There is only a contradiction if the barber shaves himself",
       false,
       "Both cases fail, and there is no third one."
      ]
     ]
    },
    {
     "e": "Therefore <b>such a barber cannot exist</b>. <span class=\"lb-qed\">Q.E.D.</span>",
     "tipo": "conclusion",
     "esq": "That barber does not exist",
     "op": [
      [
       "Reductio ad absurdum: the assumption leads to a contradiction",
       true,
       ""
      ],
      [
       "The barber is a woman, so she doesn't shave",
       false,
       "A classic trick, but it doesn't work: the statement talks about ‘villagers’ who do or don't shave themselves. If she is a barber who shaves her legs, the problem comes back just the same."
      ],
      [
       "The barber goes to another village to get shaved",
       false,
       "Then he doesn't shave himself, and by the condition he would have to shave himself: the contradiction comes back."
      ]
     ]
    }
   ],
   "cierre": "The barber is a home-made version of Russell's paradox (1901): does the set of all sets that do not contain themselves contain itself? With the barber, it is enough to conclude that he doesn't exist; with sets, the blow was harder. Russell wrote to Frege about it in June 1902, when Frege was about to publish the second volume of his <em>Basic Laws of Arithmetic</em> (1903), his attempt to ground arithmetic in logic, and Frege acknowledged in an appendix that the whole edifice was tottering."
  },
  {
   "id": "zenon",
   "nom": "Achilles and Zeno",
   "intro": "Zeno of Elea, like his teacher Parmenides, held that motion is an illusion. One of his arguments (the ‘dichotomy’, which we know through Aristotle, <em>Physics</em> VI, 9): to reach the finishing line you must first cover half the distance, then half of what is left, and so on without end. Can infinitely many stretches be covered?",
   "pasos": [
    {
     "e": "First Achilles covers half the distance: ½.",
     "preg": "How far does he still have to go?",
     "tipo": "paso",
     "esq": "He covers ½",
     "img": "zenon:1",
     "op": [
      [
       "½",
       true,
       ""
      ],
      [
       "¼",
       false,
       "He has covered half: he still has the other half to go."
      ],
      [
       "Nothing",
       false,
       "He has only done half."
      ]
     ]
    },
    {
     "e": "Then half of what is left: ¼. He has done ½ + ¼ = ¾.",
     "preg": "How far does he still have to go now?",
     "tipo": "paso",
     "esq": "He covers ¼ more",
     "img": "zenon:2",
     "op": [
      [
       "¼",
       true,
       "Each stretch is equal to what is still left."
      ],
      [
       "½",
       false,
       "He has done ¾: he still has ¼ to go."
      ],
      [
       "⅛",
       false,
       "That is what he will cover in the next step."
      ]
     ]
    },
    {
     "e": "And so on without end: ½ + ¼ + ⅛ + 1/16 + … After <i>n</i> stretches he still has 1/2<sup><i>n</i></sup> to go.",
     "preg": "What did Zeno conclude?",
     "tipo": "paso",
     "esq": "Infinitely many stretches: impossible?",
     "img": "zenon:5",
     "op": [
      [
       "That there are infinitely many stretches and nobody can complete infinitely many tasks",
       true,
       "That is the premise we are going to examine."
      ],
      [
       "That Achilles arrives tired",
       false,
       "Zeno went much further: he said that Achilles cannot arrive."
      ],
      [
       "That the sum is infinite because there are infinitely many terms",
       false,
       "Zeno implied it, but that is exactly what needs to be checked."
      ]
     ]
    },
    {
     "e": "What is left, 1/2<sup><i>n</i></sup>, ends up smaller than any distance you name, however small. That is why the infinite sum ½ + ¼ + ⅛ + … equals exactly <b>1</b>.",
     "tipo": "paso",
     "esq": "The infinite sum equals 1",
     "op": [
      [
       "No number less than 1 can be the sum: the difference ends up smaller than it",
       true,
       "It is the idea of a limit, which mathematicians made precise in the 19th century."
      ],
      [
       "Because the last stretch is 0",
       false,
       "There is no last stretch: that is why the sum is infinite."
      ],
      [
       "Because Achilles runs very fast",
       false,
       "Speed doesn't matter; the times of each stretch also add up to something finite."
      ]
     ]
    },
    {
     "e": "Therefore infinitely many parts can add up to something finite: <b>Zeno's hidden premise is false</b>, and Achilles arrives.",
     "tipo": "conclusion",
     "esq": "Infinitely many stretches, finite distance",
     "op": [
      [
       "Zeno assumed that infinitely many parts always add up to something infinite",
       true,
       "That premise was not written down, but the argument needs it."
      ],
      [
       "Zeno was wrong because motion can be seen",
       false,
       "Seeing motion doesn't answer the argument: Zeno said that the senses deceive us. You have to find the false premise."
      ],
      [
       "Space cannot be divided",
       false,
       "It can be divided as much as we like; what fails is something else."
      ]
     ]
    }
   ],
   "cierre": "Aristotle replied that those halves are only a <em>potential</em> infinite: the path can be divided without end, but it is not actually divided into infinitely many parts (<em>Physics</em> VIII, 8). Modern mathematics, with the concept of a limit, gives the answer of the sum. Even so, some philosophers think that the underlying question is still alive: can an infinite series of tasks be <em>completed</em>, step by step?"
  },
  {
   "id": "triangulo",
   "nom": "The angles of the triangle",
   "intro": "Euclid proved that the three angles of any triangle add up to 180° (<em>Elements</em>, Book I, Proposition 32). Kant saw in this kind of truth the perfect example of a synthetic a priori judgement. Let's look at the proof, and then at a surprise.",
   "pasos": [
    {
     "e": "Through the vertex <i>C</i> we draw a straight line parallel to the side <i>AB</i>.",
     "tipo": "paso",
     "esq": "I draw the parallel through C",
     "img": "triangulo:paralela",
     "op": [
      [
       "Through a point outside a line there passes one parallel, and only one (fifth postulate)",
       true,
       "It is Euclid's famous fifth postulate, in the form usually given to it today. Remember it: it is going to be important."
      ],
      [
       "Because C is above AB",
       false,
       "The position is not enough: a postulate is needed to guarantee the parallel."
      ],
      [
       "Because every triangle has a parallel side",
       false,
       "No: it is a new line that we draw ourselves."
      ]
     ]
    },
    {
     "e": "The angle that the parallel makes with <i>CA</i>, to the left of <i>C</i>, is equal to angle <i>A</i> (in red).",
     "tipo": "paso",
     "esq": "The left angle is equal to A",
     "img": "triangulo:alternos",
     "op": [
      [
       "They are alternate interior angles between two parallels",
       true,
       "A line that cuts two parallels forms equal alternate angles."
      ],
      [
       "Because both are in the triangle",
       false,
       "The top one is not an angle of the triangle."
      ],
      [
       "Because they look equal in the drawing",
       false,
       "In geometry the drawing helps, but it proves nothing."
      ]
     ]
    },
    {
     "e": "In the same way, the angle to the right of <i>C</i> is equal to angle <i>B</i> (in blue).",
     "tipo": "paso",
     "esq": "The right angle is equal to B",
     "img": "triangulo:llano",
     "op": [
      [
       "Alternate interior angles again, now with the line CB",
       true,
       ""
      ],
      [
       "Because B is equal to A",
       false,
       "A and B need not be equal."
      ],
      [
       "Because the triangle is symmetrical",
       false,
       "The proof holds for any triangle, including non-symmetrical ones."
      ]
     ]
    },
    {
     "e": "The three angles next to <i>C</i> (red + green + blue) form the parallel line: they add up to 180°.",
     "tipo": "paso",
     "esq": "Together they form a straight angle",
     "op": [
      [
       "A straight angle, that of a straight line, measures 180°",
       true,
       ""
      ],
      [
       "Because a circle measures 360° and this is half",
       false,
       "That's true, but what we use is that the three together form a straight line."
      ],
      [
       "Because there are three angles of 60°",
       false,
       "Only in an equilateral triangle; the proof holds for all of them."
      ]
     ]
    },
    {
     "e": "Therefore <i>A</i> + <i>B</i> + <i>C</i> = 180° <b>in any triangle</b>. <span class=\"lb-qed\">Q.E.D.</span>",
     "tipo": "conclusion",
     "esq": "A + B + C = 180°",
     "op": [
      [
       "Red, blue and green are A, B and C, and they add up to a straight angle",
       true,
       "And it holds for every triangle, without measuring any: that is why Kant said it is a priori."
      ],
      [
       "We measured it with a protractor",
       false,
       "Measuring would give an approximate result, and only for that triangle."
      ],
      [
       "Because all triangles are the same",
       false,
       "They aren't; the proof doesn't depend on their shape."
      ]
     ]
    }
   ],
   "cierre": "The proof doesn't measure any triangle and holds for all of them. But does it also hold on a curved surface, like that of the Earth? Look below before going on.",
   "esfera": [
    [
     "Step 1: the fifth postulate (the single parallel)",
     true,
     "Exactly. On the sphere, the ‘straight lines’ are great circles, and any two of them always intersect: there are no parallels. Without step 1 everything else collapses. In the 19th century, Lobachevsky and Bolyai (and before them, without publishing it, Gauss) built a consistent geometry without the fifth postulate, and Riemann another one; in the 20th century, Einstein's general relativity described physical space-time as curved."
    ],
    [
     "Step 2: the alternate angles",
     false,
     "The alternate angles depend on there being parallels: the failure comes earlier."
    ],
    [
     "Step 4: the straight angle measures 180°",
     false,
     "That still holds on the sphere; the problem lies in being able to draw the parallel."
    ]
   ]
  },
  {
   "id": "anselmo",
   "nom": "The ontological argument",
   "intro": "Saint Anselm (<em>Proslogion</em>, ch. 2, around 1077-1078) set out to prove that God exists without looking at the world, just by thinking. His argument has the same form as the proof about √2: a reductio ad absurdum. Follow the steps and, at the end, examine the premises.",
   "pasos": [
    {
     "e": "God is ‘that than which nothing greater can be thought’.",
     "tipo": "paso",
     "esq": "Definition of God",
     "op": [
      [
       "It is the definition Anselm starts from, and he believes that even the atheist accepts it",
       true,
       "Anselm quotes the Psalm (14:1): ‘The fool hath said in his heart, There is no God.’ The fool understands the word, even though he denies that God exists."
      ],
      [
       "We proved it earlier",
       false,
       "It isn't proved: it is the starting point."
      ],
      [
       "It is what the Bible says",
       false,
       "Anselm also wants to convince those who don't accept the Bible; that is why he starts only from a definition."
      ]
     ]
    },
    {
     "e": "Whoever understands this definition has God at least <b>in their understanding</b>.",
     "tipo": "paso",
     "esq": "God exists in the understanding",
     "op": [
      [
       "To understand something is to have it in the understanding, even if it doesn't exist outside it",
       true,
       "Like the picture the painter imagines before painting it (this is Anselm's own example)."
      ],
      [
       "Because God is everywhere",
       false,
       "That would take for granted what we want to prove."
      ],
      [
       "Because everything that is understood exists",
       false,
       "No: we understand unicorns and they don't exist. Anselm only says that they are in the understanding."
      ]
     ]
    },
    {
     "e": "Suppose that God exists only in the understanding, and not in reality.",
     "tipo": "supuesto",
     "esq": "I assume: he exists only in thought",
     "op": [
      [
       "It is what the fool holds: we assume the opposite of what we want to prove",
       true,
       ""
      ],
      [
       "It is what Anselm thinks",
       false,
       "Anselm thinks the opposite: he assumes it in order to refute it."
      ],
      [
       "It is obvious",
       false,
       "It is just an assumption, to see where it leads."
      ]
     ]
    },
    {
     "e": "Then something greater could be thought: that same being, but also existing in reality.",
     "tipo": "paso",
     "esq": "Something greater could be thought",
     "op": [
      [
       "Anselm's premise: existing in reality is greater than existing only in thought",
       true,
       "Look carefully at this premise: it is the one that has caused the most debate."
      ],
      [
       "Because what is real is always larger in size",
       false,
       "‘Greater’ does not refer to size, but to perfection or greatness."
      ],
      [
       "Because we can think anything",
       false,
       "That's not enough: we need to compare and say which is greater."
      ]
     ]
    },
    {
     "e": "But then ‘that than which nothing greater can be thought’ would be something than which something greater can be thought. ✕",
     "tipo": "choque",
     "esq": "Contradiction with the definition",
     "op": [
      [
       "It contradicts the definition in step 1",
       true,
       ""
      ],
      [
       "There is no contradiction: there are simply two gods",
       false,
       "The second would be greater than the first, and the first would no longer meet the definition."
      ],
      [
       "It contradicts the Bible",
       false,
       "The contradiction is a logical one, with the definition itself."
      ]
     ]
    },
    {
     "e": "Therefore God exists not only in the understanding, but <b>also in reality</b>.",
     "tipo": "conclusion",
     "esq": "God exists in reality",
     "op": [
      [
       "Reductio ad absurdum: the assumption in step 3 is false",
       true,
       "The form is valid, exactly as with √2. If the conclusion is false, some premise has to be false. Which one? Look at the objections below."
      ],
      [
       "Because we have seen it",
       false,
       "The interesting thing about the argument is that it doesn't look at the world: it is a priori."
      ],
      [
       "Because most people believe it",
       false,
       "Anselm doesn't appeal to anyone's opinion."
      ]
     ]
    }
   ],
   "cierre": "An argument with a valid form need not have true premises. Descartes revived this argument in the Fifth <em>Meditation</em>; Kant called it ‘ontological’ and rejected it. Below you have the three classic objections: decide which step each one targets.",
   "objeciones": [
    {
     "quien": "Gaunilo of Marmoutier (11th c.), <em>On Behalf of the Fool</em>",
     "txt": "With the same reasoning you could prove that the most perfect island that can be thought of exists, and that is absurd. Something is wrong with the argument, even if we don't know where.",
     "nota": "Gaunilo doesn't point to a particular step: he attacks the <em>form</em> of the argument with a parody. If a way of reasoning proves absurd things, it is not reliable. Anselm replied that his argument only works for the greatest being, not for islands."
    },
    {
     "quien": "Thomas Aquinas (13th c.), <em>Summa Theologiae</em> I, q. 2, a. 1, ad 2",
     "txt": "Not everyone who hears the word ‘God’ understands by it ‘that than which nothing greater can be thought’; and even if they do, all that follows is that this is in their understanding, not that it exists in reality.",
     "nota": "It targets steps 1 and 2: not everyone accepts the definition, and understanding it only puts God in the understanding. To move on to reality, you would first have to grant that something than which nothing greater can be thought exists in reality, which is exactly what is in question."
    },
    {
     "quien": "Kant (18th c.), <em>Critique of Pure Reason</em>, A 599 / B 627",
     "txt": "‘Being’ is not a real predicate: a hundred real thalers do not contain a single thaler more than a hundred thalers thought of. Existence adds nothing to the concept.",
     "nota": "It targets step 4: if existing is not one more perfection, the being ‘that also exists’ is not greater than the one thought of, and the contradiction disappears."
    }
   ]
  }
 ]
};
