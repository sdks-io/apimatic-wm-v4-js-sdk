import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ClaimsGroup = {
  Open: "OPEN",
  ActionNeeded: "ACTION_NEEDED",
  Closed: "CLOSED",
} as const;
export type ClaimsGroup = (typeof ClaimsGroup)[keyof typeof ClaimsGroup] | (string & {});

export const claimsGroupSchema: EnumSchema<ClaimsGroup> = s.enumOf<ClaimsGroup>(ClaimsGroup);
