"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaConnect = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class PrismaConnect {
    static connect() {
        prisma.$connect();
    }
}
exports.PrismaConnect = PrismaConnect;
//# sourceMappingURL=connections.js.map