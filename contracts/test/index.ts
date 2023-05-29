// test/MuseumTicket.ts

import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { MuseumTicket } from "../typechain/MuseumTicket";

chai.use(solidity);
const { expect } = chai;

describe("MuseumTicket", function () {
  it("Should mint a new ticket to an address", async function () {
    const MuseumTicketFactory = await ethers.getContractFactory("MuseumTicket");
    const museumTicket = (await MuseumTicketFactory.deploy()) as MuseumTicket;
    await museumTicket.deployed();
    const owner = await museumTicket.owner();
    await museumTicket.mintTicket(owner);
    expect(await museumTicket.ownerOf(0)).to.equal(owner);
  });
});
