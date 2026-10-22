import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { item111Schema, type Item111 } from "./item111.js";

/** Items failed.<br><b style='color:green;'>Market availability: US only</b> */
export type Failure2 = {
  /** Items. */
  items?: Item111[];
};

export const failure2Schema: Schema<Failure2> = s.object<Failure2>({
  items: s.optional(s.array(s.lazy(() => item111Schema))),
});
