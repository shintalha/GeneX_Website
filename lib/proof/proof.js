import { MerkleTree } from "merkletreejs"
import keccak256 from "keccak256"
import { utils } from "ethers"

import whitelistAddresses from "./wallets"

function Hash(allowence, account){
    return Buffer.from(utils.solidityKeccak256(['uint256','address'],[allowence, account],).slice(2), 'hex');
}

function proof(address) {
    const index = whitelistAddresses.findIndex(x => x.addres == address);
    if(index == -1) return null;

    const leafNodes = whitelistAddresses.map(addr => Hash(addr.allowence,addr.addres));
    const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true})
    const hex = merkleTree.getHexProof(leafNodes[index]);

    return JSON.stringify(hex);
}

export default proof;