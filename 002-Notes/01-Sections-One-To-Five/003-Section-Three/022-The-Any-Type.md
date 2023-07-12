# When To Use Annotations?

    1. Function that returns the 'any' type.
    2. Using JSON.parse().

# The Any Type

    - A type, just as 'string' or 'boolean' are.
    - Means TS has no idea what's going on - can't check for property references.
    - Avoid variables with 'any' at all costs.