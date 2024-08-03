export interface IProduct{
    id:string,
    title: string,
    description: string,
    price: number,
}

export type ProductWithoutId = Omit<IProduct, "id">;