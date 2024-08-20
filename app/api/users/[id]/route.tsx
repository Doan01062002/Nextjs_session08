import { NextResponse } from "next/server";
// dùng api tương tác vào cơ sở dữ liệu

type Paramtypes = {
  params: {
    id: number;
  };
};
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
export async function GET(request: Request, { params }: Paramtypes) {
  const { id } = params;

  const getUser = user.find((item) => item.id === +id);

  return NextResponse.json(getUser);
}

export async function PUT(request: Request, { params }: Paramtypes) {
  const data = await request.json();

  const { id } = params;
  console.log("data put", data);

  return NextResponse.json({
    message: "cap nhat thanh cong voi PUT",
    user: data,
  });
}

export async function PATCH(request: Request, { params }: Paramtypes) {
  const data = await request.json();

  const { id } = params;
  console.log("data put", data);

  return NextResponse.json({
    message: "cap nhat thanh cong PATCH",
    user: data,
  });
}

export async function DELETE(request: Request, { params }: Paramtypes) {
  const { id } = params;

  return NextResponse.json({ idForDelete: id });
}
