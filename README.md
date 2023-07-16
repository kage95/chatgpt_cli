oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gpt
$ gpt COMMAND
running command...
$ gpt (--version)
gpt/0.0.0 darwin-arm64 node-v18.12.1
$ gpt --help [COMMAND]
USAGE
  $ gpt COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gpt hello PERSON`](#gpt-hello-person)
* [`gpt hello world`](#gpt-hello-world)
* [`gpt help [COMMANDS]`](#gpt-help-commands)
* [`gpt plugins`](#gpt-plugins)
* [`gpt plugins:install PLUGIN...`](#gpt-pluginsinstall-plugin)
* [`gpt plugins:inspect PLUGIN...`](#gpt-pluginsinspect-plugin)
* [`gpt plugins:install PLUGIN...`](#gpt-pluginsinstall-plugin-1)
* [`gpt plugins:link PLUGIN`](#gpt-pluginslink-plugin)
* [`gpt plugins:uninstall PLUGIN...`](#gpt-pluginsuninstall-plugin)
* [`gpt plugins:uninstall PLUGIN...`](#gpt-pluginsuninstall-plugin-1)
* [`gpt plugins:uninstall PLUGIN...`](#gpt-pluginsuninstall-plugin-2)
* [`gpt plugins update`](#gpt-plugins-update)

## `gpt hello PERSON`

Say hello

```
USAGE
  $ gpt hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kage/gpt_cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `gpt hello world`

Say hello world

```
USAGE
  $ gpt hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ gpt hello world
  hello world! (./src/commands/hello/world.ts)
```

## `gpt help [COMMANDS]`

Display help for gpt.

```
USAGE
  $ gpt help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gpt.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.12/src/commands/help.ts)_

## `gpt plugins`

List installed plugins.

```
USAGE
  $ gpt plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ gpt plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `gpt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gpt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ gpt plugins add

EXAMPLES
  $ gpt plugins:install myplugin 

  $ gpt plugins:install https://github.com/someuser/someplugin

  $ gpt plugins:install someuser/someplugin
```

## `gpt plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ gpt plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ gpt plugins:inspect myplugin
```

## `gpt plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gpt plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ gpt plugins add

EXAMPLES
  $ gpt plugins:install myplugin 

  $ gpt plugins:install https://github.com/someuser/someplugin

  $ gpt plugins:install someuser/someplugin
```

## `gpt plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ gpt plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ gpt plugins:link myplugin
```

## `gpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gpt plugins unlink
  $ gpt plugins remove
```

## `gpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gpt plugins unlink
  $ gpt plugins remove
```

## `gpt plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gpt plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gpt plugins unlink
  $ gpt plugins remove
```

## `gpt plugins update`

Update installed plugins.

```
USAGE
  $ gpt plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
