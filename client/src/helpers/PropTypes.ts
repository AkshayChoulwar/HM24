import { Article } from "../types";

export interface ArticleProps {
  article: Article;
}

export interface ErrorBoundaryProps {
  FallbackUI: React.FunctionComponent<any>;
  children: React.ReactNode;
}

export interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
}

export interface ProductListProps {
  searchTerm: string;
}

export interface FallbackUIProps {
  error: Error
}

export interface FetchState {
  status: string,
  data: any,
  error: any
}