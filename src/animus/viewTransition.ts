type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => void) => void
}

export function withViewTransition(update: () => void) {
  const doc = document as DocumentWithViewTransitions
  if (typeof doc.startViewTransition === 'function') {
    doc.startViewTransition(update)
  } else {
    update()
  }
}
