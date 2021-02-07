# Random Tailwind Gradient generator 🌈

![Cover](https://random-tailwind-gradient.vercel.app/cover.png)

## Running the project

- `yarn install` to install dependencies
- `yarn dev` to run it locally

## API

The endpoints are at `/api`.

- `/api/tw` - returns the tailwind classes. Example: `bg-gradient-to-br from-red-300 to-blue-300`
- `/api/css` - returns the CSS styles. Example:
  ```css
  .random-gradient {
    background-image: linear-gradient(to bottom right, #c4b5fd, #fcd34d);
  }
  ```

They accept following query parameters.

| Parameter | Default           | Description                                                               |
| --------- | ----------------- | ------------------------------------------------------------------------- |
| direction | `br`              | Direction of the gradient. Supports all Tailwind CSS gradient directions. |
| intensity | `300`             | Intensity of the colors. Values from `100` to `900` are supported.        |
| className | `random-gradient` | **Only for `/css`**. The name of the class containing the styles.         |

## Contributing

Please feel free to raise PRs and create issues for discussions and suggestions.
