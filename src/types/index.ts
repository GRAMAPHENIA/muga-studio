// Tipos comunes para toda la aplicación

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  active?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

export type TextAlignment = "left" | "center" | "right";
