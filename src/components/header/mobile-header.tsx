import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaSearch, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import MobileMegaMenuContentProducts from '../../app/(inner)/products/megamenu/mobile-mega-menu-content-products';
import MobileMegaMenuContentIntegrations from '@/app/(inner)/integrations/megamenu/mobile-mega-menu-content-integrations';
import MobileMegaMenuContentResources from '@/app/(inner)/resources/megamenu/mobile-mega-menu-content-resources';
import MobileMegaMenuContentSupport from '@/app/(inner)/support/megamenu/mobile-mega-menu-content-support';
import styles from './mobile-header.module.scss';

const menuItems = [
  { name: 'Products', megaMenu: MobileMegaMenuContentProducts },
  { name: 'Integrations', megaMenu: MobileMegaMenuContentIntegrations },
  { name: 'Customers', megaMenu: null },
  { name: 'Pricing', megaMenu: null },
  { name: 'Resources', megaMenu: MobileMegaMenuContentResources },
  { name: 'Support', megaMenu: MobileMegaMenuContentSupport },
];

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
    setActiveMegaMenu(null);
  }, []);

  const toggleMegaMenu = useCallback((menuName: string) => {
    setActiveMegaMenu(prev => prev === menuName ? null : menuName);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          storade
        </Link>
        
        <div className={styles.actions}>
          <button className={styles.iconButton} aria-label="Search">
            <FaSearch size={20} />
          </button>
          <button 
            onClick={toggleMenu} 
            className={styles.iconButton}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={styles.nav}
          >
            <ul className={styles.menuList}>
              {menuItems.map((item) => (
                <li key={item.name} className={styles.menuItem}>
                  <button
                    onClick={() => toggleMegaMenu(item.name)}
                    className={styles.menuButton}
                    aria-expanded={activeMegaMenu === item.name}
                  >
                    <span className={styles.menuButtonText}>{item.name}</span>
                    {item.megaMenu && (
                      activeMegaMenu === item.name ? <FaChevronUp /> : <FaChevronDown />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeMegaMenu === item.name && item.megaMenu && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.megaMenu}
                      >
                        <item.megaMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
            <div className={styles.authButtons}>
              <Link href="/login" className={styles.loginButton}>
                LOGIN
              </Link>
              <Link href="/subscribe" className={styles.ctaButton}>
                GET STARTED
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default MobileHeader;