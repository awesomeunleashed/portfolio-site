const classes = {
  button: {
    base: "block border text-center border-stone-500 text-xl px-4 py-2 no-underline transition-colors rounded-lg font-headers uppercase",
    primary:
      "bg-gradient-to-b from-cyan-800 to-cyan-900 hover:from-cyan-600 hover:to-cyan-800 text-white",
    selected: "bg-gradient-to-b from-cyan-600/40 to-cyan-800/40 text-cyan-950",
  },
  divider: "border-b border-stone-500",
  h1: "font-headers text-3xl",
  h2: "text-2xl font-headers text-center",
  link: "text-cyan-400 underline hover:decoration-white transition-colors",
} as const;

export default classes;
