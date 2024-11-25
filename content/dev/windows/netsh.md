+++
title = "netsh"
updated = 2021-05-24

[extra]
site = "https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh"
references = [
  { mark = "1", title = "Docs", href = "https://docs.microsoft.com/en-us/windows-server/networking/technologies/netsh/netsh" }
]
+++

# netsh
Network shell (netsh) is a command-line utility that allows you to configure and display the status of various network communications server roles and components<sup>[1]</sup>

## Reserved Ports
Applications may reserve port ranges to make sure they don't run into 'port already in use' conflicts.

### Find excluded IPV4 ports
Show ports reserved by applications on your machine.

```powershell
netsh interface ipv4 show excludedportrange protocol=tcp
```

### Reserve a port range
Reserve a port so other applications do not cause a conflict when binding to a port.

```powershell
netsh interface ipv4 add excludedportrange protocol=tcp startport=50101 numberofports=1 store=persistent
```

## URL Registration

### Register a url for running a webserver locally
Reserve a url to route http requests to a local webserver.

```powershell
netsh http add urlacl url=http://192.168.1.1:80/ user=Everyone
```
