using Dc.Infrastructure.Trasversal.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infraestructura.Data.DAO.Contractos
{
    public interface IConsultasRestauranteDAO
    {
        IList<ProductosDTO> ObtenerProductosPorCategoria(string idCategoria);

        int RegistrarComprarCliente(ProductosDTO productosDTO, int cantidad);

        IList<ClienteDTO> ObtenerClientesRegistrados();

        /// <summary>
        /// Obtienes todas las compras realizadas
        /// </summary>
        /// <returns></returns>
        IList<ComprasDTO> ObtenerCompras();



        /// <summary>
        /// Obtienes todos los log registrados por cada compra
        /// Acciones: Eliminar , Insertar, Modificar
        /// </summary>
        /// <returns>Lista de LogComprasDTO</returns>
        IList<LogComprasDTO> ObtenerLogsCompra();
    }
}
