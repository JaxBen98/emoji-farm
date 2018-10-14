# emoji-farm

*I would add badges but shields.io doesn't want to create anything correctly*

A bunch of functions that return emojis

## Install

`$ npm install @jaxben98/emoji-farm`

## Usage

```javascript
const emoji = require("@jaxben98/emoji-farm");

grinning = emoji.grin();

console.log(grinning);
//=> 😀
console.log("grinning emoji: " + emoji.grin());
//=> grinning emoji: 😀
```

## Things to note

Some things to note is that some emojis are only available on certain platforms, or look different on other platforms. Here are all of those emojis

### Looks different on other platforms

Grinning: 😁

### Doesn't work on some platforms

*I haven't tested this one on platforms other than Windows.*

ROFL: 🤣