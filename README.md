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
$ npm install -g additive
$ additive COMMAND
running command...
$ additive (--version)
additive/0.0.0 darwin-x64 node-v20.9.0
$ additive --help [COMMAND]
USAGE
  $ additive COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`additive hello PERSON`](#additive-hello-person)
* [`additive hello world`](#additive-hello-world)
* [`additive help [COMMANDS]`](#additive-help-commands)
* [`additive plugins`](#additive-plugins)
* [`additive plugins:install PLUGIN...`](#additive-pluginsinstall-plugin)
* [`additive plugins:inspect PLUGIN...`](#additive-pluginsinspect-plugin)
* [`additive plugins:install PLUGIN...`](#additive-pluginsinstall-plugin-1)
* [`additive plugins:link PLUGIN`](#additive-pluginslink-plugin)
* [`additive plugins:uninstall PLUGIN...`](#additive-pluginsuninstall-plugin)
* [`additive plugins reset`](#additive-plugins-reset)
* [`additive plugins:uninstall PLUGIN...`](#additive-pluginsuninstall-plugin-1)
* [`additive plugins:uninstall PLUGIN...`](#additive-pluginsuninstall-plugin-2)
* [`additive plugins update`](#additive-plugins-update)

## `additive hello PERSON`

Say hello

```
USAGE
  $ additive hello PERSON -f <value>

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

_See code: [src/commands/hello/index.ts](https://github.com/diegodafm/additive/blob/v0.0.0/src/commands/hello/index.ts)_

## `additive hello world`

Say hello world

```
USAGE
  $ additive hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ additive hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/diegodafm/additive/blob/v0.0.0/src/commands/hello/world.ts)_

## `additive help [COMMANDS]`

Display help for additive.

```
USAGE
  $ additive help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for additive.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_

## `additive plugins`

List installed plugins.

```
USAGE
  $ additive plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ additive plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/index.ts)_

## `additive plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ additive plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ additive plugins add

EXAMPLES
  $ additive plugins add myplugin 

  $ additive plugins add https://github.com/someuser/someplugin

  $ additive plugins add someuser/someplugin
```

## `additive plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ additive plugins inspect PLUGIN...

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
  $ additive plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/inspect.ts)_

## `additive plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ additive plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ additive plugins add

EXAMPLES
  $ additive plugins install myplugin 

  $ additive plugins install https://github.com/someuser/someplugin

  $ additive plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/install.ts)_

## `additive plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ additive plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ additive plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/link.ts)_

## `additive plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ additive plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ additive plugins unlink
  $ additive plugins remove

EXAMPLES
  $ additive plugins remove myplugin
```

## `additive plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ additive plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/reset.ts)_

## `additive plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ additive plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ additive plugins unlink
  $ additive plugins remove

EXAMPLES
  $ additive plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/uninstall.ts)_

## `additive plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ additive plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ additive plugins unlink
  $ additive plugins remove

EXAMPLES
  $ additive plugins unlink myplugin
```

## `additive plugins update`

Update installed plugins.

```
USAGE
  $ additive plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.10/src/commands/plugins/update.ts)_
<!-- commandsstop -->
