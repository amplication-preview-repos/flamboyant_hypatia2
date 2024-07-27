import { CrackingResult as TCrackingResult } from "../api/crackingResult/CrackingResult";

export const CRACKINGRESULT_TITLE_FIELD = "id";

export const CrackingResultTitle = (record: TCrackingResult): string => {
  return record.id?.toString() || String(record.id);
};
