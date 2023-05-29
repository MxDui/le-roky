// scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  const MuseumTicket = await ethers.getContractFactory("MuseumTicket");
  const museumTicket = await MuseumTicket.deploy();
  await museumTicket.deployed();
  console.log("MuseumTicket deployed to:", museumTicket.address);
}

main()
  .then(() => console.log("Deployment successful!"))
  .catch((error) => {
    console.error(error);
    throw new Error("Deployment failed!");
  });
