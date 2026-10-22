import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type V3ItemsDisputeDuplicatesContest404Error = {
  errors?: Error3[];
};

export const v3ItemsDisputeDuplicatesContest404ErrorSchema: Schema<V3ItemsDisputeDuplicatesContest404Error> =
  s.object<V3ItemsDisputeDuplicatesContest404Error>({
    errors: s.optional(s.array(s.lazy(() => error3Schema))),
  });
