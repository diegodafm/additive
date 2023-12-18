import {Command, Flags} from '@oclif/core'

export default class Feature extends Command {

  static args = {}

  static description = 'command to generate the content for your app'

  static examples = [
    `<%= config.bin %> <%= command.id %>  -d 'create a new page!'`,
  ]

  static flags = {
    description: Flags.string({char: 'd', description: 'Who is saying Generate', required: true}),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(Feature)

    this.log('eh nois!!', flags.description)
  }
}
