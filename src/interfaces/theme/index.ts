import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ThemeInterface {
  id?: string;
  theme_name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ThemeGetQueryInterface extends GetQueryInterface {
  id?: string;
  theme_name?: string;
  user_id?: string;
}
