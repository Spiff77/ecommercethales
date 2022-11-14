import {Client} from './client.model';

export interface Supplier extends Client{
  id: number,
  companyName: string,
  bankInfoNumber: string,
  ca: number
}
