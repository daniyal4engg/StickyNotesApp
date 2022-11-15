import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
} from "@chakra-ui/react";
export const PopUp = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button>Edit</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Update notes</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              <input type="text" placeholder="Enter title" />
            </PopoverBody>
            <PopoverBody>
              <textarea
                name="noteText"
                placeholder="   Enter your notes"
              ></textarea>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
};
