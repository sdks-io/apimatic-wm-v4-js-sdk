import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Carrier package type details. */
export type CarrierPackageResponse = {
  /** The carrier package ID. */
  id?: string;
  /** The carrier package short name. */
  packageTypeShortName?: string;
  /** The carrier package display name. */
  packageTypeDisplayName?: string;
  /** The package length. The Unit is determined by dimensionUnit. */
  length?: number;
  /** The package width. The Unit is determined by dimensionUnit. */
  width?: number;
  /** The package height. The Unit is determined by dimensionUnit. */
  height?: number;
  /** The package dimension unit. */
  dimensionUnit?: string;
};

export const carrierPackageResponseSchema: Schema<CarrierPackageResponse> = s.object<CarrierPackageResponse>({
  id: s.optional(s.string()),
  packageTypeShortName: s.optional(s.string()),
  packageTypeDisplayName: s.optional(s.string()),
  length: s.optional(s.int()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  dimensionUnit: s.optional(s.string()),
});
