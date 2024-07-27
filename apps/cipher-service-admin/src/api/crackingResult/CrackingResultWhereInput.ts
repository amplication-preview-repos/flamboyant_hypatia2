import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CrackingResultWhereInput = {
  id?: StringFilter;
  plaintext?: JsonFilter;
  ciphertext?: JsonFilter;
  key?: JsonFilter;
  rounds?: IntNullableFilter;
};
