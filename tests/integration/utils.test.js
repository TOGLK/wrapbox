const { loadSettings, settings } = require("../../app/scripts/utils");
const os = require("os");
const path = require("path");

jest.mock("electron", () => require("../mocks/electron"));
jest.mock("electron-log", () => require("../mocks/electron-log"));
jest.unmock("fs");

describe("Function loadSettings", () => {
  test("Should load default settings if no config file exists", () => {
    const assertSettings = {
      filePath: path.join(
        os.tmpdir(),
        "jest_wrapbox",
        __filename
          .split(path.sep)
          .slice(-2)
          .join(path.sep),
        "userData",
        "config.json"
      ),
      windowButtonsPosition: "right",
      startMaximized: false,
      windowWidth: 1200,
      windowHeight: 700,
      backgroundColor: "#E0E0E0",
      webviews: [],
    };
    expect(loadSettings());
    expect(settings).toEqual(assertSettings);
  });
});
