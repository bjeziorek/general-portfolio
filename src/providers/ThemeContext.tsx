import { createContext, useState, type Dispatch, type SetStateAction } from "react"
import { Theme } from "@radix-ui/themes"

type ThemeMode = "light" | "dark"
type Color = "gray" | "gold" | "bronze" | "brown" | "yellow" | "amber" | "orange" | "tomato" | "red" | "ruby" | "crimson" | "pink" | "plum" | "purple" | "violet" | "iris" | "indigo" | "blue" | "cyan" | "teal" | "jade" | "green" | "grass" | "lime" | "mint" | "sky"

type ThemeContextValue = {
  theme: ThemeMode
  toggleTheme: () => void
  color: Color
  setColor: Dispatch<SetStateAction<Color>>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>("dark")
  const [color, setColor] = useState<Color>("indigo")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, color, setColor }}>
      <Theme appearance={theme}>{children}</Theme>
    </ThemeContext.Provider>
  )
}

import { useContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}
