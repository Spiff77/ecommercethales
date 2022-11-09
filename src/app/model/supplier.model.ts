import {Client} from './client.model';

export interface Supplier extends Client{
  companyName: string,
  bankInfoNumber: string,
  ca: number
}
