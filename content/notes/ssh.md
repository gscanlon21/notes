+++
title = "SSH"
updated = 2021-09-19

[extra]
+++

# SSH

## Agent

To start the SSH Agent on Windows, run the following as an administrator
```powershell
# Set the ssh-agent to auto start
Get-Service -Name ssh-agent | Set-Service -StartupType Automatic
# Start the ssh-agent for the current session
Start-Service ssh-agent
```

To add a private SSH Key on windows, run
```powershell
ssh-add path/to/.ssh/id_rsa
```