import Pino from "pino";
import PinoHTTP from "pino-http";

let options = {
//   prettyPrint: {
//     ignore: "pid,hostname,time",
//   },
};
let instance = Pino(options);
export let httpLogger = PinoHTTP({
  ...options,
});

export default instance;
