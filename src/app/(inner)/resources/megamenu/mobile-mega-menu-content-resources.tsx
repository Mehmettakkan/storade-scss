import React from 'react';
import {
  FaBook,
  FaVideo,
  FaBlog,
  FaFileAlt,
  FaChalkboardTeacher,
  FaToolbox,
} from 'react-icons/fa';
import MobileMegamenuTemplate from '../../../../components/megamenu/mobile-mega-menu-template';
import styles from '../../../../components/megamenu/mobile-mega-menu-template.module.scss';

const MobileMegaMenuContentResources: React.FC = () => {
  const resources = [
    {
      icon: <FaBlog className={styles.itemIcon} />,
      title: "Blog",
      description: "Read the latest insights and updates on our blog.",
      link: "/resources/blog",
    },
    {
      icon: <FaBook className={styles.itemIcon} />,
      title: "Guides & Documentation",
      description: "Comprehensive guides and documentation to get you started.",
      link: "/resources/guides-documentation",
    },
    {
      icon: <FaVideo className={styles.itemIcon} />,
      title: "Webinars",
      description: "Watch our latest webinars and video content.",
      link: "/resources/webinars",
    },
    {
      icon: <FaFileAlt className={styles.itemIcon} />,
      title: "Case Studies",
      description: "Learn how others are successfully using our platform.",
      link: "/resources/case-studies",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaToolbox className={styles.supportItemIcon} />,
        title: "Developer Portal",
        description: "Access technical documentation and developer tools.",
        linkText: "Visit Developer Portal",
        link: "/support/developer-portal",
      },
      {
        icon: <FaChalkboardTeacher className={styles.supportItemIcon} />,
        title: "Webinar Support",
        description: "Need help with webinars? Our team is here to assist.",
        linkText: "Get Webinar Support",
        link: "/support/webinar-support",
      },
    ],
  };

  return (
    <MobileMegamenuTemplate
      sections={[{ title: "Resources", items: resources }]}
      support={support}
    />
  );
};

export default MobileMegaMenuContentResources;