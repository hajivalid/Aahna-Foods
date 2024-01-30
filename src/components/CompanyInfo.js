const CompanyInfo = () => {
  return (
    <div className="w-[25%] bg-slate-100 p-8 my-8 mx-auto">
      <h1 className="font-extrabold text-[25px] text-[#233142]">
        Get in Touch
      </h1>
      <h3 className="">contact our team.</h3>
      <input
        className="border border-[#233142] rounded-md p-2 mt-5 w-full"
        placeholder="Name"
      />
      <input
        className="border border-[#233142] rounded-md p-2 mt-5 w-full"
        placeholder="Email address"
      />
      <textarea
        className="border border-[#233142] rounded-md p-2 mt-5 w-full"
        placeholder="What can we help with?"
      />
      <button className="bg-[#233142] text-white font-bold text-[16px] p-2 mt-5 w-full hover:bg-[#fa0112]">
        Submit
      </button>
    </div>
  );
};

export const HigherOrderContactDetails = (CompanyInfo) => {
  return () => {
    return (
      <div className="">
        <CompanyInfo />
        <div className="text-center text-[14px] text-gray-400">
          Aahna pvt ltd. Hyderabad-500085 <b>Email:</b> hajivalid@gmail.com{" "}
          <b>Mobile:</b> 930 **** 930
        </div>
      </div>
    );
  };
};
export default CompanyInfo;
