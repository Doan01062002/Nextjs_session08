import { NextRequest, NextResponse } from "next/server";
import React from "react";
import fs from "fs";
import path from "path";
// dùng api tương tác vào cơ sở dữ liệu

type Paramtypes = {
  params: {
    id: number;
  };
};

// export async function GET(req: any, res: any) {
//   console.log(req);

//   const user = [
//     {
//       id: 1,
//       name: "Hoa",
//     },
//     {
//       id: 2,
//       name: "Long",
//     },
//     {
//       id: 3,
//       name: "Chin",
//     },
//   ];
//   return NextResponse.json({ data: user });
// }

// export async function POST(request: Request) {
//   const data = await request.json();
//   console.log("data post", data);

//   return NextResponse.json({ message: "them thanh cong", user: data });
// }

// FS file

export async function GET() {
  try {
    // Buoc 1: lấy ra đường dẫn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");
    // Bước 2: Sử dụng fs để đọc file
    const data = fs.readFileSync(filePath, "utf8");
    // Bước 3: Ép kiểu từ dạng JSON sang TS
    const users = JSON.parse(data);
    // trả về dữ liệu cho phía client
    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    // B1: Lấy dữ liệu từ client
    const userRequest = await request.json();
    // B2: Lấy ra đường dẫn của file cần đọc
    const filePath = path.join(process.cwd(), "database", "users.json");
    // Đọc file cần ghi vào
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    // Push dữ liệu vào trong mảng
    users.push(userRequest);
    // B3: Ghi file
    fs.writeFileSync(filePath, JSON.stringify(users), "utf8");
    return NextResponse.json({ message: "Ghi file không thành công" });
  } catch (err) {
    return NextResponse.json({ message: "Ghi file không thành công" });
  }
}
