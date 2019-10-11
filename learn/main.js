/****************
 * Name: learn/main.js
 * Version: 0.1
 * Purpose: main changes to the learn page of CC
 *
 * History:
 * 11/10/19 - alexjc - 0.1 - initial setup
 *
 ****************/

/* main caller function we use */
function learnUpdater() {

	// call your functions here

	return true;
}

/* just in case, we don't want to crash their browser */
try {
	learnUpdater();
} catch (e) {
    console.log(e);
}