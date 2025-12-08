import fs from "fs";
import path from "path";

export function writeLog(line: string) {
  try {
    const logPath = path.join(process.cwd(), "logs", "requests.log");

    // Create folder if missing
    fs.mkdirSync(path.dirname(logPath), { recursive: true });

    // Append log line
    fs.appendFileSync(logPath, line + "\n", "utf8");
  } catch (err) {
    console.log(err);
  }
}
