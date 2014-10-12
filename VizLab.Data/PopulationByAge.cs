namespace VizLab.Data
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("PopulationByAge")]
    public partial class PopulationByAge
    {
        public double Id { get; set; }

        [StringLength(255)]
        public string State { get; set; }

        public double NumberTpUnder5 { get; set; }

        public double PercentTpUnder5 { get; set; }

        public double NumberTp5to9 { get; set; }

        public double PercentTp5to9 { get; set; }

        public double NumberTp10to14 { get; set; }

        public double PercentTp10to14 { get; set; }

        public double NumberTp15to19 { get; set; }

        public double PercentTp15to19 { get; set; }

        public double NumberTp20to24 { get; set; }

        public double PercentTp20to24 { get; set; }

        public double NumberTp25to29 { get; set; }

        public double PercentTp25to29 { get; set; }

        public double NumberTp30to34 { get; set; }

        public double PercentTp30to34 { get; set; }

        public double NumberTp35to39 { get; set; }

        public double PercentTp35to39 { get; set; }

        public double NumberTp40to44 { get; set; }

        public double PercentTp40to44 { get; set; }

        public double NumberTp45to49 { get; set; }

        public double PercentTp45to49 { get; set; }

        public double NumberTp50to54 { get; set; }

        public double PercentTp50to54 { get; set; }

        public double NumberTp55to59 { get; set; }

        public double PercentTp55to59 { get; set; }

        public double NumberTp60to64 { get; set; }

        public double PercentTp60to64 { get; set; }

        public double NumberTp65to69 { get; set; }

        public double PercentTp65to69 { get; set; }

        public double NumberTp70to74 { get; set; }

        public double PercentTp70to74 { get; set; }

        public double NumberTp75to79 { get; set; }

        public double PercentTp75to79 { get; set; }

        public double NumberTp80to84 { get; set; }

        public double PercentTp80to84 { get; set; }

        public double NumberTpOver85 { get; set; }

        public double PercentTpOver85 { get; set; }

        public double MedianAge { get; set; }
    }
}
