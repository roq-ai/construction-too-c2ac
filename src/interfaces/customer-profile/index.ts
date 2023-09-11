import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerProfileInterface {
  id?: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerProfileGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  user_id?: string;
}
