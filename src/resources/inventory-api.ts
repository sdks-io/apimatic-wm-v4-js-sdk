import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { feedIdSchema, type FeedId } from "../models/feed-id.js";
import { feedType1Schema, type FeedType1 } from "../models/feed-type1.js";
import { inventoriesDtoSchema, type InventoriesDto } from "../models/inventories-dto.js";
import { inventory1Schema, type Inventory1 } from "../models/inventory1.js";
import {
  multiNodeInventoryFetchResponseDtoSchema,
  type MultiNodeInventoryFetchResponseDto,
} from "../models/multi-node-inventory-fetch-response-dto.js";
import {
  multiNodeInventoryUpdateResponseDtoSchema,
  type MultiNodeInventoryUpdateResponseDto,
} from "../models/multi-node-inventory-update-response-dto.js";
import {
  v3FulfillmentInventoryResponseSchema,
  type V3FulfillmentInventoryResponse,
} from "../models/v3-fulfillment-inventory-response.js";
import {
  v3FulfillmentInventory403Error1Schema,
  type V3FulfillmentInventory403Error1,
} from "../models/v3-fulfillment-inventory403-error1.js";
import { v3InventoriesRequestSchema, type V3InventoriesRequest } from "../models/v3-inventories-request.js";
import {
  v3Inventories403Error1Schema,
  type V3Inventories403Error1,
} from "../models/v3-inventories403-error1.js";
import { v3InventoryRequestSchema, type V3InventoryRequest } from "../models/v3-inventory-request.js";
import { wmGlobalVersionSchema, type WmGlobalVersion } from "../models/wm-global-version.js";
import { wmMarket1Schema, type WmMarket1 } from "../models/wm-market1.js";
import type { Servers } from "../servers.js";

export class InventoryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Inventory
   *
   * @remarks
   * You can use this API to get the inventory for a given item. <br><b style='color:green;'>Market
   * availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.GetInventoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getInventory(
    request: InventoryApi.GetInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<Inventory1, InventoryApi.GetInventoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/inventory"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "sku", value: request.sku, schema: s.string() },
          { name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inventory1Schema },
        errorFactory: InventoryApi.GetInventoryError,
      },
      options,
    );
  }

  /**
   * Multiple Item Inventory for All Ship Nodes
   *
   * @remarks
   * This API will retrieve the inventory count for all of a seller's items across all ship nodes by
   * item to ship node mapping. Inventory can be zero or non-zero. Please note that NextCursor value
   * changes and it needs to be passed on from the previous call to next call. <br><b
   * style='color:green;'>Market availability: US only</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultiNodeInventoryForAllSkuAndAllShipNodes(
    request: InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest,
    options?: RequestOptions,
  ): ApiPromise<
    MultiNodeInventoryFetchResponseDto,
    InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/inventories"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "10") },
          { name: "nextCursor", value: request.nextCursor, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: multiNodeInventoryFetchResponseDtoSchema },
        errorFactory: InventoryApi.GetMultiNodeInventoryForAllSkuAndAllShipNodesError,
      },
      options,
    );
  }

  /**
   * Single Item Inventory by Ship Node
   *
   * @remarks
   * This API will retrieve the inventory count for an item across all ship nodes or one specific
   * ship node. You can specify the ship node for which you want to fetch the inventory <br><b
   * style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getMultiNodeInventoryForSkuAndAllShipnodes(
    request: InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesRequest,
    options?: RequestOptions,
  ): ApiPromise<InventoriesDto, InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/inventories/{sku}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "sku", value: request.sku, schema: s.string() }],
        query: [{ name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) }],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: inventoriesDtoSchema },
        errorFactory: InventoryApi.GetMultiNodeInventoryForSkuAndAllShipnodesError,
      },
      options,
    );
  }

  /**
   * WFS Inventory
   *
   * @remarks
   * You can use this API to get the current Available to Sell inventory quantities for all WFS
   * items in your catalog. You can also query specific SKUs or filter to only items updated after a
   * specific date in order to reduce the response size. <br><b style='color:green;'>Market
   * availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.GetWfsInventoryError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getWfsInventory(
    request: InventoryApi.GetWfsInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<V3FulfillmentInventoryResponse, InventoryApi.GetWfsInventoryError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/fulfillment/inventory"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "sku", value: request.sku, schema: s.optional(s.string()) },
          { name: "fromModifiedDate", value: request.fromModifiedDate, schema: s.optional(s.string()) },
          { name: "toModifiedDate", value: request.toModifiedDate, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.string(), "10") },
          { name: "offset", value: request.offset, schema: s.defaulted(s.string(), "0") },
          { name: "shipNodeType", value: request.shipNodeType, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v3FulfillmentInventoryResponseSchema },
        errorFactory: InventoryApi.GetWfsInventoryError,
      },
      options,
    );
  }

  /**
   * Bulk Item Inventory Update
   *
   * @remarks
   * Updates inventory for items in bulk. Seller Can either use feed type "inventory" or
   * "MP_INVENTORY"
   * * Inventory spec 1.4 feed type: inventory
   * * Inventory spec 1.5 feed type: MP_INVENTORY
   *
   * Note: Multi Node Inventory Update Feed (feedType=MP_INVENTORY) only supports JSON Request and
   * Responses.
   *
   * Refer to the throttling limits before uploading the Feed Files.
   *
   * <b>Download the request body sample from </b>
   *
   * <a href="/file/mp/us/inventory-samples.zip">US Samples JSON</a> <a
   * href="/file/mp/ca/inventory-samples.zip">CA Samples JSON</a> <a
   * href="/file/mp/mx/inventory-samples.zip">MX Samples JSON</a> <a
   * href="/file/mp/cl/inventory-samples.zip">CL Samples JSON</a> <br><b style='color:green;'>Market
   * availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBulkInventory(
    request: InventoryApi.UpdateBulkInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<FeedId, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/feeds"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "feedType", value: request.feedType, schema: feedType1Schema },
          { name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "multipart", value: [{ kind: "file", name: "file", value: request.file }] },
      },
      {
        success: { kind: "json", schema: feedIdSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update inventory
   *
   * @remarks
   * Updates the inventory for a given item. <br><b style='color:green;'>Market availability:
   * Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.UpdateInventoryForAnItemError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInventoryForAnItem(
    request: InventoryApi.UpdateInventoryForAnItemRequest,
    options?: RequestOptions,
  ): ApiPromise<Inventory1, InventoryApi.UpdateInventoryForAnItemError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/inventory"),
        auth: this.#auth.accessToken,
        pathParams: [],
        query: [
          { name: "sku", value: request.sku, schema: s.string() },
          { name: "shipNode", value: request.shipNode, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3InventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: inventory1Schema },
        errorFactory: InventoryApi.UpdateInventoryForAnItemError,
      },
      options,
    );
  }

  /**
   * Update Item Inventory per Ship Node
   *
   * @remarks
   * This API will update the inventory for an item across one or more fulfillment centers, known as
   * ship nodes. <br><b style='color:green;'>Market availability: Global</b>
   *
   * @returns Successful Operation
   *
   * @throws {@link InventoryApi.UpdateMultiNodeInventoryError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link WalmartApIsError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMultiNodeInventory(
    request: InventoryApi.UpdateMultiNodeInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<MultiNodeInventoryUpdateResponseDto, InventoryApi.UpdateMultiNodeInventoryError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/inventories/{sku}"),
        auth: this.#auth.accessToken,
        pathParams: [{ name: "sku", value: request.sku, schema: s.string() }],
        query: [],
        headers: [
          { name: "WM_QOS.CORRELATION_ID", value: request.wmQosCorrelationId, schema: s.string() },
          { name: "WM_SVC.NAME", value: request.wmSvcName, schema: s.string() },
          { name: "WM_MARKET", value: request.wmMarket, schema: wmMarket1Schema },
          { name: "WM_GLOBAL_VERSION", value: request.wmGlobalVersion, schema: wmGlobalVersionSchema },
          {
            name: "WM_CONSUMER.CHANNEL.TYPE",
            value: request.wmConsumerChannelType,
            schema: s.optional(s.string()),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: v3InventoriesRequestSchema },
      },
      {
        success: { kind: "json", schema: multiNodeInventoryUpdateResponseDtoSchema },
        errorFactory: InventoryApi.UpdateMultiNodeInventoryError,
      },
      options,
    );
  }
}

export namespace InventoryApi {
  export type GetInventoryRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(',
     * ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make
     * sure to encode space with %20. Other characters don't need to be encoded.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku: string;
    /**
     * The shipNode for which the inventory is requested.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    shipNode?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetInventoryError extends ApiError {
    declare readonly payload:
      | Declared<"inventory1", Inventory1>
      | Declared<"inventory12", Inventory1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetInventoryError> = [
      { on: 400, kind: "inventory1", decode: { kind: "json", schema: inventory1Schema } },
      { on: 404, kind: "inventory12", decode: { kind: "json", schema: inventory1Schema } },
    ];
  }

  export type GetMultiNodeInventoryForAllSkuAndAllShipNodesRequest = {
    /**
     * The number of items returned. Cannot be more than 50.
     *
     * <strong style="color: green;">Market availability: US only</strong>
     *
     * @default "10"
     */
    limit?: string;
    /**
     * String returned from initial API call to indicate pagination. Specify nextCursor value to
     * retrieve the next 50 items.
     *
     * <strong style="color: green;">Market availability: US only</strong>
     */
    nextCursor?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetMultiNodeInventoryForAllSkuAndAllShipNodesError extends ApiError {
    declare readonly payload: Declared<"v3Inventories403Error1", V3Inventories403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<GetMultiNodeInventoryForAllSkuAndAllShipNodesError> = [
      {
        on: 403,
        kind: "v3Inventories403Error1",
        decode: { kind: "json", schema: v3Inventories403Error1Schema },
      },
    ];
  }

  export type GetMultiNodeInventoryForSkuAndAllShipnodesRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(',
     * ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to
     * encode space with %20. Other characters don't need to be encoded.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku: string;
    /**
     * ShipNode Id of the ship node for which the inventory is requested
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    shipNode?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetMultiNodeInventoryForSkuAndAllShipnodesError extends ApiError {
    declare readonly payload:
      | Declared<"inventoriesDto", InventoriesDto>
      | Declared<"inventoriesDto2", InventoriesDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMultiNodeInventoryForSkuAndAllShipnodesError> = [
      { on: 400, kind: "inventoriesDto", decode: { kind: "json", schema: inventoriesDtoSchema } },
      { on: 404, kind: "inventoriesDto2", decode: { kind: "json", schema: inventoriesDtoSchema } },
    ];
  }

  export type GetWfsInventoryRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(',
     * ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to
     * encode space with %20. Other characters don't need to be encoded.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku?: string;
    /**
     * last inventory modified date - starting range.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    fromModifiedDate?: string;
    /**
     * last inventory modified date - starting range.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    toModifiedDate?: string;
    /**
     * Number of Sku to be returned. Cannot be larger than 300.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     *
     * @default "10"
     */
    limit?: string;
    /**
     * Offset is the number of records you wish to skip before selecting records.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     *
     * @default "0"
     */
    offset?: string;
    /**
     * Currently supported: multichannel. This param is enabled only for multi channel sellers. sku
     * becomes mandatory and other params are ineffective while using this param. sku can either
     * contain one item or list of sku's separated by comma (example: sku1,sku2)
     *
     * <strong style="color: green;">Market availability: US only</strong>
     */
    shipNodeType?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
  };

  export class GetWfsInventoryError extends ApiError {
    declare readonly payload:
      | Declared<"v3FulfillmentInventory403Error1", V3FulfillmentInventory403Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetWfsInventoryError> = [
      {
        on: 403,
        kind: "v3FulfillmentInventory403Error1",
        decode: { kind: "json", schema: v3FulfillmentInventory403Error1Schema },
      },
    ];
  }

  export type UpdateBulkInventoryRequest = {
    /**
     * The feed Type Inventory: Global MP_Inventory: US | MX | CA
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    feedType: FeedType1;
    /**
     * The shipNode for which the inventory is to be updated. Not required in case of Multi Node
     * Inventory Update Feed (feedType=MP_INVENTORY)
     *
     * <strong style="color: green;">Market availability: US only</strong>
     */
    shipNode?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /**
     * Feed file to upload
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    file: FileInput;
  };

  export type UpdateInventoryForAnItemRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(',
     * ')', '*', '+', ',', ';', '=', ‘ ’, '{', '}' as well as '%' itself if it's a part of sku. Make
     * sure to encode space with %20. Other characters don't need to be encoded.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku: string;
    /**
     * The shipNode for which the inventory is to be updated.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    shipNode?: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** File fields */
    body: V3InventoryRequest;
  };

  export class UpdateInventoryForAnItemError extends ApiError {
    declare readonly payload:
      | Declared<"inventory1", Inventory1>
      | Declared<"inventory12", Inventory1>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateInventoryForAnItemError> = [
      { on: 400, kind: "inventory1", decode: { kind: "json", schema: inventory1Schema } },
      { on: 404, kind: "inventory12", decode: { kind: "json", schema: inventory1Schema } },
    ];
  }

  export type UpdateMultiNodeInventoryRequest = {
    /**
     * An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item.
     * This will be used by the seller in the XSD file to refer to each item. Special characters in
     * the sku needing encoding are: ':', '/', '?', '#', '[', ']', '@', '!', '$', '&', "'", '(',
     * ')', '*', '+', ',', ';', '=', ‘ ’ as well as '%' itself if it's a part of sku. Make sure to
     * encode space with %20. Other characters don't need to be encoded.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    sku: string;
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
     * A unique ID to track the consumer request by channel. Use the Consumer Channel Type received
     * during onboarding.
     *
     * <strong style="color: green;">Market availability: Global</strong>
     */
    wmConsumerChannelType?: string;
    /** Request fields */
    body: V3InventoriesRequest;
  };

  export class UpdateMultiNodeInventoryError extends ApiError {
    declare readonly payload:
      | Declared<"multiNodeInventoryUpdateResponseDto", MultiNodeInventoryUpdateResponseDto>
      | Declared<"multiNodeInventoryUpdateResponseDto2", MultiNodeInventoryUpdateResponseDto>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateMultiNodeInventoryError> = [
      {
        on: 400,
        kind: "multiNodeInventoryUpdateResponseDto",
        decode: { kind: "json", schema: multiNodeInventoryUpdateResponseDtoSchema },
      },
      {
        on: 404,
        kind: "multiNodeInventoryUpdateResponseDto2",
        decode: { kind: "json", schema: multiNodeInventoryUpdateResponseDtoSchema },
      },
    ];
  }
}
