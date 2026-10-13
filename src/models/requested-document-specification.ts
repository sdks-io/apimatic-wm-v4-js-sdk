import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dpiSchema, type Dpi } from "./dpi.js";
import { format1Schema, type Format1 } from "./format1.js";
import { labelDimensionsSchema, type LabelDimensions } from "./label-dimensions.js";
import { pageLayoutSchema, type PageLayout } from "./page-layout.js";

export type RequestedDocumentSpecification = {
  format: Format1;
  size: LabelDimensions;
  dpi: Dpi;
  pageLayout?: PageLayout;
  needFileJoining?: boolean;
  /**
   * Optional list of additional print specs (customs forms, invoice attachments, etc). Compressed;
   * see TODO.
   */
  printOptions?: Record<string, unknown>[];
};

export const requestedDocumentSpecificationSchema: Schema<RequestedDocumentSpecification> =
  s.object<RequestedDocumentSpecification>({
    format: format1Schema,
    size: labelDimensionsSchema,
    dpi: dpiSchema,
    pageLayout: s.optional(s.lazy(() => pageLayoutSchema)),
    needFileJoining: s.optional(s.boolean()),
    printOptions: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
