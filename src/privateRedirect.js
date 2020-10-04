/*
 * Reconstruct social links to privacy-friendly front-ends
 */

function privateRedirect(type, username) {
    var element = document.getElementById(type + "-output");
    element.innerHTML = "";
    if (!isEmpty(username)) {
        var linkFirstPart = "<a target='_blank' href='";
        var linkSecondPart = "'>"
        var linkThirdPart = "</a>"
        if (type == "bibliogram") {
            var bibliogram = "https://bibliogram.art/u/" + username;
            element.innerHTML = linkFirstPart + bibliogram + linkSecondPart + bibliogram + linkThirdPart;
        } else if (type == "nitter") {
            var nitter = "https://nitter.net/" + username;
            element.innerHTML = linkFirstPart + nitter + linkSecondPart + nitter + linkThirdPart;
        } else if (type == "invidious") {
            // TODO
        }
    }
}

function isEmpty(str) {
    return str === null || str.match(/^\s*$/) !== null;
}