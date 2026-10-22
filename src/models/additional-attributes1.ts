import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalAttributeSchema, type AdditionalAttribute } from "./additional-attribute.js";

export type AdditionalAttributes1 = {
  additionalAttribute: AdditionalAttribute[];
};

export const additionalAttributes1Schema: Schema<AdditionalAttributes1> = s.object<AdditionalAttributes1>({
  additionalAttribute: s.array(s.lazy(() => additionalAttributeSchema)),
});
