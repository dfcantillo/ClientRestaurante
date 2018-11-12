using Dc.BusinnesLogic.Contractos;
using Dc.Infrastructure.Trasversal.DTO;
using Dc.Infrastructure.Trasversal.Log4Net;
using Infraestructura.Data.DAO.Contractos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dc.BusinnesLogic.Implementacion
{
    public class ObtenerProdcutosServiceBL : IObtenerProdcutosServiceBL
    {

        #region Dependency Injection
        private readonly IConsultasRestauranteDAO _consultasResuranteDAO;
        public ObtenerProdcutosServiceBL(IConsultasRestauranteDAO consultasResuranteDAO)
        {
            _consultasResuranteDAO = consultasResuranteDAO;
        }
        #endregion


        #region Métodos publicos
        public IList<ProductosDTO> ObtenerProductosPorCategoria(string idCategoria)
        {
            try
            {
                return _consultasResuranteDAO.ObtenerProductosPorCategoria(idCategoria);
            }
            catch (Exception ex)
            {
                LoggerFactory.CreateLog().LogError("ObtenerProductosPorCategoria", "ObtenerProdcutosServiceBL", ex.Message);

                throw ex;
            }
        }

        public string RegistrarComprarCliente(ProductosDTO productosDTO, int cantidad)
        {
            string mensaje;
            try
            {
                int resultado = 0;
                resultado =  _consultasResuranteDAO.RegistrarComprarCliente(productosDTO,cantidad);
                mensaje = (resultado <= 0) ? "No se registro la venta" : "La compra se realizo correctamente";
                return mensaje;

            }
            catch (Exception ex)
            {
                LoggerFactory.CreateLog().LogError("RegistrarComprarCliente", "ObtenerProdcutosServiceBL", ex.Message);

                throw ex;
            }
        }

        public IList<ClienteDTO> ObtenerClientesRegistrados()
        {
            try
            {
                return _consultasResuranteDAO.ObtenerClientesRegistrados();
            }
            catch (Exception ex)
            {
                LoggerFactory.CreateLog().LogError("ObtenerClientesRegistrados", "ObtenerProdcutosServiceBL", ex.Message);

                throw ex;
            }

        }

        public IList<ComprasDTO> ObtenerComprasCliente()
        {
            try
            {
                return _consultasResuranteDAO.ObtenerCompras();
            }
            catch (Exception ex)
            {
                LoggerFactory.CreateLog().LogError("ObtenerComprasCliente", "ObtenerProdcutosServiceBL", ex.Message);

                throw ex;
            }

        }

        public IList<LogComprasDTO> ObtenerLogs()
        {
            try
            {
                return _consultasResuranteDAO.ObtenerLogsCompra();
            }
            catch (Exception ex)
            {
                LoggerFactory.CreateLog().LogError("ObtenerLogs", "ObtenerProdcutosServiceBL", ex.Message);

                throw ex;
            }

        }
        #endregion
    }
}
