using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace VizLab.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public DbSet<Dataset> Datasets { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }

    public class Dataset
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}