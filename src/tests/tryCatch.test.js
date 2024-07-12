const app = require("../origin/app.js");

describe("try/catch", () => {
  describe.skip("tryWithoutAwaitAndReturn", () => {
    // Uncaught Error > "Error: Reject Error"
    test("one", () => app.aboutTry.tryWithoutAwaitAndReturn.one());
    // Uncaught Error > "tryWithoutAwaitAndReturn in try : Error: Reject Error"
    test("two", () => app.aboutTry.tryWithoutAwaitAndReturn.two());
    // Uncaught Error > "tryWithoutAwaitAndReturn : Error: Reject Error"
    test("three", () => app.aboutTry.tryWithoutAwaitAndReturn.three());
  });

  describe("tryWithAwaitAndNoReturn", () => {
    test("one", () =>
      app.aboutTry.tryWithAwaitAndNoReturn
        .one()
        .catch((error) =>
          expect(error).toBe("tryWithAwaitAndNoReturn: Reject Error")
        ));

    test("two", () =>
      app.aboutTry.tryWithAwaitAndNoReturn
        .two()
        .catch((error) =>
          expect(error).toBe("tryWithAwaitAndNoReturn: Reject Error")
        ));
  });

  test("tryWithReturnAndNoAwait", () =>
    app.aboutTry
      .tryWithReturnAndNoAwait()
      .catch((error) => expect(error).toBe("Reject Error")));

  test("tryWithAwaitAndReturn", () =>
    app.aboutTry
      .tryWithAwaitAndReturn()
      .catch((error) =>
        expect(error).toBe("tryWithAwaitAndReturn : Reject Error")
      ));
});
