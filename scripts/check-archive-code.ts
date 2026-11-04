import { decodeArchiveCode, encodeArchiveCode } from "../lib/stw";

const token = "abcdefgh";
const code = "14827";
const enc = encodeArchiveCode(token, code);
const decoded = decodeArchiveCode(token, enc);

if (enc !== "01358") {
  console.error(`encode mismatch: got ${enc}, expected 01358`);
  process.exit(1);
}
if (decoded !== code) {
  console.error(`decode mismatch: got ${decoded}, expected ${code}`);
  process.exit(1);
}

console.log(`TOKEN=${token} code=${code} ENC=${enc} decode=${decoded} OK`);
