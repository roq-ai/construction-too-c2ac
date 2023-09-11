import { ToolInterface } from 'interfaces/tool';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  rental_date?: any;
  return_date?: any;
  tool_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  user_id?: string;
}
