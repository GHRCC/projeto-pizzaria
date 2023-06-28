"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@/components/appBar";
import Pagination from "../../components/Pagination";
import { data } from "autoprefixer";
import { PaginationButtons } from "../../components/PaginationButton";
import { createUrlParams } from "../../../src/createUrlParams";
import { Post } from "../../../types";
import { useSearchParams } from "react-router-dom";

type Pizzas = {
  name: string;
  price: string;
  description: string;
  id: string;
};

const initialPostList = {
  count: 0,
  posts: [] as Post[],
};

export default function Pizza() {
  const [estado, setEstado] = useState<Pizzas[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "http://localhost:3333/category/product",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTG9sYSIsImVtYWlsIjoibG9sYUB0ZXN0ZS5jb20iLCJpYXQiOjE2ODc5NTM3MzAsImV4cCI6MTY5MDU0NTczMCwic3ViIjoiNTdhYmVhMmUtMDgwMy00MDZlLWJiZTItZTRkMDE4YjFlMGFlIn0.Yogrbcr-NqxmoxpNoqlcvIyGi9TiAU_qbFRj2LeJRjs",
          },
        }
      );
      setEstado(data);
    })();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  };

  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || undefined;
  const [search, setSearch] = useState(initialSearch ?? "");
  const [direction, setDirection] = useState("desc");
  const [orderBy, setOrderBy] = useState("created_at");
  const [postList, setPostList] = useState(initialPostList);

  const pageCount = Math.ceil(postList.count / pageSize);

  const pageParams = createUrlParams({ search, direction, order_by: orderBy });

  return (
    <div className="m-auto p-4 flex flex-col gap-4">
      {estado.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
      {/* <Pagination
        items={estado.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      /> */}
      <PaginationButtons
        currentPage={1}
        pageCount={pageCount}
        getLink={(page) => {
          if (page === 1) {
            return "/";
          }
          return `posts/page/${page}${pageParams}`;
        }}
      />
    </div>
  );
}
