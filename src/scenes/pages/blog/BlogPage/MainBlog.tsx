"use client";
import React from "react";
import { BlogInfoData } from "@/lib/contants";
import { tBlogItemProps } from "@/lib/types";
import { Tag } from "lucide-react";
import Image from "next/image";
import { Folder } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

const MainBlog = () => {
  return (
    <div className="flex-[2] text-dark-gray">
      {/* article */}
      <div className="border-b-[1px] border-gray-400 pb-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full min-h-[400]"
        >
          <Image src="/assets/blogItem.jpg" alt="blog" fill></Image>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-bold text-3xl max-w-[800px] leading-8 my-8"
        >
          Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
          quia
        </motion.h1>

        {/* blog information */}

        <div className="flex items-center gap-3 mb-4">
          <AnimatePresence>
            {BlogInfoData.map((b, index) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <BlogInfoItem {...b} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam
          animi praesentium. Aliquam et laboriosam eius aut nostrum quidem
          aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque
          deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt.
          Voluptate porro consequatur assumenda perferendis dolore. Sit repellat
          hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in
          accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio.
          Et voluptate cupiditate. Sed quo laboriosam qui architecto. Occaecati
          repellendus omnis dicta inventore tempore provident voluptas mollitia
          aliquid. Id repellendus quia. Asperiores nihil magni dicta est
          suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil
          quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad
          qui tempore corrupti velit quisquam rerum. Omnis dolorum
          exercitationem harum qui qui blanditiis neque. Iusto autem itaque.
          Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem
          magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
        </motion.p>

        <h1 className="font-bold text-3xl max-w-[800px] leading-8 my-8">
          Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam
          quia
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam
          animi praesentium. Aliquam et laboriosam eius aut nostrum quidem
          aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque
          deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt.
          Voluptate porro consequatur assumenda perferendis dolore. Sit repellat
          hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in
          accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio.
          Et voluptate cupiditate. Sed quo laboriosam qui architecto. Occaecati
          repellendus omnis dicta inventore tempore provident voluptas mollitia
          aliquid. Id repellendus quia. Asperiores nihil magni dicta est
          suscipit perspiciatis. Voluptate ex rerum assumenda dolores nihil
          quaerat. Dolor porro tempora et quibusdam voluptas. Beatae aut at ad
          qui tempore corrupti velit quisquam rerum. Omnis dolorum
          exercitationem harum qui qui blanditiis neque. Iusto autem itaque.
          Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem
          magni. Vel magnam quod et tempora deleniti error rerum nihil tempora.
        </motion.p>
      </div>

      {/* more informatin */}
      <div className="flex items-center gap-4 mt-4">
        <BlogInfoItem
          key={"business-id"}
          icon={Folder}
          info="business"
        ></BlogInfoItem>
        <BlogInfoItem
          key={"tag-id"}
          icon={Tag}
          info="creative, business, marketing"
        ></BlogInfoItem>
      </div>
    </div>
  );
};

export default MainBlog;

const BlogInfoItem = ({ icon: Icon, info, id }: tBlogItemProps) => {
  return (
    <motion.div
      className="flex items-center gap-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div whileHover={{ rotate: 10 }}>
        <Icon size={22} className="text-primary" />
      </motion.div>
      <span>{info}</span>
    </motion.div>
  );
};
