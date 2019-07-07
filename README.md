# emoji-farm

What is emoji-farm, you may be asking. Well, let me educate you.<br>emoji-farm is something that you can import into a javascript project, to add whatever emojis you want to strings.

## Requirements

  * Node 6.17.1 or later

## How to use emoji-farm

It's simple.

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
```
If you didn't understand this, or want to see the list of all the emojis in emoji-farm, head [here](https://github.com/JaxBen98/emoji-farm/blob/master/test/test.js)

## Things to note

Some thing to note is that some emojis are only available on certain platforms. Here are all of those emojis:

### Doesn't work on some platforms

`emoji.rofl()`: 🤣

`emoji.smile(true)`: 🙃

`emoji.smile(false, false, false, true)`: 🥰

`emoji.smile(false, false, false, false, false, true)`: 🤩

`emoji.smile(false, false, false, false, false, false, true)`: 🙂

`emoji.tongue(false, false, true)`: 🤪

`emoji.tongue(false, false, false, false, true)`: 🤑

`emoji.hug()`: 🤗

`emoji.blush_hand()`: 🤭