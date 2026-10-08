// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/paradojas.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const PARADOJAS_GRUPOS = [
 {
  "id": "autorref",
  "view": "paradojas",
  "titulo": "Sentences that talk about themselves",
  "intro": "Paradoxes of self-reference: a sentence, a set or a rule that applies to itself and ends up saying one thing and its opposite at the same time."
 },
 {
  "id": "zenon",
  "view": "paradojas",
  "titulo": "Zeno: motion and the infinite",
  "intro": "Zeno of Elea, a disciple of Parmenides, devised arguments to show that motion, if we think about it carefully, seems impossible."
 },
 {
  "id": "regreso",
  "view": "paradojas",
  "titulo": "Regresses and loops",
  "intro": "When one explanation needs another explanation, and that one another, and so on, there are only three ways out: to go on without end (infinite regress), to stop at something that is no longer explained (an absolute, a first principle) or to return to the starting point (a loop or circle). Some circles are vicious and others are not; some absolutes explain and others merely stop the questioning. A famous drawing sums it up: <em>Drawing Hands</em> (1948), by M. C. Escher, in which each hand draws the other."
 },
 {
  "id": "vaguedad",
  "view": "paradojas",
  "titulo": "Vagueness and identity",
  "intro": "Words with no precise boundary and things that change little by little: where is the border? When does something stop being what it was?"
 },
 {
  "id": "accion",
  "view": "paradojas",
  "titulo": "Paradoxes of action and politics",
  "intro": "These are not logical contradictions, but situations in which the means seem to work against the end, or reason is not enough to decide."
 },
 {
  "id": "colectivo",
  "view": "paradojas",
  "titulo": "One and all",
  "intro": "What is good or true for each person can stop being so when everyone does it at once. These are paradoxes of addition: there is no mistake in each step, but in moving from ‘one’ to ‘all’."
 },
 {
  "id": "razonar",
  "view": "paradojas",
  "titulo": "Traps of reasoning",
  "intro": "Reasoning that seems impeccable and leads to a conclusion we cannot accept: you have to find the false step."
 },
 {
  "id": "ejercicios",
  "view": "ejercicios",
  "titulo": "Analysing sentences (class exercises)",
  "intro": "These are not paradoxes: they are sentences we have analysed in class. First we extract their logical form; then we look at what they say, what they take for granted and what they do not say even though it seems they do."
 },
 {
  "id": "agustin",
  "view": "clasicos",
  "titulo": "Saint Augustine: <em>On the Happy Life</em>",
  "intro": "Sentences from the dialogue <em>On the Happy Life</em> (ch. 2), in which Augustine, his mother Monica and some young men discuss, during a birthday banquet, who is happy. They are analysed with the same tools as the class sentences."
 }
];
const PARADOJAS = [
 {
  "id": "mentiroso",
  "grupo": "autorref",
  "titulo": "The Liar",
  "origen": "Eubulides of Miletus, 4th century BC",
  "enunciado": "‘This sentence is false.’",
  "problema": "If the sentence is true, then what it says is the case: that it is false. If it is false, then what it says is false, so it is not false: it is true. Each answer leads us to the opposite one. If we call <em>p</em> ‘this sentence is true’, the sentence asserts <em>p ↔ ¬p</em>, which is a contradiction: false whatever the value of <em>p</em>.",
  "salidas": "<ul><li><strong>Tarski</strong> (1933): a language cannot speak of the truth of its own sentences. A metalanguage is needed, a ‘higher-level’ language, in order to say ‘this sentence is true’ or ‘is false’.</li><li><strong>Kripke</strong> (1975): the sentence is ungrounded, because to know whether it is true one would first have to know it already. It is neither true nor false: it is left without a value.</li><li><strong>Dialetheism</strong> (Graham Priest): some sentences are both true and false, and a logic must be built that admits this without everything collapsing.</li></ul>",
  "pensar": "And the sentence ‘this sentence is true’? It does not lead to a contradiction, but what truth value would you give it, and why?"
 },
 {
  "id": "epimenides",
  "grupo": "autorref",
  "titulo": "Epimenides: ‘All Cretans are liars’",
  "origen": "Epimenides of Knossos (Crete), 6th century BC. It is sometimes told with Athenians or another people, but the ancient version is the Cretan one.",
  "enunciado": "Epimenides, who is a Cretan, says: ‘All Cretans always lie’.",
  "problema": "It seems the same as the Liar: if it is true, Epimenides, who is a Cretan, is lying when he says it, so it is false. But here is the trap: if it is false, it does not have to be true. That it is false only means that <strong>some</strong> Cretan tells the truth <strong>at some time</strong>. All that follows is that the sentence is false and that Epimenides is lying. There is no paradox, unless we add that Epimenides is the only Cretan or that this is the only sentence ever spoken in Crete. In logic: if <em>p</em> implies <em>¬p</em>, what follows is simply <em>¬p</em>.",
  "salidas": "<ul><li>It is a good example of how the negation of ‘all lie’ is not ‘all tell the truth’, but ‘someone does not lie’ (in the square of opposition, the contradictory of an A is an O).</li><li>Epimenides’ saying is quoted in the Bible (Epistle to Titus 1:12) with no logical concern at all: there it is used as an insult against the Cretans.</li></ul>",
  "pensar": "What would have to be added to the story for it to be a real paradox, like the Liar?"
 },
 {
  "id": "barbero",
  "grupo": "autorref",
  "titulo": "Russell’s barber",
  "origen": "Bertrand Russell used it in 1918 to explain in a simple way his paradox of sets (1901).",
  "enunciado": "In a village there is a barber who shaves all the men who do not shave themselves, and only them. Who shaves the barber?",
  "problema": "If the barber shaves himself, he is one of those who shave themselves, and he does not shave those: he does not shave himself. If he does not shave himself, he is one of those who do not shave, and he shaves all of those: he shaves himself. If <em>p</em> is ‘the barber shaves himself’, the rule says <em>p ↔ ¬p</em>: another contradiction.",
  "salidas": "<ul><li>The solution for the barber is simple: <strong>that barber cannot exist</strong>. The description is contradictory, like a ‘square circle’.</li><li>What is serious is the original version: the <strong>set of all sets that do not contain themselves</strong>. Does it contain itself? If so, it does not; if not, it does. Russell wrote to Frege about it in 1902, when Frege was about to publish his attempt to found mathematics on logic, and Frege acknowledged that his system was shaken.</li><li>The ways out were Russell’s <strong>theory of types</strong> (a set cannot be a member of itself) and set theories with axioms that forbid forming sets from just any property.</li></ul>",
  "pensar": "A library catalogue that lists all the catalogues that do not mention themselves: should it mention itself?"
 },
 {
  "id": "grelling",
  "grupo": "autorref",
  "titulo": "The paradox of ‘heterological’",
  "origen": "Kurt Grelling and Leonard Nelson, 1908.",
  "enunciado": "Some words say something that they themselves satisfy: ‘proparoxytone’ is proparoxytone, ‘polysyllabic’ has many syllables. We call them <em>autological</em>. The rest, like ‘monosyllabic’ or ‘very long’, are <em>heterological</em>. Is the word ‘heterological’ heterological?",
  "problema": "If ‘heterological’ is heterological, it satisfies what it says, so it is autological. If it is autological, it satisfies what it says, which is to be heterological. It is the barber, but with words: a property that applies to itself.",
  "salidas": "<ul><li>As with the Liar, it is proposed to separate levels: a word cannot be used to speak of properties of words at its own level without precautions.</li><li>Another way out: ‘heterological’ is not well defined for itself, just as the Liar sentence has no truth value.</li></ul>",
  "pensar": "Is the word ‘autological’ autological? Can it be decided?"
 },
 {
  "id": "cocodrilo",
  "grupo": "autorref",
  "titulo": "The Crocodile",
  "origen": "A classic problem of Greek logic, recorded by the Stoics and by Lucian.",
  "enunciado": "A crocodile steals a child and says to the mother: ‘I will give him back if you guess what I am going to do’. The mother replies: ‘You are not going to give him back’.",
  "problema": "If the crocodile keeps him, the mother has guessed correctly, and then he has to give him back. If he gives him back, the mother was wrong, and then he should not give him back. Whatever he does, he breaks his promise.",
  "salidas": "<ul><li>The crocodile’s promise depends on what he himself is going to do: it is another form of self-reference, and it cannot be kept in every case.</li><li>If the mother had said ‘you are going to give him back’, the crocodile could choose without contradiction: give him back (she is right) or keep him (she is wrong).</li></ul>",
  "pensar": "What answer suits the mother, and why is the one she gave the cleverest?"
 },
 {
  "id": "aquiles",
  "grupo": "zenon",
  "titulo": "Achilles and the tortoise",
  "origen": "Zeno of Elea, 5th century BC; Aristotle tells us of it in the <em>Physics</em> (Book VI).",
  "enunciado": "Achilles, the fastest of the Greeks, races a tortoise and gives it a head start. When he reaches the place where the tortoise was, it has already moved on a little. When he reaches that new point, it has moved on a little more. And so on for ever: Achilles never catches it.",
  "problema": "Each stretch is real and there are infinitely many stretches. It seems that covering infinitely many stretches requires infinite time, so Achilles would never catch the tortoise, which contradicts what we see.",
  "salidas": "<ul><li><strong>Mathematics</strong>: a sum of infinitely many terms can give a finite result. 1 + ½ + ¼ + ⅛ + … = 2. The infinitely many stretches are covered in a finite time, and one can calculate where he catches it.</li><li><strong>Aristotle</strong>: space and time are infinitely divisible only <em>in potentiality</em>; Achilles does not cover infinitely many stretches <em>in actuality</em>.</li><li>Some philosophers think the sum does not settle everything: the question remains of how a series of steps with no last step can be <em>completed</em>.</li></ul>",
  "pensar": "Zeno was defending Parmenides: motion is appearance. Why would an argument against motion help to defend that being is one and unmoving?"
 },
 {
  "id": "dicotomia",
  "grupo": "zenon",
  "titulo": "The Dichotomy",
  "origen": "Zeno of Elea, 5th century BC",
  "enunciado": "To cross the classroom, you first have to get to the halfway point. But before that, to half of that half. And before that, to half of that half… There is no first step, so you cannot even start to move.",
  "problema": "It is Achilles the other way round: instead of never reaching the end, you can never leave the beginning, because before any point there is another that must be reached first.",
  "salidas": "<ul><li>The same mathematical answer: ½ + ¼ + ⅛ + … = 1. Infinitely many stretches, finite distance, finite time.</li><li>The philosophical question: is space really infinitely divisible, or is there a minimum distance? Current physics still debates whether space and time are continuous.</li></ul>",
  "pensar": "Is there any difference between ‘it can be divided infinitely many times’ and ‘it is made of infinitely many parts’?"
 },
 {
  "id": "flecha",
  "grupo": "zenon",
  "titulo": "The Arrow",
  "origen": "Zeno of Elea, 5th century BC; also in Aristotle’s <em>Physics</em>.",
  "enunciado": "At every instant, an arrow in flight occupies a space exactly equal to itself: at that instant it is at rest. Time is made of instants. Therefore the arrow is always at rest.",
  "problema": "If it does not move at any instant, and time is nothing more than a sum of instants, when does it move? Yet we see that it reaches the target.",
  "salidas": "<ul><li><strong>Aristotle</strong>: time is not composed of indivisible instants, just as a line is not made of points. Motion occurs in intervals, not in instants.</li><li><strong>Modern calculus</strong>: velocity at an instant is defined as a limit. That the arrow occupies a place at each instant does not prevent it from having a velocity at that instant.</li></ul>",
  "pensar": "A film is still photos one after another. Does anything move in a film?"
 },
 {
  "id": "sorites",
  "grupo": "vaguedad",
  "titulo": "The heap (sorites)",
  "origen": "Eubulides of Miletus, 4th century BC. ‘Sorites’ comes from the Greek <em>sōrós</em>, ‘heap’.",
  "enunciado": "One grain of sand is not a heap. If something is not a heap, adding a single grain does not make it a heap. Therefore two grains are not a heap, nor three… nor a million.",
  "problema": "Both premises seem true and the reasoning is valid (it is a repeated modus ponens). But the conclusion is false: a million grains is a heap. The same happens with ‘bald’, ‘tall’, ‘rich’ or ‘adult’.",
  "salidas": "<ul><li><strong>There is an exact limit, but we do not know it</strong> (epistemicism, Timothy Williamson): some grain makes the heap, although nobody knows which.</li><li><strong>Degrees of truth</strong> (fuzzy logic): ‘this is a heap’ can be true to degree 0.4 or 0.9. Each grain adds a little truth.</li><li><strong>Borderline cases</strong> (supervaluationism): in the doubtful zone the sentence is neither true nor false, although it remains true that at some point it becomes a heap.</li></ul>",
  "pensar": "The law sets the age of majority at 18. Does this seem to you a solution to the sorites or a way of dodging it? Why is it needed?"
 },
 {
  "id": "teseo",
  "grupo": "vaguedad",
  "titulo": "The Ship of Theseus",
  "origen": "Plutarch, <em>Life of Theseus</em> (1st–2nd century); Thomas Hobbes added the second part in the 17th century.",
  "enunciado": "The Athenians kept Theseus’s ship and replaced the rotten planks with new ones, until not one of the originals was left. Is it still Theseus’s ship? And if someone had kept the old planks and reassembled them, which of the two would be Theseus’s ship?",
  "problema": "If identity depends on matter, the ship rebuilt from the old planks is Theseus’s. If it depends on continuity (it never stopped sailing and being cared for), the repaired one is. They cannot both be, because they are two ships.",
  "salidas": "<ul><li>Identity depends on <strong>form and function</strong>, not on matter (an idea close to Aristotle).</li><li>Identity depends on <strong>continuity</strong> over time.</li><li>‘Being the same’ is partly a <strong>convention</strong>: it depends on what we are asking for (a museum, a ship register, a trial).</li></ul>",
  "pensar": "Almost all the cells of your body are renewed every few years. What makes you remain you?"
 },
 {
  "id": "sivispacem",
  "grupo": "accion",
  "titulo": "‘Si vis pacem, para bellum’",
  "origen": "‘If you want peace, prepare for war.’ The idea comes from Vegetius, a Roman military writer (4th–5th centuries): <em>qui desiderat pacem, praeparet bellum</em>. The short formula is later.",
  "enunciado": "To achieve peace you must prepare for war: whoever is well armed will not be attacked.",
  "problema": "It seems that the means contradicts the end: arming oneself in order not to fight. It is not a logical contradiction (a means may bear little resemblance to its end), but a practical paradox. The problem lies in what happens if <strong>everyone</strong> follows the maxim: if one country arms itself to defend itself, its neighbour sees it as a threat and also arms itself. This is the <strong>security dilemma</strong>, which leads to the arms race.",
  "salidas": "<ul><li><strong>Deterrence</strong> works: during the Cold War the two powers had nuclear weapons and did not attack each other directly (‘mutually assured destruction’). But peace depended on a balance of fear, and there were moments very close to war, such as the Cuban missile crisis (1962).</li><li><strong>Kant</strong>, in <em>Perpetual Peace</em> (1795), asks that standing armies disappear over time, because they constantly threaten others with war and push them to outdo one another in armaments. For him, peace is built with law and republics, not with fear.</li><li>Some propose turning it around: <em>si vis pacem, para pacem</em>: if you want peace, prepare for peace.</li></ul>",
  "pensar": "Apply Kant’s test: what would happen if all countries acted according to this maxim? Would there be more peace or more wars?"
 },
 {
  "id": "tolerancia",
  "grupo": "accion",
  "titulo": "The paradox of tolerance",
  "origen": "Karl Popper, <em>The Open Society and Its Enemies</em> (1945), in a note to chapter 7.",
  "enunciado": "If a society is tolerant without limits, even towards those who want to destroy tolerance, they may end up destroying it. Unlimited tolerance leads to the disappearance of tolerance.",
  "problema": "To protect tolerance it seems that one must be intolerant towards some. But then, who decides towards whom, and is that not exactly what the intolerant do?",
  "salidas": "<ul><li>Popper does not say that every intolerant opinion must be banned. As long as it can be answered with arguments and held in check by public opinion, the sensible thing is not to ban it. Only when the intolerant refuse to debate and answer with force does society have the right to defend itself.</li><li>Another way of seeing it (John Rawls): tolerance is like a pact. Whoever breaks it cannot demand that others keep it with them, although as long as they do not endanger the institutions they must be tolerated.</li></ul>",
  "pensar": "Where would you draw the line: at ideas, at words or at actions?"
 },
 {
  "id": "buridan",
  "grupo": "accion",
  "titulo": "Buridan’s ass",
  "origen": "Attributed to Jean Buridan (14th century), although it does not appear in his works. The idea is already in Aristotle, <em>On the Heavens</em> (Book II).",
  "enunciado": "An ass, equally hungry on both sides, stands exactly between two identical piles of hay. It has no reason to go to one rather than the other, so it does not move and starves to death.",
  "problema": "If we only act when we have a reason to prefer something, faced with two identical options we could not choose. But starving is worse than either of the two options.",
  "salidas": "<ul><li>We must have the <strong>freedom to choose without a reason</strong>, at random: this very point was used in the Middle Ages to discuss free will.</li><li><strong>Spinoza</strong> (<em>Ethics</em>, Part II) accepts the conclusion: a person in that perfect balance would starve to death. And if he is asked whether such a person would not be more of an ass than a human being, he answers that he does not know.</li><li>In real life there are never two exactly equal options. And if there are, tossing a coin is a rational decision.</li></ul>",
  "pensar": "Have you ever been stuck between two almost equal options? How did you resolve it?"
 },
 {
  "id": "hedonismo",
  "grupo": "accion",
  "titulo": "The paradox of hedonism",
  "origen": "Henry Sidgwick, <em>The Methods of Ethics</em> (1874); John Stuart Mill tells of it in his <em>Autobiography</em> (1873).",
  "enunciado": "Whoever seeks pleasure or happiness directly does not find it. It is found by whoever devotes themselves to something else.",
  "problema": "If happiness is the aim of everything we do (as hedonists and utilitarians think), the logical thing would be to seek it directly. But doing so seems the best way of losing it.",
  "salidas": "<ul><li>Mill, after a depression in his youth, concluded that only those who have their minds fixed on something other than their own happiness are happy: that of others, the improvement of humanity, an art or an occupation.</li><li>Aristotle would say that happiness is not a state to be pursued, but the result of a life in which one acts well: it appears when we do well what we do.</li></ul>",
  "pensar": "Has it happened to you that something stopped being fun just when you started making an effort to enjoy it?"
 },
 {
  "id": "examen",
  "grupo": "razonar",
  "titulo": "The surprise exam",
  "origen": "It circulated in the 1940s; D. J. O’Connor published it in 1948.",
  "enunciado": "The teacher announces: ‘Next week there will be a surprise exam: you will not know which day it is until that morning’. A student reasons: ‘It cannot be on Friday, because on Thursday afternoon we would know it must be Friday. With Friday ruled out, it cannot be Thursday either, for the same reason… So there cannot be a surprise exam’. On Wednesday there is an exam, and nobody expected it.",
  "problema": "Each step the student takes seems correct, but the conclusion is false: the exam was a surprise. Where does it go wrong?",
  "salidas": "<ul><li>The student takes the teacher’s announcement to be true (there will be an exam) and at the same time concludes that there will not be one. If he stops believing the announcement, he can no longer use it to rule out days, and any day is a surprise again.</li><li>The announcement speaks of what the students will know, and what they know changes as they reason about it: it is a form of self-reference, like the Liar.</li><li>With only one possible day (‘tomorrow there will be a surprise exam’) the announcement is indeed contradictory. With several days, it is no longer clear.</li></ul>",
  "pensar": "If the student had reached the conclusion ‘the exam has to be on Monday’, would it have been a surprise?"
 },
 {
  "id": "protagoras",
  "grupo": "razonar",
  "titulo": "Protagoras and Euathlus",
  "origen": "Aulus Gellius, <em>Attic Nights</em> (2nd century), tells it of the sophist Protagoras.",
  "enunciado": "Protagoras teaches law to Euathlus, who is to pay him when he wins his first case. Euathlus finishes his studies and does not defend anyone. Protagoras sues him. Protagoras: ‘If I win, you pay me because the judge orders it; if I lose, you pay me because you will have won your first case’. Euathlus: ‘If I win, I do not pay because the judge orders it; if I lose, I do not pay because I will not yet have won any case’.",
  "problema": "The two arguments have the same form and lead to opposite conclusions. Each chooses, as suits him, whether the sentence or the contract counts.",
  "salidas": "<ul><li>The trick lies in changing criterion halfway through the argument. If only one is fixed (the sentence or the contract), the dilemma disappears.</li><li>A lawyer’s way out: the judge rules in favour of Euathlus, because he has not yet won any case. But then Euathlus has already won one, and Protagoras can sue him again… and win.</li></ul>",
  "pensar": "The sophists taught how to defend any position. What does this case have to do with that?"
 },
 {
  "id": "omnipotencia",
  "grupo": "razonar",
  "titulo": "The stone that cannot be lifted",
  "origen": "The paradox of omnipotence, discussed in medieval philosophy.",
  "enunciado": "Can an all-powerful being create a stone so heavy that even he cannot lift it?",
  "problema": "If he can create it, there is something he cannot do: lift it. If he cannot create it, there is something he cannot do: create it. In both cases, he is not all-powerful.",
  "salidas": "<ul><li><strong>Thomas Aquinas</strong>: to be omnipotent is to be able to do everything that is <em>possible</em>. What contains a contradiction (‘a stone that cannot be lifted by one who can do everything’) is not something that cannot be done, but a meaningless phrase, like ‘a square circle’.</li><li>Others think the paradox shows that the idea of a power with no limit at all is incoherent.</li></ul>",
  "pensar": "Is it a limitation not to be able to do what is contradictory?"
 },
 {
  "id": "berry",
  "grupo": "autorref",
  "titulo": "Berry’s paradox",
  "origen": "Russell published it in 1908 and attributed it to G. G. Berry, a librarian at the University of Oxford.",
  "enunciado": "Think of ‘the smallest natural number that cannot be named in fewer than fifteen words’. There are such numbers, because with fewer than fifteen words only a limited number of sentences can be formed, and numbers never run out; and among them there will be a smallest one. But the sentence in quotation marks has fourteen words.",
  "problema": "The sentence names that number in fourteen words, so the number can be named in fewer than fifteen: it is not the one we were looking for. And if it is not that one, which is it? It does not speak of itself like the Liar, but it uses the word ‘name’ to speak of everything that can be named, including itself.",
  "salidas": "<ul><li>As with the Liar, levels are separated: ‘nameable in this language’ cannot be defined within that same language.</li><li>The idea later proved useful in mathematics: Gregory Chaitin used it to show that there are truths about the complexity of numbers that no system of rules can prove.</li></ul>",
  "pensar": "Why is there no paradox if we change ‘fifteen’ to ‘five’?"
 },
 {
  "id": "agripa",
  "grupo": "regreso",
  "titulo": "The Münchhausen trilemma",
  "origen": "Agrippa, a Greek sceptic (1st century), recorded by Sextus Empiricus in <em>Outlines of Pyrrhonism</em> (Book I). The name is Hans Albert’s (1968), after Baron Münchhausen, who claimed to have pulled himself out of a swamp by his own hair.",
  "enunciado": "—How do you know that is true? —For this reason. —And how do you know that reason is true? —For this other one. —And that one? … If we keep on asking, there are only three possible endings.",
  "problema": "<ul><li><strong>Infinite regress</strong>: each reason needs another, without end. We never finish justifying anything.</li><li><strong>Cut-off</strong>: at some point we say ‘this is no longer justified, it is just so’. But then everything else rests on something we have accepted without reason.</li><li><strong>Circle</strong>: the chain returns to a reason we had already used. But then what we wanted to prove serves to prove itself.</li></ul><p>None of the three seems a real justification.</p>",
  "salidas": "<ul><li><strong>Foundationalism</strong>: there are truths that need no proof because they are self-evident. For Descartes, ‘I think, therefore I am’; for Aristotle, the first principles, such as the principle of non-contradiction.</li><li><strong>Coherentism</strong>: beliefs do not form a chain but a web, and they support one another, like the stones of an arch.</li><li><strong>Fallibilism</strong> (Popper, Albert): there is no ultimate foundation. We accept reasons as long as they withstand criticism, knowing that we may be mistaken.</li></ul>",
  "pensar": "A child who asks ‘but why?’ over and over wears anyone’s patience out. Which of the three ways out do adults usually use to stop them?"
 },
 {
  "id": "tortugas",
  "grupo": "regreso",
  "titulo": "Turtles all the way down",
  "origen": "John Locke, <em>An Essay Concerning Human Understanding</em> (1690, Book II, ch. 23), tells the version of the elephant and the tortoise. The one with infinite turtles is an anecdote attributed to several scientists; Stephen Hawking uses it at the start of <em>A Brief History of Time</em> (1988).",
  "enunciado": "A wise man explains that the Earth rests on an elephant, and the elephant on a turtle. —And what does the turtle rest on? —On another turtle. —And that one? —It is useless, young man: it is turtles all the way down.",
  "problema": "Each support needs another support. The answer ‘turtles all the way down’ does not answer the question: it postpones it for ever. If nothing holds up the last turtle, because there is no last one, what holds up the whole?",
  "salidas": "<ul><li>Locke uses it to mock the idea of <strong>substance</strong>: we say that the qualities of things rest on ‘something’, but we do not know what that something is, just like the wise man with his turtle.</li><li>Modern physics changes the question: the Earth does not rest on anything, because ‘down’ is not an absolute direction; it is in orbit, falling continuously around the Sun.</li><li>It shows the difference between a regress that <strong>explains</strong> and one that merely <strong>postpones</strong> the explanation.</li></ul>",
  "pensar": "Is an infinite chain of turtles the same as an infinite chain of ancestors? Why does one seem absurd to us and the other not so much?"
 },
 {
  "id": "primermotor",
  "grupo": "regreso",
  "titulo": "The first cause: a regress that stops at an absolute",
  "origen": "Aristotle, <em>Physics</em> (Book VIII) and <em>Metaphysics</em> (Book XII); Thomas Aquinas, the ‘five ways’ of the <em>Summa Theologiae</em> (I, question 2, article 3).",
  "enunciado": "Everything that moves is moved by another. That other, in turn, is moved by another. But this cannot go on to infinity, because then there would be no first mover and nothing would move. Therefore there is a first mover that is moved by nothing, ‘and this everyone understands to be God’.",
  "problema": "To cut the regress short, an <strong>absolute</strong> is posited: something that explains everything else but needs no explanation. The objection is immediate: if everything has a cause, who caused the first cause? And if something can exist without a cause, why not the world itself?",
  "salidas": "<ul><li><strong>Aquinas</strong> distinguishes two chains. An infinite series of fathers and sons does not seem impossible to him. What is impossible is a chain in which each link acts <em>now</em> thanks to the previous one, like the hand that moves the stick that moves the stone: without the first, none would move.</li><li><strong>Spinoza</strong> calls this absolute <em>cause of itself</em>: that whose nature includes existing.</li><li><strong>Kant</strong> (<em>Critique of Pure Reason</em>, 1781): reason always seeks a condition that is itself no longer conditioned, and so it arrives at an absolute. But we cannot know whether it exists: the question goes beyond all possible experience.</li><li><strong>Russell</strong>, in a radio debate with Copleston (1948), rejects it: ‘the universe is just there, and that’s all’.</li></ul>",
  "pensar": "Stopping a regress at something that ‘needs no explanation’: is that explaining, or ceasing to ask? Does a child who answers ‘just because’ do the same?"
 },
 {
  "id": "carroll",
  "grupo": "regreso",
  "titulo": "What the Tortoise said to Achilles",
  "origen": "Lewis Carroll, author of <em>Alice’s Adventures in Wonderland</em> and a logic lecturer, in the journal <em>Mind</em> (1895).",
  "enunciado": "Achilles teaches the tortoise an argument: ‘If it rains, the ground gets wet. It is raining. Therefore the ground gets wet’. The tortoise accepts the two premises, but not the conclusion, until the rule is also written down: ‘If it is true that if it rains the ground gets wet, and it is true that it is raining, then the ground gets wet’. Achilles adds it. The tortoise then asks for another rule saying that, with those three, the conclusion follows. And so on for ever.",
  "problema": "If every rule for drawing a conclusion has to be added as one more premise, another rule will be needed to use that premise, and another… We would never get to conclude anything, not even with modus ponens, which is the simplest argument.",
  "salidas": "<ul><li>A rule of inference is not one more premise: it is what you <strong>do</strong> with the premises. Knowing how to reason is knowing how to do it, not having one more sentence written down.</li><li>The formula <em>(p ∧ (p → q)) → q</em> is a tautology, true in every row of the table. But its being true is not enough to derive <em>q</em>: it has to be used.</li><li>Wittgenstein returns to something similar: following a rule cannot always depend on another rule that interprets it; at some point, we simply act.</li></ul>",
  "pensar": "What would you say to the tortoise to make it stop asking for rules?"
 },
 {
  "id": "tercerhombre",
  "grupo": "regreso",
  "titulo": "The Third Man",
  "origen": "Plato raises it against himself in the <em>Parmenides</em> (132a); the name is Aristotle’s (<em>Metaphysics</em>, Book I).",
  "enunciado": "Socrates, Plato and Phaedo are men because they all participate in the Idea of Man. But the Idea of Man and individual men resemble each other in something: all are ‘man’. To explain that resemblance another Idea above them would be needed: a ‘third man’. And that third man would resemble the previous ones, and would need a fourth Idea…",
  "problema": "The Ideas are introduced to explain why many things have something in common. But if the Idea resembles the things, it itself becomes one more of those things, and another Idea is needed. Instead of one Idea for each kind of thing, there would be infinitely many.",
  "salidas": "<ul><li>The Idea is not one more specimen, like a perfect man placed beside the others. It does not <em>have</em> humanity, it <em>is</em> humanity, and so it is not compared with men on the same level.</li><li><strong>Aristotle</strong> uses the argument against Plato: forms do not exist separately, but in the things themselves.</li><li>It is a regress that does not stop at an absolute: the proposed absolute (the Idea) needs explaining again as soon as we put it on the same plane as what it explains.</li></ul>",
  "pensar": "Does a photograph of you resemble you in the same way that you resemble another person?"
 },
 {
  "id": "custodes",
  "grupo": "regreso",
  "titulo": "Who watches the watchman?",
  "origen": "Juvenal, <em>Satires</em> (VI, 347–348): <em>quis custodiet ipsos custodes?</em> Plato already raises it in the <em>Republic</em> (III, 403e).",
  "enunciado": "To prevent abuses we appoint a watchman. But the watchman can also abuse his position, so we need someone to watch him. And who watches that one?",
  "problema": "It is a political regress. There seem to be only two ways to end it: to stop it at an <strong>absolute</strong>, an ultimate power that nobody watches, or to close it into a <strong>loop</strong>, where the watchmen watch one another.",
  "salidas": "<ul><li><strong>The absolute</strong>: Hobbes, in <em>Leviathan</em> (1651), sets up a sovereign who is not subject to the laws he himself dictates. This ends the chain, but if the sovereign abuses his power, nobody can stop him.</li><li><strong>The loop</strong>: Montesquieu, in <em>The Spirit of the Laws</em> (1748), proposes that ‘power should check power’. If the legislative, the executive and the judiciary control one another, no final watchman is needed. It is a circle, but not a vicious one: nobody justifies themselves, each limits the others.</li><li>Plato answered with education: the well-trained guardian needs no guardian. It would be ridiculous, he says, for a guardian to need another guardian.</li></ul>",
  "pensar": "In an exam, who marks the marker? Which mechanisms (review, appeal, inspection) form a loop and which end in a final word?"
 },
 {
  "id": "huevo",
  "grupo": "regreso",
  "titulo": "Which came first, the chicken or the egg?",
  "origen": "Plutarch discusses the question in his <em>Table Talk</em> (Book II, 3), in the 1st–2nd century.",
  "enunciado": "Every chicken comes from an egg, and every chicken’s egg is laid by a chicken. So before any chicken there was an egg, and before that egg, a chicken… Which was the first?",
  "problema": "It is a loop: each term depends on the other. If we trace it backwards, either we go round endlessly (regress) or we have to break one of the two rules: either there was a chicken that did not come from an egg, or an egg that was not laid by a chicken.",
  "salidas": "<ul><li><strong>Aristotle</strong> answers that it was the chicken: what exists in actuality (the chicken) is prior to what is only in potentiality (the egg, which can become a chicken).</li><li><strong>Evolution</strong> breaks the loop: species change little by little. At some point, a bird that was almost a chicken laid an egg from which came something we already call a chicken. So the egg came first, but it was laid by something that was not quite a chicken. The loop was really a <strong>spiral</strong>: each turn is somewhat different from the previous one.</li><li>It is also a case of vagueness, like the sorites: ‘chicken’ has no exact boundary.</li></ul>",
  "pensar": "Look for other loops of this kind: experience and work (they will not hire you without experience, and you cannot get experience without work). How are they broken in real life?"
 },
 {
  "id": "diccionario",
  "grupo": "regreso",
  "titulo": "The dictionary loop",
  "origen": "A classic problem in the philosophy of language; it is used, for example, by Wittgenstein in the <em>Philosophical Investigations</em> (1953).",
  "enunciado": "You look up ‘large’ in a dictionary and it says something like ‘of greater size than normal’. You look up ‘size’: ‘magnitude of a thing’. You look up ‘magnitude’: ‘size or greatness’. You are back at the beginning.",
  "problema": "Each word is defined with other words. Since a dictionary has a limited number of words, sooner or later the definitions form loops. So how does any of them come to mean anything, if each refers to others?",
  "salidas": "<ul><li>Loops are inevitable, but they do not make the dictionary useless: it only serves those who already know <strong>some</strong> words.</li><li>The first words are not learnt through definitions, but by <strong>pointing</strong> and using: ‘this is red’, ‘that is big’. This is ostensive definition, which cuts the regress outside language.</li><li>Wittgenstein adds that the gesture of pointing is not enough by itself either: you must already know what is being pointed at (the colour? the shape? the number?). Meaning lies in use, within a form of life.</li></ul>",
  "pensar": "How would you explain what ‘red’ is to someone who cannot see colours? And what ‘after’ is?"
 },
 {
  "id": "yablo",
  "grupo": "regreso",
  "titulo": "Yablo’s paradox: a liar without self-reference",
  "origen": "Stephen Yablo, in the journal <em>Analysis</em> (1993).",
  "enunciado": "Imagine an infinite list of sentences. Sentence 1 says: ‘All the sentences that come after me are false’. Sentence 2 says the same, and so does 3, and so on without end. None of them speaks of itself.",
  "problema": "If any sentence were true, all the following ones would be false. But if the next one is false, some of those that come after it is true, and that contradicts the previous claim. So all are false. But if all those that follow sentence 1 are false, sentence 1 is true. Contradiction, and with no sentence that speaks of itself.",
  "salidas": "<ul><li>It seemed that the Liar could be fixed by forbidding a sentence to speak of itself. Yablo shows that this is not enough: an <strong>infinite regress</strong> produces the same paradox as a <strong>loop</strong>.</li><li>Some logicians (Graham Priest) reply that there is a hidden self-reference: to understand the whole list one has to refer to the list, which contains every sentence.</li></ul>",
  "pensar": "What do a loop (a sentence that speaks of itself) and an infinite chain (sentences that always speak of the following ones) have in common?"
 },
 {
  "id": "distintos",
  "grupo": "colectivo",
  "titulo": "‘If we all want to be different, then we are all the same’",
  "origen": "A much-repeated idea about fashions. Georg Simmel analysed it in <em>The Philosophy of Fashion</em> (1905); Monty Python took it to the cinema in <em>Life of Brian</em> (1979), where a crowd answers in chorus that they are all individuals.",
  "enunciado": "We all want to be different from others. But if we all want the same thing, in that we are the same. And, in fact, those who flee from fashion all end up dressing alike.",
  "problema": "<ul><li><strong>There is a play on words</strong>. ‘The same’ changes meaning between the premise and the conclusion. That we all have the <em>same desire</em> (to be different) does not mean that we have the <em>same features</em>. It is a fallacy of equivocation: one level (what we want) is confused with another (what we are).</li><li><strong>But something is true</strong>. Being different is a relation: one is always different <em>from</em> something. If we all take the same thing as our reference (what the majority does) and move away from it at the same time, we end up going together in the same direction. The mathematician Jonathan Touboul called this the <strong>hipster effect</strong> (2014): nonconformists end up resembling one another.</li></ul>",
  "salidas": "<ul><li><strong>Simmel</strong>: fashion unites two opposite desires. We want to imitate, in order to belong to a group, and to stand out, so as not to get lost in it. Each fashion is born to distinguish and dies when everyone imitates it.</li><li><strong>Logically there is no contradiction</strong>: it is possible for everyone to be different from everyone else at once. What is impossible is something else: that everyone be above average, or that everyone be ‘more original than most’.</li><li>In 2019 a magazine illustrated an article on the hipster effect with a photo of a man with a beard and a hat. A reader wrote in, indignant, because they had used his photo without permission. It was not him: it was another man who looked remarkably like him.</li></ul>",
  "pensar": "Can everyone be original at the same time? And can everyone be above average? Why is the answer different?"
 },
 {
  "id": "concierto",
  "grupo": "colectivo",
  "titulo": "Standing at the concert",
  "origen": "A classic example from economics textbooks to explain the <strong>fallacy of composition</strong>. The name comes from Aristotle (<em>Sophistical Refutations</em>), although he understood it somewhat differently.",
  "enunciado": "At a concert, if one person stands up, they see better. So if the whole audience stands up, everyone will see better.",
  "problema": "The premise is true and the conclusion is false: if everyone stands, everyone sees just as before, but is less comfortable. What holds for each person separately need not hold for everyone together, because each person’s advantage depended on the others <em>not</em> doing it.",
  "salidas": "<ul><li>The <strong>fallacy of composition</strong> goes from the parts to the whole (‘each piece is light, so the machine is light’). The fallacy of <strong>division</strong> does the opposite (‘the team is the best, so every player is the best’).</li><li>It is not always fallacious to go from the parts to the whole: if every brick is red, the wall is red. You have to check whether the property depends on the relation with the others.</li></ul>",
  "pensar": "Is it the same with studying more to get a better mark than the rest, or with getting to the queue earlier?"
 },
 {
  "id": "ahorro",
  "grupo": "colectivo",
  "titulo": "The paradox of thrift",
  "origen": "John Maynard Keynes, <em>The General Theory of Employment, Interest and Money</em> (1936), which recalls Mandeville and his <em>Fable of the Bees</em> (1714).",
  "enunciado": "Saving is good for a family: if it spends less than it earns, it will have money for when it needs it. So if in a crisis all families save more, the country will be better off.",
  "problema": "If everyone spends less at the same time, shops and firms sell less, lay off workers, and those families earn less and can save less. Everyone’s attempt to save can end in less saving and more unemployment. What is prudent for one turns out to be harmful for all.",
  "salidas": "<ul><li>It is another case of the fallacy of composition: one person’s spending is another’s income, and this is not seen if you look at a single family.</li><li>Keynes concludes that in a crisis the State should spend when families cannot. Other economists debate when and how far this idea holds.</li></ul>",
  "pensar": "Kant asks what would happen if everyone acted according to the same maxim. Does that test also work outside ethics, as here?"
 },
 {
  "id": "comunes",
  "grupo": "colectivo",
  "titulo": "The tragedy of the commons",
  "origen": "William Forster Lloyd (1833); Garrett Hardin made it famous in the journal <em>Science</em> (1968).",
  "enunciado": "A meadow belongs to all the herdsmen of the village. It suits each herdsman to add one more sheep: the benefit is all his, and the damage to the meadow is shared among everyone. Since everyone reasons the same way, the meadow is exhausted and nobody can use it.",
  "problema": "Each decision is rational for the one who makes it, and the result is bad for everyone, including each individual. There is no error in each herdsman’s calculation; the problem lies in the sum.",
  "salidas": "<ul><li><strong>Hardin</strong> proposed two ways out: divide the meadow up as private property or have the State control it.</li><li><strong>Elinor Ostrom</strong> (Nobel Prize in Economics in 2009) studied villages that have shared pastures, forests or irrigation for centuries without exhausting them. They manage it with rules they set themselves, mutual monitoring and graduated sanctions. For example, the Water Tribunal of Valencia.</li><li>The climate, fish stocks or the silence of a library are also ‘commons’.</li></ul>",
  "pensar": "What ‘commons’ are there in your class or your school? What rules protect them?"
 },
 {
  "id": "moore",
  "grupo": "razonar",
  "titulo": "Moore’s paradox: ‘It is raining, but I do not believe it’",
  "origen": "G. E. Moore raised it in the 1940s; Wittgenstein gave it its name.",
  "enunciado": "‘It is raining, but I do not believe that it is raining.’",
  "problema": "The sentence is not a contradiction: it can be true that it is raining and that I do not believe it (I am in a basement with no windows). Said by someone else (‘it is raining, but he does not believe it’) it is perfectly normal. And yet, said by me it sounds absurd. Why, if it is not contradictory?",
  "salidas": "<ul><li>By <strong>asserting</strong> something, I imply that I believe it. So by saying ‘it is raining’, I am already implicitly saying ‘I believe it is raining’, and then I deny it. The contradiction lies not in what the sentence says, but between the sentence and the act of saying it.</li><li>Wittgenstein saw here that ‘I believe that…’ does not always describe a state of mine: it is often a cautious way of asserting.</li></ul>",
  "pensar": "And the sentence ‘I do not believe it is raining, but I may be wrong’? Is it also absurd?"
 },
 {
  "id": "prefacio",
  "grupo": "razonar",
  "titulo": "The preface paradox",
  "origen": "David Makinson, in the journal <em>Analysis</em> (1965).",
  "enunciado": "An author has carefully checked her book and believes every one of the sentences she has written. But in the preface she writes: ‘There are surely some errors in this book, and I apologise for them’. She believes this too, because all long books contain errors.",
  "problema": "She believes sentence 1 is true, that 2 is true… and that the last is true. And she believes at the same time that some are false. Her beliefs together cannot all be true. And yet it seems reasonable to believe them all: more reasonable than thinking her book is perfect.",
  "salidas": "<ul><li>Perhaps believing incompatible things is not always irrational, as long as they are not joined into a single belief (‘my whole book is true’).</li><li>Another way out: we do not believe each sentence at 100%, but with a degree of confidence. If each sentence is 99% probable, a book of a thousand sentences almost certainly has some false one. Thus there is no contradiction.</li></ul>",
  "pensar": "Do you think all your opinions are true? And do you think some of them are false? Does that seem a contradiction to you?"
 },
 {
  "id": "infelices",
  "grupo": "ejercicios",
  "titulo": "‘Of all the unhappy…’",
  "origen": "A sentence proposed as a class exercise.",
  "enunciado": "‘Of all the unhappy, those who get everything they want are not the ones who get the worst of it.’",
  "problema": "We are talking about people, so we take three properties: <em>p</em> = ‘is unhappy’, <em>q</em> = ‘gets everything they want’, <em>r</em> = ‘gets the worst of it’. The sentence says: <strong>if someone is unhappy and gets everything they want, then they do not get the worst of it</strong>: <em>(p ∧ q) → ¬r</em>. It is a universal negative (type E): ‘No unhappy person who gets everything is among those who get the worst of it’. Its contrapositive says the same from the other side: if an unhappy person gets the worst of it, then they have not got everything they want: <em>(p ∧ r) → ¬q</em>.",
  "salidas": "<ul><li><strong>What it takes for granted</strong>: that there are unhappy people who get everything they want. If there were none, it would make no sense to single them out ‘of all the unhappy’. Getting everything you want is not enough to be happy.</li><li><strong>What it suggests but does not say</strong>: that the worst of it falls to those who do not get what they want. It is a suggestion (what is implied), not a logical consequence: the sentence only excludes one group, it does not say who gets the worst of it.</li><li><strong>What it does not say</strong>: that those who get everything are happy (on the contrary, it counts them among the unhappy), or that they suffer little: only that they are not the ones who suffer most.</li><li><strong>Related ideas</strong>: Schopenhauer (<em>The World as Will and Representation</em>, § 57) thought that life swings like a pendulum between the pain of unsatisfied desire and the boredom of fulfilled desire. Oscar Wilde, in <em>Lady Windermere’s Fan</em>, has a character say that there are two tragedies: not getting what you want and getting it.</li></ul>",
  "pensar": "Make the truth table for (p ∧ q) → ¬r: in which single row would the sentence be false? Describe the person who would make it false.",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 135,
     "cy": 122,
     "r": 105,
     "cls": "lg-e2",
     "etq": "Unhappy (p)",
     "ex": 120,
     "ey": 60
    },
    {
     "cx": 98,
     "cy": 142,
     "r": 54,
     "cls": "lg-e4",
     "etq": "Worst of it (r)",
     "ex": 98,
     "ey": 136
    },
    {
     "cx": 250,
     "cy": 112,
     "r": 70,
     "cls": "lg-e1",
     "etq": "Get everything (q)",
     "ex": 268,
     "ey": 20
    }
   ],
   "cruces": [
    [
     210,
     116
    ],
    [
     98,
     166
    ]
   ],
   "dudas": [
    [
     290,
     120
    ]
   ],
   "lectura": "<ul><li>The large circle is the <strong>unhappy (p)</strong>. The sentence speaks ‘of all the unhappy’, so those who get the <strong>worst of it (r)</strong> are drawn inside: it is the worst of it among the unhappy.</li><li>The circle of those who <strong>get everything (q)</strong> crosses that of the unhappy, and the ✕ at the crossing marks what the sentence takes for granted: there are unhappy people who get everything.</li><li>The circles <strong>q</strong> and <strong>r</strong> do not touch: this is the universal negative, ‘no unhappy person who gets everything gets the worst of it’, <em>(p ∧ q) → ¬r</em>.</li><li>The ✕ inside <strong>r</strong>: the sentence takes for granted that someone gets the worst of it. Since it lies outside <strong>q</strong>, that someone has not got everything: this is the contrapositive, <em>(p ∧ r) → ¬q</em>.</li><li>The <strong>?</strong> marks what the sentence does not say: whether there are people who get everything without being unhappy. That zone may or may not be empty.</li><li>What the sentence merely suggests, that everyone who does not get it all gets the worst of it, <strong>is not in the drawing</strong>: inside <strong>p</strong> there remains a zone outside <strong>q</strong> and <strong>r</strong>, that of the unhappy who neither get everything nor get the worst of it. And the drawing shows where each one is, not why: that the worst of it comes <em>from</em> not getting what one desires cannot be drawn either.</li></ul>",
   "contingencia": "<p>The truth table of <em>(p ∧ q) → ¬r</em> has eight rows and the sentence is false in only one: it is <strong>contingent</strong>. In the diagram, each row is a <strong>zone</strong>, a type of person depending on whether they are inside or outside each circle. The eight rows are the eight possible zones.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(p ∧ q) → ¬r</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Unhappy person who gets everything and gets the worst of it</td><td><strong>Not there</strong>: q and r do not touch inside p. It is the zone the sentence forbids.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Unhappy person who gets everything and does not get the worst of it</td><td>The crossing of p and q, with ✕: there is someone.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Unhappy person who does not get everything and gets the worst of it</td><td>The circle r, with ✕: there is someone.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Unhappy person who neither gets everything nor gets the worst of it</td><td>The rest of p.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Not unhappy, gets everything and gets the worst of it</td><td>Not there, but not because of the formula: r is drawn inside p because of the reading ‘of all the unhappy’.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Not unhappy and gets everything</td><td>The part of q outside p, with ?: it is not known whether there is anyone.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Not unhappy, does not get everything and gets the worst of it</td><td>Not there, for the same reading ‘of all the unhappy’.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Neither unhappy, nor gets everything, nor gets the worst of it</td><td>Outside all the circles.</td></tr></tbody></table></div><ul><li><strong>False row = missing zone.</strong> What the sentence asserts is drawn by removing the only combination that would make it false: the circles q and r are separated inside p. The true rows are the zones the sentence leaves possible.</li><li><strong>That is why it is contingent</strong>: it removes some zones and leaves others. A <strong>tautology</strong> is true in every row, so it would remove no zone: any drawing would do and it would say nothing about what the world is like (this is what Wittgenstein says of tautologies in the <em>Tractatus</em>). A <strong>contradiction</strong> is false in every row, so it would remove them all, including the one outside the circles: no one could be drawn. The contingent sentence is informative because it lies between the two: it rules out one case and leaves the others open.</li><li><strong>Trap</strong>: in the drawing three zones are missing, but the formula removes only one. The other two (r outside p) are removed by the reading ‘of all the unhappy’, which is not in <em>(p ∧ q) → ¬r</em>. If we wanted to put it in the formula, we would have to add <em>r → p</em>.</li><li><strong>The diagram says more than the table</strong>: the table says which combinations are possible, not which exist. The ✕ marks (there is someone in that zone) are what the sentence takes for granted, and this can no longer be expressed in propositional logic: one needs to say ‘there is some…’, which belongs to predicate logic or the syllogism.</li></ul>"
  }
 },
 {
  "id": "apenas",
  "grupo": "ejercicios",
  "titulo": "‘Barely any less unhappy…’",
  "origen": "A sentence proposed as a class exercise, following the previous one.",
  "enunciado": "‘Those who get everything they want are barely any less unhappy than those who get little or nothing.’",
  "problema": "This sentence no longer classifies (being unhappy or not), but <strong>compares degrees</strong>. Let us call <em>q</em> those who get everything they want and <em>s</em> those who get little or nothing. The sentence asserts two things at once: that <em>q</em> is less unhappy than <em>s</em> (‘are less unhappy’) and that the difference is small (‘barely’). It is a conjunction: if either part fails, the sentence is false. In propositional logic, all of this is reduced to a single letter, because ‘A is less unhappy than B’ does not break down into parts that are true or false separately: a relation between two terms is needed, <em>M(x, y)</em>, ‘x is less unhappy than y’, and that belongs to predicate logic. That is why neither the truth table with p, q and r nor Euler circles, which only say who is inside and who is outside, are of use here: a scale is needed.",
  "salidas": "<ul><li><strong>What it says</strong>: getting everything improves things somewhat, but very little. Careful: ‘barely any less’ <strong>does assert</strong> that they are less unhappy. It does not say they are equally so: ‘barely’ is not ‘not’.</li><li><strong>What it takes for granted</strong>: that there are some who get everything and some who get little or nothing; that nobody is in both groups at once; and that both groups have some unhappiness, because otherwise there would be no talk of being ‘less unhappy’.</li><li><strong>What it does not say</strong>: nothing about those who get quite a lot, but not everything. The sentence compares the extremes and leaves out the middle. It cannot be deduced that this group is halfway in unhappiness: it could be the happiest or the unhappiest of the three.</li><li><strong>Trap of reading</strong>: ‘those who get everything are less unhappy than those who get little’ can be read as ‘each of the former, less than each of the latter’ or as ‘in general, on average’. The first reading is refuted by a single counterexample; the second is not. General sentences about groups are usually understood in the second way.</li><li><strong>Relation to the previous sentence</strong>: if those who get everything are less unhappy than those who get little, even if only barely, they cannot be the ones who get the worst of it, because there is always someone worse off. On the first reading, the new sentence <strong>implies</strong> the previous one. Not the other way round: the previous one allowed that getting everything might greatly relieve unhappiness, and this one denies it.</li></ul>",
  "pensar": "Change ‘barely’ to ‘much’: does the sentence say more or less than before? And if you say ‘are not less unhappy’? Of the three versions, which would be the easiest to refute?",
  "escala": {
   "vista": "0 0 360 185",
   "eje": [
    15,
    345,
    100
   ],
   "banda": [
    178,
    218
   ],
   "marca": 222,
   "textos": [
    {
     "x": 222,
     "y": 34,
     "align": "middle",
     "t": "Little or nothing (s)"
    },
    {
     "x": 174,
     "y": 64,
     "align": "end",
     "t": "how far does ‘barely’ go?"
    },
    {
     "x": 198,
     "y": 136,
     "align": "middle",
     "t": "q: true"
    },
    {
     "x": 92,
     "y": 136,
     "align": "middle",
     "t": "q here: false"
    },
    {
     "x": 92,
     "y": 152,
     "align": "middle",
     "t": "(not ‘barely’)"
    },
    {
     "x": 290,
     "y": 136,
     "align": "middle",
     "t": "q here: false"
    },
    {
     "x": 290,
     "y": 152,
     "align": "middle",
     "t": "(not ‘less’)"
    },
    {
     "x": 15,
     "y": 176,
     "align": "start",
     "t": "less unhappy"
    },
    {
     "x": 345,
     "y": 176,
     "align": "end",
     "t": "more unhappy"
    }
   ],
   "lectura": "<ul><li>The line is the <strong>scale of unhappiness</strong>: to the left, less; to the right, more. The point <strong>s</strong> (those who get little or nothing) is the reference.</li><li>The <strong>green band</strong> is where <strong>q</strong> (those who get everything) would have to be for the sentence to be true: to the left of s (‘less unhappy’), but very close (‘barely’).</li><li>To the right of s, the sentence is false because they would not be <em>less</em> unhappy. Far to the left, it is also false, because the difference would no longer be <em>barely</em>.</li><li>The left edge of the band is a <strong>dashed line</strong>: nobody knows where ‘barely’ ends. This is the vagueness of the sorites: a little more distance changes nothing and yet, at some point, it is no longer ‘barely’.</li></ul>",
   "contTitulo": "Contingent: a narrow band",
   "contingencia": "<p>Like the first sentence, this one is <strong>contingent</strong>: it can be true or false depending on what the world is like. But the scale shows something more: <strong>how much it risks</strong>.</p><ul><li>In the Euler diagram of the first sentence, one zone was removed and all the others remained. Here the opposite happens: the sentence is true only in a narrow band and false in the whole rest of the scale. It rules out almost all possible positions.</li><li>The more a sentence rules out, the more it says and the easier it is to refute. A tautology rules out nothing and says nothing; this sentence rules out a lot and says a lot. This is Popper’s idea: a statement has more content the more possible situations would make it false.</li><li>In return, ‘barely’ is vague. In borderline cases (a difference neither clearly small nor clearly large) it is not clear whether the sentence is true or false. A sentence can be very risky and, at the same time, hard to test.</li><li>To test it one would have to measure unhappiness, and that is no longer a problem of logic. It is an empirical problem (wellbeing surveys, psychological studies) and a conceptual one: what counts as unhappiness?</li></ul>"
  }
 },
 {
  "id": "tanto",
  "grupo": "ejercicios",
  "titulo": "‘Both those who get everything and those who get nothing…’",
  "origen": "A sentence proposed as a class exercise, following the previous ones.",
  "enunciado": "‘Both those who get everything and those who get nothing are unhappy.’",
  "problema": "These are two universal affirmatives (type A) joined together: ‘everyone who gets everything is unhappy’ and ‘everyone who gets nothing is unhappy’. With <em>p</em> = ‘is unhappy’, <em>q</em> = ‘gets everything they want’ and <em>s</em> = ‘gets nothing’, we have <em>(q → p) ∧ (s → p)</em>, which is equivalent to <em>(q ∨ s) → p</em>: if you are at either of the two extremes, you are unhappy. Its contrapositive says the same from the other side: <em>¬p → (¬q ∧ ¬s)</em>, whoever is not unhappy has got something, but not everything.",
  "salidas": "<ul><li><strong>What it says</strong>: both extremes lead to unhappiness. And, by the contrapositive, that the only ones who can be not unhappy are in the middle: it seems a praise of the golden mean, although the sentence does not say that those in the middle are happy, only that nobody outside the middle is.</li><li><strong>Trap of language</strong>: ‘get nothing’ contains two negative words in Spanish, but they do not cancel out like <em>¬¬</em> in logic. There, ‘no… nada’ is a single negation: it means ‘they get no thing’, not ‘they get something’. That is why <em>s</em> is a single letter, with no negations inside.</li><li><strong>Trap of the concept</strong>: someone who desires nothing gets ‘everything they want’ (they lack nothing of what they want) and, at the same time, may get nothing. They are the only one who could be in both groups at once, and the sentence says that they too are unhappy. This is exactly the opposite of what the Stoics, Epicureans or Buddhists thought: that tranquillity is reached by reducing desires.</li><li><strong>What it does not take for granted</strong>: that there is someone in each group. In current logic, ‘all q are p’ is true even if there is no q (the same thing that is seen in the Syllogisms tab with the traditional reading).</li><li><strong>Relation to the previous ones</strong>: the first sentence assumed that some of those who get everything are unhappy; this one says they all are, so it says more. The ‘barely’ one compared degrees of unhappiness; this one only says that there is unhappiness at both extremes, without measuring it.</li></ul>",
  "pensar": "According to this sentence, who could be happy? Describe that person. And what would Epicurus say to someone who holds the sentence?",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 172,
     "cy": 122,
     "r": 108,
     "cls": "lg-e2",
     "etq": "Unhappy (p)",
     "ex": 172,
     "ey": 42
    },
    {
     "cx": 132,
     "cy": 132,
     "r": 50,
     "cls": "lg-e1",
     "etq": "Everything (q)",
     "ex": 120,
     "ey": 132
    },
    {
     "cx": 212,
     "cy": 132,
     "r": 50,
     "cls": "lg-e4",
     "etq": "Nothing (s)",
     "ex": 226,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [
    [
     172,
     132
    ]
   ],
   "lectura": "<ul><li>The large circle is the <strong>unhappy (p)</strong>. The circles of those who get <strong>everything (q)</strong> and of those who get <strong>nothing (s)</strong> are inside: they are the two universal affirmatives, ‘all q are p’ and ‘all s are p’.</li><li>q and s barely touch: one cannot get everything and nothing at once, except in one case. The <strong>?</strong> at the crossing is that case, someone who desires nothing. The sentence does not say whether there is anyone like that; if there is, it counts them among the unhappy.</li><li>There is no ✕: the sentence does not take for granted that anyone exists in either group. It only says where they would be if they existed.</li><li>Outside the large circle are those who are not unhappy, and there is neither q nor s there: that is the contrapositive. If someone is not unhappy, they are outside both extremes.</li></ul>",
   "contTitulo": "Contingent: three false rows, three empty zones",
   "contingencia": "<p>The table of <em>(q ∨ s) → p</em> has eight rows and the sentence is false in <strong>three</strong>: those of someone who is not unhappy and is at some extreme. It is <strong>contingent</strong>. As before, each row is a zone of the diagram.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>s</th><th>(q ∨ s) → p</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Unhappy person who gets everything and gets nothing (desires nothing)</td><td>The crossing of q and s, with ?: it is not known whether there is anyone.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Unhappy person who gets everything</td><td>The circle q.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Unhappy person who gets nothing</td><td>The circle s.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Unhappy person who gets something, but not everything</td><td>The rest of p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Not unhappy, gets everything and gets nothing: the sage who desires nothing</td><td><strong>Not there</strong>: q and s are inside p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Not unhappy and gets everything</td><td><strong>Not there</strong>: q is inside p.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Not unhappy and gets nothing</td><td><strong>Not there</strong>: s is inside p.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Not unhappy and gets something, but not everything</td><td>Outside all the circles.</td></tr></tbody></table></div><ul><li><strong>Three false rows = three missing zones</strong>: all the parts of q and s that would fall outside p. That is why they are drawn inside.</li><li><strong>It says more than the first sentence</strong>: that one forbade a single zone; this one forbids three. The more zones a sentence removes, the more it commits itself and the easier it is for it to prove false: it is enough to find someone who gets everything and is not unhappy.</li><li>Notice the row of the sage without desires: the sentence declares it impossible. Whoever believes that such a person exists has a counterexample, and one is enough to refute a universal.</li></ul>"
  }
 },
 {
  "id": "monica",
  "grupo": "agustin",
  "titulo": "Monica: ‘If she desires good things and has them, she is happy’",
  "origen": "Monica, Augustine’s mother, in <em>On the Happy Life</em> (II, 10). Augustine replies that she has reached ‘the very citadel of philosophy’.",
  "enunciado": "‘If she desires good things and has them, she is happy; but if she desires bad things, even if she has them, she is wretched.’",
  "problema": "Augustine has just asked whether everyone who has what they want is happy, and this is Monica’s answer. With <em>p</em> = ‘is happy’, <em>q</em> = ‘desires what is good’ and <em>r</em> = ‘has what they desire’ (and simplifying ‘desiring what is bad’ as ‘not desiring what is good’), we get <em>((q ∧ r) → p) ∧ ((¬q ∧ r) → ¬p)</em>. Both parts begin with <em>r</em>: Monica speaks only of those who already have what they desire, and of them she says that being happy and desiring what is good go together. That is: if <em>r</em>, then <em>p ↔ q</em>.",
  "salidas": "<ul><li><strong>Sufficient, not necessary</strong>: Monica says ‘if…, she is happy’; Augustine, in the next card, ‘only those who…’. These are arrows pointing in opposite directions. Monica points out a road that leads to happiness; Augustine, a door without which one cannot enter. They do not contradict each other.</li><li><strong>What it does not say</strong>: nothing about those who do not have what they desire. They had agreed on that earlier in the dialogue: whoever does not have what they want is not happy.</li><li><strong>The echo of Cicero</strong>: Augustine recalls that Cicero’s <em>Hortensius</em> says the same: it is not so wretched not to get what one wants as to want to get what is not fitting. It is a reply to the first sentence of the exercise: the worst of it does not fall to those who do not get, but to those who desire badly.</li></ul>",
  "pensar": "Monica does not say which things are good. A few lines later, Augustine adds a condition: which one? (Look at the next card.)",
  "euler": {
   "vista": "0 0 345 268",
   "circulos": [
    {
     "cx": 172,
     "cy": 144,
     "r": 118,
     "cls": "lg-e2"
    },
    {
     "cx": 172,
     "cy": 144,
     "r": 80,
     "cls": "lg-e3"
    },
    {
     "cx": 172,
     "cy": 16,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Have what they desire (r)",
     "ex": 172,
     "ey": 16
    },
    {
     "cx": 172,
     "cy": 122,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Desire what is good (q)",
     "ex": 172,
     "ey": 140
    },
    {
     "cx": 172,
     "cy": 140,
     "r": 0,
     "cls": "lg-e2",
     "etq": "= happy (p)",
     "ex": 172,
     "ey": 158
    },
    {
     "cx": 172,
     "cy": 206,
     "r": 0,
     "cls": "lg-e2",
     "etq": "unhappy (¬p)",
     "ex": 172,
     "ey": 240
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>The large circle is not one more group: it is the <strong>frame</strong>. Monica speaks only of those who <strong>have what they desire (r)</strong>; of the others, the sentence says nothing.</li><li>Within the frame, the circle of those who <strong>desire what is good (q)</strong> is also that of the <strong>happy (p)</strong>: among those who have what they desire, being happy and desiring what is good go together.</li><li>The ring around it is made up of those who have what they desire, but desire what is bad: <strong>unhappy</strong>, ‘even if they have it’.</li></ul>",
   "contTitulo": "Contingent: two false rows",
   "contingencia": "<p>The table has eight rows and Monica’s sentence is false in only <strong>two</strong>: that of someone who has the good they desire and is not happy, and that of someone who has the bad they desire and is happy. The four rows in which <em>r</em> is false are all true: the sentence says nothing of those who do not have what they desire, and what is not said cannot make it false.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>Monica</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Happy person who desires what is good and has it</td><td>The circle q = p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Happy person who desires what is good and does not have it</td><td>Outside the frame: the sentence says nothing.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Happy person who desires what is bad and has it</td><td><strong>Not there</strong>: within the frame, desiring what is bad means being in the ring of the unhappy.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Happy person who desires what is bad and does not have it</td><td>Outside the frame: the sentence says nothing.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Desires what is good, has it and is not happy</td><td><strong>Not there</strong>: within the frame, whoever desires what is good is happy.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Desires what is good, does not have it and is not happy</td><td>Outside the frame.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desires what is bad, has it and is not happy</td><td>The ring of the unhappy.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Desires what is bad, does not have it and is not happy</td><td>Outside the frame.</td></tr></tbody></table></div>"
  }
 },
 {
  "id": "agustin",
  "grupo": "agustin",
  "titulo": "Augustine: ‘Only those who desire what they cannot lose…’",
  "origen": "Paraphrase of Augustine of Hippo, <em>On the Happy Life</em> (386), chapter II: whoever wishes to be happy must secure what always remains and which no fortune can take from them.",
  "enunciado": "‘Only those who desire what they cannot lose can attain happiness.’",
  "problema": "Two letters: <em>p</em> = ‘attains happiness’ and <em>q</em> = ‘desires what they cannot lose’. ‘Only those who q, p’ sets a <strong>necessary condition</strong>: without q there is no p. That is, <em>p → q</em>: if someone attains happiness, it is because they desire what they cannot lose. (We read ‘can attain’ as ‘attains’, so as not to complicate it.) Its contrapositive says the same: <em>¬q → ¬p</em>, whoever desires what they can lose does not attain happiness.",
  "salidas": "<ul><li><strong>Trap: ‘only’ is not ‘all’</strong>. The sentence does not say that whoever desires what they cannot lose is happy (<em>q → p</em>). Moving from one to the other is the fallacy of affirming the consequent: you can try it in the tables tab, in the example ‘Affirming the consequent’.</li><li><strong>Augustine’s argument</strong>: whoever loves what they can lose lives in fear of losing it, and with fear one is not happy. The only thing that cannot be lost, for him, is God.</li><li><strong>Relation to the previous ones</strong>: what matters is no longer how much is desired or how much is obtained, but <em>what</em> is desired, and specifically whether it can be lost. It is an idea close to that of the Stoics: to place desire in what does not depend on fortune.</li></ul>",
  "pensar": "For Augustine, the only thing that cannot be lost is God. Can you think of anything else that cannot be lost? Would it work for the sentence?",
  "euler": {
   "vista": "0 0 345 215",
   "circulos": [
    {
     "cx": 172,
     "cy": 120,
     "r": 90,
     "cls": "lg-e1",
     "etq": "Desire what they cannot lose (q)",
     "ex": 172,
     "ey": 20
    },
    {
     "cx": 150,
     "cy": 132,
     "r": 46,
     "cls": "lg-e3",
     "etq": "Happy (p)",
     "ex": 150,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>The circle of the <strong>happy (p)</strong> is inside that of those who <strong>desire what they cannot lose (q)</strong>: it is a universal affirmative, ‘every happy person desires what they cannot lose’.</li><li>Inside q there is room outside p: there may be those who desire what they cannot lose and are not happy. That gap is the ‘only’ of the sentence.</li></ul>",
   "contTitulo": "Contingent: one false row, one empty zone",
   "contingencia": "<p>The table of <em>p → q</em> has four rows and the sentence is false in only one: it is <strong>contingent</strong>. That row is the zone that is missing in the drawing.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas lg-z2\"><thead><tr><th>p</th><th>q</th><th>p → q</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Happy person who desires what they cannot lose</td><td>p, inside q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Happy person who desires what they can lose</td><td><strong>Not there</strong>: p is inside q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desires what they cannot lose and is not happy</td><td>The part of q outside p: ‘only’ is not ‘all’.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Neither happy nor desires what they cannot lose</td><td>Outside both circles.</td></tr></tbody></table></div><p>The third row is the trap one: it is true, and in the drawing it is the part of q that lies outside p. If the sentence said ‘everyone who desires what they cannot lose is happy’, that zone would be missing instead of the second.</p>"
  }
 },
 {
  "id": "agustin2",
  "grupo": "agustin",
  "titulo": "Augustine, variant: ‘…which is the end that we all necessarily seek’",
  "origen": "A variant of the previous sentence. The second part is also Augustine’s: in <em>On the Happy Life</em> (II) he takes it for granted that we all want to be happy.",
  "enunciado": "‘Only those who desire and obtain what they cannot lose can attain happiness, which is the end that we all necessarily seek.’",
  "problema": "Now there are <strong>two assertions</strong>. The first is the earlier one with one more condition: with <em>p</em> = ‘attains happiness’, <em>q</em> = ‘desires what they cannot lose’ and <em>r</em> = ‘obtains what they cannot lose’, we get <em>p → (q ∧ r)</em>. It is no longer enough to desire it: one must also obtain it. The second is added by the relative clause: ‘happiness is the end that we all necessarily seek’. Since it is set off by commas, it is <strong>non-restrictive</strong>: it does not restrict which happiness is meant, but says something more about it. Without the commas (‘the happiness that we all seek’) it would be restrictive and would assert nothing new.",
  "salidas": "<ul><li><strong>What follows from putting the two together</strong>: everyone seeks happiness, but only those who desire <em>and</em> obtain what they cannot lose attain it. Whoever does not obtain it seeks, unavoidably, something they cannot reach. What was before a condition becomes a drama.</li><li><strong>‘Necessarily’ is not ‘tautologically’</strong>: ‘we all seek happiness’ is not true by its form (the table does not make it true in every row), but, according to Augustine, by how we are. That necessity comes from human nature, not from logic, and to express it a modal logic is needed.</li><li><strong>Is whoever is not happy unhappy?</strong> In ordinary English, not necessarily: ‘happy’ and ‘unhappy’ are contraries, and one can be somewhere in between. Augustine, however, leaves no middle ground: in <em>On the Happy Life</em> (II, 11 and IV, 28) he takes it as agreed that everyone who is not happy is wretched, as everyone who is not dead is alive. If we accept this, ‘not happy’ (<em>¬p</em>) and ‘unhappy’ are the same, and the sentence hardens: whoever does not desire and obtain what they cannot lose is not left in no-man’s-land, but is unhappy. And with ‘we all seek happiness’, nobody can stay on the sidelines: either it is attained, or one is unhappy.</li><li><strong>The usual trap</strong>: ‘only’ is still not ‘all’. Whoever desires and obtains what they cannot lose is not guaranteed happiness by this sentence.</li></ul>",
  "pensar": "Remove the commas: ‘Only those who desire and obtain what they cannot lose can attain the happiness that we all seek’. Which assertion disappears?",
  "euler": {
   "titulo": "Literal reading: ‘only’ (p → q ∧ r)",
   "vista": "0 0 345 318",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Desire it (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Obtain it (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 120,
     "r": 48,
     "cls": "lg-e3",
     "etq": "Happy (p)",
     "ex": 172,
     "ey": 120
    },
    {
     "cx": 172,
     "cy": 245,
     "r": 64,
     "cls": "lg-e4",
     "etq": "Unhappy (¬p)",
     "ex": 172,
     "ey": 258
    }
   ],
   "cruces": [],
   "dudas": [
    [
     62,
     110
    ],
    [
     283,
     110
    ]
   ],
   "lectura": "<ul><li><strong>q</strong> are those who desire what cannot be lost and <strong>r</strong> those who obtain it. They cross: one can desire without obtaining and, perhaps, obtain without having desired.</li><li>The circle of the <strong>happy (p)</strong> lies inside the crossing: to be happy one must be in both q and r at once.</li><li>‘We all seek happiness’ does not need a circle: it would speak of everyone, so it would be the whole frame of the drawing. A universal that leaves nobody out does not separate zones.</li><li>Below, the circle of the <strong>unhappy (¬p)</strong>. It does not touch that of the happy, because nobody is both at once. It crosses q and r, even their crossing: one can desire and obtain what cannot be lost and not be happy (‘only’ is not ‘all’). And it extends outside both, because whoever neither desires nor obtains it is not happy.</li><li>The <strong>?</strong> marks what falls in neither of the two circles: those who would be neither happy nor unhappy (and the same holds for what is outside all the circles). If, like Augustine, there is no middle ground, nobody is there. If there is, that is their place.</li></ul>",
   "contTitulo": "Contingent: three false rows, three empty zones",
   "contingencia": "<p>The table of <em>p → (q ∧ r)</em> has eight rows and the sentence is false in <strong>three</strong>, one more than the previous version if we write it with the same letters: that of the happy person who desires it but does not obtain it. This is what ‘and obtains’ adds.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>p → (q ∧ r)</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Happy person who desires it and obtains it</td><td>p, in the crossing of q and r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Happy person who desires it, but does not obtain it</td><td><strong>Not there</strong>: p is inside r.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Happy person who obtains it without desiring it</td><td><strong>Not there</strong>: p is inside q.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Happy person who neither desires it nor obtains it</td><td><strong>Not there</strong>: p is inside q and r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desires it and obtains it, and is not happy</td><td>The crossing of q and r outside p: ‘only’ is not ‘all’.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Desires it and does not obtain it</td><td>q outside r.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Obtains it without desiring it</td><td>r outside q.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Neither desires it nor obtains it</td><td>Outside the circles.</td></tr></tbody></table></div><p>The second assertion, ‘we all seek happiness’, does not change the table: it does not speak of <em>p</em>, <em>q</em> or <em>r</em>, but of seeking, and holds for all rows equally.</p>"
  },
  "euler2": {
   "titulo": "Augustine in full: ‘whoever has God is happy’ (p ↔ q ∧ r)",
   "vista": "0 0 345 258",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Desire it (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Obtain it (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 129,
     "r": 0,
     "cls": "lg-e3",
     "etq": "Happy (p)",
     "ex": 172,
     "ey": 129
    },
    {
     "cx": 172,
     "cy": 246,
     "r": 0,
     "cls": "lg-e4",
     "etq": "Unhappy (¬p): everything else",
     "ex": 172,
     "ey": 246
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>A few lines later, in <em>On the Happy Life</em> (II, 11), Augustine concludes: ‘Deum igitur qui habet, beatus est’, that is, whoever has God, who cannot be lost, is happy. Whoever has what they cannot lose neither fears losing it nor lacks what they want: they have nothing to be unhappy about. With this the condition is also sufficient, and the sentence becomes <em>p ↔ (q ∧ r)</em>.</li><li>Now the crossing of q and r <strong>is</strong> the circle of the happy: it no longer needs to be drawn separately. The zone of the first drawing that jars (desires it, obtains it and is unhappy) is left empty.</li><li>Since there is no middle ground, everything else (q without r, r without q and what lies outside) are the <strong>unhappy</strong>. Euler cannot draw them as a circle: they are the rest of the drawing. When two classes divide everything between them and one of them is a crossing, the other can only be the background.</li><li>The table of <em>p ↔ (q ∧ r)</em> has four false rows: the three of the literal reading and that of someone who desires it, obtains it and is not happy. That fourth row is the zone that is emptied. The full sentence rules out more and therefore says more.</li></ul>"
  }
 },
 {
  "id": "contrafactico",
  "grupo": "ejercicios",
  "titulo": "‘…would be happy if they could not stop desiring it’",
  "origen": "A sentence proposed as a class exercise, in dialogue with Monica and Augustine.",
  "enunciado": "‘Those who obtain something they desire and cannot lose would be happy if they could not stop desiring it.’",
  "problema": "Three letters: <em>p</em> = ‘is happy’, <em>q</em> = ‘obtains something they desire and cannot lose’ and <em>r</em> = ‘cannot stop desiring it’. Read with the arrow of the tables, the sentence is <em>(q ∧ r) → p</em>: if someone obtains it and cannot stop desiring it, they are happy. But the sentence is not in the indicative (‘are happy if…’), but in the <strong>subjunctive</strong> (‘would be happy if they could not…’): it is a <strong>counterfactual conditional</strong>. It speaks of what would happen if things were different from how they are, and implies that in fact they are not: that they can stop desiring it (<em>¬r</em>) and that, therefore, they are not happy (<em>¬p</em>).",
  "salidas": "<ul><li><strong>What it implies</strong>: that even someone who has something they desire and cannot lose may stop desiring it, and then is not happy. It does not say so: the subjunctive suggests it.</li><li><strong>A crack in Augustine’s argument</strong>: for him, the happy person is the one who has what they want (<em>On the Happy Life</em>, II, 10–11), and so it is enough to have what cannot be lost. The sentence points out that two things can be lost: the object and the desire. What cannot be lost is still there, but if I stop wanting it, I no longer have ‘what I want’.</li><li><strong>How the variant closes it</strong>: ‘the end that we all seek <em>necessarily</em>’. If what cannot be lost is also what we cannot stop desiring, <em>r</em> always holds and the counterfactual is superfluous: the sentence says the same as Augustine. That ‘necessarily’ is exactly the piece this sentence misses.</li><li><strong>Against Monica</strong>: she said that perishable things do not satisfy (‘talibus satiari non poterit’, II, 11). This sentence goes further: not even what cannot be lost is enough, if desire can fade.</li><li><strong>Close to Schopenhauer</strong>: fulfilled desire wears out and gives way to boredom, as in the pendulum of the first sentence.</li></ul>",
  "pensar": "Can one stop desiring something that cannot be lost? Find an example. And can one stop desiring happiness itself?",
  "euler": {
   "vista": "0 0 345 250",
   "circulos": [
    {
     "cx": 172,
     "cy": 130,
     "r": 110,
     "cls": "lg-e2",
     "etq": "Obtain something they desire and cannot lose (q)",
     "ex": 172,
     "ey": 12
    },
    {
     "cx": 150,
     "cy": 135,
     "r": 70,
     "cls": "lg-e3",
     "etq": "Happy (p)",
     "ex": 150,
     "ey": 96
    },
    {
     "cx": 150,
     "cy": 150,
     "r": 34,
     "cls": "lg-vacia",
     "etq": "r: empty",
     "ex": 150,
     "ey": 155
    }
   ],
   "cruces": [
    [
     250,
     140
    ]
   ],
   "dudas": [],
   "lectura": "<ul><li>The large circle is the <strong>frame</strong>: the sentence speaks only of those who obtain something they desire and cannot lose (q), that is, of those who already meet Augustine’s condition.</li><li>Inside, the circle of those who <strong>cannot stop desiring it (r)</strong> lies inside that of the <strong>happy (p)</strong>: this is what the arrow says, <em>(q ∧ r) → p</em>.</li><li>But r is in <strong>grey</strong>: the subjunctive implies that it is empty, because anyone can stop desiring something. And the ✕ marks where the real people are according to the sentence: in the frame, outside the happy.</li><li>Here lies the problem: if r is empty, it does not matter where we draw it. Inside p or outside, the drawing would satisfy the sentence. A conditional with an empty antecedent says nothing about the real world.</li></ul>",
   "contTitulo": "Contingent with the arrow, but empty as a counterfactual",
   "contingencia": "<p>With the arrow of the tables, <em>(q ∧ r) → p</em> has eight rows and only one false: it is <strong>contingent</strong>. The row highlighted in green is the one that the subjunctive takes to be real.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(q ∧ r) → p</th><th>Who it is</th><th>In the diagram</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Happy, obtains it and cannot stop desiring it</td><td>r, inside p.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Happy, obtains it and can stop desiring it</td><td>p outside r.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Happy person who obtains nothing they cannot lose and cannot stop desiring it</td><td>Outside the frame: the sentence says nothing.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Happy person who obtains nothing they cannot lose and can stop desiring it</td><td>Outside the frame.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Obtains it, cannot stop desiring it and is not happy</td><td><strong>Not there</strong>: r is inside p. It is the only false row.</td></tr><tr class=\"lg-ok\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Obtains it, can stop desiring it and is not happy</td><td>The frame outside p, with ✕: the real case that the subjunctive suggests.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Does not obtain it, cannot stop desiring it and is not happy</td><td>Outside the frame.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Does not obtain it, can stop desiring it and is not happy</td><td>Outside the frame.</td></tr></tbody></table></div><ul><li><strong>The trap of the counterfactual.</strong> In the row of the real case, <em>r</em> is false, and with <em>r</em> false the arrow is true whatever happens with <em>p</em>. So, with the table, ‘if they could not stop desiring it, they would be happy’ would be just as true as ‘if they could not stop desiring it, they would be even unhappier’. The table does not distinguish between the two.</li><li>That is why counterfactuals need another tool. The best known is that of possible worlds (Robert Stalnaker, David Lewis): the sentence is true if, in the world most similar to ours in which they could not stop desiring it, they were happy. It is no longer enough to look at truth values: one has to imagine how things would be.</li></ul>"
  }
 }
];
