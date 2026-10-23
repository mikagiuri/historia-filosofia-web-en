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
  { f: "Epicurus: ‘When we are here, death is not; and when death is here, we are no longer.’", d: [["p", "we are here"], ["q", "death is here"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "They are two conditionals joined by ‘and’. (Letter to Menoeceus, 125.)" },
  /* (17-10) caso «Mónica» con cinco letras (docs/34): la ficha de Argumentos clásicos lo formaliza con tres */
  { f: "Monica, to the letter: ‘If someone desires good things and has them, they are happy; but if they desire bad things, even though they have them, they are unhappy’.", d: [["p", "is happy"], ["q", "desires good things"], ["r", "has good things"], ["s", "desires bad things"], ["t", "has bad things"]], s: "((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)", pista: "‘But’ and ‘even though’ are written with ∧: ‘even though they have them’ does not deny that they have them, it asserts it. Compare it with the three-letter reading in Monica’s card (Classic arguments): someone who desires what is good and what is bad, has everything and is happy? One formula admits it and the other does not." },
  /* (22-10, nube) T2a: diez frases más, con casos trampa («a menos que», «solo si» delante, «siempre que», «aunque» + subjuntivo, «salvo que») */
  { f: "I won’t go unless you come with me.", d: [["p", "I go"], ["q", "you come with me"]], s: "¬q → ¬p", pista: "Trick case: ‘not p unless q’ means ‘if not q, not p’. It is equivalent to p → q: your coming with me is a necessary condition for my going." },
  { f: "Only if you study will you pass.", d: [["p", "you pass"], ["q", "you study"]], s: "p → q", pista: "Trick case: even though ‘only if’ comes at the beginning, it still marks the necessary condition, which goes after the arrow. If you pass, it means you have studied." },
  { f: "Whenever you study, you pass.", d: [["p", "you pass"], ["q", "you study"]], s: "q → p", pista: "With the indicative, «whenever» means «every time that», that is, «if»: studying is a sufficient condition and goes before the arrow. Compare it with the previous one. Trick case: with the subjunctive («you will pass whenever you study») it can be read as «only if you study», and then it would be p → q." },
  { f: "It is neither raining nor sunny, but it is cold.", d: [["p", "it rains"], ["q", "it is sunny"], ["r", "it is cold"]], s: "¬p ∧ ¬q ∧ r", pista: "«Neither… nor…» negates the first two and «but» is another conjunction: ¬p, ¬q and r are asserted." },
  { f: "It is not true that it rains or snows.", d: [["p", "it rains"], ["q", "it snows"]], s: "¬(p ∨ q)", pista: "The whole disjunction is denied: it does not rain and it does not snow. By De Morgan, ¬p ∧ ¬q is also correct." },
  { f: "If it isn’t Monday, there is no logic class.", d: [["p", "it is Monday"], ["q", "there is a logic class"]], s: "¬p → ¬q", pista: "Trick case: it is equivalent to q → p (if there is a logic class, it is Monday), not to p → q: the sentence does not promise a class every Monday." },
  { f: "Even if it rains, we will go out.", d: [["p", "it rains"], ["q", "we go out"]], s: "(p → q) ∧ (¬p → q)", pista: "Trick case: ‘even if’ does not assert that it rains; it says that we will go out whether it rains or not. The formula is equivalent to plain q. (‘Although it is raining, we are going out’ would be p ∧ q.)" },
  { f: "If it rains, I stay at home; and if not, I go to the park.", d: [["p", "it rains"], ["q", "I stay at home"], ["r", "I go to the park"]], s: "(p → q) ∧ (¬p → r)", pista: "They are two conditionals joined by ‘and’; the ‘if not’ means ‘if it does not rain’." },
  { f: "Passing the exam is necessary and sufficient for moving up a year.", d: [["p", "you pass the exam"], ["q", "you move up a year"]], s: "p ↔ q", pista: "Sufficient: p → q. Necessary: q → p. Together they make the biconditional." },
  { f: "If it rains, I don’t go out, unless I have an umbrella.", d: [["p", "it rains"], ["q", "I go out"], ["r", "I have an umbrella"]], s: "(p ∧ ¬r) → ¬q", pista: "Trick case: ‘unless’ means ‘if not’: if it rains and I don’t have an umbrella, I don’t go out. p → (¬r → ¬q), which is equivalent, is also correct." }
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
  { t: "It is not true that the accused is guilty and acted alone. Therefore the accused is not guilty.", r: "nc" },
  /* (22-10, nube) T2b: ocho más; cinco son trampas (ac, na, ad, cc, nc) */
  { t: "If the museum is open, there is a light on at the entrance. There is no light on at the entrance. Therefore the museum is not open.", r: "mt" },
  { t: "If Plato is right, the soul is immortal. The soul is immortal. Therefore Plato is right.", r: "ac" },
  { t: "If it is very cold, the lake freezes. It is not very cold. Therefore the lake does not freeze.", r: "na" },
  { t: "Bea can swim or ride a bike. She can swim. Therefore she cannot ride a bike.", r: "ad" },
  { t: "If you are from Bilbao, you are from Bizkaia. Therefore, if you are from Bizkaia, you are from Bilbao.", r: "cc" },
  { t: "If the home team wins, there will be a party; if the away team wins, there will also be a party, because both are from the town. One of the two will win. Therefore there will be a party.", r: "dc" },
  { t: "If the price of diesel goes up, transport costs go up; if transport costs go up, food prices go up. Therefore, if diesel goes up, food prices go up.", r: "sh" },
  { t: "It is not true that Juan is both class representative and treasurer. Therefore Juan is not the treasurer.", r: "nc" }
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
    '<p><button type="button" class="btn ghost" data-lgtab="falacias">' + logmT("falVer") + "</button></p>" +
    '<p><button type="button" class="btn ghost" data-lgtab="leyes">' + logmT("leyesIr") + "</button></p>" +
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
  { f: "Not all Greeks were philosophers.", d: "G = Greek, F = philosopher", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∀x (Gx ∧ Fx)"], r: 1, por: "Trick case: «not all» is not «none». It is equivalent to ∃x (Gx ∧ ¬Fx): some Greek was not a philosopher (O). ¬∀x (Gx ∧ Fx) would be true if there were merely something that was not Greek." },
  { f: "Only citizens voted in the assembly.", d: "V = voted in the assembly, C = citizen", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Trick case: ‘only Cs’ puts the necessary condition after the arrow: everyone who voted was a citizen (not every citizen voted)." },
  { f: "There is something that has not been caused by anything else.", d: "C = caused by something else", o: ["¬∃x ¬Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "There is at least one x that is not caused: this is the idea of Aristotle’s prime mover or of Thomas Aquinas’s first cause." },
  { f: "Socrates is mortal.", d: "M = mortal, s = Socrates", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "A particular individual is written with a lower-case letter (a constant): no quantifier is needed." },
  { f: "Everyone who thinks exists.", d: "P = thinks, E = exists", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Universal affirmative (A). To derive ‘I exist’ you would also need the premise ‘I think’ (Pi) and universal instantiation, as with Socrates." },
  { f: "Everyone has a mother.", d: "M = ‘y is the mother of x’", o: ["∃y ∀x Myx", "∀x ∃y Myx", "∀x ∀y Myx"], r: 1, por: "For each person there is some mother (she may be different in each case). ∃y ∀x Myx would say that there is a single mother of everyone: this is the quantifier shift." },
  { f: "There is someone whom everyone admires.", d: "A = ‘x admires y’", o: ["∀x ∃y Axy", "∃y ∀x Axy", "∃x ∃y Axy"], r: 1, por: "There is a y such that everyone admires y. ∀x ∃y Axy would only say that each person admires someone, perhaps different people." },
  /* (22-10, nube) T2c: «solo los», «no todos», «nadie» y relaciones */
  { f: "Only people of legal age can vote.", d: "V = can vote, M = of legal age", o: ["∀x (Mx → Vx)", "∀x (Mx ∧ Vx)", "∀x (Vx → Mx)"], r: 2, por: "Trick case: «only the M» puts M after the arrow: everyone who can vote is of age. It does not say that everyone of age can vote (∀x (Mx → Vx)), nor that everybody is of age and votes (∀x (Mx ∧ Vx))." },
  { f: "Not all Sophists were foreigners.", d: "S = Sophist, E = foreigner", o: ["∃x (Sx ∧ ¬Ex)", "∀x (Sx → ¬Ex)", "∃x (Sx → ¬Ex)"], r: 0, por: "«Not all» is the O: at least one sophist was not a foreigner. It is equivalent to ¬∀x (Sx → Ex). ∀x (Sx → ¬Ex) says that no sophist was a foreigner, which is much more; ∃x (Sx → ¬Ex), with the arrow, would be true if there were merely something that was not a sophist." },
  { f: "Nobody is perfect.", d: "P = perfect (we are talking about people)", o: ["∃x ¬Px", "¬∀x ¬Px", "¬∃x Px"], r: 2, por: "Trick case: «nobody» is «there exists none»: ¬∃x Px, which is equivalent to ∀x ¬Px. ∃x ¬Px says much less: that someone is not perfect. ¬∀x ¬Px is equivalent to ∃x Px: it says that someone is perfect." },
  { f: "Everyone admires Socrates.", d: "A = ‘x admires y’, s = Socrates", o: ["∀x Asx", "∀x Axs", "∃x Axs"], r: 1, por: "The order of the letters matters: Axs is ‘x admires Socrates’. ∀x Asx would say that Socrates admires everyone." },
  { f: "Socrates admires someone who does not admire him.", d: "A = ‘x admires y’, s = Socrates", o: ["∃y (Asy → ¬Ays)", "∀y (Asy ∧ ¬Ays)", "∃y (Asy ∧ ¬Ays)"], r: 2, por: "With ∃ goes ∧: there is someone whom Socrates admires and who does not admire him. With the arrow, it would be enough for there to exist someone whom Socrates does not admire; with ∀, the formula contradicts itself: taking y = Socrates, it would say that Socrates admires himself and does not admire himself." },
  { f: "No Greek philosopher wrote in Latin.", d: "F = philosopher, G = Greek, L = wrote in Latin", o: ["∀x ((Fx ∧ Gx) → ¬Lx)", "∀x (Fx → (Gx ∧ ¬Lx))", "¬∃x (Fx ∧ Lx)"], r: 0, por: "The subject is «Greek philosopher» as a whole: it goes together before the arrow. ∀x (Fx → (Gx ∧ ¬Lx)) says that all philosophers are Greek; ¬∃x (Fx ∧ Lx), that no philosopher wrote in Latin, and Augustine or Thomas did." },
  { f: "Some students have not read any book.", d: "A = student, B = book, L = ‘x has read y’", o: ["∃x (Ax ∧ ∃y (By ∧ ¬Lxy))", "¬∃x (Ax ∧ ∃y (By ∧ Lxy))", "∃x (Ax ∧ ¬∃y (By ∧ Lxy))"], r: 2, por: "There is a student for whom there exists no book read. ∃x (Ax ∧ ∃y (By ∧ ¬Lxy)) says only that there is a book he has not read (which is true of everyone); ¬∃x (Ax ∧ ∃y (By ∧ Lxy)), that no student has read anything." },
  { f: "Every effect has a cause.", d: "E = effect, C = ‘y is a cause of x’", o: ["∀x (Ex → ∃y Cyx)", "∃y ∀x (Ex → Cyx)", "∀x ∃y (Ex ∧ Cyx)"], r: 0, por: "Every effect has some cause, perhaps a different one. ∃y ∀x would say that there is a single cause of all effects: moving from one to the other is the quantifier-order shift, and some have seen that leap in certain proofs of the existence of God. ∀x ∃y (Ex ∧ Cyx) says, besides, that everything is an effect." }
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
    logmCqOrden() +
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
  lpNoNomina: "This is only a sample. The complete list of informal fallacies, with a name for each and its dictionary definition, is the one in «Informal fallacies: the Corner's list», further down this tab.", lpNoNominaIr: "Go to the full list ↓",   /* (22-10) remite a la nómina única */
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
  ["Attack on the person (ad hominem)", "It attacks the speaker, not what is said.", "g-fil-ad-hominem"],
  ["False authority", "It rests the conclusion on someone who is not an expert in that field.", "g-fil-apelacion-a-la-autoridad"],
  ["Appeal to the majority (ad populum)", "That many people believe something does not make it true.", "g-fil-apelacion-a-la-mayoria"],
  ["Appeal to pity or fear", "It seeks an emotion instead of giving a reason.", "g-fil-apelacion-a-la-emocion"],
  ["Straw man", "It refutes a distorted version of what the other person said.", "g-fil-hombre-de-paja"],
  ["False cause", "That one thing happens after another does not prove that the first causes the second.", "g-fil-causa-falsa"]
];   /* (22-10) tercer campo: entrada del glosario de 1.º; la lista completa es la nómina única (logmNomina, #lg-nomina), en esta misma pestaña */
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
    "<h3>" + logmT("lpNo") + '</h3><p class="lg-nota">' + logmT("lpNoIntro") + '</p><ul class="lg-nof">' + LOGM_NOFORMAL.map(([n, d, g]) => "<li><b>" + (logmGlos(g) ? '<a href="#glosario/' + g + '">' + logEsc(n) + "</a>" : logmFalFuera(g, n)) + ":</b> " + logEsc(d) + "</li>").join("") + "</ul>" +
    (typeof LOGX !== "undefined" && LOGX.falacias ? '<p class="lg-nota">' + logmT("lpNoNomina") + ' <button type="button" class="btn ghost" data-lgnomina="1">' + logmT("lpNoNominaIr") + "</button></p>" : "") + duelo + "</div>";
}
Object.assign(LOGM_TXT, LOGM_EXTRA_TXT);

/* ---------- (12-10) pestaña «Falacias»: todas las falacias del Rincón, reunidas (estaban repartidas por Cuadrado, Reglas de inferencia y Cuantificadores) ---------- */
Object.assign(LOGM_TXT, {
  tabFalacias: "Fallacies",
  introFalacias: "A fallacy is a piece of reasoning that looks correct but is not. All the fallacies in the Logic Corner are gathered here: first the formal ones, which are refuted with a counterexample; then those that logic helps you see; and finally those that can only be spotted by looking at the content.",
  falSilTit: "Fallacies of the syllogism",
  falSilIntro: "A syllogism that breaks any of Aristotle’s rules is not valid. Each of these fallacies comes with an example you can open in the Syllogisms tab to see its Venn diagram.",
  falR1: "Undistributed middle term", falR2P: "Illicit major", falR2S: "Illicit minor", falR3: "Two negative premises", falR4a: "Negative premise and affirmative conclusion", falR5: "Two particular premises",
  falProbar: "See it in Syllogisms →",
  falVer: "All the fallacies, gathered in the ‘Fallacies’ tab →",
  enLaDe1o: "on the Year 1 website"   /* (22-10, docs/39) nota del enlace a la entrada del glosario en la web de 1.º */
});
const LOGM_FAL_SIL = [["r1", "AAA-2"], ["r2P", "AEE-1"], ["r2S", "AAA-3"], ["r3", "EEE-1"], ["r4a", "AEA-1"], ["r5", "III-1"]];
function logmCqOrden(){
  return '<div class="lg-panel"><h2>' + logmT("cqOrdenTit") + "</h2><p>" + logmT("cqOrden") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th>x</th><th>' + logmT("cqOrdenMadre") + "</th></tr></thead><tbody>" +
    [["a", "m1"], ["b", "m2"], ["c", "m3"]].map(([x, y]) => "<tr><td>" + x + "</td><td>" + y + "</td></tr>").join("") + '</tbody></table></div><p class="lg-nota">' + logmT("cqOrdenContra") + '</p><p class="lg-nota">' + logmT("cqOrdenFilo") + "</p></div>";
}
function logRenderFalacias(){
  return '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falSilTit") + '</h2><p class="lg-nota">' + logmT("falSilIntro") + '</p><div class="lg-reglas">' +
    LOGM_FAL_SIL.map(([r, m]) => '<div class="lg-regla lg-falaz"><h3>' + logmT("falR" + r.slice(1)) + "</h3><p>" + logT(r) + '</p><p class="lg-forma">' + m + '</p><p><button type="button" class="btn ghost" data-falsil="' + m + '">' + logmT("falProbar") + "</button></p></div>").join("") + "</div></div>" +
    logmConversion() + logmGeneralizacion() + logmCqOrden() + logmPuedeNoPuede() + logmNomina() + logmQueFalacia();
}
/* (22-10, nube) T5: falacias no formales. La definición vive en el glosario de 1.º (fuente única); aquí, la lista con sus
   otros nombres, un ejemplo y cómo pararla, y el ejercicio «¿Qué falacia es?». Datos y textos en logica_ejercicios.js (LOGX).
   En la web de HF no están esas entradas del glosario: el nombre se queda sin enlace y sin definición. */
function logmGlos(id){ return typeof GLOSARIO !== "undefined" ? GLOSARIO.find(g => g.id === id) : null; }
/* (22-10, docs/39) Cuando la entrada g-fil-… del glosario de 1.º no está en esta web (hf), en vez de dejar el nombre de
   la falacia sin enlace se enlaza a su entrada en el glosario de la web de 1.º (misma lengua, pestaña nueva), con la nota
   «(en la web de 1.º)». En la web de 1.º logmGlos ya la encuentra, así que esto solo actúa fuera de ella. */
function logmFalFuera(id, txt){
  const e = logEsc, h = "#glosario/" + id;
  return (typeof logItinEs1o === "function" && logItinEs1o(h))
    ? '<a href="' + logItin1oUrl(h) + '" target="_blank" rel="noopener">' + e(txt) + ' <span class="lg-nota">(' + e(logmT("enLaDe1o")) + ")</span></a>"
    : e(txt);
}
function logmNomina(){
  if (typeof LOGX === "undefined" || !LOGX.falacias) return "";
  const e = logEsc, T = LOGX.t;
  return '<div class="lg-panel" id="lg-nomina"><h2>' + e(T.nomTit) + '</h2><p class="lg-nota">' + e(T.nomIntro) + '</p><div class="lg-reglas">' +
    LOGX.falacias.map(f => { const g = logmGlos(f.g);
      return '<div class="lg-regla lg-falaz"><h3>' + (g ? '<a href="#glosario/' + f.g + '">' + e(g.t) + "</a>" : logmFalFuera(f.g, f.nom)) + "</h3>" + (g ? "<p>" + e(g.def) + "</p>" : "") +
        '<p class="lg-nota"><b>' + e(T.nomOtros) + "</b> " + e(f.otros) + "</p><p><b>" + e(T.nomEj) + "</b> " + e(f.ej) + "</p><p><b>" + e(T.nomParar) + "</b> " + e(f.parar) + "</p></div>"; }).join("") + "</div></div>";
}
function logmQueFalacia(){
  if (typeof LOGX === "undefined" || !LOGX.qf) return "";
  const e = logEsc, T = LOGX.t, R = (LOG.qf = LOG.qf || {}), nom = id => (id === "no-es-falacia" ? T.qfNo : ((LOGX.falacias.find(f => f.g === id) || {}).nom || id));
  const hechas = Object.keys(R), bien = hechas.filter(i => R[i] === LOGX.qf[i].tipo).length;
  return '<div class="lg-panel" id="lg-qf"><h2>' + e(T.qfTit) + '</h2><p class="lg-nota">' + e(T.qfIntro) + '</p><p class="lg-nota" aria-live="polite">' + e(T.qfCuenta.replace("{a}", bien).replace("{n}", hechas.length)) + "</p>" +
    LOGX.qf.map((x, i) => { const r = R[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + e(x.txt) + '</p><div class="lg-teclas">' +
        x.o.map(o => '<button type="button" class="chip' + (r != null && o === x.tipo ? " lg-chip-ok" : r === o ? " lg-chip-no" : "") + '" data-qf="' + i + '" data-qfo="' + o + '"' + (r != null ? " disabled" : "") + ">" + e(nom(o)) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === x.tipo ? "lg-tautologia" : "lg-contradiccion") + '">' + e(r === x.tipo ? T.qfBien : T.qfMal.replace("{x}", nom(x.tipo))) + " " + e(x.por) + "</p>" : "") + "</div>"; }).join("") + "</div>";
}


/* ---------- (18-10) pestaña «Leyes lógicas»: las 70 leyes elementales y las 21 reglas derivadas de deducción ----------
   Transcritas de dos fotocopias que trajo el profesor el 18-10 («Leyes elementales de la lógica de enunciados», 2 hojas
   a máquina, y «Reglas derivadas de deducción», 2 hojas). Las 70 leyes se han comprobado como tautologías y las 21 reglas
   como argumentos válidos con este mismo motor (logParse/logEval). Erratas de la hoja corregidas: en la 40 falta la
   flecha de «(p r)». La 68 lleva (p → r), la forma habitual de la ley de ese nombre; la hoja pone (q → r), que también
   es tautología (orden del profesor del 18-10). Las abreviaturas de los nombres se escriben enteras («Lcp» = ley de carga de premisa, regla Cpr). */
Object.assign(LOGM_TXT, {
  tabLeyes: "Logical laws",
  introLeyes: "A logical law is a formula that is always true, whatever the values of its letters: a tautology. Here are 70 laws of propositional logic, grouped by family, and the 21 derived rules of deduction that rest on them. Press “Table” on any of them to check it yourself.",
  leyesTit: "Elementary laws of propositional logic",
  leyesNota: "The square brackets [ ] are parentheses: they help you see what goes inside what. Laws whose main connective is ↔ say that two formulas are equivalent and one can replace the other; those with → let you pass from one to the other in one direction only.",
  leyTabla: "Table",
  derTit: "Derived rules of deduction",
  derNota: "In a deduction, each rule lets you pass from the formulas above the line (the premises) to the one below it (the conclusion). A double line means the rule works in both directions. They are shortcuts: each one is proved with the basic rules and matches one of the laws above.",
  derInter: "If A and B are equivalent, in any formula C that contains A you may put B in its place: C<sub>A</sub> is the formula with A, and C<sub>B</sub> the same formula with B. That is why any law with ↔ can be used to rewrite part of a formula.",
  leyesIr: "The 70 logical laws and the 21 derived rules, in “Logical laws” →"
});
const LOGM_LEYES = [
  ["Principles", [
    [1, "p ↔ p", "Principle of identity"],
    [2, "¬(p ∧ ¬p)", "Principle of non-contradiction"],
    [3, "p ∨ ¬p", "Principle of excluded middle"],
    [4, "¬¬p ↔ p", "Principle of double negation"],
    [5, "¬¬¬p ↔ ¬p", "Principle of triple negation"]]],
  ["Idempotence, commutativity and associativity", [
    [6, "(p ∧ p) ↔ p", "Idempotent law of conjunction"],
    [7, "(p ∧ q) ↔ (q ∧ p)", "Commutative law of conjunction"],
    [8, "[(p ∧ q) ∧ r] ↔ [p ∧ (q ∧ r)]", "Associative law of conjunction"],
    [9, "(p ∨ p) ↔ p", "Idempotent law of disjunction"],
    [10, "(p ∨ q) ↔ (q ∨ p)", "Commutative law of disjunction"],
    [11, "[(p ∨ q) ∨ r] ↔ [p ∨ (q ∨ r)]", "Associative law of disjunction"]]],
  ["Distribution", [
    [12, "[p ∧ (q ∨ r)] ↔ [(p ∧ q) ∨ (p ∧ r)]", "Distributive law of conjunction over disjunction"],
    [13, "[(p ∨ q) ∧ (r ∨ s)] ↔ [(p ∧ r) ∨ (p ∧ s) ∨ (q ∧ r) ∨ (q ∧ s)]", "Distributive law of conjunction over disjunction (expanded form)"],
    [14, "[p ∨ (q ∧ r)] ↔ [(p ∨ q) ∧ (p ∨ r)]", "Distributive law of disjunction over conjunction"],
    [15, "[(p ∧ q) ∨ (r ∧ s)] ↔ [(p ∨ r) ∧ (p ∨ s) ∧ (q ∨ r) ∧ (q ∨ s)]", "Distributive law of disjunction over conjunction (expanded form)"]]],
  ["Simplification and addition", [
    [16, "[p ∧ (p ∧ q)] ↔ (p ∧ q)", "1st law of simplification of conjunction"],
    [17, "[p ∧ (p ∨ q)] ↔ p", "2nd law of simplification of conjunction"],
    [18, "[p ∧ (q ∨ ¬q)] ↔ p", "3rd law of simplification of conjunction"],
    [19, "(p ∧ q) → p", "4th law of simplification of conjunction (a fortiori)"],
    [20, "(p ∧ q) → q", "5th law of simplification of conjunction (a fortiori)"],
    [21, "[p ∨ (p ∨ q)] ↔ (p ∨ q)", "1st law of simplification of disjunction"],
    [22, "[p ∨ (p ∧ q)] ↔ p", "2nd law of simplification of disjunction"],
    [23, "[p ∨ (q ∧ ¬q)] ↔ p", "3rd law of simplification of disjunction"],
    [24, "p → (p ∨ q)", "Law of addition"],
    [25, "q → (p ∨ q)", "Law of addition"]]],
  ["De Morgan’s laws", [
    [26, "¬(p ∨ q) ↔ (¬p ∧ ¬q)", "1st De Morgan’s law"],
    [27, "¬(p ∧ q) ↔ (¬p ∨ ¬q)", "2nd De Morgan’s law"],
    [28, "(p ∨ q) ↔ ¬(¬p ∧ ¬q)", "3rd De Morgan’s law"],
    [29, "(p ∧ q) ↔ ¬(¬p ∨ ¬q)", "4th De Morgan’s law"]]],
  ["Interdefinition of the connectives", [
    [30, "(p ∧ q) ↔ ¬(p → ¬q)", "Law of interdefinition"],
    [31, "(p ∨ q) ↔ (¬p → q)", "Law of interdefinition"],
    [32, "(p → q) ↔ ¬(p ∧ ¬q)", "Law of interdefinition"],
    [33, "(p → q) ↔ (¬p ∨ q)", "Law of interdefinition"],
    [34, "(p ↔ q) ↔ [(p → q) ∧ (q → p)]", "Law of interdefinition"]]],
  ["Exportation, permutation of premises and syllogism", [
    [35, "[(p ∧ q) → r] ↔ [p → (q → r)]", "Law of exportation and importation"],
    [36, "[p → (q → r)] ↔ [q → (p → r)]", "Law of permutation of premises"],
    [37, "p → [q → (p ∧ q)]", "Follows from laws 35 and 1"],
    [38, "[(p → q) ∧ (q → r)] → (p → r)", "Law of syllogism"],
    [39, "(p → q) → [(q → r) → (p → r)]", "Law of syllogism (from laws 38 and 35)"],
    [40, "(q → r) → [(p → q) → (p → r)]", "Law of syllogism (from laws 39 and 36)"],
    [41, "(p → q) → [(r ∨ p) → (r ∨ q)]", "Law of syllogism"]]],
  ["Modus ponens, modus tollens, disjunctive syllogism and dilemmas", [
    [42, "[(p → q) ∧ p] → q", "Modus ponendo ponens (1)"],
    [43, "p → [(p → q) → q]", "Modus ponendo ponens (2)"],
    [44, "[(p → q) ∧ ¬q] → ¬p", "Modus tollendo tollens (1)"],
    [45, "¬q → [(p → q) → ¬p]", "Modus tollendo tollens (2)"],
    [46, "[(p ∨ q) ∧ ¬p] → q", "Disjunctive syllogism"],
    [47, "[(p ∨ q) ∧ ¬q] → p", "Disjunctive syllogism"],
    [48, "[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r", "Law of simple constructive dilemma"],
    [49, "[(p ∨ q) ∧ (p → r) ∧ (q → s)] → (r ∨ s)", "Law of complex constructive dilemma"],
    [50, "[(¬p ∨ ¬q) ∧ (r → p) ∧ (r → q)] → ¬r", "Law of simple destructive dilemma"],
    [51, "[(¬p ∨ ¬q) ∧ (r → p) ∧ (s → q)] → (¬r ∨ ¬s)", "Law of complex destructive dilemma"]]],
  ["Reductio ad absurdum", [
    [52, "(p → ¬p) → ¬p", "1st law of reductio ad absurdum"],
    [53, "(¬p → p) → p", "2nd law of reductio ad absurdum (Clavius’s law or consequentia mirabilis)"],
    [54, "[(p → q) ∧ (p → ¬q)] → ¬p", "3rd law of reductio ad absurdum"],
    [55, "[p → (q ∧ ¬q)] → ¬p", "4th law of reductio ad absurdum"]]],
  ["From a falsehood anything follows (and a truth follows from anything)", [
    [56, "(p ∧ ¬p) → p", "Ex falso sequitur quodlibet"],
    [57, "(p ∧ ¬p) → ¬p", "Ex falso sequitur quodlibet"],
    [58, "(p ∧ ¬p) → q", "Ex falso sequitur quodlibet"],
    [59, "p → (¬p → q)", "Ex falso sequitur quodlibet (from laws 58 and 35)"],
    [60, "¬p → (p → q)", "Ex falso sequitur quodlibet"],
    [61, "[(p → q) ∧ (p ∧ ¬q)] → r", "Ex falso sequitur quodlibet"],
    [62, "p → (q → p)", "Verum sequitur ad quodlibet (paradoxical law or law of adding a premise)"]]],
  ["Contraposition and implication", [
    [63, "(p → q) ↔ (¬q → ¬p)", "Law of contraposition of the conditional"],
    [64, "(p → q) ↔ [p ↔ (p ∧ q)]", "Law of implication"],
    [65, "(p → q) ↔ [q ↔ (p ∨ q)]", "Law of implication"],
    [66, "[p → (p → q)] ↔ (p → q)", "Law of implication"],
    [67, "(p ∧ q) → (p → q)", "Law of implication"],
    [68, "[(p → q) ∧ (p → r)] → [p → (q ∧ r)]", "Law of composition of the consequent"],
    [69, "[(p → q) ∧ (r → s)] → [(p ∨ r) → (q ∨ s)]", "Law of disjunction of both sides"],
    [70, "[(p → q) ∧ (r → s)] → [(p ∧ r) → (q ∧ s)]", "Law of conjunction of both sides (praeclarum theorema, Leibniz)"]]]
];
/* reglas: [nº, nombre, abreviatura, formas]; cada forma = [premisas separadas por «;», conclusión, raya doble] */
const LOGM_DERIVADAS = [
  [1, "Hypothetical syllogism", "Sil", [["p → q; q → r", "p → r"]]],
  [2, "Permutation of premises", "Mut", [["p → (q → r)", "q → (p → r)"]]],
  [3, "Identity", "Id", [["p", "p"]]],
  [4, "Adding a premise", "Cpr", [["p", "q → p"]]],
  [5, "Distribution of conjunction", "DC", [["p ∧ (q ∨ r)", "(p ∧ q) ∨ (p ∧ r)", 1]]],
  [6, "Distribution of disjunction", "DD", [["p ∨ (q ∧ r)", "(p ∨ q) ∧ (p ∨ r)", 1]]],
  [7, "Contraposition", "Cp", [["p → q", "¬q → ¬p", 1], ["p → ¬q", "q → ¬p", 1], ["¬p → q", "¬q → p", 1], ["¬p → ¬q", "q → p", 1]]],
  [8, "Modus tollens", "MT", [["p → q; ¬q", "¬p"]]],
  [9, "Double negation introduction", "IDN", [["p", "¬¬p"]]],
  [10, "Disjunctive syllogism", "SD", [["p ∨ q; ¬q", "p"], ["p ∨ q; ¬p", "q"]]],
  [11, "Simple constructive dilemma", "Dil 1", [["p ∨ q; p → r; q → r", "r"]]],
  [12, "Complex constructive dilemma", "Dil 2", [["p ∨ q; p → r; q → s", "r ∨ s"]]],
  [13, "Simple destructive dilemma", "Dil 3", [["¬p ∨ ¬q; r → p; r → q", "¬r"]]],
  [14, "Complex destructive dilemma", "Dil 4", [["¬p ∨ ¬q; r → p; s → q", "¬r ∨ ¬s"]]],
  [15, "Interchange or replacement", "I", null],
  [16, "Definition of the conditional", "DI 1", [["p → q", "¬(p ∧ ¬q)"]]],
  [17, "Definition of the conditional", "DI 2", [["p → q", "¬p ∨ q"]]],
  [18, "Definition of conjunction", "DfC 1", [["p ∧ q", "¬(p → ¬q)"]]],
  [19, "Definition of conjunction", "DfC 2", [["p ∧ q", "¬(¬p ∨ ¬q)"]]],
  [20, "Definition of disjunction", "DfD 1", [["p ∨ q", "¬p → q"]]],
  [21, "Definition of disjunction", "DfD 2", [["p ∨ q", "¬(¬p ∧ ¬q)"]]]
];
function logmDeduccion(p, c, doble){
  return '<div class="lg-ded" dir="ltr">' + p.split(";").map(x => "<span>" + logEsc(x.trim()) + "</span>").join("") + '<span class="lg-ded-c' + (doble ? " lg-ded-2" : "") + '">' + logEsc(c) + "</span></div>";
}
function logRenderLeyes(){
  const tit = logmT("verTabla");
  return '<div class="lg-panel"><h2>' + logmT("leyesTit") + '</h2><p class="lg-nota">' + logmT("leyesNota") + "</p>" +
    LOGM_LEYES.map(([g, ls], k) => '<details class="lg-leyes"' + (k ? "" : " open") + "><summary>" + logEsc(g) + " (" + ls[0][0] + "–" + ls[ls.length - 1][0] + ')</summary><ol class="lg-leyes-l">' +
      ls.map(([n, f, nom]) => '<li value="' + n + '"><span class="lg-ley-n">' + n + '.</span><span class="lg-ley-f" dir="ltr">' + logEsc(f) + '</span><span class="lg-ley-nom">' + logEsc(nom) + '</span><button type="button" class="chip" data-ley="' + logEsc(f) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></li>").join("") + "</ol></details>").join("") + "</div>" +
    '<div class="lg-panel"><h2>' + logmT("derTit") + '</h2><p class="lg-nota">' + logmT("derNota") + '</p><div class="lg-reglas">' +
    LOGM_DERIVADAS.map(([n, nom, ab, fs]) => '<div class="lg-regla"><h3>' + n + ". " + logEsc(nom) + " <small>(" + ab + ")</small></h3>" +
      (fs ? '<div class="lg-ded-fila">' + fs.map(([p, c, d]) => '<div class="lg-ded-caja">' + logmDeduccion(p, c, d) + '<button type="button" class="chip" data-infp="' + logEsc(p) + '" data-infc="' + logEsc(c) + '" title="' + tit + '">' + logmT("leyTabla") + "</button></div>").join("") + "</div>"
        : '<div class="lg-ded-fila"><div class="lg-ded-caja"><div class="lg-ded" dir="ltr"><span>A ↔ B</span><span>C<sub>A</sub></span><span class="lg-ded-c">C<sub>B</sub></span></div></div></div><p>' + logmT("derInter") + "</p>") + "</div>").join("") + "</div></div>";
}


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
    else if (b.dataset.ley != null){ LOG.formula = b.dataset.ley; LOG.tab = "tablas"; logRender(); const t = document.getElementById("lg-tabla"); if (t) t.scrollIntoView({ block: "center" }); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.falsil){ const [m, f] = b.dataset.falsil.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); LOG.tab = "silogismos"; logRender(); const c = document.getElementById("lg-sil"); if (c) c.scrollIntoView({ block: "start" }); }
    else if (b.dataset.cqpre){ if (!document.getElementById("lg-cq")){ LOG.tab = "cuantificadores"; logRender(); } LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c){ c.innerHTML = logmCqMundo(); if (b.closest(".lg-panel") !== c.closest(".lg-panel")) c.scrollIntoView({ block: "center" }); } }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.lgnomina){ const n = document.getElementById("lg-nomina"); if (n) n.scrollIntoView({ block: "start" }); }   /* (22-10) de la lista breve a la nómina única */
    else if (b.dataset.qf != null){ LOG.qf = LOG.qf || {}; LOG.qf[+b.dataset.qf] = b.dataset.qfo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }   /* (22-10, nube) T5 */
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
