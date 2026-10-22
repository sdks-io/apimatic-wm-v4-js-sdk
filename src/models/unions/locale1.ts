import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The market specific locale. Allowed values by market include: es for MX and CL, and en and fr for
 * CA.<br><b style='color:green;'>Market availability: Global</b>
 */
export type Locale1 = string | string[];

export const locale1Schema: Schema<Locale1> = s.of<Locale1>(s.union([s.string(), s.array(s.string())]));
