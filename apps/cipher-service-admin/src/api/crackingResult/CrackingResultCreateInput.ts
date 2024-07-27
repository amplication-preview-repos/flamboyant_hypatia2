import { InputJsonValue } from "../../types";

export type CrackingResultCreateInput = {
  plaintext?: InputJsonValue;
  ciphertext?: InputJsonValue;
  key?: InputJsonValue;
  rounds?: number | null;
};
