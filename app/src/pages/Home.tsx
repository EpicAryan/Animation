import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-neutral-900 w-full h-screen m-0">
           <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="text-3xl font-bold text-center text-white p-5"
            >
              Welcome to the Animation App
            </motion.h1>
            <div className="w-full h-1/2 flex justify-around mt-10">
              <motion.div 
                className="w-60 h-1/2 bg-white border-4 rounded-md border-red-400"
                whileHover={{ scale: [null, 1.3, 1.3] }}
                transition={{ duration: 0.3 }}
              >

              </motion.div>
              <motion.div 
                className="w-60 h-1/2 bg-blue-400 border-2 border-red-400"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 , ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5}} 
              >

              </motion.div>
              <motion.div className="w-60 h-1/2 bg-amber-600"
                animate={{
                  scale: [1, 1.4, 1.4, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                }}
                transition={{ duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1}}
                >
              </motion.div>
            </div>
            
    </div>
  )
}

export default Home