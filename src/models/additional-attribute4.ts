import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalAttribute4 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  name: string;
  /** <br><b style='color:green;'>Market availability: Global</b> */
  value: string;
};

export const additionalAttribute4Schema: Schema<AdditionalAttribute4> = s.object<AdditionalAttribute4>({
  name: s.string(),
  value: s.string(),
});
