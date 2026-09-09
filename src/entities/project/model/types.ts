export type ProjectAction =
  | {
      href: string;
      label: "Case Study" | "View App" | "View Website";
      kind: "link";
    }
  | {
      label: "Coming soon";
      kind: "text";
    };

export type ProjectMedia = {
  alt: string;
  height: number;
  src: string;
  type: "image" | "video";
  variant?: "after-wide-overlap" | "wide-overlap";
  width: number;
};

export type ProjectImage = ProjectMedia;

export type Project = {
  actions: ProjectAction[];
  description: string;
  media: ProjectMedia[];
  slug: string;
  tags: string[];
  title: string;
  titleYear?: string;
};
