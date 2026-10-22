import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cancellationsSchema, type Cancellations } from "./cancellations.js";

export type PostPurchase = {
  cancellations?: Cancellations;
  returns?: Record<string, unknown>;
  issueCount?: string;
  otd?: Cancellations;
};

export const postPurchaseSchema: Schema<PostPurchase> = s.object<PostPurchase>({
  cancellations: s.optional(s.lazy(() => cancellationsSchema)),
  returns: s.optional(s.record(s.string(), s.unknown())),
  issueCount: s.optional(s.string()),
  otd: s.optional(s.lazy(() => cancellationsSchema)),
});
