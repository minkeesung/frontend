import { values } from 'lodash';

export const selectAllProjects = ({projects}) => {
  return values(projects);
};

export const selectAllCategories = ({categories}) => {
  return values(categories);
};
