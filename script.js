let adjectives = [
    'dumb',
    'helpless, i-need-a-dollar-ass',
    'poor, sissyass',
    'incapable',
    'powerless',
    'feeble, delicate',
    'flimsy-boned',
    'spineless, cowardly',
    'bisexual',
    'wishy-washy, incapacitated',
    'gutless',
    'chicken-livered',
    'sissified',
    'pigeon-hearted',
    'poor-mans',
    'weak-kneed',
    'timid',
    'useless, fucking retarded ass',
    'pointless',
    'hopeless',
    'impotent, cant read good',
    'unusable, sick',
    'broken',
    'fat-nosed, sorry ass',
    'schizophrenic',
    'diabetic, chronic fat-fuck',
    'depressed, flimsy-necked',
    'lonely, spiritless',
    'psychotic',
    'prehistoric',
    'homosexual',
    'Adolf Titler ass'
]

let nouns = [
    'mountain rat',
    'camel-toe',
    'rainbow puffin',
    'hawaiian bush squirrel',
    'korean beaver',
    'two-legged alpaca',
    'water parrot',
    'river otter',
    'badger',
    'spiny rat',
    'asian goose',
    'jackal',
    'baboon',
    'drunk bandicoot',
    'asexual barking gecko',
    'bony-eared assfish',
    'long-nosed chimp',
    'carpet tick',
    'slutty raccoon',
    'ground eel',
    'komodo river duck',
    'pelican',
    'flat-tailed egyptian mongoose',
    'quail',
    'endangered possum',
    'jungle kangaroo',
    'knob-nosed goose',
]



function newDiss() {
    var randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    document.getElementById('dissDisplay').innerHTML = `${randomAdj} ${randomNoun}`


}