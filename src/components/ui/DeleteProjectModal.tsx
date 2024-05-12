"use client";

import { TProjects } from "@/types";
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
import { deleteProject } from "@/actions/deleteProject";
import { toast } from "sonner";

const DeleteProjectModal = ({ project }: { project: TProjects }) => {
  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const res = await deleteProject(id);
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
                src={project?.image}
                alt="product-image"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-full h-40 "
              />
              <DialogDescription className="text-foreground mt-2">
                <span className="text-secondary">Title : </span>
                {project.title}
              </DialogDescription>
            </div>
            <h2 className="mt-5">Are You Want to Delele {project.title} ?</h2>
            <DialogClose asChild>
              <Button
                className="w-full mt-3 bg-secondary text-primary hover:bg-secondary hover:text-primary"
                onClick={() => handleDelete(project?._id as string)}
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

export default DeleteProjectModal;
