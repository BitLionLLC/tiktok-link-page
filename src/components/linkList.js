import React from "react";
import SingleLink from "./singleLink";

const links = [
  {
    link: "https://tinyurl.com/2p9ann6t",
    title: "Call of Destiny",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/562fzz29",
    title: "Messages From The Universe",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/3rekj3zk",
    title: "Genetic WEALTH Code",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/ye5kanf6",
    title: "Ancient Illuminati Code",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/2p9netc7",
    title: "Get your FREE Moon Reading!",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/yc6zabk7",
    title: "Billionaire Brain Wave",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/zhjx7c7v",
    title: "Spiritual Salt",
    icon: ["fas", "globe"],
  },
  {
    link: "https://tinyurl.com/4df8usyf",
    title: "Wealth DNA Code",
    icon: ["fas", "globe"],
  },
];

const LinkList = ({ isLive }) => {
  return links.map((link) => {
    return (
      <SingleLink
        link={link.link}
        title={link.title}
        icon={link.icon}
        altText={link.altText}
        color={link.color}
        isLive={isLive}
      />
    );
  });
};

export default LinkList;
