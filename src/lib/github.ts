import { Octokit } from 'octokit';
import { base64decode } from 'nodejs-base64';
import * as matter from 'gray-matter';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const getFilesByContentType = async ({
  contentType,
}: {
  contentType: 'project' | 'post';
}) => {
  const response = await octokit.request(
    `GET /repos/{owner}/{repo}/contents/${contentType}/`,
    {
      owner: process.env.GITHUB_USERNAME!,
      repo: process.env.GITHUB_CMS_REPO!,
    },
  );
  const files = response.data.map((obj) => obj.path.split('/')[1]);
  return files;
};

// the path is the absolute path to the file, from the root of the cms repo
const getContentByFileName = async ({
  contentType,
  file,
}: {
  contentType: 'project' | 'post';
  file: string;
}) => {
  const raw_content = await octokit.request(
    'GET /repos/{owner}/{repo}/contents/{path}',
    {
      owner: process.env.GITHUB_USERNAME!,
      repo: process.env.GITHUB_CMS_REPO!,
      path: `${contentType}/${file}`,
    },
  );

  const { content, data } = matter(base64decode(raw_content.data.content));

  return {
    content,
    metadata: data,
  };
};

export { getFilesByContentType, getContentByFileName };
