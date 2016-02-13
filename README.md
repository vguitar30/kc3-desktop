## FleetCommandFacility
Desktop port of KC3改 for the horde who had been bugging me for it

### How to build

#### Option 1: Manual
* Clone this repo into your machine
* Download and extract latest nwjs (>0.13.5-beta5)
 * if you're developing, get the SDK version
 * if just testing, get NORMAL version
* Run the app
 * `cd /path/to/your/app /path/to/nw .`

`/path/to/nw` is the binary file of NW.js. On Windows, it’s `nw.exe`, On Linux, it’s `nw`; On Mac, it’s `nwjs.app/Contents/MacOS/nwjs`. Further Reading: [Getting Started with NW.js](http://docs.nwjs.io/en/v0.13.0-beta5/For%20Users/Getting%20Started/)

#### Option 2: `nw-builder`
Not yet recommended since nw-builder is having problems with latest 0.13 versions.
* `npm install -g nw-builder`
* `nwbuild -p <PLATFORM_HERE> /path/to/your/app`
 * `<PLATFORM_HERE>` possible values: `win32`,`win64`,`osx32`,`osx64`,`linux32`,`linux64`
