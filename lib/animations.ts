// Reusable animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const navAnimation = {
  initial: { y: -100 },
  animate: { y: 0 },
  transition: { duration: 0.5 }
};