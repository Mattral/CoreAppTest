## Styling Convention

The project uses [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/) for styling. CSS files are located inside the [styles](/app/styles) directory or co-located within a directory alongside the components.

## Classname Convention

All elements are styled using Bootstrap classes but sometimes custom classes are introduced to add more styling. In such case, the custom classes are added to the end of the class list and denoted by `global-*` or `local-*` class names.

The `global-*` class name indicates that the custom class name is present in a file from the `/app/styles` directory while `local-*` class name indicates that the class is present in the locally-scopped css file for such component.
