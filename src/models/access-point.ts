import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { type11Schema, type Type11 } from "./type11.js";

export type AccessPoint = {
  accessPointId: string;
  name: string;
  type?: Type11;
  address: Address1;
  /**
   * Per-day operating hours. Compressed shape; full DayOfWeekTimeMap fidelity tracked in a
   * follow-up PR.
   */
  operatingHours?: Record<string, unknown>;
  /** IANA timezone name (e.g. America/Los_Angeles). */
  timezone?: string;
};

export const accessPointSchema: Schema<AccessPoint> = s.object<AccessPoint>({
  accessPointId: s.string(),
  name: s.string(),
  type: s.optional(s.lazy(() => type11Schema)),
  address: address1Schema,
  operatingHours: s.optional(s.record(s.string(), s.unknown())),
  timezone: s.optional(s.string()),
});
