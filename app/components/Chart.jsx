import React from "react";
import OrgChart from "./OrgChart";

const CompanyOrganization = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-paper"
      data-aos="fade-right"
      data-aos-delay="150"
    >
      <div className="text-center">
        <OrgChart />
      </div>
    </section>
  );
};

export default CompanyOrganization;
