import nodata from "@/assets/images/Nodata.png";

const EmptyTableState = () => {
  return (
    <div className="flex lg:justify-center items-center ">
      <img src={nodata} alt="No Data Found" />
    </div>
  );
};

export default EmptyTableState;
