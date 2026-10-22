import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { boxDimensions4Schema, type BoxDimensions4 } from "./box-dimensions4.js";

/** Package Dimensions */
export type PackageDimension = {
  /**
   * Package Type. Supported Package Types are - 'CUSTOM_PACKAGE', 'FEDEX_ENVELOPE',
   * 'FEDEX_PAK'<br/><b>Applicable to SWW and WPS.</span></b>
   */
  packageType: string;
  /** Box Dimensions */
  boxDimensions: BoxDimensions4;
};

export const packageDimensionSchema: Schema<PackageDimension> = s.object<PackageDimension>({
  packageType: s.string(),
  boxDimensions: boxDimensions4Schema,
});
