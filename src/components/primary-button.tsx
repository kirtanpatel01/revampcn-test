import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cn } from "cn"

export interface PrimaryBtnProps extends ButtonPrimitive.Props {}

function PrimaryBtn({ 
  children,
  className,
  ...props
}: PrimaryBtnProps) {
  return (
    <ButtonPrimitive
      className={cn(
        "transform-all relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-indigo-700 bg-linear-to-br from-blue-500 to-blue-600 px-4 py-1.5 text-base tracking-wide text-zinc-100 shadow-[inset_4px_4px_12px_2px_var(--color-indigo-600),inset_4px_-4px_12px_2px_var(--color-indigo-600)] duration-250 text-shadow-sm hover:text-blue-100 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-plus-darker"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </ButtonPrimitive>
  )
}

export { PrimaryBtn }
export default PrimaryBtn
