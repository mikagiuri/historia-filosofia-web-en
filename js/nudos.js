// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/nudos.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const NUDOS = [
 {
  "id": "mentir",
  "titulo": "Is lying always wrong?",
  "sub": "Ethics · Philosophy, 1st Bach. (the questions of ethics) and History of Philosophy (Kant versus utilitarianism)",
  "afs": {
   "M1": "Lying is wrong in itself, even if the lie harms no one.",
   "M2": "What makes an action good or bad is its consequences.",
   "M3": "If a murderer asks you where your friend is hiding, it is all right to lie to him.",
   "M4": "A white lie (saying you love a present you don’t like) is acceptable.",
   "M5": "A government may lie to the population if it is for that population’s own good.",
   "M6": "If everyone lied whenever it suited them, nobody could trust anybody.",
   "M7": "A moral rule, if it is valid, holds without exceptions.",
   "M8": "Keeping quiet or withholding information is not lying.",
   "M9": "Deceiving someone is wrong even if everything you tell them is true."
  },
  "nudos": [
   {
    "k": "M1=A|M3=A",
    "tipo": "real",
    "por": "If lying is wrong ‘in itself’, regardless of what it brings about, then lying to the murderer is also wrong. If it is all right in that case, then lying is not wrong in itself, but depending on the circumstances or the consequences.",
    "distinguir": "Hint: in the murderer case, is there another duty at stake, protecting an innocent person, that weighs more? That does not deny that lying is wrong in itself: it says that sometimes two duties clash.",
    "fuente": "Kant, ‘On a Supposed Right to Lie from Philanthropy’ (1797): not even to the murderer. W. D. Ross, prima facie duties (1930)."
   },
   {
    "k": "M7=A|M3=A",
    "tipo": "real",
    "por": "If valid rules admit no exceptions and ‘do not lie’ is a valid rule, you cannot lie to the murderer. If you can, then either ‘do not lie’ is not a valid rule as it stands, or rules do admit exceptions.",
    "distinguir": "Hint: could the valid rule be more precise, for example ‘do not lie to someone who has a right to the truth’? Then there would be no exception, just a better-formulated rule.",
    "fuente": "Kant, Groundwork of the Metaphysics of Morals (1785): the categorical imperative admits no exceptions out of inclination."
   },
   {
    "k": "M2=A|M5=D",
    "tipo": "real",
    "por": "If only consequences count, a government lie that genuinely benefits the population ought to be acceptable. If you reject it, perhaps consequences are not all that count, or you believe such lies never turn out well.",
    "distinguir": "Hint: do you count the long-term loss of trust as a consequence? Then you can hold both without contradiction, but you will have to explain it.",
    "fuente": "Plato, Republic III (414b-415d): the rulers’ ‘noble lie’. Mill, Utilitarianism (1863), on the rules that protect trust."
   },
   {
    "k": "M8=A|M9=A",
    "tipo": "real",
    "por": "If what is wrong is deceiving, that is, making someone believe something false, and one can deceive by saying only true things, then one can also deceive by keeping quiet. In that case keeping quiet would not always be innocent.",
    "distinguir": "Hint: is there a difference between not saying something and making the other person believe something false? Think of a doctor who leaves out a piece of information and a salesperson who hides it.",
    "fuente": "The distinction between lying and deceiving: the entry ‘The Definition of Lying and Deception’ in the Stanford Encyclopedia of Philosophy."
   },
   {
    "k": "M1=A|M4=A",
    "tipo": "real",
    "por": "A white lie is still a lie. If lying is wrong in itself, a white lie is wrong too, even if only slightly.",
    "distinguir": "Hint: is a white lie really a lie? Does it deceive someone who knows the convention of thanking people for presents?",
    "fuente": "Augustine of Hippo, On Lying (De mendacio, c. 395): he classifies lies and condemns white lies too."
   },
   {
    "k": "M2=A|M6=A",
    "tipo": "aparente",
    "por": "They seem to clash (‘only consequences count’ versus a reason of principle not to lie), but it is not a contradiction: the claim about trust is precisely a consequentialist argument. What is wrong with lying would be that it destroys trust, and that is a consequence.",
    "fuente": "This is the core of rule utilitarianism: it pays to follow rules such as not lying because of their good consequences overall."
   }
  ]
 },
 {
  "id": "creer",
  "titulo": "When is it reasonable to believe something?",
  "sub": "Knowledge · Philosophy, 1st Bach. (what can we know?) and History of Philosophy (faith and reason)",
  "afs": {
   "C1": "If I am completely sure of something, I have the right to believe it.",
   "C2": "A belief without evidence is worth no more than the opposite belief.",
   "C3": "Everyone has their own truth.",
   "C4": "The Earth goes round the Sun, regardless of who believes it.",
   "C5": "If nobody can prove that something is false, it is reasonable to believe it.",
   "C6": "The fact that lots of people believe something is a good reason to believe it.",
   "C7": "Experts get things wrong too, so their opinion is worth the same as anyone else’s.",
   "C8": "It is reasonable to follow what my doctor says even if I don’t understand their reasons."
  },
  "nudos": [
   {
    "k": "C1=A|C2=A",
    "tipo": "real",
    "por": "Inner certainty is not evidence: many people have been completely sure of false things. If a belief without evidence is worth no more than its opposite, your certainty does not give you the right to it.",
    "distinguir": "Hint: are there beliefs that do not rest on evidence but are not arbitrary either, such as that the external world exists or that the past existed?",
    "fuente": "W. K. Clifford, ‘The Ethics of Belief’ (1877), versus William James, ‘The Will to Believe’ (1896)."
   },
   {
    "k": "C3=A|C4=A",
    "tipo": "real",
    "por": "If everyone has their own truth, whoever believes that the Sun goes round the Earth has theirs, just as true as yours. But the other statement says there are truths that do not depend on what anyone believes.",
    "distinguir": "Hint: does ‘their truth’ mean ‘their opinion’ or ‘their experience’? Can someone be right about their own tastes and not about astronomy?",
    "fuente": "Plato, Theaetetus (161c-171c): the refutation of Protagoras’ ‘man is the measure of all things’."
   },
   {
    "k": "C5=A|C2=A",
    "tipo": "real",
    "por": "The fact that something cannot be proved false does not prove that it is true (the fallacy of appeal to ignorance). If it were reasonable to believe it, it would also be reasonable to believe the opposite of many things that cannot be refuted either.",
    "distinguir": "Hint: does it matter who has to prove it (the burden of proof)? And what if people have searched thoroughly and found nothing?",
    "fuente": "Bertrand Russell, the celestial teapot (‘Is There a God?’, 1952)."
   },
   {
    "k": "C7=A|C8=A",
    "tipo": "real",
    "por": "If the expert’s opinion is worth the same as anyone’s, there is no reason to follow your doctor rather than your neighbour. If it is reasonable to follow them without understanding them, their opinion is worth more.",
    "distinguir": "Hint: ‘can be wrong’ does not mean ‘is wrong as often as anyone’. What is the difference between fallible and equally reliable?",
    "fuente": "Epistemic authority: John Hardwig, ‘Epistemic Dependence’ (1985)."
   },
   {
    "k": "C6=A|C4=A",
    "tipo": "real",
    "por": "For centuries almost everyone believed that the Sun went round the Earth. If the majority were a good reason, it would have been reasonable to believe it; but the other statement says that truth does not depend on how many people believe it.",
    "distinguir": "Hint: can it be reasonable to believe something false if the reasons were good at the time? Separate ‘true’ from ‘reasonable’.",
    "fuente": "The fallacy of appeal to the majority; the case of Galileo."
   },
   {
    "k": "C2=A|C8=A",
    "tipo": "aparente",
    "por": "They seem to clash (you follow the doctor without understanding their evidence), but it is not a contradiction: the fact that a reliable expert says so is already evidence. The testimony of someone with a good track record is a reason, even if you cannot see their data.",
    "fuente": "The epistemology of testimony: trusting someone who knows is not believing without evidence, as long as there are reasons to consider them reliable."
   }
  ]
 }
];
