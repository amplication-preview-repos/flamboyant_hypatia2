import { SortOrder } from "../../util/SortOrder";

export type CrackingResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  plaintext?: SortOrder;
  ciphertext?: SortOrder;
  key?: SortOrder;
  rounds?: SortOrder;
};
