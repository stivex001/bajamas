import { useState } from "react";
import { Dialog } from "@headlessui/react";
import DatePicker from "react-datepicker"; // Install if not added
import "react-datepicker/dist/react-datepicker.css";
import { useCampaignStore } from "@/store/useCampaignStore";

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleModal = ({ isOpen, onClose }: ScheduleModalProps) => {
  const { setCampaignData, campaignData } = useCampaignStore();
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    campaignData.schedule_date ? new Date(campaignData.schedule_date) : null
  );

  const handleConfirm = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
      setCampaignData({
        schedule_date: formattedDate,
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay (closes modal on click) */}
      <div className="fixed inset-0 bg-black bg-opacity-30" onClick={onClose} />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white rounded-lg shadow-lg p-5">
          <h2 className="text-lg font-semibold mb-4">Select Schedule Date</h2>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />

          <button
            onClick={handleConfirm}
            className="w-12 flex items-center justify-center self-center mx-auto mt-3 py-1.5 px-3 border text-sm bg-[#E6F2E6] text-primary rounded-md"
          >
            Ok
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ScheduleModal;
