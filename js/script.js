/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function reconstruct() {
    var outputElement = document.getElementById("output");
    var input = document.getElementById("input").value;

    // If input isNotEmpty
    if (isNotEmpty(input)) {
        var instagram = "instagram.com/";
        var twitter = "twitter.com/";
        var youtube = "youtube.com/";

        // Instagram -> Bibliogram
        // If input includes Instagram URL + "p/", input is treated as Instagram profile...
        if (input.includes(instagram + "p/")) {
            appendAnchor(outputElement, "https://bibliogram.art/" + input.split(instagram)[1]);
            // ...Else if input includes Instagram URL, input is treated as Instagram post
        } else if (input.includes(instagram)) { // 
            appendAnchor(outputElement, "https://bibliogram.art/u/" + input.split(instagram)[1]);

            // Twitter -> Nitter
            // Else if input includes Twitter URL, input is treated as Twitter profile or tweet
        } else if (input.includes(twitter)) {
            appendAnchor(outputElement, "https://nitter.net/" + input.split(twitter)[1]);

            // YouTube -> Invidious
            // Else if input includes YouTube URL, input is treated as YouTube channel or video
        } else if (input.includes(youtube)) {
            appendAnchor(outputElement, "https://invidiou.site/" + input.split(youtube)[1]);

            // Else input is empty, reset
        } else {
            reset();
        }
    }
}

// Return True if passed-in str is not empty, null, nor contains spaces, tabs, etc.
function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

// Set new anchor element to passed-in link and append to passed-in element
function appendAnchor(element, link) {
    var newAnchor = document.createElement("a");

    newAnchor.id = "new-anchor";
    newAnchor.innerText = link;
    newAnchor.href = link;
    newAnchor.target = "_blank";

    removeChildren(element);
    element.append(newAnchor);
}

// Set value of input element to empty String and remove child anchor element
function reset() {
    document.getElementById("input").value = "";
    removeChildren(document.getElementById("output"));
}

// Remove anchor elements from passed-in element
function removeChildren(element) {
    for (var childNode of element.childNodes) {
        if (childNode.id === "new-anchor") {
            element.removeChild(childNode);
        }
    }
}

// Show instructions
function help(id) {
    var elementStyle = document.getElementById(id).style;
    var block = "block";

    if (elementStyle.display === block) {
        elementStyle.display = "none";
    } else {
        elementStyle.display = block;
    }
}