import React from "react";

const Map = () => {
  return (
    <div className="w-full h-full min-h-[220px] rounded-xl overflow-hidden bg-steel-light">
      <iframe
        title="NOVA INC. head office location — Dasht-e Barchi, Kabul"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9078.983261447635!2d69.05737732069454!3d34.49677855401934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1763972415085!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
