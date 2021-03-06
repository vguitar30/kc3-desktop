## KC3改 Desktop [![Build Status](https://travis-ci.org/KC3Kai/kc3-desktop.svg?branch=master)](https://travis-ci.org/KC3Kai/kc3-desktop)
Desktop port of KC3改 for the horde who had been bugging me for it.

This is a very early expriment and still cannot be used to play the game, but you can check that it is already receiving network traffic as data is shown in a green box below the screen. The window will only show DMM page for now, and without cookies at the moment, will probably error Area, or show nutaku page. The base64-encoded responses are images or any other media. We haven't put a filter at the moment and will show all network responses.

### How to build

#### Tools
* (required) Adobe Flash in **PPAPI**.
 * This is different from your Chromium built-in PepperFlash
 * This is different from your Firefox Adobe Flash installer
 * Should have this in your programs list: [(see this imgur)](http://i.imgur.com/bIA2SGt.png)
   * If you see NPAPI, that's the Firefox one, that's different
 * [Install PPAPI Flash Player here](https://get.adobe.com/flashplayer/otherversions/)
  * Which flash to install: [(see this imgur)](http://i.imgur.com/caWeoYU.png)
* (required) `npm`. [Install NodeJS](https://nodejs.org/en/).
* (otpional) `git`. To clone this repo and contribute or just get updates easily by doing `pull`.
* (optional) [nwjs](http://nwjs.io). If you're doing *Option 1*, you need it. If *Option 2*, no need.


#### Option 1: Manual
* Clone this repo into your machine / or Download the repository ZIP
* Download and extract latest [nwjs](http://nwjs.io) (>0.13.5-beta5)
 * if you're developing, get the SDK version
 * if just testing, get NORMAL version
* Go to project directory, and install node modules
 * `npm i`
 * `cd src && npm i `
* To run the app, either
 * with the terminal/console in the project directory, `/path/to/nw ./src`
   * `/path/to/nw` is the binary file of NW.js. On Windows, it’s `nw.exe`, On Linux, it’s `nw`; On Mac, it’s `nwjs.app/Contents/MacOS/nwjs`
 * OR on windows, drag the project folder into `nw.exe`
 * Further Reading: [Getting Started with NW.js](http://docs.nwjs.io/en/v0.13.0-beta5/For%20Users/Getting%20Started/)


#### Option 2: `nw-builder`
Not yet recommended since nw-builder is having problems with latest 0.13 versions. Unless you specify 0.12 in the command args.
* Clone this repo into your machine / or Download the repository ZIP
* `npm install -g nw-builder`
* Go to project directory, and install node modules
 * `npm i`
 * `cd src && npm i `
* `nwbuild -p <PLATFORM_HERE> -v 0.12.3 ./src`
 * `<PLATFORM_HERE>` possible values: `win32`,`win64`,`osx32`,`osx64`,`linux32`,`linux64`

#### Option 3: Download
* Check the releases tab if we uploaded anything yet.
