export class Productos{
  constructor(
    public id: number,
    public nombre: string,
    public Descripcion: string ,
    public precio: number,
    public FechaProducto: Date,
    public IdCategoria: number,
    public idProvedores: number,
    public IdProducto: number,
    public CantidadCompra: number

  ) { }
}
