"use client";

import React, { useEffect, useState } from "react";
import { IoAddOutline } from "react-icons/io5";

import { DEFAULT_CARDS } from "@/data/board";
import { CardType } from "@/types";
import { loadState, saveState } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import AddSectionModal from "@/components/modals/AddSectionModal";
import Column from "./Column";

const Board = () => {
  // Load cards from local storage or use default cards
  const [cards, setCards] = useState<CardType[]>(() => {
    if (typeof window !== "undefined") {
      return loadState("cards") || DEFAULT_CARDS;
    }
    return DEFAULT_CARDS;
  });

  // Load columns from local storage or use default columns
  const [columns, setColumns] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return loadState("columns") || ["backlog", "todo", "doing", "done"];
    }
    return ["backlog", "todo", "doing", "done"];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save cards to local storage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      saveState("cards", cards);
    }
  }, [cards]);

  // Save columns to local storage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined") {
      saveState("columns", columns);
    }
  }, [columns]);

  const handleAddColumn = (name: string) => {
    const newColumns = [...columns, name];
    setColumns(newColumns);
    saveState("columns", newColumns);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-full w-full gap-8 overflow-scroll py-10 px-2">
      {columns.map((column) => (
        <Column
          key={column}
          title={column.charAt(0).toUpperCase() + column.slice(1)}
          column={column}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <div className="px-2">
        <Button
          variant="link"
          className="text-gray-400"
          onClick={() => setIsModalOpen(true)}
        >
          <IoAddOutline size={20} />
          <span className="ml-3 font-bold">Add section</span>
        </Button>
      </div>

      <AddSectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddColumn}
      />
    </div>
  );
};

export default Board;
