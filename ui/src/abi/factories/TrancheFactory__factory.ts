/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TrancheFactory,
  TrancheFactoryInterface,
} from "../TrancheFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "contract BaseAdapter[]",
        name: "_adapters",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_maturity",
        type: "uint256",
      },
    ],
    name: "createTranche",
    outputs: [
      {
        internalType: "contract ITranche",
        name: "tranche",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101b9806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638d3f0cfe14610030575b600080fd5b61004761003e3660046100a1565b60009392505050565b6040516001600160a01b03909116815260200160405180910390f35b6001600160a01b038116811461007857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b803561009c81610063565b919050565b6000806000606084860312156100b657600080fd5b83356100c181610063565b925060208481013567ffffffffffffffff808211156100df57600080fd5b818701915087601f8301126100f357600080fd5b8135818111156101055761010561007b565b8060051b604051601f19603f8301168101818110858211171561012a5761012a61007b565b60405291825284820192508381018501918a83111561014857600080fd5b938501935b8285101561016d5761015e85610091565b8452938501939285019261014d565b979a97995050505060409590950135945050505056fea26469706673582212204554c1da288f42f998fec937608d7f078df661871a95868f8af04510cb08d72764736f6c634300080a0033";

type TrancheFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TrancheFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TrancheFactory__factory extends ContractFactory {
  constructor(...args: TrancheFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TrancheFactory> {
    return super.deploy(overrides || {}) as Promise<TrancheFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TrancheFactory {
    return super.attach(address) as TrancheFactory;
  }
  override connect(signer: Signer): TrancheFactory__factory {
    return super.connect(signer) as TrancheFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TrancheFactoryInterface {
    return new utils.Interface(_abi) as TrancheFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TrancheFactory {
    return new Contract(address, _abi, signerOrProvider) as TrancheFactory;
  }
}