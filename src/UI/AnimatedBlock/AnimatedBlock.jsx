import { motion } from 'framer-motion'

export const AnimatedBlock = ({
  animationType = 'none',
  children,
  className,
  delay,
}) => {
  const variants = {
    slideUp: {
      initial: { opacity: 0, y: 100 }, // Снизу вверх
      whileInView: { opacity: 1, y: 0 },
    },
    slideDown: {
      initial: { opacity: 0, y: -100 }, // Сверху вниз
      whileInView: { opacity: 1, y: 0 },
    },
    slideLeft: {
      initial: { opacity: 0, x: -100 }, // Слева направо
      whileInView: { opacity: 1, x: 0 },
    },
    none: {
      initial: {},
      whileInView: {},
    },
  }

  return (
    <motion.div
      initial={variants[animationType].initial}
      whileInView={variants[animationType].whileInView}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
