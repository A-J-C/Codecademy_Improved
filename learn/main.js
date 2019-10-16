/****************
 * Name: learn/main.js
 * Version: 0.1.1
 * Purpose: main changes to the learn page of CC
 *
 * History:
 * 16/10/19 - a-j-c - 0.1.1 - add in test function
 * 11/10/19 - a-j-c - 0.1 - initial setup
 *
 ****************/

/* main caller function we use */
function learnUpdater() {

	// call your functions here
    addExtensionURL();
	return true;
}

/* Author - alexjc
   Purpose - add in a URL to our GitHub to test it is working */
function addExtensionURL() {
    let toAdd = "<span style='margin-right:6px;font-size:1rem;'>|</span>" +
                "<a href='https://github.com/A-J-C/Codecademy_Improved'>Codecademy_Improved Extension</a>";

    $(".legalLinks__15oguwSH9xMtUWyzrt11tz").append(toAdd);
}

/* just in case, we don't want to crash their browser */
try {
	learnUpdater();
} catch (e) {
    console.log(e);
}