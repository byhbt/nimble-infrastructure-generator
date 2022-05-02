import {Command} from '@oclif/core'
import * as inquirer from 'inquirer'
import {generateTemplateFilesBatch, CaseConverterEnum, IConfigItem} from 'generate-template-files'

export default class Aws extends Command {
  static description = 'Generate AWS Infrastructure template'

  static examples = []

  static flags = {}

  static args = []

  public async run(): Promise<void> {
    const questions = [
      {
        type: 'input',
        name: 'organization',
        message: "What's your organization name",
        validate: (answer:any) => {
          if (!answer) {
            return 'Please input the organization name'
          }

          return true
        },
      },
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

    const items: IConfigItem[] = [
      {
        option: 'Basic infrastructure (VPC + RDS + LOG + ECS)',
        defaultCase: CaseConverterEnum.CamelCase,
        entry: {
          folderPath: './src/templates/aws/',
        },
        dynamicReplacers: [
          {slot: '__organization_name__', slotValue: prompt.organization},
          {slot: '__terraform_workspace_name__', slotValue: prompt.organization},
        ],
        output: {
          path: './template-output/__organization_name__(lowerCase)',
          pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
          overwrite: true,
        },
      },
    ]

    generateTemplateFilesBatch(items)
  }
}
