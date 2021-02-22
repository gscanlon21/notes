+++
title = "JMeter"
updated = 2021-02-21
draft = true

[extra]
site = "https://jmeter.apache.org/"
+++

# Apache JMeter™
> The Apache JMeter™ application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.

## Repetitive Testing

### Download the JDBC Driver
We need the [SQL Server JDBC driver](https://docs.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15) so that we can  connect to the database

Unzip the folder to a memorable directory


### Configuring the Database Connection

Create a root `Test Plan` node and set the classpath to include the .jar file you just downloaded

###### **`Configuring the Classpath`**
![image.png](/.attachments/image-2c10b376-e8af-47a6-987a-20b0032fa7c7.png)

Update the `JDBC (Get User) Request` to filter down to users that will have access to your site features. If you don't select at least as many users as you are iterating over, parts of your test may fail. The query results are accessible using the variable name with `_rownumber` postfix, ie `${uid_1}`

###### **`Get User Query`**
![image.png](/.attachments/image-ca10124b-6da8-44d9-8176-04470b65ad65.png)

## Recording a Test

### Configuring the Recording Proxy
Navigate to the `HTTP(S) Test Script Recorder` node. Note the port number for the next step. Click *Start* and accept any self-signed certificates that pop up

###### **`Configuring the Recording Proxy`**
![image.png](/.attachments/image-1438c6be-4bf7-41d2-bd38-9613296b8e25.png)

Open up the Firefox browser and navigate under Options -> Network Settings to the proxy connection settings. Select the `Manual Proxy Configuration` radio button, set **Http Proxy** to "localhost" and the **Port** to match JMeter's port

###### **`Configuring the Firefox Proxy`**
![image.png](/.attachments/image-635c5b3d-4b30-4e2f-b081-ef5190467384.png)

Still in Firefox, navigate to the page you would like to test and proceed through a test round. Click *Stop* to halt the test recording

Under the `Recording Controller` node in JMeter, you should see requests to the pages you navigated to

###### **`Viewing the Requests Captured with the Recording Controller`**
![image.png](/.attachments/image-72eb7467-f6e3-497d-a09b-d5b11f8c88a6.png)

Strip out any login requests and general fluff (you can also add filters to the `Test Script Recorder`)

You now should have a functioning JMeter test script


### Running Your Test

To run your test you can click the green *Start* icon in the navbar. Requests will be visible in the `View Results Tree` node after a couple of seconds.

###### **`Viewing Test Results`**
![image.png](/.attachments/image-ccafeb29-71ff-40a5-8a90-8f2c42ae00b0.png)

The `Thread Group` node allows you specify how many users you want to test at a time. Each thread essentially acts as a single user

###### **`Specifying the Number of Users`**
![image.png](/.attachments/image-120d4c47-7d64-45f1-bbcb-2b9bf1140732.png)

A `Ramp-up period` of 5 seconds with 5 users will create 1 thread (user) per second, while a `Ramp-up period` of 0 will create all 5 threads (users) instantly

The template test plan mentioned earlier is setup to use a different user for each thread

### Debugging

If you need to inspect variables, right click on the `Thread Group` and select Add -> Sampler -> Debug Sampler. Drag the `Debug Sampler` to where you want the view the variables, run the `Test Plan`, and view the variables in the `View Results Tree`


### Using Variables

Variables are a powerful feature in JMeter that can be utilized to pipe response data from one request into the request body of the next

The simplest way to capture response data into variables is to setup a `JSON Extractor` for your request. Right click on the request node and select Add -> Post-processors -> JSON Extractor. You specify the response property you want to save with JsonPath and the variable name to save into just above it

###### **`Saving a Response Property to a Variable`**
![image.png](/.attachments/image-ffb22b06-5f29-4a4f-ae3b-c6fb1fe7a2e3.png)

Variables can be interpolated into request bodies with the `${variable_name}` syntax

###### **`Passing Variables in Requests`**
![image.png](/.attachments/image-569423ac-ab0d-4c14-a51f-392328f39c49.png)


### Built-In Functions

JMeter has many built-in [functions](https://jmeter.apache.org/usermanual/functions.html) that can helpful in scripting a test. All functions are prefixed with two (2) underscores (`__`)


### Stress Testing 

While debugging the test from the GUI is great, it can cause slowdowns when testing for performance. The CLI mode can be used instead:

###### **`Running a JMX File from the CLI`**
```powershell
jmeter -n -e `
-t "test_plan.jmx" `
-l "results" `
-o "report"
```

The report folder contains a statically generated web page that contains a bunch of useful information on how well your feature performed