import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerNameSchema, type CustomerName } from "./customer-name.js";
import { returnChannelSchema, type ReturnChannel } from "./return-channel.js";
import { returnLineGroupSchema, type ReturnLineGroup } from "./return-line-group.js";
import { returnOrderLineSchema, type ReturnOrderLine } from "./return-order-line.js";
import { returnOrderShipmentSchema, type ReturnOrderShipment } from "./return-order-shipment.js";
import { totalRefundAmountSchema, type TotalRefundAmount } from "./total-refund-amount.js";

/** List of returns for the seller.<br><b style='color:green;'>Market availability: Global</b> */
export type ReturnOrder = {
  /**
   * Return order identifier of the return order.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  returnOrderId?: string;
  /** Customer email address<br><b style='color:green;'>Market availability: Global</b> */
  customerEmailId?: string;
  /** Customer information.<br><b style='color:green;'>Market availability: Global</b> */
  customerName?: CustomerName;
  /**
   * Customer sales order identifier. Use to filter results.<br><b style='color:green;'>Market
   * availability: Global</b>
   */
  customerOrderId?: string;
  /**
   * Date format for return order date.<br><b style='color:green;'>Market availability: Global</b>
   */
  returnOrderDate?: Date;
  /**
   * Date format for return by order date.<br><b style='color:green;'>Market availability: US</b>
   */
  returnByDate?: Date;
  /**
   * Determines when the refund was/will be issued to the customer.<br><b
   * style='color:green;'>Market availability: US</b>
   */
  refundMode?: string;
  /**
   * Price of One unit of item, in this order line.<br><b style='color:green;'>Market availability:
   * US</b>
   */
  totalRefundAmount?: TotalRefundAmount;
  /**
   * These groups are created per label or type of carrier service required. (e.g., If order has
   * some lines that can be clubbed and mailed together as a smart post then they belong to one
   * return group. If a line is bulky and needs a different type of carrier service, then that line
   * will be part of different group. Customer gets multiple labels depending on how many groups are
   * created for the entire order.)<br><b style='color:green;'>Market availability: US</b>
   */
  returnLineGroups?: ReturnLineGroup[];
  /**
   * A list of order lines in the return order.<br><b style='color:green;'>Market availability:
   * Global</b>
   */
  returnOrderLines?: ReturnOrderLine[];
  /** The shipments for return orders.<br><b style='color:green;'>Market availability: MX</b> */
  returnOrderShipments?: ReturnOrderShipment[];
  /**
   * The channel via order return got initiated.<br><b style='color:green;'>Market availability:
   * US</b>
   */
  returnChannel?: ReturnChannel;
};

export const returnOrderSchema: Schema<ReturnOrder> = s.object<ReturnOrder>({
  returnOrderId: s.optional(s.string()),
  customerEmailId: s.optional(s.string()),
  customerName: s.optional(s.lazy(() => customerNameSchema)),
  customerOrderId: s.optional(s.string()),
  returnOrderDate: s.optional(s.dateTime()),
  returnByDate: s.optional(s.dateTime()),
  refundMode: s.optional(s.string()),
  totalRefundAmount: s.optional(s.lazy(() => totalRefundAmountSchema)),
  returnLineGroups: s.optional(s.array(s.lazy(() => returnLineGroupSchema))),
  returnOrderLines: s.optional(s.array(s.lazy(() => returnOrderLineSchema))),
  returnOrderShipments: s.optional(s.array(s.lazy(() => returnOrderShipmentSchema))),
  returnChannel: s.optional(s.lazy(() => returnChannelSchema)),
});
