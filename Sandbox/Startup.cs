using Microsoft.Owin;
using Owin;
using VizLab;

[assembly: OwinStartupAttribute(typeof(Startup))]
namespace VizLab
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
