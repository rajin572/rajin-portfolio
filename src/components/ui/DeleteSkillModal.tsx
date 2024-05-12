"use client";

import { Tskill } from "@/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { deleteskill } from "@/actions/deleteSkill";

const DeleteSkillModal = ({ skill }: { skill: Tskill }) => {
  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteskill(id);
      if (res) {
        toast.success("Project Deleted Successfully", {
          duration: 1000,
        });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Something Want Wrong", {
        duration: 1500,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xs p-2 w-fit h-fit me-2" variant="destructive">
          <Trash2 className="h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delele This Project</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <div>
              <Image
                src={skill?.image}
                alt="product-image"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-20 h-20 mx-auto "
              />
              <DialogDescription className="text-foreground mt-2">
                <span className="text-secondary">Title : </span>
                {skill.skillName}
              </DialogDescription>
            </div>
            <h2 className="mt-5">Are You Want to Delele {skill.skillName} ?</h2>
            <DialogClose asChild>
              <Button
                className="w-full mt-3 bg-secondary text-primary hover:bg-secondary hover:text-primary"
                onClick={() => handleDelete(skill?._id as string)}
              >
                Delete Post
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSkillModal;
