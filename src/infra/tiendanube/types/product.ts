export interface Product {
  id: number;
  name: Description;
  description: Description;
  handle: Description;
  attributes: Description[];
  published: boolean;
  freeShipping: boolean;
  requiresShipping: boolean;
  canonicalURL: string;
  videoURL: null;
  seoTitle: Description;
  seoDescription: Description;
  brand: string;
  createdAt: string;
  updatedAt: string;
  variants: Variant[];
  tags: string;
  images: Image[];
  categories: Category[];
}

export interface Description {
  es: string;
}

export interface Category {
  id: number;
  name: Description;
  description: Description;
  handle: Description;
  parent: null;
  subcategories: any[];
  seoTitle: Description;
  seoDescription: Description;
  googleShoppingCategory: string;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  id: number;
  productID: number;
  src: string;
  position: number;
  alt: any[];
  createdAt: string;
  updatedAt: string;
}

export interface Variant {
  id: number;
  imageID: number;
  productID: number;
  position: number;
  price: string;
  compareAtPrice: string;
  promotionalPrice: null;
  stockManagement: boolean;
  stock: null;
  weight: string;
  width: string;
  height: string;
  depth: string;
  sku: null;
  values: Description[];
  barcode: null;
  mpn: null;
  ageGroup: string | null;
  gender: string | null;
  createdAt: string;
  updatedAt: string;
  cost: null;
  inventoryLevels: InventoryLevel[];
}

export interface InventoryLevel {
  id: number;
  variantID: number;
  locationID: string;
  stock: null;
}
