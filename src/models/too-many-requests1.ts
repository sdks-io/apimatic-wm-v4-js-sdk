import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type TooManyRequests1 = {
  error?: Error11[];
};

export const tooManyRequests1Schema: Schema<TooManyRequests1> = s.object<TooManyRequests1>({
  error: s.optional(s.array(s.lazy(() => error11Schema))),
});
