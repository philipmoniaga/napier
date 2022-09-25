/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NapierPoolFactoryMock,
  NapierPoolFactoryMockInterface,
} from "../../Tranche.t.sol/NapierPoolFactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "nPT",
        type: "address",
      },
    ],
    name: "createPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isRegisteredPool",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101d1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633bc5de3014610051578063673a2a1f1461007c578063c699e6331461008b578063e3433615146100af575b600080fd5b6040805160008082526020820181905291810182905260608101919091526080015b60405180910390f35b606060405161007391906100dd565b61009f610099366004610146565b50600190565b6040519015158152602001610073565b6100c56100bd366004610168565b600092915050565b6040516001600160a01b039091168152602001610073565b6020808252825182820181905260009190848201906040850190845b8181101561011e5783516001600160a01b0316835292840192918401916001016100f9565b50909695505050505050565b80356001600160a01b038116811461014157600080fd5b919050565b60006020828403121561015857600080fd5b6101618261012a565b9392505050565b6000806040838503121561017b57600080fd5b6101848361012a565b91506101926020840161012a565b9050925092905056fea2646970667358221220da60ec2e8ce6f5f12fb1fe6f893e9518daa889615f059a7ff2711bea1a4e646864736f6c634300080a0033";

type NapierPoolFactoryMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NapierPoolFactoryMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NapierPoolFactoryMock__factory extends ContractFactory {
  constructor(...args: NapierPoolFactoryMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NapierPoolFactoryMock> {
    return super.deploy(overrides || {}) as Promise<NapierPoolFactoryMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NapierPoolFactoryMock {
    return super.attach(address) as NapierPoolFactoryMock;
  }
  override connect(signer: Signer): NapierPoolFactoryMock__factory {
    return super.connect(signer) as NapierPoolFactoryMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NapierPoolFactoryMockInterface {
    return new utils.Interface(_abi) as NapierPoolFactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NapierPoolFactoryMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NapierPoolFactoryMock;
  }
}
