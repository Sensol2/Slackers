import { Message } from "@/types";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: Message;
  isOwnMessage?: boolean;
}

export function ChatMessage({ message, isOwnMessage }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start space-x-3 p-3 rounded-2xl transition-colors hover:bg-background",
        isOwnMessage && "bg-blue-50"
      )}
    >
      {/* Avatar */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
          {message.userName.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* Message content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-semibold text-text-primary">
            {message.userName}
          </span>
          <span className="text-xs text-text-secondary">
            {new Date(message.timestamp).toLocaleTimeString()}
          </span>
        </div>
        <p className="text-text-primary whitespace-pre-wrap break-words">
          {message.content}
        </p>

        {/* Reactions */}
        {message.reactions && message.reactions.length > 0 && (
          <div className="flex items-center space-x-2 mt-2">
            {message.reactions.map((reaction, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-2 py-1 bg-background rounded-full text-sm"
              >
                {reaction.emoji}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
