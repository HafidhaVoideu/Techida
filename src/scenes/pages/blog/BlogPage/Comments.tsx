import { TCommentItemProps } from "@/lib/types";
import React from "react";

import { BsReplyFill } from "react-icons/bs";

import Image from "next/image";
import { commentsData } from "@/lib/contants";

const Comments = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold my-4">
        {" "}
        {commentsData.length} comments
      </h1>
      {commentsData.map((x) => (
        <CommentItem key={x.id} {...x}></CommentItem>
      ))}
    </section>
  );
};

export default Comments;

const CommentItem = ({
  image,
  date,
  name,
  comment,
  customClass,
  replies = [],
}: TCommentItemProps) => {
  return (
    <article>
      <div className="flex items-center gap-4 mb-4 text-dark-gray">
        <div
          className={`${customClass}  relative max-w-[50px] max-h-[50px] w-full h-full aspect-square`}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="rounded-full"
            objectFit="cover"
          ></Image>
        </div>
        {/* INFORMATION */}
        <div>
          {/* header */}
          <div className="flex items-center gap-2">
            <h1>{name}</h1>

            <div className="text-primary">
              <button>
                <BsReplyFill size={16} />
              </button>

              <span className="inline-block ml-2 font-semibold text-sm">
                Reply
              </span>
            </div>
          </div>

          <p className="text-primary text-xs font-semibold">{date}</p>
          <p className="text-sm md:text-md mt-2">{comment}</p>
        </div>
      </div>

      <RepliesList replies={replies} />
    </article>
  );
};

const RepliesList: React.FC<{ replies: TCommentItemProps[] }> = ({
  replies,
}) => {
  if (!replies || replies.length === 0) return null;

  return (
    <>
      {replies.map((reply) => (
        <CommentItem key={reply.id} {...reply} customClass="ml-4" />
      ))}
    </>
  );
};
