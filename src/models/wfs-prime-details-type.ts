import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Walmart Fulfillment Services prime eligibility information. */
export type WfsPrimeDetailsType = {
  /** Indicates whether the offer is eligible for WFS Prime. */
  isWfsPrime: boolean;
  /** Indicates whether the offer is eligible for WFS Prime throughout the entire marketplace. */
  isNationalWfsPrime: boolean;
};

export const wfsPrimeDetailsTypeSchema: Schema<WfsPrimeDetailsType> = s.object<WfsPrimeDetailsType>({
  isWfsPrime: s.boolean(),
  isNationalWfsPrime: s.boolean(),
  _keysMap: {
    isWfsPrime: "IsWFSPrime",
    isNationalWfsPrime: "IsNationalWFSPrime",
  },
});
