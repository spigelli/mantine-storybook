# Mantine Storybook ✨
<p align="center">
  <img src="https://user-images.githubusercontent.com/25208877/232680233-4ca67e7e-b939-4122-8ecd-e2d2ed960712.png" alt="image" width="400" style="margin-right:20px"/>
  <img src="https://user-images.githubusercontent.com/25208877/232680306-1b443b4b-0fec-4ff1-8517-43934f6f0f8b.png" alt="image" width="400" style="padding-bottom:20px"/>
</p>

This repository hosts the [Storybook](https://storybook.js.org/) for [Mantine](https://mantine.dev/), a modern React UI library.

You can find the storybook online [here](https://spigelli.github.io/mantine-storybook/)

## Embedding in your own storybook

To use this Storybook in your own project, you can use [storybook composition](https://storybook.js.org/docs/react/sharing/storybook-composition#compose-published-storybooks), referencing the github pages url

```ts
const config: StorybookConfig = {
  // Your Storybook configuration
  refs: {
    'mantine': {
      title: 'Mantine',
      url: 'https://spigelli.github.io/mantine-storybook/',
      expanded: false, // Optional, true by default
    },
  },
};

```

## Development

To get started Storybook locally, clone this repository and run the following commands:

```sh
# Install
pnpm i && git submodule init
# Build the static storybook
pnpm build-storybook
```

This will build the storybook to the `storybook-static` directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
