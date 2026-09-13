from pathlib import Path
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import re

# --------------------------------------------------
# Configuration
# --------------------------------------------------

EXCEL_FILE = Path.home() / "Downloads" / "Hydroponics.xlsx"

OUTPUT_DIR = Path.home() / "Downloads" / "Output"
OUTPUT_DIR.mkdir(exist_ok=True)

# --------------------------------------------------
# Helper
# --------------------------------------------------

def safe_filename(name):
    return re.sub(r'[<>:"/\\|?*]', "_", str(name))

# --------------------------------------------------
# Read workbook
# --------------------------------------------------
excel = pd.ExcelFile(EXCEL_FILE)

for sheet in excel.sheet_names:
    print(f"Processing {sheet}")

    df = pd.read_excel(EXCEL_FILE, sheet_name=sheet)

    # Convert dates
    if "Date" in df.columns:
        df["Date"] = pd.to_datetime(df["Date"], errors="coerce")

    # Convert numeric columns
    for c in df.columns:
        df[c] = pd.to_numeric(df[c], errors="coerce")

    # --------------------------------------------------
    # Identify treatment columns
    # --------------------------------------------------
    treatment_columns = []
    for col in df.columns:
        name = col.lower()
        
        if any(word in name for word in
               ["fert", "fertilizer",
                "h2o2",
                "scar",
                "treatment",
                "group"]):

            treatment_columns.append(col)

    # --------------------------------------------------
    # Identify response variables
    # --------------------------------------------------
    response_columns = []

    keywords = [
        "stem",
        "leaf",
        "height",
        "root",
        "diameter",
        "mass",
        "weight",
        "length",
        "shoot",
        "growth",
        "biomass"
    ]

    for col in df.columns:
        if pd.api.types.is_numeric_dtype(df[col]):
            if any(k in col.lower() for k in keywords):
                response_columns.append(col)

    if len(response_columns) == 0:
        response_columns = df.select_dtypes(include=np.number).columns.tolist()

    # --------------------------------------------------
    # Summary statistics
    # --------------------------------------------------
    stats = df[response_columns].describe()
    stats.to_csv(OUTPUT_DIR / f"{safe_filename(sheet)}_Statistics.csv")

    # --------------------------------------------------
    # Compare treatments
    # --------------------------------------------------
    for treatment in treatment_columns:

        for response in response_columns:

            subset = df[[treatment, response]].dropna()

            if subset.empty:
                continue

            # -------------------------------
            # Bar chart
            # -------------------------------

            means = subset.groupby(treatment)[response].mean()

            plt.figure(figsize=(7,5))

            means.plot(kind="bar")

            plt.ylabel(response)
            plt.title(f"{response} vs {treatment}")

            plt.tight_layout()

            plt.savefig(OUTPUT_DIR / f"{safe_filename(sheet)}_{safe_filename(response)}_vs_{safe_filename(treatment)}_Bar.png", dpi=200)

            plt.close()

            # -------------------------------
            # Boxplot
            # -------------------------------

            plt.figure(figsize=(7,5))

            subset.boxplot(column=response, by=treatment)

            plt.title(f"{response} by {treatment}")

            plt.suptitle("")

            plt.tight_layout()

            plt.savefig(OUTPUT_DIR / f"{safe_filename(sheet)}_{safe_filename(response)}_vs_{safe_filename(treatment)}_Box.png", dpi=200)

            plt.close()

            # -------------------------------
            # Scatter if treatment numeric
            # -------------------------------

            if pd.api.types.is_numeric_dtype(subset[treatment]):

                plt.figure(figsize=(7,5))

                plt.scatter(subset[treatment], subset[response])

                # Trendline
                z = np.polyfit(subset[treatment], subset[response], 1)

                p = np.poly1d(z)

                x = np.linspace(subset[treatment].min(), subset[treatment].max(), 100)

                plt.plot(x, p(x), linewidth=2)

                plt.xlabel(treatment)
                plt.ylabel(response)

                plt.title(f"{response} vs {treatment}")

                plt.tight_layout()

                plt.savefig(OUTPUT_DIR / f"{safe_filename(sheet)}_{safe_filename(response)}_vs_{safe_filename(treatment)}_Scatter.png", dpi=200)

                plt.close()

    # --------------------------------------------------
    # Time series
    # --------------------------------------------------

    if "Date" in df.columns:

        for treatment in treatment_columns:

            for response in response_columns:

                if treatment not in df.columns:
                    continue

                plot_df = df[["Date", treatment, response]].dropna()

                if plot_df.empty:
                    continue

                plt.figure(figsize=(9,5))

                for group in plot_df[treatment].unique():

                    temp = plot_df[plot_df[treatment] == group]

                    temp = temp.sort_values("Date")

                    plt.plot(temp["Date"], temp[response], marker="o", label=str(group))

                plt.legend(title=treatment)

                plt.xlabel("Date")
                plt.ylabel(response)

                plt.title(f"{response} over Time")

                plt.xticks(rotation=45)

                plt.tight_layout()

                plt.savefig(OUTPUT_DIR / f"{safe_filename(sheet)}_{safe_filename(response)}_{safe_filename(treatment)}_Timeline.png", dpi=200)

                plt.close()

print("Finished!")