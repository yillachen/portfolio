// main
const fadeVariant = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  },
};

const fadeTransition = {
  duration: 0.75
};

const springVariant = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100vH'
  },
};

const springTransition = {
  duration: 0.25,
  type: 'spring',
  stiffness: 40
};

// navbar and footer
const bSpringVariant = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '100vH'
  },
};

const bSpringTransition = {
  duration: 0.25,
  type: 'spring',
  stiffness: 40
};

// projects

const scrollVariant = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100vH'
  },
};

const scrollTransition = {
  duration: 0.25,
  type: 'spring',
  stiffness: 40
};

export { fadeVariant, fadeTransition, springTransition, springVariant, bSpringTransition, bSpringVariant, scrollVariant, scrollTransition };
