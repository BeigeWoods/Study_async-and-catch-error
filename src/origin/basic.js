const basic = {
  async resolveError(isTrue) {
    return isTrue
      ? Promise.resolve("True from resolve")
      : Promise.resolve(new Error("Resolve Error"));
  },
  async rejectError(isTrue) {
    return isTrue
      ? Promise.resolve("True from reject")
      : Promise.reject("Reject Error");
  },
  async throwError(isTrue) {
    if (isTrue) {
      return Promise.resolve("True from throw");
    } else {
      throw "Throw Error";
    }
  },
  try: {
    async rejectError() {
      try {
        Promise.reject("Try Reject Error");
      } catch (error) {
        throw `Catch error it's own : ${error}`;
      }
    },
    async awaitRejectError() {
      try {
        await Promise.reject("Try Reject Error");
      } catch (error) {
        throw `Catch error it's own : ${error}`;
      }
    },
    async returnRejectError() {
      try {
        return Promise.reject("Try Reject Error");
      } catch (error) {
        throw `Catch error it's own : ${error}`;
      }
    },
    async returnAwaitRejectError() {
      try {
        return await Promise.reject("Try Reject Error");
      } catch (error) {
        throw `Catch error it's own : ${error}`;
      }
    },
  },
};

module.exports = basic;
