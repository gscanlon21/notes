# =====================================================
# Hydroponics Treatment Analysis
# =====================================================

# Install packages if needed
packages <- c("readxl", "ggplot2", "dplyr", "stringr", "lubridate")

new.packages <- packages[!(packages %in% installed.packages()[,"Package"])]

if(length(new.packages))
  install.packages(new.packages)

library(readxl)
library(ggplot2)
library(dplyr)
library(stringr)
library(lubridate)

# =====================================================
# Configuration
# =====================================================

excel_file <- file.path(Sys.getenv("HOME"), "Downloads", "Hydroponics.xlsx")

output_dir <- file.path(Sys.getenv("HOME"), "Downloads", "Output")

if(!dir.exists(output_dir))
  dir.create(output_dir)

safe_filename <- function(x){
  gsub('[<>:"/\\\\|?*]', "_", x)
}

# =====================================================
# Read workbook
# =====================================================

sheets <- excel_sheets(excel_file)

for(sheet in sheets){

  cat("\nProcessing:", sheet, "\n")

  df <- read_excel(excel_file, sheet = sheet)

  # ---------------------------------------------
  # Convert Date
  # ---------------------------------------------

  if("Date" %in% names(df)){
    df$Date <- as.Date(df$Date)
  }

  # ---------------------------------------------
  # Convert numeric columns where possible
  # ---------------------------------------------

  for(col in names(df)){

    suppressWarnings({

      temp <- as.numeric(df[[col]])

      if(sum(!is.na(temp)) > 0)
        df[[col]] <- temp

    })

  }

  # ---------------------------------------------
  # Detect treatment columns
  # ---------------------------------------------

  treatment_cols <- names(df)[
    str_detect(
      tolower(names(df)),
      "fert|fertilizer|h2o2|scar|treatment|group"
    )
  ]

  # ---------------------------------------------
  # Detect response variables
  # ---------------------------------------------

  keywords <- c(
    "stem",
    "leaf",
    "height",
    "diameter",
    "root",
    "mass",
    "weight",
    "length",
    "shoot",
    "growth",
    "biomass"
  )

  response_cols <- c()

  for(col in names(df)){

    if(is.numeric(df[[col]])){

      if(any(str_detect(tolower(col), keywords)))
        response_cols <- c(response_cols, col)

    }

  }

  if(length(response_cols)==0){

    response_cols <- names(df)[sapply(df,is.numeric)]

  }

  # ---------------------------------------------
  # Summary statistics
  # ---------------------------------------------

  stats <- data.frame(
    Variable = response_cols,
    Count = sapply(df[response_cols], function(x) sum(!is.na(x))),
    Mean = sapply(df[response_cols], mean, na.rm=TRUE),
    Median = sapply(df[response_cols], median, na.rm=TRUE),
    SD = sapply(df[response_cols], sd, na.rm=TRUE),
    Minimum = sapply(df[response_cols], min, na.rm=TRUE),
    Maximum = sapply(df[response_cols], max, na.rm=TRUE)
  )

  write.csv(
    stats,
    file.path(output_dir,
              paste0(safe_filename(sheet), "_Statistics.csv")),
    row.names = FALSE
  )

  # ---------------------------------------------
  # Treatment comparisons
  # ---------------------------------------------

  for(treatment in treatment_cols){

    for(response in response_cols){

      plot_df <- df %>%
        select(all_of(c(treatment,response))) %>%
        na.omit()

      if(nrow(plot_df)==0)
        next

      # ---------------------------------
      # Bar chart
      # ---------------------------------

      means <- plot_df %>%
        group_by(.data[[treatment]]) %>%
        summarise(Mean = mean(.data[[response]]),
                  .groups="drop")

      p <- ggplot(means,
                  aes(x=.data[[treatment]],
                      y=Mean))+
        geom_col()+
        labs(
          title=paste(response,"vs",treatment),
          x=treatment,
          y=response
        )+
        theme_bw()

      ggsave(
        file.path(
          output_dir,
          paste0(
            safe_filename(sheet),
            "_",
            safe_filename(response),
            "_vs_",
            safe_filename(treatment),
            "_Bar.png"
          )
        ),
        p,
        width=7,
        height=5
      )

      # ---------------------------------
      # Boxplot
      # ---------------------------------

      p <- ggplot(plot_df,
                  aes(x=factor(.data[[treatment]]),
                      y=.data[[response]]))+
        geom_boxplot()+
        labs(
          title=paste(response,"by",treatment),
          x=treatment,
          y=response
        )+
        theme_bw()

      ggsave(
        file.path(
          output_dir,
          paste0(
            safe_filename(sheet),
            "_",
            safe_filename(response),
            "_vs_",
            safe_filename(treatment),
            "_Boxplot.png"
          )
        ),
        p,
        width=7,
        height=5
      )

      # ---------------------------------
      # Scatter plot
      # ---------------------------------

      if(is.numeric(plot_df[[treatment]])){

        p <- ggplot(plot_df,
                    aes(x=.data[[treatment]],
                        y=.data[[response]]))+
          geom_point(size=3)+
          geom_smooth(method="lm",
                      se=FALSE)+
          labs(
            title=paste(response,"vs",treatment),
            x=treatment,
            y=response
          )+
          theme_bw()

        ggsave(
          file.path(
            output_dir,
            paste0(
              safe_filename(sheet),
              "_",
              safe_filename(response),
              "_vs_",
              safe_filename(treatment),
              "_Scatter.png"
            )
          ),
          p,
          width=7,
          height=5
        )

      }

    }

  }

  # ---------------------------------------------
  # Time series
  # ---------------------------------------------

  if("Date" %in% names(df)){

    for(treatment in treatment_cols){

      for(response in response_cols){

        plot_df <- df %>%
          select(Date,
                 all_of(treatment),
                 all_of(response)) %>%
          na.omit()

        if(nrow(plot_df)==0)
          next

        p <- ggplot(
          plot_df,
          aes(
            x=Date,
            y=.data[[response]],
            colour=factor(.data[[treatment]])
          )
        )+
          geom_line()+
          geom_point()+
          labs(
            title=paste(response,"over Time"),
            colour=treatment,
            y=response
          )+
          theme_bw()

        ggsave(
          file.path(
            output_dir,
            paste0(
              safe_filename(sheet),
              "_",
              safe_filename(response),
              "_",
              safe_filename(treatment),
              "_Timeline.png"
            )
          ),
          p,
          width=8,
          height=5
        )

      }

    }

  }

}

cat("\nAnalysis Complete!\n")