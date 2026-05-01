+++
title = "PASPORT Conductivity Sensor"
description = ""

[extra]
subtitle = "PS-2116A"
updated = 2026-06-01
site_version = 1
toc_level = 2
see_also = [
  { title = "Pasco", href = "www.pasco.com" },
]
+++

{{ hidden() }}



# Conductivity Sensor (PS-2116A)

## Conductivity Quick Start

The PS-2116A Conductivity Sensor measures the conductivity of ionic and non-ionic molecules of aqueous solutions.


## Sensor Specifications

**Sensor Ranges**
: 0–1,000 µS/cm  
: 0–10,000 µS/cm  
: 0–100,000 µS/cm  

**Accuracy**  
: ±10% of full scale for all ranges  

**Resolution**  
: 0.1% or better  

**Maximum Sample Rate**  
: 20 samples per second  

**Default Sample Rate**  
: 2 samples per second  

**Operating Temperature**  
: 0–50°C  

---

## Additional Equipment Needed

- PASPORT™ Interface (USB Link, Xplorer, PowerLink, etc.)  
- EZScreen or DataStudio Software (Version 1.6 or later)

---

## Equipment Setup

1. Connect the PASPORT interface to a USB port on your computer or to a USB hub.  
2. Connect the Conductivity Sensor to the PASPORT interface.  
3. Connect the sensor to a PASPORT interface.  
4. Start the PASPORT software. When it detects a PASPORT sensor, from the PASPORT screen, select a point of entry.

---

# Setup and Calibration

## DataStudio Calibration

**Equipment required:** PASPORT Conductivity Sensor (PS-2116A), standard solution (with conductivity value close to the test sample), DataStudio software

**Perform a single-point calibration using the DataStudio software:**

1. In the PASPORT Setup window, click the **Calibrate** button next to the µS/cm units.  
2. Enter the known conductivity value of the standard solution in the text box.  
3. Place the Conductivity Sensor in the standard sample.  
4. Click the **Set** button.  
5. Click the **OK** button.  

---

## PASPORT Xplorer Calibration

**Equipment required:** PASPORT Conductivity Sensor (PS-2116A), standard solution (with conductivity value close to the test sample), PASPORT Xplorer

1. Turn on the Xplorer and plug in a sensor.  
2. Press the **Display** button until the calibrate screen appears.  
3. Press the **Check** button.  
4. Press the **Tab** button to move through the digits.  
5. Use the arrow buttons to change the digit value until the display matches the value of the selected standard sample.  
6. Place the Conductivity Sensor in the standard sample.  
7. Press the **Check** button.  

---

## Conductivity Information

The Conductivity Sensor is extremely sensitive. A reading 25 µS/cm for a sample of pure water is well within tolerances. Pure water is difficult to find in a typical classroom setting. To make meaningful judgments based on conductivity readings, it is essential to understand the scale and range of this measurement.


{% table(header="Conductivity Values for Common Aqueous Solutions at 25°C", footer="") %}
| Solution         | Value           |
|------------------|-----------------|
| Ultra-Pure Water | 0.05–0.75 µS/cm |
| Drinking Water   | 50–1500 µS/cm   |
| Ocean Water      | 53,000 µS/cm    |
{% end %}


---

## Relationship between Conductivity and Total Dissolved Solids (TDS)

As a rule of thumb, for estimating TDS in parts per million, divide the conductivity measurement by 2:

**TDS (ppm) = Conductivity (µS/cm) / 2**

