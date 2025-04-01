import { useNotification } from "@/api/crud/notification";
import { FlyIcon } from "@/assets/svgs/MenuIcon";
import { CardLayout } from "@/components/shared/CardLayout";
import { toast } from "sonner";

const Notifications = () => {
  const { getAllNotification, markRead } = useNotification();
  const { data: notification, refetch } = getAllNotification();
  const { mutate: markNotificationAsRead } = markRead;

  const notificationData = notification?.data;



  const handleReadNotification = async (id: string, url: string) => {
    // Optionally mark notification as read (API call)
    try {
      const formData = new FormData();
      formData.append("id", id);
      await markNotificationAsRead(formData, {
        onSuccess: (res: any) => {
          console.log(res, "res___");
          if (res.status) {
            toast.success(res?.message);
            refetch();
            window.location.href = url;
          } else {
            toast.error(res?.message);
          }
        },
        onError: (error: any) => {
          console.log(error);
          toast.error(error.message);
        },
      });
    } catch (error) {}
    // Navigate to the extracted URL
    console.log(id);
  };

  return (
    <CardLayout>
      <div className="py-5 px-3 flex flex-col gap-4 rounded-lg">
        {notificationData && notificationData.length > 0 ? (
          notificationData.map((notification) => {
            const primaryAction = notification?.data?.primary_action || "";
            const [buttonText, url] = primaryAction.split("|");

            const isRead = !!notification?.read_at;

            return (
              <div
                key={notification?.id}
                className={`py-5 px-10 rounded-lg flex flex-col gap-3 ${
                  isRead ? "bg-white" : "bg-[#F4F9F4]"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {notification?.data?.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {notification?.data?.message}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {primaryAction && url && (
                    <button
                      onClick={() =>
                        handleReadNotification(notification?.id, url)
                      }
                      className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 flex items-center gap-2"
                    >
                      <span className="text-white">
                        <FlyIcon />
                      </span>
                      {buttonText || "Read"}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-gray-500 text-center py-10">
            There are no notifications.
          </div>
        )}
      </div>
    </CardLayout>
  );
};

export default Notifications;
