/** Telegram bot username for the STW reward deep-link. */
export const BOT_USERNAME = "STWgame_bot";

export const ADVENTURE_TOKEN_STORAGE_KEY = "stw-adventure-token";
export const ADVENTURE_ENC_STORAGE_KEY = "stw-adventure-enc";

const TOKEN_PATTERN = /^[A-Za-z0-9_-]{8,40}$/;
const ENC_PATTERN = /^\d{5}$/;

export function parseAdventureToken(value: string | null | undefined): string | null {
  if (!value) return null;
  return TOKEN_PATTERN.test(value) ? value : null;
}

export function parseAdventureEnc(value: string | null | undefined): string | null {
  if (!value) return null;
  return ENC_PATTERN.test(value) ? value : null;
}

function mod10(n: number): number {
  return ((n % 10) + 10) % 10;
}

/** enc[i] = (code[i] + charCode(TOKEN[i % len]) * 7 + i) mod 10 */
export function encodeArchiveCode(token: string, code: string): string {
  if (!ENC_PATTERN.test(code) || !token) {
    throw new Error("encodeArchiveCode: code must be 5 digits");
  }
  let enc = "";
  for (let i = 0; i < 5; i++) {
    const digit = code.charCodeAt(i) - 48;
    const ord = token.charCodeAt(i % token.length);
    enc += String(mod10(digit + ord * 7 + i));
  }
  return enc;
}

/** code[i] = (enc[i] - charCode(TOKEN[i % len]) * 7 - i) mod 10 */
export function decodeArchiveCode(token: string, enc: string): string | null {
  if (!parseAdventureToken(token) || !parseAdventureEnc(enc)) return null;
  let code = "";
  for (let i = 0; i < 5; i++) {
    const encDigit = enc.charCodeAt(i) - 48;
    const ord = token.charCodeAt(i % token.length);
    code += String(mod10(encDigit - ord * 7 - i));
  }
  return code;
}

export function adventureStartUrl(token: string, outcome: "success" | "failure"): string {
  if (outcome === "failure") {
    return `https://t.me/${BOT_USERNAME}?start=adv_${token}_l`;
  }
  return `https://t.me/${BOT_USERNAME}?start=adv_${token}`;
}
