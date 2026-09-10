import { Tag } from "../tag";

type ProjectTagListProps = {
  tags: string[];
};

export function ProjectTagList({ tags }: ProjectTagListProps) {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Project tags">
      {tags.map((tag) => (
        <li key={tag}>
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
}
