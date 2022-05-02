import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Generate GCP Infrastructure template'

  static examples = []

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('Google Cloud Platform - coming soon...')
  }
}
