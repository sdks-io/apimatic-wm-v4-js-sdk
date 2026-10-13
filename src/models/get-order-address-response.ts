import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload21Schema, type Payload21 } from "./payload21.js";

export type GetOrderAddressResponse = {
  payload?: Payload21;
};

export const getOrderAddressResponseSchema: Schema<GetOrderAddressResponse> =
  s.object<GetOrderAddressResponse>({
    payload: s.optional(s.lazy(() => payload21Schema)),
  });
