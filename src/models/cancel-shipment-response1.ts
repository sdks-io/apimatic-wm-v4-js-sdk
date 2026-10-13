import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload5Schema, type Payload5 } from "./payload5.js";

export type CancelShipmentResponse1 = {
  payload?: Payload5;
};

export const cancelShipmentResponse1Schema: Schema<CancelShipmentResponse1> =
  s.object<CancelShipmentResponse1>({
    payload: s.optional(s.lazy(() => payload5Schema)),
  });
