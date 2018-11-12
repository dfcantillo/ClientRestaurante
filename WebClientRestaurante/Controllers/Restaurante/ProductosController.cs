using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dc.BusinnesLogic.Contractos;
using Dc.Infrastructure.Trasversal.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace WebClientRestaurante.Controllers.Restaurante
{
    [Route("api/[controller]")]
    public class ProductosController : Controller
    {
        #region Dependency Injection
        private readonly IObtenerProdcutosServiceBL _obtenerProdcutosServiceBL;
        private readonly IConfiguration _configuration;
        public ProductosController(IObtenerProdcutosServiceBL obtenerProdcutosServiceBL , IConfiguration configuration)
        {
            _obtenerProdcutosServiceBL = obtenerProdcutosServiceBL;
            _configuration = configuration;
        }
        #endregion
        [HttpPost("/api/ObtenerProductosPorCategoria")]
        public JsonResult ObtenerProductosPorCategoria([FromBody] string idCategoria)
        {
            try
            {
                IList<ProductosDTO> ilProductos = _obtenerProdcutosServiceBL.ObtenerProductosPorCategoria(idCategoria);
                return Json(ilProductos);
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }


        [HttpPost("/api/RegistrarCompra")]
        public JsonResult RegistrarCompra([FromBody] ProductosDTO productosDTO)
        {
            try
            {
                string resultado = _obtenerProdcutosServiceBL.RegistrarComprarCliente(productosDTO, productosDTO.CantidadCompra);
                return Json(resultado);
            }
            catch (Exception ex)
            {

                //throw ex;
                return Json("Ocurrio un error " + ex.Message);
            }

        }

        [HttpGet("/api/ObtenerLogCompras")]
        public JsonResult ObtenerLogCompras()
        {
            try
            {
                IList<LogComprasDTO> IllogComprasDTOs = _obtenerProdcutosServiceBL.ObtenerLogs();
                return Json(IllogComprasDTOs);
            }
            catch (Exception ex)
            {

                //throw ex;
                return Json("Ocurrio un error " + ex.Message);
            }

        }
    }
}