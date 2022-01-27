import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { router as usersRouter } from "@routes/users.routes";
import { router as todoRouter } from "@routes/todos.routes";

const app = express();

app.use(express.json());

app.use(usersRouter);
app.use(todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }

  return res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => console.log("🚀 Server started on port 3000"));
