import { DateTime } from "luxon";

export function isTokenExpired(expiresAtString: string) {
    const expiresAt = DateTime.fromISO(expiresAtString);
    const now = DateTime.now();
    return expiresAt <= now;
  }