
# Code Verify

  

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?color=white)](/LICENSE.md) [![Build status](https://img.shields.io/github/actions/workflow/status/facebookincubator/meta-code-verify/tests.js.yml)](https://github.com/facebookincubator/meta-code-verify/actions/workflows/tests.js.yml) [![Chrome](https://img.shields.io/badge/Chrome-yellow?logo=Google%20Chrome&logoColor=white)](https://chrome.google.com/webstore/detail/code-verify/llohflklppcaghdpehpbklhlfebooeog) [![Edge](https://img.shields.io/badge/Edge-blue?logo=Microsoft%20Edge&logoColor=white)](https://microsoftedge.microsoft.com/addons/detail/code-verify/cpndjjealjjagamdecpipjfamiigaknk) [![Firefox](https://img.shields.io/badge/Firefox-orange?logo=Firefox&logoColor=white)](https://addons.mozilla.org/en-US/firefox/addon/code-verify/) [![Safari](https://img.shields.io/badge/Safari-red?logo=Safari&logoColor=white)](https://apps.apple.com/us/app/code-verify/id6475794471)

  

Code Verify is an extension for verifying the integrity of a web page.

  

The idea is you can publish what JavaScript should appear on your site into a "manifest". The manifest consists of the hashes of all the JavaScript files in a given release. This browser extension can consume the manifest and verify that _only_ that code executes, or else display a warning to the user.

  

This repository however is a modification to the original Code Verify extension to support non-meta websites.

  

## Installation

  

To install this version of Code Verify, the repository needs to be cloned and compiled. The build process requires npm and yarn to be installed prior. After cloning the repository, run the following commands to build the extension into the dist folder.

    yarn install
    yarn build

Now, load the extension from the browser by navigating to the dist subdirectory in the project directory.

  
## Config Changes

Since the Cloudflare audit endpoint used by the original Code Verify extension to retrieve the manifest root hash is not public, we simulated the audit endpoint on a server. To change the URL to the endpoint, look at [getCFRootHash.ts](https://github.com/AadarshSree/code-verify/blob/main/src/js/background/getCFRootHash.ts "getCFRootHash.ts").


  

### License

  

Code Verify is [MIT licensed](./LICENSE.md).
