import prisma from "../../lib/prisma.js";
import type { Request, Response } from "express";

export const create = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });

  return res.status(201).json(user);
};

export const show = async (req: Request, res: Response) => {
  const showUser = await prisma.user.findMany();

  res.status(200).json(showUser);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });

  return res.status(200).json({
    message: "Usuário deletado com sucesso",
    user,
  });
};
