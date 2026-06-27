// function AnnouncementBar() {
//   return (
//     <div className="bg-black text-white text-center py-2 text-sm font-medium">
//       FLAT 10% OFF ON CONTACT LENSES AT CHECKOUT
//     </div>
//   );
// }

// export default AnnouncementBar;



// function AnnouncementBar() {
//   return (
//     <div className="bg-black text-white text-center py-2 text-sm font-medium">
//       FREE SHIPPING ON ALL PREPAID ORDERS
//     </div>
//   );
// }

// export default AnnouncementBar;
function AnnouncementBar() {
  return (
    <div className="bg-[#7a0c1e] text-white text-center py-2 text-sm font-medium">
      <a
        href="/collections/contact-lenses"
        className="underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        FLAT 10% OFF ON CONTACT LENSES AT CHECKOUT
      </a>
    </div>
  );
}

export default AnnouncementBar;
