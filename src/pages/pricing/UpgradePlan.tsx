import { usePricing } from "@/api/crud/pricing";

declare global {
  interface Window {
    Korapay: {
      initialize: (config: {
        key: string;
        reference: string;
        amount: number;
        currency: string;
        customer: {
          name: string;
          email: string;
        };
        notification_url: string;
      }) => void;
    };
  }
}
// import { MasterCardIcon, VisaCardIcon } from "@/assets/svgs/CardIcon";
import { PageTitle } from "@/components/PageTitle";
import { CardLayout } from "@/components/shared/CardLayout";
import { ScreenLoader } from "@/components/shared/ScreenLoader";
import { korapayKey } from "@/constants";
import { useAuthStore } from "@/store/authStore";

const UpgradePlan = () => {
  const { getPricingList } = usePricing();
  const { currentUser } = useAuthStore();

  const { data: pricingData, isLoading } = getPricingList();

  const pricingList = pricingData?.data;

  function generateReference() {
    return `ref_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  }

  function payKorapay(amount: number) {
    const reference = generateReference();

    window.Korapay.initialize({
      key: `${korapayKey}`,
      reference,
      amount,
      currency: "NGN",
      customer: {
        name: `${currentUser?.name}`,
        email: `${currentUser?.email}`,
      },
      notification_url:
        "https://cheapmailing.dev.5starcompany.com.ng/dashboard",
    });
  }

  if (isLoading) return <ScreenLoader />;

  return (
    <main className="flex flex-col gap-7">
      <PageTitle title="Pricing" />
      <CardLayout className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-5">
          {pricingList?.map((plan) => (
            <div
              key={plan?.id}
              className="bg-pricebg bg-cover bg-no-repeat py-10 px-6 shadow-priceshadow  text-center flex flex-col justify-between items-center"
            >
              <div className="border-b-2 border-b-[#212121]/10 pb-10 w-full">
                <h3 className="text-xl font-bold text-[#202224] mb-2.5 font-Nunito uppercase">
                  {plan?.plan}
                </h3>
                <p className="text-5xl font-extrabold text-primary mb-4">
                  ₦{plan?.amount}
                </p>
              </div>
              <ul className="mt-10 w-full border-b-2 border-b-[#212121]/10 pb-10 h-[400px]">
                {plan?.data?.split("|")?.map((item, index) => (
                  <li
                    key={index}
                    className="mb-5 text-lg text-[#212121] font-Nunito"
                  >
                    {item?.trim()}
                  </li>
                ))}
              </ul>

              {plan?.plan !== "free" ? (
                <button
                  onClick={() => payKorapay(Number(plan?.amount))}
                  className="mt-10 border-2 border-primary hover:bg-primary hover:text-white rounded-[30px] text-primary text-base font-bold font-Nunito py-5 px-7"
                >
                  Choose this plan
                </button>
              ) : (
                <button className="mt-10  rounded-[30px] text-primary text-base font-bold font-Nunito py-5 px-7"></button>
              )}
            </div>
          ))}
        </div>

        {/* <div className="lg:w-[78%] mx-auto mt-14 py-2 px-7 shadow-priceshadow flex flex-col gap-3">
          <h2 className="text-base font-Nunito font-bold">Order Summary</h2>
          <p className="text-base font-Nunito">
            You will be Charged $350.00 your plan will be valid until
            2025-09-20, after that it will automatically renew
          </p>
          <div className="flex items-center justify-between">
            <p className="text-base font-Nunito font-bold">Due total</p>
            <p className="text-base font-Nunito font-bold">$350.00</p>
          </div>
          <CustomButton
            label="Purchase"
            variant="primary"
            className="w-full h-12 rounded-[4px] p-2 text-xs font-medium"
            size="lg"
            type="button"
          />
          <div className="flex items-center gap-4">
            <MasterCardIcon />
            <VisaCardIcon />
          </div>
        </div> */}
      </CardLayout>
    </main>
  );
};

export default UpgradePlan;
