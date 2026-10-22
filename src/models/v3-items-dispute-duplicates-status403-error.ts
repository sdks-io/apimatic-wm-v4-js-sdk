import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type V3ItemsDisputeDuplicatesStatus403Error = {
  errors?: Error3[];
};

export const v3ItemsDisputeDuplicatesStatus403ErrorSchema: Schema<V3ItemsDisputeDuplicatesStatus403Error> =
  s.object<V3ItemsDisputeDuplicatesStatus403Error>({
    errors: s.optional(s.array(s.lazy(() => error3Schema))),
  });
