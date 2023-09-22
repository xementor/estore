import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // Example 1: Create a User
  const user1 = await prisma.user.create({
    data: {
      name: "User1",
      email: "user1@example.com",
      emailVerified: new Date(),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
