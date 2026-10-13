import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonDocumentDownloadSchema, type CommonDocumentDownload } from "./common-document-download.js";

/** The `getDeliveryChallanDocument` response. */
export type GetDeliveryChallanDocumentResponse = {
  /** Resource to download the requested document. */
  documentDownload: CommonDocumentDownload;
};

export const getDeliveryChallanDocumentResponseSchema: Schema<GetDeliveryChallanDocumentResponse> =
  s.object<GetDeliveryChallanDocumentResponse>({
    documentDownload: commonDocumentDownloadSchema,
  });
