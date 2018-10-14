module.exports = {
    grin: function(bigEyes = false, smileEyes = false, grinSweat = false, grinSquint = false) {
        // find out if we have a problem
        if((bigEyes && smileEyes) || (bigEyes && grinSweat) || (bigEyes && grinSquint) || (smileEyes && grinSweat) || (smileEyes && grinSquint) || (grinSweat && grinSquint) || (bigEyes && smileEyes && grinSweat) || (bigEyes && smileEyes && grinSquint) || (smileEyes && grinSweat && grinSquint) || (bigEyes && grinSweat && grinSquint) || (bigEyes && grinSweat && grinSquint && smileEyes)) {
            throw new Error("Only one value can be true, i.e for a sweating grin you would use grin(false, false, true); or grin(false, false, true, false);");
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
}