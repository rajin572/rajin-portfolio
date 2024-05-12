"use client";

import { createSkill } from "@/actions/createSkill";
import Container from "@/components/ui/Container";
import useImageUpload from "@/utils/uploadImage";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateSkill = () => {
  const { register, handleSubmit, reset } = useForm();
  const { uploadImage } = useImageUpload();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating skill....");
    try {
      const imageData = data.image;
      const imageUrl = await uploadImage(imageData);

      if (imageUrl.status_code === 400) {
        throw new Error("ImageBB Can't Upload This Image Try Another Image");
      }

      const SkillData = {
        image: imageUrl?.data?.url,
        skillName: data.skillName,
        percentage: Number(data.percentage),
      };

      const res = await createSkill(SkillData);
      if (res) {
        toast.success("Skill Created Successfully", {
          id: toastId,
          duration: 1000,
        });
        reset();
      } else {
        throw new Error("Faild To Upload In Server");
      }
    } catch (err) {
      toast.error(String(err), {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="my-20">
      <form
        className="md:grid md:grid-cols-2 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5 col-span-2">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-image text-secondary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span>
              {" "}
              Image Link :{" "}
              <span className="text-sm text-secondary">
                (must use image not icon)
              </span>
            </span>
          </label>
          <input
            type="file"
            {...register("image")}
            name="image"
            placeholder="Enter Your Image Link"
            required
            className="border-2 focus:border-secondary bg-primary focus:ring-secondary p-2 outline-none w-full mt-3 rounded text-white"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
              <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
            </svg>
            <span> Skill Name :</span>
          </label>
          <input
            type="text"
            {...register("skillName")}
            name="skillName"
            placeholder="Enter Your Skill Name"
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className="mb-5">
          <label className="flex items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-captions text-secondary"
            >
              <line x1="19" x2="5" y1="5" y2="19" />
              <circle cx="6.5" cy="6.5" r="2.5" />
              <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
            <span>
              {" "}
              Knowing Percentage :{" "}
              <span className="text-sm text-secondary">(in percentage)</span>
            </span>
          </label>
          <input
            type="number"
            {...register("percentage")}
            name="percentage"
            placeholder="Enter Your Knowing Percentage"
            required
            className="border-2 focus:border-secondary focus:ring-secondary p-2 outline-none w-full mt-3 rounded bg-primary"
          />
        </div>
        <div className=" mt-6 col-span-2">
          <button className="w-full border-2 border-secondary bg-primary text-primary-foreground hover:bg-secondary hover:text-primary font-bold py-2 rounded dark:bg-secondary dark:border-secondary duration-500 transition-all  flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-plus"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            <span>Create Skill</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSkill;
