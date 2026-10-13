import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { restrictionSchema, type Restriction } from "./restriction.js";

export type RestrictionList = {
  restrictions?: Restriction[];
};

export const restrictionListSchema: Schema<RestrictionList> = s.object<RestrictionList>({
  restrictions: s.optional(s.array(s.lazy(() => restrictionSchema))),
});
