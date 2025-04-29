export type Currency = 'USD';

export const currencySymbols: Record<Currency, string> = {
  USD: '$',
};

export type ProductCategory =
  | 'phones'
  | 'smartwatches'
  | 'cameras'
  | 'headphones'
  | 'computers'
  | 'gaming'
  | 'tablet';

export type ProductFeature = 'newarrival' | 'bestseller' | 'featured';

export interface Product {
  name: string;
  img: string;
  price: number;
  currency: Currency;
  category: ProductCategory;
  feature?: ProductFeature;
  id: number;
  isOnsale?: boolean;
  isOnMainScreen?: boolean;
}

export enum SectionIds {
  products = 'products',
}

export interface CartItem extends Product {
  quantity: number;
}
