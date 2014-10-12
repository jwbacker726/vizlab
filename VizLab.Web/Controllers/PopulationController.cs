using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using VizLab.Data;

namespace VizLab.Controllers
{
    public class PopulationController : ApiController
    {
        private readonly ApplicationDbContext _dbContext;

        public PopulationController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public PopulationByAge Get(string state)
        {
            var result = _dbContext.PopulationByAges.Single(p => p.State == state);
            return result;
        }

        public List<PopulationByAge> Get()
        {
            var result = _dbContext.PopulationByAges.ToList();
            return result;
        }
    }
}