// Files live in public/images/. BASE_URL makes them work locally and on GitHub Pages (/robot-game/).
const img = (name: string) => `${import.meta.env.BASE_URL}images/${name}`

export const IMG = {
  kitchen: img('kitchen-background.png'),
  kittenDetective: img('kitten-detective.png'),
  kittenHappy: img('kitten-happy.png'),
  kittenNotes: img('kitten-notes.png'),
  kittenThinking: img('kitten-thinking.png'),
  professor: img('professor-cat.png'),
  cakeBase: img('cake-base.png'),
  cakeDecorated: img('cake-decorated.png'),
  cakeComplete: img('cake-complete.png'),
}

// Cake state by number of solved cases (0 = no cake yet).
export const CAKE_IMAGES = [null, IMG.cakeBase, IMG.cakeDecorated, IMG.cakeComplete] as const

// The three cake PNGs have the plate at slightly different heights.
// This shift (in % of image height) keeps the plate in the same place. Fine-tune if needed.
export const CAKE_SHIFT = [0, 9.3, 6.3, 0] as const
