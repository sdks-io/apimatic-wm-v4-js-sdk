import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

/** Dynamic Client Registration error (RFC 7591 §3.2.2). */
export type RegistrationError = {
  /** Machine-readable error code. */
  error: Error2;
  /** Human-readable explanation. */
  errorDescription?: string;
};

export const registrationErrorSchema: Schema<RegistrationError> = s.object<RegistrationError>({
  error: error2Schema,
  errorDescription: s.optional(s.string()),
  _keysMap: {
    errorDescription: "error_description",
  },
});
