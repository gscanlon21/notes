# Build the submodule's search indexes.
Set-Location "content\submodule"; 
Get-ChildItem -Directory | ForEach-Object { 
	Set-Location $_.FullName; zola build; 
}; 

Set-Location "$PSScriptRoot\..";
foreach ($lang in @("en", "no")) {
    Get-ChildItem -Path . -Recurse -Filter "search_index.$lang.js" | ForEach-Object {
		while ((Get-Content $_.FullName -Raw) -match "\\n\\n") {
			$content = Get-Content $_.FullName -Raw
			$updated = $content -replace "\\n\\n", "\n"

			Set-Content -Path $_.FullName -Value $updated
		}
	}
}
