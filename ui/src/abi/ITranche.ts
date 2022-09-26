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

export declare namespace ITranche {
  export type SeriesFullStruct = {
    target: PromiseOrValue<string>;
    zero: PromiseOrValue<string>;
    claim: PromiseOrValue<string>;
    adapter: PromiseOrValue<string>;
    reward: PromiseOrValue<BigNumberish>;
    iscale: PromiseOrValue<BigNumberish>;
    mscale: PromiseOrValue<BigNumberish>;
    maxscale: PromiseOrValue<BigNumberish>;
    tilt: PromiseOrValue<BigNumberish>;
  };

  export type SeriesFullStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    target: string;
    zero: string;
    claim: string;
    adapter: string;
    reward: BigNumber;
    iscale: BigNumber;
    mscale: BigNumber;
    maxscale: BigNumber;
    tilt: BigNumber;
  };

  export type SeriesStruct = {
    claim: PromiseOrValue<string>;
    adapter: PromiseOrValue<string>;
    reward: PromiseOrValue<BigNumberish>;
    iscale: PromiseOrValue<BigNumberish>;
    mscale: PromiseOrValue<BigNumberish>;
    maxscale: PromiseOrValue<BigNumberish>;
    tilt: PromiseOrValue<BigNumberish>;
  };

  export type SeriesStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    claim: string;
    adapter: string;
    reward: BigNumber;
    iscale: BigNumber;
    mscale: BigNumber;
    maxscale: BigNumber;
    tilt: BigNumber;
  };
}

export interface ITrancheInterface extends utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burnNapierPT(address,uint256)": FunctionFragment;
    "collect(address,address,uint256,address)": FunctionFragment;
    "combine(address,uint256)": FunctionFragment;
    "computeNptToMint(address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "getAllSeriesFull()": FunctionFragment;
    "getSeries(address)": FunctionFragment;
    "getZeros()": FunctionFragment;
    "issuance()": FunctionFragment;
    "issue(address,uint256)": FunctionFragment;
    "issueFromUnderlying(address,uint256)": FunctionFragment;
    "maturity()": FunctionFragment;
    "mintNapierPT(address,uint256,uint256,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "redeemZero(address,uint256)": FunctionFragment;
    "scale()": FunctionFragment;
    "scaleStored()": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burnNapierPT"
      | "collect"
      | "combine"
      | "computeNptToMint"
      | "decimals"
      | "getAllSeriesFull"
      | "getSeries"
      | "getZeros"
      | "issuance"
      | "issue"
      | "issueFromUnderlying"
      | "maturity"
      | "mintNapierPT"
      | "name"
      | "redeemZero"
      | "scale"
      | "scaleStored"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "underlying"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allowance",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "burnNapierPT",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "combine",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "computeNptToMint",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllSeriesFull",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSeries",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getZeros", values?: undefined): string;
  encodeFunctionData(functionFragment: "issuance", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "issue",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "issueFromUnderlying",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "maturity", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintNapierPT",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemZero",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "scale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaleStored",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "burnNapierPT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "combine", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeNptToMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllSeriesFull",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSeries", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getZeros", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issuance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "issueFromUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "maturity", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mintNapierPT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemZero", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "scale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaleStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Collected(address,uint256)": EventFragment;
    "Combined(address,uint256,address)": EventFragment;
    "Issued(address,uint256,address)": EventFragment;
    "SeriesInitialized(address,uint256,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Collected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Combined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Issued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SeriesInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface CollectedEventObject {
  pt: string;
  collected: BigNumber;
}
export type CollectedEvent = TypedEvent<
  [string, BigNumber],
  CollectedEventObject
>;

export type CollectedEventFilter = TypedEventFilter<CollectedEvent>;

export interface CombinedEventObject {
  pt: string;
  balance: BigNumber;
  sender: string;
}
export type CombinedEvent = TypedEvent<
  [string, BigNumber, string],
  CombinedEventObject
>;

export type CombinedEventFilter = TypedEventFilter<CombinedEvent>;

export interface IssuedEventObject {
  pt: string;
  balance: BigNumber;
  sender: string;
}
export type IssuedEvent = TypedEvent<
  [string, BigNumber, string],
  IssuedEventObject
>;

export type IssuedEventFilter = TypedEventFilter<IssuedEvent>;

export interface SeriesInitializedEventObject {
  nPT: string;
  maturity: BigNumber;
  sponsor: string;
}
export type SeriesInitializedEvent = TypedEvent<
  [string, BigNumber, string],
  SeriesInitializedEventObject
>;

export type SeriesInitializedEventFilter =
  TypedEventFilter<SeriesInitializedEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ITranche extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITrancheInterface;

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
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burnNapierPT(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    collect(
      usr: PromiseOrValue<string>,
      pt: PromiseOrValue<string>,
      uAmountTransfer: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    combine(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    computeNptToMint(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uAmountUse: BigNumber; nptAmount: BigNumber }
    >;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    getAllSeriesFull(
      overrides?: CallOverrides
    ): Promise<[ITranche.SeriesFullStructOutput[]]>;

    getSeries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[ITranche.SeriesStructOutput]>;

    getZeros(overrides?: CallOverrides): Promise<[string[]]>;

    issuance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issue(
      pt: PromiseOrValue<string>,
      tAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    issueFromUnderlying(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    maturity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintNapierPT(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    redeemZero(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    scaleStored(overrides?: CallOverrides): Promise<[BigNumber]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    underlying(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: PromiseOrValue<string>,
    spender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burnNapierPT(
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  collect(
    usr: PromiseOrValue<string>,
    pt: PromiseOrValue<string>,
    uAmountTransfer: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  combine(
    pt: PromiseOrValue<string>,
    uAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  computeNptToMint(
    pt: PromiseOrValue<string>,
    uAmount: PromiseOrValue<BigNumberish>,
    uReserve: PromiseOrValue<BigNumberish>,
    nptReserve: PromiseOrValue<BigNumberish>,
    scale: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { uAmountUse: BigNumber; nptAmount: BigNumber }
  >;

  decimals(overrides?: CallOverrides): Promise<number>;

  getAllSeriesFull(
    overrides?: CallOverrides
  ): Promise<ITranche.SeriesFullStructOutput[]>;

  getSeries(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<ITranche.SeriesStructOutput>;

  getZeros(overrides?: CallOverrides): Promise<string[]>;

  issuance(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issue(
    pt: PromiseOrValue<string>,
    tAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  issueFromUnderlying(
    pt: PromiseOrValue<string>,
    uAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  maturity(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintNapierPT(
    pt: PromiseOrValue<string>,
    uAmount: PromiseOrValue<BigNumberish>,
    uReserve: PromiseOrValue<BigNumberish>,
    nptReserve: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  redeemZero(
    pt: PromiseOrValue<string>,
    uAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  scale(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  underlying(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnNapierPT(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    collect(
      usr: PromiseOrValue<string>,
      pt: PromiseOrValue<string>,
      uAmountTransfer: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    combine(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeNptToMint(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { uAmountUse: BigNumber; nptAmount: BigNumber }
    >;

    decimals(overrides?: CallOverrides): Promise<number>;

    getAllSeriesFull(
      overrides?: CallOverrides
    ): Promise<ITranche.SeriesFullStructOutput[]>;

    getSeries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<ITranche.SeriesStructOutput>;

    getZeros(overrides?: CallOverrides): Promise<string[]>;

    issuance(overrides?: CallOverrides): Promise<BigNumber>;

    issue(
      pt: PromiseOrValue<string>,
      tAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issueFromUnderlying(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maturity(overrides?: CallOverrides): Promise<BigNumber>;

    mintNapierPT(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        uAmountUse: BigNumber;
        ptAmount: BigNumber;
        nptAmount: BigNumber;
      }
    >;

    name(overrides?: CallOverrides): Promise<string>;

    redeemZero(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    underlying(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: PromiseOrValue<string> | null,
      spender?: PromiseOrValue<string> | null,
      value?: null
    ): ApprovalEventFilter;

    "Collected(address,uint256)"(
      pt?: null,
      collected?: null
    ): CollectedEventFilter;
    Collected(pt?: null, collected?: null): CollectedEventFilter;

    "Combined(address,uint256,address)"(
      pt?: null,
      balance?: null,
      sender?: PromiseOrValue<string> | null
    ): CombinedEventFilter;
    Combined(
      pt?: null,
      balance?: null,
      sender?: PromiseOrValue<string> | null
    ): CombinedEventFilter;

    "Issued(address,uint256,address)"(
      pt?: null,
      balance?: null,
      sender?: PromiseOrValue<string> | null
    ): IssuedEventFilter;
    Issued(
      pt?: null,
      balance?: null,
      sender?: PromiseOrValue<string> | null
    ): IssuedEventFilter;

    "SeriesInitialized(address,uint256,address)"(
      nPT?: PromiseOrValue<string> | null,
      maturity?: PromiseOrValue<BigNumberish> | null,
      sponsor?: PromiseOrValue<string> | null
    ): SeriesInitializedEventFilter;
    SeriesInitialized(
      nPT?: PromiseOrValue<string> | null,
      maturity?: PromiseOrValue<BigNumberish> | null,
      sponsor?: PromiseOrValue<string> | null
    ): SeriesInitializedEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burnNapierPT(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    collect(
      usr: PromiseOrValue<string>,
      pt: PromiseOrValue<string>,
      uAmountTransfer: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    combine(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    computeNptToMint(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    getAllSeriesFull(overrides?: CallOverrides): Promise<BigNumber>;

    getSeries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getZeros(overrides?: CallOverrides): Promise<BigNumber>;

    issuance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issue(
      pt: PromiseOrValue<string>,
      tAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    issueFromUnderlying(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    maturity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintNapierPT(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    redeemZero(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    scaleStored(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    underlying(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: PromiseOrValue<string>,
      spender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burnNapierPT(
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    collect(
      usr: PromiseOrValue<string>,
      pt: PromiseOrValue<string>,
      uAmountTransfer: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    combine(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    computeNptToMint(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      scale: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllSeriesFull(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSeries(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getZeros(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuance(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issue(
      pt: PromiseOrValue<string>,
      tAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    issueFromUnderlying(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    maturity(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintNapierPT(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      uReserve: PromiseOrValue<BigNumberish>,
      nptReserve: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeemZero(
      pt: PromiseOrValue<string>,
      uAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    scaleStored(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    underlying(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}