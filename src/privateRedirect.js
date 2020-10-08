/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function privateRedirect(element) {
    var id = element.id;
    var outputElement = document.getElementById(id + "-output");
    var input = element.value;

    outputElement.innerText = "";

    // If input isNotEmpty
    if (isNotEmpty(input)) {

        // Bibliogram
        if (id == "bibliogram") {
            var bibliogram = "https://bibliogram.art/";
            var key = "instagram.com/";
            // If Bibliogram input.includes(key) input is treated as profile or post
            if (input.includes(key + "p/")) {
                setAnchor(outputElement, bibliogram + input.split(key)[1]);

            } else if (input.includes(key)) {
                setAnchor(outputElement, bibliogram + "u/" + input.split(key)[1]);
                // Else input is treated as username
            } else {
                setAnchor(outputElement, bibliogram + "u/" + input);
            }

            // nitter
        } else if (id == "nitter") {
            var nitter = "https://nitter.net/";
            var key = "twitter.com/";
            // If nitter input.includes(key) input is treated as profile or tweet
            if (input.includes(key)) {
                setAnchor(outputElement, nitter + input.split(key)[1]);
                // Else input is treated as username
            } else {
                setAnchor(outputElement, nitter + input);
            }

            // Invidious
        } else if (id == "invidious") {
            var invidious = "https://invidiou.site/";
            var key = "youtube.com/";
            // If invidious input.includes(key) input is treated as channel or video
            if (input.includes(key)) {
                setAnchor(outputElement, invidious + input.split(key)[1]);
                // Else input is treated as username
            } else {
                setAnchor(outputElement, invidious + "channel/" + input);
            }
        }
    } else {
        reset(element);
    }
}

// Returns True if passed-in str is not empty, null, nor contains spaces, tabs, etc.
function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

// Sets innerText and href attributes of passed-in element to passed-in link
function setAnchor(element, link) {
    element.innerText = link;
    element.href = link;
}

// Sets value of passed-in element and innerText of according output element to empty String
function reset(element) {
    element.value = "";
    document.getElementById(element.id + "-output").innerText = "";
}