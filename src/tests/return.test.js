const app = require("../origin/app.js");

describe("return", () => {
  describe("returnError", () => {
    test("apply true to parameter", () =>
      app.aboutReturn
        .returnError(true)
        .then((value) => expect(value).toBe("True from reject"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutReturn.returnError(true, (error) =>
        expect(error).toBeUndefined()
      );
      expect(value).toBe("True from reject");
    });

    test("apply false to parameter", () =>
      app.aboutReturn
        .returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error.message).toBeDefined()));
  });

  describe("then_returnError", () => {
    test("apply true to parameter", () =>
      app.aboutReturn
        .then_returnError(true)
        .then((value) => expect(value).toBe("return : True from reject"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutReturn
        .then_returnError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBe("return : True from reject");
    });

    test("apply false to parameter", () =>
      app.aboutReturn
        .then_returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error.message).toBeDefined()));
  });

  describe("noReturn_returnError", () => {
    test("apply true to parameter", () =>
      app.aboutReturn
        .noReturn_returnError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutReturn
        .noReturn_returnError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () =>
      app.aboutReturn
        .noReturn_returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));
  });

  describe("noReturn_then_returnError", () => {
    test("apply true to parameter", () =>
      app.aboutReturn
        .noReturn_then_returnError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutReturn
        .noReturn_then_returnError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () =>
      app.aboutReturn
        .noReturn_then_returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined()));
  });
});
