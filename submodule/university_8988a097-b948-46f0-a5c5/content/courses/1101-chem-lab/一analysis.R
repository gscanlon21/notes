# Install packages if needed:
# install.packages("readxl")
# install.packages("ggplot2")

library(readxl)
library(ggplot2)

# -----------------------------
# 1. Read the Excel file
# -----------------------------

data <- read_excel("your_file.xlsx")

# View the column names
print(names(data))

# -----------------------------
# 2. Choose the x and y columns
# -----------------------------

x_column <- names(data)[1]
y_column <- names(data)[2]

# Make sure they are numeric
data[[x_column]] <- as.numeric(data[[x_column]])
data[[y_column]] <- as.numeric(data[[y_column]])

# Remove rows with missing values
data <- data[complete.cases(data[, c(x_column, y_column)]), ]

# -----------------------------
# 3. Create the graph
# -----------------------------

graph <- ggplot(data, aes(x = .data[[x_column]],
                          y = .data[[y_column]])) +

  # Experimental data points
  geom_point(size = 3) +

  # Linear line of best fit
  geom_smooth(
    method = "lm",
    formula = y ~ x,
    se = FALSE,
    linewidth = 1
  ) +

  # Cubic line of best fit
  geom_smooth(
    method = "lm",
    formula = y ~ poly(x, 3, raw = TRUE),
    se = FALSE,
    linewidth = 1
  ) +

  # Axis labels and title
  labs(
    title = "Linear and Cubic Lines of Best Fit",
    x = x_column,
    y = y_column
  ) +

  theme_minimal()

# Display graph
print(graph)

# -----------------------------
# 4. Save graph
# -----------------------------

ggsave(
  "linear_and_cubic_fit.png",
  graph,
  width = 8,
  height = 6,
  dpi = 300
)