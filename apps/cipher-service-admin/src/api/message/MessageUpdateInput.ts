import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  plaintext?: InputJsonValue;
  ciphertext?: InputJsonValue;
  rounds?: number | null;
  key?: InputJsonValue;
};
