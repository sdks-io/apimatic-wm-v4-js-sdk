import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commonDocumentDownloadSchema, type CommonDocumentDownload } from "./common-document-download.js";

/** The `createMarketplaceItemLabels` response. */
export type CreateMarketplaceItemLabelsResponse = {
  /** Resources to download the requested document. */
  documentDownloads: CommonDocumentDownload[];
};

export const createMarketplaceItemLabelsResponseSchema: Schema<CreateMarketplaceItemLabelsResponse> =
  s.object<CreateMarketplaceItemLabelsResponse>({
    documentDownloads: s.array(s.lazy(() => commonDocumentDownloadSchema)),
  });
