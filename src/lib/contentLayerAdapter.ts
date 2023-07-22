import { allPosts, allProjects, Post, Project } from 'contentlayer/generated';
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import { compareDesc } from 'date-fns';

export { allPosts, allProjects };
export type { Post, Project };
export { defineDocumentType, defineNestedType, makeSource };

export const allPostsNewToOld =
  allPosts?.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  }) || [];
