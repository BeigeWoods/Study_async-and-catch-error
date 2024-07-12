const app = require("../origin/app.js");

describe("variable", () => {
  test("apply true to parameter", () =>
    app
      .insertIntoVarWithNocatch(true)
      .then((value) => expect(value).toBe(true)));

  test("apply false to parameter", () =>
    app
      .insertIntoVarWithNocatch(false)
      .catch((error) => expect(error).toBe("Throw Error")));
});
