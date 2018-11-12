using System;
using System.Collections.Generic;
using System.Text;

namespace Dc.Infrastructure.Trasversal.DTO
{
    public class ComprasDTO
    {
        public virtual int Id { get; set; }
        public virtual DateTime FechaCompra { get; set; }
        public virtual string Producto { get; set; }
        public virtual int Cantidad { get; set; }
        public virtual string NombreCompleto { get; set; }
    }
}
