import React from "react"
import { FieldError } from "react-hook-form"
import { twMerge } from "tailwind-merge"

type TTextInput = {
  error?: FieldError
} & React.ComponentProps<"input">

const TextInput = React.forwardRef<HTMLInputElement, TTextInput>(
  ({ error, className, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          `px-4 py-4 w-full outline-none bg-transparent rounded-md min-w-0 bg-neutral-950 text-white styledPlaceholder focus:ring-2`,
          error ? "ring-red-400" : "ring-neutral-500",
          className
        )}
        ref={ref}
        {...props}
        type="text"
      />
    )
  }
)

export default TextInput
