import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const homeRouter = createTRPCRouter({
  getProductByCategory: publicProcedure
    .input(z.object({ categoryId: z.number() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.product.findMany();
    }),

  getAllCategory: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
});
