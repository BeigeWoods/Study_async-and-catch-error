const basic = require("./basic.js");

const app = {
  aboutReturn: {
    async returnError(bool) {
      return await basic.rejectError(bool).catch((error) => error);
    },
    async then_returnError(bool) {
      return await basic
        .rejectError(bool)
        .then((value) => `return : ${value}`)
        .catch((error) => error);
    },
    async noReturn_returnError(bool) {
      await basic.rejectError(bool).catch((error) => error);
    },
    async noReturn_then_returnError(bool) {
      await basic
        .rejectError(bool)
        .then((value) => `return : ${value}`)
        .catch((error) => error);
    },
  },

  aboutCallback: {
    async callbackError(bool, callback) {
      return await basic.rejectError(bool).catch((error) => callback(error));
    },
    async then_callbackError(bool, callback) {
      return await basic
        .rejectError(bool)
        .then((value) => `callback : ${value}`)
        .catch((error) => callback(error));
    },
    async noReturn_callbackError(bool, callback) {
      await basic.rejectError(bool).catch((error) => callback(error));
    },
    async noReturn_then_callbackError(bool, callback) {
      await basic
        .rejectError(bool)
        .then((value) => `callback : ${value}`)
        .catch((error) => callback(error));
    },
  },

  aboutThrowExtra: {
    async throwExtraError(bool) {
      return await basic.rejectError(bool).catch((error) => {
        throw new Error(`Extra Error : ${error}`);
      });
    },
    async then_throwExtraError(bool) {
      return await basic
        .rejectError(bool)
        .then((value) => `extra : ${value}`)
        .catch((error) => {
          throw new Error(`Extra Error : ${error}`);
        });
    },
    async noReturn_throwExtraError(bool) {
      await basic.rejectError(bool).catch((error) => {
        throw new Error(`Extra Error : ${error}`);
      });
    },
    async noReturn_then_throwExtraError(bool) {
      await basic
        .rejectError(bool)
        .then((value) => `extra : ${value}`)
        .catch((error) => {
          throw new Error(`Extra Error : ${error}`);
        });
    },
    async throwExpression(bool) {
      return await basic.rejectError(bool).catch((error) => {
        throw `Expression Error : ${error}`;
      });
    },
  },

  async insertIntoVarWithNocatch(bool) {
    const result = await basic.throwError(bool);
    if (result) return true;
  },

  aboutTry: {
    tryWithoutAwaitAndReturn: {
      async one() {
        try {
          basic.rejectError(false);
        } catch (error) {
          throw `tryWithoutAwaitAndReturn : ${error}`;
        }
      },
      async two() {
        try {
          basic.rejectError(false).catch((error) => {
            throw `tryWithoutAwaitAndReturn in try : ${error}`;
          });
        } catch (error) {
          throw `tryWithoutAwaitAndReturn in catch : ${error}`;
        }
      },
      async three() {
        basic.rejectError(false).catch((error) => {
          throw `tryWithoutAwaitAndReturn : ${error}`;
        });
      },
    },
    tryWithAwaitAndNoReturn: {
      async one() {
        try {
          await basic.rejectError(false);
        } catch (error) {
          throw `tryWithAwaitAndNoReturn: ${error}`;
        }
      },
      async two() {
        await basic.rejectError(false).catch((error) => {
          throw `tryWithAwaitAndNoReturn: ${error}`;
        });
      },
    },
    async tryWithReturnAndNoAwait() {
      try {
        return basic.rejectError(false);
      } catch (error) {
        throw `tryWithReturnAndNoAwait : ${error}`;
      }
    },
    async tryWithAwaitAndReturn() {
      try {
        return await basic.rejectError(false);
      } catch (error) {
        throw `tryWithAwaitAndReturn : ${error}`;
      }
    },
  },
};

module.exports = app;
