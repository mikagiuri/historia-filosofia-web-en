"use strict";
/* ===== Rincón de lógica · «Lógica moderna»: Formalizar y Reglas de inferencia (12-10-2026) =====
   Petición del profesor: el Rincón tenía lógica proposicional (tablas de verdad, puertas) pero sin pestaña de lógica
   moderna. Las pestañas de arriba pasan a ser «Lógica clásica» (silogismos, cuadrado, conjuntos) y «Lógica moderna»
   (tablas de verdad, formalizar, reglas de inferencia, cuantificadores, puertas lógicas); ver logRender en logicaview.js.
   · Cuantificadores: A, E, I, O en lógica de predicados, un «mundo pequeño» para evaluarlas (sujeto vacío incluido) y
     un ejercicio de elegir la fórmula de cada frase.
   · Formalizar: frases en castellano que el alumno pasa a fórmula con el teclado de conectivas; se corrige por
     EQUIVALENCIA (misma tabla de verdad), así que vale cualquier forma correcta, y si no lo es se enseña la fila en
     que difieren. Cada frase trae su pista y su caso trampa («solo si», «a menos que», «o… o…», «ni… ni…»).
   · Reglas de inferencia: las reglas válidas y las falacias formales que se les parecen, con su forma, un ejemplo y
     un botón para comprobarlas en la tabla de verdad; y un ejercicio «¿regla o trampa?» con argumentos en castellano.
   Usa las funciones de logicaview.js (logParse, logVars, logFilas, logEval, logStr, logEsc, logTeclado, LOG).
   Textos en LOGM_TXT y en los datos de abajo: cadenas enteras, que traduce el diccionario de interfaz (ui/<lang>.json). */
const LOGM_TXT = {
  tabClasica: "Classical logic", tabModerna: "Modern logic", tabFormalizar: "Formalise", tabInferencia: "Rules of inference",
  introFormalizar: "Formalising means translating a sentence into symbols: each simple sentence is a letter (p, q, r…) and the words that join them (‘not’, ‘and’, ‘or’, ‘if… then’) are connectives. Type the formula with the keyboard and click ‘Check’: any equivalent formula is accepted, because its truth table is compared with that of the answer.",
  introInferencia: "A rule of inference is a way of reasoning that never fails: if the premises are true, the conclusion is true as well. Some forms look very like them, but they are not valid: these are the formal fallacies. Here you have both, with an example of each, and an exercise to tell them apart.",
  guiaTitF: "How each word is translated",
  guiaF: "<ul><li><b>¬</b> (not): ‘not’, ‘it is not true that’, ‘it is false that’.</li><li><b>∧</b> (and): ‘and’, ‘but’, ‘although’, ‘however’, ‘moreover’. In logic they all say the same thing: that both things are true.</li><li><b>∨</b> (or): ‘or’. In logic it is inclusive (one, the other or both); if the sentence rules out both at once (‘either… or…, but not both’), you have to add that.</li><li><b>→</b> (if…, then): ‘if p, q’, ‘q if p’, ‘when p, q’, ‘whenever p, q’, ‘p is enough for q’ (p is a <i>sufficient</i> condition).</li><li><b>Trick case</b>: ‘p only if q’ and ‘q is necessary for p’ are written <b>p → q</b>: q is a <i>necessary</i> condition, not a sufficient one.</li><li><b>↔</b> (if and only if): ‘p if and only if q’, ‘p when and only when q’.</li><li><b>Other traps</b>: ‘neither p nor q’ is ¬p ∧ ¬q; ‘p unless q’ is ¬q → p (or, which comes to the same thing, p ∨ q).</li><li><b>‘Therefore’ is not a connective</b>: ‘I think, therefore I am’ does not assert ‘if I think, I am’, but <i>draws</i> a conclusion from a premise. That is an argument: it is studied in ‘Rules of inference’.</li></ul>",
  diccionario: "Dictionary:", tuFormula: "Your formula", comprobar: "Check", solucion: "Show the answer", pista: "Hint",
  bien: "Correct! Your formula is equivalent to the answer: {s}", mal: "Not equivalent. For example, when {fila}, your formula gives {a} and the sentence says {b}.",
  verdadero: "true", falso: "false", vacia: "Write a formula.", sol: "Answer: {s}", ejercicio: "Sentence {n} of {m}",
  validas: "Valid rules", falacias: "Formal fallacies (not valid)", forma: "Form", ejemplo: "Example", porQue: "Why it fails",
  verTabla: "Check it in the truth table", ejTit: "Rule or trap?", ejAyuda: "Read each argument and choose which form it has. There is no mark: what counts is understanding why.",
  acierto: "Well done! It is {r}.", fallo: "No: es {r}.", formaArg: "Its form: {f}"
};
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
const LOGM_FZ = [
  { f: "If it rains, the ground gets wet.", d: [["p", "it rains"], ["q", "the ground gets wet"]], s: "p → q", pista: "‘If p, q’: what comes after ‘if’ is the antecedent." },
  { f: "It is raining and I don’t have an umbrella.", d: [["p", "it rains"], ["q", "I have an umbrella"]], s: "p ∧ ¬q", pista: "The letter stands for the affirmative sentence; the ‘not’ is written with ¬." },
  { f: "If it rains and I don’t have an umbrella, I get wet.", d: [["p", "it rains"], ["q", "I have an umbrella"], ["r", "I get wet"]], s: "(p ∧ ¬q) → r", pista: "First the whole antecedent, in brackets; then the arrow." },
  { f: "I neither study nor work.", d: [["p", "I study"], ["q", "I work"]], s: "¬p ∧ ¬q", pista: "‘Neither… nor…’ denies both things at once." },
  { f: "I will go on the trip only if it doesn’t rain.", d: [["p", "I go on the trip"], ["q", "it rains"]], s: "p → ¬q", pista: "Trick case: ‘only if’ introduces the necessary condition, which goes after the arrow." },
  { f: "It is necessary to be of legal age in order to vote.", d: [["p", "you vote"], ["q", "you are of legal age"]], s: "p → q", pista: "If you vote, then you must be of legal age; but being of legal age is not enough to vote." },
  { f: "Pressing the button is enough for the light to come on.", d: [["p", "you press the button"], ["q", "the light comes on"]], s: "p → q", pista: "‘p is enough’ says that p is a sufficient condition: it goes before the arrow." },
  { f: "We will go out unless it rains.", d: [["p", "we go out"], ["q", "it rains"]], s: "¬q → p", pista: "Trick case: ‘p unless q’ means ‘if not q, p’." },
  { f: "I will call you if and only if you are late.", d: [["p", "I call you"], ["q", "you are late"]], s: "p ↔ q", pista: "‘If and only if’ joins two conditionals: p → q and q → p." },
  { f: "Either you study or you work, but not both.", d: [["p", "you study"], ["q", "you work"]], s: "(p ∨ q) ∧ ¬(p ∧ q)", pista: "Trick case: the logical ‘or’ is inclusive; here you have to add that the two do not both happen." },
  { f: "It is not true that, if it rains, the match is called off.", d: [["p", "it rains"], ["q", "the match is called off"]], s: "¬(p → q)", pista: "The ‘it is not true that’ denies the whole conditional: it goes in front of the brackets." },
  { f: "Epicurus: ‘When we are here, death is not; and when death is here, we are no longer.’", d: [["p", "we are here"], ["q", "death is here"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "They are two conditionals joined by ‘and’. (Letter to Menoeceus, 125.)" }
];
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "true" : "false"), b: logmT(logEval(b, dif) ? "true" : "false") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
const LOGM_REGLAS = [
  { k: "mp", n: "Modus ponens", p: "p → q; p", c: "q", ej: "If it rains, the ground gets wet. It is raining. Therefore the ground gets wet." },
  { k: "mt", n: "Modus tollens", p: "p → q; ¬q", c: "¬p", ej: "If it rains, the ground gets wet. The ground is not wet. Therefore it is not raining." },
  { k: "sh", n: "Hypothetical syllogism", p: "p → q; q → r", c: "p → r", ej: "If I study, I pass; if I pass, I go on a trip. Therefore, if I study, I go on a trip." },
  { k: "sd", n: "Disjunctive syllogism", p: "p ∨ q; ¬p", c: "q", ej: "Either she is at home or she is in class. She is not at home. Therefore she is in class." },
  { k: "dc", n: "Constructive dilemma", p: "p → r; q → r; p ∨ q", c: "r", ej: "If you go by train, you will be late; if you go by bus, you will be late too. You will go by train or by bus. Therefore you will be late." }
];
const LOGM_FALACIAS = [
  { k: "ac", n: "Affirming the consequent", p: "p → q; q", c: "p", ej: "If it rains, the ground gets wet. The ground is wet. Therefore it has rained.", por: "The ground may be wet for another reason: someone has watered it. The sufficient condition is not the only possible one." },
  { k: "na", n: "Denying the antecedent", p: "p → q; ¬p", c: "¬q", ej: "If you study, you pass. You have not studied. Therefore you will not pass.", por: "The rule does not say what happens if you don’t study: you might pass for another reason." },
  { k: "ad", n: "Affirming a disjunct", p: "p ∨ q; p", c: "¬q", ej: "Either we go to the cinema or we go out for dinner. We are going to the cinema. Therefore we are not going out for dinner.", por: "The logical ‘or’ is inclusive: you can do both. It would only be valid if the sentence ruled out both at once." },
  { k: "nc", n: "Denying a conjunct", p: "¬(p ∧ q)", c: "¬p", ej: "It is not true that they are at home and at school at the same time. Therefore they are not at home.", por: "It is enough for one of the two not to hold: they can be at home and not at school. From ¬(p ∧ q) only ¬p ∨ ¬q follows (De Morgan)." },
  { k: "cc", n: "Converting the conditional", p: "p → q", c: "q → p", ej: "If it is a dog, it is a mammal. Therefore, if it is a mammal, it is a dog.", por: "That p is enough for q does not mean that q is enough for p: a cat is a mammal too. It is the same mistake as confusing ‘if’ with ‘only if’." }
];
const LOGM_EJ = [
  { t: "If Socrates is a human being, he is mortal. Socrates is a human being. Therefore Socrates is mortal.", r: "mp" },
  { t: "If there is fire, there is oxygen. On the Moon there is no oxygen. Therefore on the Moon there is no fire.", r: "mt" },
  { t: "If a government violates the rights of its citizens, the people have the right to resist. The people resist. Therefore the government has violated their rights.", r: "ac" },
  { t: "Either the culprit is the butler or it is the cook. The butler has an alibi and is not the culprit. Therefore it is the cook.", r: "sd" },
  { t: "If you make an effort, you improve; if you improve, you pass. Therefore, if you make an effort, you pass.", r: "sh" },
  { t: "If it rains, the match is called off. It is not raining. Therefore the match is not called off.", r: "na" },
  { t: "If I doubt, I think. I doubt. Therefore I think.", r: "mp" },
  { t: "Ana studies Philosophy or History. She studies Philosophy. Therefore she does not study History.", r: "ad" },
  { t: "If the soul were material, it would decay like the body. The soul does not decay. Therefore the soul is not material.", r: "mt" },
  { t: "If the theory is good, its predictions come true. Its predictions come true. Therefore the theory is good.", r: "ac" },
  { t: "If it rains, there are clouds. Therefore, if there are clouds, it rains.", r: "cc" },
  { t: "It is not true that the accused is guilty and acted alone. Therefore the accused is not guilty.", r: "nc" }
];
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    logmPuedeNoPuede() +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_TXT = {
  tabCuantificadores: "Quantifiers",
  introCuantificadores: "Truth-table logic cannot analyse ‘All humans are mortal; Socrates is human; therefore Socrates is mortal’, because it does not see what is inside each sentence. Frege (1879) added predicates (Hx = ‘x is human’) and quantifiers: ∀x, ‘for all x’, and ∃x, ‘there is at least one x’. With them you can write Aristotle’s four propositions and much more besides.",
  cqCuatro: "Aristotle’s four propositions", cqProp: "Proposition", cqFormula: "Formula", cqLee: "Read as",
  cqTrampa: "Trick case: ‘All S are P’ is not ∀x (Sx ∧ Px), which would say that everything is both S and P; and ‘Some S are P’ is not ∃x (Sx → Px), which is true as soon as there is something that is not S.",
  cqNeg: "Negating a quantifier: ¬∀x Px is equivalent to ∃x ¬Px (‘not all’ = ‘some are not’), and ¬∃x Px is equivalent to ∀x ¬Px (‘none’ = ‘all are not’). That is why A and O are contradictories, and so are E and I.",
  cqMundo: "A small world", cqMundoAyuda: "Five individuals (a, b, c, d, e). Mark which are S and which are P and see which propositions turn out true.",
  cqInd: "Individual", cqVacio: "Try leaving S empty: then ‘All S are P’ and ‘No S are P’ are both true at once, and ‘Some S are P’ is false. In modern logic, the universal proposition does not take it for granted that there are any S: this is the existential import of Topic 4.",
  cqOrdenTit: "A quantifier fallacy: changing the order",
  cqOrden: "‘Everyone has a mother’ is ∀x ∃y Myx: for each person x there is someone y who is their mother. ‘There is a mother of everyone’ is ∃y ∀x Myx: there is a y who is the mother of every x. Changing the order of ∀ and ∃ changes what is said: the second does not follow from the first.",
  cqOrdenMadre: "their mother", cqOrdenContra: "Counterexample: in this world each person has their own mother, so ∀x ∃y Myx is true; but none of them is the mother of all three, so ∃y ∀x Myx is false. A true premise and a false conclusion: the inference is not valid. (The other way round does work: if there is a mother of everyone, each person has a mother.)",
  cqOrdenFilo: "In philosophy: it is debated whether Aristotle makes this leap at the beginning of the ‘Nicomachean Ethics’ (I 2), because from the fact that every action aims at some end it does not follow that there is a single end at which all actions aim. And some critics of cosmological arguments see it in the step from ‘everything has a cause’ to ‘there is a cause of everything’.",
  cqTesti: "Shown by: {x}", cqContra: "Fails for: {x}", cqNadie: "there are none", cqSinS: "true because there is no S",
  cqPresets: "Example worlds:", cqP1: "All S are P", cqP2: "No S are P", cqP3: "Some are and some are not", cqP4: "There is no S",
  cqEjTit: "Which formula is it?", cqEjAyuda: "Choose the formula that says the same as the sentence. The capital letter is the predicate and the lower-case letter, a particular individual.",
  cqBien: "Correct!", cqMal: "No.", cqEjemplo: "Worked example: Socrates’ syllogism",
  cqEjemploTxt: "All humans are mortal: ∀x (Hx → Mx). Socrates is human: Hs. Therefore Socrates is mortal: Ms. From the first premise follows Hs → Ms (what holds for every x holds for Socrates: ‘universal instantiation’), and from Hs → Ms and Hs follows Ms by modus ponens."
};
const LOGM_CQ4 = [
  ["A", "All S are P", "∀x (Sx → Px)", "for every x, if x is S, then x is P"],
  ["E", "No S are P", "∀x (Sx → ¬Px)", "for every x, if x is S, then x is not P (or: ¬∃x (Sx ∧ Px))"],
  ["I", "Some S are P", "∃x (Sx ∧ Px)", "there is at least one x that is S and is P"],
  ["O", "Some S are not P", "∃x (Sx ∧ ¬Px)", "there is at least one x that is S and is not P"]
];
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
const LOGM_CQ_PRE = {
  p1: [[1, 1], [1, 1], [0, 1], [0, 0], [1, 1]], p2: [[1, 0], [1, 0], [0, 1], [0, 1], [0, 0]],
  p3: [[1, 1], [1, 0], [0, 1], [1, 1], [0, 0]], p4: [[0, 1], [0, 0], [0, 1], [0, 0], [0, 1]]
};
const LOGM_CQ_EJ = [
  { f: "All philosophers are curious.", d: "F = philosopher, C = curious", o: ["∀x (Fx → Cx)", "∀x (Fx ∧ Cx)", "∃x (Fx ∧ Cx)", "∀x (Cx → Fx)"], r: 0, por: "Universal affirmative (A). With ∧ it would say that everyone is a philosopher and curious; with the arrow the other way round, that everyone curious is a philosopher." },
  { f: "Some sophists charged for teaching.", d: "S = sophist, C = charged for teaching", o: ["∃x (Sx → Cx)", "∃x (Sx ∧ Cx)", "∀x (Sx → Cx)"], r: 1, por: "Particular affirmative (I): there is someone who is a sophist and charged. With the arrow it would be enough for there to be something that was not a sophist." },
  { f: "No god is mortal.", d: "D = god, M = mortal", o: ["¬∀x (Dx → Mx)", "∀x (¬Dx → Mx)", "∀x (Dx → ¬Mx)"], r: 2, por: "Universal negative (E). ¬∃x (Dx ∧ Mx) is also correct: ‘there is nothing that is both a god and mortal’." },
  { f: "Not all Greeks were philosophers.", d: "G = Greek, F = philosopher", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∃x (Gx ∧ Fx)"], r: 1, por: "Trick case: ‘not all’ is not ‘none’. It is equivalent to ∃x (Gx ∧ ¬Fx): some Greek was not a philosopher (O)." },
  { f: "Only citizens voted in the assembly.", d: "V = voted in the assembly, C = citizen", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Trick case: ‘only Cs’ puts the necessary condition after the arrow: everyone who voted was a citizen (not every citizen voted)." },
  { f: "There is something that has not been caused by anything else.", d: "C = caused by something else", o: ["¬∃x Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "There is at least one x that is not caused: this is the idea of Aristotle’s prime mover or of Thomas Aquinas’s first cause." },
  { f: "Socrates is mortal.", d: "M = mortal, s = Socrates", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "A particular individual is written with a lower-case letter (a constant): no quantifier is needed." },
  { f: "Everyone who thinks exists.", d: "P = thinks, E = exists", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Universal affirmative (A). To derive ‘I exist’ you would also need the premise ‘I think’ (Pi) and universal instantiation, as with Socrates." },
  { f: "Everyone has a mother.", d: "M = ‘y is the mother of x’", o: ["∃y ∀x Myx", "∀x ∃y Myx", "∀x ∀y Myx"], r: 1, por: "For each person there is some mother (she may be different in each case). ∃y ∀x Myx would say that there is a single mother of everyone: this is the quantifier shift." },
  { f: "There is someone whom everyone admires.", d: "A = ‘x admires y’", o: ["∀x ∃y Axy", "∃y ∀x Axy", "∃x ∃y Axy"], r: 1, por: "There is a y such that everyone admires y. ∀x ∃y Axy would only say that each person admires someone, perhaps different people." }
];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    logmGeneralizacion() +
    /* (12-10) la falacia del cambio de orden de los cuantificadores, con su contraejemplo */
    '<div class="lg-panel"><h2>' + logmT("cqOrdenTit") + "</h2><p>" + logmT("cqOrden") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th>x</th><th>' + logmT("cqOrdenMadre") + "</th></tr></thead><tbody>" +
      [["a", "m1"], ["b", "m2"], ["c", "m3"]].map(([x, y]) => "<tr><td>" + x + "</td><td>" + y + "</td></tr>").join("") + '</tbody></table></div><p class="lg-nota">' + logmT("cqOrdenContra") + '</p><p class="lg-nota">' + logmT("cqOrdenFilo") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}

Object.assign(LOGM_TXT, LOGM_CQ_TXT);

/* ---------- (12-10) lo que faltaba: conversión ilícita, generalización apresurada y «lo que la lógica puede y no puede refutar» ---------- */
const LOGM_EXTRA_TXT = {
  convTit: "Conversion: can a proposition be turned round?",
  convIntro: "To convert is to swap the subject and the predicate. Sometimes truth is preserved and sometimes it is not: turning a proposition round when you cannot is the fallacy of illicit conversion.",
  convProp: "Proposition", convConv: "Converse", convVale: "Valid?", convEj: "Example",
  convSi: "Sí", convNo: "No: illicit conversion", convAcc: "Only ‘Some P is S’ (if there are any S)",
  genTit: "From some to all: hasty generalisation",
  gen: "From ∃x (Sx ∧ Px), ‘some S is P’, it does not follow that ∀x (Sx → Px), ‘every S is P’. Logic shows this with a counterexample: in the world ‘Some are and some are not’, the I is true and the A is false. How many cases you need in order to generalise prudently is no longer a question of deductive logic but of induction: no number of cases guarantees it.",
  genVer: "See it in the small world",
  lpTit: "What logic can and cannot refute",
  lpIntro: "The formal fallacies above are refuted by their form: a single counterexample is enough. Other fallacies have no flaw in their form, but formalising them helps you to see them; and others cannot be refuted by logic, because the problem lies in the content.",
  lpAyuda: "Logic helps, but it is not enough", lpNo: "Logic does not refute them", lpQueVe: "What logic shows",
  lpNoIntro: "Their form may be valid or they may not even be an argument: the flaw lies in whether the premises are true or relevant. To detect them you have to ask about the content.",
  lpDuelo: "Practise them in the Duel of Reasons →"
};
const LOGM_CONV = [
  ["A", "All S are P", "Every P is S", "no", "Every dog is a mammal; but not every mammal is a dog."],
  ["E", "No S are P", "No P is S", "si", "No fish is a mammal; therefore no mammal is a fish."],
  ["I", "Some S are P", "Some P is S", "si", "Some philosopher is Greek; therefore some Greek is a philosopher."],
  ["O", "Some S are not P", "Some P is not S", "no", "Some animal is not a dog; but it does not follow that some dog is not an animal."]
];
const LOGM_AYUDA = [
  { n: "Equivocation", ej: "The end of a thing is its perfection. Death is the end of life. Therefore death is the perfection of life.", ve: "When formalising, ‘end’ as ‘purpose’ and ‘end’ as ‘termination’ receive different letters: a fourth term appears and the syllogism is no longer valid." },
  { n: "Begging the question", ej: "This book tells the truth, because the book itself says so.", ve: "The argument is valid (p ⊢ p), but the conclusion was already in the premise: it proves nothing that was not taken for granted." },
  { n: "False dilemma", ej: "Either you are with me or you are against me. You are not with me. Therefore you are against me.", ve: "The form is a disjunctive syllogism, which is valid. What fails is the premise p ∨ q: there are more options." },
  { n: "Slippery slope", ej: "If we let people use their mobiles at break time, they will use them in class; if they use them in class, nobody will pay attention; if nobody pays attention, everybody will fail.", ve: "The chain p → q, q → r, r → s is valid (hypothetical syllogism), but each conditional is, at most, probable: probability is lost at every step." },
  { n: "Enthymeme", ej: "It is expensive, so it must be good.", ve: "For it to be valid, a premise is missing: ‘everything expensive is good’. Formalising brings it to light, and then you can see that it is false." }
];
const LOGM_NOFORMAL = [
  ["Attack on the person (ad hominem)", "It attacks the speaker, not what is said."],
  ["False authority", "It rests the conclusion on someone who is not an expert in that field."],
  ["Appeal to the majority (ad populum)", "That many people believe something does not make it true."],
  ["Appeal to pity or fear", "It seeks an emotion instead of giving a reason."],
  ["Straw man", "It refutes a distorted version of what the other person said."],
  ["False cause", "That one thing happens after another does not prove that the first causes the second."]
];
function logmConversion(){
  return '<div class="lg-panel"><h2>' + logmT("convTit") + '</h2><p class="lg-nota">' + logmT("convIntro") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("convProp") + "</th><th>" + logmT("convConv") + "</th><th>" + logmT("convVale") + "</th><th>" + logmT("convEj") + "</th></tr></thead><tbody>" +
    LOGM_CONV.map(([t, p, c, v, e]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + "</td><td>" + logEsc(c) + '</td><td class="lg-' + (v === "si" ? "v" : "f") + '">' + logmT(v === "si" ? "convSi" : "convNo") + (t === "A" ? "<br><small>" + logmT("convAcc") + "</small>" : "") + "</td><td>" + logEsc(e) + "</td></tr>").join("") + "</tbody></table></div></div>";
}
function logmGeneralizacion(){
  return '<div class="lg-panel"><h2>' + logmT("genTit") + "</h2><p>" + logmT("gen") + '</p><p><button type="button" class="btn ghost" data-cqpre="p3">' + logmT("genVer") + "</button></p></div>";
}
function logmPuedeNoPuede(){
  const duelo = document.getElementById("duelo") ? '<p><button type="button" class="btn ghost" data-igo="duelo" data-iarg="">' + logmT("lpDuelo") + "</button></p>" : "";
  return '<div class="lg-panel"><h2>' + logmT("lpTit") + '</h2><p class="lg-nota">' + logmT("lpIntro") + "</p><h3>" + logmT("lpAyuda") + '</h3><div class="lg-reglas">' +
    LOGM_AYUDA.map(x => '<div class="lg-regla lg-medio"><h3>' + logEsc(x.n) + '</h3><p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p><p><b>" + logmT("lpQueVe") + ":</b> " + logEsc(x.ve) + "</p></div>").join("") + "</div>" +
    "<h3>" + logmT("lpNo") + '</h3><p class="lg-nota">' + logmT("lpNoIntro") + '</p><ul class="lg-nof">' + LOGM_NOFORMAL.map(([n, d]) => "<li><b>" + logEsc(n) + ":</b> " + logEsc(d) + "</li>").join("") + "</ul>" + duelo + "</div>";
}
Object.assign(LOGM_TXT, LOGM_EXTRA_TXT);


/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
(function(){
  const box = document.getElementById("logicabox"); if (!box) return;
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // las pestañas nuevas usan logT() de logicaview.js
  logRender();
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.cqpre){ LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c){ c.innerHTML = logmCqMundo(); if (b.closest(".lg-panel") !== c.closest(".lg-panel")) c.scrollIntoView({ block: "center" }); } }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
