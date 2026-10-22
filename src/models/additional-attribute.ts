import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalAttribute = {
  name: string;
  value: string;
};

export const additionalAttributeSchema: Schema<AdditionalAttribute> = s.object<AdditionalAttribute>({
  name: s.string(),
  value: s.string(),
});
