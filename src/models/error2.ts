import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Machine-readable error code. */
export const Error2 = {
  InvalidRedirectUri: "invalid_redirect_uri",
  InvalidClientMetadata: "invalid_client_metadata",
  InvalidSoftwareStatement: "invalid_software_statement",
  UnapprovedSoftwareStatement: "unapproved_software_statement",
} as const;
export type Error2 = (typeof Error2)[keyof typeof Error2] | (string & {});

export const error2Schema: EnumSchema<Error2> = s.enumOf<Error2>(Error2);
