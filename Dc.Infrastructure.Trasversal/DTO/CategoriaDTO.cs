﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dc.Infrastructure.Trasversal.DTO
{
    class CategoriaDTO
    {
        public virtual int Id { get; set; }
        public virtual string Nombre { get; set; }
        public virtual DateTime Fecha { get; set; }
        
    }
}