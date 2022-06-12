const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emo) => {
  const c = (await promiseTheaterIXX()).concat(await promiseTheaterVGC());
  return new Promise((r) => {
    r(c.filter((x) => x.hasil == emo).length);
  });
};

module.exports = {
  promiseOutput,
};
