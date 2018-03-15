const addWebviewButtons = require("./add-webview-buttons");
const addWebviews = require("./add-webviews");
const addWindowButtons = require("./add-window-buttons");
const EventEmitter = require("events");
const PerfectScrollbar = require("../dependencies/perfect-scrollbar.common");
const setUpSettingsPage = require("./set-up-settings-page");
const { remote } = require("electron"); // eslint-disable-line
const utils = remote.require("./scripts/utils");

// Event aggregator. Passed to functions as argument.
const watcher = new EventEmitter();
watcher.setMaxListeners(0);

// Main function running all sub-tasks.
function start() {
  // Do not display control buttons on MacOS, it has own inset buttons
  if (process.platform !== "darwin") {
    addWindowButtons("#titlebar", utils.settings.windowButtonsPosition);
  }

  // Insert settings webview, for addWebviews function call
  const webviews = utils.settings.webviews.concat([{ url: "../pages/settings.html" }]);

  addWebviews("#content", webviews, watcher);
  addWebviewButtons("#leftpanel", utils.settings.webviews, watcher);
  setUpSettingsPage(watcher);

  // Add a custom scrollbar to leftpanel (panel with webview buttons)
  // eslint-disable-next-line no-new
  new PerfectScrollbar("#leftpanel");

  window.onbeforeunload = () => {
    const webContents = remote.getGlobal("registeredWebContents");
    setImmediate(() => {
      webContents.forEach((element) => {
        try {
          element.executeJavaScript("window.close()").then(() => {
            // window.close()
          });
        } catch (error) {
          //
        }
      });
    });

    return Array.from(document.querySelectorAll("webview")).find(el => el.id);
  };
}

// Start the main function when the page is ready.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    start();
  });
} else {
  start();
}
