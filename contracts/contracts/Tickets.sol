// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MuseumTicket is ERC721, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721("MuseumTicket", "MTK") {}

    function mintTicket(address receiver) public onlyOwner {
        _safeMint(receiver, _tokenIdCounter);
        _tokenIdCounter++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://yourwebsite.com/api/ticket/";
    }
}
