import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Lagtime = {
  FullAccess: "full_access",
  ViewOnly: "view_only",
  NoAccess: "no_access",
} as const;
export type Lagtime = (typeof Lagtime)[keyof typeof Lagtime] | (string & {});

export const lagtimeSchema: EnumSchema<Lagtime> = s.enumOf<Lagtime>(Lagtime);
