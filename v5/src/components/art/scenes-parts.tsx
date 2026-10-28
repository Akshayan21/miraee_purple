type IconProps = { size?: number; className?: string }
const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function RingBell({ size = 22, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M6 16V11a6 6 0 0112 0v5l1.500 2H4.500L6 16z" />
      <path d="M10 21a2 2 0 004 0" />
    </svg>
  )
}
export function IconCheck({ size = 20, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M5 12.500l4.500 4.500L19 7.500" />
    </svg>
  )
}
export function IconLock({ size = 22, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...base}
      aria-hidden="true"
    >
      <rect x="5" y="10.500" width="14" height="9.500" rx="2.500" />
      <path d="M8.500 10.500V8a3.500 3.500 0 017 0v2.500" />
    </svg>
  )
}
export function IconDoc({ size = 22, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M9.500 12h6M9.500 15.500h6" />
    </svg>
  )
}
export function IconGoogleG({ size = 22, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      {...base}
      aria-hidden="true"
    >
      <path d="M20 12.200c0-.6-.1-1.100-.2-1.700H12v3.200h4.500a4 4 0 01-1.700 2.600v2.100h2.800c1.600-1.500 2.400-3.700 2.400-6.200z" />
      <path d="M12 20.500c2.300 0 4.200-.8 5.600-2.100l-2.800-2.100c-.8.500-1.700.8-2.800.8-2.100 0-3.900-1.400-4.600-3.400H4.600v2.200A8.500 8.500 0 0012 20.500z" />
      <path d="M7.400 13.700a5 5 0 010-3.400V8.100H4.600a8.500 8.500 0 000 7.800l2.800-2.200z" />
      <path d="M12 6.900c1.200 0 2.200.4 3.100 1.200l2.300-2.300A8.300 8.300 0 0012 3.500 8.500 8.500 0 004.600 8.100l2.800 2.200C8.100 8.300 9.900 6.900 12 6.900z" />
    </svg>
  )
}
