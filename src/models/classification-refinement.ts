import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClassificationRefinement = {
  categoryId?: string;
  displayName?: string;
  numberOfResults?: number;
};

export const classificationRefinementSchema: Schema<ClassificationRefinement> =
  s.object<ClassificationRefinement>({
    categoryId: s.optional(s.string()),
    displayName: s.optional(s.string()),
    numberOfResults: s.optional(s.int()),
  });
