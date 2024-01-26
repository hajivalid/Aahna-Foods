const CompanyInfo = () => {
  return (
    <div className="contactInfo">
      <h1>Contact Us:</h1>
      <h3>Aahna Foods pvt ltd.</h3>
      <div>Hyderabad 500085</div>
    </div>
  );
};

export const HigherOrderContactDetails = (CompanyInfo) => {
  return () => {
    return (
      <div className="mx-auto my-6 text-center text-[25px] font-bold text-[#FA0112]">
        <CompanyInfo />
        <div>930 9090 930</div>
        <div>hajivalid@gmail.com </div>
      </div>
    );
  };
};
export default CompanyInfo;
