import {Command, Flags} from '@oclif/core'

export default class NimbleInfrastructure extends Command {
  static description = 'Initialize the infrastructure template'

  static examples = [
    `$ oex hello friend --from oclif
    hello friend from oclif! (./src/commands/hello/index.ts)
    `,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Whom is saying hello', required: true}),
  }

  static args = [
    {name: 'person', description: 'Person to say hello to', required: true}
  ]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(NimbleInfrastructure)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
