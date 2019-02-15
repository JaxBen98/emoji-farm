module.exports = {
    grin: function(big_eyes = false, smile_eyes = false, beaming = false, squint = false, sweat = false) {
        if (big_eyes) {
            return "😃";
        } else if (smile_eyes) {
            return "😄";
        } else if (beaming) {
            return "😁";
        } else if (squint) {
            return "😆";
        } else if (sweat) {
            return "😅";
        }
        return "😀";
    },
    rofl: function() {return "🤣";},
    tears_of_joy: function() {return "😂";},
    smile: function() {
        return "🙂";
    }
}