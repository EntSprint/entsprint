$content = Get-Content index.html -Raw
$parts = $content -split '<script>'
$scriptPart = $parts[1]
$script = $scriptPart -split '</script>' | Select-Object -First 1
$script | Set-Content -Path temp_check.js -Encoding UTF8
node --check temp_check.js 2>&1
Remove-Item temp_check.js -ErrorAction SilentlyContinue