import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { httpMethodEnumSchema, type HttpMethodEnum } from "./http-method-enum.js";

/** Common properties of batch requests against individual APIs. */
export type BatchRequest = {
  /** The resource path of the operation being called in batch, without query parameters. */
  uri: string;
  /**
   * The HTTP method associated with the individual APIs being called as part of the batch request.
   */
  method: HttpMethodEnum;
  /** A mapping of additional HTTP headers to send for the individual batch request. */
  headers?: Record<string, unknown>;
};

export const batchRequestSchema: Schema<BatchRequest> = s.object<BatchRequest>({
  uri: s.string(),
  method: httpMethodEnumSchema,
  headers: s.optional(s.record(s.string(), s.unknown())),
});
