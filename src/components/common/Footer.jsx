import { Truck, Phone, CreditCard, Building2 } from "lucide-react";

const infoCards = [
  {
    icon: Truck,
    title: "FREE DELIVERY INDIA",
    content: (
      <p>No cart too heavy, no distance too far. Get your orders delivered nationwide, absolutely free!</p>
    ),
  },
  {
    icon: Phone,
    title: "PRODUCT ENQUIRY",
    content: (
      <p>
        Contact Number : <a href="tel:+917680864497" className="underline">+917680864497</a>
        <br />
        Email : <a href="mailto:info@optorium.in" className="underline">info@optorium.in</a>
      </p>
    ),
  },
  {
    icon: CreditCard,
    title: "SECURE PAYMENTS",
    content: (
      <p>
        Razorpay Secure (UPI, Cards, Wallets, Net Banking)
        <br />
        PhonePay Payment Gateway (UPI, Cards & Net Banking)
      </p>
    ),
  },
  {
    icon: Building2,
    title: "STORE LOCATIONS IN HYDERABAD",
    content: (
      <ul className="space-y-1">
        <li>Banjara hills - <a href="tel:+918142064497" className="underline">+91 8142064497</a></li>
        <li>Gachibowli - <a href="tel:+917207058577" className="underline">+91 7207058577</a></li>
        <li>Secunderabad - <a href="tel:+917416065401" className="underline">+91 7416065401</a></li>
        <li>Kukatpally - <a href="tel:+917207025279" className="underline">+91 7207025279</a></li>
      </ul>
    ),
  },
];

const supportLinks = [
  "Track Order",
  "Orders, Returns & Exchanges",
  "Cancellation & Refund Policy",
  "Shipping Policy",
  "Store Locator",
  "Terms of Service",
  "Privacy Policy",
  "Contact Us",
];

const topBrands = [
  "RAYBAN META - EYEWEAR",
  "GUCCI EYEWEAR",
  "PRADA EYEWEAR",
  "OAKLEY EYEWEAR",
  "BURBERRY EYEWEAR",
  "TOM FORD EYEWEAR",
  "VERSACE EYEWEAR",
];

function Footer() {
  return (
    <footer>
      {/* Top info cards - light blue background */}
      <div className="bg-[#5b7d99] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon size={32} className="mb-4 text-yellow-200" strokeWidth={1.5} />
                <h3 className="font-semibold tracking-wide mb-3 text-sm">
                  {card.title}
                </h3>
                <div className="text-sm text-white/90 leading-relaxed">
                  {card.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom links - dark navy background */}
      <div className="bg-[#0f1c3f] text-white py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Support */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4 text-sm">SUPPORT</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exclusive Offers */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4 text-sm">
              EXCLUSIVE OFFERS
            </h4>
            <p className="text-sm text-white/80 mb-4">
              Never miss out offers, new arrivals, and restock updates.
            </p>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent border border-white/40 px-3 py-2 text-sm mb-3 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-[#0f1c3f] px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-200 transition-colors">
              SUBSCRIBE
            </button>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4 text-sm">ABOUT</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Established in 2004, we elevate your vision with personalized eye
              care and exquisite eyewear in Hyderabad. We believe in crafting a
              holistic experience, guiding you through eye exams, selecting the
              perfect glasses from leading international brands, and ensuring
              flawless dispensing. Your vision and style are our priority.
            </p>
          </div>

          {/* Top Brands */}
          <div>
            <h4 className="font-semibold tracking-wide mb-4 text-sm">
              TOP EYEWEAR BRANDS
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {topBrands.map((brand) => (
                <li key={brand}>
                  <a href="#" className="hover:text-white transition-colors">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;