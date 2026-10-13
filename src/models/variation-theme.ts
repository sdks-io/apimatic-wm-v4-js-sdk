import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VariationTheme = {
  attributes?: string[];
};

export const variationThemeSchema: Schema<VariationTheme> = s.object<VariationTheme>({
  attributes: s.optional(s.array(s.string())),
});
