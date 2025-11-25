import React from "react";
import { User, Users, Briefcase, Wrench, Building2 } from "lucide-react";
import Image from "next/image";
import headerImg from "@/public/chart-01.png";

const CompanyOrganization = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold">
          Company Chart
        </h2>
        <span className="block w-20 h-1 bg-lime-500 mx-auto mt-3 mb-4 rounded dark:text-white"></span>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center dark:text-gray-300 mb-12 font-sans">
          At NOVA Inc. Construction, our organizational structure is designed to
          ensure efficiency, accountability, and high-quality project delivery.
          At the top, CEO/Managing Director provides strategic leadership,
          supported by a management team overseeing key functions. Our structure
          emphasizes clear communication and smooth workflow across all levels.
          From operations manager and engineers to site supervisors and foremen.
        </p>
        <div className="flex justify-center md:justify-center mt-5">
          <Image
            src={headerImg}
            alt="Header Image"
            className="md:h-100 rounded-2xl shadow-lg object-cover dark:bg-gray-300"
            priority
            width={700}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyOrganization;
