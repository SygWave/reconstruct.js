/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function privateRedirect(element) {
    var id = element.id;
    var outputElement = document.getElementById(id + "-output");
    var input = element.value;

    outputElement.innerText = "";

    /*
     * If input isNotEmpty, converts Instagram links to Bibliogram or converts Twitter links to nitter
     * If Bibliogram input.includes(key) input is treated as a post, else treated as a username
     * If nitter input.includes(key)  input is treated as a tweet, else treated as a username
     */
    if (isNotEmpty(input)) {
        if (id == "bibliogram") {
            var bibliogram = "https://bibliogram.art/";
            var key = "p/";
            if (input.includes(key)) {
                outputElement.innerText = bibliogram + key + input.split(key)[1];
            } else {
                outputElement.innerText = bibliogram + "u/" + input;
            }
        } else if (id == "nitter") {
            var nitter = "https://nitter.net/"
            var key = "twitter.com/";
            if (input.includes(key)) {
                outputElement.innerText = nitter + input.split(key)[1];
            } else {
                outputElement.innerText = nitter + input;
            }
        }
    } else {
        reset(element);
    }
}

// Returns True if passed-in str is not empty, null, nor contains any spaces, tabs, etc.
function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

// Sets value of passed-in element and innerText of its according output element to empty String
function reset(element) {
    element.value = "";
    document.getElementById(element.id + "-output").innerText = "";
}