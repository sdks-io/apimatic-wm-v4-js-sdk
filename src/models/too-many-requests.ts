import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error11Schema, type Error11 } from "./error11.js";

export type TooManyRequests = {
  error?: Error11[];
};

export const tooManyRequestsSchema: Schema<TooManyRequests> = s.object<TooManyRequests>({
  error: s.optional(s.array(s.lazy(() => error11Schema))),
});
