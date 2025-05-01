import {
  Children,
  Fragment,
  MouseEventHandler,
  ReactNode,
  cloneElement,
} from "react";
import { HTMLElementKeys, IntrinsicElementsProps } from "types";
import { merge } from "utils/clsx";
import { ButtonProps } from "components/atoms";

export type ItemType = ReactNode;

export type ButtonGroupProps<
  Element extends HTMLElementKeys,
  Value extends string
> = {
  children: ItemType[];
  buttonProps?: ButtonProps<Element>;
  value?: Value;
  onChange?: (value: Value) => void;
} & Omit<IntrinsicElementsProps<Element>, "children" | "onChange"> &
  Pick<ButtonProps<Element>, "size">;

const ButtonGroup = <
  Element extends HTMLElementKeys = "div",
  Value extends string = string
>({
  component: Component = "div",
  children,
  className,
  value: valueProp,
  onChange: onChangeProp,
  buttonProps = {},
  size = "medium",
  ...props
}: Readonly<ButtonGroupProps<Element, Value>>) => {
  const cant = children?.length ?? 0;

  const items = Children.map(children, (child, idx) => {
    const currentChildren = child as any;
    const isLastItem = idx + 1 === cant;

    const onChange: MouseEventHandler<HTMLButtonElement> = (e) => {
      const value = e.currentTarget.getAttribute("value") as Value;

      if (onChangeProp && value) onChangeProp(value);
      if (currentChildren.props?.onClick) currentChildren.props.onClick(e);
    };

    const newChildProps: any = {
      variant: "text",
      size,
      className: merge(
        currentChildren.props?.className,
        {
          "px-3 py-1": idx === 0 || isLastItem,
          "rounded-r-none": idx === 0,
          "rounded-l-none": isLastItem,
          "bg-active": valueProp === currentChildren.props.value,
        },
        buttonProps.className
      ),
      onClick: onChange,
      ...buttonProps,
    };

    if (isLastItem)
      return (
        <Fragment key={idx}>
          {cloneElement(currentChildren, newChildProps)}
        </Fragment>
      );

    return (
      <Fragment key={idx}>
        {cloneElement(currentChildren, newChildProps)}
        <span className="border-l border-divider border-solid" />
      </Fragment>
    );
  });

  return (
    <Component
      className={merge(
        "flex rounded-full border border-divider border-solid box-border h-min",
        className
      )}
      {...(props as any)}
    >
      {items}
    </Component>
  );
};

export default ButtonGroup;
