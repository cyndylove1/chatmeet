import { AnimatedItem } from "./animatedItem";


export default function ChatBubble() {
  return (
    <section>
      <div className="p-10 bg-[var(--primary)] merriWeather">
        <AnimatedItem index={0} delay={0.05}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble bg-white font-[300] text-black">
              got plans tonight?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble bg-white text-black font-[300]">
              Nope! What's up?
            </div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:49</time>
            </div>
            <div className="chat-bubble bg-white text-black font-[300]">
              wanna come?
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={3} delay={0.25}>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:50</time>
            </div>
            <div className="chat-bubble bg-white text-black font-[300]">
              Count me in!
            </div>
            <div className="chat-footer opacity-50">Seen at 12:50</div>
          </div>
        </AnimatedItem>
        <AnimatedItem index={4} delay={0.35}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:51</time>
            </div>
            <div className="chat-bubble bg-white text-black font-[300]">
              see ya there!
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
