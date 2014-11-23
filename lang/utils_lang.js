
 var lang;
 var languages = ["en", "heb"];
 var def = "en"; // default language

  function buildAllLanguages() { // Takes the language files & builds them into an object
   var ret = new Object();
   for (var i = 0; i < languages.length; i++) {
     var clIndex = languages[i]; // Current language index: Language identifier string, e.g. "en_gb"
     var clValue = this[clIndex]; // Current language value. Look for a global by the name clIndex, e.g. this["en_gb"]
     ret[clIndex] = clValue; // Append this to our return object with the clIndex as the array key, e.g. ret[en_gb] = clValue;
   }
   return ret;
 }

  function updateLanguage(l) {
   var newLanguage = lang[l]; // Look up the required language in our global
   for (id in newLanguage) { // Iterate over key and value pairs
     if (newLanguage.hasOwnProperty(id)) {
       $("#" + id).html(newLanguage[id]);
     }
   }
 }

  function initLanguages() {
   lang = buildAllLanguages(); // Set the global variable to our built languages
   updateLanguage(def); // Update the language for the first time to our default
 }
