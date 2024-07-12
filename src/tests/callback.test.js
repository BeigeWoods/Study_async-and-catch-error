const app = require("../origin/app.js");

describe("callback", () => {
  describe("callbackError", () => {
    test("apply true to parameter", () =>
      app.aboutCallback
        .callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBe("True from reject")));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutCallback.callbackError(true, (error) =>
        expect(error).toBeUndefined()
      );

      expect(value).toBe("True from reject");
    });

    test("apply false to parameter", () =>
      app.aboutCallback
        .callbackError(false, (error) => expect(error).toBe("Reject Error"))
        .then((value) => expect(value).toBeUndefined()));
  });

  describe("then_callbackError", () => {
    test("apply true to parameter", () =>
      app.aboutCallback
        .then_callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBe("callback : True from reject")));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutCallback.then_callbackError(true, (error) =>
        expect(error).toBeUndefined()
      );

      expect(value).toBe("callback : True from reject");
    });

    test("apply false to parameter", () =>
      app.aboutCallback
        .then_callbackError(false, (error) =>
          expect(error).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined()));
  });

  describe("noReturn_callbackError", () => {
    test("apply true to parameter", () =>
      app.aboutCallback
        .noReturn_callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutCallback.noReturn_callbackError(
        true,
        (error) => expect(error).toBeUndefined()
      );

      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () =>
      app.aboutCallback
        .noReturn_callbackError(false, (error) =>
          expect(error).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined()));
  });

  describe("noReturn_then_callbackError", () => {
    test("apply true to parameter", () =>
      app.aboutCallback
        .noReturn_then_callbackError(true, (error) =>
          expect(error).toBeUndefined()
        )
        .then((value) => expect(value).toBeUndefined()));

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await app.aboutCallback.noReturn_then_callbackError(
        true,
        (error) => expect(error).toBeUndefined()
      );
      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () =>
      app.aboutCallback
        .noReturn_then_callbackError(false, (error) =>
          expect(error).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined()));
  });
});
