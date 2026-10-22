import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The market specific locale. Allowed values by market include: en for US, es for MX and CL, and en
 * and fr for CA.<br><b style='color:green;'>Market availability: Global</b>
 */
export type Locale = string | string[];

export const localeSchema: Schema<Locale> = s.of<Locale>(s.union([s.string(), s.array(s.string())]));
