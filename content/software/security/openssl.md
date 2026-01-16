+++
title = "OpenSSL"
updated = 2021-05-24

[extra]
site = "https://www.openssl.org/"
version = "1.1.1k"
license = "Apache-style"
see_also = [
  { title = "Certificate Chains", href = "https://www.venafi.com/blog/how-do-certificate-chains-work" }
]
+++

{{ hidden() }}

# OpenSSL

OpenSSL is a robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols

## Certificate Chain

There are several parts to a certificate chain: the root certificate authority (CA) certificate; the intermediate certificates; and the server certificate. All of these certificates must be trusted (chain of trust) for the client to accept an SSL connection. 

### Missing intermediate certificate

Some servers may be misconfigured where only the server certificate is served. This causes problems on clients that aren't configured to look up intermediate certificates using [Authority Information Access](https://en.wikipedia.org/wiki/PKI_Resource_Query_Protocol#Certificate_Extensions).

You can query for missing certificates with 
```powershell
openssl s_client -showcerts -connect www.ascallion.com:443
```
```
CONNECTED(0000019C)
depth=1 C = US, O = Let's Encrypt, CN = R3
verify error:num=20:unable to get local issuer certificate
verify return:1
depth=0 CN = ascallion.com
verify return:1
---
Certificate chain
 0 /*order of the certificate in the chain*/ s /*subject*/:CN = ascallion.com
   i /*issuer -- should match the next certificates subject*/:C = US, O = Let's Encrypt, CN = R3
-----BEGIN CERTIFICATE-----
MIIGLjCCBRagAwIBAgISBKHvxXgqHiNKdFT82oNvR7SbMA0GCSqGSIb3DQEBCwUA
MDIxCzAJBgNVBAYTAlVTMRYwFAYDVQQKEw1MZXQncyBFbmNyeXB0MQswCQYDVQQD
EwJSMzAeFw0yMTAyMTEwMDE4MDlaFw0yMTA1MTIwMDE4MDlaMBcxFTATBgNVBAMT
DHRzY2FubG9uLmNvbTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMNM
yOEfhehLZ2tiU5+nuD9M9/bZ3lp/9XFdysLhdnlVUb+HKidm2r3CCunjcGpKbbD3
T4IHfWyyzbDgS+vbLyAKLdzzGP/jsv2Bzc6VY8Q4IHVXVSg83gE3ac+ABddZfnDA
tO7cdzIOs8yLkVaznu2W9BzDOo+uvw3cQLutwOwOBXHaAeDeGYunweerASBqfA1p
/WUsFzf63fwAt9/WTtI63UR83rQjYOlCaqrbNpVeY+vJBE2sTJIcbbHTRFY0h6hN
hznTle5TdYWdWMr0dSDKMKCzHHQEGJomTbUZcDUWgS+VJDbMt2Z3OaUm67+0Ae3o
iXqatAg8h/3KhMMnwQKwxTHd7TYu6arHoGvvWvWpycP6dMaeLkIvxJJ6resRFrDm
1moLtyfiI+lU/kXzMs1H9dFGCGMuDydwMkWBarzFpHF9fKxvxMgDqs00t9k8bC0F
J+gvp44mI2U80FbUgg0vDOSqLbFJci81JyaQU0oJ/Q114EL+k0fHFVhFdQUZPsZU
AFQl34PSGm70qJlHexiXN3vieGaNMtW+H+G+jNS9xMgVjqYOQOjPKY0lBA2mK++2
OelBQ45Vn0XMVGisV3xjdEpPYLD+ewkgPGlQqZLZRkKb6IYVEYOPO9owLQzEg/rj
RUnHZ1BXjbNc1ukuyu8p3jMXILT+zMh9jcvRbbgPAgMBAAGjggJXMIICUzAOBgNV
HQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAwGA1Ud
EwEB/wQCMAAwHQYDVR0OBBYEFHSa8L7SC3Z9g0F2Kd3gzkARk4DYMB8GA1UdIwQY
MBaAFBQusxe3WFbLrlAJQOYfr52LFMLGMFUGCCsGAQUFBwEBBEkwRzAhBggrBgEF
BQcwAYYVaHR0cDovL3IzLm8ubGVuY3Iub3JnMCIGCCsGAQUFBzAChhZodHRwOi8v
cjMuaS5sZW5jci5vcmcvMCcGA1UdEQQgMB6CDioudHNjYW5sb24uY29tggx0c2Nh
bmxvbi5jb20wTAYDVR0gBEUwQzAIBgZngQwBAgEwNwYLKwYBBAGC3xMBAQEwKDAm
BggrBgEFBQcCARYaaHR0cDovL2Nwcy5sZXRzZW5jcnlwdC5vcmcwggEEBgorBgEE
AdZ5AgQCBIH1BIHyAPAAdgBvU3asMfAxGdiZAKRRFf93FRwR2QLBACkGjbIImjfZ
EwAAAXeOqrxPAAAEAwBHMEUCID1zQ9/LxP+g2wm5181w8Jls3RLi0bMVricJxZx4
/RQXAiEA0OSqFQUy9NFWH37Nblt8Owa9v1FH/qUVAWXTahwwVJwAdgB9PvL4j/+I
VWgkwsDKnlKJeSvFDngJfy5ql2iZfiLw1wAAAXeOqrxIAAAEAwBHMEUCIQDxWJOQ
zvzP7yd/y/Y4bzyNKqM1tHhimdE0cKoKz1x+JgIgFfKXLHzUL4m68Wjv6V/5nkUv
fckhrutCmods0FYv9E0wDQYJKoZIhvcNAQELBQADggEBACdaB5M/EJXE+flDGy3p
XnlsnmAnBfPSoDryqtYT/dtXwzhKKh+U7i/ngM8uGqgv3vvVGG0ywMn0gtCJxgPF
IXs3FoGhV+CTA3gvkCn1FpRX0iGRJx9GFCAXwLE4bg+MIDuzNyInjHB9RyybaELd
Tentf/sF2DCsuK+dVCxWs5ncyRSmq5XllSOM2PFSZ7iBsLV9pzTd3p3h2k3t+WyW
eN1RK6PRNlLsNxHOitOU2Ao71LmFy2+pmEGj8QD4vUN6Fd0jqp5dUo/+sAoPiKKq
zrJZNFVviY5zkfQNhCpXjKCX2r3VYa+D209VvuIoB4hFtZOWfJk6MbvjwrSK6MW7
ab8=
-----END CERTIFICATE-----
 1 /*second certificate in the chain*/ s /*subject -- should amtch the previous certificates issuer*/:C = US, O = Let's Encrypt, CN = R3
   i/*issuer -- should match up to a trusted root certificate on the client's device*/:O = Digital Signature Trust Co., CN = DST Root CA X3
-----BEGIN CERTIFICATE-----
MIIEZTCCA02gAwIBAgIQQAF1BIMUpMghjISpDBbN3zANBgkqhkiG9w0BAQsFADA/
MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
DkRTVCBSb290IENBIFgzMB4XDTIwMTAwNzE5MjE0MFoXDTIxMDkyOTE5MjE0MFow
MjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxCzAJBgNVBAMT
AlIzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuwIVKMz2oJTTDxLs
jVWSw/iC8ZmmekKIp10mqrUrucVMsa+Oa/l1yKPXD0eUFFU1V4yeqKI5GfWCPEKp
Tm71O8Mu243AsFzzWTjn7c9p8FoLG77AlCQlh/o3cbMT5xys4Zvv2+Q7RVJFlqnB
U840yFLuta7tj95gcOKlVKu2bQ6XpUA0ayvTvGbrZjR8+muLj1cpmfgwF126cm/7
gcWt0oZYPRfH5wm78Sv3htzB2nFd1EbjzK0lwYi8YGd1ZrPxGPeiXOZT/zqItkel
/xMY6pgJdz+dU/nPAeX1pnAXFK9jpP+Zs5Od3FOnBv5IhR2haa4ldbsTzFID9e1R
oYvbFQIDAQABo4IBaDCCAWQwEgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8E
BAMCAYYwSwYIKwYBBQUHAQEEPzA9MDsGCCsGAQUFBzAChi9odHRwOi8vYXBwcy5p
ZGVudHJ1c3QuY29tL3Jvb3RzL2RzdHJvb3RjYXgzLnA3YzAfBgNVHSMEGDAWgBTE
p7Gkeyxx+tvhS5B1/8QVYIWJEDBUBgNVHSAETTBLMAgGBmeBDAECATA/BgsrBgEE
AYLfEwEBATAwMC4GCCsGAQUFBwIBFiJodHRwOi8vY3BzLnJvb3QteDEubGV0c2Vu
Y3J5cHQub3JnMDwGA1UdHwQ1MDMwMaAvoC2GK2h0dHA6Ly9jcmwuaWRlbnRydXN0
LmNvbS9EU1RST09UQ0FYM0NSTC5jcmwwHQYDVR0OBBYEFBQusxe3WFbLrlAJQOYf
r52LFMLGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjANBgkqhkiG9w0B
AQsFAAOCAQEA2UzgyfWEiDcx27sT4rP8i2tiEmxYt0l+PAK3qB8oYevO4C5z70kH
ejWEHx2taPDY/laBL21/WKZuNTYQHHPD5b1tXgHXbnL7KqC401dk5VvCadTQsvd8
S8MXjohyc9z9/G2948kLjmE6Flh9dDYrVYA9x2O+hEPGOaEOa1eePynBgPayvUfL
qjBstzLhWVQLGAkXXmNs+5ZnPBxzDJOLxhF2JIbeQAcH5H0tZrUlo5ZYyOqA7s9p
O5b85o3AM/OJ+CktFBQtfvBhcJVd9wvlwPsk+uyOy2HI7mNxKKgsBTt375teA2Tw
UdHkhVNcsAKX1H7GNNLOEADksd86wuoXvg==
-----END CERTIFICATE-----
---
Server certificate
subject=CN = ascallion.com

issuer=C = US, O = Let's Encrypt, CN = R3

---
No client certificate CA names sent
Peer signing digest: SHA256
Peer signature type: RSA-PSS
Server Temp Key: X25519, 253 bits
---
SSL handshake has read 3536 bytes and written 398 bytes
Verification error: unable to get local issuer certificate
---
New, TLSv1.3, Cipher is TLS_AES_256_GCM_SHA384
Server public key is 4096 bit
Secure Renegotiation IS NOT supported
Compression: NONE
Expansion: NONE
No ALPN negotiated
Early data was not sent
Verify return code: 20 (unable to get local issuer certificate)
---
---
Post-Handshake New Session Ticket arrived:
SSL-Session:
    Protocol  : TLSv1.3
    Cipher    : TLS_AES_256_GCM_SHA384
    Session-ID: F8F70A83FE8C5EF53957065EA29F5B51DE9197C0DE4F6C2E8C61B6E97492A473
    Session-ID-ctx:
    Resumption PSK: B4FAF6CAC78728153A86625B4C5153F2CB094A6229BB4D8A1B17EB979109FA943ACD504E2FFEDBB8DD7C0240390CD026
    PSK identity: None
    PSK identity hint: None
    SRP username: None
    TLS session ticket lifetime hint: 300 (seconds)
    TLS session ticket:
    0000 - 81 0c ab 65 eb e9 e7 74-fa 3f 69 c8 3f 0a f1 2d   ...e...t.?i.?..-
    0010 - 31 a9 2d eb dc 06 3e 93-98 4c 4b e5 4a 99 de cf   1.-...>..LK.J...
    0020 - b0 b6 2f 68 6d d0 82 7a-07 21 ca 10 d9 22 13 75   ../hm..z.!...".u
    0030 - af ba 4b 18 d6 5a 81 fc-b0 da 4c 7f 6a 22 3b ab   ..K..Z....L.j";.
    0040 - e1 58 97 64 cc b6 13 7e-63 a5 90 93 51 1b 02 fa   .X.d...~c...Q...
    0050 - d7 69 a1 36 33 15 00 de-9b 76 50 88 c9 a1 bc ca   .i.63....vP.....
    0060 - fe ae ac 63 c9 18 dc 49-9e 8e cc bb 74 db e6 31   ...c...I....t..1
    0070 - 34 6f 78 5c 37 04 b8 ba-c0 9d 85 ce 8c a8 2a 78   4ox\7.........*x
    0080 - 5a 4e e4 c4 8d 04 20 e8-da 7a c2 2f 16 da 6b 7b   ZN.... ..z./..k{
    0090 - 43 d6 b9 60 7a 5f 04 fe-40 20 d3 1f 53 3b 04 b8   C..`z_..@ ..S;..
    00a0 - a5 b2 30 cb a1 cd dd 21-b6 b2 24 4e 86 71 32 7e   ..0....!..$N.q2~
    00b0 - f9 05 bc 81 fa 0b 65 8d-39 25 dd 67 c5 aa 40 fd   ......e.9%.g..@.
    00c0 - ee a6 bc 4e 22 02 3a b4-d8 13 7c 26 e8 88 ab cc   ...N".:...|&....
    00d0 - b8 19 d4 fe 6e c7 26 6c-c7 04 13 d1 d4 58 76 58   ....n.&l.....XvX
    00e0 - 2d 5a 12 37 77 88 5c 2f-ef 7c e5 5e 3d 98 e5 da   -Z.7w.\/.|.^=...

    Start Time: 1616867776
    Timeout   : 7200 (sec)
    Verify return code: 20 (unable to get local issuer certificate)
    Extended master secret: no
    Max Early Data: 0
---
read R BLOCK
---
Post-Handshake New Session Ticket arrived:
SSL-Session:
    Protocol  : TLSv1.3
    Cipher    : TLS_AES_256_GCM_SHA384
    Session-ID: 4551684A5F3FB4F65AE2E538DD28741A73E1FA4B1EC67862C6CF6337C6D0ECB5
    Session-ID-ctx:
    Resumption PSK: AB8A8C34BC1C9265CD450F598F36E5FA97DCCE9F700719C0E28F1CDDA4632D3D5FEE793D39A6B74D914D8DF1C8079E4C
    PSK identity: None
    PSK identity hint: None
    SRP username: None
    TLS session ticket lifetime hint: 300 (seconds)
    TLS session ticket:
    0000 - 81 0c ab 65 eb e9 e7 74-fa 3f 69 c8 3f 0a f1 2d   ...e...t.?i.?..-
    0010 - 5f 7e a7 56 70 d6 45 ff-c8 ca e4 38 a6 91 2a 8e   _~.Vp.E....8..*.
    0020 - 21 cb 50 90 5b 82 62 51-cf 23 07 16 15 c7 8e 8a   !.P.[.bQ.#......
    0030 - 18 6d 13 22 d2 5d 24 fc-ed 21 4e ad 72 e4 95 68   .m.".]$..!N.r..h
    0040 - 86 89 32 e6 27 15 29 ba-98 77 ab d4 34 8e 56 52   ..2.'.)..w..4.VR
    0050 - c0 6a 6c d9 bb 9f 27 b4-be e4 32 5d 85 cb 6b 9c   .jl...'...2]..k.
    0060 - 9a f8 a4 f7 d1 20 a4 08-f9 10 1b 2e 8b c5 95 db   ..... ..........
    0070 - 34 5b 12 3f 6e c9 f5 ff-a9 d4 6b c5 ef 85 44 09   4[.?n.....k...D.
    0080 - 50 ce ca 80 20 3d b6 81-5e a6 6a a1 6f db e2 73   P... =..^.j.o..s
    0090 - 63 7b 86 f2 6c e2 ba e1-0e 9a f9 de 58 dd 0f 79   c{..l.......X..y
    00a0 - 9d f0 9a 6f ee 3d ec ea-91 a5 90 db fd 59 2d 5b   ...o.=.......Y-[
    00b0 - 7f 0c 72 f5 6a 8a 08 bb-4b 3e c1 06 d4 16 ad c8   ..r.j...K>......
    00c0 - dd 50 d6 90 9f 07 16 0b-1a db 6c df d3 cb 18 eb   .P........l.....
    00d0 - 3a 6b 14 31 c6 83 2f bc-92 d7 20 6a 0f 05 e9 d5   :k.1../... j....
    00e0 - 28 45 79 d2 de 04 aa 61-a3 6a 1d 59 51 13 01 33   (Ey....a.j.YQ..3

    Start Time: 1616867776
    Timeout   : 7200 (sec)
    Verify return code: 20 (unable to get local issuer certificate)
    Extended master secret: no
    Max Early Data: 0
---
read R BLOCK
closed
```

The relavant portion is under the "Certificate chain" block. Each certificate's issuer should match up to the next certificate's subject, all the way down to the root certificate that is stored on the client device (that one is not served from the server).  

## Pretty Printing a Certificate

The "-----BEGIN CERTIFICATE-----" and "-----END CERTIFICATE-----" delimiters are required

```powershell 
openssl x509 -text -noout
```
```
-----BEGIN CERTIFICATE-----
MIIEZTCCA02gAwIBAgIQQAF1BIMUpMghjISpDBbN3zANBgkqhkiG9w0BAQsFADA/
MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT
DkRTVCBSb290IENBIFgzMB4XDTIwMTAwNzE5MjE0MFoXDTIxMDkyOTE5MjE0MFow
MjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxCzAJBgNVBAMT
AlIzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuwIVKMz2oJTTDxLs
jVWSw/iC8ZmmekKIp10mqrUrucVMsa+Oa/l1yKPXD0eUFFU1V4yeqKI5GfWCPEKp
Tm71O8Mu243AsFzzWTjn7c9p8FoLG77AlCQlh/o3cbMT5xys4Zvv2+Q7RVJFlqnB
U840yFLuta7tj95gcOKlVKu2bQ6XpUA0ayvTvGbrZjR8+muLj1cpmfgwF126cm/7
gcWt0oZYPRfH5wm78Sv3htzB2nFd1EbjzK0lwYi8YGd1ZrPxGPeiXOZT/zqItkel
/xMY6pgJdz+dU/nPAeX1pnAXFK9jpP+Zs5Od3FOnBv5IhR2haa4ldbsTzFID9e1R
oYvbFQIDAQABo4IBaDCCAWQwEgYDVR0TAQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8E
BAMCAYYwSwYIKwYBBQUHAQEEPzA9MDsGCCsGAQUFBzAChi9odHRwOi8vYXBwcy5p
ZGVudHJ1c3QuY29tL3Jvb3RzL2RzdHJvb3RjYXgzLnA3YzAfBgNVHSMEGDAWgBTE
p7Gkeyxx+tvhS5B1/8QVYIWJEDBUBgNVHSAETTBLMAgGBmeBDAECATA/BgsrBgEE
AYLfEwEBATAwMC4GCCsGAQUFBwIBFiJodHRwOi8vY3BzLnJvb3QteDEubGV0c2Vu
Y3J5cHQub3JnMDwGA1UdHwQ1MDMwMaAvoC2GK2h0dHA6Ly9jcmwuaWRlbnRydXN0
LmNvbS9EU1RST09UQ0FYM0NSTC5jcmwwHQYDVR0OBBYEFBQusxe3WFbLrlAJQOYf
r52LFMLGMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjANBgkqhkiG9w0B
AQsFAAOCAQEA2UzgyfWEiDcx27sT4rP8i2tiEmxYt0l+PAK3qB8oYevO4C5z70kH
ejWEHx2taPDY/laBL21/WKZuNTYQHHPD5b1tXgHXbnL7KqC401dk5VvCadTQsvd8
S8MXjohyc9z9/G2948kLjmE6Flh9dDYrVYA9x2O+hEPGOaEOa1eePynBgPayvUfL
qjBstzLhWVQLGAkXXmNs+5ZnPBxzDJOLxhF2JIbeQAcH5H0tZrUlo5ZYyOqA7s9p
O5b85o3AM/OJ+CktFBQtfvBhcJVd9wvlwPsk+uyOy2HI7mNxKKgsBTt375teA2Tw
UdHkhVNcsAKX1H7GNNLOEADksd86wuoXvg==
-----END CERTIFICATE-----
```