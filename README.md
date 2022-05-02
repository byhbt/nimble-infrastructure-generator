oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nimble-infrastructure
$ nimble-infrastructure COMMAND
running command...
$ nimble-infrastructure (--version)
nimble-infrastructure/0.0.0 darwin-x64 node-v14.15.4
$ nimble-infrastructure --help [COMMAND]
USAGE
  $ nimble-infrastructure COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nimble-infrastructure hello PERSON`](#nimble-infrastructure-hello-person)
* [`nimble-infrastructure hello world`](#nimble-infrastructure-hello-world)
* [`nimble-infrastructure help [COMMAND]`](#nimble-infrastructure-help-command)
* [`nimble-infrastructure plugins`](#nimble-infrastructure-plugins)
* [`nimble-infrastructure plugins:install PLUGIN...`](#nimble-infrastructure-pluginsinstall-plugin)
* [`nimble-infrastructure plugins:inspect PLUGIN...`](#nimble-infrastructure-pluginsinspect-plugin)
* [`nimble-infrastructure plugins:install PLUGIN...`](#nimble-infrastructure-pluginsinstall-plugin-1)
* [`nimble-infrastructure plugins:link PLUGIN`](#nimble-infrastructure-pluginslink-plugin)
* [`nimble-infrastructure plugins:uninstall PLUGIN...`](#nimble-infrastructure-pluginsuninstall-plugin)
* [`nimble-infrastructure plugins:uninstall PLUGIN...`](#nimble-infrastructure-pluginsuninstall-plugin-1)
* [`nimble-infrastructure plugins:uninstall PLUGIN...`](#nimble-infrastructure-pluginsuninstall-plugin-2)
* [`nimble-infrastructure plugins update`](#nimble-infrastructure-plugins-update)

## `nimble-infrastructure hello PERSON`

Say hello

```
USAGE
  $ nimble-infrastructure hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/byhbt/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `nimble-infrastructure hello world`

Say hello world

```
USAGE
  $ nimble-infrastructure hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `nimble-infrastructure help [COMMAND]`

Display help for nimble-infrastructure.

```
USAGE
  $ nimble-infrastructure help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for nimble-infrastructure.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `nimble-infrastructure plugins`

List installed plugins.

```
USAGE
  $ nimble-infrastructure plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ nimble-infrastructure plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `nimble-infrastructure plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ nimble-infrastructure plugins:install PLUGIN...

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
  $ nimble-infrastructure plugins add

EXAMPLES
  $ nimble-infrastructure plugins:install myplugin 

  $ nimble-infrastructure plugins:install https://github.com/someuser/someplugin

  $ nimble-infrastructure plugins:install someuser/someplugin
```

## `nimble-infrastructure plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ nimble-infrastructure plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ nimble-infrastructure plugins:inspect myplugin
```

## `nimble-infrastructure plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ nimble-infrastructure plugins:install PLUGIN...

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
  $ nimble-infrastructure plugins add

EXAMPLES
  $ nimble-infrastructure plugins:install myplugin 

  $ nimble-infrastructure plugins:install https://github.com/someuser/someplugin

  $ nimble-infrastructure plugins:install someuser/someplugin
```

## `nimble-infrastructure plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ nimble-infrastructure plugins:link PLUGIN

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
  $ nimble-infrastructure plugins:link myplugin
```

## `nimble-infrastructure plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ nimble-infrastructure plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nimble-infrastructure plugins unlink
  $ nimble-infrastructure plugins remove
```

## `nimble-infrastructure plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ nimble-infrastructure plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nimble-infrastructure plugins unlink
  $ nimble-infrastructure plugins remove
```

## `nimble-infrastructure plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ nimble-infrastructure plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ nimble-infrastructure plugins unlink
  $ nimble-infrastructure plugins remove
```

## `nimble-infrastructure plugins update`

Update installed plugins.

```
USAGE
  $ nimble-infrastructure plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
