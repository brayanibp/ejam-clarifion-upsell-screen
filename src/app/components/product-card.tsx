import Image from "next/image";

export default function ProductCard() {
  return <>
    <div className="product-card">
      <div className="left-side">
        <Image src="/assets/images/product-image.png" alt="Product" width={575} height={591} />
        <div className="review">
          <div className="review-user">
            <Image src="/assets/images/user-profile.png" alt="user" width={48} height={48}/>
            <span>
              <Image src="/assets/images/user-stars.svg" alt="stars" width={78.11} height={11.95}/>
              <span>Ken T. <Image src="/assets/images/verify.svg" alt="verified" width={126} height={16} /></span>
            </span>
          </div>
          <span className="user-review">
          “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
          </span>
        </div>
      </div>
      <div className="rigth-side">
        <div className="product-details">
          <p className="promo-title">
            <span className="highligth">ONE TIME ONLY </span>
            special price for 6 extra Clarifion for only
            <span className="highligth"> $14 each </span>($84.00 total!)
          </p>
          <div className="product-description">
            <Image src="/assets/images/small-product-img.png" alt="Product" width={134} height={134} />
            <div className="info">
              <div className="product-title">
                <span>Clarifion Air Ionizer</span>
                <span className="total-price"><span className="prev-price">$180</span>$84</span>
              </div>
              <div className="stars">
                <Image src="/assets/images/Stars.png" alt="Stars" width={98} height={18} />
              </div>
              <span className="stock">
                <span className="bullet-point"><span></span></span>12 left in Stock
              </span>
              <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
            </div>
          </div>
          <ul className="bullets">
            <li>
              <Image src="/assets/images/tick-circle.svg" alt="check" width={22} height={22} />
              <span>Negative Ion Technology may <b>help with allergens</b></span>
            </li>
            <li>
              <Image src="/assets/images/tick-circle.svg" alt="check" width={22} height={22} />
              <span>Designed for <b>air rejuvenation</b></span>
            </li>
            <li>
              <Image src="/assets/images/tick-circle.svg" alt="check" width={22} height={22} />
              <span><b>Perfect for every room</b> in all types of places.</span>
            </li>
          </ul>
          <span className="discount-advice">
            <Image src="/assets/images/percent.svg" alt="percent" width={32} height={32}/>
            <span>Save <span className="highligth">53%</span> and get <span className="highligth">6 extra Clarifision</span> for only <span className="highligth">$14 Each</span>.</span>
          </span>
          <div className="payment-button">
            <button>Yes - Claim my discount</button>
            <span className="payment-icons">
              <span>Free shipping</span>
              <span className="divider"></span>
              <span><Image src="/assets/images/lock (7) 1.svg" alt="lock" width={12} height={12} /> Secure 256-bit SSL encryption.</span>
              <span className="divider"></span>
              <span><Image src="/assets/images/payment-icons.svg" alt="lock" width={180} height={14} /></span>
            </span>
            <span className="reject">No thanks, I don’t want this.</span>
          </div>
          <div className="certified">
            <Image src="/assets/images/certify-logo.svg" alt="cert" width={88} height={88}/>
            <span>
              If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
}