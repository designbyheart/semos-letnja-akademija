export class SpeakerBadgePage {
    constructor(element) {
        this.imageElement = element.querySelector("img");

        // TODO: Add event listeners for element "dragover" and "drop" events.
        //       handle with this.handleDragOver.bind(this) and this.handleDrop.bind(this)
    }

    handleDragOver(event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy'; // Makes the browser display a "copy" cursor.
    }

    handleDrop(event) {
        event.stopPropagation();
        event.preventDefault();

        // TODO: Get the files from the event
        // const files = ... ;

        if (files.length == 0) return;

        // TODO: Read the first file in the array
        //       Check the file type is an image
        //       Use this.readFile to read the file, then display the image
        //       (Note that this.readFile returns a Promise, so chain ((file)=> this.displayImage(file)) using the "then" method.)
                    
    }

    isImageType(type) {
        const imageTypes = ["image/jpeg", "image/jpg", "image/png"];
        return imageTypes.indexOf(type) >= 0;
    }

    readFile(file) {
        // Return a new promise.
        return new Promise(function (resolve, reject) {

            // TODO: Create a new FileReader
            // const reader = ... ;

            // TODO: Assign a callback function for reader.onload

            // TODO: In the callback use resolve([fileDataUrl]); to return the file data URL.

            // TODO: Start reading the file as a DataURL

        });
    }

    displayImage(imageUrl) {
        this.imageElement.src = imageUrl;
    }
}
// SIG // Begin signature block
// SIG // MIIdkAYJKoZIhvcNAQcCoIIdgTCCHX0CAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFPhrCYQwgwvx
// SIG // thVeuzGaqSCDl/wLoIIYbjCCBN4wggPGoAMCAQICEzMA
// SIG // AADraarMPimfLTkAAAAAAOswDQYJKoZIhvcNAQEFBQAw
// SIG // dzELMAkGA1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0
// SIG // b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1p
// SIG // Y3Jvc29mdCBDb3Jwb3JhdGlvbjEhMB8GA1UEAxMYTWlj
// SIG // cm9zb2Z0IFRpbWUtU3RhbXAgUENBMB4XDTE4MDgyMzIw
// SIG // MTkzMFoXDTE5MTEyMzIwMTkzMFowgc4xCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xKTAnBgNVBAsTIE1pY3Jvc29mdCBPcGVy
// SIG // YXRpb25zIFB1ZXJ0byBSaWNvMSYwJAYDVQQLEx1UaGFs
// SIG // ZXMgVFNTIEVTTjpCOEVDLTMwQTQtNzE0NDElMCMGA1UE
// SIG // AxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZTCC
// SIG // ASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALVI
// SIG // FTEwkU+DiTtDKbsL8flzuUJj94dKygCn3ixofBGlpi66
// SIG // Z3ESA+15sqLGS62kgx6M/4WrjL5ZwiRRPojE70w5Eooq
// SIG // DWXACgSuyQyKtLz8wOefb9lLp8AR2lPjbnkup2EwceeJ
// SIG // +iOEKYhPP8K93TM+HtdHgQF3fIeDmeGSv2JiX0sSVBjE
// SIG // p+9Ms5krioUO7SKlJplEiLdmd77v80YWyovAIp3ePgEk
// SIG // RaWDLhPtYQ+IyKcCdQlI2WYSNFLA0Wu5s+gjtkcAlFz0
// SIG // Y4F1703679s7/hfIw203xF7PEWTy8N3iBaNOoKlH2Iad
// SIG // VH8Pv+znrHOazODpEWNUxtow/53uT6kCAwEAAaOCAQkw
// SIG // ggEFMB0GA1UdDgQWBBQFt9Cmj3wDmdR8Il2SPLrWdyem
// SIG // pjAfBgNVHSMEGDAWgBQjNPjZUkZwCu1A+3b7syuwwzWz
// SIG // DzBUBgNVHR8ETTBLMEmgR6BFhkNodHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9NaWNy
// SIG // b3NvZnRUaW1lU3RhbXBQQ0EuY3JsMFgGCCsGAQUFBwEB
// SIG // BEwwSjBIBggrBgEFBQcwAoY8aHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tL3BraS9jZXJ0cy9NaWNyb3NvZnRUaW1l
// SIG // U3RhbXBQQ0EuY3J0MBMGA1UdJQQMMAoGCCsGAQUFBwMI
// SIG // MA0GCSqGSIb3DQEBBQUAA4IBAQB74NZgQkr46sJ1qUWR
// SIG // dLPOP3bjAAaxgLq9iUm3AjFXmNRs/cX7bm8LSJMWlEqr
// SIG // clJBjiVXYMJVDGQE+P7qdm0U/PerlSnBBzcHkhS6j8X3
// SIG // iRYLFM0Ps/X7R+EvfiF/le6NBweFaAfdkPUHXeeh6kSR
// SIG // Wi827KaVyaUl223bawY436IWEq5M5XHnVkOrADY7MJWG
// SIG // 2eHFsRgxAd2nfGE8y5z2bXMGOEeJ+PVDp1GrxvzQdLSU
// SIG // VGzDjuH8lADAa+EdtLWLnYL6F0SvAVVRH2D+pkGtUBuj
// SIG // Id6JbiW94ye6WKQ3zDEV4d0vWOqaH7uu7aHcWy+2n59V
// SIG // YtdXev24zekDB0p2MIIF/zCCA+egAwIBAgITMwAAAQNe
// SIG // JRyZH6MeuAAAAAABAzANBgkqhkiG9w0BAQsFADB+MQsw
// SIG // CQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQ
// SIG // MA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9z
// SIG // b2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNyb3Nv
// SIG // ZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExMB4XDTE4MDcx
// SIG // MjIwMDg0OFoXDTE5MDcyNjIwMDg0OFowdDELMAkGA1UE
// SIG // BhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNV
// SIG // BAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBD
// SIG // b3Jwb3JhdGlvbjEeMBwGA1UEAxMVTWljcm9zb2Z0IENv
// SIG // cnBvcmF0aW9uMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// SIG // MIIBCgKCAQEA0ZR2NuaGqzb+aflGfIuIUMuQcH+wVakk
// SIG // HX455wWfD6x7l7LOcwr71JskXBa1Od0bfjNsEfw7JvOY
// SIG // ql1Ta6rD7BO40u/PV3/MZcuvTS4ysVYrTjQHif5pIb0+
// SIG // RPveEp2Fv3x2hn1ysXabYeaKZExGzrbVOox3k3dnIZy2
// SIG // WgZeR4b1PNEJyg09zbLpoVB40YSI4gE8IvyvlgjMXZnA
// SIG // 7eulWpiS9chATmpzr97jdHrTX0aXvOJnKHeZrMEOMRaP
// SIG // AA8B/kteVA/KxGU/CuOjRtv2LAM6Gb5oBRac5n80v6eH
// SIG // jWU5Jslj1O/F3b0l/v0o9DSGeawq1V8wkTvkFGrrscoE
// SIG // IwIDAQABo4IBfjCCAXowHwYDVR0lBBgwFgYKKwYBBAGC
// SIG // N0wIAQYIKwYBBQUHAwMwHQYDVR0OBBYEFEe+wMvhpj/9
// SIG // ZdY48gNdt69390D/MFAGA1UdEQRJMEekRTBDMSkwJwYD
// SIG // VQQLEyBNaWNyb3NvZnQgT3BlcmF0aW9ucyBQdWVydG8g
// SIG // UmljbzEWMBQGA1UEBRMNMjMwMDEyKzQzNzk2NTAfBgNV
// SIG // HSMEGDAWgBRIbmTlUAXTgqoXNzcitW2oynUClTBUBgNV
// SIG // HR8ETTBLMEmgR6BFhkNodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpb3BzL2NybC9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3JsMGEGCCsGAQUFBwEBBFUwUzBR
// SIG // BggrBgEFBQcwAoZFaHR0cDovL3d3dy5taWNyb3NvZnQu
// SIG // Y29tL3BraW9wcy9jZXJ0cy9NaWNDb2RTaWdQQ0EyMDEx
// SIG // XzIwMTEtMDctMDguY3J0MAwGA1UdEwEB/wQCMAAwDQYJ
// SIG // KoZIhvcNAQELBQADggIBAJ/1yVMNPw0m7KJE2A3Rn2OW
// SIG // Bks/HlzFM6Okw2yvH8ABuutl7J4zEA+nrFvUvZBhF+cx
// SIG // 58MmtKz1J9NIk4aI/hI1kWQi0WstO6gsFZQp0jeW5jX/
// SIG // DM7IBhYWniSx4jn5bg542AwbtilgJ3Y0JJvduZd1ywE7
// SIG // rYISFiKAiRWEu5hQILAXJoZJr859RRVDNJbPgVwYLNST
// SIG // 8mer4nPIPaPN/DIeYBzpsBsw+yy7By6WhJNFKFRczZb9
// SIG // oNuB2LYwykOx80jAskYcXV52Klif1O7y9PpITLVhi7CM
// SIG // QemquJ2Q9P9qQg+5PukO7JT8jYC7eOMjp3hbsm0f+VnB
// SIG // fbbROcl54IMcYAraPbDR7Ta/RQfpGzZu5T07BQOn1Kcl
// SIG // Eo/mdqMTs0VaQzGC2tiErrmwH3X19h19URE3J+i1NYRx
// SIG // 91eqrvqJccmY0p5aZHa+jMN9FWqR8RT08tk1Mbjbcvq0
// SIG // dciIm2q/mEXHZrLX/86SkHXk6+aG0sgb2yfAW5VvSW9Y
// SIG // XWkq3lNL+OjKe/ZsFfkDGQ8RhapPmr+qV91gxvVxIPRR
// SIG // qJrK6dHrNEc9dfoi7FU/ahk5axDpWj+O9CN4MLLypjjL
// SIG // NY2qmFkkQLg6Z6QHX6D+2DtJE/sM4e0LbYNQzvB/PuDZ
// SIG // COiMIUpBwt7rjlvuA8Mdbm7mVDVmZ3J8GupS9iLEcj+u
// SIG // MIIGBzCCA++gAwIBAgIKYRZoNAAAAAAAHDANBgkqhkiG
// SIG // 9w0BAQUFADBfMRMwEQYKCZImiZPyLGQBGRYDY29tMRkw
// SIG // FwYKCZImiZPyLGQBGRYJbWljcm9zb2Z0MS0wKwYDVQQD
// SIG // EyRNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkwHhcNMDcwNDAzMTI1MzA5WhcNMjEwNDAzMTMw
// SIG // MzA5WjB3MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSEwHwYDVQQD
// SIG // ExhNaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCfoWyx39tI
// SIG // kip8ay4Z4b3i48WZUSNQrc7dGE4kD+7Rp9FMrXQwIBHr
// SIG // B9VUlRVJlBtCkq6YXDAm2gBr6Hu97IkHD/cOBJjwicwf
// SIG // yzMkh53y9GccLPx754gd6udOo6HBI1PKjfpFzwnQXq/Q
// SIG // sEIEovmmbJNn1yjcRlOwhtDlKEYuJ6yGT1VSDOQDLPtq
// SIG // kJAwbofzWTCd+n7Wl7PoIZd++NIT8wi3U21StEWQn0gA
// SIG // SkdmEScpZqiX5NMGgUqi+YSnEUcUCYKfhO1VeP4Bmh1Q
// SIG // CIUAEDBG7bfeI0a7xC1Un68eeEExd8yb3zuDk6FhArUd
// SIG // DbH895uyAc4iS1T/+QXDwiALAgMBAAGjggGrMIIBpzAP
// SIG // BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQjNPjZUkZw
// SIG // Cu1A+3b7syuwwzWzDzALBgNVHQ8EBAMCAYYwEAYJKwYB
// SIG // BAGCNxUBBAMCAQAwgZgGA1UdIwSBkDCBjYAUDqyCYEBW
// SIG // J5flJRP8KuEKU5VZ5KShY6RhMF8xEzARBgoJkiaJk/Is
// SIG // ZAEZFgNjb20xGTAXBgoJkiaJk/IsZAEZFgltaWNyb3Nv
// SIG // ZnQxLTArBgNVBAMTJE1pY3Jvc29mdCBSb290IENlcnRp
// SIG // ZmljYXRlIEF1dGhvcml0eYIQea0WoUqgpa1Mc1j0BxMu
// SIG // ZTBQBgNVHR8ESTBHMEWgQ6BBhj9odHRwOi8vY3JsLm1p
// SIG // Y3Jvc29mdC5jb20vcGtpL2NybC9wcm9kdWN0cy9taWNy
// SIG // b3NvZnRyb290Y2VydC5jcmwwVAYIKwYBBQUHAQEESDBG
// SIG // MEQGCCsGAQUFBzAChjhodHRwOi8vd3d3Lm1pY3Jvc29m
// SIG // dC5jb20vcGtpL2NlcnRzL01pY3Jvc29mdFJvb3RDZXJ0
// SIG // LmNydDATBgNVHSUEDDAKBggrBgEFBQcDCDANBgkqhkiG
// SIG // 9w0BAQUFAAOCAgEAEJeKw1wDRDbd6bStd9vOeVFNAbEu
// SIG // dHFbbQwTq86+e4+4LtQSooxtYrhXAstOIBNQmd16QOJX
// SIG // u69YmhzhHQGGrLt48ovQ7DsB7uK+jwoFyI1I4vBTFd1P
// SIG // q5Lk541q1YDB5pTyBi+FA+mRKiQicPv2/OR4mS4N9wfi
// SIG // cLwYTp2OawpylbihOZxnLcVRDupiXD8WmIsgP+IHGjL5
// SIG // zDFKdjE9K3ILyOpwPf+FChPfwgphjvDXuBfrTot/xTUr
// SIG // XqO/67x9C0J71FNyIe4wyrt4ZVxbARcKFA7S2hSY9Ty5
// SIG // ZlizLS/n+YWGzFFW6J1wlGysOUzU9nm/qhh6Yinvopsp
// SIG // NAZ3GmLJPR5tH4LwC8csu89Ds+X57H2146SodDW4TsVx
// SIG // IxImdgs8UoxxWkZDFLyzs7BNZ8ifQv+AeSGAnhUwZuhC
// SIG // El4ayJ4iIdBD6Svpu/RIzCzU2DKATCYqSCRfWupW76be
// SIG // mZ3KOm+9gSd0BhHudiG/m4LBJ1S2sWo9iaF2YbRuoROm
// SIG // v6pH8BJv/YoybLL+31HIjCPJZr2dHYcSZAI9La9Zj7jk
// SIG // IeW1sMpjtHhUBdRBLlCslLCleKuzoJZ1GtmShxN1Ii8y
// SIG // qAhuoFuMJb+g74TKIdbrHk/Jmu5J4PcBZW+JC33Iacjm
// SIG // buqnl84xKf8OxVtc2E0bodj6L54/LlUWa8kTo/0wggd6
// SIG // MIIFYqADAgECAgphDpDSAAAAAAADMA0GCSqGSIb3DQEB
// SIG // CwUAMIGIMQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2Fz
// SIG // aGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UE
// SIG // ChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMTIwMAYDVQQD
// SIG // EylNaWNyb3NvZnQgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRo
// SIG // b3JpdHkgMjAxMTAeFw0xMTA3MDgyMDU5MDlaFw0yNjA3
// SIG // MDgyMTA5MDlaMH4xCzAJBgNVBAYTAlVTMRMwEQYDVQQI
// SIG // EwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25kMR4w
// SIG // HAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24xKDAm
// SIG // BgNVBAMTH01pY3Jvc29mdCBDb2RlIFNpZ25pbmcgUENB
// SIG // IDIwMTEwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIK
// SIG // AoICAQCr8PpyEBwurdhuqoIQTTS68rZYIZ9CGypr6VpQ
// SIG // qrgGOBoESbp/wwwe3TdrxhLYC/A4wpkGsMg51QEUMULT
// SIG // iQ15ZId+lGAkbK+eSZzpaF7S35tTsgosw6/ZqSuuegmv
// SIG // 15ZZymAaBelmdugyUiYSL+erCFDPs0S3XdjELgN1q2jz
// SIG // y23zOlyhFvRGuuA4ZKxuZDV4pqBjDy3TQJP4494HDdVc
// SIG // eaVJKecNvqATd76UPe/74ytaEB9NViiienLgEjq3SV7Y
// SIG // 7e1DkYPZe7J7hhvZPrGMXeiJT4Qa8qEvWeSQOy2uM1jF
// SIG // tz7+MtOzAz2xsq+SOH7SnYAs9U5WkSE1JcM5bmR/U7qc
// SIG // D60ZI4TL9LoDho33X/DQUr+MlIe8wCF0JV8YKLbMJyg4
// SIG // JZg5SjbPfLGSrhwjp6lm7GEfauEoSZ1fiOIlXdMhSz5S
// SIG // xLVXPyQD8NF6Wy/VI+NwXQ9RRnez+ADhvKwCgl/bwBWz
// SIG // vRvUVUvnOaEP6SNJvBi4RHxF5MHDcnrgcuck379GmcXv
// SIG // whxX24ON7E1JMKerjt/sW5+v/N2wZuLBl4F77dbtS+dJ
// SIG // KacTKKanfWeA5opieF+yL4TXV5xcv3coKPHtbcMojyyP
// SIG // QDdPweGFRInECUzF1KVDL3SV9274eCBYLBNdYJWaPk8z
// SIG // hNqwiBfenk70lrC8RqBsmNLg1oiMCwIDAQABo4IB7TCC
// SIG // AekwEAYJKwYBBAGCNxUBBAMCAQAwHQYDVR0OBBYEFEhu
// SIG // ZOVQBdOCqhc3NyK1bajKdQKVMBkGCSsGAQQBgjcUAgQM
// SIG // HgoAUwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMB
// SIG // Af8EBTADAQH/MB8GA1UdIwQYMBaAFHItOgIxkEO5FAVO
// SIG // 4eqnxzHRI4k0MFoGA1UdHwRTMFEwT6BNoEuGSWh0dHA6
// SIG // Ly9jcmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1
// SIG // Y3RzL01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5j
// SIG // cmwwXgYIKwYBBQUHAQEEUjBQME4GCCsGAQUFBzAChkJo
// SIG // dHRwOi8vd3d3Lm1pY3Jvc29mdC5jb20vcGtpL2NlcnRz
// SIG // L01pY1Jvb0NlckF1dDIwMTFfMjAxMV8wM18yMi5jcnQw
// SIG // gZ8GA1UdIASBlzCBlDCBkQYJKwYBBAGCNy4DMIGDMD8G
// SIG // CCsGAQUFBwIBFjNodHRwOi8vd3d3Lm1pY3Jvc29mdC5j
// SIG // b20vcGtpb3BzL2RvY3MvcHJpbWFyeWNwcy5odG0wQAYI
// SIG // KwYBBQUHAgIwNB4yIB0ATABlAGcAYQBsAF8AcABvAGwA
// SIG // aQBjAHkAXwBzAHQAYQB0AGUAbQBlAG4AdAAuIB0wDQYJ
// SIG // KoZIhvcNAQELBQADggIBAGfyhqWY4FR5Gi7T2HRnIpsL
// SIG // lhHhY5KZQpZ90nkMkMFlXy4sPvjDctFtg/6+P+gKyju/
// SIG // R6mj82nbY78iNaWXXWWEkH2LRlBV2AySfNIaSxzzPEKL
// SIG // UtCw/WvjPgcuKZvmPRul1LUdd5Q54ulkyUQ9eHoj8xN9
// SIG // ppB0g430yyYCRirCihC7pKkFDJvtaPpoLpWgKj8qa1hJ
// SIG // Yx8JaW5amJbkg/TAj/NGK978O9C9Ne9uJa7lryft0N3z
// SIG // Dq+ZKJeYTQ49C/IIidYfwzIY4vDFLc5bnrRJOQrGCsLG
// SIG // ra7lstnbFYhRRVg4MnEnGn+x9Cf43iw6IGmYslmJaG5v
// SIG // p7d0w0AFBqYBKig+gj8TTWYLwLNN9eGPfxxvFX1Fp3bl
// SIG // QCplo8NdUmKGwx1jNpeG39rz+PIWoZon4c2ll9DuXWNB
// SIG // 41sHnIc+BncG0QaxdR8UvmFhtfDcxhsEvt9Bxw4o7t5l
// SIG // L+yX9qFcltgA1qFGvVnzl6UJS0gQmYAf0AApxbGbpT9F
// SIG // dx41xtKiop96eiL6SJUfq/tHI4D1nvi/a7dLl+LrdXga
// SIG // 7Oo3mXkYS//WsyNodeav+vyL6wuA6mk7r/ww7QRMjt/f
// SIG // dW1jkT3RnVZOT7+AVyKheBEyIXrvQQqxP/uozKRdwaGI
// SIG // m1dxVk5IRcBCyZt2WwqASGv9eZ/BvW1taslScxMNelDN
// SIG // MYIEjjCCBIoCAQEwgZUwfjELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEoMCYGA1UEAxMfTWljcm9zb2Z0IENvZGUgU2lnbmlu
// SIG // ZyBQQ0EgMjAxMQITMwAAAQNeJRyZH6MeuAAAAAABAzAJ
// SIG // BgUrDgMCGgUAoIGiMBkGCSqGSIb3DQEJAzEMBgorBgEE
// SIG // AYI3AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3
// SIG // AgEVMCMGCSqGSIb3DQEJBDEWBBTmimT/vGGCrI4pX8Kc
// SIG // Fp1CGaC8wjBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBp
// SIG // AGMAcgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAMwQDRrW
// SIG // iXhcFTWUjq+urE4mQ5ACEnfT9arGTkTw0O2H0742TjJs
// SIG // nznvW23EZGFmb59FIHZPwtfTI586KoWoXJJdIRE5jeTz
// SIG // WQbgmYhA4uAw9jGKd+PcwJNdLjx+w9FBwBZIhKA90Hop
// SIG // /R0SbHQPNpCTDwEsZ+4c6NSKw3b9RipAIgJUTGcnVuLU
// SIG // vvOjm1cjuTm0Nt2Ccqdun8osckvsPG/KqtP9ts5HiV0e
// SIG // 8660MAb8qg0skek240PfXU/JuTP7Nwj7TfNz1GvWQIfv
// SIG // kSGLsgqbmpZRpr4Nn8PVMR8rMliiYJJwucKKYFkbTLYT
// SIG // Lyp3xUfoUkl9QoPAWyOAmB36fnahggIoMIICJAYJKoZI
// SIG // hvcNAQkGMYICFTCCAhECAQEwgY4wdzELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEhMB8GA1UEAxMYTWljcm9zb2Z0IFRpbWUt
// SIG // U3RhbXAgUENBAhMzAAAA62mqzD4pny05AAAAAADrMAkG
// SIG // BSsOAwIaBQCgXTAYBgkqhkiG9w0BCQMxCwYJKoZIhvcN
// SIG // AQcBMBwGCSqGSIb3DQEJBTEPFw0xODEwMTYwMzEzMjla
// SIG // MCMGCSqGSIb3DQEJBDEWBBSWOcXSihiXxIactz+MiB1G
// SIG // yIZ9oTANBgkqhkiG9w0BAQUFAASCAQAmEAZ9PNXzpt5t
// SIG // nrLDt+UwKZpA5yD8o3EGz5CmHZIIpmGZi8z6QV4ArUgA
// SIG // WAkAM+jFAkOwiyBFKhjsL4o/j172ewfzzw7vWvRoatpe
// SIG // fIl2G82eUOYI412ARamt8/sapUBR3U/xzOJjzftCo7WB
// SIG // nRR7sDdL5pk8fmD2pTGGO7/2Kr7zoE+7gGP+zS4EKa4a
// SIG // mMM4LmmN0o3G7LGUDNCTb31qhwg2hxCt+v/DO0uxJazP
// SIG // juvNhxhwduxn7GDsbPTIWewMqHf/vyJx6SU7t7CWwp6p
// SIG // ncy16AWYp0RU+KQra9Xyun3fwbhOOUa5u+TUyc+M9p9N
// SIG // OudeHZk+jrxQyhGas8ZH
// SIG // End signature block
