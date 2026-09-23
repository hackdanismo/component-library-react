export interface Package {
  id: string;
  name: string;
  connectionFee: number;
  monthlyPrice: number;
  description?: string;
}