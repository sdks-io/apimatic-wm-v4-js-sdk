import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RequestedValueAddedService = {
  /** Identifier of the value-added service being requested. */
  id: string;
  /**
   * Service-specific input payload. Validated against the schema published in
   * availableValueAddedServices on the corresponding Rate. Compressed shape; see TODO.
   */
  details?: Record<string, unknown>;
};

export const requestedValueAddedServiceSchema: Schema<RequestedValueAddedService> =
  s.object<RequestedValueAddedService>({
    id: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
  });
