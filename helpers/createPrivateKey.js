const crypto = require("crypto")

const secret = crypto.randomBytes(32).toString("hex")

console.log(secret) // 98340d4914368e0612ce43d67b7c839d0eccae5c3e428860931e12a650968978