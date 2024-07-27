import { CrackingResultWhereInput } from "./CrackingResultWhereInput";
import { CrackingResultOrderByInput } from "./CrackingResultOrderByInput";

export type CrackingResultFindManyArgs = {
  where?: CrackingResultWhereInput;
  orderBy?: Array<CrackingResultOrderByInput>;
  skip?: number;
  take?: number;
};
