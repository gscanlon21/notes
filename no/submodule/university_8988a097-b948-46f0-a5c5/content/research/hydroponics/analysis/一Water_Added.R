# Install packages if needed:
# install.packages("readxl")
# install.packages("ggplot2")
# install.packages("dplyr")

library(readxl)
library(ggplot2)
library(dplyr)

# Read the Jars sheet
# The actual column headers begin on row 10
jars <- read_excel(
  "Hydroponics.xlsx",
  sheet = "Jars",
  skip = 9
)

# Clean column names
names(jars) <- trimws(names(jars))

# Convert relevant columns
jars <- jars %>%
  filter(
    tolower(trimws(`Jar Size (mL)`)) != "unknown",
    tolower(trimws(`Water Added (mL)`)) != "unknown",
    tolower(trimws(`Additional Water Added (mL)`)) != "unknown"
  ) %>%
  mutate(
    `Jar Size (mL)` = as.numeric(`Jar Size (mL)`),
    `Water Added (mL)` = as.numeric(`Water Added (mL)`),

    # Convert Yes = 1, No = 0, numbers = number
    `Additional Water Added (mL)` = case_when(
      tolower(trimws(`Additional Water Added (mL)`)) == "yes" ~ 1,
      tolower(trimws(`Additional Water Added (mL)`)) == "no" ~ 0,
      TRUE ~ as.numeric(`Additional Water Added (mL)`)
    )
  )

# Remove rows without the data needed for the graph
plot_data <- jars %>%
  filter(
    !is.na(`Water Added (mL)`),
    !is.na(`Additional Water Added (mL)`),
    !is.na(`Jar Type`)
  )

# -------------------------------------------------------
# Vertical line of best fit for each Jar Type
# -------------------------------------------------------

# -------------------------------------------------------
# Calculate water threshold for each Jar Type
# -------------------------------------------------------

thresholds <- plot_data %>%
  group_by(`Jar Type`) %>%
  summarise(
    # Highest water amount at which additional water was needed
    max_water_with_additional = max(
      `Water Added (mL)`[
        `Additional Water Added (mL)` > 0
      ],
      na.rm = TRUE
    ),
    
    # Lowest water amount above the last point requiring
    # additional water
    threshold_water = min(
      `Water Added (mL)`[
        `Additional Water Added (mL)` == 0 &
        `Water Added (mL)` >
          max(
            `Water Added (mL)`[
              `Additional Water Added (mL)` > 0
            ],
            na.rm = TRUE
          )
      ],
      na.rm = TRUE
    ),
    
    .groups = "drop"
  )

# -------------------------------------------------------
# Create graph
# -------------------------------------------------------

graph <- ggplot(
  plot_data,
  aes(
    x = `Water Added (mL)`,
    y = `Additional Water Added (mL)`,
    shape = `Jar Type`,
    color = `Jar Type`
  )
) +

  # Points
  geom_point(
    size = 4,
    alpha = 0.8
  ) +

  geom_vline(
  data = thresholds,
  aes(
    xintercept = threshold_water,
    color = `Jar Type`
  ),
  linetype = "dashed",
  linewidth = 1
) +

# Display threshold value
geom_text(
  data = thresholds,
  aes(
    x = threshold_water,
    y = 0.5,
    label = paste0(threshold_water, " mL"),
    color = `Jar Type`
  ),
  angle = 90,
  vjust = -0.5,
  hjust = 0.5,
  size = 4,
  fontface = "bold"
) +

  labs(
    title = "Water Added vs. Additional Water Added",
    subtitle = "Vertical lines of best fit by jar type",
    x = "Water Added (mL)",
    y = "Additional Water Added (mL)",
    shape = "Jar Type",
    color = "Jar Type"
  ) +

  theme_minimal() +

  theme(
    axis.line.x = element_line(linewidth = 0.8),
    axis.line.y = element_line(linewidth = 0.8)
  )

# Display graph
print(graph)

# Save graph
ggsave(
  "water_added_additional_water.png",
  graph,
  width = 8,
  height = 6,
  dpi = 300
)

# Open graph automatically on Windows
shell.exec("water_added_additional_water.png")

cat("\nGraph saved as: water_added_additional_water.png\n")