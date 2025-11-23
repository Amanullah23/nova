import React from "react";
import { User, Users, Briefcase, Wrench, Building2 } from "lucide-react";
import Image from "next/image";
import headerImg from "@/public/chart-01.png";

const CompanyOrganization = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-green-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-sans md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Company Chart
        </h2>
        <span className="block w-20 h-1 bg-green-600 mx-auto mt-3 mb-4 rounded"></span>
        <p className="mb-5 font-sans text-black text-lg px-10 max-w-4xl text-center mx-auto">
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
            className="md:h-100 rounded-2xl shadow-lg object-cover"
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
