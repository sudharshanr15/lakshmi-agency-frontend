export default function Page({ params }) {
  const { slug } = params;

  const ChoosedCategory = slug[0];
  const subcategory = slug[1];

  return (
    <div className="mt-5 mx-5">
      <p>ChoosedCategory: {ChoosedCategory}</p>
      <p>Subcategory: {subcategory}</p>
    </div>
  );
}
