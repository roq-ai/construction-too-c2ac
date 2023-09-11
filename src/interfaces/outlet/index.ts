import { ToolInterface } from 'interfaces/tool';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];
  company?: CompanyInterface;
  _count?: {
    tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  company_id?: string;
}
