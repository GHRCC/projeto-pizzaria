"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@/components/appBar";

export default function Pizza() {
  const [estado, setEstado] = useState({});

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:3333/category/product", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTG9sYSIsImVtYWlsIjoibG9sYUB0ZXN0ZS5jb20iLCJpYXQiOjE2ODc4NzU1MDMsImV4cCI6MTY5MDQ2NzUwMywic3ViIjoiNTdhYmVhMmUtMDgwMy00MDZlLWJiZTItZTRkMDE4YjFlMGFlIn0.vnR4OCAQK5OAZY6IKDHFjndlQ_sdciVygGL-7QoTkpU",
        },
      });
      console.log(result, "qualquer texto");
      setEstado(result);
    })();
  }, []);

  return (
    <div>
      <p>{JSON.stringify(estado, null, 2)}</p>
    </div>
  );
}
