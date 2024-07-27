"use client"
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Web Develompment",
        description: "Lorem ipsum dolor sit amet.",
        href: ""
    },
    {
        num: "02",
        title: "UI/Ux Design",
        description: "Lorem ipsum dolor sit amet.",
        href: ""
    },
    {
        num: "03",
        title: "Logo Design",
        description: "Lorem ipsum dolor sit amet.",
        href: ""
    },
    {
        num: "04",
        title: "SEO",
        description: "Lorem ipsum dolor sit amet.",
        href: ""
    },
];

import { motion } from "framer-motion";


const Services = () => {
    return(
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }}
                className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">{service.num}</div>
                                <Link href={service.href}>
                                    <BsArrowDownRight />
                                </Link>
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                        </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;