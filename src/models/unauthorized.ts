import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type Unauthorized = {
  error?: Error11[];
};

export const unauthorizedSchema: Schema<Unauthorized> = s.object<Unauthorized>({
  error: s.optional(s.array(s.lazy(() => error11Schema))),
});
