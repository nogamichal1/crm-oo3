export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.company.findMany({ orderBy: { CompanyName: 'asc' } });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.company.create({ data: body });
  return NextResponse.json(created, { status: 201 });
}
