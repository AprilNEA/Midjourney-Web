import clsx from "clsx";

export type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
  autoHeight?: boolean;
  rows?: number;
};

export function Input(props: InputProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        props.className,
        "min-w-12 resize-none rounded-md border-2 border-gray-300 p-2.5"
      )}
    ></textarea>
  );
}

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(props.className, "rounded-md bg-second p-2.5 text-white")}
    ></button>
  );
}
