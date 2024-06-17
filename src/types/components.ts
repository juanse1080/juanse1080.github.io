export type HTMLElementKeys = keyof JSX.IntrinsicElements;

export type IntrinsicElementsProps<TComponent extends HTMLElementKeys> = {
  component?: TComponent;
} & JSX.IntrinsicElements[TComponent];
