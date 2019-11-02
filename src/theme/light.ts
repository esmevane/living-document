import { hierarchy, values } from './hierarchy'
import { neutrals, pink, green, indigo, yellow, blue } from './palette'
import { whitespace } from './whitespace'
import { dimensions } from './dimensions'
import { opacity } from './opacity'
import { fontWeight, fontSize, lineHeight } from './font'

export const light: HierarchicalTheme = hierarchy({
  margin: values(...whitespace),
  padding: values(...whitespace),
  width: values(...dimensions),
  height: values(...dimensions),
  opacity: values(...opacity),

  border: {
    radius: values(...whitespace),
    width: values(...whitespace)
  },

  colors: {
    accent: values(...indigo),
    destructive: values(...pink),
    neutral: values(...neutrals),
    primary: values(...blue),
    success: values(...green),
    warning: values(...yellow)
  },

  icons: {
    size: values(...dimensions)
  },

  font: {
    serif: "'Trirong', serif",
    sans: "'Montserrat', sans-serif",
    mono: "'Source Code Pro', monospaced",
    weight: values(...fontWeight),
    size: values(...fontSize),
    lineHeight: values(...lineHeight)
  },

  shadows: {
    drop: values(),
    inset: values()
  }
})
