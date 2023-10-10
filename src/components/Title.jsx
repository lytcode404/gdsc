import React from "react";

const Title = ({ heading, para }) => {
  return (
    <div className="flex w-full mb-4 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
        {heading}
      </h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        {para}
      </p>
    </div>
  );
};

export default Title;
