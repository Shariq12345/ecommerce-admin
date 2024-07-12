"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table";
import { columns, OrderColumn } from "./columns";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import ApiList from "@/components/api-list";

type Props = {
  data: OrderColumn[];
};

const OrderClient = ({ data }: Props) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
