import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  classificationRefinementSchema,
  type ClassificationRefinement,
} from "./classification-refinement.js";
import { departmentSchema, type Department } from "./department.js";

export type Refinements = {
  departments?: Department[];
  classificationRefinements?: ClassificationRefinement[];
};

export const refinementsSchema: Schema<Refinements> = s.object<Refinements>({
  departments: s.optional(s.array(s.lazy(() => departmentSchema))),
  classificationRefinements: s.optional(s.array(s.lazy(() => classificationRefinementSchema))),
});
