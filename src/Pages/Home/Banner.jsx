
import { easeInOut } from "motion";
import { motion } from "motion/react"
import bannerPic1 from '../../assets/bannerPic1.jpg'
import bannerPic2 from '../../assets/pic2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[450px] mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="flex-1">
         <motion.img
            src={bannerPic1}
            animate={{y: [50,100,50]}}
            transition={{duration:9, repeat:Infinity}}
           
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4  border-blue-600 shadow-2xl" />
         <motion.img
            src={bannerPic2}
            animate={{x: [100,150,100]}}
            transition={{duration:9, delay:4, repeat:Infinity}}
           
            className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4  border-blue-600 shadow-2xl" />
         
         </div>
          <div className="flex-1">
            <motion.h1
             animate={{x:15, color: ['blue']}}
             transition={{duration:3, delay:1, ease:easeInOut,repeat:Infinity}}
            
            className="text-5xl font-bold">Latest <motion.span animate={{color:['#f5f636', '#74f636','#36f6c3']}} transition={{duration: 1.5, repeat:Infinity }}>Jobs</motion.span>  For You!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;