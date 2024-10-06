import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MegamenuContentProducts from "@/app/(inner)/products/megamenu/mega-menu-content-products";
import MegamenuContentIntegrations from "@/app/(inner)/integrations/megamenu/mega-menu-content-integrations";
import MegaMenuContentResources from "@/app/(inner)/resources/megamenu/mega-menu-content-resources";
import MegaMenuContentSupport from "@/app/(inner)/support/megamenu/mega-menu-content-support";
import styles from "./header.module.scss";

const menuItems = [
  { name: "Products", href: "/products", content: MegamenuContentProducts },
  { name: "Integrations", href: "/integrations", content: MegamenuContentIntegrations },
  { name: "Customers", href: "/customers", content: null },
  { name: "Pricing", href: "/pricing", content: null },
  { name: "Resources", href: "/resources", content: MegaMenuContentResources },
  { name: "Support", href: "/support", content: MegaMenuContentSupport },
];

const Header = () => {
  const [isMegamenuVisible, setMegamenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megamenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const showMegamenu = (menu: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveMenu(menu);
    setMegamenuVisible(true);
  };

  const hideMegamenu = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setMegamenuVisible(false);
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeItem = menuItems.find((item) => item.name === activeMenu);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoNav}>
          <Link href="/" className={styles.logo}>
            storade
          </Link>

          <div className={styles.divider}></div>

          <nav className={styles.desktopNav}>
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={styles.menuItem}
                onMouseEnter={() => showMegamenu(item.name)}
                onMouseLeave={hideMegamenu}
              >
                <Link href={item.href} className={styles.menuLink}>
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginLink}>
            LOGIN
          </Link>
          <Link href="/subscribe" className={styles.ctaButton}>
            GET STARTED
          </Link>
        </div>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={styles.mobileMenuLink}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/login" className={styles.mobileLoginLink}>
              LOGIN
            </Link>
            <Link href="/subscribe" className={styles.mobileCTAButton}>
              GET STARTED
            </Link>
          </nav>
        </div>
      )}

      {isMegamenuVisible && activeItem?.content && (
        <div
          ref={megamenuRef}
          className={styles.megamenu}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              clearTimeout(hoverTimeoutRef.current);
              hoverTimeoutRef.current = null;
            }
            setMegamenuVisible(true);
          }}
          onMouseLeave={hideMegamenu}
        >
          <activeItem.content />
        </div>
      )}
    </header>
  );
};

export default Header;