import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Carrier package type details. */
export type Data8 = {
  /**
   * The carrier package Id
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  id?: string;
  /**
   * The carrier package short name
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  packageTypeShortName?: string;
  /**
   * The carrier package display name
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  packageTypeDisplayName?: string;
  /**
   * The package length. The Unit is determined by dimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  length?: number;
  /**
   * The package width. The Unit is determined by dimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  width?: number;
  /**
   * The package height. The Unit is determined by dimensionUnit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  height?: number;
  /**
   * The package dimension unit.
   *
   * <b style="color: green;">Market availability: Global</b>
   */
  dimensionUnit?: string;
};

export const data8Schema: Schema<Data8> = s.object<Data8>({
  id: s.optional(s.string()),
  packageTypeShortName: s.optional(s.string()),
  packageTypeDisplayName: s.optional(s.string()),
  length: s.optional(s.float64()),
  width: s.optional(s.float64()),
  height: s.optional(s.float64()),
  dimensionUnit: s.optional(s.string()),
});
