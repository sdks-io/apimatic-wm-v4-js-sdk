import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type Payload19 = {
  /**
   * Specifies the total count of unpublished items.<br><b style='color:green;'>Market availability:
   * US | CA | MX</b>
   */
  unpublishedCount?: string;
  /**
   * Specifies the total value of unpublished items.<br><b style='color:green;'>Market availability:
   * US | CA | MX</b>
   */
  unpublishedValue?: string;
  /**
   * The reason why item is unpublished.<br><b style='color:green;'>Market availability: US | CA |
   * MX</b>
   */
  unpublishedReasonCode?: string;
};

export const payload19Schema: Schema<Payload19> = s.object<Payload19>({
  unpublishedCount: s.optional(s.string()),
  unpublishedValue: s.optional(s.string()),
  unpublishedReasonCode: s.optional(s.string()),
});
