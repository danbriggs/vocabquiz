//ΙΛΙΑΔΟΣ Ε (Iliad Book V) lines 95-132
//    { word: "", answers: ["",""], pos: "", len: ""},

const vocabData3 = [
    { word: "νοέω", answers: ["perceive","observe","think","devise","deem","mean"], pos: "v"},
    { word: "θύνω", answers: ["rush","rush along","dart along"], pos: "v", len: "ῡ"},
    { word: "αἶψα", answers: ["quickly","quick","with speed","all of a sudden"], pos: "adv", len: "ᾰ"},
    { word: "τιταίνω", answers: ["stretch","bend","exert"], pos: "v", len: "ῐ"},
    { word: "καμπύλος", answers: ["bent","curved"], pos: "adj", len: "ᾰῠ"},
    { word: "ἐπαΐσσω", answers: ["rush at","dart at","spring upon","assail"], pos: "v", len: "ᾱῑ"},
    { word: "τυγχάνω", answers: ["happen","occur","happen to do","hit","meet","attain"], pos: "v", len: "ῠᾰ", notes:["dat","dat","part","gen","gen","gen"]},
    { word: "γύαλον", answers: ["hollow"], pos: "n", gen: "n", len: "ῠᾰ"},
    { word: "πέτομαι", answers: ["fly","dart","rush"], pos: "v"},
    { word: "πικρός", answers: ["pointed","sharp","keen"], pos: "adj", len: "ῐ"},
    { word: "ὀϊστός", answers: ["arrow"], pos: "n", gen: "m", len: "ῐ"},
    { word: "διέχω", answers: ["keep apart","keep separate","go through"], pos: "v", len: "ῐ"},
    { word: "παλάσσω", answers: ["besprinkle","sully","defile","be scattered abroad"], pos: "v", len: "ᾰᾰ", notes: ["act","act","act","pass"]},
    { word: "αὔω", answers: ["shout","call","cry out"], pos: "v"},
    { word: "κέντωρ", answers: ["goader","driver"], pos: "n", gen: "m"},
    { word: "δηθά", answers: ["for a long time"], pos: "adv", len: "ᾰ", notes: "apocopaic δήθ’"},
    { word: "ἐτεός", answers: ["true","real","genuine","truly"], pos: "adj"},
    { word: "ἀπόρνυμαι", answers: ["set forth"], pos: "v", len: "ᾰῠ"},
    { word: "πέπων", answers: ["ripe","softened","good","sweet","kind","weak","cowardly"], pos: "adj"},
    { word: "διαμπερής", answers: ["piercing"], pos: "adj", len: "ῐᾰ"},
    { word: "ἐξερύω", answers: ["draw up","draw out","drag up","drag out"], pos: "v", len: "ῠ"},
    { word: "ἀνακοντίζω", answers: ["shoot up","dart up","shoot","dart"], pos: "v", len: "ᾰᾰῐ"},
    { word: "στρεπτός", answers: ["flexible","pliant","bent","collar","necklace"], pos: "adj"},
    { word: "ἀράομαι", answers: ["pray","vow"], pos: "v", len: "ᾰᾰ"},
    { word: "κλύω", answers: ["hear","listen"], pos: "v", len: "ῠ"},
    { word: "αἰγίοχος", answers: ["aegis-bearing"], pos: "adj", len: "ῐ"},
    { word: "δήϊος", answers: ["hostile","destructive","burning","consuming","unhappy","wretched"], pos: "adj", len: "ῐ"},
    { word: "φθάνω", answers: ["act first","come first","be first","do first","overtake","anticipate"], pos: "v", len: "ᾰ"},
    { word: "δηρός", answers: ["long","too long"], pos: "adj"},
    { word: "γυῖον", answers: ["limb","limbs","hand","body"], pos: "n", notes: '"limbs" in plural'},
    { word: "ἐλαφρός", answers: ["light","lightweight"], pos: "adj", len: "ᾰ"},
    { word: "ἀγχοῦ", answers: ["near","nearby"], pos: "adv", len: "ᾰ"},
    { word: "ἄτρομος", answers: ["intrepid","dauntless","fearless"], pos: "adj", len: "ᾰ", notes: 'τρομέω "to tremble, to fear"'},
    { word: "σακέσπαλος", answers: ["wielding a shield"], pos: "adj", len: "ᾰᾰ", notes: 'τὸ σάκος "shield" + πάλλω "to poise, brandish"'},
    { word: "πειράω", answers: ["try"], pos: "v", len: "ᾰ", notes: "active and middle"}
];

vocabData = vocabData3;

//ᾱῑῡ ᾰ, ῐ, ῠ
//a᷌
//notes are to be collocated with the answers if and only if the lengths match.
//Do the be/am thing sometime
