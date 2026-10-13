import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileContentsSchema, type FileContents } from "./file-contents.js";
import { labelDimensionsSchema, type LabelDimensions } from "./label-dimensions.js";
import { labelFormatSchema, type LabelFormat } from "./label-format.js";
import { standardIdForLabelSchema, type StandardIdForLabel } from "./standard-id-for-label.js";

export type Label = {
  customTextForLabel?: string;
  dimensions?: LabelDimensions;
  fileContents?: FileContents;
  labelFormat?: LabelFormat;
  standardIdForLabel?: StandardIdForLabel;
};

export const labelSchema: Schema<Label> = s.object<Label>({
  customTextForLabel: s.optional(s.string()),
  dimensions: s.optional(s.lazy(() => labelDimensionsSchema)),
  fileContents: s.optional(s.lazy(() => fileContentsSchema)),
  labelFormat: s.optional(s.lazy(() => labelFormatSchema)),
  standardIdForLabel: s.optional(s.lazy(() => standardIdForLabelSchema)),
});
