import {Args, Command, Flags} from '@oclif/core'

export default class Generate extends Command {
  static args = {
    person: Args.string({description: 'Person to say Generate to', required: true}),
  }

  static description = 'Say Generate'

  static examples = [
    `$ oex Generate friend --from oclif
Generate friend from oclif! (./src/commands/Generate/index.ts)
`,
  ]

  static flags = {
    from: Flags.string({char: 'f', description: 'Who is saying Generate', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Generate)

    this.log(`Generate ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
