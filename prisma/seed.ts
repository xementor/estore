import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  // Example 1: Create a User
  const user1 = await prisma.user.create({
    data: {
      id: "clmucvvmm0000vqmg4fclr3vh",
      name: "dark dark",
      email: "f.mega.email@gmail.com",
      image:
        "https://lh3.googleusercontent.com/a/ACg8ocIgBZ1N-WLg2JLpZgNCs0BlWZT83kSslRwAvzt31buX=s96-c",
    },
  });

  const account1 = await prisma.account.create({
    data: {
      id: "clmucvvqr0002vqmgir9m0rgq",
      userId: user1.id,
      type: "oauth",
      provider: "google",
      providerAccountId: "108442409955343579499",
      access_token:
        "ya29.a0AfB_byAAtvrb-Ka0mqO-t6yA6UKvTbAM1eFU-zzT_7TAUphy5vBLZ2NivE3_KrvVYFFvg36RXgS_9XJeBUqfSBVFDm5WG8AHxP632fmFIQN8MdLUvPZxeIqp9Xg1YlRlMUVbmZZxjquFHHEbTubHayih3K-jQNY6vBXjaCgYKAcYSARMSFQGOcNnCIRXTiOxFEWxznGlWu6wkWA0171",
      expires_at: 1695375883,
      token_type: "Bearer",
      scope:
        "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
      id_token:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZmNzI1NDEwMWY1NmU0MWNmMzVjOTkyNmRlODRhMmQ1NTJiNGM2ZjEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1MzgwNDg0MDg4OTgtMWZ0MHIyZjNiYzlldjJ0bjY3OGhxMmxoZW82YmVoN2wuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1MzgwNDg0MDg4OTgtMWZ0MHIyZjNiYzlldjJ0bjY3OGhxMmxoZW82YmVoN2wuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDg0NDI0MDk5NTUzNDM1Nzk0OTkiLCJlbWFpbCI6ImYubWVnYS5lbWFpbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkVXTnBJdTJzWTdoUl9QeW00NjRTeVEiLCJuYW1lIjoiZGFyayBkYXJrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0lnQloxTi1XTGcySkxwWmdOQ3MwQmxXWlQ4M2tTc2xSd0F2enQzMWJ1WD1zOTYtYyIsImdpdmVuX25hbWUiOiJkYXJrIiwiZmFtaWx5X25hbWUiOiJkYXJrIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE2OTUzNzIyODQsImV4cCI6MTY5NTM3NTg4NH0.dCoxdLr5iXuesLR64kHZJyy0ogYKmodjzo_K-y7cIqwGiPFfR1DCjK7PMbh3gLzMHKZaR9m7aARHwWDYuODcXLJHy-O_OoeLyHSux4X1dzvbiag5eGjDoAdMOA9JdnZnP6l8uuvwsT6xAjbFIDkopRx7N0nP-98_AFZvE8aLPHp-sYSkI1mWGgUM6Csvkg161g2MWLIzZMoTAIOEsYJK8MNnj6UrF-no23bkiIqpEyzoaFjC29NWUzAV6_vZ9xxWp13_MeokjZGqgmqk8eb6qf-tzm6--G2yfvmchYz0HkebtOzxIPaeXuVAy9umP6PlPNMl6sfYu_v8k8t66hkCkA",
    },
  });

  const session1 = await prisma.session.create({
    data: {
      id: "clmucvvua0004vqmgadkn4icl",
      sessionToken: "d6296354-1a00-4d72-8da9-7787fdedd3fc",
      userId: user1.id,
      expires: new Date(1698113848790),
    },
  });

  const customer = await prisma.customer.create({
    data: {
      userId: user1.id,
    },
  });

  for (let i = 1; i <= 5; i++) {
    const category = await prisma.category.create({
      data: {
        name: faker.commerce.department(),
      },
    });

    for (let j = 1; j <= 2; j++) {
      await prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          price: 100 + i + j,
          stockQty: 10 + i + j,
          categoryId: category.id,
        },
      });
    }
  }
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
