const app = require("../origin/app.js");

describe("throwExtra", () => {
  describe("throwExtraError", () => {
    test("apply true to parameter", () =>
      app.aboutThrowExtra
        .throwExtraError(true)
        .then((value) => expect(value).toBe("True from reject"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply false to parameter", () =>
      app.aboutThrowExtra
        .throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        ));
  });

  describe("then_throwExtraError", () => {
    test("apply true to parameter", () =>
      app.aboutThrowExtra
        .then_throwExtraError(true)
        .then((value) => expect(value).toBe("extra : True from reject"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutThrowExtra
        .then_throwExtraError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBe("extra : True from reject");
    });

    test("apply false to parameter", () =>
      app.aboutThrowExtra
        .then_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        ));
  });

  describe("noReturn_throwExtraError", () => {
    test("apply true to parameter", () =>
      app.aboutThrowExtra
        .noReturn_throwExtraError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));

    test("apply false to parameter", () =>
      app.aboutThrowExtra
        .noReturn_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        ));
  });

  describe("noReturn_then_throwExtraError", () => {
    test("apply true to parameter", () =>
      app.aboutThrowExtra
        .noReturn_then_throwExtraError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutThrowExtra
        .noReturn_then_throwExtraError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () =>
      app.aboutThrowExtra
        .noReturn_then_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        ));
  });

  describe("about throwExpression", () => {
    test("apply false to parameter", () =>
      app.aboutThrowExtra
        .throwExpression(false)
        .catch((error) =>
          expect(error).toBe("Expression Error : Reject Error")
        ));
  });
});
