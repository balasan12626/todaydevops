export interface Item {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  rating: number;
  date: string;
  featured?: boolean;
  price?: number;
  author?: string;
}

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface SearchResult {
  items: Item[];
  total: number;
  page: number;
  limit: number;
}

export type ThemeMode = 'light' | 'dark';