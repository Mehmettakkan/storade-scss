import React from 'react';
import { FaHeadset, FaQuestionCircle, FaLifeRing, FaUsers, FaCommentDots } from 'react-icons/fa';
import MegamenuTemplate from "../../../../components/megamenu/mega-menu-template";
import styles from '../../../../components/megamenu/mega-menu-template.module.scss';

const MegaMenuContentSupport = () => {
  const sections = [
    {
      title: "Support",
      items: [
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
      ],
    },
  ];

  return <MegamenuTemplate sections={sections} />;
};

export default MegaMenuContentSupport;