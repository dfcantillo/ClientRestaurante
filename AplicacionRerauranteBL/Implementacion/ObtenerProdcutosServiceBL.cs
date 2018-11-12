using AplicacionRerauranteBL.Contractos;
using Infraestructura.Data.DAO.Contractos;
using Infraestructura.trasversal.DTO;
using Infraestructura.trasversal.Log4Net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AplicacionRerauranteBL.Implementacion
{
    public class ObtenerProdcutosServiceBL : IObtenerProdcutosServiceBL
    {

        #region Dependency Injection
        private readonly IConsultasResuranteDAO _consultasResuranteDAO;
        public ObtenerProdcutosServiceBL(IConsultasResuranteDAO consultasResuranteDAO)
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
        #endregion
    }
}
