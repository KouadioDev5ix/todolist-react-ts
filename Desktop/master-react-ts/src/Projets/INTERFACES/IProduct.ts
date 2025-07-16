export interface IByProduct {
  id?: number;
  name: string;
  model: string;
  price: string;
  quantity: number;
  descript: string;
  hasReduction: boolean;
}

export interface IProduct {
  id?: number;
  categories: string;
  hasStock: boolean;
  products: IByProduct[];
}

export interface IGlobalFormInputsData {
  id?: number;
  categories: string;
  hasStock: boolean;
  name: string;
  model: string;
  price: string;
  quantity: number;
  descript: string;
  hasReduction: boolean;
}
