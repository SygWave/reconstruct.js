/*
 * Reconstruct social links to privacy-friendly front-ends
 */

function privateRedirect(element) {
    var id = element.id;
    var outputElement = document.getElementById(id + "-output");
    var username = element.value;
    outputElement.innerHTML = "";
    if (!isEmpty(username)) {
        if (id == "bibliogram") {
            outputElement.innerHTML = createLink("https://bibliogram.art/u/" + username);
        } else if (id == "nitter") {
            outputElement.innerHTML = createLink("https://nitter.net/" + username);
        } else if (id == "invidious") {
            // TODO
        }
    } else {
        element.value = "";
    }
}

function isEmpty(str) {
    return str == "" || str === null || /\s/.test(str);
}

function createLink(site) {
    return "<a target='_blank' href='" + site + "'>" + site + "</a>";
}