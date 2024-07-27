import { JsonValue } from "type-fest";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  plaintext: JsonValue;
  ciphertext: JsonValue;
  rounds: number | null;
  key: JsonValue;
};
