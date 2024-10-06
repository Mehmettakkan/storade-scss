import React from 'react';
import {
  FaFileInvoice,
  FaCashRegister,
  FaMoneyBillWave,
  FaStore,
  FaExchangeAlt,
  FaCogs,
  FaShoppingCart,
  FaChartLine,
  FaCreditCard,
  FaBoxes,
  FaHeadset,
  FaUsers
} from 'react-icons/fa';
import MobileMegamenuTemplate from '../../../../components/megamenu/mobile-mega-menu-template';
import styles from '../../../../components/megamenu/mobile-mega-menu-template.module.scss';

const MobileMegaMenuContentProducts: React.FC = () => {
  const products = [
    {
      icon: <FaFileInvoice className={styles.itemIcon} />,
      title: "Invoicing",
      description: "Manage and create invoices easily.",
      link: "/invoicing",
    },
    {
      icon: <FaCashRegister className={styles.itemIcon} />,
      title: "Point of Sale",
      description: "Easy management of sales transactions.",
      link: "/point-of-sale",
    },
    {
      icon: <FaMoneyBillWave className={styles.itemIcon} />,
      title: "Expenses",
      description: "Track and manage business expenses.",
      link: "/expenses",
    },
    {
      icon: <FaStore className={styles.itemIcon} />,
      title: "Online Store",
      description: "Manage your online store effortlessly.",
      link: "/online-store",
    },
    {
      icon: <FaExchangeAlt className={styles.itemIcon} />,
      title: "Data Transfer",
      description: "Seamless data transfer between platforms.",
      link: "/data-transfer",
    },
    {
      icon: <FaCogs className={styles.itemIcon} />,
      title: "Integrations",
      description: "Connect with CRM, ERP, and other tools.",
      link: "/integrations",
    },
    {
      icon: <FaShoppingCart className={styles.itemIcon} />,
      title: "Marketplaces",
      description: "Expand your reach by selling on multiple marketplaces.",
      link: "/marketplaces",
    },
    {
      icon: <FaChartLine className={styles.itemIcon} />,
      title: "Sales Channels",
      description: "Manage and optimize your sales channels.",
      link: "/sales-channels",
    },
    {
      icon: <FaCreditCard className={styles.itemIcon} />,
      title: "Payments",
      description: "Accept and process payments securely.",
      link: "/payments",
    },
    {
      icon: <FaBoxes className={styles.itemIcon} />,
      title: "Inventory Management",
      description: "Real-time inventory tracking and management.",
      link: "/inventory-management",
    },
  ];

  const support = {
    title: "Support",
    items: [
      {
        icon: <FaHeadset className={styles.supportItemIcon} />,
        title: "Contact Sales Team",
        description: "Get in touch with our sales team for detailed information on our products and services.",
        linkText: "Start a conversation",
        link: "/contact-sales",
      },
      {
        icon: <FaUsers className={styles.supportItemIcon} />,
        title: "Community",
        description: "Visit our community pages to interact with other users and get help from the support team.",
        linkText: "Visit the community pages",
        link: "/community",
      },
    ],
  };

  return <MobileMegamenuTemplate sections={[{ title: "Products", items: products }]} support={support} />;
};

export default MobileMegaMenuContentProducts;