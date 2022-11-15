import React, { useState } from "react";
import { Text, Center, Stack, Button, Textarea } from "@chakra-ui/react";
import { NoteTypes } from "../types/type";
import SingleNote from "./SingleNote";
import { UpdatedNoteType } from "./NoteHome";
// import { PopUp } from "./PopUp";
interface Props {
  storeData: NoteTypes[];
  deleteData: (id: number) => Promise<void>;
  handleEdit(id: number, updatedNote: UpdatedNoteType): void;
}

const ShowNoteData = ({
  storeData,
  deleteData,

  handleEdit,
}: Props) => {
  // handleChange

  // handleIconeChange

  return (
    <div>
      {storeData.map((item, i) => (
        <SingleNote
          key={i}
          handleEdit={handleEdit}
          item={item}
          deleteData={deleteData}
        />
      ))}
    </div>
  );
};

export default ShowNoteData;
