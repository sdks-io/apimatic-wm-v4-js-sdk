import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Resource to download the requested document. */
export type CommonDocumentDownload = {
  /** The type of download. Possible values: `URL`. */
  downloadType: string;
  /**
   * The URI's expiration time. In ISO 8601 datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
   */
  expiration?: Date;
  /** Uniform resource identifier to identify where the document is located. */
  uri: string;
};

export const commonDocumentDownloadSchema: Schema<CommonDocumentDownload> = s.object<CommonDocumentDownload>({
  downloadType: s.string(),
  expiration: s.optional(s.dateTime()),
  uri: s.string(),
});
