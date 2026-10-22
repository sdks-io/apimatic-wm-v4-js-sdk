import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1SettingsDownloadtaxformprofile502Error1 = {
  /** The error code identifying the type of error. */
  errorCode: string;
  /** A descriptive message explaining the error. */
  message: string;
  /** The HTTP status code. */
  status: number;
};

export const v1SettingsDownloadtaxformprofile502Error1Schema: Schema<V1SettingsDownloadtaxformprofile502Error1> =
  s.object<V1SettingsDownloadtaxformprofile502Error1>({
    errorCode: s.string(),
    message: s.string(),
    status: s.int(),
  });
