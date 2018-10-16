module.exports = {
    grin: function(bigEyes = false, smileEyes = false, grinSweat = false, grinSquint = false) {
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
    smile: function(smileEyes = false, sunglasses = false, heartEyes = false, halo = false, cowboyHat = false, clown = false) {
        if (smileEyes) {
            return "😊";
        }
        if (sunglasses) {
            return "😎";
        }
        if (heartEyes) {
            return "😍";
        }
        if (halo) {
            return "😇";
        }
        if (cowboyHat) {
            return "🤠"; // not supported for windows, but works on browsers!
        }
        if (clown) {
            return "🤡"; // not supported for windows, but works on browsers!
        }
        return "☺️"; // unicode, not emoji
    },
    yum: function() {return "😋";},
    kiss: function(smileEyes = false, closedEyes = false) {
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
    neutral: function(noMouth = false, monocle = false) {
        if (noMouth) {
            return "😶";
        }
        if (monocle) {
            return "🧐"; // not supported for windows, but browsers haven't been checked
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
    tongue: function(winking = false, squinting = false) {
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
    exploding: function() {return "🤯";}, // not supported for windows, or for browsers.
    screaming: function() {return "😱";},
    hot: function() {return "🥵";}, // not supported for windows, or for browsers.
    cold: function() {return "🥶";}, // not supported for windows, or for browsers.
    crazy: function() {return "🤪";}, // not supported for windows, or for browsers
    dizzy: function(drunk = false) {
        if (drunk) {
            return "🥴"; // not supported for windows, or for browsers
        }
        return "😵";
    },
    angry: function(swear = false) {
        if (swear) {
            return "🤬"; // not supported for windows, or for browsers
        }
        return "😡";
    },
    sick: function(mask = false, thermometer = false, bandage = false, vomit = false, sneezing = false) {
        if (mask) {
            return "😷";
        }
        if (thermometer) {
            return "🤒"; // not supported for windows, but works on browsers!
        }
        if (bandage) {
            return "🤕"; // not supported for windows, but works on browsers!
        }
        if (vomit) {
            return "🤮"; // not supported for windows, or for browsers
        }
        if (sneezing) {
            return "🤧"; // not supported for windows, but works on browsers!
        }
        return "🤢"; // not supported for windows, but works on browsers!
    },
    party: function() {return "🥳";}, // not supported for windows, or for browsers
    liar: function() {return "🤥";}, // not supported for windows, but works on browsers!
    hush: function() {return "🤫";}, // not supported for windows, or for browsers
    nerd: function() {return "🤓";}, // not supported for windows, but works on browsers
    devil: function(angry = false) {
        if (angry) {
            return "👿";
        }
        return "😈";
    },
    ogre: function() {return "👹"},
    goblin: function() {return "👺";},
    skull: function() {return "💀";},
    ghost: function() {return "👻";},
    alien: function(monster = false) {
        if (monster) {
            return "👾";
        }
        return "👽";
    },
    robot: function() {return "🤖";}, // not supported for windows, but browsers haven't been checked
    poop: function() {return "💩";},
    cat: function() {
        return "😺";
    }
}