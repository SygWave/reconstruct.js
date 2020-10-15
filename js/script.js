/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function reconstruct() {
    let outputElement = document.getElementById("output");
    let input = document.getElementById("input").value;

    // If input isNotEmpty
    if (isNotEmpty(input)) {
        const instagram = "instagram";
        const twitter = "twitter";
        const youtube = "youtube";
        const com = ".com/";
        let platform = input.split(com)[0];
        let platformLowerCase = platform.toLowerCase();
        let subdirectory = input.split(com)[1];
        let key = input.split(platform + com)[1];

        // Instagram -> Bibliogram
        // If platformLowerCase.includes(instagram) and subdirectory.includes("p/") input is treated as Instagram profile...
        if (platformLowerCase.includes(instagram) && subdirectory.includes("p/")) {
            appendAnchor(outputElement, "https://bibliogram.art/" + key);
            // ...Else if platformLowerCase.includes(instagram) input is treated as Instagram post
        } else if (platformLowerCase.includes(instagram)) { // 
            appendAnchor(outputElement, "https://bibliogram.art/u/" + key);

            // Twitter -> Nitter
            // Else if platformLowerCase.includes(twitter) input is treated as Twitter profile or tweet
        } else if (platformLowerCase.includes(twitter)) {
            appendAnchor(outputElement, "https://nitter.net/" + key);

            // YouTube -> Invidious
            // Else if platformLowerCase.includes(youtube) input is treated as YouTube channel or video
        } else if (platformLowerCase.includes(youtube)) {
            appendAnchor(outputElement, "https://invidious.site/" + key);

            // Else reset()
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
    let newAnchor = document.createElement("a");

    newAnchor.id = "new-anchor";
    newAnchor.innerText = link;
    newAnchor.href = link;
    newAnchor.target = "_blank";

    removeChildren(element);
    element.append(newAnchor);
}

// Set value of input element to empty String and removeChildren()
function reset() {
    document.getElementById("input").value = "";
    removeChildren(document.getElementById("output"));
}

// Remove anchor elements from passed-in element
function removeChildren(element) {
    for (let childNode of element.childNodes) {
        if (childNode.id === "new-anchor") {
            element.removeChild(childNode);
        }
    }
}

// Show or hide instructions
function help(id) {
    let elementStyle = document.getElementById(id).style;

    if (elementStyle.display === "block") {
        elementStyle.display = "none";
    } else {
        elementStyle.display = "block";
    }
}