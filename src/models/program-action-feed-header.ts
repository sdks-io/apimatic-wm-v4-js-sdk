import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US</b> */
export type ProgramActionFeedHeader = {
  /** <br><b style='color:green;'>Market availability: US</b> */
  requestId?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  requestBatchId?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  processMode?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  subset?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  sellingChannel?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  version?: string;
  /** en.<br><b style='color:green;'>Market availability: US</b> */
  locale?: string;
  /** <br><b style='color:green;'>Market availability: US</b> */
  feedDate?: Date;
  /** <br><b style='color:green;'>Market availability: US</b> */
  feedType?: string;
};

export const programActionFeedHeaderSchema: Schema<ProgramActionFeedHeader> =
  s.object<ProgramActionFeedHeader>({
    requestId: s.optional(s.string()),
    requestBatchId: s.optional(s.string()),
    processMode: s.optional(s.string()),
    subset: s.optional(s.string()),
    sellingChannel: s.optional(s.string()),
    version: s.optional(s.string()),
    locale: s.optional(s.string()),
    feedDate: s.optional(s.dateTime()),
    feedType: s.optional(s.string()),
  });
