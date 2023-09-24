import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const homeRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getProductByCategory: publicProcedure
    .input(z.object({ categoryId: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.product.findMany();
    }),

  getAllCategory: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
