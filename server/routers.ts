import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { contactInquiryInput, formatInquiryNotification } from "./contact";
import { createContactInquiry } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure.input(contactInquiryInput).mutation(async ({ input }) => {
      // Quietly accept bot traffic caught by the hidden honeypot without storing it.
      if (input.website) return { accepted: true, notified: false };

      try {
        await createContactInquiry({
          name: input.name,
          email: input.email,
          company: input.company || null,
          projectType: input.projectType || null,
          budget: input.budget || null,
          message: input.message,
        });

        const notified = await notifyOwner({
          title: `New portfolio inquiry — ${input.name}`,
          content: formatInquiryNotification(input),
        }).catch(() => false);

        return { accepted: true, notified };
      } catch (error) {
        console.error("[Contact] Failed to store inquiry", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Your message could not be delivered right now. Please email Khalid directly.",
        });
      }
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
