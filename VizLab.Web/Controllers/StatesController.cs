using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using VizLab.Data;

namespace VizLab.Controllers
{
    public class StatesController : ApiController
    {
        private readonly ApplicationDbContext _dbContext;

        public StatesController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<string> Get()
        {
            return _dbContext.PopulationByAges.Select(p => p.State).ToList();
        }
    }
}