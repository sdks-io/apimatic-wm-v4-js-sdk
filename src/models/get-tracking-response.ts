import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload31Schema, type Payload31 } from "./payload31.js";

export type GetTrackingResponse = {
  payload?: Payload31;
};

export const getTrackingResponseSchema: Schema<GetTrackingResponse> = s.object<GetTrackingResponse>({
  payload: s.optional(s.lazy(() => payload31Schema)),
});
