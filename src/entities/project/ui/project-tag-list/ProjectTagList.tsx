import { Tag } from "../tag";

type ProjectTagListProps = {
  className?: string;
  tags: string[];
};

export function ProjectTagList({ className = "", tags }: ProjectTagListProps) {
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`} aria-label="Project tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
