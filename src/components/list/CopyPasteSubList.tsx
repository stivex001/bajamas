import useDynamicForm from "@/hooks/useDynamicForm";
import { Field } from "@/schemas/dynamicSchema";
import ControlledInput from "../shared/ControlledInput";
import CustomControlledSelect from "../shared/CustomControlledSelect";
import { useEffect, useState } from "react";
import { groups } from "@/api/crud/groups";
import { SubscriberData, useSubscribers } from "@/api/crud/subscribers";
import { toast } from "sonner";
import CustomButton from "../shared/CustomButton";
import { useNavigate } from "react-router-dom";
import { Country, State } from "country-state-city";

const fields: Field[] = [
  {
    name: "fname",
    type: "text",
    isRequired: true,
  },
  {
    name: "lname",
    type: "text",
    isRequired: true,
  },
  {
    name: "country",
    type: "text",
    // isRequired: true,
  },
  {
    name: "phone",
    type: "text",
    isRequired: true,
  },

  {
    name: "state",
    type: "text",
    // errorMessage: "job title is required",
    // isRequired: true,
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
    isRequired: true,
  },

  {
    name: "tag",
    type: "text",
    errorMessage: "Select A Tag",
    isRequired: true,
  },
];

const CopyPasteSubList = () => {
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useDynamicForm<SubscriberData>(
    fields,
    {}
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState<
    { value: string; label: string }[]
  >([]);
  const [states, setStates] = useState<{ value: string; label: string }[]>([]);

  const selectedCountry = watch("country");

  useEffect(() => {
    const countryList = Country?.getAllCountries()?.map((country) => ({
      value: country?.isoCode,
      label: country?.name,
    }));
    setCountries(countryList);
  }, []);

  // Fetch states when country changes
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
      setStates([]); // Reset state when no country is selected
    }
  }, [selectedCountry]);

  const { getGroupList } = groups();
  const { createSubscriber, getSubscriberList } = useSubscribers();

  const { refetch } = getSubscriberList();
  const { data: list } = getGroupList();

  const groupList = list?.message;

  const { isPending, mutate } = createSubscriber;

  const tagList = Array.isArray(groupList)
    ? groupList?.map((tag: any) => ({
        value: `${tag?.id}`,
        label: tag?.name,
      }))
    : [];

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

  const onSubmit = async (data: any) => {
    try {
      await mutate(data, {
        onSuccess: (response: any) => {
          console.log(response, "res_");
          if (response.status === true) {
            toast.success(response?.message);
            refetch();
            navigate("/list/subscribers");
          } else {
            toast.error(response?.message);
          }
        },
        onError: (error: any) => {
          toast.error(error?.message);
        },
      });
    } catch (error) {
      console.log("An error occurred: ", error);
    }
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
            name="fname"
            control={control}
            placeholder="Enter full name"
            type="text"
            label="First Name"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="lname"
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
          <CustomControlledSelect
            name="state"
            control={control}
            label="State"
            placeholder="Select State"
            options={stateOptions}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          <ControlledInput
            name="phone"
            control={control}
            placeholder=""
            type="text"
            label="Phone Number"
            variant="primary"
            rules={{ required: true }}
          />
          <ControlledInput
            name="dob"
            control={control}
            placeholder="dd/mm/yyyy"
            type="date"
            label="Date Of Birth"
            dontShowTime
          />
          <CustomControlledSelect
            name="tag"
            control={control}
            label="Group"
            placeholder="Select Your Group"
            options={tagList}
            searchable
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        <CustomButton
          size="lg"
          isLoading={isPending}
          label="Submit"
          // disabled={!isValid}
          type="submit"
          className="bg-primary w-[180px] h-[44px] rounded-[10px] flex items-center justify-center py-1 px-6 gap-3 mx-auto mt-7"
        />
      </form>
    </div>
  );
};

export default CopyPasteSubList;
