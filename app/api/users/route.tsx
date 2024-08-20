import { NextResponse } from "next/server";
import React from "react";
// dùng api tương tác vào cơ sở dữ liệu

type Paramtypes = {
  params: {
    id: number;
  };
};

export async function GET(req: any, res: any) {
  console.log(req);

  const user = [
    {
      id: 1,
      name: "Hoa",
    },
    {
      id: 2,
      name: "Long",
    },
    {
      id: 3,
      name: "Chin",
    },
  ];
  return NextResponse.json({ data: user });
}

export async function POST(request: Request) {
  const data = await request.json();
  console.log("data post", data);

  return NextResponse.json({ message: "them thanh cong", user: data });
}

// export async function PUT(request: Request, { params }: Paramtypes) {
//   const data = await request.json();

//   const { id } = params;
//   console.log("data put", data);

//   return NextResponse.json({ message: "cap nhat thanh cong", user: data });
// }
