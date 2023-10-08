import React from 'react';
import { useRouter } from 'next/router';

const SubSlugPage = () => {
  const router = useRouter();
  const { slug, subSlug } = router.query;

  // Use JavaScript functionality
  // ...

  return (
    <div>
      <h1>Slug: {slug}</h1>
      <h2>Sub Slug: {subSlug}</h2>
      {/* Render content based on slugs */}
    </div>
  );
};

export default SubSlugPage;
