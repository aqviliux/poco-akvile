// Write a function named helloWorld that:
// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages.
//  It should default to returning English.
// Call that function for each of the supported languages and
//  log the result to make sure it works

function helloWorld(langCode) {
    switch (langCode) {
        case "en":
            console.log("Hello world!");
            break;
        case "de":
            console.log("Guten Tag, Welt!");
            break;
        case "lt":
            console.log("Labas pasauli!");
            break;
        case "jp":
            console.log("ハローワールド！");
            break;
        default:
            console.log("Hello world!");
    }
}

helloWorld("de");

//with object

//dictionary
let translations = {
    en: "Hello World!",
    de: "Guten Tag, Welt!",
    lt: "Labas pasauli!",
    jp: "ハローワールド！",
};
function hello(languageCode) {
    var sentence = translations[languageCode];
    if (!sentence) {
        sentence = translations["en"];
    }
    return sentence;
}

var message = prompt(
    "Write language code from en, de, lt, jp and get the translation of Hello World!"
);
var output = hello(message);
alert(`your translation of Hello World! in ${message} language is ${output}`);
