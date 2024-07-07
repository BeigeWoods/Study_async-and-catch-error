const Async = require("./index.js");
const classAsync = new Async();

describe("resolveError", () => {
  test("apply true to parameter", () => {
    classAsync
      .resolveError(true)
      .then((value) => expect(value).toBe("True from resolve"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .resolveError(false)
      .then((value) => expect(value.message).toBe("Resolve Error"))
      .catch((error) => expect(error).toBeUndefined());
  });
});

describe("rejectError", () => {
  test("apply true to parameter", () => {
    classAsync
      .rejectError(true)
      .then((value) => expect(value).toBe("True from reject"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .rejectError(false)
      .then((value) => expect(value).toBeUndefined())
      .catch((error) => expect(error.message).toBe("Reject Error"));
  });
});

describe("throwError", () => {
  test("apply true to parameter", () => {
    classAsync
      .throwError(true)
      .then((value) => expect(value).toBe("True from throw"))
      .catch((error) => expect(error).toBeUndefined());
  });

  test("apply false to parameter", () => {
    classAsync
      .throwError(false)
      .then((value) => expect(value).toBeUndefined())
      .catch((error) => expect(error.message).toBe("Throw Error"));
  });
});

describe("about returnError", () => {
  describe("returnError", () => {
    test("apply true to parameter", () => {
      classAsync
        .returnError(true)
        .then((value) => expect(value).toBe("True from reject"))
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync.returnError(true, (error) =>
        expect(error).toBeUndefined()
      );
      expect(value).toBe("True from reject");
    });

    test("apply false to parameter", () => {
      classAsync
        .returnError(false)
        .then((value) => expect(value.message).toBe("Reject Error"))
        .catch((error) => expect(error).toBeUndefined());
    });
  });

  describe("then_returnError", () => {
    test("apply true to parameter", () => {
      classAsync
        .then_returnError(true)
        .then((value) => expect(value).toBe("return : True from reject"))
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync
        .then_returnError(true)
        .catch((error) => expect(error).toBeUndefined());
      expect(value).toBe("return : True from reject");
    });

    test("apply false to parameter", () => {
      classAsync
        .then_returnError(false)
        .then((value) => expect(value.message).toBe("Reject Error"))
        .catch((error) => expect(error).toBeUndefined());
    });
  });

  describe("noReturn_returnError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_returnError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync
        .noReturn_returnError(true)
        .catch((error) => expect(error).toBeUndefined());
      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });
  });

  describe("noReturn_then_returnError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_then_returnError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync
        .noReturn_then_returnError(true)
        .catch((error) => expect(error).toBeUndefined());
      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_then_returnError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });
  });
});

describe("about callbackError", () => {
  describe("callbackError", () => {
    test("apply true to parameter", () => {
      classAsync
        .callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBe("True from reject"));
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync.callbackError(true, (error) =>
        expect(error).toBeUndefined()
      );
      expect(value).toBe("True from reject");
    });

    test("apply false to parameter", () => {
      classAsync
        .callbackError(false, (error) =>
          expect(error.message).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined());
    });
  });

  describe("then_callbackError", () => {
    test("apply true to parameter", () => {
      classAsync
        .then_callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBe("callback : True from reject"));
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync.then_callbackError(true, (error) =>
        expect(error).toBeUndefined()
      );
      expect(value).toBe("callback : True from reject");
    });

    test("apply false to parameter", () => {
      classAsync
        .then_callbackError(false, (error) =>
          expect(error.message).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined());
    });
  });

  describe("noReturn_callbackError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_callbackError(true, (error) => expect(error).toBeUndefined())
        .then((value) => expect(value).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync.noReturn_callbackError(true, (error) =>
        expect(error).toBeUndefined()
      );
      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_callbackError(false, (error) =>
          expect(error.message).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined());
    });
  });

  describe("noReturn_then_callbackError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_then_callbackError(true, (error) =>
          expect(error).toBeUndefined()
        )
        .then((value) => expect(value).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync.noReturn_then_callbackError(
        true,
        (error) => expect(error).toBeUndefined()
      );
      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_then_callbackError(false, (error) =>
          expect(error.message).toBe("Reject Error")
        )
        .then((value) => expect(value).toBeUndefined());
    });
  });
});

describe("about throwExtraError", () => {
  describe("throwExtraError", () => {
    test("apply true to parameter", () => {
      classAsync
        .throwExtraError(true)
        .then((value) => expect(value).toBe("True from reject"))
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply false to parameter", () => {
      classAsync
        .throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        );
    });
  });

  describe("then_throwExtraError", () => {
    test("apply true to parameter", () => {
      classAsync
        .then_throwExtraError(true)
        .then((value) => expect(value).toBe("extra : True from reject"))
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync
        .then_throwExtraError(true)
        .catch((error) => expect(error).toBeUndefined());
      expect(value).toBe("extra : True from reject");
    });

    test("apply false to parameter", () => {
      classAsync
        .then_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        );
    });
  });

  describe("noReturn_throwExtraError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_throwExtraError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        );
    });
  });

  describe("noReturn_then_throwExtraError", () => {
    test("apply true to parameter", () => {
      classAsync
        .noReturn_then_throwExtraError(true)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) => expect(error).toBeUndefined());
    });

    test("apply true to parameter and put the value into a variable", async () => {
      const value = await classAsync
        .noReturn_then_throwExtraError(true)
        .catch((error) => expect(error).toBeUndefined());

      expect(value).toBeUndefined();
    });

    test("apply false to parameter", () => {
      classAsync
        .noReturn_then_throwExtraError(false)
        .then((value) => expect(value).toBeUndefined())
        .catch((error) =>
          expect(error.message).toBe("Extra Error : Reject Error")
        );
    });
  });
});

describe("about throwExpression", () => {
  test("apply false to parameter", () => {
    classAsync
      .throwExpression(false)
      .catch((error) => expect(error).toBe("Expression Error : Reject Error"));
  });
});

describe("about insertIntoVarWithNocatch", () => {
  test("apply true to parameter", () => {
    classAsync
      .insertIntoVarWithNocatch(true)
      .then((value) => expect(value).toBe(true));
  });

  test("apply false to parameter", () => {
    classAsync
      .insertIntoVarWithNocatch(false)
      .catch((error) => expect(error.message).toBe("Throw Error"));
  });
});
