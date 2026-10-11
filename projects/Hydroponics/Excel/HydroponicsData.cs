using System.Data;
using Hydroponics.Excel.Tables;

namespace Hydroponics.Excel;

/// <summary>
/// All hydroponics data. Each sheet's table is exposed as its own typed class.
/// </summary>
public class HydroponicsData
{
    private readonly Dictionary<string, string> _seedName;
    private readonly Dictionary<string, string> _seedByGrowingJar = [];

    private GrowingTable? _growing;
    private HarvestTable? _harvest;
    private SeedsTable? _seeds;
    private JarsTable? _jars;
    private JarAdditionsTable? _jarAdditions;
    private ContainersTable? _containers;
    private CupsTable? _cups;
    private StorageTable? _storage;
    private TemperatureTable? _temperature;
    private GrowingMeasurementsTable? _growingMeasurements;
    private ProceduresTable? _procedures;
    private ConversionsTable? _conversions;
    private FertilizersTable? _fertilizers;
    private SolutionsTable? _solutions;
    private NutrientsTable? _nutrients;
    private AdjustmentsTable? _adjustments;
    private WaterTestTable? _waterTest;
    private ValidationListsTable? _validationLists;

    public HydroponicsData(IReadOnlyDictionary<string, DataTable> tables)
    {
        Tables = tables;

        _seedName = Seeds
            .Where(s => s.Seed != null)
            .ToDictionary(s => s.Seed!, s => s.CommonName ?? s.Seed!);

        foreach (var row in Growing)
        {
            if (row.Seed == null)
            {
                continue;
            }

            if (row.GrowingJar != null && row.GrowingJar != "None")
            {
                _seedByGrowingJar[row.GrowingJar] = SeedOf(row);
            }
        }
    }

    /// <summary>
    /// Every loaded table, keyed "Sheet/Table".
    /// </summary>
    public IReadOnlyDictionary<string, DataTable> Tables { get; }

    public GrowingTable Growing => _growing ??= new(Raw(GrowingTable.Key));
    public HarvestTable Harvest => _harvest ??= new(Raw(HarvestTable.Key));
    public SeedsTable Seeds => _seeds ??= new(Raw(SeedsTable.Key));
    public JarsTable Jars => _jars ??= new(Raw(JarsTable.Key));
    public JarAdditionsTable JarAdditions => _jarAdditions ??= new(Raw(JarAdditionsTable.Key));
    public ContainersTable Containers => _containers ??= new(Raw(ContainersTable.Key));
    public CupsTable Cups => _cups ??= new(Raw(CupsTable.Key));
    public StorageTable Storage => _storage ??= new(Raw(StorageTable.Key));
    public TemperatureTable Temperature => _temperature ??= new(Raw(TemperatureTable.Key));
    public GrowingMeasurementsTable GrowingMeasurements => _growingMeasurements ??= new(Raw(GrowingMeasurementsTable.Key));
    public ProceduresTable Procedures => _procedures ??= new(Raw(ProceduresTable.Key));
    public ConversionsTable Conversions => _conversions ??= new(Raw(ConversionsTable.Key));
    public FertilizersTable Fertilizers => _fertilizers ??= new(Raw(FertilizersTable.Key));
    public SolutionsTable Solutions => _solutions ??= new(Raw(SolutionsTable.Key));
    public NutrientsTable Nutrients => _nutrients ??= new(Raw(NutrientsTable.Key));
    public AdjustmentsTable Adjustments => _adjustments ??= new(Raw(AdjustmentsTable.Key));
    public WaterTestTable WaterTest => _waterTest ??= new(Raw(WaterTestTable.Key));
    public ValidationListsTable ValidationLists => _validationLists ??= new(Raw(ValidationListsTable.Key));

    /// <summary>
    /// Plant type (common name) for a row of the Growing table.
    /// </summary>
    public string SeedOf(GrowingRow growingRow)
    {
        if (growingRow.Seed != null && _seedName.TryGetValue(growingRow.Seed, out var name))
        {
            return name;
        }

        return growingRow.SeedName ?? growingRow.Seed ?? "Unknown";
    }

    /// <summary>
    /// Plant type for a growing jar id (as used by Harvest."Growing Jar").
    /// </summary>
    public bool TryGetSeedByGrowingJar(string growingJar, out string seed)
    {
        return _seedByGrowingJar.TryGetValue(growingJar, out seed!);
    }

    private DataTable Raw(string key)
    {
        if (!Tables.TryGetValue(key, out var table))
        {
            throw new KeyNotFoundException($"Table \"{key}\" was not found in the workbook.");
        }

        return table;
    }
}
