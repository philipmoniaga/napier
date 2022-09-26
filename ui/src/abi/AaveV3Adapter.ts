/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace BaseAdapter {
  export type AdapterParamsStruct = {
    underlying: PromiseOrValue<string>;
    target: PromiseOrValue<string>;
    delta: PromiseOrValue<BigNumberish>;
    minm: PromiseOrValue<BigNumberish>;
    maxm: PromiseOrValue<BigNumberish>;
    issuanceFee: PromiseOrValue<BigNumberish>;
  };

  export type AdapterParamsStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    underlying: string;
    target: string;
    delta: BigNumber;
    minm: BigNumber;
    maxm: BigNumber;
    issuanceFee: BigNumber;
  };
}

export interface AaveV3AdapterInterface extends utils.Interface {
  functions: {
    "_lscale()": FunctionFragment;
    "adapterParams()": FunctionFragment;
    "getIssuanceFee()": FunctionFragment;
    "getTarget()": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "provider()": FunctionFragment;
    "referralCode()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "scale()": FunctionFragment;
    "scaleStored()": FunctionFragment;
    "setReferralCode(uint16)": FunctionFragment;
    "symbol()": FunctionFragment;
    "tDecimals()": FunctionFragment;
    "tilt()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "uDecimals()": FunctionFragment;
    "underlying()": FunctionFragment;
    "unwrapTarget(uint256)": FunctionFragment;
    "wrapUnderlying(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_lscale"
      | "adapterParams"
      | "getIssuanceFee"
      | "getTarget"
      | "name"
      | "owner"
      | "provider"
      | "referralCode"
      | "renounceOwnership"
      | "scale"
      | "scaleStored"
      | "setReferralCode"
      | "symbol"
      | "tDecimals"
      | "tilt"
      | "transferOwnership"
      | "uDecimals"
      | "underlying"
      | "unwrapTarget"
      | "wrapUnderlying"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_lscale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adapterParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuanceFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTarget", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "provider", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "referralCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "scale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaleStored",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setReferralCode",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "tDecimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "tilt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "uDecimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapTarget",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "_lscale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adapterParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTarget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "provider", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "scale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaleStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tDecimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tilt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "uDecimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwrapTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapUnderlying",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AaveV3Adapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AaveV3AdapterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _lscale(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
    >;

    adapterParams(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        target: string;
        delta: BigNumber;
        minm: BigNumber;
        maxm: BigNumber;
        issuanceFee: BigNumber;
      }
    >;

    getIssuanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTarget(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    provider(overrides?: CallOverrides): Promise<[string]>;

    referralCode(overrides?: CallOverrides): Promise<[number]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    scale(overrides?: CallOverrides): Promise<[BigNumber]>;

    scaleStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    setReferralCode(
      _code: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tDecimals(overrides?: CallOverrides): Promise<[number]>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uDecimals(overrides?: CallOverrides): Promise<[number]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    unwrapTarget(
      tBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrapUnderlying(
      uBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _lscale(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
  >;

  adapterParams(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      underlying: string;
      target: string;
      delta: BigNumber;
      minm: BigNumber;
      maxm: BigNumber;
      issuanceFee: BigNumber;
    }
  >;

  getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getTarget(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  referralCode(overrides?: CallOverrides): Promise<number>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  scale(overrides?: CallOverrides): Promise<BigNumber>;

  scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

  setReferralCode(
    _code: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tDecimals(overrides?: CallOverrides): Promise<number>;

  tilt(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uDecimals(overrides?: CallOverrides): Promise<number>;

  underlying(overrides?: CallOverrides): Promise<string>;

  unwrapTarget(
    tBal: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrapUnderlying(
    uBal: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _lscale(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
    >;

    adapterParams(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        target: string;
        delta: BigNumber;
        minm: BigNumber;
        maxm: BigNumber;
        issuanceFee: BigNumber;
      }
    >;

    getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTarget(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    provider(overrides?: CallOverrides): Promise<string>;

    referralCode(overrides?: CallOverrides): Promise<number>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

    setReferralCode(
      _code: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tDecimals(overrides?: CallOverrides): Promise<number>;

    tilt(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    uDecimals(overrides?: CallOverrides): Promise<number>;

    underlying(overrides?: CallOverrides): Promise<string>;

    unwrapTarget(
      tBal: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapUnderlying(
      uBal: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _lscale(overrides?: CallOverrides): Promise<BigNumber>;

    adapterParams(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTarget(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    provider(overrides?: CallOverrides): Promise<BigNumber>;

    referralCode(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

    setReferralCode(
      _code: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    unwrapTarget(
      tBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrapUnderlying(
      uBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _lscale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIssuanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTarget(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    provider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    referralCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    scale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scaleStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setReferralCode(
      _code: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unwrapTarget(
      tBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrapUnderlying(
      uBal: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}