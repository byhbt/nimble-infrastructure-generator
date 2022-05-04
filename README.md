Nimble Infrastructure Generator
=================
# Commands

* `nimble-infra aws`

## The ouput

```sh-session
➜  nimble-infrastructure git:(main) ./bin/dev nimble-infra aws

? What's your organization name nimble

? What kind of infrastructure you need? (Use arrow keys)
❯ Basic infrastructure (VPC + RDS + LOG + ECS)
  Complete infrastructure (VPC + RDS + LOG + S3 + FARGATE + LOG + Security groups + ALB)

Files saved to: './template-output/nimble'
```

# Development

For the development, you can use below command for checking the output.

```bash
./bin/dev
```

Buid the command to `dist`:

```bash
npm run build
```

Run command in `dist` directory:

```bash
./bin/run
```

# Symlink command

Then you can execute it as others command:

```bash
npm run build
yarn link

nimble-infra
```
