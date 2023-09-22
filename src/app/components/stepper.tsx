import Image from "next/image";
import ProductCard from "./product-card";

export default function Stepper() {
  return <>
    <div className="stepper">
      <ul>
        <li><Image src="assets/images/Group 1484578147.svg" alt="" width={40} height={40} /><span><span>Step 1 :</span> Cart Review</span></li>
        <li><Image src="assets/images/Group 1484578147.svg" alt="" width={40} height={40} /><span><span>Step 2 :</span> Checkout</span></li>
        <li><Image src="assets/images/Group 1484578146.svg" alt="" width={40} height={40} /><span className="active"><span>Step 3 :</span> Special Offer</span></li>
        <li><Image src="assets/images/Group 1484578146 (1).svg" alt="" width={40} height={40} /><span><span>Step 4 :</span> Confirmation</span></li>
      </ul>
      <ProductCard></ProductCard>
    </div>
  </>;
}