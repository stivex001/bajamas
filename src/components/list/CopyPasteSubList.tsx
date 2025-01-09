import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "../shared/ControlledInput";
import CustomControlledSelect from "../shared/CustomControlledSelect";
import { useState } from "react";

const fields: Field[] = [
  {
    name: "firstname",
    type: "text",
    isRequired: true,
  },
  {
    name: "lastname",
    type: "text",
    isRequired: true,
  },
  {
    name: "address",
    type: "text",
    // isRequired: true,
  },
  {
    name: "phone",
    type: "text",
    isRequired: true,
  },

  {
    name: "gender",
    type: "text",
    // errorMessage: "job title is required",
    isRequired: true,
  },
  {
    name: "email",
    type: "email",
    errorMessage: "Email is required",
    isRequired: true,
  },
  {
    name: "dob",
    type: "date",
    errorMessage: "Date must be selected",
    // isRequired: true,
  },

  {
    name: "password",
    type: "text",
    errorMessage: "Password is required",
    isRequired: true,
  },
  {
    name: "referal",
    type: "text",
  },
];

const countries = [
  {
    id: 1,
    name: "United States",
    value: "USA",
  },
  {
    id: 2,
    name: "Nigeria",
    value: "NG",
  },
];

const CopyPasteSubList = () => {
  const { control, handleSubmit } = useDynamicForm(fields, {});
  const [searchTerm, setSearchTerm] = useState("");

  const country = Array.isArray(countries)
    ? countries?.map((country: any) => ({
        value: `${country?.value}`,
        label: country?.name,
      }))
    : [];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="rounded-[14px] shadow-lg py-8 px-4 lg:px-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-[100px] gap-y-7">
          <ControlledInput
            name="email"
            control={control}
            placeholder="Enter Email"
            type="email"
            label="email"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="firstname"
            control={control}
            placeholder="Enter full name"
            type="text"
            label="First Name"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="lastname"
            control={control}
            placeholder="Enter full name"
            type="text"
            label="Last Name"
            variant="primary"
            rules={{ required: true }}
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
          <ControlledInput
            name="phone"
            control={control}
            placeholder="Enter full name"
            type="text"
            label="Phone Number"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="date"
            control={control}
            placeholder="dd/mm/yyyy"
            type="date"
            label="Date Of Birth"
            rules={{ required: true }}
            dontShowTime
          />
          <CustomControlledSelect
            name="tag"
            control={control}
            label="Tag"
            placeholder="Select Your Tag"
            options={country}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        <button className="bg-primary w-[180px] h-[44px] rounded-[10px] flex items-center justify-center py-1 px-6 gap-3 text-white mx-auto mt-7">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CopyPasteSubList;
