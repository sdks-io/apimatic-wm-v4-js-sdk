import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload4Schema, type Payload4 } from "./payload4.js";

export type GetShipmentDocumentsResponse = {
  payload?: Payload4;
};

export const getShipmentDocumentsResponseSchema: Schema<GetShipmentDocumentsResponse> =
  s.object<GetShipmentDocumentsResponse>({
    payload: s.optional(s.lazy(() => payload4Schema)),
  });
