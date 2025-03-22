import { X } from "lucide-react";
import { ModalHeader } from "../modal/ModalHeader";
import { DialogContent } from "../ui/dialog";
import { ModalBody } from "../modal/ModalBody";

const AiAssitance = () => {
  return (
    <DialogContent className="rounded-[26px] w-[350px]  lg:w-[530px]">
      <ModalHeader title="Need Assistance? " icon={X} />
      <div>
        <ModalBody>
          <form action="">
            <label>Name:</label>
            <input type="text" id="name" name="name" required />
          </form>
        </ModalBody>
      </div>
    </DialogContent>
  );
};

export default AiAssitance;
