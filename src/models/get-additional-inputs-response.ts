import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAdditionalInputsResponse = {
  /**
   * JSON Schema (draft-07 compatible) describing the additional inputs required for the given
   * rateId. Served verbatim from the upstream carrier integration.
   */
  payload?: Record<string, unknown>;
};

export const getAdditionalInputsResponseSchema: Schema<GetAdditionalInputsResponse> =
  s.object<GetAdditionalInputsResponse>({
    payload: s.optional(s.record(s.string(), s.unknown())),
  });
