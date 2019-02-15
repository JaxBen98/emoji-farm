const emoji = require('./../src/index');

console.log(emoji.grin());
console.log(emoji.grin(true));
console.log(emoji.grin(false, true));
console.log(emoji.grin(false, false, true));
console.log(emoji.grin(false, false, false, true));
console.log(emoji.grin(false, false, false, false, true));