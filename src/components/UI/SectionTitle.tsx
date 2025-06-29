
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
      ? 'bg-black dark:bg-white lg:text-[78px] text-3xl leading-none  text-white rounded-xl  dark:text-black  px-4 lg:pt-5 pt-2 rounded-sm inline-block'
      : 'bg-black dark:bg-white text-white lg:text-[78px] text-3xl  leading-none rounded-xl  dark:text-black  px-4  lg:pt-5 pt-2 lg:pb-2 pb-1   rounded-sm inline-block';

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
    <h1
      className={clsx(
        'text-3xl leading-normal lg:text-[78px] text-black  dark:text-white font-bold lg:leading-[126px] ',
        className,
      )}
    >
      {children}
    </h1>
  );
}
