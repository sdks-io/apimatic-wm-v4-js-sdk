import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { reportType4Schema, type ReportType4 } from "../models/report-type4.js";
import {
  v3ReportsReportRequestsRequestSchema,
  type V3ReportsReportRequestsRequest,
} from "../models/v3-reports-report-requests-request.js";
import {
  v3ReportsReportRequestsResponse1Schema,
  type V3ReportsReportRequestsResponse1,
} from "../models/v3-reports-report-requests-response1.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class OnRequestReport {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create report request
   *
   * @remarks
   * Creates a new request for report by specifying the `reportType` and `reportVersion`. <br><b
   * style='color:green;'>Market availability: Global</b>
   *
   * **Max reporting window:** For `ITEM_PERFORMANCE` v3, the date range between `dataStartTime` and
   * `dataEndTime` must not exceed 2 years (730 days). Exceeding this limit will return a `400`
   * error.
   *
   * **Row limit:** There is no limit on the number of rows returned in the report.
   *
   * @returns Successful Operation
   *
   * @throws {@link OnRequestReport.GenerateReportError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  generateReport(
    request: OnRequestReport.GenerateReportRequest,
    options?: RequestOptions,
  ): ApiPromise<V3ReportsReportRequestsResponse1, OnRequestReport.GenerateReportError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/reports/reportRequests"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "reportType", value: request.reportType, schema: reportType4Schema },
          { name: "reportVersion", value: request.reportVersion, schema: s.string() },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          { name: "Accept", value: request.accept, schema: s.string() },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v3ReportsReportRequestsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: v3ReportsReportRequestsResponse1Schema },
        errorFactory: OnRequestReport.GenerateReportError,
      },
      options,
    );
  }
}

export namespace OnRequestReport {
  export type GenerateReportRequest = {
    /**
     * Type of report for which the request is created. Example, ITEM for Item Report.
     *
     * <strong style="color: green;">Market availability:
     *
     * ITEM: Global INVENTORY: Global LAGTIME: US|CA|MX Other Reports: US only</strong>
     */
    reportType: ReportType4;
    /**
     * Version of report for which the request is created.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     *
     *  |ReportType |Market Availabilty |Version Supported
     * |--------|----------|----------
     * | ITEM   |Global|  v1  (**v3 to v6 : US only**)
     * |INVENTORY|Global| v1
     * |LAGTIME|US,CA,MX| v1
     * |DELIVERY_DEFECT|US only| v1
     * |ITEM_PERFORMANCE|US only| v1 to v3
     * |PROMO|US only| v1
     * |RETURN_OVERRIDES|US only| v1
     * |CPA|US only| v1
     * |SHIPPING_CONFIGURATION|US only| v1
     * |SHIPPING_PROGRAM|US only| v1
     * |FITMENT_MISSING_ATTR|US only| v1
     * |FITMENT_ACES_COVERAGE|US only| v1
     * |BUYBOX|US only| v1
     * |ASSORTMENT_RECOMMENDATIONS|US only| v1
     * |CANCELLATION|US only| v1
     * |INVENTORY_RECOMMENDATIONS|US only| v1 |
     */
    reportVersion: string;
    /**
     * A unique ID which identifies each API call and used to track and debug issues; use a random
     * generated GUID for this ID.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmQosCorrelationId: string;
    /**
     * Specifies the name of the Walmart service being called.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmSvcName: string;
    /**
     * The target market of the API call.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmMarket: WmMarket1;
    /**
     * The version of the global API used.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmGlobalVersion: WmGlobalVersion;
    /**
     * Only supported Media Type : application/json
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    accept: string;
    /**
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** Request body */
    body?: V3ReportsReportRequestsRequest;
  };

  export class GenerateReportError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GenerateReportError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }
}
