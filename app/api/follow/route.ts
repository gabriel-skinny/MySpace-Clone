import { getSession } from "next-auth/react";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "../../../lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session.user.email;
  const { targetUserId } = await req.json();

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
      select: { id: true },
    })
    .then((user) => user.id);

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session.user.email;
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");

  const currentUserId = await prisma.user
    .findUnique({
      where: { email: currentUserEmail },
      select: { id: true },
    })
    .then((user) => user.id);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followingId: targetUserId,
        followerId: currentUserId,
      },
    },
  });

  return NextResponse.json(record);
}
