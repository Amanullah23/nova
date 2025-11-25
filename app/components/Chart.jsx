import React from "react";
import { User, Users, Briefcase, Wrench, Building2 } from "lucide-react";
import Image from "next/image";
import headerImg from "@/public/chart-01.png";
import OrgChart from "./OrgChart";

const CompanyOrganization = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black"  data-aos="fade-right" data-aos-delay="150">
      <div className="sm:-w-[100px] text-center">
        <OrgChart/>
      </div>
    </section>
    
  );
};

export default CompanyOrganization;
