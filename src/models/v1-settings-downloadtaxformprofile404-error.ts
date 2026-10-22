import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1SettingsDownloadtaxformprofile404Error = {
  /** The error code identifying the type of error. */
  errorCode: string;
  /** A descriptive message explaining the error. */
  message: string;
  /** The HTTP status code. */
  status: number;
};

export const v1SettingsDownloadtaxformprofile404ErrorSchema: Schema<V1SettingsDownloadtaxformprofile404Error> =
  s.object<V1SettingsDownloadtaxformprofile404Error>({
    errorCode: s.string(),
    message: s.string(),
    status: s.int(),
  });
