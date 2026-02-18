"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"

interface TabToggleProps {
  tabs: string[]
  activeIndex?: number
  onTabChange?: (index: number) => void
}

export default function TabToggle({
  tabs,
  activeIndex = 0,
  onTabChange,
}: TabToggleProps) {
  const options = tabs.map((tab, index) => ({
    label: tab,
    value: String(index),
  }))

  return (
    <Switch
      options={options}
      value={String(activeIndex)}
      onValueChange={(val) => {
        onTabChange?.(Number(val))
      }}
    />
  )
}
