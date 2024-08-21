"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any>();

  useEffect(() => {
    let data = axios.get("http://localhost:3000/api/users");
    data
      .then((response) => {
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      Danh sach User:
      {users?.map((item: any) => {
        return (
          <div>
            <p>id:{item.id}</p>
            <p>name: {item.name}</p>
          </div>
        );
      })}
      <Button variant="default">Button</Button>
    </div>
  );
}
