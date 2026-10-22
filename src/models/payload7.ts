import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Payload in the response for rejecting recommendations. */
export type Payload7 = {
  /**
   * Message confirming the rejection of the recommendations. Message discription for US will be
   * like 'The selected items will be removed shortly from the recommendations.' and for CA and MX :
   * 'Recommendation Removed successfully. No of recommendation removed:5' <br><b
   * style='color:green;'>Market availability: US | CA | MX</span></b>
   */
  message?: string;
};

export const payload7Schema: Schema<Payload7> = s.object<Payload7>({
  message: s.optional(s.string()),
});
