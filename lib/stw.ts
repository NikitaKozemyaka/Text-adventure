/** Telegram bot username for the STW reward deep-link. */
export const BOT_USERNAME = "STWgame_bot";

export const ADVENTURE_TOKEN_STORAGE_KEY = "stw-adventure-token";

const TOKEN_PATTERN = /^[A-Za-z0-9_-]{8,40}$/;

export function parseAdventureToken(value: string | null | undefined): string | null {
  if (!value) return null;
  return TOKEN_PATTERN.test(value) ? value : null;
}

export function adventureStartUrl(token: string, outcome: "success" | "failure"): string {
  const suffix = outcome === "success" ? "w" : "l";
  return `https://t.me/${BOT_USERNAME}?start=adv_${token}_${suffix}`;
}
