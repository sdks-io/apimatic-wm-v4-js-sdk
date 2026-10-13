import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { opSchema, type Op } from "./op.js";

export type PatchOperation = {
  /** Patch operation type (JSON Patch) */
  op: Op;
  /** JSON Pointer path to the attribute (RFC 6901) */
  path: string;
  /** Value to set (absent for delete operations) */
  value?: Record<string, unknown>[];
};

export const patchOperationSchema: Schema<PatchOperation> = s.object<PatchOperation>({
  op: opSchema,
  path: s.string(),
  value: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
