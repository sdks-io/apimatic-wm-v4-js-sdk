import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonTransportationSelectionSchema,
  type CommonTransportationSelection,
} from "./common-transportation-selection.js";

/** The `confirmTransportationOptions` request. */
export type ConfirmTransportationOptionsRequest = {
  /** Information needed to confirm one of the available transportation options. */
  transportationSelections: CommonTransportationSelection[];
};

export const confirmTransportationOptionsRequestSchema: Schema<ConfirmTransportationOptionsRequest> =
  s.object<ConfirmTransportationOptionsRequest>({
    transportationSelections: s.array(s.lazy(() => commonTransportationSelectionSchema)),
  });
