USE [VizLabData]
GO

/****** Object:  Table [dbo].[PopulationByAge]    Script Date: 10/12/2014 11:11:54 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PopulationByAge](
	[Id] [float] NOT NULL,
	[State] [nvarchar](255) NULL,
	[NumberTpUnder5] [float] NULL,
	[PercentTpUnder5] [float] NULL,
	[NumberTp5to9] [float] NULL,
	[PercentTp5to9] [float] NULL,
	[NumberTp10to14] [float] NULL,
	[PercentTp10to14] [float] NULL,
	[NumberTp15to19] [float] NULL,
	[PercentTp15to19] [float] NULL,
	[NumberTp20to24] [float] NULL,
	[PercentTp20to24] [float] NULL,
	[NumberTp25to29] [float] NULL,
	[PercentTp25to29] [float] NULL,
	[NumberTp30to34] [float] NULL,
	[PercentTp30to34] [float] NULL,
	[NumberTp35to39] [float] NULL,
	[PercentTp35to39] [float] NULL,
	[NumberTp40to44] [float] NULL,
	[PercentTp40to44] [float] NULL,
	[NumberTp45to49] [float] NULL,
	[PercentTp45to49] [float] NULL,
	[NumberTp50to54] [float] NULL,
	[PercentTp50to54] [float] NULL,
	[NumberTp55to59] [float] NULL,
	[PercentTp55to59] [float] NULL,
	[NumberTp60to64] [float] NULL,
	[PercentTp60to64] [float] NULL,
	[NumberTp65to69] [float] NULL,
	[PercentTp65to69] [float] NULL,
	[NumberTp70to74] [float] NULL,
	[PercentTp70to74] [float] NULL,
	[NumberTp75to79] [float] NULL,
	[PercentTp75to79] [float] NULL,
	[NumberTp80to84] [float] NULL,
	[PercentTp80to84] [float] NULL,
	[NumberTpOver85] [float] NULL,
	[PercentTpOver85] [float] NULL,
	[MedianAge] [float] NULL,
 CONSTRAINT [PK_PopulationByAge] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


