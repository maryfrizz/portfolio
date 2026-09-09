export type ProjectAction =
  | {
      href: string;
      label: "Case Study" | "View App" | "View Website";
      kind: "link";
    }
  | {
      label: "Case Study" | "Coming soon";
      kind: "text";
    };

export type ProjectImage = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

export type Project = {
  actions: ProjectAction[];
  description: string;
  images: ProjectImage[];
  slug: string;
  tags: string[];
  title: string;
  titleYear?: string;
};
