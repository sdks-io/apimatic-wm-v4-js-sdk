import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payload6Schema, type Payload6 } from "./payload6.js";

export type GetAccessPointsResponse = {
  payload?: Payload6;
};

export const getAccessPointsResponseSchema: Schema<GetAccessPointsResponse> =
  s.object<GetAccessPointsResponse>({
    payload: s.optional(s.lazy(() => payload6Schema)),
  });
