import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type Header2 = {
  headerAttributes?: Record<string, unknown>;
};

export const header2Schema: Schema<Header2> = s.object<Header2>({
  headerAttributes: s.optional(s.record(s.string(), s.unknown())),
});
