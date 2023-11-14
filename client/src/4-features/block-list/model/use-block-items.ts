import { useState } from "react";
import { useBlockListQuery } from "@/5-entities/block-list";
import { useDebounceValue } from "@/6-shared/lib/react-std";

export function useBlockItems() {
  const [q, setQ] = useState("");

  const blockListQuery = useBlockListQuery({ q: useDebounceValue(q, 400) });

  const items = blockListQuery.data?.items ?? [];

  return { items, isLoading: blockListQuery.isLoading, q, setQ };
}
