
# Install packages if needed:
# install.packages("readxl")
# install.packages("ggplot2")

library(readxl)
library(ggplot2)

# Read the Excel workbook
file <- "Hydroponics.xlsx"

jars <- read_excel(file, sheet = "Jars", skip = 9)
growing <- read_excel(file, sheet = "Growing and Harvest", skip = 9)

# Keep the columns we need from the Jars sheet
jars_data <- jars[, c(
  "Jar #",
  "Fertilizer Added (g)"
)]

 # Keep the columns we need from Growing and Harvest
growing_data <- growing[, c(
  "Seeding Jar",
  "Seed",
  "Date Seeded",
  "Transplant Date",
  "Transplant Root Length (mm)"
)]

# Remove the * used to indicate reused jars
growing_data$`Seeding Jar` <- gsub("\\*", "", as.character(growing_data$`Seeding Jar`))

# Convert jar numbers to numeric
growing_data$`Seeding Jar` <- as.numeric(growing_data$`Seeding Jar`)

# Convert root length and fertilizer to numeric
growing_data$`Transplant Root Length (mm)` <- as.numeric(growing_data$`Transplant Root Length (mm)`)

jars_data$`Jar #` <- as.numeric(jars_data$`Jar #`)

jars_data$`Fertilizer Added (g)` <- as.numeric(jars_data$`Fertilizer Added (g)`)

# Convert seed values to character
growing_data$`Seed` <- trimws(as.character(growing_data$`Seed`))

# Replace empty strings with NA
growing_data$`Seed`[growing_data$`Seed` == ""] <- NA

# Convert the actual Excel date columns
growing_data$`Date Seeded` <- as.Date(growing_data$`Date Seeded`, format = "%Y-%m-%d")

growing_data$`Transplant Date` <- as.Date(growing_data$`Transplant Date`, format = "%Y-%m-%d")

# Calculate number of days between seeding and transplant
growing_data$`Days Between` <- as.numeric(growing_data$`Transplant Date` - growing_data$`Date Seeded`)

# Calculate root length per day
growing_data$`Root Length per Day (mm/day)` <- growing_data$`Transplant Root Length (mm)` / growing_data$`Days Between`
  
# Join the data using the seeding jar number
data <- merge(growing_data, jars_data,
	by.x = "Seeding Jar",
	by.y = "Jar #"
)

# Remove rows without the required data
data <- data[
	!is.na(data$`Transplant Root Length (mm)`) &
	!is.na(data$`Fertilizer Added (g)`) &
	!is.na(data$`Days Between`) &
	data$`Days Between` > 0,
]

# Print the data to the terminal
print(data)

# Create the scatter plot
graph <- ggplot(
	data,
	aes(
		x = `Fertilizer Added (g)`,
		y = `Root Length per Day (mm/day)`,
		shape = `Seed`
	)
) +
	geom_point(size = 4) +
	
	geom_smooth(
		method = "lm",
		se = FALSE,
		aes(
		group = `Seed`
		)
	) +
	
	scale_shape_manual(
		values = c(
		"3059JP.65" = 16,  # Circle
		"2178GP.53" = 17,  # Triangle
		"3057JP.65" = 15,  # Square
		"3056JP.65" = 18   # Diamond
		),
		na.value = 4
	) +
	
	labs(
		title = "Seeding Jar Fertilizer vs. Transplant Root Growth Rate",
		x = "Fertilizer Added to Seeding Jar (g)",
		y = "Root Length / Days (mm/day)",
		shape = "Seed"
	) +
	
	theme_minimal()

# Display the graph
print(graph)

# Save the graph as a PNG file
ggsave("fertilizer_vs_root_growth_rate.png", graph, width = 8, height = 6, dpi = 300)

# Open the graph automatically on Windows
shell.exec("fertilizer_vs_root_growth_rate.png")

cat("\nGraph saved as: fertilizer_vs_root_growth_rate.png\n")

# Calculate average root length for each fertilizer amount and seed variety
avg_root_data <- aggregate(
  `Transplant Root Length (mm)` ~
    `Fertilizer Added (g)` + `Seed`,
  data = data,
  FUN = mean,
  na.rm = TRUE
)

# Create scatter plot
avg_root_graph <- ggplot(
  avg_root_data,
  aes(
    x = `Fertilizer Added (g)`,
    y = `Transplant Root Length (mm)`,
    shape = `Seed`
  )
) +
  geom_point(size = 4) +
  
  geom_smooth(
    method = "lm",
    se = FALSE,
    aes(group = `Seed`)
  ) +
  
  scale_shape_manual(
    values = c(
      "3059JP.65" = 16,
      "2178GP.53" = 17,
      "3057JP.65" = 15,
      "3056JP.65" = 18
    ),
    na.value = 4
  ) +
  
  labs(
    title = "Seeding Jar Fertilizer vs. Average Transplant Root Length",
    x = "Fertilizer Added to Seeding Jar (g)",
    y = "Average Transplant Root Length (mm)",
    shape = "Seed"
  ) +
  
  theme_minimal()

# Display the graph
print(avg_root_graph)

# Save the graph as a PNG file
ggsave(
  "fertilizer_vs_average_root_length.png",
  avg_root_graph,
  width = 8,
  height = 6,
  dpi = 300
)

# Open the graph automatically on Windows
shell.exec("fertilizer_vs_average_root_length.png")

cat("\nGraph saved as: fertilizer_vs_average_root_length.png\n")
