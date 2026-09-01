export interface NavItem {
  label: string;
  href: string;
}

/** Navegación principal del header y del menú móvil. */
export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Paquetes de Maternidad', href: '/paquetes-maternidad' },
  { label: 'Promociones', href: '/promociones' },
  { label: 'Contacto', href: '/contacto' },
];

/** Enlaces secundarios que solo aparecen en el footer. */
export const footerNav: NavItem[] = [
  { label: 'Aviso de Privacidad', href: '/aviso-de-privacidad' },
];
