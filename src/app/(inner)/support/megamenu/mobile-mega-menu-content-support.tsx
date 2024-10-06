import React from 'react';
import {
  FaHeadset,
  FaQuestionCircle,
  FaLifeRing,
  FaUsers,
  FaCommentDots,
} from 'react-icons/fa';
import MobileMegamenuTemplate from '../../../../components/megamenu/mobile-mega-menu-template';
import styles from '../../../../components/megamenu/mobile-mega-menu-template.module.scss';


const MobileMegaMenuContentSupport: React.FC = () => {
  const supportItems = [
    {
      icon: <FaLifeRing className={styles.itemIcon} />,
      title: "Help Center",
      description: "Find detailed articles and troubleshooting guides.",
      link: "/support/help-center",
    },
    {
      icon: <FaHeadset className={styles.itemIcon} />,
      title: "Live Chat",
      description: "Chat with our support team for real-time assistance.",
      link: "/support/live-chat",
    },
    {
      icon: <FaQuestionCircle className={styles.itemIcon} />,
      title: "FAQ",
      description: "Get answers to frequently asked questions.",
      link: "/support/faq",
    },
    {
      icon: <FaUsers className={styles.itemIcon} />,
      title: "Community Forum",
      description: "Join the community and find peer-to-peer support.",
      link: "/support/community-forum",
    },
    {
      icon: <FaCommentDots className={styles.itemIcon} />,
      title: "Submit a Ticket",
      description: "Can't find what you're looking for? Submit a support ticket.",
      link: "/support/submit-ticket",
    },
  ];

  return (
    <MobileMegamenuTemplate
      sections={[{ title: "Support", items: supportItems }]}
    />
  );
};

export default MobileMegaMenuContentSupport;