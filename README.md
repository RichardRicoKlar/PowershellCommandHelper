# Powershell Command Helper
Powershell Command Helper is simple web UI tool with intention of generating commands for anyone who's new to Powershell or isn't much familiar its syntaxes.

## How to use the tool
- Load the UI -> [https://richardricoklar.github.io/PowershellCommandHelper/](PowershellCommandHelper)
- Select the permissions you'll need syntax for
- Fill in the form
- Select "Generate Command"

## How it works
My goal was easy maintanence. UI is heavily JavaScript based with purpose of translating JSON files which can be found in _commands_ folder.
There's index JSON, which serves as a list of available permissions types. Each type then matches with existing JSON file which lists available commands of the selected type.
Rest is just eye candy and design conveniences.

## Conclusions
I believe there's more option of how to create this, for example Lua would be my pick of interest. However, I believe I've achieved my goal of lightweight, simple, easily maintainable web UI with clear intention and functionality.
JavaScript methods could have been all added into just one script but where's clarity in that, right?
Not much else to add, I hope it will help to a few :)
 
## What to do if I find a problem?
Tricky question. Feel free to raise an issue, maybe I'll get to it.
