+++
title = "JMeter"
updated = 2021-05-24
draft = false

[extra]
site = "https://jmeter.apache.org/"
version = "5.4.1"
+++

# Apache JMeter™
The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.

## Configuration

### Connect to a SQL Server database
We need the [SQL Server JDBC driver](https://docs.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) so that we can connect to the database

Unzip the folder to a memorable directory

Under the root `Test Plan` node set the classpath to include the .jar file you just downloaded

### Simulating users

The `Thread Group` node allows you specify how many users you want to test at a time. Each thread essentially acts as a single user

A `Ramp-up period` of 5 seconds with 5 users will create 1 thread (user) per second, while a `Ramp-up period` of 0 will create all 5 threads (users) instantly

### Variables

Variables are a powerful feature in JMeter that can be utilized to pipe response data from one request into the request body of the next

The simplest way to capture response data into variables is to setup a `JSON Extractor` for your request. Right click on the request node and select Add -> Post-processors -> JSON Extractor. You specify the response property you want to save with JsonPath and the variable name to save into just above it

Variables can be interpolated into request bodies with the `${variable_name}` syntax

### Built-In Functions

JMeter has many built-in [functions](https://jmeter.apache.org/usermanual/functions.html) that can helpful in scripting a test. All functions are prefixed with two (2) underscores (`__`)


## Recording a Test

### Configuring the Recording Proxy
Navigate to the `HTTP(S) Test Script Recorder` node. Note the port number for the next step. Click *Start* and accept/decline any self-signed certificates that pop up

Open up the Firefox browser and navigate under Options -> Network Settings to the proxy connection settings. Select the `Manual Proxy Configuration` radio button, set **Http Proxy** to "localhost" and the **Port** to match JMeter's port

### Recording a test

Still in Firefox, navigate to the page you would like to test and proceed through a test round. Click *Stop* to halt the test recording.

Under the `Recording Controller` node in JMeter, you should see requests to the pages you navigated to. Strip out any fluff from the captured requests (you can also add filters to the `Test Script Recorder`).

You now should have a functioning JMeter test script.


## Debugging

To debug your test you can click the green *Start* icon in the navbar. Requests will be visible in the `View Results Tree` node after a couple of seconds.

If you need to inspect variables, right click on the `Thread Group` and select Add -> Sampler -> Debug Sampler. Drag the `Debug Sampler` to where you want the view the variables, run the `Test Plan`, and view the variables in the `View Results Tree`


## Performance Testing 

While debugging the test from the GUI is great, it can cause slowdowns when testing for performance. The CLI mode can be used instead:

###### Running a JMX File from the CLI
```powershell
jmeter -n -e `
-t "test_plan.jmx" `
-l "results" `
-o "report"
```

The report folder contains a statically generated web page that contains a bunch of useful information on how well your feature performed