export type Site = {
  TITLE: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_TOOLS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Social = {
  NAME: string;
  HREF: string;
} & ({ ICON: string; SRC?: never } | { SRC: string; ICON?: never });

export type Socials = Social[];
