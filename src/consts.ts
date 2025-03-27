import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Nipun Haldar",
  DESCRIPTION: "Keeping it simple",
  EMAIL: "blog@nipunh.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_TOOLS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Nipun Haldar | Portfolio | Blog",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const TOOLS: Metadata = {
  TITLE: "Tools",
  DESCRIPTION: "A collection of useful tools and utilities.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    ICON: "logo-github",
    HREF: "https://github.com/nipun24",
  },
  {
    NAME: "X (formerly Twitter)",
    SRC: "/x.svg",
    HREF: "https://x.com/focus_breathing",
  },
  {
    NAME: "Instagram",
    ICON: "logo-instagram",
    HREF: "https://instagram.com/focus.breathing",
  },
  {
    NAME: "LinkedIn",
    ICON: "logo-linkedin",
    HREF: "https://linkedin.com/in/nipunhaldar",
  },
  {
    NAME: "Unsplash",
    SRC: "/unsplash.svg",
    HREF: "https://unsplash.com/@focusbreathing",
  },
];
