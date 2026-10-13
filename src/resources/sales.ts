import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { buyerTypeSchema, type BuyerType } from "../models/buyer-type.js";
import { errorListSchema, type ErrorList } from "../models/error-list.js";
import { firstDayOfWeekSchema, type FirstDayOfWeek } from "../models/first-day-of-week.js";
import { granularitySchema, type Granularity } from "../models/granularity.js";
import type { Servers } from "../servers.js";

export class Sales {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getOrderMetrics(
    request: Sales.GetOrderMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Sales.GetOrderMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/sales/v4/orderMetrics"),
        auth: this.#auth.walletAuth,
        pathParams: [],
        query: [
          { name: "marketplaceIds", value: request.marketplaceIds, schema: s.array(s.string()) },
          { name: "interval", value: request.interval, schema: s.string() },
          { name: "granularity", value: request.granularity, schema: granularitySchema },
          { name: "granularityTimeZone", value: request.granularityTimeZone, schema: s.optional(s.string()) },
          { name: "buyerType", value: request.buyerType, schema: s.optional(s.lazy(() => buyerTypeSchema)) },
          { name: "fulfillmentNetwork", value: request.fulfillmentNetwork, schema: s.optional(s.string()) },
          {
            name: "firstDayOfWeek",
            value: request.firstDayOfWeek,
            schema: s.optional(s.lazy(() => firstDayOfWeekSchema)),
          },
          { name: "asin", value: request.asin, schema: s.optional(s.string()) },
          { name: "sku", value: request.sku, schema: s.optional(s.string()) },
          { name: "sp-apiProgram", value: request.spApiProgram, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Sales.GetOrderMetricsError,
      },
      options,
    );
  }
}

export namespace Sales {
  export type GetOrderMetricsRequest = {
    /**
     * A marketplace identifier. This specifies the marketplace in which the order was placed. Only
     * one marketplace can be specified
     */
    marketplaceIds: string[];
    /**
     * A time interval used for selecting order metrics. This takes the form of two dates separated
     * by two hyphens (first date is inclusive; second date is exclusive). Dates are in ISO8601
     * format and must represent absolute time (either Z notation or offset notation). Example:
     * 2018-09-01T00:00:00-07:00--2018-09-04T00:00:00-07:00 requests order metrics for Sept 1st, 2nd
     * and 3rd in the -07:00 zone.
     */
    interval: string;
    /**
     * The granularity of the grouping of order metrics, based on a unit of time. Specifying
     * granularity=Hour results in a successful request only if the interval specified is less than
     * or equal to 30 days from now. For all other granularities, the interval specified must be
     * less or equal to 2 years from now. Specifying granularity=Total results in order metrics that
     * are aggregated over the entire interval that you specify. If the interval start and end date
     * don’t align with the specified granularity, the head and tail end of the response interval
     * will contain partial data. Example: Day to get a daily breakdown of the request interval,
     * where the day boundary is defined by the granularityTimeZone.
     */
    granularity: Granularity;
    /**
     * An IANA-compatible time zone for determining the day boundary. Required when specifying a
     * granularity value greater than Hour. The granularityTimeZone value must align with the offset
     * of the specified interval value. For example, if the interval value uses Z notation, then
     * granularityTimeZone must be UTC. If the interval value uses an offset, then
     * granularityTimeZone must be an IANA-compatible time zone that matches the offset. Example:
     * US/Pacific to compute day boundaries, accounting for daylight time savings, for US/Pacific
     * zone.
     */
    granularityTimeZone?: string;
    /**
     * Filters the results by the buyer type that you specify, B2B (business to business) or B2C
     * (business to customer). Example: B2B, if you want the response to include order metrics for
     * only B2B buyers.
     */
    buyerType?: BuyerType;
    /**
     * Filters the results by the fulfillment network that you specify, MFN (merchant fulfillment
     * network) or AFN (marketplace fulfillment network). Do not include this filter if you want the
     * response to include order metrics for all fulfillment networks. Example: AFN, if you want the
     * response to include order metrics for only the marketplace fulfillment network.
     */
    fulfillmentNetwork?: string;
    /**
     * Specifies the day that the week starts on when granularity=Week, either Monday or Sunday.
     * Default: Monday. Example: Sund
     */
    firstDayOfWeek?: FirstDayOfWeek;
    /**
     * Filters the results by the ASIN that you specify. Specifying both ASIN and SKU returns an
     * error. Do not include this filter if you want the response to include order metrics for all
     * ASINs. Example: B0792R1RSN, if you want the response to include order metrics for only ASIN
     * B0792R1RSN.
     */
    asin?: string;
    /**
     * Filters the results by the SKU that you specify. Specifying both ASIN and SKU returns an
     * error. Do not include this filter if you want the response to include order metrics for all
     * SKUs. Example: TestSKU, if you want the response to include order metrics for only SKU
     * TestSKU.
     */
    sku?: string;
    /**
     * Filters the results by the program that you specify. Do not include this filter if you want
     * the response to inclu
     */
    spApiProgram?: string;
  };

  export class GetOrderMetricsError extends ApiError {
    declare readonly payload: ErrorPayload<
      | Declared<"errorList", ErrorList>
      | Declared<"errorList2", ErrorList>
      | Declared<"errorList3", ErrorList>
      | Declared<"errorList4", ErrorList>
      | Declared<"errorList5", ErrorList>
    >;

    static readonly errors: ErrorDecoders<GetOrderMetricsError> = [
      { on: 400, kind: "errorList", decode: { kind: "json", schema: errorListSchema } },
      { on: 403, kind: "errorList2", decode: { kind: "json", schema: errorListSchema } },
      { on: 404, kind: "errorList3", decode: { kind: "json", schema: errorListSchema } },
      { on: 429, kind: "errorList4", decode: { kind: "json", schema: errorListSchema } },
      { on: 500, kind: "errorList5", decode: { kind: "json", schema: errorListSchema } },
    ];
  }
}
