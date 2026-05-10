// "declare" is a way to tell TS that this module/interface exists somewhere else, and we are going to import it
// This is useful for importing CSS files, images, etc. that are not TypeScript modules
// It is also useful for declaring global variables or interfaces that are used throughout the project
// Code with "declare" got transpiled to JS (not sure, need more research)

// Though not much difference between with and without "declare", we should use "declare" for existing modules/interfaces that we extend
// and without "declare" for modules/interfaces that we write ourselves

declare module "*.css";
declare module "*.scss";
declare module "*.png";
declare module "*.svg";

declare interface Window {
  initialData: Array<{
    id: string;
    categoryName: string;
    contestName: string;
  }>;
}

interface Contest {
  id: string;
  categoryName: string;
  contestName: string;
  title: string;
  description: string;
  names: Name[];
}

interface Name {
  id: string;
  name: string;
  timestamp: Date;
}
