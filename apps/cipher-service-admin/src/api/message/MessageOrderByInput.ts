import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  plaintext?: SortOrder;
  ciphertext?: SortOrder;
  rounds?: SortOrder;
  key?: SortOrder;
};
