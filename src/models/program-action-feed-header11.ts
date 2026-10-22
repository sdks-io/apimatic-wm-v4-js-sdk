import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * ProgramAction feed header details. <br><b style='color:green;'>Market availability: US</span></b>
 */
export type ProgramActionFeedHeader11 = {
  /** This is static spec version. <br><b style='color:green;'>Market availability: US</span></b> */
  version?: string;
  /**
   * The associated language locale. <br><b style='color:green;'>Market availability: US</span></b>
   */
  locale?: string;
  /**
   * This is is static Walmart BU. <br><b style='color:green;'>Market availability: US</span></b>
   */
  businessUnit?: string;
};

export const programActionFeedHeader11Schema: Schema<ProgramActionFeedHeader11> =
  s.object<ProgramActionFeedHeader11>({
    version: s.optional(s.string()),
    locale: s.optional(s.string()),
    businessUnit: s.optional(s.string()),
  });
