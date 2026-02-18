"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SwitchOption {
  label: string
  value: string
}

interface SwitchProps {
  options: SwitchOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

function Switch({
  options,
  value,
  defaultValue,
  onValueChange,
  className,
}: SwitchProps) {
  const [internalValue, setInternalValue] = React.useState(
    defaultValue ?? options[0]?.value
  )

  const selectedValue = value ?? internalValue

  const handleSelect = (val: string) => {
    if (val === selectedValue) return // 🔥 prevent switching if already selected

    if (!value) {
      setInternalValue(val)
    }

    onValueChange?.(val)
  }

  const selectedIndex = options.findIndex(
    (opt) => opt.value === selectedValue
  )

  return (
    <div
      className={cn(
        "relative inline-flex h-10 w-full rounded-full bg-(--color-primary-soft) p-1",
        className
      )}
    >
      {/* Sliding Thumb */}
      <div
        className="absolute top-1 left-1 h-8 rounded-2xl bg-white shadow transition-all duration-300"
        style={{
          width: `calc(${100 / options.length}% - 8px)`,
          transform: `translateX(${selectedIndex * 100}%)`,
        }}
      />

      {/* Options */}
      <div className="relative z-10 flex w-full text-sm font-medium">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleSelect(option.value)}
            className="flex-1 text-center cursor-pointer"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export { Switch }
