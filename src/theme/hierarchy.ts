export const values = <T>(
  ...[
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve
  ]: T[]
): Hierarchy<T> => ({
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve
})

export const hierarchy = (hierarchical: HierarchicalTheme) => hierarchical
