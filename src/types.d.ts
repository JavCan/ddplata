// src/types.d.ts

// Módulo para PNG, JPG, JPEG, GIF
declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

// Módulos para SVG
declare module '*.svg' {
  const value: string;
  export default value;
}

// **IMPORTANTE**
// También necesitas incluir las variantes de mayúsculas que estás usando.
declare module '*.JPG' {
  const value: string;
  export default value;
}

declare module '*.JPEG' {
  const value: string;
  export default value;
}