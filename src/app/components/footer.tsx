import Image from "next/image";

export default function Footer() {
  return <footer className="footer">
    <ul>
      <li><span>Copyright (c) 2023</span>|<span>Clarifionsupport@clarifion.com</span></li>
      <li><Image src="assets/images/footer-lock.svg" alt="lock" width={16} height={16}/><span>Secure 256-bit SSL encryption.</span></li>
    </ul>
  </footer>
}