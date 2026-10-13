import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemAttribute = {
  displayValue?: string;
  value?: Record<string, unknown>;
  /** @default "en_US" */
  language?: string;
};

export const itemAttributeSchema: Schema<ItemAttribute> = s.object<ItemAttribute>({
  displayValue: s.optional(s.string()),
  value: s.optional(s.record(s.string(), s.unknown())),
  language: s.defaulted(s.string(), "en_US"),
});
