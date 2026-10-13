import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonCustomPlacementInputSchema,
  type CommonCustomPlacementInput,
} from "./common-custom-placement-input.js";

/** The `generatePlacementOptions` request. */
export type GeneratePlacementOptionsRequest = {
  /** Custom placement options to add to the plan. */
  customPlacement?: CommonCustomPlacementInput[];
};

export const generatePlacementOptionsRequestSchema: Schema<GeneratePlacementOptionsRequest> =
  s.object<GeneratePlacementOptionsRequest>({
    customPlacement: s.optional(s.array(s.lazy(() => commonCustomPlacementInputSchema))),
  });
