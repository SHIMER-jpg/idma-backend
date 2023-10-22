import { Image } from './common';

export interface Order {
  id: number;
  token: string;
  store_id: number;
  contactEmail: string;
  contact_name: string;
  contactPhone: string;
  contactIdentification: string;
  shippingMinDays: number;
  shippingMaxDays: number;
  billingName: string;
  billingPhone: string;
  billingAddress: string;
  billingNumber: string;
  billingFloor: string;
  billingLocality: string;
  billingZipcode: string;
  billingCity: string;
  billingProvince: string;
  billingCountry: string;
  shippingCostOwner: string;
  shippingCostCustomer: string;
  coupon: any[];
  promotionalDiscount: PromotionalDiscount;
  subtotal: string;
  discount: string;
  discountCoupon: string;
  discountGateway: string;
  total: string;
  totalUsd: string;
  checkoutEnabled: boolean;
  weight: string;
  currency: string;
  language: string;
  gateway: string;
  gatewayID: string;
  gatewayName: string;
  shipping: string;
  shippingOption: string;
  shippingOptionCode: string;
  shippingOptionReference: string;
  shippingPickupDetails: null;
  shippingTrackingNumber: null;
  shippingTrackingURL: null;
  shippingStoreBranchName: null;
  shippingStoreBranchExtra: null;
  shippingPickupType: string;
  shippingSuboption: any[];
  extra: Extra;
  storefront: string;
  note: string;
  created_at: string;
  updatedAt: string;
  completedAt: CompletedAt;
  nextAction: string;
  paymentDetails: PaymentDetails;
  attributes: any[];
  totalPaid: string;
  products: OrderProduct[];
  fulfillments: any[];
  number: number;
  cancelReason: null;
  owner_note: null;
  cancelled_at: null;
  closedAt: null;
  readAt: null;
  status: string;
  payment_status: string;
  gatewayLink: string;
  hasShippableProducts: boolean;
  shippingCarrierName: string;
  shippingAddress: ShippingAddress;
  shippingStatus: string;
  shippedAt: null;
  paidAt: string;
  landingURL: string;
  clientDetails: ClientDetails;
  appID: null;
}

export interface ClientDetails {
  browserIP: string;
  userAgent: string;
}

export interface CompletedAt {
  date: Date;
  timezoneType: number;
  timezone: string;
}

export interface Extra {}

export interface PaymentDetails {
  method: string;
  creditCardCompany: string;
  installments: number;
}

export interface OrderProduct {
  id: number;
  depth: string;
  height: string;
  name: string;
  price: string;
  compareAtPrice: string;
  product_id: number;
  image: Image;
  quantity: number;
  freeShipping: boolean;
  weight: string;
  width: string;
  variantID: number;
  variantValues: string[];
  variant_values: string[];
  properties: any[];
  sku: null;
  barcode: null;
  cost: null;
}
export interface PromotionalDiscount {
  id: null;
  storeID: number;
  orderID: number;
  createdAt: string;
  totalDiscountAmount: string;
  contents: any[];
  promotionsApplied: any[];
}

export interface ShippingAddress {
  address: string;
  city: string;
  country: string;
  createdAt: string;
  default: boolean;
  floor: string;
  id: number;
  locality: string;
  name: string;
  number: string;
  phone: string;
  province: string;
  updatedAt: string;
  zipcode: string;
  customs: null;
}
