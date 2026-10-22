import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item10Schema, type Item10 } from "./item10.js";

/** Items succeeded.<br><b style='color:green;'>Market availability: US only</b> */
export type Success2 = {
  /** Items. */
  items?: Item10[];
};

export const success2Schema: Schema<Success2> = s.object<Success2>({
  items: s.optional(s.array(s.lazy(() => item10Schema))),
});
