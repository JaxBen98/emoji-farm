const emoji = require('./../src/index');

var grin = emoji.grin();
var bigEyeGrin = emoji.grin(true, false);
var yes = true;

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
console.log("smile eyes = " + emoji.smile(yes));
console.log("kiss = " + emoji.kiss());
console.log("loved = " + emoji.loved()); // not for windows
console.log("rofl = " + emoji.rofl()); // not for windows
console.log("kiss smile eyes = " + emoji.kiss(true));
console.log("slight smile = " + emoji.smile(false, false, false, true, false));
console.log("think = " + emoji.think()); // not for windows
console.log("eyebrow = " + emoji.eyebrow()); // not for windows
console.log("neutral = " + emoji.neutral());
console.log("no mouth = " + emoji.neutral(true));
console.log("expressionless = " + emoji.expressionless());
console.log("smirk = " + emoji.smirk());
console.log("suprised = " + emoji.suprised());
console.log("zipped = " + emoji.zipped()); // not for windows
console.log("tired = " + emoji.tired());