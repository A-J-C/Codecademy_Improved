# Codecademy Improved

## Version History
- `0.1` Release - Initial set up
- `1.0` Next release - see [**Milestone V1**](https://github.com/A-J-C/Codecademy_Improved/milestones)

## Features

Codecademy Improved makes your experience on Codecademy much better with the following features: 

- None currently

Enjoy the improvements, we plan on adding many more :)

## Contributing

To contribute please do the following:

- Pick an issue from the [**Project Board**](https://github.com/A-J-C/Codecademy_Improved/projects/1)
- Create a new feature branch titled with your `username__issueNumber` (i.e. `a-j-c_#1`)
- Add any resources to `/resources`
- Pick your appropriate folder out of `/catalog`, `/learn`, `/lesson`,`/profiles page`
- **Either** (if they are small changes):
    - Create a new appropriately named function in `main.js` and call it from the main `XXXUpdater` function
    - Add changes to `main.css` with appropriate comments as to what it changes 
- **Or** (if it is a large change):
    - Create a new file `featureName.js` under the correct folder
    - Create a new file `featureName.css` under the correct folder
    - Add your files to the relevant `content-script` in the `manifest.json`
 - When you are happy with your new feature create a pull request into the branch `development_VersionNumber`
 - Once enough features have been added `development_VersionNumber` will be merged into `master` and a new extension created
 - When a new version is ready to be released the code will be minimised and released
 
 ## Quick Links
 
 [The Extension](https://chrome.google.com/webstore/detail/codecademy-improved/dbkmccgeodbcnhdeahjhjiobnfgffdmd)
 
 [Google Developer Guide](https://developer.chrome.com/extensions/getstarted)
 
 [Project Board](https://github.com/A-J-C/Codecademy_Improved/projects/1)
 
 [Codecademy](https://www.codecademy.com/learn)
 
 ## Quick Set Up
 
 1) Clone this repo into a folder on your computer
 2) Open Chrome 
 3) Go to Extensions
 4) Toggle Developer Mode
 5) Click load unpacked extension
 6) Select the folder you cloned into
 7) Check it works by going [here](https://www.codecademy.com/learn) and looking for a link to `Codecademy_Improved Extension` at the bottom
 8) Follow Contributing steps
 9) Click the refresh wheel under extensions
 10) See your changes take effect

## Releasing a Extension

1) Ensure everything you want is pulled into `development_VersionNumber`
2) Ensure you have `npm` and `node` on your computer
3) Ensure the `manifest.json` has an updated version number.
4) Run `npm start` - this will create a minified folder, zip it and delete the original folder, using `gulp`
5) Upload zip file to the `Chrome Developer Dashboard`