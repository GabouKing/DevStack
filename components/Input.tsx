import { ComponentProps } from 'react';
import clsx from 'clsx';

type InputProps = {
  label: string;
  error?: string;
} & ComponentProps<'input'>;

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-muted">
        {label}
      </label>

      <input
        {...props}
        className={clsx(
          'w-full rounded-md bg-background border border-border px-4 py-3 text-sm',
          'focus:outline-none focus:ring-2 focus:ring-primary',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
      />

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}
