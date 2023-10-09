function reverseFormatText(formattedText) {
  return formattedText
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function Page({ params }) {
  const { slug } = params;

  const ChoosedCategory = reverseFormatText(slug[0]);
  const subcategory = reverseFormatText(slug[1]);
  

  return (
    <div className="mt-5 mx-5">
      <p>ChoosedCategory: {ChoosedCategory}</p>
      <p>Subcategory: {subcategory}</p>
    </div>
  );
}
