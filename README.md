# emoji-farm

What is emoji-farm, you may be asking. Well, let me educate you.<br>emoji-farm is something that you can import into a javascript project, to add whatever emojis you want to strings.

*I would add badges but shields.io doesn't want to create anything correctly*

## How do i install it?

`$ npm install @jaxben98/emoji-farm`

or, if you are using a Github repository,

`$ npm install -g @jaxben98/emoji-farm`

or, if you are a *pro*

`$ npm i -g @jaxben98/emoji-farm`

## But how do i use this masterpeice?

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
console.log("unicode smile: " + emoji.smile());
//=> unicode smile: ☺️
```
If you didn't understand this, or want to see the list of emojis, head [here](https://github.com/PandaBoi57/emoji-farm/blob/master/test/test.js)

## Things to note

Some thing to note is that some emojis are only available on certain platforms. Here are all of those emojis:

### Doesn't work on some platforms

emoji.rofl(): 🤣 <!-- an example of "looks different on other platforms" is looking at this on the NPM site, compared to github -->

emoji.loved(): 🥰

emoji.think(): 🤔

emoji.eyebrow(): 🤨

emoji.annoyed(): 🙄

emoji.zipped(): 🤐

emoji.drool(): 🤤

emoji.reversed(): 🙃

## FAQ

**Has the program been finished?**

*It's not even close to being done, no*