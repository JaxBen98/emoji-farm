module.exports = {
    grin: function(bigEyes = false, smileEyes = false, grinSweat = false, grinSquint = false, basic = true) {
        // find out if we have a problem
        if (basic) {
            if((bigEyes && smileEyes) || (bigEyes && grinSweat) || (bigEyes && grinSquint) || (smileEyes && grinSweat) || (smileEyes && grinSquint) || (grinSweat && grinSquint) || (bigEyes && smileEyes && grinSweat) || (bigEyes && smileEyes && grinSquint) || (smileEyes && grinSweat && grinSquint) || (bigEyes && grinSweat && grinSquint) || (bigEyes && grinSweat && grinSquint && smileEyes)) {
                throw new Error("Only one value (except for basic) can be true, i.e for a sweating grin you would use grin(false, false, true); or grin(false, false, true, false);");
            }
        }
        // find out which one they wanted
        if (bigEyes) {
            return "😃";
        }
        if (smileEyes) {
            return "😄";
        }
        if (grinSweat) {
            return "😅";
        }
        if (grinSquint) {
            return "😆";
        }
        return "😀";
    },
    beam: function() {return "😁";},
    lol: function() {return "😂";},
    rofl: function() {return "🤣";}, // not supported for windows, but works on browsers!
    wink: function() {return "😉";},
    smile: function(smileEyes = false, sunglasses = false, heartEyes = false, slightSmile = false, basic = true) {
        if (basic) {
            if ((smileEyes && sunglasses) || (smileEyes && heartEyes) || (sunglasses && heartEyes) || (slightSmile && smileEyes) || (slightSmile && sunglasses) || (slightSmile && heartEyes) || (smileEyes && sunglasses && heartEyes) || (smileEyes && sunglasses && slightSmile) || (sunglasses && slightSmile && heartEyes)) {
                throw new Error("Only one value (except for basic) can be true. You can disable this error by setting basic to false");
            }
        }
        if (smileEyes) {
            return "😊";
        }
        if (sunglasses) {
            return "😎";
        }
        if (heartEyes) {
            return "😍";
        }
        return "☺️"; // unicode, not emoji
    },
    yum: function() {return "😋";},
    kiss: function(smileEyes = false, closedEyes = false, basic = true) {
        if (basic) {
            if (smileEyes && closedEyes) {
                throw new Error("Only one value (except for basic) can be true. You can disable this error by setting basic to false");
            }
        }
        if (smileEyes) {
            return "😙";
        }
        if (closedEyes) {
            return "😚";
        }
        return "😗";
    },
    loved: function() {return "🥰";}, // not supported for windows, or for browsers.
    hugging: function() {return "🤗";}, // not supported for windows, but works on browsers!
    think: function() {return "🤔";}, // not supported for windows, but works on browsers!
    eyebrow: function() {return "🤨";}, // not supported for windows, or for browsers
    neutral: function(noMouth = false) {
        if (noMouth) {
            return "😶";
        }
        return "😐";
    },
    expressionless: function() {return "😑";},
    annoyed: function() {return "🙄";}, // not supported for windows, but works for browsers!
    smirk: function() {return "😏";},
    suprised: function() {return "😮";},
    zipped: function() {return "🤐";}, // not supported for windows, but works for browsers!
    tired: function() {return "😫";},
    sleeping: function() {return "😴";},
    tongue: function(winking = false, squinting = false, basic = true) {
        if (basic) {
            if (winking && squinting) {
                throw new Error("Only one value (except for basic) can be true. You can disable this error by setting basic to false");
            }
        }
        if (winking) {
            return "😜";
        }
        if (squinting) {
            return "😝";
        }
        return "😛";
    },
    drool: function() {return "🤤";}, // not supported for windows, but works on browsers!
    meh: function() {return "😒";},
    confused: function() {return "😕";},
    reversed: function() {return "🙃";},
    moneyMouth: function() {return "🤑";}, // not supported for windows, but works on browsers!
    frown: function(slight = false) {
        if (slight) {
            return "🙁"; // not supported for windows, but works on browsers!
        }
        return "☹️";
    },
    worried: function() {return "😟";},
    exploding: function() {return "🤯";}, // not supported for windows, but browsers havent been checked
    screaming: function() {return "😱";},
    hot: function() {return "🥵";}, // not supported for windows, but browsers haven't been checked
    cold: function() {return "🥶";} // not supported for windows, but browsers haven't been checked
}