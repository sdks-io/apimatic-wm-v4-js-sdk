import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload10Schema, type Payload10 } from "./payload10.js";

/** Envelope containing the partner identifier and available tax forms. */
export type V1SettingsGettaxformprofileResponse = {
  payload?: Payload10;
  /** Request outcome, for example OK. */
  status?: string;
};

export const v1SettingsGettaxformprofileResponseSchema: Schema<V1SettingsGettaxformprofileResponse> =
  s.object<V1SettingsGettaxformprofileResponse>({
    payload: s.optional(s.lazy(() => payload10Schema)),
    status: s.optional(s.string()),
  });
