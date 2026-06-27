import { navMenuData } from "../../data/navData";

function MegaMenu({ activeMenu }) {
  if (!activeMenu || !navMenuData[activeMenu]) return null;

  const menu = navMenuData[activeMenu];

  return (
    <div className="absolute left-0 top-full w-full bg-[#0f1c3f] border-t border-white/10 shadow-xl z-30">
      <div className="max-w-7xl mx-auto px-10 py-10">
        {/* Simple Menu */}
        {menu.type === "simple" && (
          <div className="flex flex-col gap-3 w-fit">
            {menu.items.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/90 text-sm hover:text-orange-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}

        {/* Multi Column Menu */}
        {menu.type === "columns" && (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-10">
            {menu.columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-white text-xs font-semibold tracking-widest mb-4">
                  {col.heading}
                </h4>

                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white/70 text-sm hover:text-orange-400 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Nested Menu */}
        {menu.type === "nested" && (
          <div className="flex">
            {menu.columns.map((col) => (
              <div
                key={col.heading}
                className="w-[200px] border-r border-white/10 last:border-r-0"
              >
                <h4 className="text-white/60 text-xs font-semibold tracking-widest mb-4 px-2">
                  {col.heading}
                </h4>

                <ul className="space-y-3 px-2">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white text-sm hover:text-orange-400 transition-colors flex items-center justify-between"
                      >
                        <span>{item}</span>
                        <span className="text-white/40">›</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MegaMenu;
