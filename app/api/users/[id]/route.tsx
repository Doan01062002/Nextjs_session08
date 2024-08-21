import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
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

// export async function PUT(request: Request, { params }: Paramtypes) {
//   const data = await request.json();

//   const { id } = params;
//   console.log("data put", data);

//   return NextResponse.json({
//     message: "cap nhat thanh cong voi PUT",
//     user: data,
//   });
// }

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

// PUT fs

export async function PUT(request: NextRequest, params: { id: string }) {
  // B1: Lấy vị trí file cần đọc
  const filePath = path.join(process.cwd(), "database", "user.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  // B2: Tìm kiếm vị trí cần cập nhật
  const fileIndex = users.findIndex((user: any) => user.id == +params.id);
  // B3: Gán lại giá trị cho phần tử cần cập nhật
  if (fileIndex !== -1) {
    users[fileIndex].name = "phuong";
  }
  // B4: Ghi đè lại file
  fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
  // B5: Trả về thông báo
  return NextResponse.json("PUT");
}
