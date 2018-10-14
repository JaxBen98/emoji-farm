# emoji-farm

*I would add badges but shields.io doesn't want to create anything correctly*

A bunch of functions that return emojis

## Install

`$ npm install @jaxben98/emoji-farm`

or

`$ npm install -g @jaxben98/emoji-farm`

## Usage

```javascript
const emoji = require("@jaxben98/emoji-farm");

grinning = emoji.grin();

console.log(grinning);
//=> 😀
console.log("grinning emoji: " + emoji.grin());
//=> grinning emoji: 😀
console.log("grinning with big eyes: " + emoji.grin(true, false));
//=> grinning with big eyes: 😃
console.log("grinning with smile eyes: " + emoji.grin(false, true));
//=> grinning with smile eyes: 😄
console.log("unicode smile: " + emoji.smile());
//=> unicode smile: ☺️
```
or, see [test.js](https://github.com/PandaBoi57/emoji-farm/blob/master/test/test.js) for a full list of emojis

## Things to note

Some things to note is that some emojis are only available on certain platforms, or look different on other platforms. Here are all of those emojis

### Looks different on other platforms

emoji.grin(): 😁

### Doesn't work on some platforms

*I haven't tested this one on platforms other than Windows.*

emoji.rofl(): 🤣 <!-- an example of "looks different on other platforms" is looking at this on the NPM site, compared to github -->