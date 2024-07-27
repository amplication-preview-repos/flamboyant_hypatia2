import { InputJsonValue } from "../../types";

export type CrackingResultUpdateInput = {
  plaintext?: InputJsonValue;
  ciphertext?: InputJsonValue;
  key?: InputJsonValue;
  rounds?: number | null;
};
