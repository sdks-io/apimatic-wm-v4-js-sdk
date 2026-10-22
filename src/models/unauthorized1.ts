import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type Unauthorized1 = {
  error?: Error11[];
};

export const unauthorized1Schema: Schema<Unauthorized1> = s.object<Unauthorized1>({
  error: s.optional(s.array(s.lazy(() => error11Schema))),
});
