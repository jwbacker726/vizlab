using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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

        public SingleStatePopulationModel Get(string state)
        {
            var all = _dbContext.PopulationByAges.ToList();
            var rawResult = all.Single(p => p.State == state);
            var maxPop = all.Select(a => a.Convert()).SelectMany(a => a).Max(a => a.CategoryValue);

            var result = rawResult.Convert();
            return new SingleStatePopulationModel
            {
                State = state,
                AgeGroupInfos = result,
                MaxPop = maxPop
            };
        }

        public List<PopulationByAge> Get()
        {
            var result = _dbContext.PopulationByAges.ToList();
            return result;
        }
    }

    public class SingleStatePopulationModel
    {
        public double MaxPop { get; set; }
        public List<AgeGroupInfo> AgeGroupInfos { get; set; }
        public string State { get; set; }
    }

    public enum CategoryType
    {
        NumberTpUnder5,
        NumberTp5to9,
        NumberTp10to14,
        NumberTp15to19,
        NumberTp20to24,
        NumberTp25to29,
        NumberTp30to34,
        NumberTp35to39,
        NumberTp40to44,
        NumberTp45to49,
        NumberTp50to54,
        NumberTp55to59,
        NumberTp60to64,
        NumberTp65to69,
        NumberTp70to74,
        NumberTp75to79,
        NumberTp80to84,
        NumberTpOver85
    }

    public class AgeGroupInfo
    {
        public string CategoryType { get; set; }
        public double CategoryValue { get; set; }
    }

    public static class EnumExtentions
    {
        public static List<AgeGroupInfo> Convert(this PopulationByAge source)
        {
            var result = new List<AgeGroupInfo>
            {
                new AgeGroupInfo {CategoryType = CategoryType.NumberTpUnder5.ToHumanFriendly(), CategoryValue = source.NumberTpUnder5},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp5to9.ToHumanFriendly(), CategoryValue = source.NumberTp5to9},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp10to14.ToHumanFriendly(), CategoryValue = source.NumberTp10to14},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp15to19.ToHumanFriendly(), CategoryValue = source.NumberTp15to19},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp20to24.ToHumanFriendly(), CategoryValue = source.NumberTp20to24},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp25to29.ToHumanFriendly(), CategoryValue = source.NumberTp25to29},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp30to34.ToHumanFriendly(), CategoryValue = source.NumberTp30to34},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp35to39.ToHumanFriendly(), CategoryValue = source.NumberTp35to39},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp40to44.ToHumanFriendly(), CategoryValue = source.NumberTp40to44},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp45to49.ToHumanFriendly(), CategoryValue = source.NumberTp45to49},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp50to54.ToHumanFriendly(), CategoryValue = source.NumberTp50to54},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp55to59.ToHumanFriendly(), CategoryValue = source.NumberTp55to59},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp60to64.ToHumanFriendly(), CategoryValue = source.NumberTp60to64},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp65to69.ToHumanFriendly(), CategoryValue = source.NumberTp65to69},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp70to74.ToHumanFriendly(), CategoryValue = source.NumberTp70to74},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp75to79.ToHumanFriendly(), CategoryValue = source.NumberTp75to79},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTp80to84.ToHumanFriendly(), CategoryValue = source.NumberTp80to84},
                new AgeGroupInfo {CategoryType = CategoryType.NumberTpOver85.ToHumanFriendly(), CategoryValue = source.NumberTpOver85},
            };

            return result;  
        }

        public static string ToHumanFriendly(this CategoryType categoryType)
        {
            switch (categoryType)
            {
                case CategoryType.NumberTpUnder5:
                    return "< 5";
                case CategoryType.NumberTp5to9:
                    return "5-9";
                case CategoryType.NumberTp10to14:
                    return "10-14";
                case CategoryType.NumberTp15to19:
                    return "15-19";
                case CategoryType.NumberTp20to24:
                    return "20-24";
                case CategoryType.NumberTp25to29:
                    return "25-29";
                case CategoryType.NumberTp30to34:
                    return "30-34";
                case CategoryType.NumberTp35to39:
                    return "35-39";
                case CategoryType.NumberTp40to44:
                    return "40-44";
                case CategoryType.NumberTp45to49:
                    return "45-49";
                case CategoryType.NumberTp50to54:
                    return "50-54";
                case CategoryType.NumberTp55to59:
                    return "55-59";
                case CategoryType.NumberTp60to64:
                    return "60-64";
                case CategoryType.NumberTp65to69:
                    return "65-69";
                case CategoryType.NumberTp70to74:
                    return "70-74";
                case CategoryType.NumberTp75to79:
                    return "75-79";
                case CategoryType.NumberTp80to84:
                    return "80-84";
                case CategoryType.NumberTpOver85:
                    return "> 85";
                default:
                    return "unknown";
            }
        }
    }
}