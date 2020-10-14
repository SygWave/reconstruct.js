/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function reconstruct() {
    var outputElement = document.getElementById("output");
    var input = document.getElementById("input").value;
    var inputLowerCase = input.toLowerCase();
    const forwardSlash = "/";

    // If last char of input is "/", remove it
    if (input.slice(-1) === forwardSlash) {
        input = input.slice(0, -1);
    }

    // If input isNotEmpty
    if (isNotEmpty(input)) {
        const instagram = "instagram.com/";
        const p = "p/";
        const bibliogram = "https://bibliogram.art/";
        const twitter = "twitter.com/";
        const status = "status/";
        const nitter = "https://nitter.net/";
        const youtube = "youtube.com/";
        const channel = "channel/";
        const invidious = "https://invidious.site/";

        // Instagram -> Bibliogram
        // If inputLowerCase includes Instagram URL + "p/", input is treated as Instagram profile...
        if (inputLowerCase.includes(instagram + p)) {
            appendAnchor(outputElement, bibliogram + p + input.substr(input.lastIndexOf(forwardSlash) + 1));
            // ...Else if inputLowerCase includes Instagram URL, input is treated as Instagram post
        } else if (inputLowerCase.includes(instagram)) { // 
            appendAnchor(outputElement, bibliogram + "u/" + input.substr(input.lastIndexOf(forwardSlash) + 1));

            // Twitter -> Nitter
            // Else if inputLowerCase includes Twitter URL and "status/", input is treated as tweet...
        } else if (inputLowerCase.includes(twitter) && inputLowerCase.includes(status)) {
            var splits = input.split(forwardSlash);
            appendAnchor(outputElement, nitter + splits[splits.length - 3] + forwardSlash + status + splits[splits.length - 1]);

            // ...Else if inputLowerCase includes Twitter URL, input is treated as Twitter profile
        } else if (inputLowerCase.includes(twitter)) {
            appendAnchor(outputElement, nitter + input.substr(input.lastIndexOf(forwardSlash) + 1));

            // YouTube -> Invidious
            // Else if inputLowerCase includes YouTube URL + "channel/", input is treated as YouTube channel...
        } else if (inputLowerCase.includes(youtube + channel)) {
            appendAnchor(outputElement, invidious + channel + input.substr(input.lastIndexOf(forwardSlash) + 1));

            // ...Else if inputLowerCase includes YouTube URL, input is treated as YouTube video
        } else if (inputLowerCase.includes(youtube)) {
            appendAnchor(outputElement, invidious + input.substr(input.lastIndexOf(forwardSlash) + 1));

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
    const block = "block";

    if (elementStyle.display === block) {
        elementStyle.display = "none";
    } else {
        elementStyle.display = block;
    }
}