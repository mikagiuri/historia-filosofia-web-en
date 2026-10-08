// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/leibniz.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const LEIBNIZ = {
 "retrato": "Gottfried Wilhelm Leibniz (Leipzig, 1646 – Hanover, 1716), portrayed by Christoph Bernhard Francke around 1695.",
 "intro": "Leibniz was a philosopher, mathematician, jurist, diplomat and inventor. He had a very ambitious dream: that <strong>thinking should be as reliable as calculating</strong>. If ideas could be written with exact signs, an argument would be settled in the same way as a sum, without shouting or tricks.",
 "pista": "His dream was not fully realised, but along the way he invented a calculating machine and the system of zeros and ones that every computer uses today. Here you are going to follow that path.",
 "maquina": {
  "titulo": "A machine that multiplies",
  "texto": [
   "In 1642, Pascal had built a machine that added and subtracted. Leibniz wanted more: one that would also <strong>multiply and divide</strong>. He presented a wooden model to the Royal Society in London in 1673 and went on perfecting it for twenty years.",
   "The secret is the <strong>stepped drum</strong>: a cylinder with nine teeth of increasing length. A small wheel is positioned along the cylinder and, depending on where it is, on each turn it engages 0, 1, 2… up to 9 teeth. So each turn of the crank adds the chosen digit all at once.",
   "Only two examples were built and they did not work entirely well: the ‘carry one’ mechanism failed. But the stepped drum continued to be used in mechanical calculators well into the 20th century."
  ],
  "cita": "It is unworthy of excellent people to lose hours like slaves in the labour of calculation, which could be entrusted to anyone if machines were used.",
  "citaPie": "Leibniz, on his arithmetical machine (1685)",
  "ruedaTit": "Try the wheel",
  "ruedaTxt": "Move the small wheel along the cylinder: the teeth it engages are the digit that is added on each turn.",
  "multTit": "Multiply like Leibniz",
  "multTxt": "The machine does not multiply ‘all at once’: it adds the first number as many times as each digit of the second says and, between one digit and the next, it shifts the carriage one position (as when you multiply by hand and move over one place).",
  "multFin": "Done: {a} × {b} = {r}. You needed {v} turns of the crank, instead of {b} additions in a row."
 },
 "binario": {
  "titulo": "Everything with two digits: 0 and 1",
  "texto": [
   "We count in tens because we have ten fingers. Leibniz asked himself what would happen if we counted <strong>in twos</strong>: only two digits would be needed, 0 and 1. In binary, 2 is written 10; 3 is 11; 4 is 100… and 1 + 1 = 10.",
   "He had already studied it in 1679, but he published it in 1703. For Leibniz it also had a religious meaning: everything can come from the one (God) and from nothing (zero).",
   "In the meantime, a Jesuit living in Beijing, Joachim Bouvet, sent him a diagram with the <strong>64 hexagrams</strong> of the <em>Yijing</em> (the Chinese ‘Book of Changes’), attributed to the legendary Fuxi. Each hexagram is six lines, solid or broken. If the solid line is read as 1 and the broken one as 0, the diagram orders the numbers from 0 to 63. Leibniz was fascinated."
  ],
  "cuidado": "Beware of hasty conclusions: Leibniz <strong>did not copy</strong> binary from China, because he already had it before receiving the letter. And reading the hexagrams as numbers was his and Bouvet’s interpretation: in China they were used for divination and reflection, not for counting.",
  "hexTit": "A hexagram is a number",
  "hexTxt": "Click the lines to change them (solid = 1, broken = 0) or type a number from 0 to 63. Here, the top line is the most significant digit.",
  "puente": "Today, each 1 and each 0 is a circuit that lets current through or not. See how calculations are done with them in the <a href=\"#logica/puertas\">logic gates of the Logic Corner</a>."
 },
 "alfabeto": {
  "titulo": "An alphabet of thoughts",
  "texto": [
   "As a young man, Leibniz read the <em>Ars Magna</em> of Ramon Llull, a 13th-century Majorcan who combined concepts with rotating wheels. It gave him an idea: if all complex concepts are made of simple concepts, an <strong>‘alphabet of human thoughts’</strong> would be enough to write any idea by combining its letters.",
   "In 1679 he tried using numbers. He gave each simple concept a <strong>prime number</strong> and each compound concept the product of its parts. His example: animal = 2, rational = 3, so human being (rational animal) = 2 × 3 = 6.",
   "And now comes the good part: ‘Every human being is an animal’ is true because <strong>6 can be divided by 2</strong>. Checking a sentence becomes doing a division."
  ],
  "conceptos": [
   {
    "t": "animal",
    "n": 2
   },
   {
    "t": "rational",
    "n": 3
   },
   {
    "t": "biped",
    "n": 5
   },
   {
    "t": "feathered",
    "n": 7
   },
   {
    "t": "flying",
    "n": 11
   },
   {
    "t": "running",
    "n": 13
   },
   {
    "t": "human being",
    "n": 6,
    "de": "animal × rational"
   },
   {
    "t": "bird",
    "n": 70,
    "de": "animal × biped × feathered"
   },
   {
    "t": "sparrow",
    "n": 770,
    "de": "bird × flying"
   },
   {
    "t": "ostrich",
    "n": 910,
    "de": "bird × running"
   },
   {
    "t": "bat",
    "n": 22,
    "de": "animal × flying"
   }
  ],
  "probTit": "Try it yourself",
  "probTxt": "Choose a subject and a predicate. The sentence ‘Every… is…’ will be true if the predicate’s number divides the subject’s exactly.",
  "problema": "The problem: which concepts are truly simple? What number would you give to ‘justice’ or to ‘freedom’? Leibniz never managed to complete his alphabet, and for sentences like ‘no…’ or ‘some…’ he had to complicate the system with pairs of numbers."
 },
 "tratados": {
  "titulo": "His writings on logic",
  "texto": "Leibniz did not write one great book of logic, but hundreds of drafts. Most of them <strong>remained unpublished</strong> for more than two centuries: the French philosopher Louis Couturat brought them to light between 1901 and 1903. That is why, when Boole and Frege reinvented logic in the 19th century, they did not know that Leibniz had arrived earlier at many of their ideas.",
  "lista": [
   {
    "y": "1666",
    "t": "<em>Dissertation on the Art of Combinations</em>",
    "d": "His youthful thesis: inspired by Llull, he proposes combining simple concepts to obtain all compound ones."
   },
   {
    "y": "1679",
    "t": "<em>Elements of a Universal Characteristic</em> and other writings",
    "d": "The characteristic numbers: each concept, a number; each sentence, a calculation."
   },
   {
    "y": "1686",
    "t": "<em>General Inquiries about the Analysis of Notions and Truths</em>",
    "d": "His most complete logical calculus. He maintains that in every truth the predicate is contained in the subject: to say ‘Every S is P’ is to say that the notion of S contains that of P."
   },
   {
    "y": "c. 1686",
    "t": "<em>On the Verification of Logical Form by Drawing Lines</em>",
    "d": "The draft of the diagrams: he checks syllogisms by drawing circles and lines."
   },
   {
    "y": "1704",
    "t": "<em>New Essays on Human Understanding</em>",
    "d": "His reply to Locke, in the form of a dialogue. He defends the value of Aristotle’s logic and of the forms of reasoning. It was not published until 1765."
   }
  ]
 },
 "diagramas": {
  "titulo": "Euler diagrams… that Leibniz drew",
  "texto": [
   "The circles we use to check syllogisms are called <strong>Euler diagrams</strong>, because the mathematician Leonhard Euler popularised them in his <em>Letters to a German Princess</em> (written in 1761). But Leibniz had already drawn them around 1686, when Euler had not even been born. And he was not the first either: he himself tells that as a young man he had seen them in a book by Johann Christoph Sturm (1661).",
   "Leibniz also tried another form: representing each concept as a <strong>line</strong>. If the line of S lies within that of P, every S is P. These are the <strong>linear diagrams</strong>, less famous but just as useful."
  ],
  "probTit": "Compare the two versions",
  "probTxt": "Choose a proposition or a syllogism and see how Leibniz would draw it with circles and with lines. In the lines, the dotted stretch is the part that may or may not exist.",
  "casos": [
   {
    "id": "A",
    "t": "Every S is P",
    "d": "S is entirely inside P."
   },
   {
    "id": "E",
    "t": "No S is P",
    "d": "S and P do not touch."
   },
   {
    "id": "I",
    "t": "Some S is P",
    "d": "S and P share a part."
   },
   {
    "id": "O",
    "t": "Some S is not P",
    "d": "A part of S lies outside P."
   },
   {
    "id": "barbara",
    "t": "Every M is P; every S is M; therefore every S is P",
    "d": "Barbara syllogism: if S is inside M and M inside P, S is inevitably inside P."
   },
   {
    "id": "celarent",
    "t": "No M is P; every S is M; therefore no S is P",
    "d": "Celarent syllogism: S is inside M, and M does not touch P, so S does not either."
   }
  ],
  "circulos": "Circles (like Euler)",
  "lineas": "Lines (Leibniz only)",
  "puente": "Practise with many more syllogisms in the <a href=\"#logica/silogismos\">Logic Corner</a>."
 },
 "calculemos": {
  "titulo": "Let us calculate!",
  "cita": "When controversies arise, there will be no more need for dispute between two philosophers than between two accountants. It will be enough to take up the pen, sit down at the abacus and say to one another (calling a friend, if desired): let us calculate.",
  "citaPie": "Leibniz, a text from around 1685",
  "texto": "That was the complete dream: an exact language for writing ideas (the ‘universal characteristic’) and rules for calculating with them (the ‘calculus of reasoning’). You can try a small version of that dream: in the <a href=\"#logica/tablas\">Logic Corner</a>, a truth table decides, by calculation, whether an argument is valid.",
  "lineaTit": "What came after"
 },
 "linea": [
  {
   "y": "1666",
   "t": "Leibniz, aged 20, writes about the ‘art of combining’, inspired by Llull."
  },
  {
   "y": "1673",
   "t": "He presents his calculating machine to the Royal Society."
  },
  {
   "y": "1679",
   "t": "Binary arithmetic and characteristic numbers."
  },
  {
   "y": "1684",
   "t": "He publishes the infinitesimal calculus, which can add up infinitely many ever smaller pieces: the mathematical answer to <a href=\"#logica/paradojas/aquiles\">Achilles and the tortoise</a>."
  },
  {
   "y": "1854",
   "t": "George Boole turns logic into an algebra of 0 and 1."
  },
  {
   "y": "1879",
   "t": "Gottlob Frege invents a logical notation for all mathematical reasoning: the closest anyone has come to Leibniz’s alphabet."
  },
  {
   "y": "1931",
   "t": "Kurt Gödel proves a limit: in any such system there are truths that cannot be proved within it."
  },
  {
   "y": "1936",
   "t": "Alan Turing describes the machine that can perform any calculation… and proves that there are questions no machine can solve."
  },
  {
   "y": "1938",
   "t": "Claude Shannon shows that Boolean algebra can be used to design electrical circuits. The digital computer is born."
  },
  {
   "y": "Today",
   "t": "Artificial intelligence writes, translates and converses by calculating with zeros and ones."
  }
 ],
 "molino": {
  "titulo": "But… is calculating thinking?",
  "texto": "The curious thing is that Leibniz himself thought that <strong>a machine cannot feel or perceive</strong>. He explained it with a thought experiment:",
  "cita": "If we imagine a machine whose structure made it think, feel and perceive, we could enlarge it while keeping its proportions, so that we could enter it as into a mill. Walking through it from the inside, we would find only parts pushing one another, and never anything that explains a perception.",
  "citaPie": "Leibniz, Monadology, § 17 (1714)"
 },
 "reverso": {
  "titulo": "The other side: a mistreated genius",
  "intro": "So far, the brilliant Leibniz. But his life ended badly: at odds with the most powerful man in English science and, after his death, turned into the laughing stock of half of Europe."
 },
 "newton": {
  "titulo": "The calculus war: Newton, judge and party",
  "pie": "Isaac Newton, President of the Royal Society from 1703.",
  "texto": [
   "Newton and Leibniz invented the infinitesimal calculus <strong>each on his own</strong>. Newton had it around 1665–1666, but did not publish it; Leibniz arrived at it in 1675 and published it in 1684, with a notation so good (dx, ∫) that it is the one we still use. Today historians agree: neither copied the other.",
   "But then the matter ended in war. In 1711 Leibniz asked the Royal Society of London to defend him against an accusation of plagiarism. The president of the Royal Society was… <strong>Newton</strong>. He chose the members of the committee, which in 1712 published its report, the <em>Commercium epistolicum</em>, without asking Leibniz for his version. It ruled in Newton’s favour.",
   "In 1715 an anonymous review praising the report appeared in the Royal Society’s journal. It had been written by <strong>Newton himself</strong>. And in 1726, ten years after Leibniz’s death, Newton deleted from his great work, the <em>Principia</em>, the paragraph in which he acknowledged that Leibniz had arrived at the calculus on his own."
  ],
  "cuidado": "To be fair, Leibniz did not play clean either: in 1705 an anonymous review, written by him, hinted that Newton had copied his method, and in 1713 he circulated another anonymous sheet against Newton. What distinguishes them is power: Newton was <strong>judge and party</strong>.",
  "final": "Leibniz died in Hanover in 1716, in disgrace. Only his secretary attended his funeral. A witness wrote that they buried him ‘more like a robber than what he truly was: the pride of his country’. His grave went without a headstone for more than fifty years."
 },
 "voltaire": {
  "titulo": "Candide: Voltaire’s mockery",
  "pie": "Voltaire, who published Candide in 1759.",
  "texto": [
   "In the <em>Theodicy</em> (1710), Leibniz tried to answer a very old question: if God is good and all-powerful, why does evil exist? His answer: God chose, from among all possible worlds, <strong>the best of all possible worlds</strong>. Not a world without evils, but the one with the best possible combination of goods and evils.",
   "On 1 November 1755, an earthquake, a tidal wave and a fire destroyed Lisbon and killed tens of thousands of people. Voltaire wrote a furious poem: is this really the best of worlds? (Rousseau replied that nature had not built twenty thousand houses of six and seven storeys: a good part of the disaster was man-made.)",
   "In 1759, Voltaire published <em>Candide</em>, a short novel in which a naive young man travels the world through a chain of misfortunes: wars, shipwrecks, the Inquisition, the Lisbon earthquake itself. His teacher, <strong>Pangloss</strong>, repeats after every catastrophe that all is well in the best of all possible worlds."
  ],
  "cita": "Pangloss taught metaphysico-theologo-cosmolo-nigology. He proved admirably that there is no effect without a cause and that, in this best of all possible worlds…",
  "citaPie": "Voltaire, Candide, ch. 1. In French, ‘cosmolonigologie’: hidden inside is nigaud, ‘simpleton’.",
  "nombre": "And Leibniz appears by name: in chapter 28, Pangloss, after having been hanged, dissected and sentenced to the galleys, says he has no intention of changing his mind, because ‘Leibniz cannot be wrong’.",
  "matiz": "Careful: Voltaire ridicules a simplified version. Leibniz did not say that each misfortune is good, but that the world as a whole is the best possible. And there is a curious fact: Émilie du Châtelet, the scientist with whom Voltaire lived for years, was a Leibnizian and defended his ideas in a physics book (1740).",
  "pangloss": "And the name? ‘Pangloss’ comes from the Greek <em>pan</em> (all) and <em>glossa</em> (tongue): ‘all tongue’, that is, a windbag. Some see in it a mockery of Leibniz’s universal alphabet, the language that was to serve for all languages. It is a tempting reading, but there is no proof that Voltaire thought of it that way. What would be needed to prove it?",
  "final": "The novel ends with a sentence that has become famous: ‘We must cultivate our garden’. Fewer theories about the world as a whole and more concrete work to improve it."
 },
 "preguntas": {
  "titulo": "To think about",
  "lista": [
   "Can someone be a judge in their own cause? What should the Royal Society have done?",
   "Newton and Leibniz arrived at the same thing separately. Why do you think it mattered so much to them who was first?",
   "Is Voltaire’s mockery fair if it attacks a simplified version of Leibniz? What is satire for in philosophy?",
   "Could a moral dilemma be solved by calculation? Which part could be calculated and which could not?",
   "When we translate an idea into numbers, what do we gain and what do we lose?",
   "If you entered the ‘mill’ of an artificial intelligence, what would you find? Does that prove Leibniz right?",
   "Leibniz wanted to put an end to arguments. Would a world in which there was never any need to argue be a good one?"
  ]
 }
};
