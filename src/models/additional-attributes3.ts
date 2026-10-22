import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttribute4Schema, type AdditionalAttribute4 } from "./additional-attribute4.js";

/** <br><b style='color:green;'>Market availability: Global</b> */
export type AdditionalAttributes3 = {
  /** <br><b style='color:green;'>Market availability: Global</b> */
  additionalAttribute: AdditionalAttribute4[];
};

export const additionalAttributes3Schema: Schema<AdditionalAttributes3> = s.object<AdditionalAttributes3>({
  additionalAttribute: s.array(s.lazy(() => additionalAttribute4Schema)),
});
