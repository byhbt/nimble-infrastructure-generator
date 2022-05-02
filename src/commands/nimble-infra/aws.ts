import {Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import {generateTemplateFiles} from 'generate-template-files'

export default class Aws extends Command {
  static description = 'Generate AWS Infrastructure template'

  static examples = []

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const questions = [
      {
        type: 'list',
        name: 'infrastructureType',
        message: 'What kind of infrastructure you need?',
        choices: [
          {
            key: 'basic',
            value: 'basic',
            name: 'Basic infrastructure (VPC + RDS + LOG + ECS)',
          },
          {
            key: 'advance',
            value: 'advance',
            name: 'Complete infrastructure (VPC + RDS + LOG + S3 + FARGATE + LOG + Security groups + ALB)',
          },
        ],
      },
    ]

    const prompt : any = await inquirer.prompt(questions)

    console.log(prompt)

    generateTemplateFiles([
      {
        option: 'Create Redux Store',
        defaultCase: '(pascalCase)',
        entry: {
          folderPath: './../../templates/aws/',
        },
        stringReplacers: ['__store__', { question: 'Insert model name', slot: '__model__' }],
        output: {
          path: './src/stores/__store__(lowerCase)',
          pathAndFileNameDefaultCase: '(kebabCase)',
          overwrite: true,
        },
      },
    ])
  }
}
