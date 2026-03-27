//ΙΛΙΑΔΟΣ Ε (Iliad Book V) lines 59-94
//    { word: "", answers: ["",""], pos: "", len: ""},

const vocabData = [
    { word: "δαίδαλος", answers: ["cunningly wrought","curiously wrought"], pos: "adj", len: "ᾰ"},
    { word: "ἔξοχος", answers: ["prominent","eminent","standing out","jutting","jutting out"], pos: "adj"},
    { word: "τεκταίνομαι", answers: ["make","work","frame","devise","contrive"], pos: "v"},
    { word: "ἀρχέκακος", answers: ["beginning mischief"], pos: "adj", len: "ᾰᾰ"},
    { word: "θέσφατος", answers: ["divinely ordained","divinely decreed","divinely spoken"], pos: "adj", len: "ᾰ"},
    { word: "καταμάρπτω", answers: ["catch","overtake"], pos: "v", len: "ᾰᾰᾰ"},
    { word: "γλουτός", answers: ["rump","buttock","haunch"], pos: "n", gen: "m"},
    { word: "διαπρό", answers: ["right through"], pos: "adv", len: "ῐᾰ"},
    { word: "ἀντικρύ", answers: ["straight on","face to face","opposite"], pos: "adv", len: "ᾰῐῡ"},
    { word: "κύστις", answers: ["bladder"], pos: "n", gen: "f", len: "ῠῐ"},
    { word: "γνύξ", answers: ["on bended knee","with bent knee","on the knee"], pos: "adv", len: "ῠ"},
    { word: "ἔπεφνον", answers: ["slew","killed","slay","kill"], pos: "v", notes: 'Originally a reduplicated second aorist of θείνω "strike, wound" with semantic drift'},
    { word: "νόθος", answers: ["illegitimate","bastard","baseborn"], pos: "adj"},
    { word: "χαρίζω", answers: ["show favor","show kindness","oblige","gratify","forgive"], pos: "v", len: "ᾰ"},
    { word: "πόσις", answers: ["husband","spouse"], pos: "n", gen: "m", len: "ῐ"},
    { word: "ἴνιον", answers: ["occipital bone","occiput"], pos: "n", gen: "n", len: "ῑῐ"},
    { word: "ψυχρός", answers: ["cold","frigid"], pos: "adj", len: "ῡ"},
    { word: "ἀρητήρ", answers: ["priest","one that prays"], pos: "n", gen: "m", len: "a᷌"},
    { word: "τίω", answers: ["pay honor","honor","revere"], pos: "v", len: "ῑ"},
    { word: "ἀγλαός", answers: ["splendid","shining","bright","beautiful","famous","noble"], pos: "adj", len: "ᾱᾰ"},
    { word: "μεταδρομάδην", answers: ["running after","following close upon"], pos: "adv", len: "ᾰᾰ"},
    { word: "φάσγανον", answers: ["sword"], pos: "n", gen: "n", len: "ᾰᾰ"},
    { word: "ἀΐσσω", answers: ["shoot","dart","move quickly","glance"], pos: "v", len: "ᾱῑ"},
    { word: "ὑσμίνη", answers: ["fight","battle","conflict","combat"], pos: "n", gen: "f", len: "ῠῑ"},
    { word: "θύνω", answers: ["rush","dart","rush along","dart along"], pos: "v", len: "ῡ"},
    { word: "γέφυρα", answers: ["dyke","dam","causeway"], pos: "n", gen: "f", len: "ῡ"},
    { word: "ἰσχανάω", answers: ["hold back","check","stay","long for","desire"], pos: "v", len: "ῐᾰᾰ", notes:["","","","gen","gen"]},
    { word: "ἕρκος", answers: ["fence","enclosure","wall","defense","courtyard"], pos: "n", gen: "n"},
    { word: "ἀλωή", answers: ["threshing floor",""], pos: "n", gen: "f", len: "ᾰ"},
    { word: "ἐριθηλής", answers: ["very flourishing","luxuriant"], pos: "adj", len: "ῐ"},
    { word: "ἐξαπίνης", answers: ["suddenly", "sudden"], pos: "adv", len: "ᾰῐ", notes: "ἐξαίφνης"},
    { word: "ἐπιβρίθω", answers: ["fall heavily upon","fall heavily","weigh down","press down"], pos: "v", len: "ῐῑ"},
    { word: "ὄμβρος", answers: ["storm","shower","thunderstorm","water","inundation"], pos: "n", gen: "m"},
    { word: "αἰζηός", answers: ["vigorous","strong"], pos: "adj"},
    { word: "πυκινός", answers: ["thick","dense","close","compact","close-set","shrewd","wise","sagacious"], pos: "adj", len: "ῠῐ"},
    { word: "μίμνω", answers: ["stay","wait","stand fast","tarry","remain"], pos: "v", len: "ῐ"}
]

//ᾱῑῡ ᾰ, ῐ, ῠ
//θείνω - ἔπεφνε
//notes are to be collocated with the answers if and only if the lengths match.

