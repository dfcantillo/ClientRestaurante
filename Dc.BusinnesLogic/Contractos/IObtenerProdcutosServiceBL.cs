using Dc.Infrastructure.Trasversal.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dc.BusinnesLogic.Contractos
{
    public interface IObtenerProdcutosServiceBL
    {
        /// <summary>
        /// Obtiene los productos registrados por caregoria
        /// </summary>
        /// <param name="idCategoria">Identificador de la categotis</param>
        /// <returns>Lista de productos</returns>
        IList<ProductosDTO> ObtenerProductosPorCategoria(string idCategoria);

        IList<ProductosDTO> ObtenerTodosLosProductos();

        

        /// <summary>
        /// 
        /// </summary>
        /// <param name="productosDTO"></param>
        /// <returns></returns>
        string RegistrarComprarCliente(ProductosDTO productosDTO, int cantidad);

        IList<ClienteDTO> ObtenerClientesRegistrados();

        IList<ComprasDTO> ObtenerComprasCliente();

        IList<LogComprasDTO> ObtenerLogs();

        string EliminarCompra(int idCompra);

        string ActualizarCompraCliente(ComprasDTO comprasDTO);



    }
}
