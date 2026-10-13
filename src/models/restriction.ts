import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type Restriction = {
  marketplaceId: string;
  conditionType: string;
  /** Empty array means listing is not restricted */
  reasons?: Reason[];
};

export const restrictionSchema: Schema<Restriction> = s.object<Restriction>({
  marketplaceId: s.string(),
  conditionType: s.string(),
  reasons: s.optional(s.array(s.lazy(() => reasonSchema))),
});
