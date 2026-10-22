import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response payload for the operation. */
export type Data9 = {
  /**
   * Manifest ID returned by the create scan form API. Use this value to download the scan form or
   * for future reference.
   */
  manifestId?: string;
  /** Status of the scan form request. Example: SUCCESS. */
  status?: string;
};

export const data9Schema: Schema<Data9> = s.object<Data9>({
  manifestId: s.optional(s.string()),
  status: s.optional(s.string()),
});
