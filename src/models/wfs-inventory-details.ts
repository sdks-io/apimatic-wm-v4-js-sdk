import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemLifecycleSchema, type ItemLifecycle } from "./item-lifecycle.js";
import { publishingStatusSchema, type PublishingStatus } from "./publishing-status.js";
import { researchingQuantitySchema, type ResearchingQuantity } from "./researching-quantity.js";
import { reservedQuantitySchema, type ReservedQuantity } from "./reserved-quantity.js";
import { stockStatusSchema, type StockStatus } from "./stock-status.js";
import { unfulfillableQuantitySchema, type UnfulfillableQuantity } from "./unfulfillable-quantity.js";
import { wfsInventoryAgeSchema, type WfsInventoryAge } from "./wfs-inventory-age.js";
import { wfsUnavailableQuantitySchema, type WfsUnavailableQuantity } from "./wfs-unavailable-quantity.js";

export type WfsInventoryDetails = {
  /** Current listing state of the item on Walmart.com. */
  publishingStatus?: PublishingStatus;
  /** Lifecycle state of the item in the Walmart catalog. */
  itemLifecycle?: ItemLifecycle;
  /** Stock health label based on current days of supply. */
  stockStatus?: StockStatus;
  /** Units currently available to sell. */
  fulfillableQuantity?: number;
  /**
   * Units reserved and not available for immediate sale. Null if no breakdown data is available.
   */
  reservedQuantity?: ReservedQuantity | null;
  /** Units currently in transit and not yet available to sell. */
  inboundQuantity?: number;
  /**
   * Total units physically at fulfillment centers, including available, reserved, and unavailable
   * units.
   */
  onHandQuantity?: number;
  unavailableQuantity?: WfsUnavailableQuantity;
  /**
   * Units under investigation for inventory discrepancies. Null if no units are under
   * investigation.
   */
  researchingQuantity?: ResearchingQuantity | null;
  /**
   * Units that cannot be fulfilled due to damage, defects, or expiry. Null if no unfulfillable
   * units exist.
   */
  unfulfillableQuantity?: UnfulfillableQuantity | null;
  /**
   * Units grouped by storage duration. Used for long-term storage fee assessment. 7 buckets:
   * days365Plus, days365To450, and days450Plus reflect the upstream split-aged-buckets feature —
   * days365Plus is the pre-split total.
   */
  inventoryAge?: WfsInventoryAge;
  /** Date item first arrived at a fulfillment center. Null if not yet received. */
  firstInStockDate?: string | null;
};

export const wfsInventoryDetailsSchema: Schema<WfsInventoryDetails> = s.object<WfsInventoryDetails>({
  publishingStatus: s.optional(s.lazy(() => publishingStatusSchema)),
  itemLifecycle: s.optional(s.lazy(() => itemLifecycleSchema)),
  stockStatus: s.optional(s.lazy(() => stockStatusSchema)),
  fulfillableQuantity: s.optional(s.int()),
  reservedQuantity: s.optionalNullable(s.lazy(() => reservedQuantitySchema)),
  inboundQuantity: s.optional(s.int()),
  onHandQuantity: s.optional(s.int()),
  unavailableQuantity: s.optional(s.lazy(() => wfsUnavailableQuantitySchema)),
  researchingQuantity: s.optionalNullable(s.lazy(() => researchingQuantitySchema)),
  unfulfillableQuantity: s.optionalNullable(s.lazy(() => unfulfillableQuantitySchema)),
  inventoryAge: s.optional(s.lazy(() => wfsInventoryAgeSchema)),
  firstInStockDate: s.optionalNullable(s.dateOnly()),
});
