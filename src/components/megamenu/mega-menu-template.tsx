import React from 'react';
import Link from 'next/link';
import styles from './mega-menu-template.module.scss';

interface MegamenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

interface Section {
  title: string;
  items: MegamenuItem[];
}

interface SupportItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

interface MegamenuTemplateProps {
  sections: Section[];
  support?: {
    title: string;
    items: SupportItem[];
  };
}

const MegamenuTemplate: React.FC<MegamenuTemplateProps> = ({ sections, support }) => {
  const hasSupport = support && support.items.length > 0;

  return (
    <div className={styles.megamenu}>
      <div className={styles.content}>
        <div className={`${styles.mainSection} ${hasSupport ? styles.withSupport : ''}`}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h3 className={styles.sectionTitle}>
                {section.title}
              </h3>
              <div className={styles.itemsGrid}>
                {section.items.map((item, idx) => (
                  <Link href={item.link} key={idx} className={styles.item}>
                    <div className={styles.itemHeader}>
                      <div className={styles.itemIcon}>{item.icon}</div>
                      <h4 className={styles.itemTitle}>{item.title}</h4>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {hasSupport && (
          <div className={styles.supportSection}>
            <h3 className={styles.sectionTitle}>
              {support.title}
            </h3>
            <div className={styles.supportItems}>
              {support.items.map((item, index) => (
                <div key={index} className={styles.supportItem}>
                  <div className={styles.supportItemHeader}>
                    <div className={styles.supportItemIcon}>{item.icon}</div>
                    <h4 className={styles.supportItemTitle}>{item.title}</h4>
                  </div>
                  <p className={styles.supportItemDescription}>
                    {item.description}
                  </p>
                  <Link href={item.link} className={styles.supportItemLink}>
                    {item.linkText}
                    <svg
                      className={styles.supportItemLinkIcon}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MegamenuTemplate;