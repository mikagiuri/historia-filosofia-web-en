// Generado por web_i18n/i18n_rebuild.js (en) a partir de web/js/esquemas.js. No editar a mano: editar la memoria tm/en.json y regenerar.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristotle",
  "title": "The causes of change",
  "mermaid": "flowchart TD\n  center[\"THE CAUSES OF CHANGE\"]:::axis\n  intr[\"intrinsic\"]\n  estr[\"extrinsic\"]\n  mat[\"material\"]:::key\n  mat_e[\"the substrate in which it happens\"]\n  form[\"formal\"]:::key\n  form_e[\"the shape that is taken on\"]\n  erag[\"efficient\"]:::key\n  erag_e[\"what sets it in motion\"]\n  xede[\"final\"]:::key\n  xede_e[\"the end of the change\"]\n  center -->|\"are these\"| intr\n  center -->|\"are these\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"is\"| mat_e\n  form -->|\"is\"| form_e\n  erag -->|\"is\"| erag_e\n  xede -->|\"is\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why do things change, and what is needed to explain a change?",
   "raiz": "THE CAUSES OF CHANGE",
   "raiz_d": "Aristotle answers Parmenides: change is real and can be explained through its causes.",
   "ramas": [
    {
     "rel": "is understood as",
     "t": "Passing from potentiality to actuality",
     "k": true,
     "a": "Aristotle",
     "d": "Potentiality is the possibility of being; actuality is that possibility already realised.",
     "c": [
      {
       "rel": "for example",
       "t": "Bronze becomes a statue",
       "d": "Bronze is a statue in potentiality; once sculpted, it is one in actuality."
      }
     ]
    },
    {
     "rel": "inside the thing",
     "t": "Intrinsic causes",
     "d": "They are part of the substance itself: its matter and its form (hylomorphism).",
     "c": [
      {
       "rel": "what it is made of",
       "t": "Material cause",
       "k": true,
       "d": "The substrate that remains throughout the change: the bronze."
      },
      {
       "rel": "what it is",
       "t": "Formal cause",
       "k": true,
       "d": "The structure or essence it acquires: the shape of the statue."
      }
     ]
    },
    {
     "rel": "outside the thing",
     "t": "Extrinsic causes",
     "d": "They are not part of the thing, but they produce it and give it direction.",
     "c": [
      {
       "rel": "what produces it",
       "t": "Efficient cause",
       "k": true,
       "d": "The agent that sets the change in motion: the sculptor."
      },
      {
       "rel": "what for",
       "t": "Final cause",
       "k": true,
       "d": "The end towards which the change tends: the finished statue and its purpose."
      }
     ]
    },
    {
     "rel": "hence a view",
     "t": "Teleology",
     "d": "All beings, nature included, tend towards an end (finalism).",
     "c": [
      {
       "rel": "its ultimate principle",
       "t": "Unmoved mover",
       "d": "Pure actuality which, without moving, draws everything else towards itself as final cause."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Formal cause",
     "rel": "actualises the potentiality of the",
     "a": "Material cause"
    },
    {
     "de": "Final cause",
     "rel": "is generalised in the",
     "a": "Teleology"
    }
   ],
   "idea": "For Aristotle, to change is to pass from potentiality to actuality, and a change is fully explained only by its four causes: of what, what, who and what for. Everything in nature tends towards an end."
  }
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume and empiricism",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Examination of knowledge\"]\n  n2[\"perceptions\"]:::axis\n  n3[\"impressions\"]\n  n4[\"ideas\"]\n  n5[\"organised by the laws of association of the imagination\"]\n  n6[\"contiguity\"]\n  n7[\"causality\"]:::key\n  n8[\"resemblance\"]\n  n9[\"factual knowledge\"]:::key\n  n10[\"relations between ideas\"]:::key\n  n11[\"belief based on habit\"]\n  n12[\"universal, necessary knowledge\"]\n  n13[\"critique of metaphysics and science\"]:::axis\n  n14[\"basis of morality: moral emotivism\"]:::key\n  n15[\"the idea of substance: world, God, self\"]\n  n16[\"the idea of necessary connection\"]\n  n17[\"in feeling\"]\n  n18[\"phenomenism\"]\n  n19[\"scepticism\"]\n  n20[\"what is good\"]\n  n21[\"action\"]\n  n22[\"toleration: a norm and attitude for living together\"]\n  n23[\"in the pact\"]\n  n0 --> n1\n  n1 -->|\"its basis\"| n2\n  n2 -->|\"are divided into two\"| n3\n  n2 --> n4\n  n2 -->|\"are the cause of:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"are applied in:\"| n9\n  n8 -->|\"are applied in:\"| n10\n  n9 -->|\"its basis\"| n11\n  n10 -->|\"form\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"where?\"| n17\n  n15 -->|\"produces\"| n18\n  n16 -->|\"produces\"| n19\n  n17 -->|\"decides\"| n20\n  n17 --> n21\n  n19 -->|\"produces\"| n22\n  n20 -->|\"is expressed\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is left of causality, substance and morality if only what comes from an impression is valid?",
   "raiz": "HUME'S CRITIQUE",
   "raiz_d": "Hume puts the great ideas of philosophy to a test: which impression does this idea come from? If there is no impression, the idea has no foundation.",
   "ramas": [
    {
     "rel": "first target",
     "t": "Causality",
     "k": true,
     "d": "We believe that the cause necessarily produces the effect.",
     "c": [
      {
       "rel": "experience shows",
       "t": "Succession and constant conjunction",
       "d": "We see one event follow another, again and again."
      },
      {
       "rel": "but it does not show",
       "t": "The necessary connection",
       "d": "There is no impression of the ‘it has to happen’: that idea does not come from experience."
      },
      {
       "rel": "is explained by",
       "t": "Custom",
       "k": true,
       "d": "Repetition creates in us the habit of expecting the effect: it is a belief, not a reason."
      }
     ]
    },
    {
     "rel": "second target",
     "t": "Substance",
     "d": "Something permanent that would lie beneath perceptions.",
     "c": [
      {
       "rel": "of the external world",
       "t": "We only have perceptions",
       "d": "We cannot step outside them to check that there are bodies causing them."
      },
      {
       "rel": "of the self",
       "t": "A bundle of perceptions",
       "d": "There is no impression of a fixed self, only a flow of perceptions that follow one another."
      },
      {
       "rel": "of God",
       "t": "God as the cause of the world",
       "d": "There is no impression of God, and deducing him as a cause requires a necessary connection that we do not know."
      }
     ]
    },
    {
     "rel": "consequences",
     "t": "Limits of knowledge",
     "k": true,
     "c": [
      {
       "rel": "in metaphysics",
       "t": "Phenomenalism",
       "d": "We only know phenomena, not reality in itself."
      },
      {
       "rel": "in science",
       "t": "Only probable knowledge",
       "d": "Natural laws generalise what has been observed; that they will hold tomorrow is not necessary."
      },
      {
       "rel": "final attitude",
       "t": "Moderate scepticism",
       "d": "We cannot ground these beliefs rationally, but life obliges us to follow them."
      }
     ]
    },
    {
     "rel": "in morality too",
     "t": "Emotivism",
     "k": true,
     "d": "Moral judgements express feelings of approval or disapproval, not facts.",
     "c": [
      {
       "rel": "because",
       "t": "Reason does not move us to act",
       "d": "‘Reason is, and ought only to be, the slave of the passions.’"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Custom",
     "rel": "makes it",
     "a": "Only probable knowledge"
    },
    {
     "de": "The necessary connection",
     "rel": "without it the proof of",
     "a": "God as the cause of the world"
    }
   ],
   "idea": "Hume does not deny that we believe in causes, bodies or a self: he shows that these beliefs are born of custom and imagination, not of reason or of any impression."
  }
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Knowledge in Hume",
  "mermaid": "flowchart TD\n  ezag[\"KNOWLEDGE\"]:::axis\n  lock[\"Locke and Descartes\"]:::key\n  pertz[\"PERCEPTIONS\"]:::axis\n  eduk[\"all mental contents\"]\n  inpr[\"impressions\"]:::key\n  trin[\"intense and vivid\"]\n  ideiak[\"ideas\"]:::key\n  ahul[\"faint and indistinct\"]\n  esper[\"EXPERIENCE\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"innate, adventitious and factitious ideas\"]\n  ezag -->|\"as for these\"| lock\n  ezag -->|\"is having these\"| pertz\n  pertz -->|\"are these\"| eduk\n  pertz -->|\"can be these\"| inpr\n  pertz -->|\"can be these\"| ideiak\n  inpr -->|\"if they are like this\"| trin\n  inpr -->|\"produce these\"| ideiak\n  ideiak -->|\"if they are like this\"| ahul\n  pertz -->|\"have this origin\"| esper\n  esper -->|\"unlike this one\"| desc\n  desc -->|\"who accepted this\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Where do our ideas come from, and what kinds of knowledge can we reach with them?",
   "raiz": "KNOWLEDGE IN HUME",
   "raiz_d": "Empiricism: there are no innate ideas; every content of the mind comes from experience.",
   "ramas": [
    {
     "rel": "raw material",
     "t": "Perceptions",
     "a": "Hume",
     "d": "Everything in the mind: seeing, hearing, remembering, imagining, thinking.",
     "c": [
      {
       "rel": "the most vivid",
       "t": "Impressions",
       "k": true,
       "d": "Vivid perceptions of experience: what we feel when we see, hear or desire."
      },
      {
       "rel": "faint copies of them",
       "t": "Ideas",
       "d": "What is left in the mind when we remember or think about what we felt before."
      }
     ]
    },
    {
     "rel": "rule that follows",
     "t": "Criterion of the impression",
     "k": true,
     "d": "Every valid idea comes from a prior impression.",
     "c": [
      {
       "rel": "consequence",
       "t": "Idea without impression: empty idea",
       "d": "To know whether an idea makes sense, you must look for the impression it comes from."
      },
      {
       "rel": "rejects",
       "t": "Innate ideas",
       "a": "Descartes",
       "d": "The mind does not bring contents with it at birth."
      }
     ]
    },
    {
     "rel": "the imagination links them",
     "t": "Association of ideas",
     "d": "Ideas are not linked at random: the imagination associates them according to three laws.",
     "c": [
      {
       "rel": "by",
       "t": "Resemblance",
       "d": "A portrait makes us think of the person portrayed."
      },
      {
       "rel": "by",
       "t": "Contiguity",
       "d": "Thinking of one street leads us to the next one (in space or in time)."
      },
      {
       "rel": "by",
       "t": "Cause and effect",
       "d": "Seeing smoke makes us think of fire."
      }
     ]
    },
    {
     "rel": "two kinds of knowing",
     "t": "Types of knowledge",
     "k": true,
     "c": [
      {
       "rel": "a priori",
       "t": "Relations of ideas",
       "d": "Mathematics and logic: necessary truths; to deny them is contradictory.",
       "c": [
        {
         "rel": "but",
         "t": "They tell us nothing about facts",
         "d": "They only compare ideas with one another."
        }
       ]
      },
      {
       "rel": "a posteriori",
       "t": "Matters of fact",
       "d": "Contingent truths, based on experience: they could be otherwise.",
       "c": [
        {
         "rel": "example",
         "t": "‘The sun will rise tomorrow’",
         "d": "To deny it is not contradictory: only experience supports it."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Matters of fact",
     "rel": "rest on the relation of",
     "a": "Cause and effect"
    }
   ],
   "idea": "For Hume everything begins with impressions: ideas are their copies, and there are only two kinds of knowing, relations of ideas (necessary) and matters of fact (contingent)."
  }
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Kant and the Enlightenment",
  "mermaid": "flowchart TD\n  n0[\"KANT'S PHILOSOPHY\"]\n  n1[\"What is man?\"]\n  n2[\"What can I know?\"]:::axis\n  n3[\"What ought I to do?\"]:::axis\n  n4[\"What may I hope?\"]:::axis\n  n5[\"freedom\"]\n  n6[\"the immortality of the soul\"]\n  n7[\"the existence of God\"]\n  n8[\"condition of morality\"]\n  n9[\"guarantee of the fulfilment of duty\"]\n  n10[\"guarantee of the supreme good: virtue + happiness\"]\n  n11[\"start from the fact of science\"]\n  n12[\"start from the moral fact\"]\n  n13[\"theoretical use of reason\"]\n  n14[\"practical use of reason\"]\n  n15[\"its conditions\"]\n  n16[\"its limits\"]\n  n17[\"a priori conditions: universals of the moral law\"]\n  n18[\"formal a priori conditions\"]\n  n19[\"material conditions: experience\"]\n  n20[\"in duty as the form of the law\"]\n  n21[\"of sensibility\"]\n  n22[\"of the understanding\"]\n  n23[\"of reason\"]\n  n24[\"in the categorical imperative\"]:::key\n  n25[\"a priori forms: space and time\"]:::key\n  n26[\"categories\"]:::key\n  n27[\"ideas\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"makes possible\"| n3\n  n3 -->|\"postulates\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"in order to examine\"| n13\n  n12 -->|\"in order to examine\"| n14\n  n13 -->|\"makes possible\"| n14\n  n13 --> n15\n  n13 -->|\"constitute them\"| n16\n  n14 -->|\"establishes them\"| n17\n  n15 -->|\"a synthesis of what?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"is not knowledge, since it leaves them aside\"| n16\n  n17 -->|\"finds them\"| n20\n  n20 -->|\"is expressed\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is man, according to Kant, and what does his philosophy have to do with the Enlightenment?",
   "raiz": "KANT: ENLIGHTENED REASON EXAMINES ITSELF",
   "raiz_d": "Criticism analyses the limits and reach of reason with three questions that boil down to one: what is man?",
   "ramas": [
    {
     "rel": "starting attitude",
     "t": "Sapere aude",
     "k": true,
     "a": "Kant",
     "d": "Motto of What Is Enlightenment? (1784): dare to think for yourself, without another's guidance.",
     "c": [
      {
       "rel": "to leave the",
       "t": "Self-incurred immaturity",
       "d": "It is not a lack of intelligence but of courage: it is sustained by laziness, cowardice and guardians."
      },
      {
       "rel": "it only needs freedom for the",
       "t": "Public use of reason",
       "d": "Reasoning as a scholar before the reading public. In office (private use) one obeys."
      }
     ]
    },
    {
     "rel": "first question",
     "t": "What can I know?",
     "d": "Theoretical use of reason: it starts from the fact of science.",
     "c": [
      {
       "rel": "knowing requires",
       "t": "A priori forms and categories",
       "d": "Space and time (sensibility) and categories (understanding) order what experience provides."
      },
      {
       "rel": "limit",
       "t": "We only know phenomena",
       "d": "Not things in themselves: that is why metaphysics cannot be a science."
      }
     ]
    },
    {
     "rel": "second question",
     "t": "What should I do?",
     "d": "Practical use of reason: it starts from the moral fact.",
     "c": [
      {
       "rel": "answers with the",
       "t": "Categorical imperative",
       "k": true,
       "d": "A universal, unconditional command: act out of duty, not out of self-interest or inclination."
      },
      {
       "rel": "presupposes",
       "t": "Moral autonomy",
       "d": "Reason gives itself the law, without depending on God, on authority or on happiness."
      }
     ]
    },
    {
     "rel": "third question",
     "t": "What may I hope?",
     "d": "Morality demands that we accept what theoretical reason cannot prove.",
     "c": [
      {
       "rel": "answers with the",
       "t": "Postulates of practical reason",
       "k": true,
       "c": [
        {
         "rel": "first",
         "t": "Freedom",
         "d": "Condition of morality: if I ought, then I can."
        },
        {
         "rel": "second",
         "t": "The immortality of the soul",
         "d": "It allows us to approach full virtue without end."
        },
        {
         "rel": "third",
         "t": "The existence of God",
         "d": "It guarantees the supreme good: that virtue and happiness go together."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sapere aude",
     "rel": "is the same demand as the",
     "a": "Moral autonomy"
    },
    {
     "de": "We only know phenomena",
     "rel": "leaves room for the",
     "a": "Postulates of practical reason"
    }
   ],
   "idea": "Kant is the Enlightenment examining itself: reason recognises that it cannot know beyond experience, but gives itself the moral law. Thinking and acting for oneself is its core."
  }
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Sensible knowledge (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"REALITY\"]:::axis\n  gbera[\"the thing in itself\"]:::key\n  noum[\"the noumenon\"]:::key\n  kaos[\"chaos of sensations\"]:::axis\n  subj[\"the subject\"]:::key\n  forma[\"a priori forms of sensibility\"]:::axis\n  puru[\"pure intuitions\"]:::key\n  espa[\"space and time\"]\n  objl[\"object of sensible knowledge\"]:::key\n  enp[\"empirical intuition\"]\n  fen[\"sensible phenomenon\"]\n  niret[\"the thing for me\"]\n  erreal -->|\"is\"| gbera\n  erreal -->|\"is\"| noum\n  erreal -->|\"sends\"| kaos\n  kaos -->|\"make it up\"| objl\n  objl -->|\"is called this\"| enp\n  enp -->|\"or\"| fen\n  fen -->|\"this is\"| niret\n  kaos -->|\"organise them\"| forma\n  forma -->|\"are called this\"| puru\n  puru -->|\"are these\"| espa\n  subj -->|\"has them\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "When we perceive something, what does reality contribute and what does the subject contribute?",
   "raiz": "SENSIBLE KNOWLEDGE",
   "raiz_d": "First step of knowledge according to Kant (Transcendental Aesthetic): sensibility receives and orders what reaches us.",
   "ramas": [
    {
     "rel": "what comes from outside",
     "t": "Matter: sensations",
     "d": "What is received a posteriori, through experience.",
     "c": [
      {
       "rel": "arrives as",
       "t": "A chaos of impressions",
       "d": "Loose data, still without order."
      },
      {
       "rel": "comes from",
       "t": "The thing in itself (noumenon)",
       "k": true,
       "d": "Reality as it is in itself: it affects us, but we never know it."
      }
     ]
    },
    {
     "rel": "what the subject contributes",
     "t": "The a priori forms of sensibility",
     "k": true,
     "d": "Structures prior to experience that make it possible.",
     "c": [
      {
       "rel": "are",
       "t": "Space and time",
       "d": "Everything we perceive is somewhere and at some moment."
      },
      {
       "rel": "that is why they are also",
       "t": "Pure intuitions",
       "d": "They are not drawn from experience: they are in all experience."
      },
      {
       "rel": "they ground",
       "t": "Mathematics",
       "d": "Geometry (space) and arithmetic (time) are universal and necessary knowledge."
      }
     ]
    },
    {
     "rel": "result",
     "t": "The phenomenon",
     "k": true,
     "d": "The thing as it appears to me: the thing for me.",
     "c": [
      {
       "rel": "is grasped in the",
       "t": "Empirical intuition",
       "d": "Sensations already situated in space and time."
      },
      {
       "rel": "afterwards it is thought by the",
       "t": "Understanding",
       "d": "With its categories (causality, substance…) it turns the phenomenon into a known object."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Space and time",
     "rel": "order",
     "a": "A chaos of impressions"
    },
    {
     "de": "The phenomenon",
     "rel": "never coincides with",
     "a": "The thing in itself (noumenon)"
    }
   ],
   "idea": "We never perceive reality ‘in itself’: we perceive phenomena, that is, sensations ordered by space and time, which the subject itself contributes."
  }
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Comte: society, the law of the three stages and positive science",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"SOCIETY\"]:::axis\n  ord[\"ORDER\"]:::key\n  aur[\"PROGRESS\"]:::key\n  lege[\"LAW OF THE THREE STAGES\"]:::axis\n  teo[\"theological\"]\n  met[\"metaphysical\"]\n  pos[\"POSITIVE\"]:::key\n  zient[\"SCIENCE\"]:::key\n  gert[\"FACTS AND LAWS\"]:::key\n  feno[\"explains phenomena from them\"]\n  co --> giz\n  giz -->|\"organised by two principles\"| ord\n  giz -->|\"organised by two principles\"| aur\n  ord -->|\"following\"| lege\n  aur -->|\"following\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"hence\"| zient\n  zient -->|\"investigates\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How does human knowledge progress, and how does Comte want to order society with science?",
   "raiz": "POSITIVISM",
   "raiz_d": "Auguste Comte (19th century): only knowledge based on observable, verifiable facts is true knowledge.",
   "ramas": [
    {
     "rel": "humanity advances according to the",
     "t": "Law of the three stages",
     "k": true,
     "a": "Comte",
     "d": "Each science, and humanity as a whole, passes through three ways of explaining reality.",
     "c": [
      {
       "rel": "first",
       "t": "Theological stage",
       "d": "It explains phenomena by the action of gods."
      },
      {
       "rel": "then",
       "t": "Metaphysical stage",
       "d": "It explains by essences and abstract forces."
      },
      {
       "rel": "finally",
       "t": "Positive stage",
       "k": true,
       "d": "It explains by scientific laws."
      }
     ]
    },
    {
     "rel": "its method",
     "t": "Positive science",
     "k": true,
     "c": [
      {
       "rel": "starts from",
       "t": "Observable facts",
       "d": "Only what can be verified empirically is valid."
      },
      {
       "rel": "seeks",
       "t": "Laws, not ultimate causes",
       "d": "Constant relations between phenomena, not their ultimate ‘why’."
      },
      {
       "rel": "therefore",
       "t": "Rejects metaphysics",
       "d": "Speculation without facts is not knowledge."
      }
     ]
    },
    {
     "rel": "its final science",
     "t": "Sociology",
     "d": "A ‘social physics’: studying society with the method of the natural sciences.",
     "c": [
      {
       "rel": "studies",
       "t": "Order",
       "d": "Social statics: what holds society together."
      },
      {
       "rel": "and",
       "t": "Progress",
       "d": "Social dynamics: how society evolves."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Positive stage",
     "rel": "is that of the",
     "a": "Positive science"
    },
    {
     "de": "Progress",
     "rel": "follows the",
     "a": "Law of the three stages"
    }
   ],
   "idea": "Comte takes the modern trust in science to its extreme: humanity matures by moving from explaining through gods to explaining through laws, and even society must be studied scientifically."
  }
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Hegel and Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"MARX'S PHILOSOPHY\"]:::axis\n  n1[\"German philosophy\"]\n  n2[\"political economy\"]\n  n3[\"utopian socialism\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialectic\"]\n  n9[\"materialism\"]\n  n10[\"labour theory of value\"]\n  n11[\"socialism\"]\n  n12[\"the human being\"]\n  n13[\"nature\"]\n  n14[\"history\"]\n  n15[\"creative activity: work\"]\n  n16[\"creates their life in society\"]\n  n17[\"creation of tools (technology)\"]\n  n18[\"productive force grows\"]\n  n19[\"contradictory relation\"]\n  n20[\"changes the relations of production\"]\n  n21[\"property relations\"]\n  n22[\"capitalist mode of production\"]\n  n23[\"private ownership of the means of production\"]\n  n24[\"alienation or dispossession of one's being\"]:::axis\n  n25[\"social\"]:::key\n  n26[\"political\"]:::key\n  n27[\"religious\"]:::key\n  n28[\"economic\"]:::key\n  n29[\"division into social classes\"]\n  n30[\"bourgeoisie\"]\n  n31[\"proletarians\"]\n  n32[\"revolution\"]:::axis\n  n33[\"classless society\"]\n  n34[\"end of exploitation\"]\n  n35[\"overcoming alienation and fulfilling the human being\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"is its essence\"| n15\n  n15 -->|\"through it\"| n16\n  n16 -->|\"transforms and socialises it\"| n13\n  n16 -->|\"here it develops dialectically\"| n14\n  n16 -->|\"develops\"| n18\n  n16 --> n19\n  n18 -->|\"because of this\"| n17\n  n20 -->|\"produces them\"| n21\n  n18 -->|\"that creates\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"that causes\"| n24\n  n24 -->|\"causes\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"causes\"| n29\n  n29 -->|\"that creates\"| n30\n  n29 --> n31\n  n31 -->|\"that makes\"| n32\n  n32 -->|\"that brings\"| n33\n  n32 --> n34\n  n33 -->|\"condition for it\"| n35\n  n34 -->|\"condition for it\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What does Marx take from Hegel and from Feuerbach, and how does he use it to explain history and capitalism?",
   "raiz": "HISTORICAL MATERIALISM",
   "raiz_d": "Marx turns Hegel's idealist dialectic into a dialectic of matter: the economy drives history.",
   "ramas": [
    {
     "rel": "inherits from his sources",
     "t": "Marx's sources",
     "c": [
      {
       "rel": "from Hegel",
       "t": "Dialectic",
       "a": "Hegel",
       "d": "Reality advances through contradictions. In Hegel it is the Idea; in Marx, material life."
      },
      {
       "rel": "from Feuerbach",
       "t": "Materialism",
       "a": "Feuerbach",
       "d": "What is real is what is material; God is a projection of the human being."
      },
      {
       "rel": "from political economy",
       "t": "The labour theory of value",
       "a": "Smith, Ricardo",
       "d": "The value of commodities comes from labour."
      },
      {
       "rel": "from utopian socialism",
       "t": "The socialist ideal",
       "a": "Owen, Saint-Simon, Fourier"
      }
     ]
    },
    {
     "rel": "explains history",
     "t": "The economic structure",
     "k": true,
     "d": "It determines social, political and ideological organisation.",
     "c": [
      {
       "rel": "starts from the",
       "t": "Labour",
       "d": "Human essence: by transforming nature, human beings make themselves."
      },
      {
       "rel": "clash between",
       "t": "Forces and relations of production",
       "d": "When technology grows, property relations hold it back and the contradiction explodes."
      },
      {
       "rel": "raises a",
       "t": "Superstructure",
       "d": "Law, politics, religion, philosophy: ideas that justify the ruling class."
      },
      {
       "rel": "engine of history",
       "t": "Class struggle",
       "k": true
      }
     ]
    },
    {
     "rel": "he applies it to his own age",
     "t": "Capitalism",
     "c": [
      {
       "rel": "is based on",
       "t": "Private ownership of the means of production",
       "d": "The bourgeoisie owns the means of production; the proletariat has only its labour power."
      },
      {
       "rel": "hence the",
       "t": "Surplus value",
       "d": "The value that the worker produces and does not receive."
      },
      {
       "rel": "causes",
       "t": "Alienation",
       "k": true,
       "d": "The worker is separated from the product, from the process, from their essence and from others."
      }
     ]
    },
    {
     "rel": "way out",
     "t": "Proletarian revolution",
     "c": [
      {
       "rel": "leads to the",
       "t": "Classless society",
       "d": "Communism: the end of exploitation and alienation."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Dialectic",
     "rel": "becomes",
     "a": "Class struggle"
    },
    {
     "de": "The labour theory of value",
     "rel": "allows him to explain the",
     "a": "Surplus value"
    },
    {
     "de": "Alienation",
     "rel": "is overcome with the",
     "a": "Proletarian revolution"
    }
   ],
   "idea": "‘Philosophers have only interpreted the world in various ways; the point, however, is to change it’ (Marx): the dialectic, applied to the economy, explains history and announces its change."
  }
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Ideologies in Marxism",
  "mermaid": "flowchart TD\n  ideo[\"IDEOLOGIES\"]:::axis\n  kausak[\"causes\"]:::key\n  funtz[\"functions\"]:::key\n  k1[\"the economic situation of individuals\"]\n  k2[\"their position in the process of production\"]\n  k3[\"the relations of production they are immersed in\"]\n  f1[\"to create an imaginary representation of reality\"]\n  f2[\"to reconstruct reality in a distorted way\"]\n  f3[\"to hold the social structure together\"]\n  f4[\"to legitimise the power of the ruling class\"]\n  osag[\"components: State, law, morality, political economy, religion, philosophy, art\"]:::key\n  ideo -->|\"causes\"| kausak\n  ideo -->|\"functions\"| funtz\n  ideo -->|\"components\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is an ideology, where does it come from and what is it for?",
   "raiz": "IDEOLOGY",
   "raiz_d": "For Marx, a ‘false consciousness’: a system of ideas that hides exploitation.",
   "ramas": [
    {
     "rel": "is born of",
     "t": "The economic structure",
     "k": true,
     "d": "Ideas depend on how things are produced and on who owns the means of production.",
     "c": [
      {
       "rel": "everyone thinks from their",
       "t": "Class position",
       "d": "The place one occupies in the relations of production."
      },
      {
       "rel": "on it is raised the",
       "t": "Superstructure",
       "d": "Institutions and ideas: State and law, morality, religion, philosophy, art."
      }
     ]
    },
    {
     "rel": "is expressed in",
     "t": "Its forms",
     "c": [
      {
       "rel": "the clearest",
       "t": "Religion",
       "d": "‘The opium of the people’: it consoles with the beyond and prevents rebellion."
      },
      {
       "rel": "also",
       "t": "Morality and law",
       "d": "They present as just and eternal what suits the ruling class."
      },
      {
       "rel": "also",
       "t": "Bourgeois philosophy and economics",
       "d": "They present the capitalist order as natural."
      }
     ]
    },
    {
     "rel": "fulfils",
     "t": "Its functions",
     "c": [
      {
       "rel": "first",
       "t": "Distorting reality",
       "d": "It gives an inverted image: what is historical seems natural."
      },
      {
       "rel": "above all",
       "t": "Legitimising the ruling class",
       "k": true,
       "d": "Its particular interest passes for the interest of all."
      },
      {
       "rel": "thus it achieves",
       "t": "Holding society together",
       "d": "It makes people accept the social order and avoids conflict."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Class position",
     "rel": "explains why it suits",
     "a": "Legitimising the ruling class"
    },
    {
     "de": "Religion",
     "rel": "is a clear case of",
     "a": "Distorting reality"
    }
   ],
   "idea": "Ideas do not float in the air: they are born of the economy and, as false consciousness, make one class's domination pass for natural and just. Changing the economic structure changes ideas."
  }
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Feuerbach: from religious alienation to the democratic republic",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"the human being is this\"]:::axis\n  nahi[\"THE WILL\"]:::key\n  arr[\"REASON\"]:::key\n  sent[\"FEELING\"]:::key\n  perf[\"thought of as PERFECTIONS OF GOD\"]:::axis\n  ali[\"the human being ALIENATES ITSELF FROM ITSELF\"]:::key\n  bot[\"must recover their power\"]\n  erre[\"THE DEMOCRATIC REPUBLIC\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"are thought of\"| perf\n  arr -->|\"are thought of\"| perf\n  sent -->|\"are thought of\"| perf\n  perf -->|\"as a result\"| ali\n  ali -->|\"therefore\"| bot\n  bot -->|\"in it\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is God, according to Feuerbach, and how does the human being recover what has been placed in him?",
   "raiz": "RELIGIOUS ALIENATION",
   "raiz_d": "Ludwig Feuerbach (19th century), a critical disciple of Hegel and a materialist: religion is the work of the human being.",
   "ramas": [
    {
     "rel": "starting point",
     "t": "Human essence",
     "a": "Feuerbach",
     "d": "The faculties that define the human being as a species.",
     "c": [
      {
       "rel": "is",
       "t": "Reason"
      },
      {
       "rel": "is",
       "t": "Will"
      },
      {
       "rel": "is",
       "t": "Feeling (love)"
      }
     ]
    },
    {
     "rel": "the human being makes a",
     "t": "Projection",
     "k": true,
     "d": "They take their own qualities, carry them to infinity and attribute them to a being outside themselves.",
     "c": [
      {
       "rel": "thus is born",
       "t": "God",
       "d": "Human essence idealised and placed outside the human being."
      },
      {
       "rel": "consequence",
       "t": "Alienation",
       "k": true,
       "d": "The more they place in God, the poorer they become: they are separated from their own being and submit to it."
      }
     ]
    },
    {
     "rel": "way out",
     "t": "Recovering the human essence",
     "c": [
      {
       "rel": "by discovering that",
       "t": "Theology is anthropology",
       "k": true,
       "d": "To speak of God is to speak, without knowing it, of the human being."
      },
      {
       "rel": "in social life",
       "t": "Love among human beings",
       "d": "Love of neighbour takes the place of love of God."
      },
      {
       "rel": "in politics",
       "t": "Democratic republic",
       "d": "A community of equals, without divine or monarchical tutelage."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Human essence",
     "rel": "is projected into",
     "a": "God"
    },
    {
     "de": "Theology is anthropology",
     "rel": "undoes the",
     "a": "Alienation"
    }
   ],
   "idea": "God does not create the human being: the human being creates God with their best qualities and impoverishes themselves. Marx will make use of this idea, but will look for the root of alienation in the economy."
  }
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Gramsci: cultural hegemony",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"cultural hegemony\"]:::axis\n  ind[\"force: the State and the law\"]\n  bai[\"consent and agreement\"]:::key\n  intel[\"organic intellectuals\"]:::key\n  zen[\"common sense\"]:::key\n  zib[\"civil society\"]:::axis\n  bloke[\"the historic bloc\"]\n  ideo[\"class interest as general interest\"]\n  ohi[\"custom taken as normal\"]\n  gerra[\"war of position\"]:::axis\n  kontra[\"a new common sense\"]:::key\n  eman[\"emancipation\"]\n  gra -->|\"central concept\"| heg\n  heg -->|\"not only force\"| ind\n  heg -->|\"also consent\"| bai\n  heg -->|\"agents\"| intel\n  bai -->|\"through\"| zen\n  bai -->|\"where\"| zib\n  zib -->|\"school, press\"| ohi\n  zen -->|\"consequence\"| ideo\n  intel -->|\"alliance\"| bloke\n  intel -->|\"cultural struggle\"| gerra\n  gerra -->|\"build\"| kontra\n  ideo -->|\"break\"| kontra\n  kontra -->|\"aim\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why does the ruling class not rule by force alone?",
   "raiz": "CULTURAL HEGEMONY",
   "raiz_d": "Antonio Gramsci (Italian Marxist, 1891-1937): power is also sustained by the consent of the dominated.",
   "ramas": [
    {
     "rel": "on the one hand",
     "t": "Coercion",
     "a": "Gramsci",
     "d": "Political society: the State, the law, the police. It imposes itself by force.",
     "c": [
      {
       "rel": "is attacked with the",
       "t": "War of manoeuvre",
       "d": "A swift frontal assault on the State, as in Russia in 1917."
      }
     ]
    },
    {
     "rel": "on the other",
     "t": "Consent",
     "k": true,
     "d": "Civil society: school, Church, press, family. It convinces instead of compelling.",
     "c": [
      {
       "rel": "produces a",
       "t": "Common sense",
       "k": true,
       "d": "What everyone sees as normal: one class's interest passes for the general interest."
      },
      {
       "rel": "it is elaborated by the",
       "t": "Organic intellectuals",
       "k": true,
       "d": "They organise and spread the worldview of a social class.",
       "c": [
        {
         "rel": "they hold together the",
         "t": "Historic bloc",
         "d": "The union of the economic base and the culture that sustains a social order."
        }
       ]
      }
     ]
    },
    {
     "rel": "response",
     "t": "Counter-hegemony",
     "d": "The subaltern classes must win over culture before power.",
     "c": [
      {
       "rel": "strategy",
       "t": "War of position",
       "d": "A slow cultural struggle, trench by trench, within civil society."
      },
      {
       "rel": "aim",
       "t": "A new common sense",
       "d": "A worldview of their own that makes emancipation possible."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "War of position",
     "rel": "replaces in the West the",
     "a": "War of manoeuvre"
    },
    {
     "de": "A new common sense",
     "rel": "disputes the",
     "a": "Common sense"
    }
   ],
   "idea": "In modern societies power rests above all on consent: whoever manages to make their worldview seem like ‘common sense’ dominates. That is why change begins in culture."
  }
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "The Frankfurt School: critical theory",
  "mermaid": "flowchart TD\n  frk[\"FRANKFURT SCHOOL\"]\n  teo[\"Critical theory\"]:::axis\n  trad[\"against traditional theory\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"emancipation\"]:::key\n  hoad[\"Horkheimer and Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"instrumental reason\"]:::key\n  dial[\"Dialectic of Enlightenment\"]:::key\n  indk[\"culture industry\"]\n  uni[\"one-dimensional society\"]:::key\n  behf[\"false needs\"]\n  erre[\"surplus repression\"]\n  komu[\"communicative reason\"]:::key\n  elka[\"dialogue and consensus\"]\n  esp[\"the public sphere\"]\n  frk -->|\"programme\"| teo\n  marx -->|\"source\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"aim\"| helb\n  teo -->|\"is distinguished\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnosis\"| ains\n  ains -->|\"becomes\"| dial\n  dial -->|\"for example\"| indk\n  mar -->|\"society\"| uni\n  uni -->|\"creating\"| behf\n  behf --> erre\n  hab -->|\"way out\"| komu\n  komu -->|\"through\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why has the reason that promised to free us become an instrument of domination?",
   "raiz": "THE FRANKFURT SCHOOL",
   "raiz_d": "German philosophers of the 20th century who, after the wars, the Holocaust and totalitarianism, criticise society and culture.",
   "ramas": [
    {
     "rel": "their programme",
     "t": "Critical theory",
     "k": true,
     "a": "Horkheimer",
     "d": "It does not merely describe society, as traditional theory does: it analyses it in order to emancipate.",
     "c": [
      {
       "rel": "combines",
       "t": "Marx, Freud and Weber",
       "d": "Economics, psychoanalysis and rationalisation."
      }
     ]
    },
    {
     "rel": "their diagnosis",
     "t": "Instrumental reason",
     "k": true,
     "a": "Horkheimer, Adorno",
     "d": "It asks about means (how to achieve it), not about ends (what is just): efficiency and calculation.",
     "c": [
      {
       "rel": "it is explained by the",
       "t": "Dialectic of Enlightenment",
       "d": "A work of 1944: technical progress does not guarantee a more just society; reason becomes domination."
      },
      {
       "rel": "it is seen in the",
       "t": "Culture industry",
       "d": "Standardised entertainment that fosters passivity and conformism."
      }
     ]
    },
    {
     "rel": "in the consumer society",
     "t": "One-dimensional society",
     "a": "Marcuse",
     "d": "The system integrates everyone and extinguishes the capacity to oppose it.",
     "c": [
      {
       "rel": "creates",
       "t": "False needs",
       "d": "Desires imposed by the market that bind us to consumption."
      }
     ]
    },
    {
     "rel": "their way out (2nd generation)",
     "t": "Communicative reason",
     "k": true,
     "a": "Habermas",
     "d": "We do not only produce: we also communicate.",
     "c": [
      {
       "rel": "seeks",
       "t": "Consensus through dialogue",
       "d": "Agreement that is born of honest dialogue, not of manipulation."
      },
      {
       "rel": "requires a",
       "t": "Free public sphere",
       "d": "The basis of deliberative democracy."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Culture industry",
     "rel": "manufactures",
     "a": "False needs"
    },
    {
     "de": "Communicative reason",
     "rel": "responds to",
     "a": "Instrumental reason"
    }
   ],
   "idea": "Technical progress does not by itself bring a just society: reason reduced to calculation dominates people. Habermas proposes recovering it as dialogue aimed at mutual understanding."
  }
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Arendt: the analysis of totalitarianism",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARIANISM\"]\n  ideo[\"totalising ideology\"]:::key\n  ter[\"the logic of terror\"]:::key\n  masa[\"mass society\"]\n  bak[\"loneliness and atomisation\"]:::key\n  sus[\"roots\"]:::axis\n  anti[\"antisemitism (Dreyfus)\"]\n  inp[\"imperialism\"]\n  ban[\"the banality of evil\"]:::key\n  eich[\"Eichmann: renouncing thought\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"origin\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"consequence\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is totalitarianism and how could it come to exist?",
   "raiz": "TOTALITARIANISM (ARENDT)",
   "raiz_d": "A new form of power of the 20th century, different from classical tyranny: it seeks total domination of the individual.",
   "ramas": [
    {
     "rel": "is born of",
     "t": "Historical roots",
     "d": "Two processes that prepared the crisis of the nation-state.",
     "c": [
      {
       "rel": "first",
       "t": "Modern antisemitism",
       "d": "The Dreyfus case shows how hatred of Jews becomes a political force."
      },
      {
       "rel": "second",
       "t": "Imperialism",
       "d": "Colonial expansion rehearses unlimited domination over other peoples."
      }
     ]
    },
    {
     "rel": "rests on",
     "t": "Mass society",
     "k": true,
     "d": "Isolated individuals, without common bonds, easy to manipulate.",
     "c": [
      {
       "rel": "its basis",
       "t": "Political loneliness",
       "d": "Whoever loses their ties with others is left defenceless against propaganda and obedience."
      }
     ]
    },
    {
     "rel": "works with",
     "t": "Ideology and terror",
     "k": true,
     "d": "The two instruments of total domination.",
     "c": [
      {
       "rel": "explains everything with",
       "t": "A totalising ideology",
       "d": "A single idea (race, class) that claims to explain all of history."
      },
      {
       "rel": "spreads it",
       "t": "Propaganda",
       "d": "It channels consciousness and the political imagination on a mass scale."
      },
      {
       "rel": "imposes it",
       "t": "Terror",
       "d": "It eliminates opposition and plurality; it turns the population into an undifferentiated mass."
      }
     ]
    },
    {
     "rel": "reveals",
     "t": "The banality of evil",
     "k": true,
     "d": "Evil can be born not of a perverse intention, but of the refusal to think.",
     "c": [
      {
       "rel": "example",
       "t": "Eichmann",
       "d": "An obedient bureaucrat, not a monster: he carried out orders without judging them."
      },
      {
       "rel": "remedy",
       "t": "Thinking and judging for oneself",
       "d": "Critical thinking and the public space protect against total domination."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Political loneliness",
     "rel": "leaves defenceless against",
     "a": "Propaganda"
    },
    {
     "de": "Thinking and judging for oneself",
     "rel": "resists",
     "a": "A totalising ideology"
    }
   ],
   "idea": "Totalitarianism is not just another tyranny: with ideology and terror it turns isolated individuals into a mass, and its evil is carried out by ordinary people who refuse to think."
  }
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Arendt: vita activa and political action",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"labour (animal laborans)\"]\n  egi[\"work (homo faber)\"]\n  eki[\"action (zoon politikon)\"]:::axis\n  bizi[\"surviving\"]\n  mundu[\"the world of objects\"]\n  plu[\"natality and plurality\"]:::key\n  esp[\"the public space\"]:::key\n  bot[\"power: acting together\"]:::key\n  ind[\"violence\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"the highest\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"foundation\"| plu\n  eki -->|\"where\"| esp\n  esp --> bot\n  bot -->|\"is distinguished\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What do we human beings do when we act, and which activity makes us free?",
   "raiz": "THE VITA ACTIVA (ARENDT)",
   "raiz_d": "In The Human Condition (1958), Arendt distinguishes three human activities, from the one most tied to necessity to the freest.",
   "ramas": [
    {
     "rel": "biological level",
     "t": "Labour",
     "d": "Sustaining life: producing and consuming. It repeats endlessly and leaves no trace.",
     "c": [
      {
       "rel": "it is carried out by the",
       "t": "Animal laborans",
       "d": "The human being as a species that needs to survive."
      }
     ]
    },
    {
     "rel": "artificial level",
     "t": "Work",
     "d": "Making lasting objects: houses, tools, works.",
     "c": [
      {
       "rel": "it is carried out by the",
       "t": "Homo faber"
      },
      {
       "rel": "creates",
       "t": "A stable world of objects",
       "d": "A common home that outlasts each human life."
      }
     ]
    },
    {
     "rel": "political level",
     "t": "Action",
     "k": true,
     "d": "Acting and speaking with others, with no objects in between: the properly free activity.",
     "c": [
      {
       "rel": "is founded on",
       "t": "Natality",
       "k": true,
       "d": "Every birth brings a new beginning: we can start something unforeseen."
      },
      {
       "rel": "requires",
       "t": "Plurality",
       "d": "We are equal and at the same time unique: we act among those who are different."
      },
      {
       "rel": "takes place in",
       "t": "The public space",
       "d": "Where citizens speak, listen to one another and appear before others."
      }
     ]
    },
    {
     "rel": "from action is born",
     "t": "Power",
     "k": true,
     "d": "It arises when people act together and reach agreement.",
     "c": [
      {
       "rel": "not to be confused with",
       "t": "Violence",
       "d": "An instrument that replaces power or covers its emptiness: it can destroy it, but not create it."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Power",
     "rel": "exists only in",
     "a": "The public space"
    },
    {
     "de": "Animal laborans",
     "rel": "in modernity it invades",
     "a": "The public space"
    }
   ],
   "idea": "For Arendt, freedom lies not in producing or consuming, but in acting with others in the public space: from this power is born, which is the opposite of violence."
  }
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Beauvoir: woman, otherness and freedom",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"one is not born a woman, one becomes one\"]:::axis\n  best[\"woman as the Other\"]:::key\n  aska[\"freedom in situation\"]:::key\n  mit[\"the myths of femininity\"]\n  obj[\"object/subject dialectic\"]\n  trans[\"transcendence\"]\n  inm[\"immanence\"]\n  gor[\"the body and the situation\"]\n  be -->|\"thesis\"| tez\n  tez -->|\"woman\"| best\n  tez -->|\"project\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"against\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "If we are free, why has woman lived as ‘the Other’?",
   "raiz": "WOMAN, OTHERNESS AND FREEDOM",
   "raiz_d": "The argument of The Second Sex (PAU text: the Conclusion), read from the existentialism that Beauvoir shares with Sartre.",
   "ramas": [
    {
     "rel": "starts from",
     "t": "Freedom in situation",
     "a": "Beauvoir, Sartre",
     "d": "There is no prior essence: each human being makes themselves through their actions, but always within a situation.",
     "c": [
      {
       "rel": "hence the thesis",
       "t": "‘One is not born a woman: one becomes one’",
       "k": true,
       "d": "Female identity is a product of culture and society, not of biology."
      },
      {
       "rel": "in the Conclusion",
       "t": "‘In human society nothing is natural’",
       "d": "Woman is a product of civilisation: her destiny is not fixed by hormones."
      }
     ]
    },
    {
     "rel": "diagnosis",
     "t": "Woman as ‘the Other’",
     "k": true,
     "d": "Man has defined himself as Subject; she is always defined in relation to him.",
     "c": [
      {
       "rel": "she explains it with",
       "t": "The dialectic of master and slave",
       "a": "Hegel",
       "d": "Identity is built in the struggle for recognition by the other."
      },
      {
       "rel": "confines her to",
       "t": "Immanence",
       "d": "Repetitive tasks that leave no trace; transcendence is left to man."
      },
      {
       "rel": "justify it",
       "t": "The myths of the ‘eternal feminine’",
       "d": "They present as eternal essences what is a historical situation."
      }
     ]
    },
    {
     "rel": "keeps it going",
     "t": "Complicity and bad faith",
     "k": true,
     "d": "Freedom causes anguish, and both sexes deceive themselves so as not to face it.",
     "c": [
      {
       "rel": "in woman",
       "t": "Accepting being a ‘protected object’",
       "d": "An education that extols self-sacrifice invites her towards ease and dependence."
      },
      {
       "rel": "in man",
       "t": "Turning his privilege into ‘nature’"
      }
     ]
    },
    {
     "rel": "way out",
     "t": "Reciprocity",
     "k": true,
     "d": "Recognising each other as two freedoms that meet: a fraternity between equals.",
     "c": [
      {
       "rel": "requires",
       "t": "Transforming economy and culture",
       "d": "Economic independence is not enough: education and customs must change too."
      },
      {
       "rel": "achieves",
       "t": "The liberation of both sexes",
       "d": "‘To want to be free is also to want others to be free.’"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "‘In human society nothing is natural’",
     "rel": "dismantles",
     "a": "The myths of the ‘eternal feminine’"
    },
    {
     "de": "Immanence",
     "rel": "is broken by",
     "a": "Transforming economy and culture"
    }
   ],
   "idea": "Woman is not ‘the Other’ by nature, but because of a historical situation that she sometimes accepts out of bad faith; the way out is reciprocity between two freedoms."
  }
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "After Beauvoir: gender and justice",
  "mermaid": "flowchart TD\n  gen[\"THE CONSTRUCTION OF GENDER\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"performativity\"]:::key\n  queer[\"queer theory\"]\n  bir[\"redistribution\"]\n  ait[\"recognition\"]:::key\n  gait[\"human capabilities\"]:::key\n  just[\"gender justice\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "After Beauvoir, what is gender and what does justice between the sexes demand?",
   "raiz": "AFTER BEAUVOIR: GENDER AND JUSTICE",
   "raiz_d": "Beauvoir's heirs open two debates: what gender is (identity) and what must change in society (justice).",
   "ramas": [
    {
     "rel": "what gender is",
     "t": "Gender as performance",
     "k": true,
     "a": "Judith Butler",
     "d": "It is not a biological essence: we do it by repeating gestures, clothing and ways of speaking.",
     "c": [
      {
       "rel": "therefore",
       "t": "It can be subverted",
       "d": "If gender is a script that is repeated, it can also be rewritten."
      },
      {
       "rel": "hence",
       "t": "Queer theory",
       "d": "It questions the idea that there are only two fixed, ‘normal’ identities."
      }
     ]
    },
    {
     "rel": "what justice demands",
     "t": "Redistribution and recognition",
     "k": true,
     "a": "Nancy Fraser",
     "d": "Gender justice needs two axes at once; one alone is not enough.",
     "c": [
      {
       "rel": "economic axis",
       "t": "Redistribution",
       "d": "Sharing out resources, time and opportunities."
      },
      {
       "rel": "cultural axis",
       "t": "Recognition",
       "d": "Respecting the dignity and the voice of those who suffer oppression."
      }
     ]
    },
    {
     "rel": "how to measure it",
     "t": "The capabilities approach",
     "k": true,
     "a": "Martha Nussbaum",
     "d": "A society is just if it guarantees every person what they can actually be and do.",
     "c": [
      {
       "rel": "is not measured by",
       "t": "GDP",
       "d": "Average wealth hides what each person can truly do with their life."
      },
      {
       "rel": "but by",
       "t": "Basic capabilities",
       "d": "Life, health, bodily integrity, emotions, practical reason, affiliation, play…"
      }
     ]
    },
    {
     "rel": "what to put at the centre",
     "t": "Ecofeminism",
     "a": "Yayo Herrero",
     "d": "It links the ecological crisis with the oppression of women.",
     "c": [
      {
       "rel": "because we are",
       "t": "Eco-dependent and interdependent",
       "d": "We depend on nature and on the care of others."
      },
      {
       "rel": "proposes",
       "t": "Putting life and care at the centre"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Putting life and care at the centre",
     "rel": "requires",
     "a": "Redistribution"
    }
   ],
   "idea": "Beauvoir showed that woman is made; Butler adds that gender is remade in every act, and Fraser, Nussbaum and Herrero ask what must change in society for there to be justice."
  }
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Existentialism: freedom, the absurd and being",
  "mermaid": "flowchart TD\n  ext[\"EXISTENTIALISM\"]\n  tesi[\"existence precedes essence\"]:::axis\n  fen[\"phenomenology\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: being-in-the-world\"]:::key\n  her[\"being-towards-death\"]\n  den[\"temporality\"]\n  ask[\"freedom\"]:::key\n  era[\"responsibility\"]\n  ang[\"anguish\"]\n  abs[\"the absurd\"]:::key\n  mat[\"revolt\"]\n  zen[\"giving meaning to life\"]\n  aut[\"authenticity: author of one's own life\"]:::key\n  ext -->|\"central thesis\"| tesi\n  fen -->|\"source\"| ext\n  kier -->|\"precedent\"| ext\n  tesi -->|\"as ontology\"| hei\n  tesi -->|\"as freedom\"| sar\n  tesi -->|\"as the absurd\"| cam\n  hei -->|\"the question of being\"| das\n  das -->|\"structure\"| her\n  her -->|\"basis\"| den\n  sar -->|\"man is freedom\"| ask\n  ask -->|\"hence\"| era\n  era -->|\"and\"| ang\n  cam -->|\"the world is absurd\"| abs\n  abs -->|\"response\"| mat\n  mat -->|\"creating\"| zen\n  den -->|\"living authentically\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "If we are born without a fixed essence, what do we do with our freedom?",
   "raiz": "EXISTENTIALISM",
   "raiz_d": "A current of the 1940s and 50s, after the world wars: the question of the meaning of life becomes urgent. Precedent: Kierkegaard.",
   "ramas": [
    {
     "rel": "starting point",
     "t": "Existence precedes essence",
     "k": true,
     "a": "Sartre",
     "d": "We are not born with a fixed nature: we build ourselves through our actions.",
     "c": [
      {
       "rel": "the human being is",
       "t": "A project",
       "d": "A being that makes itself by choosing."
      },
      {
       "rel": "focuses on",
       "t": "The concrete individual",
       "a": "Unamuno",
       "d": "The ‘man of flesh and blood’, not abstractions."
      }
     ]
    },
    {
     "rel": "consequence",
     "t": "Radical freedom",
     "k": true,
     "a": "Sartre",
     "d": "‘Man is condemned to be free’: there is always a choice; not choosing is already choosing.",
     "c": [
      {
       "rel": "implies",
       "t": "Responsibility",
       "d": "With no God or nature to excuse us, we answer for what we are."
      },
      {
       "rel": "produces",
       "t": "Anguish",
       "d": "We feel the lack of absolute foundations and the weight of choosing."
      }
     ]
    },
    {
     "rel": "background",
     "t": "Finitude and meaninglessness",
     "d": "Life has no preset purpose.",
     "c": [
      {
       "rel": "is experienced as",
       "t": "Being-towards-death",
       "a": "Heidegger",
       "d": "We are thrown into a world we did not choose and we are finite."
      },
      {
       "rel": "is experienced as",
       "t": "Nausea and nothingness",
       "a": "Sartre, Heidegger",
       "d": "Existence appears without reason or foundation."
      },
      {
       "rel": "is experienced as",
       "t": "The absurd",
       "a": "Camus",
       "d": "A clash between our longing for meaning and a world that does not satisfy it."
      }
     ]
    },
    {
     "rel": "two ways of living",
     "t": "Authenticity or flight",
     "k": true,
     "d": "What we do in the face of freedom and death.",
     "c": [
      {
       "rel": "fleeing is",
       "t": "Bad faith and inauthenticity",
       "d": "Deceiving oneself (‘that's just how I am’, ‘I had no choice’) or doing what ‘one’ does, like the crowd."
      },
      {
       "rel": "embracing is",
       "t": "The authentic life",
       "d": "Accepting finitude and choosing consciously, taking on the consequences."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Anguish",
     "rel": "leads to taking refuge in",
     "a": "Bad faith and inauthenticity"
    },
    {
     "de": "Being-towards-death",
     "rel": "once accepted, it opens",
     "a": "The authentic life"
    }
   ],
   "idea": "There is no essence or God to decide for us: we are condemned to be free, and living authentically means embracing that freedom and our finitude without excuses."
  }
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Kierkegaard: the anguish of freedom and the leap of faith",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"the human being is characterised like this\"]:::axis\n  ezdet[\"their essence does not determine them in advance\"]:::key\n  elegi[\"they must choose themselves\"]:::key\n  ezdeus[\"in themselves they are nothing\"]\n  ahalg[\"every option is mere possibility\"]\n  angus[\"ANGUISH\"]:::key\n  etsip[\"DESPAIR\"]:::key\n  fede[\"the leap of faith: to pure reality\"]:::key\n  jaink[\"GOD\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"therefore\"| ezdeus\n  elegi -->|\"but\"| ahalg\n  ezdeus -->|\"produces\"| angus\n  ahalg -->|\"produces\"| etsip\n  angus -->|\"we escape\"| fede\n  etsip -->|\"we escape\"| fede\n  fede -->|\"is\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What does it mean to exist as an individual who has to choose themselves?",
   "raiz": "KIERKEGAARD",
   "raiz_d": "A Danish thinker of the 19th century, a precursor of existentialism: against the great abstract systems (Hegel), the concrete individual.",
   "ramas": [
    {
     "rel": "starting point",
     "t": "The single individual",
     "k": true,
     "d": "What matters is not humanity in the abstract, but my concrete existence.",
     "c": [
      {
       "rel": "is not given",
       "t": "The self is a task",
       "d": "The individual has to become themselves."
      },
      {
       "rel": "therefore",
       "t": "Choosing oneself: ‘either/or’",
       "d": "To exist is to decide, and nobody can choose for me."
      }
     ]
    },
    {
     "rel": "freedom produces",
     "t": "Anguish",
     "k": true,
     "d": "The vertigo of freedom: finding oneself before pure possibility, with nothing to guarantee the choice.",
     "c": [
      {
       "rel": "is born of",
       "t": "Possibility",
       "d": "Anything can be and nothing is assured in advance."
      }
     ]
    },
    {
     "rel": "ways of existing",
     "t": "The three stages",
     "d": "Three forms of life between which one does not pass by reasoning, but by choosing.",
     "c": [
      {
       "rel": "first",
       "t": "Aesthetic",
       "d": "Living for the pleasure of the moment, without commitment (the seducer).",
       "c": [
        {
         "rel": "ends in",
         "t": "Despair",
         "d": "Not wanting to be oneself: the scattered life empties out."
        }
       ]
      },
      {
       "rel": "second",
       "t": "Ethical",
       "d": "Commitment to duty and universal norms (marriage)."
      },
      {
       "rel": "third",
       "t": "Religious",
       "d": "The individual's personal and absolute relationship with God."
      }
     ]
    },
    {
     "rel": "only way out",
     "t": "The leap of faith",
     "k": true,
     "d": "Faith is not proved by reason: it is decided, risking everything.",
     "c": [
      {
       "rel": "is",
       "t": "A paradox",
       "d": "It stands above ethics and all logic."
      },
      {
       "rel": "model",
       "t": "Abraham",
       "d": "He agrees to sacrifice Isaac out of obedience to God, against all ethical reason."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Despair",
     "rel": "pushes towards",
     "a": "The leap of faith"
    },
    {
     "de": "The leap of faith",
     "rel": "gives access to the stage",
     "a": "Religious"
    }
   ],
   "idea": "For Kierkegaard, to exist is to choose oneself: that freedom causes anguish, the aesthetic life ends in despair, and only the leap of faith, which reason does not justify, reconciles the individual with themselves before God."
  }
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Postmodernity: the axes of the end of metanarratives",
  "mermaid": "flowchart TD\n  pm[\"POSTMODERNITY\"]\n  meta[\"the end of metanarratives\"]\n  niet[\"Nietzsche's legacy\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze and Guattari\"]:::axis\n  jak[\"the loss of legitimation of knowledge\"]:::key\n  desk[\"deconstruction and différance\"]:::key\n  bot[\"power / knowledge, biopolitics\"]:::key\n  sim[\"the simulacrum\"]:::key\n  erri[\"rhizome and lines of flight\"]:::key\n  haber[\"Habermas: unfinished modernity\"]:::axis\n  vat[\"Vattimo: weak thought\"]\n  ror[\"Rorty: conversation and irony\"]\n  pm -->|\"central diagnosis\"| meta\n  pm -->|\"starting point\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"knowledge\"| jak\n  der -->|\"the text\"| desk\n  fou -->|\"genealogy\"| bot\n  bau -->|\"hyperreality\"| sim\n  del -->|\"non-hierarchical\"| erri\n  jak -->|\"counter-response\"| haber\n  desk -->|\"weakening being\"| vat\n  erri -->|\"conversation\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Can we still trust in reason, truth and progress?",
   "raiz": "POSTMODERNITY",
   "raiz_d": "After the wars and totalitarianisms, scepticism replaces the modern faith in progress. Its great precursor is Nietzsche.",
   "ramas": [
    {
     "rel": "diagnosis",
     "t": "The end of metanarratives",
     "k": true,
     "a": "Lyotard",
     "d": "‘Incredulity towards metanarratives’: we no longer believe in narratives that explain the whole of reality.",
     "c": [
      {
       "rel": "examples",
       "t": "Christianity, Marxism, progress",
       "d": "Grand narratives that promised history a goal."
      },
      {
       "rel": "replace them",
       "t": "Small local narratives",
       "d": "Fragmentation and pluralism: there is no ‘Grand History’."
      }
     ]
    },
    {
     "rel": "radicalise the critique",
     "t": "Disruptive thought",
     "d": "They abandon the modern project of a universal reason and truth.",
     "c": [
      {
       "rel": "dismantles concepts",
       "t": "Deconstruction",
       "a": "Derrida",
       "d": "There is nothing ‘outside the text’: every concept hides contradictions and hierarchies of power."
      },
      {
       "rel": "dismantles the self",
       "t": "The death of the subject",
       "a": "Foucault",
       "d": "The self is a construction of networks of power and discourses: all knowledge produces power."
      },
      {
       "rel": "renounces strong truth",
       "t": "Weak thought",
       "a": "Vattimo",
       "d": "It accepts the plurality of interpretations: an ethics of tolerance."
      },
      {
       "rel": "dismantles the real",
       "t": "Hyperreality",
       "a": "Baudrillard",
       "d": "The simulacrum replaces the real: ‘the map has replaced the territory’."
      }
     ]
    },
    {
     "rel": "reply",
     "t": "Repairing modernity",
     "k": true,
     "a": "Habermas",
     "d": "If we give up universal reason, we are left without tools to criticise injustice.",
     "c": [
      {
       "rel": "the problem is",
       "t": "Instrumental reason",
       "d": "Reason used only as a means to dominate and calculate."
      },
      {
       "rel": "proposes",
       "t": "Dialogical reason",
       "k": true,
       "d": "Rational agreements in an ideal speech community, free of coercion."
      }
     ]
    },
    {
     "rel": "aporia",
     "t": "Anything goes?",
     "d": "Without objective truth, how do we tell real news from fake news, or an expert from an influencer?"
    }
   ],
   "cruces": [
    {
     "de": "Dialogical reason",
     "rel": "responds to",
     "a": "Disruptive thought"
    },
    {
     "de": "Hyperreality",
     "rel": "sharpens",
     "a": "Anything goes?"
    }
   ],
   "idea": "Postmodernity declares the end of the grand narratives and of a single truth; Habermas replies that without a dialogical reason we are left without tools to criticise injustice."
  }
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Paradigm shifts",
  "mermaid": "flowchart TD\n  arist[\"Aristotle\"]:::key\n  org[\"organicist paradigm\"]:::axis\n  magik[\"Magical-animist paradigm\"]:::axis\n  mek[\"mechanistic paradigm\"]:::axis\n  esp[\"based on experience\"]:::key\n  anim[\"nature = a great animal\"]\n  ezoh[\"accepts extraordinary phenomena\"]\n  inoz[\"naive mentality\"]\n  makin[\"nature = machines\"]:::key\n  hedad[\"what is real: extension and motion\"]\n  ezind[\"does not accept occult forces\"]\n  ondor[\"consequences: discoveries and mathematics in science\"]:::key\n  arist -->|\"this is its origin\"| org\n  org -->|\"replaced this one\"| magik\n  magik -->|\"this one replaced it\"| mek\n  magik -->|\"is based on\"| esp\n  esp -->|\"believes\"| anim\n  anim -->|\"accepts\"| ezoh\n  ezoh -->|\"produces\"| inoz\n  mek -->|\"nature is\"| makin\n  makin -->|\"only what is real\"| hedad\n  makin -->|\"does not accept\"| ezind\n  mek -->|\"the consequence is\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How has the way of understanding nature changed?",
   "raiz": "PARADIGM SHIFTS",
   "raiz_d": "A paradigm is the framework an age shares to explain nature; when it enters into crisis, another replaces it.",
   "ramas": [
    {
     "rel": "Antiquity and the Middle Ages",
     "t": "Organicist paradigm",
     "k": true,
     "a": "Aristotle",
     "d": "Nature is like a great living organism in which everything tends towards an end.",
     "c": [
      {
       "rel": "is based on",
       "t": "The experience of the senses",
       "d": "Qualitative observation and common sense, without measuring or experimenting."
      },
      {
       "rel": "explains by",
       "t": "Final causes",
       "d": "Each thing moves towards its natural place or its end (teleology)."
      }
     ]
    },
    {
     "rel": "Renaissance",
     "t": "Magical-animist paradigm",
     "k": true,
     "a": "Ficino, Paracelsus, Bruno",
     "d": "Nature is an animate being, full of souls, sympathies and antipathies.",
     "c": [
      {
       "rel": "admits",
       "t": "Occult forces and extraordinary events",
       "d": "Secret correspondences between stars, bodies and plants."
      },
      {
       "rel": "the wise man is",
       "t": "The magus",
       "d": "Whoever knows these forces can dominate nature (alchemy, astrology)."
      }
     ]
    },
    {
     "rel": "17th century",
     "t": "Mechanistic paradigm",
     "k": true,
     "a": "Galileo, Descartes, Newton",
     "d": "Nature is a machine governed by mathematical laws.",
     "c": [
      {
       "rel": "only accepts",
       "t": "Extension and motion",
       "d": "What is real is what is measurable; occult forces and ends are rejected."
      },
      {
       "rel": "method",
       "t": "Experiment and mathematics",
       "d": "The basis of modern science and of its great discoveries."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Magical-animist paradigm",
     "rel": "breaks with",
     "a": "Organicist paradigm"
    },
    {
     "de": "Mechanistic paradigm",
     "rel": "replaces",
     "a": "Magical-animist paradigm"
    },
    {
     "de": "Extension and motion",
     "rel": "eliminates",
     "a": "Final causes"
    }
   ],
   "idea": "Nature goes from being an organism with ends (Aristotle) to an animate being full of occult forces (Renaissance) and, finally, to a machine measurable by mathematics: modern science is born."
  }
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "The crisis of modernity",
  "title": "Feminism: gender, otherness and current debates",
  "mermaid": "flowchart TD\n  fem[\"FEMINISM\"]\n  sgb[\"sex-gender distinction\"]:::axis\n  ola[\"the waves\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"current debates\"]\n  alt[\"otherness\"]\n  ezda[\"one is not born a woman, one becomes one\"]:::key\n  traz[\"transcendence and immanence\"]\n  perf[\"performativity of gender\"]:::key\n  queer[\"queer theory\"]\n  deseg[\"undoing gender\"]\n  fra[\"Fraser: redistribution and recognition\"]:::key\n  nus[\"Nussbaum: capabilities\"]:::key\n  inter[\"intersectionality\"]:::key\n  zain[\"ethics of care and interdependence\"]:::key\n  fem -->|\"basis\"| sgb\n  fem -->|\"context\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"man the subject, woman the Other\"| alt\n  alt -->|\"hence\"| ezda\n  ezda -->|\"wants to overcome\"| traz\n  but -->|\"gender is an act\"| perf\n  perf -->|\"hence\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How has feminism changed what we understand by ‘being a woman’?",
   "raiz": "FEMINISM",
   "raiz_d": "A theory and movement that denounces inequality between the sexes and shows that it is historical, not natural. It is usually told in ‘waves’.",
   "ramas": [
    {
     "rel": "first wave",
     "t": "Equal rights",
     "a": "The suffragettes",
     "d": "19th and 20th centuries: the vote, education and legal rights for women.",
     "c": [
      {
       "rel": "limit",
       "t": "Changing the laws is not enough",
       "d": "Inequality persists in the family, at work and in culture."
      }
     ]
    },
    {
     "rel": "second wave",
     "t": "A critique of the whole of culture",
     "k": true,
     "a": "Simone de Beauvoir",
     "d": "1960s-80s: oppression is not only legal, but structural.",
     "c": [
      {
       "rel": "starting point",
       "t": "‘One is not born a woman: one becomes one’"
      },
      {
       "rel": "diagnosis",
       "t": "Woman as ‘the other’",
       "d": "Always defined in relation to man, who presents himself as Subject."
      },
      {
       "rel": "from this arises",
       "t": "The sex / gender distinction",
       "k": true,
       "d": "Sex is biological; gender (the feminine and the masculine) is a social construction."
      }
     ]
    },
    {
     "rel": "current debates",
     "t": "Gender, diversity and care",
     "d": "Since the 1990s feminism has broadened and pluralised.",
     "c": [
      {
       "rel": "questions",
       "t": "Gender as performance",
       "k": true,
       "a": "Judith Butler",
       "d": "Gender is made by repeating acts; there is no essence behind it that explains it."
      },
      {
       "rel": "adds",
       "t": "Intersectionality",
       "k": true,
       "d": "Gender oppression intersects with class, race, sexuality or migration."
      },
      {
       "rel": "requires",
       "t": "Redistribution and recognition",
       "a": "Nancy Fraser",
       "d": "Economic justice and respect for dignity, at the same time."
      },
      {
       "rel": "proposes",
       "t": "Care at the centre",
       "a": "Yayo Herrero (ecofeminism)",
       "d": "We are vulnerable and interdependent: life and care should guide politics."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Changing the laws is not enough",
     "rel": "gives way to",
     "a": "A critique of the whole of culture"
    },
    {
     "de": "Gender as performance",
     "rel": "calls into question",
     "a": "The sex / gender distinction"
    }
   ],
   "idea": "Feminism moves from claiming rights to dismantling the idea of a female ‘nature’; today it debates what gender is and how it intersects with other inequalities."
  }
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "The philosopher's methods",
  "title": "The philosopher's methods and tools",
  "mermaid": "flowchart TD\n  center[\"THE PHILOSOPHER'S<br>METHODS AND TOOLS\"]:::axis\n  fu[\"Sources of information\"]:::key\n  he[\"The philosopher's tools\"]:::key\n  center -->|\"starts from\"| fu\n  center -->|\"works on them with\"| he\n  fu --> f1[\"documents · lectures<br>· digital footprints\"]\n  f1 -->|\"are subjected to\"| h1[\"1· critical analysis of sources\"]\n  he --> h1\n  h1 --> h2[\"2· interpretation of documents\"]\n  h2 --> h3[\"3· identifying philosophical problems\"]\n  h3 --> h4[\"4· dialogue based on arguments\"]\n  h4 --> h5[\"5· philosophical research\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How does a philosopher work: with what materials and with what tools?",
   "raiz": "THE METHODS OF PHILOSOPHY",
   "raiz_d": "Doing philosophy is not giving opinions: it is framing a question well, clarifying concepts and defending an answer with reasons.",
   "ramas": [
    {
     "rel": "starts from",
     "t": "Sources",
     "d": "Documents, lectures, digital footprints: texts that must be read with a critical spirit.",
     "c": [
      {
       "rel": "are read in",
       "t": "Their context (historicity)",
       "k": true,
       "d": "All thought is born in a specific age, society and culture."
      },
      {
       "rel": "forces us to review",
       "t": "The canon",
       "d": "What counts as ‘classic’ is not neutral: women and non-European thinkers have been left out."
      }
     ]
    },
    {
     "rel": "interprets them with",
     "t": "Interpretation",
     "d": "Reading a philosophical text is interpreting it.",
     "c": [
      {
       "rel": "its rule",
       "t": "Principle of charity",
       "k": true,
       "d": "Reconstruct the author's strongest version before criticising it. That is not the same as agreeing."
      }
     ]
    },
    {
     "rel": "defends its theses with",
     "t": "Argumentation",
     "k": true,
     "d": "Defending a conclusion on the basis of premises, showing why it is reached.",
     "c": [
      {
       "rel": "must detect the",
       "t": "Fallacy",
       "d": "Reasoning that seems sound but does not justify its conclusion."
      }
     ]
    },
    {
     "rel": "organises everything in the",
     "t": "Philosophical research",
     "k": true,
     "d": "Delimiting a question, choosing the sources, clarifying the concepts and building a reasoned position.",
     "c": [
      {
       "rel": "follows an order",
       "t": "Problem, concepts, thesis, arguments",
       "d": "And conclusion, without forgetting criticism: one's own weaknesses and opposing positions."
      }
     ]
    },
    {
     "rel": "vary with history",
     "t": "Methods and genres",
     "d": "Each age works on problems in its own way and writes them in its own form.",
     "c": [
      {
       "rel": "in Antiquity",
       "t": "Dialogue, dialectic and treatise",
       "a": "Socrates, Plato, Aristotle",
       "d": "Asking and refuting; ascending to the Forms; defining, classifying and seeking causes."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Principle of charity",
     "rel": "makes it possible to criticise fairly in the",
     "a": "Argumentation"
    },
    {
     "de": "Their context (historicity)",
     "rel": "explains why the following change:",
     "a": "Methods and genres"
    }
   ],
   "idea": "Doing philosophy is turning opinion into a reasonable position: reading sources in their context and charitably, arguing from premises and ordering the answer to a well-delimited question."
  }
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "The origin of philosophy",
  "title": "The birth of philosophy in Greece",
  "mermaid": "flowchart TD\n  center[\"THE BIRTH OF PHILOSOPHY<br>IN GREECE (6th c. BC)\"]:::axis\n  paso[\"From myth to logos\"]:::key\n  fac[\"Factors that made it possible\"]:::key\n  center -->|\"consists in\"| paso\n  center -->|\"explain it\"| fac\n  paso --> mito[\"MYTH:<br>imaginative explanation (gods)\"]\n  paso --> logos[\"LOGOS:<br>rational explanation (causes)\"]\n  mito -->|\"gives way to\"| logos\n  fac --> c1[\"democracy of the polis → debate in the agora\"]\n  fac --> c2[\"slavery → free time to think\"]\n  fac --> c3[\"religion without dogmas → freedom to criticise\"]\n  fac --> c4[\"trade → contact with other cultures\"]\n  fac --> c5[\"written laws → systematic debate\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why was philosophy born in Greece, and what changed in the move from myth to logos?",
   "raiz": "FROM MYTH TO LOGOS",
   "raiz_d": "6th century BC, Greek colonies of Ionia (Miletus) and Magna Graecia: the first attempts to explain reality without the supernatural.",
   "ramas": [
    {
     "rel": "before",
     "t": "Myth",
     "k": true,
     "a": "Homer, Hesiod",
     "d": "Traditional narratives by the poets about the world, human beings and the gods.",
     "c": [
      {
       "rel": "responds to",
       "t": "Who did it?",
       "d": "What happens depends on the capricious will of the gods. It is accepted and handed down."
      },
      {
       "rel": "it is put in doubt by the",
       "t": "Xenophanes' critique",
       "a": "Xenophanes",
       "d": "The gods are a human projection: if oxen could paint, they would paint gods that looked like oxen."
      }
     ]
    },
    {
     "rel": "then",
     "t": "Logos",
     "k": true,
     "d": "Reason: seeking causes in nature itself (physis), not in the gods.",
     "c": [
      {
       "rel": "responds to",
       "t": "Why does it happen necessarily?",
       "k": true,
       "d": "Things do not happen by whim: there is necessity, and physis is a cosmos, an order."
      },
      {
       "rel": "seeks",
       "t": "The arkhé",
       "d": "The principle from which everything proceeds."
      },
      {
       "rel": "is subjected to",
       "t": "Criticism and discussion",
       "d": "Explanations are criticised and put to the test."
      }
     ]
    },
    {
     "rel": "made it possible",
     "t": "Conditions in Greece",
     "k": true,
     "c": [
      {
       "rel": "there was",
       "t": "Leisure to think",
       "d": "The labour of slaves gave citizens free time."
      },
      {
       "rel": "there was no",
       "t": "Sacred books or priestly caste",
       "d": "No dogmas or revealed truth to impose."
      },
      {
       "rel": "spread",
       "t": "The polis and trade",
       "d": "Contact with Egypt, Asia and other cultures made their own beliefs seem relative."
      },
      {
       "rel": "were born",
       "t": "The citizen and the agora",
       "d": "In the public square people debate, and argumentation gains value."
      },
      {
       "rel": "developed",
       "t": "Alphabetic writing",
       "d": "It fixes thought and makes it possible to criticise and transmit it."
      }
     ]
    },
    {
     "rel": "with its limits",
     "t": "An origin with shadows",
     "c": [
      {
       "rel": "left out",
       "t": "Women, slaves and foreigners",
       "d": "Public speech was not for everyone."
      },
      {
       "rel": "refutes the",
       "t": "‘Greek miracle’",
       "d": "Greece inherited knowledge from Egypt, Mesopotamia and Phoenicia; its novelty was to discuss explanations in public."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Xenophanes' critique",
     "rel": "opens the way to the",
     "a": "Logos"
    },
    {
     "de": "The citizen and the agora",
     "rel": "makes possible the",
     "a": "Criticism and discussion"
    }
   ],
   "idea": "The move from myth to logos does not replace some stories with others: it changes the kind of explanation, from ‘who did it?’ to ‘why does it happen necessarily?’. The Greek novelty was to make explanations open to public discussion."
  }
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "The Presocratics",
  "title": "The Presocratics: the search for the arkhé",
  "mermaid": "flowchart TD\n  center[\"THE PRESOCRATICS:<br>what is the arkhé (first principle) of everything?\"]:::axis\n  fis[\"Physicists:<br>a material principle\"]:::key\n  otros[\"Other answers\"]:::key\n  deb[\"The great debate:<br>change vs permanence\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Thales → water\"]\n  fis --> t2[\"Anaximander → apeiron\"]\n  fis --> t3[\"Anaximenes → air\"]\n  fis --> t4[\"Democritus → atoms + void\"]\n  otros --> p1[\"Pythagoras → numbers\"]\n  otros --> emp[\"Empedocles → 4 elements\"]\n  otros --> ana[\"Anaxagoras → nous\"]\n  deb --> her[\"Heraclitus → everything flows (fire)\"]\n  deb --> par[\"Parmenides → being is unchanging\"]\n  her -->|\"is opposed to\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "If everything changes, what remains? What is the first principle (arkhé) of reality?",
   "raiz": "THE PRESOCRATICS AND THE ARKHÉ",
   "raiz_d": "Physis is a cosmos, an order. Behind change there must be something that remains: the arkhé, the origin, substrate and cause of everything.",
   "ramas": [
    {
     "rel": "a single material principle",
     "t": "The Milesian monists",
     "k": true,
     "d": "A single natural substance, alive in itself (hylozoism), which is transformed.",
     "c": [
      {
       "rel": "for Thales",
       "t": "Water",
       "a": "Thales",
       "d": "Everything alive needs it and springs from it."
      },
      {
       "rel": "for Anaximander",
       "t": "The apeiron",
       "a": "Anaximander",
       "d": "The indefinite and unlimited, from which everything comes and to which everything returns."
      },
      {
       "rel": "for Anaximenes",
       "t": "Air",
       "a": "Anaximenes",
       "d": "By condensation and rarefaction: the first mechanism that explains change."
      }
     ]
    },
    {
     "rel": "a non-material principle",
     "t": "The Pythagoreans",
     "a": "Pythagoras",
     "d": "Number and proportion: things are as they are because they keep proportions.",
     "c": [
      {
       "rel": "they teach",
       "t": "Immortal soul, body as prison",
       "d": "The soul transmigrates from one body to another. It will influence Plato."
      }
     ]
    },
    {
     "rel": "the great debate",
     "t": "The problem of change",
     "c": [
      {
       "rel": "affirms it",
       "t": "Everything flows",
       "k": true,
       "a": "Heraclitus",
       "d": "Continuous becoming and a struggle of opposites, governed by a logos (fire)."
      },
      {
       "rel": "denies it",
       "t": "Being is, non-being is not",
       "k": true,
       "a": "Parmenides",
       "d": "Being is eternal, single and unchanging; change is an appearance of the senses.",
       "c": [
        {
         "rel": "hence",
         "t": "Reason versus the senses",
         "d": "The way of truth (reason) and the way of opinion (the senses): the problem of knowledge is born."
        }
       ]
      }
     ]
    },
    {
     "rel": "several eternal principles",
     "t": "The pluralists",
     "k": true,
     "d": "Principles are neither born nor die; to change is to mix and separate.",
     "c": [
      {
       "rel": "for Empedocles",
       "t": "Four roots",
       "a": "Empedocles",
       "d": "Earth, water, air and fire, which Love unites and Strife separates."
      },
      {
       "rel": "for Anaxagoras",
       "t": "Seeds and Nous",
       "a": "Anaxagoras",
       "d": "Infinite seeds (homoeomeries) set in motion by a mind, the Nous."
      },
      {
       "rel": "for Democritus",
       "t": "Atoms and void",
       "a": "Democritus",
       "d": "Everything is matter and motion, without purpose (mechanism)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The pluralists",
     "rel": "take the eternity of being from",
     "a": "Being is, non-being is not"
    },
    {
     "de": "The pluralists",
     "rel": "save change from",
     "a": "Everything flows"
    },
    {
     "de": "Atoms and void",
     "rel": "admits a non-being (the void) against",
     "a": "Being is, non-being is not"
    }
   ],
   "idea": "All of them seek the arkhé, but the underlying problem is change: Heraclitus affirms it, Parmenides denies it, and the pluralists save it with several eternal principles. Plato will inherit the problem."
  }
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "The Sophists and Socrates",
  "title": "The Sophists and Socrates",
  "mermaid": "flowchart TD\n  center[\"THE SOPHISTS AND SOCRATES\"]:::axis\n  sof[\"SOPHISTS<br>(Protagoras, Gorgias)\"]:::key\n  soc[\"SOCRATES\"]:::key\n  asp[\"ASPASIA OF MILETUS\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"confront\"| soc\n  sof --> s1[\"epistemological scepticism\"]\n  sof --> s2[\"moral relativism\"]\n  sof --> s3[\"laws are convention\"]\n  soc --> c1[\"moral universalism\"]\n  soc --> c2[\"seeks universal definitions\"]\n  soc --> c3[\"moral intellectualism: knowledge = virtue\"]\n  soc -->|\"method\"| c4[\"irony + maieutics\"]\n  asp --> a1[\"teacher of rhetoric\"]\n  asp -->|\"influences\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Are laws and values natural or conventional? Is there a truth valid for everyone?",
   "raiz": "THE SOPHISTS, SOCRATES AND ASPASIA",
   "raiz_d": "5th century BC, democratic Athens: with the anthropological turn, philosophy moves from physis to the polis.",
   "ramas": [
    {
     "rel": "underlying debate",
     "t": "Physis versus nomos",
     "k": true,
     "d": "What is natural, which does not vary, versus what is agreed by human beings: law, custom, values.",
     "c": [
      {
       "rel": "according to Hippias",
       "t": "Laws are convention",
       "a": "Hippias",
       "d": "They vary from one community to another and, for that reason, can be changed."
      }
     ]
    },
    {
     "rel": "they teach rhetoric",
     "t": "The Sophists",
     "d": "Itinerant teachers who taught, for a fee, how to triumph in the assembly.",
     "c": [
      {
       "rel": "defends",
       "t": "Relativism",
       "k": true,
       "a": "Protagoras",
       "d": "‘Man is the measure of all things’: there is no single truth or justice."
      },
      {
       "rel": "defends",
       "t": "Scepticism",
       "a": "Gorgias",
       "d": "Nothing exists; if it did, it could not be known; if it could be known, it could not be communicated."
      },
      {
       "rel": "reduce language to",
       "t": "Persuasion",
       "d": "Rhetoric and eristic: convincing, not saying what things are."
      }
     ]
    },
    {
     "rel": "fights the Sophists",
     "t": "Socrates",
     "d": "He takes no fee, engages in dialogue instead of giving speeches, and starts from ‘I know only that I know nothing’.",
     "c": [
      {
       "rel": "against relativism",
       "t": "Universal definitions",
       "k": true,
       "d": "Concepts that express what is common to all things of a kind."
      },
      {
       "rel": "in morality",
       "t": "Moral intellectualism",
       "d": "Only whoever knows the good acts well; evil is done out of ignorance."
      },
      {
       "rel": "with the method of",
       "t": "Irony and maieutics",
       "k": true,
       "d": "Discovering one's own ignorance (aporia) and helping to ‘give birth’ to the truth."
      }
     ]
    },
    {
     "rel": "an exception in the patriarchal polis",
     "t": "Aspasia of Miletus",
     "d": "A speaker and teacher of rhetoric when citizenship belonged only to free men.",
     "c": [
      {
       "rel": "Socrates calls her",
       "t": "‘My teacher’",
       "d": "That is how Plato's Menexenus names her."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Universal definitions",
     "rel": "refute the",
     "a": "Relativism"
    },
    {
     "de": "Irony and maieutics",
     "rel": "dialogue that seeks the truth, not",
     "a": "Persuasion"
    },
    {
     "de": "Aspasia of Miletus",
     "rel": "teaches rhetoric to",
     "a": "Socrates"
    }
   ],
   "idea": "The Sophists turn laws and values into convention (nomos) and truth into something relative; Socrates, through dialogue, seeks universal definitions that hold for everyone."
  }
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Plato and Aristotle",
  "title": "Plato and Aristotle",
  "mermaid": "flowchart TD\n  center[\"PLATO AND ARISTOTLE\"]:::axis\n  pla[\"PLATO\"]:::key\n  ari[\"ARISTOTLE\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"criticises\"| pla\n  pla --> p1[\"dualism: world of Forms<br>vs physical world\"]\n  pla --> p2[\"anamnesis (recollection)\"]\n  pla --> p3[\"episteme (knowledge) vs doxa (opinion)\"]\n  ari --> a1[\"hylomorphism: matter + form\"]\n  ari --> a2[\"theory of the four causes\"]\n  ari --> a3[\"from potentiality to actuality\"]\n  a1 -->|\"against dualism\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Where is the truly real, and how do we know it?",
   "raiz": "PLATO AND ARISTOTLE: REALITY",
   "raiz_d": "Two answers to the problem inherited from Heraclitus and Parmenides: how to think at once what changes and what remains.",
   "ramas": [
    {
     "rel": "separates two worlds",
     "t": "Plato: ontological dualism",
     "k": true,
     "a": "Plato",
     "c": [
      {
       "rel": "what is real is",
       "t": "The Forms",
       "k": true,
       "d": "Eternal, unchanging and universal models. At the summit, the Form of the Good."
      },
      {
       "rel": "their copies are",
       "t": "Sensible things",
       "d": "Changing and many; they participate in the Forms and imitate them."
      },
      {
       "rel": "is known through",
       "t": "Recollection",
       "d": "To know is to recollect what the soul contemplated before being embodied."
      },
      {
       "rel": "one ascends",
       "t": "From doxa to episteme",
       "d": "From opinion about the sensible to the science of the intelligible (dialectic).",
       "c": [
        {
         "rel": "is narrated by the",
         "t": "Allegory of the cave",
         "d": "Republic VII: climbing from the shadows to the Sun, the Form of the Good."
        }
       ]
      }
     ]
    },
    {
     "rel": "unites matter and form",
     "t": "Aristotle: hylomorphism",
     "k": true,
     "a": "Aristotle",
     "c": [
      {
       "rel": "what is real is",
       "t": "The concrete substance",
       "k": true,
       "d": "Each individual thing, composed of matter and form."
      },
      {
       "rel": "form is",
       "t": "In the things themselves",
       "d": "Not in a separate world: it is the structure of the thing itself."
      },
      {
       "rel": "change is",
       "t": "Passing from potentiality to actuality",
       "d": "Real and explicable through its causes (see ‘The causes of change’)."
      },
      {
       "rel": "is known through",
       "t": "Abstraction",
       "d": "The understanding extracts the form from what the senses provide."
      }
     ]
    },
    {
     "rel": "Aristotle objects",
     "t": "Critique of the Forms",
     "d": "Separating forms from things duplicates reality without explaining it.",
     "c": [
      {
       "rel": "for example",
       "t": "The Third Man",
       "d": "If the thing and the Form resemble each other, another Form would be needed to explain that, and so on to infinity."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Abstraction",
     "rel": "as opposed to the",
     "a": "Recollection"
    },
    {
     "de": "In the things themselves",
     "rel": "not in a separate world such as",
     "a": "The Forms"
    },
    {
     "de": "Critique of the Forms",
     "rel": "rejects the separation of",
     "a": "The Forms"
    }
   ],
   "idea": "Plato places the real in a separate world of Forms, and to know is to recollect; Aristotle places it in concrete substances, composed of matter and form, and to know is to abstract from the senses."
  }
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Classical anthropology",
  "title": "Classical anthropology: the psyche",
  "mermaid": "flowchart TD\n  center[\"CLASSICAL ANTHROPOLOGY:<br>what is the psyche (the soul)?\"]:::axis\n  soc[\"SOCRATES\"]:::key\n  pla[\"PLATO\"]:::key\n  ari[\"ARISTOTLE\"]:::key\n  center --> soc\n  soc -->|\"developed by\"| pla\n  pla -->|\"corrected by\"| ari\n  soc --> s1[\"‘know yourself’\"]\n  soc --> s2[\"the soul is what is most valuable\"]\n  soc --> s3[\"knowledge = virtue\"]\n  pla --> p1[\"immortal soul, three parts\"]\n  pla --> p2[\"the body is its prison\"]\n  pla --> p3[\"anthropological dualism\"]\n  ari --> a1[\"the soul is form: it does not exist without a body\"]\n  ari --> a2[\"three souls: vegetative,<br>sensitive, rational\"]\n  ari --> a3[\"substantial unity (body + soul)\"]\n  p3 -->|\"rejected by\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is the soul (psyche), and how is it related to the body?",
   "raiz": "THE PSYCHE IN CLASSICAL GREECE",
   "raiz_d": "With the anthropological turn the question becomes ‘who am I and how should I live?’.",
   "ramas": [
    {
     "rel": "the soul must be cared for",
     "t": "Socrates",
     "a": "Socrates",
     "d": "True freedom is knowing and governing oneself.",
     "c": [
      {
       "rel": "his motto",
       "t": "‘Know yourself’",
       "d": "From the temple at Delphi: to live without examining oneself is to live asleep."
      }
     ]
    },
    {
     "rel": "separates soul and body",
     "t": "Plato: anthropological dualism",
     "k": true,
     "a": "Plato",
     "c": [
      {
       "rel": "the soul is",
       "t": "Immortal and pre-existent",
       "d": "It contemplated the Forms before birth and transmigrates (metempsychosis), a Pythagorean inheritance."
      },
      {
       "rel": "the body is",
       "t": "The soul's prison",
       "k": true,
       "d": "It distracts the soul with desires and fears and prevents it from reaching the truth."
      },
      {
       "rel": "is divided into",
       "t": "Three parts of the soul",
       "d": "Rational (the charioteer), spirited and appetitive: the myth of the winged chariot."
      }
     ]
    },
    {
     "rel": "unites soul and body",
     "t": "Aristotle: hylomorphism",
     "k": true,
     "a": "Aristotle",
     "c": [
      {
       "rel": "the soul is",
       "t": "Form of the living body",
       "k": true,
       "d": "It does not exist without it, just as the shape of the statue does not exist without the bronze."
      },
      {
       "rel": "the human being is",
       "t": "A single substance",
       "d": "Matter (the body) and form (the soul) united."
      },
      {
       "rel": "the soul has",
       "t": "Three functions",
       "d": "Vegetative (every living being), sensitive (animals) and rational (only the human being)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Socrates",
     "rel": "his care of the soul inspires the",
     "a": "Plato: anthropological dualism"
    },
    {
     "de": "Form of the living body",
     "rel": "rejects the idea of",
     "a": "The soul's prison"
    }
   ],
   "idea": "For Plato we are an immortal soul trapped in a body; for Aristotle, a single substance in which the soul is the form of the body and does not exist without it."
  }
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Classical ethics",
  "title": "The ethical debate",
  "mermaid": "flowchart TD\n  center[\"THE CLASSICAL ETHICAL DEBATE\"]:::axis\n  sp[\"SOCRATES AND PLATO:<br>moral intellectualism\"]:::key\n  ari[\"ARISTOTLE:<br>virtue ethics\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"distances himself from\"| sp\n  sp --> s1[\"knowing the good → acting well\"]\n  sp --> s2[\"nobody does wrong on purpose<br>(only through ignorance)\"]\n  ari --> a1[\"virtue is cultivated through habit\"]\n  ari --> a2[\"mean between two extremes\"]\n  ari --> a3[\"eudaimonia: happiness as the end\"]\n  s1 -->|\"knowing is not enough:<br>you must form the habit\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is virtue, and how is happiness attained?",
   "raiz": "CLASSICAL ETHICS",
   "raiz_d": "Aretè (virtue) and eudaimonia (happiness): intellectualism unites them in knowledge; Aristotle, in habit.",
   "ramas": [
    {
     "rel": "virtue is knowledge",
     "t": "Socrates: moral intellectualism",
     "k": true,
     "a": "Socrates",
     "c": [
      {
       "rel": "therefore",
       "t": "‘Nobody does evil willingly’",
       "d": "Whoever acts badly does so out of ignorance."
      },
      {
       "rel": "unites",
       "t": "Knowledge, virtue and happiness",
       "d": "Whoever knows the good practises it and is happy."
      }
     ]
    },
    {
     "rel": "qualifies intellectualism",
     "t": "Plato: virtue and purification",
     "a": "Plato",
     "d": "The soul frees itself from the body to contemplate the Form of the Good; the supreme virtue is wisdom.",
     "c": [
      {
       "rel": "one virtue for each part",
       "t": "Prudence, courage, temperance",
       "d": "Of the rational, spirited and appetitive parts of the soul."
      },
      {
       "rel": "their harmony is",
       "t": "Justice",
       "d": "Each part fulfils its function under the government of reason."
      }
     ]
    },
    {
     "rel": "virtue is habit",
     "t": "Aristotle: virtue ethics",
     "k": true,
     "a": "Aristotle",
     "c": [
      {
       "rel": "ultimate end",
       "t": "Eudaimonia",
       "k": true,
       "d": "A fulfilled life: activity of the soul in accordance with virtue throughout a whole lifetime."
      },
      {
       "rel": "distinguishes",
       "t": "Dianoetic and ethical virtues",
       "d": "Those of the understanding are learned; those of character are acquired by repeating acts."
      },
      {
       "rel": "ethical virtue is",
       "t": "The mean",
       "k": true,
       "d": "Between two vices: courage, between cowardice and recklessness. Prudence fixes it."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Aristotle: virtue ethics",
     "rel": "knowing is not enough, you must form the habit:",
     "a": "Socrates: moral intellectualism"
    },
    {
     "de": "The mean",
     "rel": "prudence fixes it, not a Form:",
     "a": "Plato: virtue and purification"
    }
   ],
   "idea": "For Socrates and Plato it is enough to know the good in order to do it; Aristotle replies that ethical virtue is a habit, the mean fixed by prudence, and that happiness is a whole life in accordance with virtue."
  }
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Classical politics",
  "title": "The political debate",
  "mermaid": "flowchart TD\n  center[\"THE CLASSICAL POLITICAL DEBATE\"]:::axis\n  pla[\"PLATO:<br>the ideal city (utopia)\"]:::key\n  ari[\"ARISTOTLE:<br>realist politics\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"more pragmatic than\"| pla\n  pla --> p1[\"three social classes\"]\n  pla --> p2[\"rule by philosopher-kings\"]\n  pla --> p3[\"critique of democracy\"]\n  ari --> a0[\"the human being is zoon politikon<br>(political animal)\"]\n  ari --> rectos[\"Right governments:<br>monarchy · aristocracy · polity\"]\n  ari --> desv[\"Deviant governments:<br>tyranny · oligarchy · demagogy\"]\n  rectos -->|\"are corrupted into\"| desv\n  ari -->|\"the best form\"| a4[\"the polity\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is the best political order, and who should rule?",
   "raiz": "CLASSICAL POLITICS",
   "raiz_d": "After the condemnation of Socrates (399 BC): if democracy could kill the most just of men, what is the best social order?",
   "ramas": [
    {
     "rel": "designs the ideal city",
     "t": "Plato: the Republic",
     "k": true,
     "a": "Plato",
     "d": "A utopia: the city is the soul written large.",
     "c": [
      {
       "rel": "is divided into",
       "t": "Three social classes",
       "d": "Producers (temperance), guardians (courage) and philosopher-rulers (prudence)."
      },
      {
       "rel": "justice is",
       "t": "Each class in its function",
       "d": "Without encroaching on the function of the others."
      },
      {
       "rel": "must rule",
       "t": "The philosopher-king",
       "k": true,
       "d": "Only the one who knows the Form of the Good. That is why he criticises the democracy of his time."
      },
      {
       "rel": "if it becomes corrupt",
       "t": "Cycle of degeneration",
       "d": "Timocracy, oligarchy, democracy and, worst of all, tyranny."
      }
     ]
    },
    {
     "rel": "studies the real polis",
     "t": "Aristotle: the Politics",
     "k": true,
     "a": "Aristotle",
     "c": [
      {
       "rel": "starts from the fact that",
       "t": "Zoon politikon",
       "k": true,
       "d": "The human being is a political animal: he lives fully only in community."
      },
      {
       "rel": "is organised into",
       "t": "Family, village and polis",
       "d": "The polis is the perfect community: it seeks not only to live, but to live well."
      },
      {
       "rel": "classifies",
       "t": "Just and degenerate regimes",
       "d": "According to who rules (one, few, many) and for whom.",
       "c": [
        {
         "rel": "seek the common good",
         "t": "Monarchy, aristocracy, polity"
        },
        {
         "rel": "seek self-interest",
         "t": "Tyranny, oligarchy, demagogy"
        }
       ]
      },
      {
       "rel": "prefers",
       "t": "The regime that avoids extremes",
       "d": "Adapted to each people and supported by the middle class: politics, too, is a mean."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The regime that avoids extremes",
     "rel": "as opposed to the rule of the wise:",
     "a": "The philosopher-king"
    },
    {
     "de": "Tyranny, oligarchy, demagogy",
     "rel": "are also corruptions, like",
     "a": "Cycle of degeneration"
    }
   ],
   "idea": "Plato designs the ideal just city, ruled by the one who knows the Good; Aristotle starts from the real polis and from the human being as a political animal, and prefers the regime that seeks the common good while avoiding extremes."
  }
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Hellenism",
  "title": "The Hellenistic schools",
  "mermaid": "flowchart TD\n  center[\"HELLENISTIC SCHOOLS\"]:::axis\n  meta[\"Common goal: happiness<br>as serenity (ataraxia)\"]:::key\n  center -->|\"all seek\"| meta\n  epi[\"EPICUREANISM\"]:::key\n  est[\"STOICISM\"]:::key\n  cin[\"CYNICISM\"]:::key\n  esc[\"SCEPTICISM\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"path\"| e1[\"moderate pleasure,<br>avoiding pain\"]\n  est -->|\"path\"| s1[\"accepting fate<br>(apatheia)\"]\n  cin -->|\"path\"| c1[\"living according to nature<br>(autarky)\"]\n  esc -->|\"path\"| x1[\"suspending judgement<br>(epoché)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How can we be happy when the polis disappears and the world becomes uncertain?",
   "raiz": "THE HELLENISTIC SCHOOLS",
   "raiz_d": "After Alexander the Great, the polis gives way to great kingdoms: philosophy turns towards the individual and inner happiness.",
   "ramas": [
    {
     "rel": "renouncing the artificial",
     "t": "Cynicism",
     "a": "Antisthenes, Diogenes of Sinope",
     "c": [
      {
       "rel": "their ideal",
       "t": "Autarky",
       "k": true,
       "d": "Self-sufficiency: depending on nothing and nobody."
      },
      {
       "rel": "their path",
       "t": "Living in accordance with nature",
       "d": "Rejecting conventions, wealth, power and fame: they are artificial needs."
      }
     ]
    },
    {
     "rel": "accepting the order of the world",
     "t": "Stoicism",
     "a": "Zeno of Citium",
     "c": [
      {
       "rel": "their ideal",
       "t": "Apatheia and ataraxia",
       "k": true,
       "d": "No passions to disturb the soul; inner peace."
      },
      {
       "rel": "their path",
       "t": "Accepting the logos and fate",
       "d": "Only what depends on us matters: our judgements and attitudes."
      },
      {
       "rel": "hence",
       "t": "Cosmopolitanism",
       "d": "We are all citizens of the same world."
      }
     ]
    },
    {
     "rel": "seeking serene pleasure",
     "t": "Epicureanism",
     "a": "Epicurus",
     "c": [
      {
       "rel": "their ideal",
       "t": "Pleasure as the absence of pain",
       "k": true,
       "d": "No pain in the body (aponia) and no disturbance in the soul (ataraxia); no excesses."
      },
      {
       "rel": "their path",
       "t": "The tetrapharmakos",
       "d": "Not fearing the gods or death; the good is easy to attain and evil easy to bear."
      }
     ]
    },
    {
     "rel": "renouncing certainty",
     "t": "Scepticism",
     "a": "Pyrrho of Elis",
     "c": [
      {
       "rel": "starts from the fact that",
       "t": "There is no certain knowledge",
       "d": "Every claim is opposed by another with equally valid reasons."
      },
      {
       "rel": "their path",
       "t": "Epoché",
       "k": true,
       "d": "Suspending judgement, neither affirming nor denying anything: from this ataraxia is born."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Pleasure as the absence of pain",
     "rel": "shares ataraxia with",
     "a": "Apatheia and ataraxia"
    },
    {
     "de": "Epoché",
     "rel": "also leads to",
     "a": "Apatheia and ataraxia"
    }
   ],
   "idea": "With no polis to give meaning, the four schools seek the happiness of the individual: Cynic autarky, Stoic apatheia, Epicurus' serene pleasure and the Sceptics' suspension of judgement."
  }
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Medieval philosophy",
  "title": "Medieval philosophy",
  "mermaid": "flowchart TD\n  center[\"MEDIEVAL PHILOSOPHY\"]:::axis\n  hilo[\"Central theme:<br>can reason prove God?\"]:::key\n  et[\"Four stages\"]:::key\n  center -->|\"revolves around\"| hilo\n  center --> et\n  et --> e1[\"Patristics → Augustine\"]\n  e1 --> e2[\"Early Scholasticism → Anselm\"]\n  e2 --> e3[\"Late Scholasticism → Thomas Aquinas\"]\n  e3 --> e4[\"Nominalism → Ockham\"]\n  e1 -->|\"proof\"| p1[\"inner truth (Augustine)\"]\n  e3 -->|\"proof\"| p2[\"the five ways (Aquinas)\"]\n  e4 -->|\"casts doubt on\"| p3[\"rational proofs (Ockham)\"]\n  p3 -->|\"ends up separating\"| sep[\"faith and reason\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How was medieval philosophy organised, and what great problems did it discuss?",
   "raiz": "MEDIEVAL PHILOSOPHY",
   "raiz_d": "It is born with Christianity and revolves around a new problem: the relationship between faith and reason.",
   "ramas": [
    {
     "rel": "first stage",
     "t": "Patristics",
     "k": true,
     "a": "Augustine of Hippo",
     "d": "2nd-8th centuries: the Church Fathers.",
     "c": [
      {
       "rel": "task",
       "t": "Defending Christian dogma",
       "d": "Against heresies, relying on Greek philosophy."
      },
      {
       "rel": "is inspired by",
       "t": "Neoplatonism",
       "a": "Plotinus",
       "d": "A reinterpretation of Plato that unites philosophy and religious experience."
      }
     ]
    },
    {
     "rel": "second stage",
     "t": "Scholasticism",
     "k": true,
     "a": "Anselm, Thomas Aquinas",
     "d": "9th-14th centuries: the philosophy of the universities.",
     "c": [
      {
       "rel": "seeks",
       "t": "A synthesis of faith and reason",
       "d": "Systematic; reason is exercised, but subordinated to faith."
      },
      {
       "rel": "with a method",
       "t": "Lectio, quaestio, disputatio",
       "d": "Reading and commenting on the authorities, posing the question with arguments for and against, and debating it."
      }
     ]
    },
    {
     "rel": "great debate",
     "t": "The problem of universals",
     "k": true,
     "d": "What are general concepts, such as ‘humanity’ or ‘whiteness’?",
     "c": [
      {
       "rel": "they really exist",
       "t": "Realism",
       "a": "Plato, Augustine",
       "d": "In the Forms or in the mind of God."
      },
      {
       "rel": "they exist in the mind",
       "t": "Conceptualism",
       "a": "Abelard",
       "d": "They are concepts that the mind forms."
      },
      {
       "rel": "they are only names",
       "t": "Nominalism",
       "a": "Ockham",
       "d": "Only individuals exist."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Patristics",
     "rel": "defends",
     "a": "Realism"
    },
    {
     "de": "Nominalism",
     "rel": "puts the following into crisis:",
     "a": "A synthesis of faith and reason"
    }
   ],
   "idea": "Two stages, patristics and scholasticism, with the same underlying problem (faith and reason); Ockham's nominalism, by leaving only individuals, breaks the synthesis and heralds modernity."
  }
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Faith and reason",
  "title": "Faith and reason",
  "mermaid": "flowchart TD\n  center[\"FAITH AND REASON\"]:::axis\n  q[\"Can faith and reason<br>go together towards truth?\"]\n  center --> q\n  agus[\"AUGUSTINE\"]:::key\n  tom[\"THOMAS AQUINAS\"]:::key\n  ter[\"TERTULLIAN\"]:::key\n  q -->|\"union\"| agus\n  q -->|\"harmony\"| tom\n  q -->|\"opposition\"| ter\n  agus -->|\"motto\"| a1[\"‘Believe in order to understand,<br>understand in order to believe’\"]\n  agus --> a2[\"faith and reason need each other\"]\n  tom --> t1[\"two realms:<br>theology and philosophy\"]\n  tom -->|\"do not contradict each other\"| t2[\"reason prepares faith<br>(preambles)\"]\n  ter -->|\"‘I believe because it is absurd’\"| te1[\"faith is enough,<br>reason is superfluous\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Can reason reach the truths of faith, or do they travel different roads?",
   "raiz": "FAITH AND REASON",
   "raiz_d": "From opposition to separation: five medieval answers, including on whether God's existence can be proved.",
   "ramas": [
    {
     "rel": "opposition",
     "t": "Tertullian",
     "d": "‘I believe because it is absurd’: faith does not need reason."
    },
    {
     "rel": "faith guides",
     "t": "Augustine",
     "k": true,
     "d": "‘Believe in order to understand’: faith guides and reason comprehends.",
     "c": [
      {
       "rel": "seeks God in",
       "t": "Interiority",
       "d": "‘Truth dwells in the inner man’: the soul is raised to God."
      },
      {
       "rel": "knows through",
       "t": "Illumination",
       "d": "God illuminates the soul so that it may know eternal truths."
      }
     ]
    },
    {
     "rel": "two truths",
     "t": "Averroes",
     "d": "Double truth: one for faith and another for reason."
    },
    {
     "rel": "collaboration",
     "t": "Thomas Aquinas",
     "k": true,
     "d": "Reason prepares and defends faith; they cannot contradict each other.",
     "c": [
      {
       "rel": "distinguishes",
       "t": "Natural and supernatural truths",
       "d": "Some are reached by reason; others are known only through revelation."
      },
      {
       "rel": "proves God with",
       "t": "The five ways",
       "d": "A posteriori proofs: they start from motion, causes, contingency, degrees and order."
      }
     ]
    },
    {
     "rel": "separation",
     "t": "Ockham",
     "k": true,
     "d": "Reason cannot prove the truths of faith.",
     "c": [
      {
       "rel": "with his razor",
       "t": "Do not multiply entities",
       "d": "It eliminates everything that is not strictly necessary."
      },
      {
       "rel": "result",
       "t": "Theology ceases to be a science",
       "d": "Faith and reason follow different paths: modernity makes its way."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The five ways",
     "rel": "start from the world, not from",
     "a": "Interiority"
    },
    {
     "de": "Theology ceases to be a science",
     "rel": "breaks the synthesis of",
     "a": "Thomas Aquinas"
    }
   ],
   "idea": "Augustine seeks God within and Aquinas proves him from the world; both believe that faith and reason collaborate. Ockham separates them: reason cannot reach the truths of faith."
  }
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Renaissance",
  "title": "The Renaissance",
  "mermaid": "flowchart TD\n  center[\"THE RENAISSANCE\"]:::axis\n  soc[\"Social changes\"]:::key\n  ant[\"Anthropocentrism\"]:::key\n  cie[\"Scientific revolution\"]:::key\n  center --> soc\n  soc -->|\"make possible\"| ant\n  ant -->|\"leads to\"| cie\n  soc --> s1[\"crisis of feudalism\"]\n  soc --> s2[\"rise of the bourgeoisie\"]\n  soc --> s3[\"the printing press (Gutenberg)\"]\n  ant --> a1[\"the human being at the centre\"]\n  ant --> a2[\"humanism\"]\n  cie --> c1[\"heliocentrism<br>(Copernicus, Galileo)\"]\n  cie --> c2[\"empirical method\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How does Europe move from a world centred on God to one centred on the human being?",
   "raiz": "THE RENAISSANCE",
   "raiz_d": "14th-16th centuries: from medieval theocentrism to anthropocentrism; the roots of modernity.",
   "ramas": [
    {
     "rel": "material basis",
     "t": "Social changes",
     "d": "The feudal and agrarian order collapses.",
     "c": [
      {
       "rel": "in politics",
       "t": "Monarchies and nation-states",
       "d": "They replace feudalism."
      },
      {
       "rel": "in the economy",
       "t": "Trade, banking, bourgeoisie",
       "d": "The first steps of capitalism."
      },
      {
       "rel": "in culture",
       "t": "The printing press",
       "a": "Gutenberg",
       "d": "It revolutionises the spread of knowledge."
      }
     ]
    },
    {
     "rel": "new outlook",
     "t": "Humanism",
     "k": true,
     "d": "Greek and Latin texts are rediscovered.",
     "c": [
      {
       "rel": "places at the centre",
       "t": "Anthropocentrism",
       "d": "The human being, not God, is the centre of reflection."
      },
      {
       "rel": "values",
       "t": "Dignitas hominis",
       "d": "The dignity and potential of each individual."
      }
     ]
    },
    {
     "rel": "religious rupture",
     "t": "Protestant Reformation",
     "a": "Luther (1517)",
     "d": "He questions the authority of the Church.",
     "c": [
      {
       "rel": "defends",
       "t": "Free interpretation of the Bible",
       "d": "The believer's direct relationship with God."
      },
      {
       "rel": "drives",
       "t": "Secularisation",
       "d": "Culture gradually becomes independent of religion."
      }
     ]
    },
    {
     "rel": "new science",
     "t": "Scientific revolution",
     "k": true,
     "a": "Copernicus, Kepler, Galileo, Newton",
     "d": "16th-17th centuries.",
     "c": [
      {
       "rel": "cosmos",
       "t": "Heliocentrism",
       "d": "The Sun at the centre; the Earth revolves around it."
      },
      {
       "rel": "method",
       "t": "Observation and experimentation",
       "d": "They replace the authority of Aristotle and of the Bible."
      },
      {
       "rel": "nature",
       "t": "Mechanism",
       "d": "A machine governed by mathematical laws, not an organism with ends."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The printing press",
     "rel": "makes possible the",
     "a": "Free interpretation of the Bible"
    },
    {
     "de": "Anthropocentrism",
     "rel": "gives confidence for the",
     "a": "Observation and experimentation"
    }
   ],
   "idea": "Humanism, the Reformation and the new science push in the same direction: less authority (of the Church, of Aristotle) and more confidence in the individual and their reason."
  }
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Rationalism and empiricism",
  "title": "Rationalism and empiricism",
  "mermaid": "flowchart TD\n  center[\"RATIONALISM AND EMPIRICISM\"]:::axis\n  rac[\"RATIONALISM<br>(Descartes)\"]:::key\n  emp[\"EMPIRICISM<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"reason or experience?\"| emp\n  rac --> r1[\"the source is reason\"]\n  rac --> r2[\"there are innate ideas (a priori)\"]\n  rac --> r3[\"mathematical-deductive method\"]\n  rac --> r4[\"‘cogito ergo sum’\"]\n  emp --> e1[\"the source is experience\"]\n  emp --> e2[\"the mind is a tabula rasa\"]\n  emp --> e3[\"only probable knowledge\"]\n  emp --> e4[\"critique of causality\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Exactly where do Descartes and Hume differ when they explain knowledge?",
   "raiz": "DESCARTES VERSUS HUME",
   "raiz_d": "17th-18th centuries: epistemology moves to the centre. Rationalism and empiricism, point by point.",
   "ramas": [
    {
     "rel": "first difference",
     "t": "Origin of knowledge",
     "k": true,
     "c": [
      {
       "rel": "according to Descartes",
       "t": "Reason and its innate ideas",
       "d": "God, mathematical truths: the mind possesses them from birth."
      },
      {
       "rel": "according to Hume",
       "t": "Experience: impressions",
       "d": "There are no innate ideas; every idea copies an impression."
      }
     ]
    },
    {
     "rel": "second difference",
     "t": "Model and method",
     "c": [
      {
       "rel": "according to Descartes",
       "t": "Mathematics and deduction",
       "d": "The other truths are deduced from what is clear and distinct."
      },
      {
       "rel": "according to Hume",
       "t": "Observation and induction",
       "d": "We generalise from observed cases."
      }
     ]
    },
    {
     "rel": "third difference",
     "t": "Causality",
     "k": true,
     "c": [
      {
       "rel": "according to Descartes",
       "t": "Evident to reason",
       "d": "The cause has at least as much reality as its effect: with this principle he proves that God exists."
      },
      {
       "rel": "according to Hume",
       "t": "Custom, not necessity",
       "d": "We only see one event follow another; the connection is supplied by habit."
      }
     ]
    },
    {
     "rel": "fourth difference",
     "t": "The ego",
     "c": [
      {
       "rel": "according to Descartes",
       "t": "A thing that thinks",
       "d": "‘I think, therefore I am’: the self is a thinking substance, the first certainty."
      },
      {
       "rel": "according to Hume",
       "t": "A bundle of perceptions",
       "d": "There is no impression of a permanent self."
      }
     ]
    },
    {
     "rel": "result",
     "t": "Scope of knowledge",
     "k": true,
     "c": [
      {
       "rel": "according to Descartes",
       "t": "Certainty and metaphysics",
       "d": "Metaphysics is the root of the tree of knowledge."
      },
      {
       "rel": "according to Hume",
       "t": "Probability and scepticism",
       "d": "Metaphysics is limited by experience."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Reason and its innate ideas",
     "rel": "allows",
     "a": "Mathematics and deduction"
    },
    {
     "de": "Custom, not necessity",
     "rel": "leads to",
     "a": "Probability and scepticism"
    },
    {
     "de": "Evident to reason",
     "rel": "supports the",
     "a": "Certainty and metaphysics"
    }
   ],
   "idea": "Descartes seeks in reason an absolute certainty that will found metaphysics; Hume, starting from impressions, concludes that about facts only probable knowledge is possible."
  }
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Substance (the moderns)",
  "title": "The modern debate on substance",
  "mermaid": "flowchart TD\n  center[\"THE MODERN DEBATE<br>ON SUBSTANCE\"]:::axis\n  des[\"DESCARTES:<br>dualism (three substances)\"]:::key\n  spi[\"SPINOZA:<br>pantheism\"]:::key\n  lei[\"LEIBNIZ:<br>monadology\"]:::key\n  center --> des\n  des --> d1[\"soul and body separate\"]\n  des --> d2[\"interaction in the pineal gland\"]\n  des -->|\"unsolved problem\"| pr[\"how are soul<br>and body related?\"]\n  pr -->|\"a single substance\"| spi\n  pr -->|\"infinite monads\"| lei\n  spi --> s1[\"a single substance:<br>God or Nature\"]\n  spi --> s2[\"body and soul:<br>two aspects of the same thing\"]\n  lei --> l1[\"monads: simple substances\"]\n  lei --> l2[\"pre-established harmony\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "If soul and body are different substances, how are they related? And what if there is only one?",
   "raiz": "THE DEBATE ON SUBSTANCE",
   "raiz_d": "Substance: what exists in itself, without needing another. How many are there, and of what kind?",
   "ramas": [
    {
     "rel": "starting point",
     "t": "Dualism",
     "k": true,
     "a": "Descartes",
     "d": "Three substances: God (infinite), the soul and the body.",
     "c": [
      {
       "rel": "the soul is",
       "t": "Res cogitans",
       "d": "Thinking substance: unextended, free and immortal."
      },
      {
       "rel": "the body is",
       "t": "Res extensa",
       "d": "Material substance: extended and mechanical."
      },
      {
       "rel": "leaves open",
       "t": "The problem of communication",
       "k": true,
       "d": "How do they act on each other? The pineal gland does not solve it."
      }
     ]
    },
    {
     "rel": "solution 1",
     "t": "Occasionalism",
     "a": "Malebranche",
     "d": "Substances do not act on each other: God produces the effect on each occasion."
    },
    {
     "rel": "solution 2",
     "t": "Monism",
     "k": true,
     "a": "Spinoza",
     "d": "A single substance: ‘God, that is, Nature’.",
     "c": [
      {
       "rel": "thought and extension are",
       "t": "Two attributes of the same thing",
       "d": "Not two substances: hence there is no soul-body problem."
      }
     ]
    },
    {
     "rel": "solution 3",
     "t": "Monadology",
     "a": "Leibniz",
     "d": "Infinite monads: simple, active and indivisible substances.",
     "c": [
      {
       "rel": "they do not influence one another, but",
       "t": "Pre-established harmony",
       "d": "God synchronised them from the beginning, like two well-made clocks."
      }
     ]
    },
    {
     "rel": "alternative",
     "t": "Materialism",
     "a": "Hobbes, La Mettrie",
     "d": "Only matter exists; thought is a movement of matter.",
     "c": [
      {
       "rel": "the human being is",
       "t": "Man-machine",
       "d": "A complex automaton: the soul is the result of the organs, above all the brain."
      },
      {
       "rel": "from this it follows",
       "t": "Determinism",
       "d": "Every act is caused by what came before: freedom would be an illusion."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Occasionalism",
     "rel": "responds to",
     "a": "The problem of communication"
    },
    {
     "de": "Two attributes of the same thing",
     "rel": "dissolves",
     "a": "The problem of communication"
    },
    {
     "de": "Materialism",
     "rel": "denies",
     "a": "Res cogitans"
    }
   ],
   "idea": "Descartes' dualism leaves a problem (how do soul and body communicate?); the rationalists solve it with God or with a single substance, and materialism eliminates it at the cost of freedom."
  }
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Social contract",
  "title": "The social contract",
  "mermaid": "flowchart TD\n  center[\"THE SOCIAL CONTRACT\"]:::axis\n  idea[\"From the state of nature to society<br>by a pact\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"common thesis\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"‘homo homini lupus’\"]\n  hob -->|\"pact that gives\"| h2[\"Leviathan:<br>absolute monarchy\"]\n  loc --> l1[\"natural rights:<br>life, liberty, property\"]\n  loc -->|\"pact that gives\"| l2[\"parliamentary monarchy<br>+ separation of powers\"]\n  rou --> r1[\"the general will\"]\n  rou -->|\"pact that gives\"| r2[\"assembly democracy\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "If society is not natural, why do we obey power and what limits does it have?",
   "raiz": "THE SOCIAL CONTRACT",
   "raiz_d": "Modernity breaks with Aristotle's natural sociability: society is a product of the human will, a pact.",
   "ramas": [
    {
     "rel": "precursor",
     "t": "Machiavelli",
     "d": "Political realism: it separates politics from morality and religion.",
     "c": [
      {
       "rel": "the ruler seeks",
       "t": "Order and security",
       "d": "He may use force and deceit if necessary."
      }
     ]
    },
    {
     "rel": "pact out of fear",
     "t": "Hobbes",
     "k": true,
     "c": [
      {
       "rel": "state of nature",
       "t": "War of all against all",
       "d": "‘Man is a wolf to man.’"
      },
      {
       "rel": "the contract creates",
       "t": "An absolute sovereign: the Leviathan",
       "d": "Everyone yields their power to him in exchange for security."
      }
     ]
    },
    {
     "rel": "pact for rights",
     "t": "Locke",
     "k": true,
     "c": [
      {
       "rel": "state of nature",
       "t": "Insecure natural rights",
       "d": "Life, liberty and property already exist, but nobody guarantees them."
      },
      {
       "rel": "the contract creates",
       "t": "A limited government",
       "d": "If it violates rights, the people may resist and change it. The basis of liberalism."
      }
     ]
    },
    {
     "rel": "pact for freedom",
     "t": "Rousseau",
     "k": true,
     "c": [
      {
       "rel": "state of nature",
       "t": "The human being is good",
       "d": "It is society that corrupts him."
      },
      {
       "rel": "the contract creates",
       "t": "The general will",
       "d": "The common interest, not the sum of interests: sovereignty resides in the people."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "A limited government",
     "rel": "as opposed to the power of",
     "a": "An absolute sovereign: the Leviathan"
    },
    {
     "de": "Order and security",
     "rel": "is also the end of the",
     "a": "An absolute sovereign: the Leviathan"
    }
   ],
   "idea": "All three start from a state of nature and a pact; what changes is the view of the human being, and on it depends power: absolute (Hobbes), limited (Locke) or the people's (Rousseau)."
  }
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarianism and liberalism",
  "title": "Utilitarianism, liberalism and capitalism",
  "mermaid": "flowchart TD\n  center[\"UTILITARIANISM, LIBERALISM<br>AND CAPITALISM\"]:::axis\n  uti[\"UTILITARIANISM<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBERALISM\"]:::key\n  cap[\"CAPITALISM<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI: critique\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"the greatest happiness for<br>the greatest number\"]\n  uti --> u2[\"balance of pleasure vs pain\"]\n  lib --> l1[\"primacy of the individual\"]\n  lib --> l2[\"private property\"]\n  lib --> l3[\"neutral State\"]\n  lib -->|\"provides the foundation for\"| cap\n  cap --> c1[\"the ‘invisible hand’\"]\n  cap --> c2[\"self-interest brings<br>general well-being\"]\n  azu -->|\"replies to\"| c2\n  azu --> az1[\"the human being is also<br>cooperative by nature\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Which philosophical ideas underpin capitalism, and what image of the human being does it presuppose?",
   "raiz": "THE FOUNDATIONS OF CAPITALISM",
   "raiz_d": "Liberalism and utilitarianism are its theoretical bases; Adam Smith unites them. Azurmendi discusses its view of the human being.",
   "ramas": [
    {
     "rel": "political basis",
     "t": "Liberalism",
     "k": true,
     "a": "Hobbes, Locke",
     "d": "Primacy of the individual: society is secondary, a product of the contract.",
     "c": [
      {
       "rel": "defends",
       "t": "Individual rights",
       "d": "Among them, private property."
      },
      {
       "rel": "requires",
       "t": "Neutral State",
       "d": "It does not impose an idea of the good: it guarantees each person's freedom."
      }
     ]
    },
    {
     "rel": "moral basis",
     "t": "Utilitarianism",
     "k": true,
     "a": "Bentham, Mill",
     "d": "An action is good if it produces pleasure and avoids pain: the criterion of utility.",
     "c": [
      {
       "rel": "Bentham",
       "t": "Measuring consequences",
       "d": "Happiness is calculated by the effects of actions."
      },
      {
       "rel": "Mill",
       "t": "Greatest happiness principle",
       "d": "‘The greatest happiness of the greatest number’; mental pleasures are worth more."
      }
     ]
    },
    {
     "rel": "economic synthesis",
     "t": "Adam Smith",
     "d": "The Wealth of Nations (1776).",
     "c": [
      {
       "rel": "the market acts as",
       "t": "Invisible hand",
       "k": true,
       "d": "Self-interest leads, without intending to, to the common good."
      },
      {
       "rel": "therefore",
       "t": "The State must not intervene",
       "d": "Its intervention would be an obstacle to growth."
      }
     ]
    },
    {
     "rel": "critique",
     "t": "Azurmendi",
     "d": "Capitalism presupposes a competitive human being; there is another tradition.",
     "c": [
      {
       "rel": "rejects",
       "t": "Social Darwinism",
       "d": "Justifying the supremacy of some over others."
      },
      {
       "rel": "defends",
       "t": "Cooperation is natural",
       "a": "Kropotkin, Wilson",
       "d": "Morality is born of the sense of community, not of the cold calculation of reason."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Liberalism",
     "rel": "is joined in Smith to the",
     "a": "Utilitarianism"
    },
    {
     "de": "Greatest happiness principle",
     "rel": "would be achieved, according to Smith, through the",
     "a": "Invisible hand"
    },
    {
     "de": "Cooperation is natural",
     "rel": "discusses the selfishness presupposed by the",
     "a": "Invisible hand"
    }
   ],
   "idea": "Capitalism rests on an individual with rights (liberalism) who pursues their own utility (utilitarianism); Smith trusts that the market will harmonise selfish interests. Azurmendi asks whether we are really that selfish."
  }
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Enlightenment",
  "title": "The Enlightenment: reason and rights",
  "mermaid": "flowchart TD\n  center[\"THE ENLIGHTENMENT:<br>reason and rights\"]:::axis\n  raz[\"A new model of reason\"]:::key\n  der[\"Natural rights\"]:::key\n  fem[\"First wave of feminism\"]:::key\n  center --> raz\n  raz -->|\"leads to demanding\"| der\n  der -->|\"is extended by claiming\"| fem\n  raz --> r1[\"critical reason\"]\n  raz --> r2[\"autonomous reason (‘dare to know’)\"]\n  der --> d1[\"rejection of absolutism\"]\n  der --> d2[\"separation of powers (Montesquieu)\"]\n  der --> d3[\"popular sovereignty (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What does enlightened reason promise, and whom did it leave out?",
   "raiz": "THE ENLIGHTENMENT",
   "raiz_d": "18th century: the confidence that reason frees us from prejudice and blind authority and leads to progress and freedom.",
   "ramas": [
    {
     "rel": "starting point",
     "t": "A new model of reason",
     "k": true,
     "c": [
      {
       "rel": "his motto",
       "t": "‘Sapere aude’",
       "a": "Kant",
       "d": "Dare to think for yourself: to leave immaturity behind."
      },
      {
       "rel": "is",
       "t": "Critical reason",
       "d": "It subjects religion, politics, science and itself to examination."
      },
      {
       "rel": "is",
       "t": "Autonomous reason",
       "d": "It does not depend on theology or on authority."
      },
      {
       "rel": "trusts in the",
       "t": "Progress",
       "a": "Diderot, D'Alembert",
       "d": "The Encyclopédie wants to organise all knowledge at the service of society."
      }
     ]
    },
    {
     "rel": "political consequence",
     "t": "Natural rights",
     "k": true,
     "d": "Rights held by being born, prior to the State: absolutism is broken with.",
     "c": [
      {
       "rel": "made concrete in",
       "t": "Life, liberty and property",
       "a": "Locke"
      },
      {
       "rel": "requires",
       "t": "Separation of powers",
       "a": "Montesquieu"
      },
      {
       "rel": "requires",
       "t": "Popular sovereignty",
       "a": "Rousseau"
      },
      {
       "rel": "turns the subject into a",
       "t": "Citizen",
       "d": "Someone who takes part in power and legitimises it, instead of obeying blindly."
      },
      {
       "rel": "become law in the",
       "t": "Declaration of 1789",
       "d": "Declaration of the Rights of Man and of the Citizen."
      }
     ]
    },
    {
     "rel": "its contradiction",
     "t": "First feminist wave",
     "k": true,
     "d": "Equality is proclaimed as universal, but it excludes women.",
     "c": [
      {
       "rel": "denounces",
       "t": "The exclusion of women",
       "a": "Rousseau, Voltaire, Kant",
       "d": "They destined them by nature for domestic life."
      },
      {
       "rel": "responds with the",
       "t": "Declaration of the Rights of Woman",
       "a": "Olympe de Gouges (1791)"
      },
      {
       "rel": "argues that",
       "t": "‘Reason has no sex’",
       "a": "Mary Wollstonecraft (1792)",
       "d": "Inequality is cultural, due to a lack of education: she calls for equal education and economic independence."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Autonomous reason",
     "rel": "founds the",
     "a": "Natural rights"
    },
    {
     "de": "Declaration of the Rights of Woman",
     "rel": "rewrites, to include women, the",
     "a": "Declaration of 1789"
    }
   ],
   "idea": "Enlightened reason founds natural rights and turns the subject into a citizen; but if reason is universal, excluding women is an inconsistency that the first feminist wave denounces."
  }
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "Kant's critical philosophy",
  "mermaid": "flowchart TD\n  center[\"KANT'S CRITICAL PHILOSOPHY\"]:::axis\n  cri[\"Criticism\"]:::key\n  fn[\"Phenomenon / Noumenon\"]:::key\n  met[\"The problem of metaphysics\"]:::key\n  center --> cri\n  cri -->|\"distinguishes\"| fn\n  fn -->|\"conclusion\"| met\n  cri --> c1[\"unites rationalism + empiricism\"]\n  cri --> c2[\"knowing = matter (a posteriori)<br>+ form (a priori)\"]\n  fn --> fe[\"PHENOMENON: reality as it appears<br>(can be known)\"]\n  fn --> no[\"NOUMENON: the thing in itself<br>(unknowable)\"]\n  no -->|\"therefore\"| met\n  met --> m1[\"metaphysics cannot be a science\"]\n  met --> m2[\"transcendent objects<br>cannot be proved\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What can we know, and why can metaphysics not be a science?",
   "raiz": "KANT'S CRITICISM",
   "raiz_d": "Critique of Pure Reason (1781): reason examines its own limits and reach.",
   "ramas": [
    {
     "rel": "starts from",
     "t": "Two insufficient currents",
     "c": [
      {
       "rel": "falls into dogmatism",
       "t": "Rationalism",
       "a": "Descartes",
       "d": "It believes that everything is deduced a priori from reason."
      },
      {
       "rel": "falls into scepticism",
       "t": "Empiricism",
       "a": "Hume",
       "d": "Everything comes from experience; it woke Kant from his ‘dogmatic slumber’."
      }
     ]
    },
    {
     "rel": "proposes",
     "t": "The Copernican revolution",
     "k": true,
     "d": "It is not the subject who adapts to the object: the object conforms to the structures of the subject.",
     "c": [
      {
       "rel": "knowing unites the",
       "t": "Matter (a posteriori)",
       "d": "What comes from experience."
      },
      {
       "rel": "and the",
       "t": "Form (a priori)",
       "d": "What the subject contributes: space and time, and the categories of the understanding."
      },
      {
       "rel": "is called",
       "t": "Transcendental idealism"
      }
     ]
    },
    {
     "rel": "hence he distinguishes",
     "t": "The limits of knowledge",
     "c": [
      {
       "rel": "we know the",
       "t": "Phenomenon",
       "k": true,
       "d": "Reality as it appears to us."
      },
      {
       "rel": "we do not know the",
       "t": "Noumenon",
       "k": true,
       "d": "Reality in itself, outside all experience: unknowable."
      }
     ]
    },
    {
     "rel": "conclusion",
     "t": "Metaphysics cannot be a science",
     "c": [
      {
       "rel": "because",
       "t": "God, the soul and the world",
       "d": "They cannot be proved through experience."
      },
      {
       "rel": "on the other hand",
       "t": "Science is possible",
       "d": "Physics and mathematics deal with phenomena."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The Copernican revolution",
     "rel": "unites the best of",
     "a": "Two insufficient currents"
    },
    {
     "de": "Form (a priori)",
     "rel": "organises the",
     "a": "Phenomenon"
    },
    {
     "de": "God, the soul and the world",
     "rel": "fall on the side of the",
     "a": "Noumenon"
    }
   ],
   "idea": "‘All knowledge begins with experience, but not all of it comes from experience’ (Kant): we only know phenomena, which is why science is possible and metaphysics is not."
  }
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Modern ethics",
  "title": "Ethics: Kant versus utilitarianism",
  "mermaid": "flowchart TD\n  center[\"ETHICS: KANT VERSUS<br>UTILITARIANISM\"]:::axis\n  kant[\"KANT:<br>deontological ethics (of duty)\"]:::key\n  uti[\"UTILITARIANISM<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI:<br>relative relativism\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"is opposed to\"| uti\n  kant --> k1[\"looks at duty and intention\"]\n  kant --> k2[\"categorical imperative\"]\n  kant --> k3[\"the person as an end, not a means\"]\n  uti --> u1[\"looks at consequences\"]\n  uti --> u2[\"the greatest happiness for<br>the greatest number\"]\n  center --> azu\n  azu -->|\"qualifies both\"| kant\n  azu -->|\"qualifies both\"| uti\n  azu --> az1[\"there is no absolute ethical foundation\"]\n  azu --> az2[\"values depend on context\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What makes an action good: the intention with which it is done or its consequences?",
   "raiz": "ETHICS OF DUTY AND OF HAPPINESS",
   "raiz_d": "At the end of the 18th century two answers clash: what is right on principle and what suits us.",
   "ramas": [
    {
     "rel": "judges the action itself",
     "t": "Ethics of duty",
     "k": true,
     "a": "Kant",
     "d": "Deontological, formal and autonomous ethics: it does not say what to do, but the form a norm must have.",
     "c": [
      {
       "rel": "the only thing good without qualification",
       "t": "The good will",
       "d": "Acting out of duty, not merely in accordance with duty, nor out of self-interest or inclination."
      },
      {
       "rel": "is expressed in the",
       "t": "Categorical imperative",
       "k": true,
       "d": "A universal and unconditional moral command.",
       "c": [
        {
         "rel": "formula",
         "t": "Universal law",
         "d": "Act according to a maxim that you can will as a law for everyone."
        },
        {
         "rel": "formula",
         "t": "End in itself",
         "d": "Treat humanity always as an end, never merely as a means: the basis of dignity."
        }
       ]
      }
     ]
    },
    {
     "rel": "judges the consequences",
     "t": "Utilitarianism",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Consequentialist (teleological) ethics: an action is good if it increases pleasure and reduces pain.",
     "c": [
      {
       "rel": "is guided by the",
       "t": "Principle of utility",
       "d": "The greatest happiness of the greatest number."
      },
      {
       "rel": "in Bentham, quantitative",
       "t": "Hedonic calculus",
       "d": "It measures pleasure: intensity, duration, certainty, extent…"
      },
      {
       "rel": "in Mill, qualitative",
       "t": "Higher and lower pleasures",
       "d": "Intellectual and moral pleasures are worth more than physical ones."
      }
     ]
    },
    {
     "rel": "a Basque third way",
     "t": "Relative relativism",
     "a": "Joxe Azurmendi",
     "c": [
      {
       "rel": "rejects",
       "t": "Absolute foundations",
       "d": "Neither God nor reason can ground a universal ethics."
      },
      {
       "rel": "without falling into nihilism",
       "t": "Validity within each community",
       "d": "Values depend on context, but within it they hold almost absolutely."
      },
      {
       "rel": "combines",
       "t": "Conviction and responsibility",
       "a": "Max Weber",
       "d": "Principles and consequences, distinguishing case by case."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ethics of duty",
     "rel": "intention versus consequences",
     "a": "Utilitarianism"
    },
    {
     "de": "Absolute foundations",
     "rel": "casts doubt on the",
     "a": "Categorical imperative"
    },
    {
     "de": "Conviction and responsibility",
     "rel": "looks at consequences, like",
     "a": "Utilitarianism"
    }
   ],
   "idea": "For Kant, an action is moral because of the intention to do one's duty, not because of its results; for utilitarianism, because of the happiness it produces. Azurmendi rejects absolutes without accepting that nothing matters."
  }
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "The philosophers of suspicion",
  "title": "The philosophers of suspicion",
  "mermaid": "flowchart TD\n  center[\"THE PHILOSOPHERS OF SUSPICION\"]:::axis\n  idea[\"Consciousness is not transparent:<br>something hidden determines it\"]\n  center -->|\"common thesis\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"unmasks\"| eco[\"the economy\"]\n  eco -->|\"produces\"| ideo[\"ideology and alienation\"]\n  ideo -->|\"is overcome by\"| rev[\"revolution → communism\"]\n  niet -->|\"unmasks\"| moral[\"morality and its values\"]\n  moral -->|\"leads to\"| nih[\"nihilism · death of God\"]\n  nih -->|\"response\"| super[\"will to power · overman\"]\n  freud -->|\"unmasks\"| incon[\"the unconscious\"]\n  incon --> yo[\"id · ego · superego\"]\n  incon --> pul[\"Eros and Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What lies behind what we believe we think and want freely?",
   "raiz": "THE MASTERS OF SUSPICION",
   "raiz_d": "According to Ricoeur, Marx, Nietzsche and Freud show that the subject is not ‘master of their own house’.",
   "ramas": [
    {
     "rel": "economic suspicion",
     "t": "Marx",
     "k": true,
     "c": [
      {
       "rel": "suspicion of",
       "t": "Ideas and religion",
       "d": "They are not universal truths, but superstructure."
      },
      {
       "rel": "behind there is",
       "t": "Ideology",
       "d": "False consciousness that justifies the ruling class and hides exploitation."
      },
      {
       "rel": "proposes",
       "t": "Revolution without classes",
       "d": "To overcome the worker's alienation."
      }
     ]
    },
    {
     "rel": "moral suspicion",
     "t": "Nietzsche",
     "k": true,
     "c": [
      {
       "rel": "suspicion of",
       "t": "Morality and truth",
       "d": "Pity, humility and equality: slave morality."
      },
      {
       "rel": "behind there is",
       "t": "Resentment of the weak",
       "d": "Hatred of life and of the strong, since Plato and Christianity."
      },
      {
       "rel": "when values fall",
       "t": "Nihilism",
       "d": "‘God is dead’: the human being is left without meaning."
      },
      {
       "rel": "proposes the",
       "t": "Overman",
       "d": "They create their own values with the will to power: revaluation."
      }
     ]
    },
    {
     "rel": "psychic suspicion",
     "t": "Freud",
     "k": true,
     "c": [
      {
       "rel": "suspicion of",
       "t": "Conscious rationality",
       "d": "Consciousness is only the tip of the iceberg."
      },
      {
       "rel": "behind there is",
       "t": "The unconscious",
       "d": "Repressed desires that govern us; drives of Eros (life) and Thanatos (death).",
       "c": [
        {
         "rel": "is structured in",
         "t": "Id, ego and superego",
         "d": "Instincts, reason mediating with reality, internalised moral norms."
        }
       ]
      },
      {
       "rel": "seeks",
       "t": "Mental health and self-knowledge"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Resentment of the weak",
     "rel": "hides interests, like the",
     "a": "Ideology"
    }
   ],
   "idea": "Marx, Nietzsche and Freud unmask consciousness: beneath our ideas, values and reasons act forces we do not control (the economy, resentment, the unconscious)."
  }
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Critique of capitalism",
  "title": "The critique of capitalism",
  "mermaid": "flowchart TD\n  center[\"THE CRITIQUE OF CAPITALISM<br>AND MASS SOCIETY\"]:::axis\n  fra[\"FRANKFURT SCHOOL\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"instrumental reason\"]\n  fra --> f2[\"culture industry\"]\n  fra -->|\"produces\"| f3[\"dehumanisation\"]\n  are --> a1[\"analysis of totalitarianism\"]\n  are --> a2[\"totalising ideology\"]\n  are -->|\"causes\"| a3[\"annulment of the public<br>and private sphere\"]\n  raw -->|\"response: reform, not destroy\"| r1[\"justice as fairness\"]\n  raw --> r2[\"the welfare state\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "How does the critique of capitalism change from Marx to the philosophers of the 20th century?",
   "raiz": "THE CRITIQUE OF CAPITALISM",
   "raiz_d": "Marx criticises the exploitation of the Industrial Revolution; after totalitarianism, the 20th century also criticises culture, reason and the State.",
   "ramas": [
    {
     "rel": "19th century",
     "t": "Exploitation and alienation",
     "a": "Marx",
     "c": [
      {
       "rel": "is based on",
       "t": "Surplus value",
       "d": "The capitalist appropriates the value that the worker produces and does not receive."
      },
      {
       "rel": "is overcome with the",
       "t": "Proletarian revolution",
       "d": "Towards a classless communist society."
      }
     ]
    },
    {
     "rel": "cultural critique",
     "t": "Instrumental reason",
     "k": true,
     "a": "Adorno, Horkheimer (Frankfurt)",
     "d": "Efficiency and calculation without asking about ends: reason becomes domination.",
     "c": [
      {
       "rel": "it is seen in the",
       "t": "Culture industry",
       "d": "Standardised entertainment: passivity and conformism."
      }
     ]
    },
    {
     "rel": "the role of the State",
     "t": "Democracy and reform",
     "c": [
      {
       "rel": "Popper proposes",
       "t": "Piecemeal social engineering",
       "a": "Popper",
       "d": "Small, gradual reforms that are corrected if they fail; against historicism."
      },
      {
       "rel": "Habermas proposes",
       "t": "Deliberative democracy",
       "a": "Habermas",
       "d": "Consensus through dialogue, in a free public sphere."
      }
     ]
    },
    {
     "rel": "the extreme danger",
     "t": "Totalitarianism",
     "a": "Hannah Arendt",
     "d": "Total domination through terror and propaganda: the population becomes a mass.",
     "c": [
      {
       "rel": "in the face of it",
       "t": "Recovering the public space",
       "d": "Critical thinking and plurality."
      }
     ]
    },
    {
     "rel": "moral foundation",
     "t": "Justice as fairness",
     "k": true,
     "a": "John Rawls",
     "c": [
      {
       "rel": "is chosen under a",
       "t": "Veil of ignorance",
       "d": "Without knowing what place we will occupy: we would choose to protect the worst off."
      },
      {
       "rel": "hence the",
       "t": "Difference principle",
       "k": true,
       "d": "Inequalities are just only if they benefit the worst off: the basis of the welfare state."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Piecemeal social engineering",
     "rel": "gradual reform as opposed to the",
     "a": "Proletarian revolution"
    },
    {
     "de": "Deliberative democracy",
     "rel": "responds to",
     "a": "Instrumental reason"
    }
   ],
   "idea": "From Marx to the 20th century the critique moves from economic exploitation to culture and reason; and the response, from revolution to reform: deliberative democracy and justice as fairness."
  }
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernity",
  "title": "Nietzsche and postmodernity",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE AND POSTMODERNITY\"]:::axis\n  niet[\"NIETZSCHE:<br>deconstruction\"]:::key\n  post[\"POSTMODERNITY\"]:::key\n  hab[\"HABERMAS:<br>defence of modernity\"]:::key\n  center --> niet\n  niet -->|\"inspires\"| post\n  niet --> n1[\"critique of objective truth\"]\n  niet --> n2[\"critique of metaphysics\"]\n  niet --> n3[\"critique of dualism\"]\n  post --> p1[\"critique of universal truths<br>(end of metanarratives)\"]\n  post --> p2[\"plurality and difference\"]\n  center --> hab\n  hab -->|\"answers\"| post\n  hab --> h1[\"communicative reason\"]\n  hab --> h2[\"modernity has not run its course\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Why is Nietzsche the starting point of the postmodern critique of modernity?",
   "raiz": "NIETZSCHE AND POSTMODERNITY",
   "raiz_d": "Nietzsche, who calls himself ‘dynamite’, demolishes the Western tradition; postmodernity inherits his suspicion and Habermas answers it.",
   "ramas": [
    {
     "rel": "demolition",
     "t": "The critique of tradition",
     "k": true,
     "a": "Nietzsche",
     "d": "With the genealogical method he shows that beliefs are not eternal: they are born of interests, resentment and power.",
     "c": [
      {
       "rel": "against objective truth",
       "t": "Perspectivism",
       "k": true,
       "d": "All knowledge depends on the point of view: there are only perspectives and interpretations."
      },
      {
       "rel": "against metaphysics",
       "t": "The ‘true world’ is a fiction",
       "d": "Plato and Christianity invented a beyond in order to despise the only world that exists."
      },
      {
       "rel": "against morality",
       "t": "Slave morality",
       "d": "Behind ‘goodness’, humility and equality lies resentment against life."
      }
     ]
    },
    {
     "rel": "proposal",
     "t": "The revaluation of all values",
     "k": true,
     "a": "Nietzsche",
     "d": "Inverting the values that deny life and creating others that affirm it.",
     "c": [
      {
       "rel": "starts from",
       "t": "The death of God",
       "d": "‘God is dead’: the foundation of absolute values falls and nihilism arrives."
      },
      {
       "rel": "embodies it",
       "t": "The overman",
       "d": "Whoever creates their own values through the will to power."
      }
     ]
    },
    {
     "rel": "inherits the suspicion",
     "t": "Postmodernity",
     "a": "Lyotard, Derrida, Foucault, Vattimo",
     "d": "It applies Nietzsche's suspicion to the culture of the 20th century.",
     "c": [
      {
       "rel": "rejects",
       "t": "Universal truths",
       "d": "End of the metanarratives: there is no single history or truth for everyone."
      },
      {
       "rel": "defends",
       "t": "Plurality and difference"
      }
     ]
    },
    {
     "rel": "answers",
     "t": "The defence of modernity",
     "k": true,
     "a": "Habermas",
     "d": "Modernity is a project that has not run its course: it must be repaired, not abandoned.",
     "c": [
      {
       "rel": "proposes",
       "t": "Communicative reason",
       "d": "Dialogue free of coercion makes it possible to reach rational agreements and to criticise injustice."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Perspectivism",
     "rel": "anticipates the critique of",
     "a": "Universal truths"
    },
    {
     "de": "Communicative reason",
     "rel": "seeks agreement in the face of",
     "a": "Plurality and difference"
    }
   ],
   "idea": "Nietzsche demolishes the truth, metaphysics and morality of the West in order to affirm life; postmodernity inherits his suspicion, and Habermas answers that reason, if it is dialogical, can still be saved."
  }
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Philosophy of language",
  "title": "The philosophy of language",
  "mermaid": "flowchart TD\n  center[\"THE PHILOSOPHY OF LANGUAGE\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(the first)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(the second)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"corrects himself in\"| w2\n  w1 --> a1[\"language is a picture of the world\"]\n  w1 --> a2[\"metaphysics is meaningless\"]\n  w1 --> a3[\"‘of what cannot be spoken about,<br>one must remain silent’\"]\n  w2 --> b1[\"meaning is use\"]\n  w2 --> b2[\"language games\"]\n  w2 --> b3[\"therapeutic philosophy\"]\n  center --> txi\n  txi -->|\"from Basque\"| w2\n  txi --> c1[\"language conditions thought\"]\n  txi --> c2[\"it is an unconscious structuring force\"]\n  txi --> c3[\"the survival of Basque,<br>difficult without a Basque State\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Where are the limits of what we can say and think?",
   "raiz": "THE PHILOSOPHY OF LANGUAGE",
   "raiz_d": "The linguistic turn: many philosophical problems are born of the misuse of language, which marks the limit of what we can think.",
   "ramas": [
    {
     "rel": "Tractatus (1921)",
     "t": "The first Wittgenstein",
     "k": true,
     "d": "He seeks the logical structure that language and the world share.",
     "c": [
      {
       "rel": "holds",
       "t": "The picture theory",
       "d": "Propositions are ‘pictures’ of facts, as a map reflects the terrain."
      },
      {
       "rel": "concludes",
       "t": "Metaphysics is nonsense",
       "d": "Metaphysics and ethics try to say what cannot be said; the mystical can only be shown."
      },
      {
       "rel": "therefore",
       "t": "Silence before the unsayable",
       "d": "‘Of what cannot be spoken about, one must remain silent.’ Philosophy is an activity of clarification."
      }
     ]
    },
    {
     "rel": "Philosophical Investigations",
     "t": "The second Wittgenstein",
     "k": true,
     "d": "Language is not a mirror of facts, but a toolbox.",
     "c": [
      {
       "rel": "holds",
       "t": "Meaning is use"
      },
      {
       "rel": "distinguishes",
       "t": "Language games",
       "d": "Giving orders, telling a joke, praying…: activities with their own rules and ‘family resemblances’."
      },
      {
       "rel": "philosophy is",
       "t": "A linguistic therapy",
       "d": "Problems are not solved: they are dissolved by seeing how we use words."
      }
     ]
    },
    {
     "rel": "from Basque",
     "t": "Language structures thought",
     "k": true,
     "a": "Txillardegi",
     "d": "Influenced by Sapir-Whorf: we think because we have language, and each language carries a worldview.",
     "c": [
      {
       "rel": "acts as",
       "t": "An unconscious structuring force",
       "d": "It organises reality before we realise it."
      },
      {
       "rel": "therefore",
       "t": "Basque, the backbone",
       "d": "If it disappears, a distinctive way of seeing the world is lost; in his view, it would hardly survive without a Basque State."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The second Wittgenstein",
     "rel": "corrects",
     "a": "The first Wittgenstein"
    }
   ],
   "idea": "For the first Wittgenstein language pictures the world; for the second, it is a set of uses; for Txillardegi, each language shapes the thought of a people."
  }
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existentialism",
  "title": "Existentialism",
  "mermaid": "flowchart TD\n  center[\"EXISTENTIALISM\"]:::axis\n  idea[\"Starts from concrete existence,<br>not from abstract essences\"]:::key\n  center -->|\"common thesis\"| idea\n  sar[\"SARTRE (atheist)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (Christian)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"existence precedes essence\"]\n  sar --> s2[\"condemned to be free\"]\n  hei --> h1[\"distinguishing being from beings\"]\n  hei --> h2[\"Dasein: projected into the world\"]\n  ort --> o1[\"vital reason\"]\n  ort --> o2[\"‘I am myself and my circumstance’\"]\n  una --> u1[\"the tragic sense of life\"]\n  una --> u2[\"the longing for immortality\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What is the human being for each existentialist thinker?",
   "raiz": "EXISTENTIALISM",
   "raiz_d": "Common thesis: we start from concrete existence, not from abstract essences.",
   "ramas": [
    {
     "rel": "ontology",
     "t": "Dasein",
     "k": true,
     "a": "Heidegger",
     "d": "‘Being-there’: the human being, the entity that asks about being.",
     "c": [
      {
       "rel": "distinguishes",
       "t": "Being and beings",
       "d": "Concrete things do not exhaust the question of being."
      },
      {
       "rel": "exists as",
       "t": "Being-in-the-world, thrown",
       "d": "Cast into existence without having asked for it."
      },
      {
       "rel": "knows itself",
       "t": "Being-towards-death",
       "d": "Accepting finitude opens up the authentic life."
      }
     ]
    },
    {
     "rel": "atheistic existentialism",
     "t": "Radical freedom",
     "k": true,
     "a": "Sartre",
     "d": "With no God to dictate norms, we are fully responsible for what we are.",
     "c": [
      {
       "rel": "because",
       "t": "Existence precedes essence"
      },
      {
       "rel": "hence",
       "t": "‘Condemned to be free’",
       "d": "There is always a choice: not choosing is already a choice."
      },
      {
       "rel": "one flees with",
       "t": "Bad faith",
       "d": "Self-deception: ‘that's just how I am’, ‘I had no choice’."
      }
     ]
    },
    {
     "rel": "Christian existentialism",
     "t": "The tragic sense of life",
     "k": true,
     "a": "Unamuno",
     "d": "The human being is a being in agony.",
     "c": [
      {
       "rel": "struggle between",
       "t": "Reason and heart",
       "d": "Reason denies immortality; the heart longs for it."
      },
      {
       "rel": "drives it",
       "t": "The longing for immortality"
      }
     ]
    },
    {
     "rel": "ratiovitalism",
     "t": "Vital reason",
     "a": "Ortega y Gasset",
     "d": "Pure reason is not enough: we must think from concrete life.",
     "c": [
      {
       "rel": "because",
       "t": "‘I am myself and my circumstance’"
      },
      {
       "rel": "hence",
       "t": "Perspectivism",
       "d": "Nobody holds absolute truth: truth is the sum of all perspectives."
      }
     ]
    },
    {
     "rel": "disciple of Ortega",
     "t": "Poetic reason",
     "a": "María Zambrano",
     "d": "It joins philosophy and poetry to reach the ‘entrails’ of the human being: dreams, feelings, hope."
    }
   ],
   "cruces": [
    {
     "de": "Poetic reason",
     "rel": "broadens",
     "a": "Vital reason"
    }
   ],
   "idea": "All of them start from the concrete individual: Heidegger sees them thrown towards death, Sartre condemned to be free, Unamuno in agony, Ortega bound to their circumstance and Zambrano in need of the poetic word."
  }
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminism",
  "title": "Simone de Beauvoir: feminism",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR:<br>feminism\"]:::axis\n  tesis[\"‘One is not born a woman,<br>one becomes one’\"]:::key\n  alt[\"Otherness: the second sex\"]:::key\n  eman[\"Emancipation\"]:::key\n  center --> tesis\n  tesis -->|\"explains\"| alt\n  alt -->|\"is overcome with\"| eman\n  tesis --> t1[\"there is no fixed female essence\"]\n  tesis --> t2[\"culture constructs ‘the feminine’\"]\n  alt --> a1[\"man = absolute subject\"]\n  alt --> a2[\"woman = ‘the other’, the complementary\"]\n  alt --> a3[\"dialectic of master and slave\"]\n  eman --> e1[\"equal education\"]\n  eman --> e2[\"right to abortion and contraception\"]\n  eman --> e3[\"economic autonomy\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "What does ‘being a woman’ mean, and how can woman become free?",
   "raiz": "SIMONE DE BEAUVOIR: FEMINISM",
   "raiz_d": "An existentialist like Sartre, in The Second Sex (1949) she begins the second wave of feminism.",
   "ramas": [
    {
     "rel": "thesis",
     "t": "‘One is not born a woman: one becomes one’",
     "k": true,
     "d": "Female identity is a cultural construction, not a biological destiny.",
     "c": [
      {
       "rel": "denies",
       "t": "A fixed female essence",
       "d": "Existence precedes essence: neither is there an ‘eternal feminine’."
      },
      {
       "rel": "affirms",
       "t": "Culture constructs ‘the feminine’",
       "d": "Motherhood, marriage and household chores function as tools of oppression."
      }
     ]
    },
    {
     "rel": "diagnosis",
     "t": "Otherness: the second sex",
     "k": true,
     "d": "Woman has always been defined in relation to man: daughter, wife, mother.",
     "c": [
      {
       "rel": "man, as",
       "t": "The Subject, the essential"
      },
      {
       "rel": "woman, as",
       "t": "The Object, ‘the other’"
      },
      {
       "rel": "is explained with",
       "t": "The dialectic of master and slave",
       "a": "Hegel",
       "d": "Identity is built through the recognition of the other."
      },
      {
       "rel": "does not rebel because of",
       "t": "The immanence of her work",
       "d": "Domestic work repeats itself and leaves no trace; transcendence is left to man."
      }
     ]
    },
    {
     "rel": "proposal",
     "t": "Emancipation",
     "k": true,
     "d": "That woman be a full human being, not that she become a man.",
     "c": [
      {
       "rel": "first path",
       "t": "Education in equality"
      },
      {
       "rel": "second path",
       "t": "Economic independence"
      },
      {
       "rel": "third path",
       "t": "Reproductive autonomy",
       "d": "Birth control (contraception, abortion) and free motherhood."
      },
      {
       "rel": "goal",
       "t": "Reciprocity",
       "d": "Recognising each other as two freedoms: the liberation of woman is also that of man."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "The immanence of her work",
     "rel": "is broken with",
     "a": "Economic independence"
    }
   ],
   "idea": "‘One is not born a woman: one becomes one’: the feminine is a construction that has made woman ‘the other’; if it is constructed, it can be transformed."
  }
 }
};
