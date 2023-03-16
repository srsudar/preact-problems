import { ComponentProps, h, Ref, VNode } from 'preact';
import { forwardRef } from 'preact/compat';

export type UnstyledButtonProps = {
  href?: string;
} & ComponentProps<'button'>;

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  (
    { onClick, href, className, ...props }: UnstyledButtonProps,
    ref: Ref<HTMLButtonElement>
  ): VNode => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        {...props}
      />
    );
  }
);

export type ButtonProps = UnstyledButtonProps & {
  extraClass?: string;
};

// eslint-disable-next-line prefer-arrow-callback
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    extraClass,
    ...props
  }: ButtonProps,
  ref?: Ref<HTMLButtonElement>
) {
  return (
    <UnstyledButton
      ref={ref}
      {...props}
    >
    </UnstyledButton>
  );
});

