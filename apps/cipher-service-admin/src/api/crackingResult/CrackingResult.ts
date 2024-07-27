import { JsonValue } from "type-fest";

export type CrackingResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  plaintext: JsonValue;
  ciphertext: JsonValue;
  key: JsonValue;
  rounds: number | null;
};
