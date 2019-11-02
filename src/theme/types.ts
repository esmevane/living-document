declare global {
  interface Hierarchy<T> {
    one: T
    two: T
    three: T
    four: T
    five: T
    six: T
    seven: T
    eight: T
    nine: T
    ten: T
    eleven: T
    twelve: T
  }

  interface HierarchicalTheme {
    margin: Hierarchy<string>
    padding: Hierarchy<string>
    width: Hierarchy<string>
    height: Hierarchy<string>
    opacity: Hierarchy<string>

    border: {
      radius: Hierarchy<string>
      width: Hierarchy<string>
    }

    colors: {
      accent: Hierarchy<string>
      destructive: Hierarchy<string>
      neutral: Hierarchy<string>
      primary: Hierarchy<string>
      success: Hierarchy<string>
      warning: Hierarchy<string>
    }

    icons: {
      size: Hierarchy<string>
    }

    font: {
      serif: string
      sans: string
      mono: string
      weight: Hierarchy<string>
      size: Hierarchy<string>
      lineHeight: Hierarchy<string>
    }

    shadows: {
      drop: Hierarchy<string>
      inset: Hierarchy<string>
    }
  }
}

export {}
