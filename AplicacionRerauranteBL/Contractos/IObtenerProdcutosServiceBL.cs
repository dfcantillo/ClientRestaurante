using Infraestructura.trasversal.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicacionRerauranteBL.Contractos
{
    public interface IObtenerProdcutosServiceBL
    {
        /// <summary>
        /// Obtiene los productos registrados por caregoria
        /// </summary>
        /// <param name="idCategoria">Identificador de la categotis</param>
        /// <returns>Lista de productos</returns>
        IList<ProductosDTO> ObtenerProductosPorCategoria(string idCategoria);
        
    }
}
