describe("stack trace", () => {
  describe("return Promise", () => {
    test("promise_1 : the wrong code using setTimeout()", () => {
      const a = () =>
        new Promise((resolve, reject) =>
          setTimeout(reject(new Error("promise_1")), 10)
        );
      const b = () => a();
      const c = () => b();

      c().catch(console.error);
    });

    test("promise_2 : misses error stack traces", () => {
      const a = () =>
        new Promise((resolve, reject) =>
          setTimeout(() => reject(new Error("promise_2")), 10)
        );
      const b = () => a();
      const c = () => b();

      c().catch(console.error);
    });

    test("promise_3", () => {
      const a = () => Promise.reject(new Error("promise_3"));
      const b = () => a();
      const c = () => b();

      c().catch(console.error);
    });
  });

  describe("use async/await", () => {
    test("async/await_1", () => {
      const a = async () => {
        throw new Error("async/await_1");
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 10));
      };
      const b = () => a();
      const c = () => b();

      c().catch(console.error);
    });

    test("async/await_2 : misses error stack traces", () => {
      const a = async () => {
        await new Promise((resolve, reject) => setTimeout(() => resolve(), 10));
        throw new Error("async/await_2");
      };
      const b = () => a();
      const c = () => b();

      c().catch(console.error);
    });
  });

  describe("return setTimeout : doesn't catch error at function c", () => {
    test("setTimeout_1", () => {
      const a = () =>
        setTimeout(
          () =>
            Promise.reject(new Error("setTimeout_1")).catch((e) =>
              expect(e.message).toBe("setTimeout_1")
            ),
          10
        );
      const b = () => a();
      const c = () => b();

      c();
    });

    const x = () => {
      try {
        throw new Error("setTimeout_2");
      } catch (e) {
        expect(e.message).toBe("setTimeout_2");
      }
    };

    test("setTimeout_2", () => {
      const a = () => setTimeout(x, 10);
      const b = () => a();
      const c = () => b();

      c();
    });
  });
});
