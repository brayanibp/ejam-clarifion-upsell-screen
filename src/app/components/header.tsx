"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goLeft = () => {
    if (activeIndex === 0) return;
    const currentClassName = `active-at-${activeIndex * -25}`;
    const newClassName = `active-at-${(activeIndex - 1) * -25}`;
    const sliderList = document.querySelector('.slider ul');
    sliderList?.classList.add(newClassName);
    sliderList?.classList.remove(currentClassName);
    setActiveIndex(activeIndex - 1);
  }
  const goRight = () => {
    if (activeIndex === 3) return;
    const currentClassName = `active-at-${activeIndex * -25}`;
    const newClassName = `active-at-${(activeIndex + 1) * -25}`;
    const sliderList = document.querySelector('.slider ul');
    sliderList?.classList.add(newClassName);
    sliderList?.classList.remove(currentClassName);
    setActiveIndex(activeIndex + 1);
  }
  return <header className="header">
    <div className="slider">
      <ul>
        <li><Image src="assets/images/fluent_checkmark-starburst-20-regular.svg" alt="1" width={22} height={22} /><span>30-DAY SATISFACTION GUARANTEE</span></li>
        <li><Image src="assets/images/Free delivery on orders over $40.00.svg" alt="2" width={22} height={22} /><span>Free delivery on orders over $40.00</span></li>
        <li><Image src="assets/images/mdi_cards-heart-outline.svg" alt="3" width={22} height={22} /><span>50.000+ HAPPY CUSTOMERS</span></li>
        <li><Image src="assets/images/fluent_arrow-sync-checkmark-20-regular.svg" alt="4" width={22} height={22} /><span>100% Money Back Guarantee</span></li>
      </ul>
    </div>
    <div className="arrow-container">
      <button className="left-arrow" onClick={goLeft}>
        <Image src="assets/images/left-arrow.svg" alt="arrow" width={20} height={20}/>
      </button>
      <button className="right-arrow" onClick={goRight}>
        <Image src="assets/images/right-arrow.svg" alt="arrow" width={20} height={20}/>
      </button>
    </div>
  </header>;
}