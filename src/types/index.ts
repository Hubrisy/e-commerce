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

export interface ShippingProduct {
  id: number;
  type: string;
  price: number;
  description: string;
  date: string;
}

export enum SectionIds {
  products = 'products',
}

export type ShippingTypes = 'free' | 'paid';

export interface CartItem extends Product {
  quantity: number;
}

export interface UserData {
  name: string;
  secondName: string;
  phone: string;
  email: string;
  city: string;
  address: string;
}

export type ErrorsType<T> = Record<keyof T, string>;

export type ErrorsUserData = ErrorsType<UserData>;
