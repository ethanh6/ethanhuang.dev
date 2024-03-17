import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

function readContent({ type }: { type: ContentType }): ContentData[] {
  const dir_path: string = path.join(process.cwd(), 'public', 'content', type);

  const files: string[] = fs.readdirSync(dir_path);

  const parsed_content = files.map((filename) => {
    const markdown = fs.readFileSync(path.join(dir_path, filename), {
      encoding: 'utf-8',
      flag: 'r',
    });

    const { content, data } = matter(markdown);

    return { content, data };
  });

  return parsed_content as ContentData[];
}

export default readContent;
