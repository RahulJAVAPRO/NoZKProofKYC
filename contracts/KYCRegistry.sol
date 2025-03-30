// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./KYCRegistry.sol";

contract KYCRegistry is Ownable {
    enum KYCStatus { Unverified, Pending, Verified, Rejected }

    struct User {
        string name;
        uint8 age;
        string userId;  // Unique user identifier (hashed for privacy)
        address wallet;
        KYCStatus status;
        uint256 timestamp;
    }

    mapping(address => User) public users;
    mapping(address => bool) public kycVerifiers;

    event KYCRequested(address indexed user, string userId);
    event KYCApproved(address indexed user);
    event KYCRejected(address indexed user, string reason);
    event KYCRevoked(address indexed user);
    event VerifierAdded(address indexed verifier);
    event VerifierRemoved(address indexed verifier);

    modifier onlyVerifier() {
        require(kycVerifiers[msg.sender], "Not an authorized verifier");
        _;
    }

    constructor() Ownable(msg.sender) {
        kycVerifiers[msg.sender] = true; // Deployer is the first verifier
    }

    function requestKYC(string memory _name, uint8 _age, string memory _userId) external {
        require(users[msg.sender].status == KYCStatus.Unverified, "KYC already requested or verified");
        require(_age > 0, "Invalid age"); 

        users[msg.sender] = User({
            name: _name,
            age: _age,
            userId: _userId,
            wallet: msg.sender,
            status: KYCStatus.Pending,
            timestamp: block.timestamp
        });

        emit KYCRequested(msg.sender, _userId);
    }

    function approveKYC(address _user) external onlyVerifier {
        require(users[_user].status == KYCStatus.Pending, "User not in pending state");

        users[_user].status = KYCStatus.Verified;
        emit KYCApproved(_user);
    }

    function rejectKYC(address _user, string memory _reason) external onlyVerifier {
        require(users[_user].status == KYCStatus.Pending, "User not in pending state");

        users[_user].status = KYCStatus.Rejected;
        emit KYCRejected(_user, _reason);
    }

    function revokeKYC(address _user) external onlyVerifier {
        require(users[_user].status == KYCStatus.Verified, "User is not verified");

        users[_user].status = KYCStatus.Unverified;
        emit KYCRevoked(_user);
    }

    function addVerifier(address _verifier) external onlyOwner {
        kycVerifiers[_verifier] = true;
        emit VerifierAdded(_verifier);
    }

    function removeVerifier(address _verifier) external onlyOwner {
        kycVerifiers[_verifier] = false;
        emit VerifierRemoved(_verifier);
    }

    function getUserInfo(address _user) external view returns (string memory, uint8, KYCStatus) {
        User memory user = users[_user];
        return (user.name, user.age, user.status);
    }

    function isUserVerified(address _user) external view returns (bool) {
        return users[_user].status == KYCStatus.Verified;
    }

    function isVerifier(address _verifier) external view returns (bool) {
        return kycVerifiers[_verifier];
    }
}