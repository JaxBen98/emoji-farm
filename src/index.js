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
                throw new Error("Only one value (except for basic) can be true");
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
                throw new Error("Only one value (except for basic) can be true");
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
    think: function() {return "🤔";}, // not supported for windows, but i haven't checked browsers
    eyebrow: function() {return "🤨";}, // not supported for windows, but i haven't checked browsers
    neutral: function(noMouth = false) {
        if (noMouth) {
            return "😶";
        }
        return "😐";
    },
    expressionless: function() {return "😑"}
}