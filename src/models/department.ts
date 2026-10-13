import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Department = {
  departmentId?: string;
  displayName?: string;
};

export const departmentSchema: Schema<Department> = s.object<Department>({
  departmentId: s.optional(s.string()),
  displayName: s.optional(s.string()),
});
