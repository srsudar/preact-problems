import { ComponentChild, ComponentProps, h, JSX, Ref, VNode } from 'preact';
import { forwardRef } from 'preact/compat';

export type UnstyledButtonProps = {
  href?: string;
  localNavigation?: boolean;
  newTab?: boolean;
  resetCss?: boolean;
} & ComponentProps<'button'>;

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  (
    { onClick, href, localNavigation, newTab, className, resetCss, ...props }: UnstyledButtonProps,
    ref: Ref<HTMLButtonElement>
  ): VNode => {
    const handleClick = href
      ? (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
          if (onClick) {
            // unclear why TS thinks event.target can be null here
            onClick.call(event.target, event);
            if (event.defaultPrevented) {
              return;
            }
          }
        }
      : onClick;
    return (
      <button
        tabIndex={0}
        type="button"
        ref={ref}
        onClick={handleClick}
        // for testing
        data-href={href}
        {...props}
      />
    );
  }
);

export type ButtonProps = UnstyledButtonProps & {
  priority?: 'primary' | 'secondary' | 'primary-theme' | 'destructive';
  size?: 'small' | 'medium' | 'large';
  fill?: 'filled' | 'outline' | 'empty';
  outline?: 'none';
  allCaps?: boolean;
  rounded?: boolean;
  disabled?: boolean;
  grow?: boolean;
  leftIcon?: ComponentChild;
  rightIcon?: ComponentChild;
  full?: boolean;
  hiddenInput?: ComponentChild;
};

// eslint-disable-next-line prefer-arrow-callback
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    priority = 'primary',
    // size = 'medium',
    fill = 'filled',
    outline,
    rounded,
    disabled,
    grow,
    leftIcon,
    rightIcon,
    allCaps,
    children,
    full,
    hiddenInput,
    ...props
  }: ButtonProps,
  ref?: Ref<HTMLButtonElement>
) {
  return (
    <UnstyledButton
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {leftIcon}
      {rightIcon}
      {hiddenInput}
    </UnstyledButton>
  );
});

