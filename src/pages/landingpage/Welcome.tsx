import bgImg from "@/components/assets/images/Container.png";
import container from "@/components/assets/images/Background.png";
import { Progress } from "@/components/ui/progress";
import { CheckIcon } from "@/components/assets/icons/SvgIcons";
import { ExperienceIcon } from "@/components/assets/icons/Experience";
import { CustomButton } from "@/components/shared/CustomButton";

export const Welcome = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div className="absolute inset-y-0 left-0 z-0 hidden w-[35%] bg-[#CE9233] lg:block">
        <img
          src={container}
          alt="bg-image"
          className="h-full w-full object-cover mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-5 lg:grid-cols-2">
        <div className="h-full">
          <img
            src={bgImg}
            alt="bg-image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right text */}
        <div className="space-y-6 px-4">
          <span className="text-primary inline-block border-2 border-[#CE9233] px-4 py-2 text-sm font-medium tracking-wide">
            Welcome to Ayomiposi Steel
          </span>

          <h2 className="text-3xl leading-tight font-bold text-gray-900 md:text-5xl">
            WE&apos;RE COMMITTED TO QUALITY
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            We are experts in providing superior products at a lower cost, and
            we have worked on Metal, Refinery, and Power projects. Our steel
            goods are of great quality, and we have a good reputation with our
            clients. I believe this is a nice start to a long-term relationship.
          </p>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">WELDING</h3>
                <Progress value={90} className="w-[80%]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  METAL WORK
                </h3>
                <Progress value={70} className="w-[80%]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-lg font-medium text-[#797672]">
                    We provide 24/7 service
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-lg font-medium text-[#797672]">
                    We use latest technology
                  </span>
                </div>
              </div>
              <CustomButton
                label="DISCOVER MORE"
                type="button"
                className="bg-[#CE9233] text-white hover:bg-[#b87e28]"
              />
            </div>

            <ExperienceIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
