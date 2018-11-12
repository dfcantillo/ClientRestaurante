using Dc.Infrastructure.Data.DAO.Contractos;
using Microsoft.Extensions.Configuration;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Data;

namespace Dc.Infrastructure.Data.DAO.Implementacion
{
    public class ConexionBD : IConexionBD
    {
        private readonly IConfiguration _configuration;
        public ConexionBD(IConfiguration configurationn)
        {
            _configuration = configurationn;
        }


        public OracleConnection ConnectionDB()
        {
            try
            {
                // string prueba = 
                // string oradb = ConfigurationManager.AppSettings.Get("MOBILE");
                //string connectionString = _configuration.GetSection("ConnectionStrings").GetSection("DefaultConnection").Value;
                //string oradb = "Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=10.60.10.84)(PORT=1523)))(CONNECT_DATA=(SERVER=DEDICATED)(SID=MOBILE)));User Id=MOBILE;Password=M0b_Dev_2018;";
                // string conection = _configuration.GetConnectionString("DefaultConnection");
                Oracle.ManagedDataAccess.Client.OracleConnection conn = new OracleConnection(_configuration.GetConnectionString("DefaultConnection"));
                return conn;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
