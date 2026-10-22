import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type V3ItemsDisputeDuplicatesContest403Error1 = {
  errors?: Error3[];
};

export const v3ItemsDisputeDuplicatesContest403Error1Schema: Schema<V3ItemsDisputeDuplicatesContest403Error1> =
  s.object<V3ItemsDisputeDuplicatesContest403Error1>({
    errors: s.optional(s.array(s.lazy(() => error3Schema))),
  });
