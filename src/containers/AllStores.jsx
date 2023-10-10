import StoreCard from "@/components/Cards/StoreCard";
import Title from "@/components/Title";
import React from "react";

const AllStores = () => {
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
          <StoreCard slug={`fsdvl`} />
          <StoreCard slug={`fsderl`} />
          <StoreCard slug={`fsdfdfwl`} />
          <StoreCard slug={`fsdwerl`} />
          <StoreCard slug={`fsdsdfl`} />
          <StoreCard slug={`fsdfwl`} />
        </div>
      </div>
    </section>
  );
};

export default AllStores;
