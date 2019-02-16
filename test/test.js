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
console.log(emoji.smile()); // unicode smile
console.log("This next emoji is known to not show up");
console.log(emoji.smile(true));
console.log(emoji.wink());
console.log(emoji.smile(false, true));
console.log(emoji.smile(false, false, true));
console.log("This next emoji is known to not show up");
console.log(emoji.smile(false, false, false, true));
console.log(emoji.smile(false, false, false, false, true));
console.log("This next emoji is known to not show up");
console.log(emoji.smile(false, false, false, false, false, true));
console.log("This next emoji is known to not show up");
console.log(emoji.smile(false, false, false, false, false, false, true));
console.log(emoji.wink());
console.log(emoji.kiss());
console.log(emoji.kiss(true));
console.log(emoji.kiss(false, true));