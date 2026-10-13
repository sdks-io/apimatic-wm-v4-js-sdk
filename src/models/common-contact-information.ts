import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The seller's contact information. */
export type CommonContactInformation = {
  /** The email address. */
  email?: string;
  /** The contact's name. */
  name: string;
  /** The phone number. */
  phoneNumber: string;
};

export const commonContactInformationSchema: Schema<CommonContactInformation> =
  s.object<CommonContactInformation>({
    email: s.optional(s.string()),
    name: s.string(),
    phoneNumber: s.string(),
  });
