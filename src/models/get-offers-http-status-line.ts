import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The HTTP status line associated with the response. */
export type GetOffersHttpStatusLine = {
  /** The HTTP response Status Code. */
  statusCode?: number;
  /** The HTTP response Reason-Phrase. */
  reasonPhrase?: string;
};

export const getOffersHttpStatusLineSchema: Schema<GetOffersHttpStatusLine> =
  s.object<GetOffersHttpStatusLine>({
    statusCode: s.optional(s.int()),
    reasonPhrase: s.optional(s.string()),
  });
