const emoji = require('./../src/index');

console.log(emoji.grin());
console.log(emoji.grin(true));
console.log(emoji.grin(false, true));
console.log(emoji.grin(false, false, true));
console.log(emoji.grin(false, false, false, true));
console.log(emoji.grin(false, false, false, false, true));
console.log("This next emoji is known to not show up");
console.log(emoji.rofl());
console.log(emoji.tears_of_joy());
console.log("This next emoji is known to not show up");
console.log(emoji.smile());
console.log("This next emoji is known to not show up");
console.log(emoji.smile(true));
console.log(emoji.wink());