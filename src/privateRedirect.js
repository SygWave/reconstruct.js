/*
 * Reconstruct social links to privacy-friendly front-ends
 */

function privateRedirect(element) {
    var id = element.id;
    var outputElement = document.getElementById(id + "-output");
    var input = element.value;
    outputElement.innerHTML = "";
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

function isNotEmpty(str) {
    return !(str == "" || str === null || /\s/.test(str));
}

function createLink(site) {
    return "<a target='_blank' href='" + site + "'>" + site + "</a>";
}

function reset(element) {
    element.value = "";
    document.getElementById(element.id + "-output").innerHTML = "";
}