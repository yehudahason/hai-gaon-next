import { NextResponse } from "next/server";
import { writeLog } from "./utils/loggers";

export function proxy(req: Request) {
  const ip =
    req.headers.get("CF-Connecting-IP") ||
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  const ua = req.headers.get("user-agent") || "unknown";
  const method = req.method;
  const url = req.url;

  const line = `[${new Date().toLocaleString("he-IL", {
    timeZone: "Asia/Jerusalem",
  })}] IP: ${ip} | ${method} ${url} | UA: ${ua}`;

  writeLog(line);

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
