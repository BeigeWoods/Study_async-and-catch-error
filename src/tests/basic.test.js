const basic = require("../origin/basic.js");

describe("basic", () => {
  describe("resolveError", () => {
    test("apply true to parameter", () =>
      basic
        .resolveError(true)
        .then((value) => expect(value).toBe("True from resolve"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply false to parameter", () =>
      basic
        .resolveError(false)
        .then((value) => expect(value.message).toBe("Resolve Error"))
        .catch((error) => expect(error).toBeUndefined()));
  });

  describe("rejectError", () => {
    test("apply true to parameter", () =>
      basic
        .rejectError(true)
        .then((value) => expect(value).toBe("True from reject"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply false to parameter", () =>
      basic
        .rejectError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBe("Reject Error")));

    // Uncaugth Error : Error: Reject Error
    test.skip("apply false to parameter and use try/catch without await", () => {
      try {
        basic.rejectError(false);
      } catch (error) {
        expect(error).toBe("Reject Error");
      }
    });

    test("apply false to parameter and use try/catch with await", async () => {
      try {
        await basic.rejectError(false);
      } catch (error) {
        expect(error).toBe("Reject Error");
      }
    });
  });

  describe("throwError", () => {
    test("apply true to parameter", () =>
      basic
        .throwError(true)
        .then((value) => expect(value).toBe("True from throw"))
        .catch((error) => expect(error).toBeUndefined()));

    test("apply false to parameter", () =>
      basic
        .throwError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBe("Throw Error")));

    // Uncaugth Error : Error: Throw Error
    test.skip("apply false to parameter and use try/catch without await", () => {
      try {
        basic.throwError(false);
      } catch (error) {
        expect(error).toBe("Throw Error");
      }
    });

    test("apply false to parameter and use try/catch with await", async () => {
      try {
        await basic.throwError(false);
      } catch (error) {
        expect(error).toBe("Throw Error");
      }
    });
  });

  describe("try/catch", () => {
    describe.skip("rejectError : occur uncaugth error 'Try Reject Error'", () => {
      test("use nothing", () =>
        basic.try
          .rejectError()
          .catch((error) => expect(error).toBeUndefined()));

      test("use async/await", async () =>
        await basic.try
          .rejectError()
          .catch((error) => expect(error).toBeUndefined()));

      test("use try/catch", async () => {
        try {
          await basic.try.rejectError();
        } catch (error) {
          expect(error).toBeUndefined();
        }
      });
    });

    test("awaitRejectError", () =>
      basic.try
        .awaitRejectError()
        .catch((error) =>
          expect(error).toBe("Catch error it's own : Try Reject Error")
        ));

    test("returnRejectError", () =>
      basic.try.returnRejectError().catch((error) => {
        expect(error).toBe("Try Reject Error");
        expect(error).not.toBe("Catch error it's own : Try Reject Error");
      }));

    test("returnAwaitRejectError", () =>
      basic.try.returnAwaitRejectError().catch((error) => {
        expect(error).not.toBe("Try Reject Error");
        expect(error).toBe("Catch error it's own : Try Reject Error");
      }));
  });

  describe("Promise.all", () => {
    describe("about rejectError", () => {
      test.skip("will occur jest error > thrown: 'Reject Error'", async () =>
        Promise.all([
          await basic.rejectError(true),
          await basic.rejectError(false),
        ]).catch((error) => expect(error).toBe("Reject Error")));

      test("Promise.all doesn't catch error", async () =>
        Promise.all([
          await basic.rejectError(true),
          await basic
            .rejectError(false)
            .catch((error) => expect(error).toBe("Reject Error")),
        ]).catch((error) => expect(error).toBeUndefined()));

      test.skip("will occur jest error > thrown: 'Wish to catch it : Reject Error'", async () =>
        Promise.all([
          await basic.rejectError(true),
          await basic.rejectError(false).catch((error) => {
            throw `Wish to catch it : ${error}`;
          }),
        ]).catch((error) =>
          expect(error).toBe("Wish to catch it : Reject Error")
        ));

      test("Promise.all catch error when return error", async () =>
        Promise.all([
          await basic.rejectError(true),
          await basic
            .rejectError(false)
            .catch((error) => `Wish to catch it : ${error}`),
        ]).catch((error) =>
          expect(error).toBe("Wish to catch it : Reject Error")
        ));
    });
  });

  describe("about throwError", () => {
    test.skip("will occur jest error > thrown: 'Throw Error'", async () =>
      Promise.all([
        await basic.throwError(true),
        await basic.throwError(false),
      ]).catch((error) => expect(error).toBe("Throw Error")));

    test("Promise.all doesn't catch error", async () =>
      Promise.all([
        await basic.throwError(true),
        await basic
          .throwError(false)
          .catch((error) => expect(error).toBe("Throw Error")),
      ]).catch((error) => expect(error).toBeUndefined()));

    test.skip("will occur jest error > thrown: 'Wish to catch it : Throw Error'", async () =>
      Promise.all([
        await basic.throwError(true),
        await basic.throwError(false).catch((error) => {
          throw `Wish to catch it : ${error}`;
        }),
      ]).catch((error) =>
        expect(error).toBe("Wish to catch it : Throw Error")
      ));

    test("Promise.all catch error when return error", async () =>
      Promise.all([
        await basic.throwError(true),
        await basic
          .throwError(false)
          .catch((error) => `Wish to catch it : ${error}`),
      ]).catch((error) =>
        expect(error).toBe("Wish to catch it : Throw Error")
      ));
  });
});
