import { CancelIcon, FlyIcon } from "@/assets/svgs/MenuIcon";
import { CardLayout } from "@/components/shared/CardLayout";

const notifications = [
  {
    title: "Toast title",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Toast title",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Toast title",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
const Notifications = () => {
  return (
    <CardLayout>
      <div className="py-5 px-3 flex flex-col gap-4 rounded-lg">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="bg-[#F4F9F4] py-5 px-10 rounded-lg flex flex-col gap-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {notification.message}
                </p>
              </div>
              <button
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close"
              >
                <CancelIcon />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 flex items-center gap-2">
                <span className="text-white">
                  <FlyIcon />
                </span>
                Button
              </button>
              <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 flex items-center gap-2">
                <span className="text-white">
                  <FlyIcon />
                </span>
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </CardLayout>
  );
};

export default Notifications;
