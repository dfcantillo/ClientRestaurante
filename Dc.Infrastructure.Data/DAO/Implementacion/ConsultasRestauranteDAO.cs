using Dapper;
using Dc.Infrastructure.Data.DAO.Contractos;
using Dc.Infrastructure.Trasversal.DTO;
using Infraestructura.Data.DAO.Contractos;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IDc.Infrastructure.Data.DAO.Implementacion
{

    public class ConsultasRestauranteDAO : IConsultasRestauranteDAO
    {
        #region Dependency Injection

        private readonly IConexionBD _conexionBD;
        public ConsultasResuranteDAO(IConexionBD conexionBD)
        {
            _conexionBD = conexionBD;

        }




        #endregion

        #region Métodos publicos
        public IList<ProductosDTO> ObtenerProductosPorCategoria(string idCategoria)
        {
            IList<ProductosDTO> ilProductosDTOs = new List<ProductosDTO>();
            try
            {
                string query = "select ID_PRODUCTO Id, nombre, DESCRIPCION, PRECIO," +
                    " ID_CATEGORIA IdCategoria , ID_PROVEEDORES IdProvedores , Cantidad from productos where id_categoria='" + idCategoria + "'";
                using (IDbConnection connection = _conexionBD.ConnectionDB())
                {
                    ilProductosDTOs = connection.Query<ProductosDTO>(query).ToList();
                }

                return ilProductosDTOs;

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public int RegistrarComprarCliente(ProductosDTO productosDTO, int cantidad)
        {
            try
            {
                int resultado = 0;
                string query = "INSERT INTO COMPRAS (ID_COMPRAS, FECHA, ID_CLIENTE, ID_PRODUCTO, CANTIDAD) " +
                        " VALUES(SEQ_COMPRAS_CLASE.NEXTVAL, sysdate, 1, " + productosDTO.Id + " , " + cantidad + ")";

                using (IDbConnection connection = _conexionBD.ConnectionDB())
                {
                    resultado = connection.Execute(query);
                }

                return resultado;

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public IList<ClienteDTO> ObtenerClientesRegistrados()
        {
            IList<ClienteDTO> IlclienteDTOs = new List<ClienteDTO>();
            try
            {
                string query = "select * from CLIENTE";
                using (IDbConnection connection = _conexionBD.ConnectionDB())
                {
                    IlclienteDTOs = connection.Query<ClienteDTO>(query).ToList();
                }

                return IlclienteDTOs;

            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public IList<ComprasDTO> ObtenerCompras()
        {

            IList<ComprasDTO> ilcomprasDTOs = new List<ComprasDTO>();
            try
            {
                string query = "select co.FECHA fechaCompra , pro.NOMBRE Producto, " +
                               " co.cantidad, (cli.NOMBRE || ' ' || cli.APELLIDOS)NombreCompleto from COMPRAS co" +
                               " inner join CLIENTE cli on co.ID_CLIENTE = cli.ID_CLIENTE" +
                               " inner join PRODUCTOS pro on co.ID_PRODUCTO = pro.ID_PRODUCTO order by co.ID_COMPRAS desc ";
                using (IDbConnection connection = _conexionBD.ConnectionDB())
                {
                    ilcomprasDTOs = connection.Query<ComprasDTO>(query).ToList();
                }

                return ilcomprasDTOs;

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        public IList<LogComprasDTO> ObtenerLogsCompra()
        {
            IList<LogComprasDTO> IllogComprasDTOs = new List<LogComprasDTO>();
            try
            {
                string query = "select logc.FECHA fechaCompra , (cli.NOMBRE || ' ' ||  cli.APELLIDOS)NombreCompleto"+
                   " , pro.NOMBRE Producto, logc.cantidad,logc.FECHADEREGISTRO,logc.ACCION"+
                   "   from log_compras logc"+
                   " inner join CLIENTE cli on logc.ID_CLIENTE = cli.ID_CLIENTE "+
                   " inner join PRODUCTOS pro on logc.ID_PRODUCTO = pro.ID_PRODUCTO order by FECHADEREGISTRO desc";
                using (IDbConnection connection = _conexionBD.ConnectionDB())
                {
                    IllogComprasDTOs = connection.Query<LogComprasDTO>(query).ToList();
                }

                return IllogComprasDTOs;

            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
        #endregion



    }
}
