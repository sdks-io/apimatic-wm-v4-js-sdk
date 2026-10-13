import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { packageDimensions1Schema, type PackageDimensions1 } from "./package-dimensions1.js";
import { shipPackageLineSchema, type ShipPackageLine } from "./ship-package-line.js";
import { trackingInfoSchema, type TrackingInfo } from "./tracking-info.js";

export type ShipPackage = {
  /**
   * Caller-supplied stable identifier for this physical package. Optional — server falls back to
   * the package's tracking number when echoed in the response.
   */
  packageId?: string;
  trackingInfo: TrackingInfo;
  /**
   * Physical dimensions of a shipped package. All numeric values are non-negative; unit enums avoid
   * the unit-ambiguity bug that bit gmp-orders-mono PayloadUtil pre-2024.
   */
  dimensions?: PackageDimensions1;
  lines: ShipPackageLine[];
};

export const shipPackageSchema: Schema<ShipPackage> = s.object<ShipPackage>({
  packageId: s.optional(s.string()),
  trackingInfo: trackingInfoSchema,
  dimensions: s.optional(s.lazy(() => packageDimensions1Schema)),
  lines: s.array(s.lazy(() => shipPackageLineSchema)),
});
