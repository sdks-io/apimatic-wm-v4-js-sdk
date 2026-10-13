import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  commonPackageGroupingInputSchema,
  type CommonPackageGroupingInput,
} from "./common-package-grouping-input.js";

/** The `setPackingInformation` request. */
export type SetPackingInformationRequest = {
  /** List of packing information for the inbound plan. */
  packageGroupings: CommonPackageGroupingInput[];
};

export const setPackingInformationRequestSchema: Schema<SetPackingInformationRequest> =
  s.object<SetPackingInformationRequest>({
    packageGroupings: s.array(s.lazy(() => commonPackageGroupingInputSchema)),
  });
