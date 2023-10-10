import CategoryCard from "@/components/Cards/CategoryCard";
import Title from "@/components/Title";
import React from "react";

const AllCategories = () => {
  return (
    <section className="text-gray-600 body-font">
      <Title
        heading={`Master Cleanse Reliac Heirloom`}
        para={`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.`}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap  text-center justify-between">
          <CategoryCard slug={`sleu`} />
          <CategoryCard slug={`sleru`} />
          <CategoryCard slug={`slru`} />
          <CategoryCard slug={`slur`} />
          <CategoryCard slug={`slugre`} />
          <CategoryCard slug={`slufsdf`} />
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
