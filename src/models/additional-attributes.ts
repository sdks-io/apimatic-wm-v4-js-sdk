import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalAttributes = {
  name: string;
  value: string;
};

export const additionalAttributesSchema: Schema<AdditionalAttributes> = s.object<AdditionalAttributes>({
  name: s.string(),
  value: s.string(),
});
