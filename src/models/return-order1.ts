import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerName1Schema, type CustomerName1 } from "./customer-name1.js";
import { returnOrderLine1Schema, type ReturnOrderLine1 } from "./return-order-line1.js";
import { returnOrderShipment1Schema, type ReturnOrderShipment1 } from "./return-order-shipment1.js";

export type ReturnOrder1 = {
  /** returnOrderId.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrderId?: string;
  /** customerOrderId.<br><b style='color:green;'>Market availability: MX</b> */
  customerOrderId?: string;
  /** customerEmail.<br><b style='color:green;'>Market availability: MX</b> */
  customerEmail?: string;
  /** returnOrderDate.<br><b style='color:green;'>Market availability: MX | CA |CL</b> */
  returnOrderDate?: Date;
  /** customerName.<br><b style='color:green;'>Market availability: MX</b> */
  customerName?: CustomerName1;
  /** returnOrderLines.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrderLines?: ReturnOrderLine1[];
  /** returnOrderShipments.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrderShipments?: ReturnOrderShipment1[];
};

export const returnOrder1Schema: Schema<ReturnOrder1> = s.object<ReturnOrder1>({
  returnOrderId: s.optional(s.string()),
  customerOrderId: s.optional(s.string()),
  customerEmail: s.optional(s.string()),
  returnOrderDate: s.optional(s.dateTime()),
  customerName: s.optional(s.lazy(() => customerName1Schema)),
  returnOrderLines: s.optional(s.array(s.lazy(() => returnOrderLine1Schema))),
  returnOrderShipments: s.optional(s.array(s.lazy(() => returnOrderShipment1Schema))),
});
