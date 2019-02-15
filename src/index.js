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
    smile: function(upside_down = false, smile_eyes = false, halo = false, hearts = false, heart_eyes = false, stars = false, slight = false) {
        if (upside_down) {
            return "🙃";
        } else if (smile_eyes) {
            return "😊";
        } else if (halo) {
            return "😇";
        } else if (hearts) {
            return "🥰";
        } else if (heart_eyes) {
            return "😍";
        } else if (stars) {
            return "🤩";
        } else if (slight) {
            return "🙂";
        }
        return "☺️";
    },
    wink: function() {return "😉";}
}