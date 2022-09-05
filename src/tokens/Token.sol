// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.10;

// External references
import {ERC20} from "solmate/src/erc20/ERC20.sol";

/// @title Base Token
contract Token is ERC20 {
    uint256 public immutable BASE_UNIT;
    address public immutable tranche;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        address _tranche
    ) ERC20(_name, _symbol, _decimals) {
        BASE_UNIT = 10**_decimals;
        tranche = _tranche;
    }

    /// @param account The address to send the minted tokens
    /// @param amount The amount to be minted
    function mint(address account, uint256 amount) public onlyTranche {
        _mint(account, amount);
    }

    /// @param account The address from where to burn tokens from
    /// @param amount The amount to be burned
    function burn(address account, uint256 amount) public onlyTranche {
        _burn(account, amount);
    }

    modifier onlyTranche() {
        require(msg.sender == tranche, "Token:Only tranche can mint/burn");
        _;
    }
}