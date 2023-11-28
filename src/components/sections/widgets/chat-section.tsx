import { useEffect, useRef } from "react"
import { twJoin } from "tailwind-merge"

const message =
  "Bhai aur kitne din lagenge project me.. tu samajh rha h tu apni asli khushi to taal rha h.. kyuki stations pe to khushi milegi hi.. mainak parvat"

const byMe = false

const ChatSection = ({ toggleScrollToBottom }: { toggleScrollToBottom?: boolean }) => {
  const chatSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatSectionRef && chatSectionRef.current) {
      chatSectionRef.current.scrollTo({
        top: chatSectionRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }, [toggleScrollToBottom])

  return (
    <div
      ref={chatSectionRef}
      className={`mt-auto overflow-y-scroll flex flex-col gap-y-2`}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          className={`px-2 relative flex ${byMe && "justify-end"}`}
          key={index}>
          <div
            className={twJoin(
              `max-w-[80%] p-4 pb-5 relative rounded-b-lg bg-opacity-60`,
              byMe && "rounded-tl-lg text-neutral-100 bg-neutral-700",
              !byMe && "rounded-tr-lg text-neutral-200 bg-neutral-800"
            )}>
            <p
              className={twJoin(
                `font-semibold`,
                byMe && "text-red-400",
                !byMe && "text-blue-400"
              )}>
              {byMe ? "You" : "Friend a"}
            </p>
            {message}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatSection
