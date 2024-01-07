const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function getAllProducts() {
    try {
        const products = await prisma.products.findMany();
        return products;
    } catch (error) {
        console.error("Error retrieving products:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

module.exports = getAllProducts;
