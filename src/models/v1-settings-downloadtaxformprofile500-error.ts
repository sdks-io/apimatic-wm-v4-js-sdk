import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1SettingsDownloadtaxformprofile500Error = {
  /** The error code identifying the type of error. */
  errorCode: string;
  /** A descriptive message explaining the error. */
  message: string;
  /** The HTTP status code. */
  status: number;
};

export const v1SettingsDownloadtaxformprofile500ErrorSchema: Schema<V1SettingsDownloadtaxformprofile500Error> =
  s.object<V1SettingsDownloadtaxformprofile500Error>({
    errorCode: s.string(),
    message: s.string(),
    status: s.int(),
  });
