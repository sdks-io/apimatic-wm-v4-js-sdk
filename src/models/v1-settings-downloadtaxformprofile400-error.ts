import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1SettingsDownloadtaxformprofile400Error = {
  /** The error code identifying the type of error. */
  errorCode: string;
  /** A descriptive message explaining the error. */
  message: string;
  /** The HTTP status code. */
  status: number;
};

export const v1SettingsDownloadtaxformprofile400ErrorSchema: Schema<V1SettingsDownloadtaxformprofile400Error> =
  s.object<V1SettingsDownloadtaxformprofile400Error>({
    errorCode: s.string(),
    message: s.string(),
    status: s.int(),
  });
