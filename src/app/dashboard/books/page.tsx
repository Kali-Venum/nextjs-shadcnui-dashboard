// "use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllBooks } from "@/app/actions/books.actions";
import PaginationComponent from "@/components/PaginationComponent";

const page = async () => {
  const books = await getAllBooks(1, 5);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book: any, index: number) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>{book.body}</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationComponent />
    </div>
  );
};

export default page;
