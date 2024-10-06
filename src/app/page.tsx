"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import MobileHeader from "@/components/header/mobile-header";
import styles from "./page.module.scss";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        {isMobile ? <MobileHeader /> : <Header />}
      </div>
      
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>
          {/* Sidebar içeriği */}
        </aside>
        
        <main className={`${styles.main} ${isMobile ? styles.mainMobile : styles.mainDesktop}`}>
          {/* Ana içerik */}
          <section className={styles.heroSection}>
            {/* Hero bölümü içeriği */}
          </section>
          
          <section className={styles.featuresSection}>
            {/* Özellikler bölümü içeriği */}
          </section>
          
          <section className={styles.testimonialsSection}>
            {/* Müşteri yorumları bölümü içeriği */}
          </section>
        </main>
      </div>
      
      <footer className={styles.footer}>
        {/* Footer içeriği */}
      </footer>
    </div>
  );
}