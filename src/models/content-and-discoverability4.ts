import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { issue16Schema, type Issue16 } from "./issue16.js";

/** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
export type ContentAndDiscoverability4 = {
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issueCount?: number;
  /** <br><b style='color:green;'>Market availability: US | CA | MX</b> */
  issues?: Issue16[];
};

export const contentAndDiscoverability4Schema: Schema<ContentAndDiscoverability4> =
  s.object<ContentAndDiscoverability4>({
    issueCount: s.optional(s.int()),
    issues: s.optional(s.array(s.lazy(() => issue16Schema))),
  });
