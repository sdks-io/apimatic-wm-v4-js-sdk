import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** ProgramAction feed header details */
export type ProgramActionFeedHeader1 = {
  /** This is static spec version. */
  version?: string;
  /** The associated language locale. */
  locale?: string;
  /** This is is static Walmart BU. */
  businessUnit?: string;
};

export const programActionFeedHeader1Schema: Schema<ProgramActionFeedHeader1> =
  s.object<ProgramActionFeedHeader1>({
    version: s.optional(s.string()),
    locale: s.optional(s.string()),
    businessUnit: s.optional(s.string()),
  });
