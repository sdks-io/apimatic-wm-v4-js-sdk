import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { reasonCodeSchema, type ReasonCode } from "./reason-code.js";

export type Reason = {
  /** Localized human-readable message explaining the restriction */
  message: string;
  reasonCode: ReasonCode;
  links?: Link[];
};

export const reasonSchema: Schema<Reason> = s.object<Reason>({
  message: s.string(),
  reasonCode: reasonCodeSchema,
  links: s.optional(s.array(s.lazy(() => linkSchema))),
});
