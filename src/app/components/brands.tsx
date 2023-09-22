import Image from "next/image";

export default function Brands() {
  return <>
    <div className="brands">
      <div>
        <Image src="/assets/images/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png" alt="Clarifion" width={202} height={32}/>
      </div>
      <div>
        <Image src="/assets/images/Frame 1484578056.png" alt="McAfee_Norton" width={202} height={32}/>
      </div>
    </div>
  </>
}