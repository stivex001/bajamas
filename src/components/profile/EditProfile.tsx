import { auth } from "@/api/crud/auth";
import { CardLayout } from "@/components/shared/CardLayout";
import ControlledInput from "@/components/shared/ControlledInput";
import CustomButton from "@/components/shared/CustomButton";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import CustomControlledSelect from "../shared/CustomControlledSelect";
import { Country, State } from "country-state-city";
import { BASE_IMAGE_URL } from "@/constants";

const fields: Field[] = [
  { name: "name", type: "text" },
  { name: "email", type: "email" },
  { name: "phone", type: "text" },
  { name: "address1", type: "text" },
  { name: "business", type: "text" },
  { name: "country", type: "text" },
  { name: "state", type: "text" },
  { name: "city", type: "text" },
  { name: "profile", type: "text" },
];

export const EditProfile = ({ onExitEdit }: any) => {
  const navigate = useNavigate();
  const { updateProfile, getCurrentUser, uploadProfilePics } = auth();
  const { data, refetch } = getCurrentUser();

  const handleBack = () => {
    onExitEdit();
    navigate("/profile");
  };

  const userInfo = Array.isArray(data?.data) ? data?.data[0] || {} : {};

  const { control, handleSubmit, watch } = useDynamicForm(fields, {
    name: userInfo.name || "",
    email: userInfo.email || "",
    phone: userInfo.phone || "",
    address1: userInfo.address1 || "",
    business: userInfo.business?.name || "",
    country: userInfo.country || "",
    state: userInfo.state || "",
    city: userInfo.city || "",
  });

  const { mutate, isPending } = updateProfile;
  const { mutate: uploadPics } = uploadProfilePics;

  const [profilePic, setProfilePic] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [states, setStates] = useState<{ value: string; label: string }[]>([]);
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedCountry = watch("country");

  const country = Array.isArray(countries)
    ? countries?.map((country: any) => ({
        value: `${country?.value}`,
        label: country?.label,
      }))
    : [];

  const stateOptions = Array.isArray(states)
    ? states?.map((state: any) => ({
        value: `${state?.label}`,
        label: state?.label,
      }))
    : [];

  useEffect(() => {
    const countryList = Country?.getAllCountries()?.map((country) => ({
      value: country?.isoCode,
      label: country?.name,
    }));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const stateList = State?.getStatesOfCountry(selectedCountry)?.map(
        (state) => ({
          value: state.isoCode,
          label: state.name,
        })
      );
      setStates(stateList);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("profile", file);
    try {
      await uploadPics(formData, {
        onSuccess: (response: any) => {
          console.log(response);
          if (response?.status) {
            setProfilePic(response?.data);
            // setValue("profile", response?.data?.profilepath || "");
            toast.success(response?.message);
          } else {
            toast.error(response?.message);
          }
        },
        onError: (error: any) => {
          console.log(error);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      handleImageUpload(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        ...data,
        profile: profilePic?.profilepath || "",
      };
      await mutate(payload, {
        onSuccess: (response: any) => {
          console.log(response);
          toast.success(response?.message);
          refetch();
          handleBack();
        },
        onError: (error: any) => {
          console.log(error);
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resolvedProfilePic =
    userInfo?.profilepath ||
    (userInfo?.profile ? `${BASE_IMAGE_URL}${userInfo.profile}` : null);

  return (
    <CardLayout className="py-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-8/12 mx-auto flex flex-col gap-9"
      >
        <div className="mx-auto text-center">
          <div
            className="relative w-24 h-24 rounded-full overflow-hidden bg-[#ECECEE] cursor-pointer group"
            onClick={handleUploadClick}
          >
            {(profilePic || resolvedProfilePic) && (
              <img
                src={profilePic?.profilepath || resolvedProfilePic}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            )}
            <div className="absolute inset-0 bg-red-500 bg-opacity-30 flex items-center justify-center opacity-0 ">
              <FaCamera className="text-gray-600 text-2xl" />
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>

          <h2 className="text-primary font-semibold text-sm font-Nunito mt-4">
            {profilePic?.profile || "No profile picture uploaded"}
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
            readOnly
          />
          <ControlledInput
            name="email"
            control={control}
            placeholder=""
            type="text"
            label="Email Address"
            variant="primary"
            readOnly
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
          <CustomControlledSelect
            name="country"
            control={control}
            label="Country"
            placeholder="Select Country"
            options={country}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <CustomControlledSelect
            name="state"
            control={control}
            label="State / Province / Region *"
            placeholder="Select State"
            options={stateOptions}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
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
        <div className="flex gap-3 justify-center">
          <CustomButton
            label="Save"
            variant="primary"
            className="w-[274px]"
            size="lg"
            type="submit"
            isLoading={isPending}
          />
          <CustomButton
            label="Back"
            variant="primary"
            className="w-[274px] bg-transparent border text-black "
            size="lg"
            type="button"
            onClick={handleBack}
          />
        </div>
      </form>
    </CardLayout>
  );
};
