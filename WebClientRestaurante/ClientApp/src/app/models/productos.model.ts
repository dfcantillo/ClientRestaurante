export class Productos{
  constructor(
    public Id: number,
    public Nombre: string,
    public Descripcion: string ,
    public precio: number,
    public FechaProducto: Date,
    public IdCategoria: number,
    public idProvedores: number,
    public IdProducto: number,
    public CantidadCompra: number

  ) { }
}
