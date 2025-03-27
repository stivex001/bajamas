import { auth } from "@/api/crud/auth";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

const fields: Field[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "phone", type: "text" },
  { name: "address1", type: "text" },
  { name: "business", type: "text" },
  { name: "country", type: "text" },
  { name: "state", type: "text" },
  { name: "city", type: "text" },
];

export const EditProfile = () => {
  const { updateProfile, getCurrentUser, uploadProfilePics } = auth();
  const { data, refetch } = getCurrentUser();

  const userInfo = Array.isArray(data?.data) ? data?.data[0] || {} : {};

  const { control, handleSubmit } = useDynamicForm(fields, {
    name: userInfo.name || "",
    email: userInfo.email || "",
    phone: userInfo.phone || "",
    address1: userInfo.address1 || "",
    business: userInfo.business?.name || "",
    country: userInfo.country || "",
    state: userInfo.state || "",
    city: userInfo.city || "",
    profile: userInfo.profile || "",
  });
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // const { mutate, isPending } = updateProfile;
  // const { mutate: uploadPics, isPending: uploadPending } = uploadProfilePics;

  const onSubmit = (data: any) => {
    console.log(data);
    refetch()
  };

  return (
    <CardLayout className="py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-8/12 mx-auto flex flex-col gap-9"
      >
        <div className="mx-auto text-center">
          <div
            className="bg-[#ECECEE] w-24 h-24 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden"
            onClick={handleUploadClick}
          >
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FaCamera className="text-gray-600 text-2xl" />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>
          <h2 className="text-primary font-semibold text-sm font-Nunito mt-4">
            Upload Profile Picture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-7 gap-x-12">
          <ControlledInput
            name="name"
            control={control}
            placeholder=""
            type="text"
            label="Full Name"
            variant="primary"
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Email Address"
            variant="primary"
          />
          <ControlledInput
            name="phone"
            control={control}
            placeholder=""
            type="text"
            label="Phone  Number"
            variant="primary"
          />
          <ControlledInput
            name="business"
            control={control}
            placeholder=""
            type="text"
            label="Company / Organization"
            variant="primary"
          />
          <ControlledInput
            name="country"
            control={control}
            placeholder=""
            type="text"
            label="Country *"
            variant="primary"
          />
          <ControlledInput
            name="state"
            control={control}
            placeholder=""
            type="text"
            label="State / Province / Region *"
            variant="primary"
          />
          <ControlledInput
            name="city"
            control={control}
            placeholder=""
            type="text"
            label="City *"
            variant="primary"
          />
          <ControlledInput
            name="address1"
            control={control}
            placeholder=""
            type="text"
            label="Address 1 *"
            variant="primary"
          />
        </div>
        <div className="flex justify-center">
          <CustomButton
            label="Save"
            variant="primary"
            className="w-[274px]"
            size="lg"
            type="submit"
            // disabled={!isValid}
          />
        </div>
      </form>
    </CardLayout>
  );
};
