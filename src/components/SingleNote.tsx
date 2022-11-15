import { Button, Stack, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { NoteTypes } from "../types/type";
import { UpdatedNoteType } from "./NoteHome";

interface Props {
  item: NoteTypes;
  handleEdit(id: number, updatedNote: UpdatedNoteType): void;
  deleteData(id: number): void;
}

const SingleNote = ({ item, handleEdit, deleteData }: Props) => {
  const [isEdit, setIsEdit] = useState(true);

  const [singleItem, setSingleItem] = useState(item);

  const HandleFeildChange = () => {
    setIsEdit(!isEdit);
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { name, value } = event.target;
    setSingleItem({ ...singleItem, [name]: value });
  };

  const updateNote = () => {
    handleEdit(item.id, singleItem);
    HandleFeildChange();
  };

  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{item.title}</Text>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {isEdit ? (
          <Text fontSize={{ base: "sm" }} textAlign={"left"} maxW={"4xl"}>
            {item.noteText}
          </Text>
        ) : (
          <Textarea
            onChange={handleChange}
            name="noteText"
            defaultValue={item.noteText}
            placeholder="Edit note"
          />
        )}
        <Stack direction="row" alignItems="center">
          <Text fontWeight="semibold">
            {new Date(item.date).toDateString()}
            <br />
            {new Date(item.date).toLocaleTimeString()}
          </Text>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }}>
          {!isEdit ? (
            <Button onClick={updateNote}>Update</Button>
          ) : (
            <>
              <Button
                onClick={HandleFeildChange}
                variant="outline"
                colorScheme="green"
              >
                Edit
              </Button>
              <Button colorScheme="green" onClick={() => deleteData(item.id)}>
                Delete
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SingleNote;
