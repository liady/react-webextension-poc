# WebExtension React Example - POC
A minimal example to demonstrate the 'window vs this' [issue](https://github.com/facebook/react/issues/16606).

Run `npm run build` to build the WebExtension.

In Firefox:
1. type `about:debugging`
2. Click 'Load Temporary Add-On'
3. Point to the [Manifest File](addon/manifest.json)
4. Browse to https://reactjs.org/docs/getting-started.html and open the console.

Follow the instructions [here](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing) if running into a problem.

Note: This will run on sites with this rule: `*://*.reactjs.org/*`. You can change it in [manifest.json](addon/manifest.json).
