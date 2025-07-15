import { ExpressAdapter } from "@bull-board/express";
import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { inferenceQueue } from "@/queue/queue";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath("admin/queues");

createBullBoard({
  queues: [new BullMQAdapter(inferenceQueue)],
  serverAdapter,
});

export { serverAdapter };
