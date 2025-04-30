import { toast } from "sonner";
import { ScreenLoader } from "../shared/ScreenLoader";

type Props = {
  token: any;
  loading: boolean;
};

const TokenList = ({ token, loading }: Props) => {
  if (loading) {
    return <ScreenLoader />;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(token);
      toast.success("Token copied to clipboard");
    } catch (err) {
      toast.error("Failed to copy token");
    }
  };

  return (
    <div className="mt-7">
      <h1 className="text-xl text-[#ABA8AA] font-semibold">Token</h1>
      <div className="bg-white rounded-lg shadow-md py-4 px-6 my-7">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-[#8F8D92] break-all">
            {token}
          </h2>
          <button
            onClick={handleCopy}
            className="w-fit px-2 py-1.5 bg-[#F5F5F5] text-xs text-[#8E8C8E] rounded"
          >
            Copy Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenList;
