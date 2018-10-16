const emoji = require('./../src/index');

var grin = emoji.grin();
var bigEyeGrin = emoji.grin(true, false);

console.log(grin);
console.log("grin = " + emoji.grin());
console.log("grin big eyes = " + emoji.grin(true))
console.log("grin smile eyes = " + emoji.grin(false, true))
console.log(bigEyeGrin);
console.log("grin sweat eyes = " + emoji.grin(false, false, true, false, true));
console.log("lol = " + emoji.lol());
console.log("grin squint eyes = " + emoji.grin(false, false, false, true, false));
console.log("basic smile = " + emoji.smile()); // unicode
console.log("smile eyes = " + emoji.smile(true));
console.log("kiss = " + emoji.kiss());
console.log("loved = " + emoji.loved()); // not for windows
console.log("rofl = " + emoji.rofl()); // not for windows
console.log("kiss smile eyes = " + emoji.kiss(true));
console.log("think = " + emoji.think()); // not for windows
console.log("eyebrow = " + emoji.eyebrow()); // not for windows
console.log("neutral = " + emoji.neutral());
console.log("no mouth = " + emoji.neutral(true));
console.log("expressionless = " + emoji.expressionless());
console.log("smirk = " + emoji.smirk());
console.log("suprised = " + emoji.suprised());
console.log("zipped = " + emoji.zipped()); // not for windows
console.log("tired = " + emoji.tired());
console.log("sleeping = " + emoji.sleeping());
console.log("tongue = " + emoji.tongue(false, false, false));
console.log("tongue winking = " + emoji.tongue(true, false));
console.log("tounge squinting = " + emoji.tongue(false, true));
console.log("drooling = " + emoji.drool());
console.log("meh = " + emoji.meh());
console.log("confused = " + emoji.confused());
console.log("reversed = " + emoji.reversed()); // not for windows
console.log("money mouth = " + emoji.moneyMouth()); // not for windows
console.log("frown = " + emoji.frown());
console.log("slight frown = " + emoji.frown(true)); // not for windows
console.log("worried = " + emoji.worried());
console.log("exploding head = " + emoji.exploding()); // not for windows
console.log("screaming = " + emoji.screaming());
console.log("hot = " + emoji.hot()); // not for windows
console.log("cold = " + emoji.cold()); // not for windows
console.log("crazy = " + emoji.crazy()); // not for windows
console.log("dizzy = " + emoji.dizzy());
console.log("angry = " + emoji.angry());
console.log("angry swearing = " + emoji.angry(true)); // not for windows
console.log("sick = " + emoji.sick()); // not for windows
console.log("sick with mask = " + emoji.sick(true, false, false));
console.log("sick with thermometer = " + emoji.sick(false, true)); // not for windows
console.log("sick with bandages = " + emoji.sick(false, false, true)); // not for windows
console.log("sick while vomiting = " + emoji.sick(false, false, false, true)); // not for windows
console.log("sneezing = " + emoji.sick(false, false, false, false, true, true)); // not for windows
console.log("smiling with halo = " + emoji.smile(false, false, false, true));
console.log("cowboy = " + emoji.smile(false, false, false, false, true)); // not for windows
console.log("clown = " + emoji.smile(false, false, false, false, false, true)); // not for windows
console.log("party = " + emoji.party()); // not for windows
console.log("drunk = " + emoji.dizzy(true)); // not for windows
console.log("liar = " + emoji.liar()); // not for windows
console.log("hush = " + emoji.hush()); // not for windows
console.log("monocle = " + emoji.neutral(false, true)); // not for windows
console.log("nerd = " + emoji.nerd()); // not for windows
console.log("devil = " + emoji.devil());
console.log("angry devil = " + emoji.devil(true));
console.log("ogre = " + emoji.ogre());
console.log("goblin = " + emoji.goblin());
console.log("skull = " + emoji.skull());
console.log("ghost = " + emoji.ghost());
console.log("alien = " + emoji.alien(false));
console.log("alien monster = " + emoji.alien(true));
console.log("robot = " + emoji.robot());
console.log("poop = " + emoji.poop());
console.log("cat = " + emoji.cat());
console.log("cat with smiling eyes = " + emoji.cat(true));
console.log("cat with tears of joy = " + emoji.cat(false, true));
console.log("cat with heart eyes = " + emoji.cat(false, false, true));
console.log("smirking cat = " + emoji.cat(false, false, false, true));
console.log("cat with kissing lips = " + emoji.cat(false, false, false, false, true));
console.log("tired cat = " + emoji.cat(false, false, false, false, false, true));
console.log("crying cat = " + emoji.cat(false, false, false, false, false, false, true));