[![Build Status](https://dev.azure.com/peterdanis/wrapbox/_apis/build/status/wrapbox-ci?branchName=master)](https://dev.azure.com/peterdanis/wrapbox/_build/latest?definitionId=5)
[![Maintainability](https://api.codeclimate.com/v1/badges/0746b7ce5b2c1fe231de/maintainability)](https://codeclimate.com/github/peterdanis/wrapbox/maintainability)
[![codecov](https://codecov.io/gh/peterdanis/wrapbox/branch/master/graph/badge.svg)](https://codecov.io/gh/peterdanis/wrapbox)

# Wrapbox

Purpose of the project is to have pages you use frequently ready for you in one application. For example opening multiple Sharepoint sites + your online Outlook inbox and calendar + your news agregator + Slack + JIRA each day in work is not fun and they get easily lost in the browser while doing other stuff in it.

App is cross-platform - works on Windows, MacOS and Linux. It is using [Electron](https://www.electronjs.org/), which merges Chromium and Node into one framework.

![image](https://res.cloudinary.com/d3/image/upload/v1580457966/wrapbox_jd6uyg.png)

Versions available (x64 only):
- Windows portable and installer 
- MacOS .dmg and .zip
- Linux AppImage

#### [Download](https://github.com/peterdanis/wrapbox/releases/latest)

 > Note: app is signed only by self-signed certificate, you will have to confirm the installation.

## Contributing

Any contributions (new features, bug fixes, bug report, ideas and others) are welcome. For code contributions please use branch [v2](https://github.com/peterdanis/wrapbox/tree/v2). Rework to newer Electron version, Typescript and React is being done there.

### How to start / build it on your own from the source code

- Clone this repository

```bash
git git clone https://github.com/peterdanis/wrapbox.git
cd wrapbox
```

- Install dependencies

`npm install` or `yarn`

- Build it

`npm run build` or `yarn build`

- Start it

`npm run start` or `yarn start`
