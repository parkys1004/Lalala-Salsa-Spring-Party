export interface NavItem {
  label: string;
  href: string;
}

export interface PriceTier {
  category: string;
  price: string;
  highlight?: boolean;
}

export interface TicketType {
  title: string;
  tiers: PriceTier[];
}