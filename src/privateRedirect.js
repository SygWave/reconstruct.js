/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function privateRedirect() {
    var outputElement = document.getElementById("output");
    var input = document.getElementById("input").value;

    outputElement.innerText = "";

    // If input isNotEmpty
    if (isNotEmpty(input)) {
        var instagram = "instagram.com/";
        var twitter = "twitter.com/";
        var youtube = "youtube.com/";

        // Instagram -> Bibliogram
        // If input includes Instagram URL + "p/", input is treated as Instagram profile...
        if (input.includes(instagram + "p/")) {
            setAnchor(outputElement, "https://bibliogram.art/" + input.split(instagram)[1]);
        // ...Else if input includes Instagram URL, input is treated as Instagram post
        } else if (input.includes(instagram)) { // 
            setAnchor(outputElement, "https://bibliogram.art/u/" + input.split(instagram)[1]);
        
        // Twitter -> nitter
        // Else if input includes Twitter URL, input is treated as Twitter profile or tweet
        } else if (input.includes(twitter)) {
            setAnchor(outputElement, "https://nitter.net/" + input.split(twitter)[1]);

        // YouTube -> Invidious
        // Else if input includes YouTube URL, input is treated as YouTube channel or video
        } else if (input.includes(youtube)) {
            setAnchor(outputElement, "https://invidiou.site/" + input.split(youtube)[1]);

        // Else input is empty, reset
        } else {
            reset();
        }
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

// Sets value of input element and innerText of output element to empty String
function reset() {
    document.getElementById("input").value = "";
    document.getElementById("output").innerText = "";
}