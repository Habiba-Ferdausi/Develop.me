
'use client';
import { ReactNode } from 'react';
import clsx from 'clsx';

export function Highlight({
  children,
  variant = 'pill',
  className,
}: {
  children: ReactNode;
  variant?: 'pill' | 'dot';
  className?: string;
}) {
  const styles =
    variant === 'pill'
      ? 'bg-black dark:bg-white lg:text-[78px] leading-none  text-white rounded-xl  dark:text-black  px-4 pt-5 rounded-sm inline-block'
      : 'bg-black dark:bg-white text-white lg:text-[78px] leading-none rounded-xl  dark:text-black  px-4  pt-5 pb-2  rounded-sm inline-block';

  return <span className={clsx(styles, className)}>{children}</span>;
}

export default function SectionTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        'text-4xl lg:text-[78px] text-black  dark:text-white font-bold leading-[126px]',
        className,
      )}
    >
      {children}
    </h2>
  );
}
