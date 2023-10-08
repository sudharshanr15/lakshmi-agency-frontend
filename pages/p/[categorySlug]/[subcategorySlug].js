import { useRouter } from "next/router";
import Link from "next/link";
import { Nav } from "@/components";
import "tailwindcss/tailwind.css";
import React from 'react';

const SubcategoryPage = () => {
  const router = useRouter();
  const { categorySlug, subcategorySlug } = router.query;

  if (!categorySlug || !subcategorySlug) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Nav />
      {/* Your content here */}
      {console.log(categorySlug, subcategorySlug)}
      <div className="mt-56">
        <p className="text-red-300">Category Slug: {categorySlug}</p>
        <p>Subcategory Slug: {subcategorySlug}</p>

        {/* Generate a link with the correct values using Link */}
        <Link
          href="/p/[categorySlug]/[subcategorySlug]"
          as={`/p/${categorySlug}/${subcategorySlug}`}
        >
          Go to Subcategory
        </Link>
      </div>
    </div>
  );
};

export default SubcategoryPage;
