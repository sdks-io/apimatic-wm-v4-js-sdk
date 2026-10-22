import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { charge1Schema, type Charge1 } from "./charge1.js";
import { gmvSchema, type Gmv } from "./gmv.js";
import { item12Schema, type Item12 } from "./item12.js";
import { quantity1Schema, type Quantity1 } from "./quantity1.js";

export type ReturnOrderLine1 = {
  /** returnOrderLineNumber.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrderLineNumber?: string;
  /** primeLineNumber.<br><b style='color:green;'>Market availability: MX</b> */
  primeLineNumber?: string;
  /** returnReason.<br><b style='color:green;'>Market availability: MX</b> */
  returnReason?: string;
  /** purchaseOrderId.<br><b style='color:green;'>Market availability: MX</b> */
  purchaseOrderId?: string;
  /** purchaseOrderLineNumber.<br><b style='color:green;'>Market availability: MX</b> */
  purchaseOrderLineNumber?: string;
  /** item.<br><b style='color:green;'>Market availability: MX</b> */
  item?: Item12;
  /** charges.<br><b style='color:green;'>Market availability: MX</b> */
  charges?: Charge1[];
  /** unitPrice.<br><b style='color:green;'>Market availability: MX</b> */
  unitPrice?: Gmv;
  /** quantity.<br><b style='color:green;'>Market availability: MX</b> */
  quantity?: Quantity1;
  /**
   * Current status of return. (e.g., 'INITIATED') <br><b style='color:green;'>Market availability:
   * MX</b>
   */
  status?: string;
  /** statusTime.<br><b style='color:green;'>Market availability: MX</b> */
  statusTime?: Date;
  /** refundAmount.<br><b style='color:green;'>Market availability: MX</b> */
  refundAmount?: Gmv;
  /** isWFSEnabled.<br><b style='color:green;'>Market availability: MX</b> */
  isWfsEnabled?: string;
};

export const returnOrderLine1Schema: Schema<ReturnOrderLine1> = s.object<ReturnOrderLine1>({
  returnOrderLineNumber: s.optional(s.string()),
  primeLineNumber: s.optional(s.string()),
  returnReason: s.optional(s.string()),
  purchaseOrderId: s.optional(s.string()),
  purchaseOrderLineNumber: s.optional(s.string()),
  item: s.optional(s.lazy(() => item12Schema)),
  charges: s.optional(s.array(s.lazy(() => charge1Schema))),
  unitPrice: s.optional(s.lazy(() => gmvSchema)),
  quantity: s.optional(s.lazy(() => quantity1Schema)),
  status: s.optional(s.string()),
  statusTime: s.optional(s.dateTime()),
  refundAmount: s.optional(s.lazy(() => gmvSchema)),
  isWfsEnabled: s.optional(s.string()),
  _keysMap: {
    isWfsEnabled: "isWFSEnabled",
  },
});
