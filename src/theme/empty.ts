import { hierarchy, values } from './hierarchy'

export const empty: HierarchicalTheme = hierarchy({
  margin: values(),
  padding: values(),
  width: values(),
  height: values(),
  opacity: values(),

  border: {
    radius: values(),
    width: values()
  },

  colors: {
    accent: values(),
    destructive: values(),
    neutral: values(),
    primary: values(),
    success: values(),
    warning: values()
  },

  icons: {
    size: values()
  },

  font: {
    serif: "'Trirong', serif",
    sans: "'Montserrat', sans-serif",
    mono: "'Source Code Pro', monospaced",
    weight: values(),
    size: values(),
    lineHeight: values()
  },

  shadows: {
    drop: values(),
    inset: values()
  }
})
