
function FormatPrice({price}) {
  return( Intl.NumberFormat("en-IN",{
    style:"currency",
    currency:"INR",
    maximumFractionDigits:2, //how many digit are there after dots
  }).format(price/100))
};

export default FormatPrice