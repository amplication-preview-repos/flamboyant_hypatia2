import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  plaintext?: InputJsonValue;
  ciphertext?: InputJsonValue;
  rounds?: number | null;
  key?: InputJsonValue;
};
