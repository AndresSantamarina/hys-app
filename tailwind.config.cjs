module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        principal: "var(--color-principal)",
        secundario: "var(--color-secundario)",
        terciario: "var(--color-terciario)",
        cuaternario: "var(--color-cuaternario)",
        fuente: {
          principal: "var(--color-fuente-principal)",
          secundario: "var(--color-fuente-secundario)",
          terciario: "var(--color-fuente-terciario)",
        },
        btn: {
          principal: "var(--color-btn-principal)",
          secundario: "var(--color-btn-secundario)",
        },
      },
      fontFamily: {
        titulo: ["Michroma", "sans-serif"],
        subtitulo: ["Alumni Sans Pinstripe", "sans-serif"],
        texto: ["Roboto", "sans-serif"],
        interactiva: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        titulo: "var(--fuente-tamanio-titulo)",
        "titulo-tablet": "var(--fuente-tamanio-titulo-tablet)",
        "titulo-desktop": "var(--fuente-tamanio-titulo-desktop)",
        subtitulo: "var(--fuente-tamanio-subtitulo)",
        "subtitulo-tablet": "var(--fuente-tamanio-subtitulo-tablet)",
        "subtitulo-desktop": "var(--fuente-tamanio-subtitulo-desktop)",
        texto: "var(--fuente-tamanio-texto)",
        "texto-tablet": "var(--fuente-tamanio-texto-tablet)",
        "texto-desktop": "var(--fuente-tamanio-texto-desktop)",
      },
    },
  },
  plugins: [],
};