import logger from "./logger";

type logLevels = "error" | "warn" | "info" | "verbose" | "debug" | "silly";

export class AppLogger {
  private static stringify(data: any): string {
    return JSON.stringify(data, this.circularJSONParser);
  }
  private static circularJSONParser(key: any, value: any) {
    const seen = new WeakSet();

    return (function (key, value) {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return "[Circular]";
        }
        seen.add(value);
      }
      return value;
    })(key, value);
  }
  private static log(logLevel: logLevels, message: string, data: any) {
    const stringifiedData = this.stringify(data);
    const logMessage = `${message} | ${stringifiedData}`;
    logger.log(logLevel, logMessage);
  }
  static info(message: string, data: any) {
    this.log("info", message, data);
  }
  static debug(message: string, data: any) {
    this.log("debug", message, data);
  }
  static warn(message: string, data: any) {
    this.log("warn", message, data);
  }
  static error(message: string, data: any) {
    this.log("error", message, data);
  }
}
