# electron-nanodev

**Clone and run for a quick way to see an Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start) within the Electron documentation.

This has been modified slightly for the NanoDev project, it's basically an experiment to see what Web technologies might help us for future GUI development.

Not much to show right now: it only draws a green box in a `<canvas>` element, then calls out to the AVT VimbaC.dll library.  (see console in DevTools for log output)


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer.

After nodejs has been installed, from your command line (e.g. in GitShell):

```bash
# Clone this repository (ideally next to ThirdParty)
$ git clone https://github.com/MattCurry-Nano/electron_nanodev
# Clone ThirdParty next to it (if not already cloned)
$ git clone https://github.com/Nanotronics/ThirdParty
# Go into the repository
$ cd electron-nanodev
# Install dependencies
$ npm install
# Run tests
$ npm tests
# Run app
$ npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)
