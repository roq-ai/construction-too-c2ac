import axios from 'axios';
import queryString from 'query-string';
import { CustomerProfileInterface, CustomerProfileGetQueryInterface } from 'interfaces/customer-profile';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerProfiles = async (
  query?: CustomerProfileGetQueryInterface,
): Promise<PaginatedInterface<CustomerProfileInterface>> => {
  const response = await axios.get('/api/customer-profiles', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCustomerProfile = async (customerProfile: CustomerProfileInterface) => {
  const response = await axios.post('/api/customer-profiles', customerProfile);
  return response.data;
};

export const updateCustomerProfileById = async (id: string, customerProfile: CustomerProfileInterface) => {
  const response = await axios.put(`/api/customer-profiles/${id}`, customerProfile);
  return response.data;
};

export const getCustomerProfileById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-profiles/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerProfileById = async (id: string) => {
  const response = await axios.delete(`/api/customer-profiles/${id}`);
  return response.data;
};
