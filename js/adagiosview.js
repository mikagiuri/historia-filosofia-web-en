"use strict";
/* ===== «Adagios» (09-10, Bachillerato) — vista sobre adagios.js (ADAGIOS) =====
   Repertorio de lemas clásicos al modo de los cuadernos de lugares comunes del Renacimiento. Cada ficha: la versión
   española y, solo al pulsar el botón λ de su línea (como en el glosario), el lema latino y, si lo hay, el original
   griego con su transliteración; luego qué quiere decir, cuándo usarlo, el caso trampa si lo hay, de dónde viene y los temas.
   Los nombres de pensadores con ficha en Ilustres (en esta web) abren su biografía: el primero de cada ficha.
   Filtro por ámbito y modo «Ponte a prueba» (solo el lema en español; el resto se descubre al pulsar). Arriba solo las fichas:
   la historia (Erasmo, florilegios, Montaigne) y el cuaderno de lugares comunes van al final, plegados.
   Enlace profundo: #adagios/<id>. Los temas se enlazan solo si existen en la web (THEORY filtrado). */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const ADG_TXT = {
  ambito: "Area", todos: "All",
  saber: "Knowledge", realidad: "Reality", etica: "Ethics and life", politica: "Politics", humano: "Human beings",
  modo: "Mode", leer: "Read", prueba: "Test yourself",
  pruebaAyuda: "Try to explain what it means, where it comes from and when you would use it; then click ‘Reveal’.",
  descubrir: "Reveal", ocultar: "Hide",
  originalBtn: "See the original Latin", originalBtnGr: "See the original Latin and Greek, and how to read the Greek",
  latin: "In Latin:", griego: "In Greek:",
  origen: "Where it comes from:", erasmo: "Erasmus, Adagia {n}",
  sentido: "What it means:", uso: "Use it:", trampa: "Trap", temas: "In the topics:",
  verBio: "See the biography of {n}",
  cuenta: "{n} adages", cuenta1: "1 adage",
  hTit: "Where this comes from: the common language of the Renaissance",
  h1: "In the Renaissance, anyone who had studied knew hundreds of mottoes, adages and maxims from the classics by heart. They were not mere ornament: they worked as a shared language. Saying ‘Festina lente’ or ‘Nosce te ipsum’ was enough to call up a whole idea, with its history and nuances, and the educated reader recognised it at once.",
  h2t: "Erasmus's Adagia",
  h2: "The most influential collection was that of Erasmus of Rotterdam. He began in 1500 with an anthology of 818 Greek and Latin proverbs and kept expanding it all his life: the 1536 edition has 4,151. Each adage comes with a commentary on its origin, meaning and use, and some commentaries are real essays, such as the one on ‘Dulce bellum inexpertis’, against war, or the one on ‘Sileni Alcibiadis’, on appearances.",
  h3t: "Florilegia and commonplaces",
  h3: "Alongside Erasmus there were florilegia (‘gatherings of flowers’), anthologies of selected passages such as the Polyanthea of Domenico Nani Mirabelli (1503) or the Illustrium poetarum flores of Octavianus Mirandula. And at school every pupil kept their own commonplace book (loci communes): they copied out the sentences they came across while reading and arranged them by topic (friendship, fortune, death, justice…) so as to have arguments to hand when writing or speaking. Erasmus, in De copia, and Juan Luis Vives explained how to do it.",
  h3b: "Beware of a common confusion: Melanchthon's Loci communes (1521) have the same name, but they are a handbook of Protestant theology arranged by topic, not a collection of quotations.",
  h4t: "Montaigne's beams",
  h4: "Montaigne had more than fifty sayings in Greek and Latin painted on the ceiling beams of his library, many from the Bible, Sextus Empiricus and the anthology of Stobaeus, so as to have them in view while he wrote his Essays. They are still preserved in his tower in the Périgord, in south-west France.",
  h4b: "He also gave himself his own motto. In 1576 he had a medal struck with a pair of scales in balance and a Greek word of the Sceptics, ἐπέχω (epékho, ‘I hold back’, that is, I suspend judgement). In the Essays (II, 12) he translates it as a question: ‘Que sçay-je?’, ‘what do I know?’.",
  pieDivisa: "Montaigne's motto: ‘Que sçay-je?’ above a pair of balanced scales",
  pieMedalla: "Medal of Montaigne by the Gatteaux (19th century; Bibliothèque nationale de France)",
  cTit: "Make your own commonplace book",
  c0: "A commonplace book is a file of sentences arranged by topic so that you have them to hand when you write. This is how to make one:",
  c1t: "Set it up.",
  c1: "A notebook or a document with five sections, one per area: Knowledge, Reality, Ethics and life, Politics and Human beings. Leave at least two pages per section.",
  c2t: "Copy each adage out with the same five lines every time:",
  c2a: "the motto in Latin or Greek;", c2b: "the translation;", c2c: "where it comes from: author and work;",
  c2d: "what it means, in a sentence of your own (do not copy the one on the website);",
  c2e: "a sentence of your own in which you use it about a topic from the course.",
  cEjT: "Example:",
  cEj: "Homo homini lupus · ‘Man is a wolf to man’ · Plautus, Asinaria; taken up by Hobbes in De Cive · Without laws to protect us, others are a threat · ‘For Hobbes, in the state of nature homo homini lupus; that is why individuals accept a sovereign who guarantees peace’.",
  c3t: "Keep it up to date.",
  c3: "Two adages a week: the one that came up in class and another one you choose, from this section or from your reading. By the end of the term you will have about twenty-five.",
  c4t: "Revise it.",
  c4: "Once a week, with ‘Test yourself’ mode or by covering the translation in your notebook: say out loud what it means and in which topic you would use it. Mark the ones you get wrong with a dot and go back to them the following week.",
  c5t: "Use it when you write.",
  c5: "In a commentary or an essay, an adage works at the beginning, to introduce the problem, or at the end, to round off the thesis. Do not use more than one or two per text and always explain it: ‘As Plautus wrote, and Hobbes would repeat, homo homini lupus: …’. If you cannot explain why it is relevant, leave it out."
};
const adgT = (k, v) => String(ADG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

const ADG_AMB = ["saber", "realidad", "etica", "politica", "human"];
/* pensadores con ficha en Ilustres: nombre tal como aparece en los textos → id (solo se enlaza si la ficha existe en esta web) */
const ADG_ILU = [
  ["Augustine of Hippo", "agustin"], ["Anselm of Canterbury", "anselmo"], ["Thomas Aquinas", "tomas"], ["Francis Bacon", "francis_bacon"],
  ["Erasmus of Rotterdam", "erasmo"], ["Erasmus", "erasmo"], ["Socrates", "socrates"], ["Plato", "platon"], ["Aristotle", "aristoteles"],
  ["Heraclitus", "heraclito"], ["Parménides", "parmenides"], ["Protagoras", "protagoras"], ["Epicurus", "epicuro"], ["Séneca", "seneca"],
  ["Tertullian", "tertuliano"], ["Ockham", "ockham"], ["Machiavelli", "maquiavelo"], ["Hobbes", "hobbes"], ["Spinoza", "spinoza"],
  ["Locke", "locke"], ["Leibniz", "leibniz"], ["Kant", "kant"], ["Heidegger", "heidegger"],
  ["Averroes", "averroes"], ["Hegel", "hegel"], ["Marx", "marx"], ["Darwin", "darwin"]
];
let adgAmb = "all", adgPrueba = false;

function adgEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function adgBox(){ return document.getElementById("adagiosbox"); }
function adgHayIlu(id){ return typeof ILUSTRES !== "undefined" && ILUSTRES[id] && typeof loadIlustre === "function"; }

/* texto escapado con el primer nombre de cada pensador convertido en botón (hechos = los ya enlazados en la ficha) */
function adgNombres(txt, hechos){
  let s = adgEsc(txt);
  ADG_ILU.forEach(([n, id]) => {
    if (hechos.has(id) || !adgHayIlu(id)) return;
    /* seguido de un número de pasaje es el título de una obra (Platón, «Protágoras 343b»), no la persona */
    const rx = new RegExp("(^|[^\\p{L}>])(" + n + ")(?![\\p{L}<])(?!\\s*\\d)", "u");
    if (!rx.test(s)) return;
    s = s.replace(rx, (m, a, b) => a + '<button class="adg-ilu" data-ilu="' + id + '" title="' + adgEsc(adgT("verBio", { n: ILUSTRES[id].name })) + '">' + b + '</button>');
    hechos.add(id);
  });
  return s;
}

function adgFiltro(){
  const f = document.getElementById("adagiosfilter");
  if (!f) return;
  f.innerHTML = '<div class="fgroup"><span class="flabel">' + adgT("ambito") + '</span>' +
    ["all"].concat(ADG_AMB).map(a => '<button class="fbtn" data-adg-a="' + a + '" aria-pressed="' + (a === adgAmb) + '">' +
      adgT(a === "all" ? "todos" : a) + '</button>').join("") + '</div>' +
    '<div class="fgroup"><span class="flabel">' + adgT("modo") + '</span>' +
    [["leer", false], ["prueba", true]].map(m => '<button class="fbtn" data-adg-m="' + m[0] + '" aria-pressed="' + (adgPrueba === m[1]) + '">' + adgT(m[0]) + '</button>').join("") + '</div>';
  f.querySelectorAll("[data-adg-a]").forEach(b => b.addEventListener("click", () => { adgAmb = b.dataset.adgA; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-m]").forEach(b => b.addEventListener("click", () => { adgPrueba = b.dataset.adgM === "prueba"; adgFiltro(); adgRender(); }));
}

function adgTemas(a){
  if (typeof THEORY === "undefined") return "";
  const ts = (a.t || []).filter(k => THEORY[k]);
  if (!ts.length) return "";
  return '<p class="adg-temas"><span class="adg-k">' + adgT("temas") + '</span> ' +
    ts.map(k => '<button class="adg-tema" data-th="' + adgEsc(k) + '" title="' + adgEsc(THEORY[k].title) + '">' + adgEsc(THEORY[k].title) + '</button>').join("") + '</p>';
}

function adgFicha(a){
  const h = new Set(), N = t => adgNombres(t, h);
  /* (09-10) el original (latín y, si lo hay, griego transliterado) solo se ve al pulsar λ, en la línea del español */
  const lb = adgT(a.gr ? "originalBtnGr" : "originalBtn");
  return '<article class="adg-card' + (adgPrueba ? ' adg-oculta' : '') + '" id="adg-' + adgEsc(a.id) + '" data-ep="' + adgEsc(a.e) + '">' +
    (a.img ? '<figure class="adg-fig' + (a.fit === "contain" ? ' adg-fig-c' : '') + '"><img src="' + adgEsc(a.img) + '" alt="' + adgEsc(a.pie) + '" loading="lazy" decoding="async"><figcaption>' + N(a.pie) + '</figcaption></figure>' : '') +
    '<h2 class="adg-es">' + adgEsc(a.es) + '<button type="button" class="adg-lam" aria-expanded="false" aria-label="' + lb + '" title="' + lb + '">λ</button></h2>' +
    '<div class="adg-orig" hidden><p class="adg-la"><span class="adg-k">' + adgT("latin") + '</span> <i lang="la">' + adgEsc(a.la) + '</i></p>' +
    (a.gr ? '<p class="adg-gr"><span class="adg-k">' + adgT("griego") + '</span> <span lang="grc">' + adgEsc(a.gr) + '</span> (<i>' + adgEsc(a.tr) + '</i>)</p>' : '') + '</div>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(a.sen) + '</p>' +
      (a.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("uso") + '</span> ' + N(a.uso) + '</p>' : '') +
      (a.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(a.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + N(a.o) + (a.er ? '. ' + N(adgT("erasmo", { n: a.er })) : '') + '.</p>' +
      adgTemas(a) +
    '</div></article>';
}

function adgHistoria(){
  const h = new Set(), p = k => '<p>' + adgNombres(adgT(k), h) + '</p>';
  return '<details class="adg-guia"><summary>' + adgT("hTit") + '</summary>' + p("h1") +
    '<h3>' + adgT("h2t") + '</h3>' + p("h2") + '<h3>' + adgT("h3t") + '</h3>' + p("h3") + p("h3b") +
    '<h3>' + adgT("h4t") + '</h3>' + p("h4") + p("h4b") +
    '<div class="adg-mont">' + [["montaigne_divisa", "pieDivisa"], ["montaigne_medalla", "pieMedalla"]].map(([f, k]) =>
      '<figure><img src="media/galeria_museo/adagios/' + f + '.jpg" alt="' + adgEsc(adgT(k)) + '" loading="lazy"><figcaption>' + adgT(k) + '</figcaption></figure>').join("") + '</div></details>' +
    '<details class="adg-guia"><summary>' + adgT("cTit") + '</summary><p>' + adgT("c0") + '</p><ol>' +
    '<li><strong>' + adgT("c1t") + '</strong> ' + adgT("c1") + '</li>' +
    '<li><strong>' + adgT("c2t") + '</strong><ol type="a">' + ["c2a", "c2b", "c2c", "c2d", "c2e"].map(k => '<li>' + adgT(k) + '</li>').join("") + '</ol>' +
      '<p class="adg-ej"><strong>' + adgT("cEjT") + '</strong> ' + adgNombres(adgT("cEj"), new Set()) + '</p></li>' +
    ["c3", "c4", "c5"].map(k => '<li><strong>' + adgT(k + "t") + '</strong> ' + adgT(k) + '</li>').join("") + '</ol></details>';
}

function adgRender(){
  const box = adgBox();
  if (!box) return;
  const l = ADAGIOS.filter(a => adgAmb === "all" || a.amb === adgAmb);
  box.innerHTML = '<div class="adg-grid">' + l.map(adgFicha).join("") + '</div>' +
    '<p class="adg-cuenta">' + (l.length === 1 ? adgT("cuenta1") : adgT("cuenta", { n: l.length })) + '</p>' + adgHistoria();
}

/* clics delegados (la caja se repinta con cada filtro) */
(() => {
  const box = adgBox();
  if (!box) return;
  box.addEventListener("click", e => {
    const d = e.target.closest(".adg-desc");
    if (d){ const c = d.closest(".adg-card"), oc = c.classList.toggle("adg-oculta");
      d.textContent = adgT(oc ? "descubrir" : "ocultar"); d.setAttribute("aria-expanded", String(!oc)); return; }
    const l = e.target.closest(".adg-lam");
    if (l){ const g = l.closest(".adg-card").querySelector(".adg-orig"); g.hidden = !g.hidden; l.setAttribute("aria-expanded", String(!g.hidden)); return; }
    const i = e.target.closest("[data-ilu]");
    if (i){ (window.show || show)("ilustres"); loadIlustre(i.dataset.ilu); return; }
    const t = e.target.closest("[data-th]");
    if (t){ (window.show || show)("teoria"); if (typeof window.loadTheory === "function") window.loadTheory(t.dataset.th); }
  });
})();

function loadAdagios(arg){
  const id = String(arg || "").split("/")[0];
  const a = ADAGIOS.find(x => x.id === id);
  if (a && adgAmb !== "all" && a.amb !== adgAmb){ adgAmb = "all"; adgFiltro(); }
  adgRender();
  const el = a && document.getElementById("adg-" + a.id);
  /* tras pintar: show() sube al principio de la vista y el enrutado inicial llega después */
  if (el){ el.classList.add("adg-marca"); setTimeout(() => el.scrollIntoView({ block: "center" }), 80); setTimeout(() => el.classList.remove("adg-marca"), 2600); }
}
window.loadAdagios = loadAdagios;
if (adgBox() && typeof ADAGIOS !== "undefined"){ adgFiltro(); adgRender(); }
