import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  plaintext?: JsonFilter;
  ciphertext?: JsonFilter;
  rounds?: IntNullableFilter;
  key?: JsonFilter;
};
