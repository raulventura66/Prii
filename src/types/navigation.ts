export type PageType = 'inicio' | 'sobre' | 'servicos' | 'time' | 'projetos' | 'contato';

export interface NavigationItem {
  id: PageType;
  label: string;
  icon?: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'time', label: 'Time' },
  { id: 'time', label: 'Time' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' }
];