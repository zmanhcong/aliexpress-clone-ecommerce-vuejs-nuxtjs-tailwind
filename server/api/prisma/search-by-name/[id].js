import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    try {
        let items = await prisma.products.findMany({
            take: 5, // limit to 5 results
            where: {
                // Search product by title and title field must contain the value of id
                title: {
                    contains: event.context.params.id,
                    mode: "insensitive",
                },
            },
        });
        return items;
    } catch (err) {
        console.error("An error occurred while fetching products:", error);
        return { statusCode: 500, message: "Internal Server Error" };
    }
});
