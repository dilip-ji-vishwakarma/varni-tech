import React from "react";
interface Props {}

const SubHeader: React.FC<Props> = () => {
  return (
    <section className="relative table w-full py-72 bg-[url('/assets/images/job/job.jpg')] bg-no-repeat bg-center">
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </section>
  );
};

export default SubHeader;
