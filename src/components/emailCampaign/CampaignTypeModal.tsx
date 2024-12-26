import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";
import { ModalFooter } from "../modal/ModalFooter";
import CustomButton from "../shared/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type CampaignType = {
  label: string;
  description: string;
  link: string;
};

const campaignTypes: CampaignType[] = [
  {
    label: "Regular",
    description:
      "Campaign with HTML email content as well as images, links. This is the most common type.",
    link: "/regular-campaign",
  },
  {
    label: "Plain Text",
    description:
      "Send a plain-text email without link tracking, images, or HTML.",
    link: "/plain-text-campaign",
  },
  {
    label: "Custom HTML",
    description:
      "Send a plain-text email without link tracking, images, or HTML.",
    link: "/custom-html-campaign",
  },
];

const CampaignTypeModal = () => {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSubmit = () => {
    if (selectedType) {
      const selectedCampaign = campaignTypes.find(
        (type) => type.label === selectedType
      );
      if (selectedCampaign) {
        navigate(selectedCampaign.link);
      }
    } else {
      toast.warning("Please select a campaign type before submitting.");
    }
  };

  return (
    <DialogContent className="rounded-[26px] w-[530px]">
      <ModalHeader title="Select campaign type" icon={X} />
      <div>
        <ModalBody className="w-full flex flex-col gap-6 my-5 ">
          {campaignTypes.map((type) => (
            <div className="flex items-center gap-1.5">
              <button
                key={type.label}
                onClick={() => setSelectedType(type.label)}
                className={`w-[129px] h-8 rounded-[17px] text-darker text-sm font-semibold font-Nunito flex items-center justify-center whitespace-nowrap border p-4 ${
                  selectedType === type.label
                    ? "border-primary bg-primary text-white"
                    : "border-[#000000]"
                }`}
              >
                {" "}
                {type.label}
              </button>
              <span className="text-[10px] max-w-[300px] text-[#888888] font-Nunito font-semibold">
                {type.description}
              </span>
            </div>
          ))}
        </ModalBody>
        <ModalFooter>
          <h2 className="text-[#434343] text-sm font-Nunito">
            *You can choose one Select campaign type
          </h2>
          <CustomButton
            variant="primary"
            label="Submit"
            onClick={handleSubmit}
            className="w-[129px] h-10 rounded-lg text-xs font-Nunito font-bold mx-auto mt-3"
            size="lg"
          />
        </ModalFooter>
      </div>
    </DialogContent>
  );
};

export default CampaignTypeModal;
