using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dc.Infrastructure.Trasversal.DTO
{
    public class SendMailDTO
    {
       public virtual string Remitente { get; set; }

        public virtual string Asunto { get; set; }

        public virtual string Mensaje { get; set; }

        public virtual string Destinatarios { get; set; }

    }
}
