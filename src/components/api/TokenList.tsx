import { ScreenLoader } from "../shared/ScreenLoader";

type Props = {
  token: any;
  loading: boolean;
};

const TokenList = ({ token, loading }: Props) => {
  if (loading) {
    return <ScreenLoader />;
  }
  console.log(token, "token");

  return (
    <div className="mt-7">
      <h1>Token</h1>
      <div className="bg-white rounded-lg shadow-md py-4 px-6 my-7">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-semibold text-[#8F8D92]">{token}</h2>
          <button className="w-fit px-1 py-1.5 bg-[#F5F5F5] text-xs text-[#8E8C8E]">
            Copy Token
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenList;
