import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The `cancelInboundPlan` response., The `generateDeliveryWindowOptions` response., The
 * `confirmDeliveryWindowOptions` response., The `cancelSelfShipAppointment` response., The
 * `generateSelfShipAppointmentSlots` response., The `setPackingInformation` response., The
 * `generatePackingOptions` response., The `confirmPackingOption` response., The
 * `generatePlacementOptions` response., The `confirmPlacementOption` response., The
 * `generateTransportationOptions` response., The `confirmTransportationOptions` response., The
 * `updateItemComplianceDetails` response., The `setPrepDetails` response., The
 * `updateShipmentSourceAddress` response., The `updateShipmentTrackingDetails` response., The
 * `generateShipmentContentUpdatePreviews` response., The `confirmShipmentContentUpdatePreview`
 * response.
 */
export type CancelInboundPlanResponse = {
  /** UUID for the given operation. */
  operationId: string;
};

export const cancelInboundPlanResponseSchema: Schema<CancelInboundPlanResponse> =
  s.object<CancelInboundPlanResponse>({
    operationId: s.string(),
  });
