import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { failure2Schema, type Failure2 } from "./failure2.js";
import { success2Schema, type Success2 } from "./success2.js";

/** Response payload. */
export type Payload32 = {
  /** Items succeeded.<br><b style='color:green;'>Market availability: US only</b> */
  success?: Success2;
  /** Items failed.<br><b style='color:green;'>Market availability: US only</b> */
  failure?: Failure2;
};

export const payload32Schema: Schema<Payload32> = s.object<Payload32>({
  success: s.optional(s.lazy(() => success2Schema)),
  failure: s.optional(s.lazy(() => failure2Schema)),
});
