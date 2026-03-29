//ΙΛΙΑΔΟΣ Ε (Iliad Book V) lines 1–58
//    { word: "", answers: ["",""], pos: "", len: ""},

const vocabData1 = [
    { word: "αὖ", answers: ["again", "in turn", "moreover"], pos: "adv" },
    { word: "μένος", answers: ["mind", "desire", "anger", "courage"], pos: "n", gen: "n" },
    { word: "ἄρνυμαι", answers: ["get", "win", "take up", "carry"], pos: "v", len: "ᾰῠ"},
    { word: "δαίω", answers: ["light", "kindle", "blaze"], pos: "v"},
    { word: "ἀκάματος", answers: ["tireless"], pos: "adj", len: "ᾰᾰᾰ"},
    { word: "ὀπωρινός", answers: ["of late summer"], pos: "adj", len: "ῐ"},
    { word: "λαμπρός", answers: ["bright", "shining"], pos: "adj", len: "ᾰ" },
    { word: "πλεῖστος", answers: ["most","the most","the greatest number","very much"], pos: "adj"},
    { word: "πεζός", answers: ["on foot", "on land"], pos: "adj" },
    { word: "σχεδόν", answers: ["near", "nearby", "nearly", "almost"], pos: "adv" },
    { word: "δολιχόσκιος", answers: ["long-shadowed", "casting a long shadow"], pos: "adj", len: "ῐῐ"},
    { word: "ἀκωκή", answers: ["point", "tip"], pos: "n", gen: "f", len: "ᾰ"},
    { word: "δίφρος", answers: ["chariot-board", "chariot"], pos: "n", gen: "m", len: "ῐ"},
    { word: "πάγχυ", answers: ["wholly", "quite"], pos: "adv", len: "ᾰῠ"},
    { word: "κοῖλος", answers: ["hollow"], pos: "adj"},
    { word: "ἀλέομαι", answers: ["shun", "avoid", "flee from"], pos: "v", len: "ἀ"},
    { word: "ὀρίνω", answers: ["stir", "rouse"], pos: "v", len: "ῑ"},
    { word: "θοῦρος", answers: ["rushing", "impetuous"], pos: "adj"},
    { word: "βροτολοιγός", answers: ["bane of men","plague of man","plague of men","bane of man"], pos: "adj"},
    { word: "μιαιφόνος", answers: ["bloodthirsty","murderous"], pos: "adj", len: "ῐ"},
    { word: "τειχεσιπλήτης", answers: ["approacher of walls","stormer of cities"], pos: "n", gen: "m", len: "ῐ"},
    { word: "ἐάω", answers: ["permit","allow","let","grant","cede","yield"], pos: "v", len: "ᾰ"},
    { word: "μάρναμαι", answers: ["fight","battle","contend","strive"], pos: "v", len: "ᾰᾰ"},
    { word: "ὁππότερος", answers: ["whichever of two","either of two"], pos: "pron"},
    { word: "ὀρέγω", answers: ["reach","stretch","stretch out","hold out","give","hand"], pos: "v"},
    { word: "νῶϊ", answers: ["we two","us two"], pos: "pron", len: "ῐ"},
    { word: "ἀλέομαι", answers: ["shun","avoid","flee from"], pos: "v", len: "ᾰ"},
    { word: "μεσσηγύς", answers: ["in the middle","meanwhile"], pos: "adv", len: "ῠ"},
    { word: "ἀραβέω", answers: ["rattle","ring","clash"], pos: "v", len: "ᾰᾰ"},
    { word: "ἐναίρω", answers: ["slay","kill"], pos: "v"},
    { word: "ἐριβῶλαξ", answers: ["very fertile"], pos: "adj", len: "ῐᾰ"},
    { word: "ἐρείπω", answers: ["throw down","tear down"], pos: "v"},
    { word: "στυγερός", answers: ["hated","wretched"], pos: "adj", len: "ῠ"},
    { word: "συλεύω", answers: ["despoil of arms","despoil","pillage","plunder","rob","deceive","trick"], pos: "v", len: "ῡ"},
    { word: "θηρητήρ", answers: ["hunter"], pos: "n", gen: "m"},
    { word: "ἄγρια", answers: ["hunt","chase","way of catching","quarry","prey","catch"], pos: "n", gen: "f", len: "ᾰῐᾰ"},
    { word: "χραισμέω", answers: ["ward off","help","defend"], pos: "v", notes: ["acc","dat","dat"]},
    { word: "ἐκηβολία", answers: ["skill in archery"], pos: "n", gen: "f", len: "ᾱ"},   
    { word: "καίνυμαι", answers: ["surpass","overcome","excel"], pos: "v", len: "ῠ"},
    { word: "μετάφρενον", answers: ["upper back","broad of the back"], pos: "n", gen: "n", len: "ᾰ"}
];//Thru end line 58: 40 words.

vocabData = vocabData1;

//ᾱ ῡ ᾰ, ῐ, ῠ
//notes are to be collocated with the answers if and only if the lengths match.
