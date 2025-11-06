type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassValue[]
  | { [key: string]: boolean | string | number | null | undefined };

function pushClass(target: string[], value: ClassValue): void {
  if (!value && value !== 0) {
    return;
  }

  if (typeof value === "string" || typeof value === "number") {
    if (String(value).trim().length > 0) {
      target.push(String(value));
    }
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry) => pushClass(target, entry));
    return;
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([key, condition]) => {
      if (condition) {
        target.push(key);
      }
    });
  }
}

export function cn(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  inputs.forEach((value) => pushClass(classes, value));
  return classes.join(" ").replace(/\s+/g, " ").trim();
}

