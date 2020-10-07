/*
 * Reconstruct social links to privacy-friendly front-ends
 */

// Driver function
function privateRedirect(element) {
    var id = element.id;
    var outputElement = document.getElementById(id + "-output");
    var input = element.value;

    outputElement.innerHTML = "";

    /*
    * If input isNotEmpty, converts Instagram links to Bibliogram and/or converts Twitter links to nitter
    * If bibliogram input contains key, the input is treated as a post, otherwise its treated as a username
    * If nitter input contains key, the input is treated as a tweet, otherwise its treated as a username
    */
    if (isNotEmpty(input)) {
        if (id == "bibliogram") {
            var bibliogram = "https://bibliogram.art/";
            var key = "p/";
            if (input.includes(key)) {
                outputElement.innerHTML = createLink(bibliogram + key + input.split(key)[1]);
            } else {
                outputElement.innerHTML = createLink(bibliogram + "u/" + input);
            }
        } else if (id == "nitter") {
            var nitter = "https://nitter.net/"
            var key = "twitter.com/";
            if (input.includes(key)) {
                outputElement.innerHTML = createLink(nitter + input.split(key)[1]);
            } else {
                outputElement.innerHTML = createLink(nitter + input);
            }
        }
    } else {
        reset(element);
    }
}

// Returns True if passed-in str is not empty, null, or contains any spaces, tabs, etc.
function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

// Returns <a> element for passed-in site
function createLink(site) {
    return "<a target='_blank' href='" + site + "'>" + site + "</a>";
}

// Sets value of passed-in element and inner HTML of its according output element to empty space
function reset(element) {
    element.value = "";
    document.getElementById(element.id + "-output").innerHTML = "";
}