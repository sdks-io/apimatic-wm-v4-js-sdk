import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Locale for different markets is: 'en' (for US), 'es' (for MX), ['en','fr'] (for CA).<br><b
 * style='color:green;'>Market availability: US | CA | MX</b>
 */
export type Locale2 = string | string[];

export const locale2Schema: Schema<Locale2> = s.of<Locale2>(s.union([s.string(), s.array(s.string())]));
