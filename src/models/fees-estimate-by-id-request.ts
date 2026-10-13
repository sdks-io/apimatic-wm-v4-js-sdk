import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feesEstimateRequestSchema, type FeesEstimateRequest } from "./fees-estimate-request.js";
import { idTypeSchema, type IdType } from "./id-type.js";

/**
 * A single fee estimate request for the batch endpoint. Combines the item identifier (IdType +
 * IdValue) with the fee estimate parameters. Mirrors SP-API FeesEstimateByIdRequest.
 */
export type FeesEstimateByIdRequest = {
  /** Type of item identifier. */
  idType: IdType;
  /** The item identifier value (Walmart Item ID or Seller SKU). */
  idValue: string;
  /**
   * Fee estimate parameters for a single item. Used in both single-item and batch endpoints.
   * Mirrors SP-API FeesEstimateRequest.
   */
  feesEstimateRequest: FeesEstimateRequest;
};

export const feesEstimateByIdRequestSchema: Schema<FeesEstimateByIdRequest> =
  s.object<FeesEstimateByIdRequest>({
    idType: idTypeSchema,
    idValue: s.string(),
    feesEstimateRequest: feesEstimateRequestSchema,
    _keysMap: {
      idType: "IdType",
      idValue: "IdValue",
      feesEstimateRequest: "FeesEstimateRequest",
    },
  });
