import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { utils } from "ethers"

import whitelistAddresses from "./wallets"

function Hash(account){
    return Buffer.from(utils.solidityKeccak256(['address'],[account],).slice(2), 'hex');
}

function proof(address) {
    const index = whitelistAddresses.findIndex(x => x == address);
    if(index == -1) return null;

    const leafNodes = whitelistAddresses.map(addr => Hash(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})
    const hex = merkleTree.getHexProof(leafNodes[index]);

    return JSON.stringify(hex);
}

export default proof;