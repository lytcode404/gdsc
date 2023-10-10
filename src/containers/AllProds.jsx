import ProductCard from "@/components/Cards/ProductCard";
import Title from "@/components/Title";
import React from "react";

const AllProds = () => {
  return (
    <section className="text-gray-600 body-font">
      <Title
        heading={`Master Cleanse Reliac Heirloom`}
        para={`Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.`}
      />
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <ProductCard slug={`dlsdfk`} />
          <ProductCard slug={`dlrtfk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlufk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlfetyk`} />
          <ProductCard slug={`dlyufk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlfukk`} />
          <ProductCard slug={`dlrtyfk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlfkg`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlrhfk`} />
          <ProductCard slug={`dlfk`} />
          <ProductCard slug={`dlferk`} />
          <ProductCard slug={`dlfsdfk`} />
          <ProductCard slug={`dlffk`} />
        </div>
      </div>
    </section>
  );
};

export default AllProds;
