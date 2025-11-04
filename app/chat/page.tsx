"use client";

import { useState } from "react";
import { useChatStore } from "@/store/chatStore";
import { useAuthStore } from "@/store/authStore";
import { ChatMessage } from "@/components/ChatMessage";
import {
  Hash,
  Search,
  Users,
  Settings,
  Send,
  Smile,
  Plus,
  MoreVertical,
  MessageSquare,
} from "lucide-react";

export default function ChatPage() {
  const { user } = useAuthStore();
  const { rooms, currentRoom, messages } = useChatStore();
  const [messageInput, setMessageInput] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);

  // Mock data
  const mockRooms = [
    {
      id: "1",
      name: "korean-practice",
      description: "Practice Korean conversation",
      type: "public" as const,
      language: "Korean",
      members: ["user1", "user2"],
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "japanese-beginners",
      description: "For Japanese beginners",
      type: "public" as const,
      language: "Japanese",
      members: ["user1", "user3"],
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      name: "grammar-help",
      description: "Ask grammar questions",
      type: "public" as const,
      language: "Mixed",
      members: ["user1"],
      createdAt: new Date().toISOString(),
    },
  ];

  const mockMessages = [
    {
      id: "1",
      roomId: "1",
      userId: "user1",
      userName: "김민수",
      content: "안녕하세요! 오늘 날씨가 정말 좋네요.",
      timestamp: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: "2",
      roomId: "1",
      userId: "user2",
      userName: "田中太郎",
      content: "네, 맞아요! 한국어 연습하기 좋은 날이에요.",
      timestamp: new Date(Date.now() - 3000000).toISOString(),
    },
    {
      id: "3",
      roomId: "1",
      userId: "user1",
      userName: "김민수",
      content: "오늘 같이 공부할까요?",
      timestamp: new Date(Date.now() - 1800000).toISOString(),
    },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Here you would send the message
      console.log("Sending:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="h-screen flex bg-background">
      {/* Sidebar - Room List */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-text-primary mb-4">
            Chat Rooms
          </h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" />
            <input
              type="text"
              placeholder="Search rooms..."
              className="w-full pl-10 pr-4 py-2 bg-background rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Room List */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <span className="text-xs font-semibold text-text-secondary uppercase">
                Public Rooms
              </span>
              <button className="text-text-secondary hover:text-primary">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {mockRooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoomId(room.id)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-2xl cursor-pointer transition-colors mb-1 ${
                  selectedRoomId === room.id
                    ? "bg-primary text-white"
                    : "hover:bg-background"
                }`}
              >
                <Hash
                  className={`w-5 h-5 ${
                    selectedRoomId === room.id
                      ? "text-white"
                      : "text-text-secondary"
                  }`}
                />
                <span className="text-sm font-medium">{room.name}</span>
              </div>
            ))}
          </div>

          <div className="p-2 mt-4">
            <div className="flex items-center justify-between px-3 py-2 mb-2">
              <span className="text-xs font-semibold text-text-secondary uppercase">
                Direct Messages
              </span>
              <button className="text-text-secondary hover:text-primary">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-3 px-3 py-2 rounded-2xl cursor-pointer hover:bg-background mb-1">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
                KS
              </div>
              <span className="text-sm font-medium">김선생님</span>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0) || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-text-primary truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-text-secondary">Online</p>
            </div>
            <button className="text-text-secondary hover:text-primary">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedRoomId ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Hash className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {mockRooms.find((r) => r.id === selectedRoomId)?.name}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {
                        mockRooms.find((r) => r.id === selectedRoomId)
                          ?.description
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-text-secondary hover:text-primary">
                    <Users className="w-5 h-5" />
                  </button>
                  <button className="text-text-secondary hover:text-primary">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="text-text-secondary hover:text-primary">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {mockMessages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isOwnMessage={message.userId === "user1"}
                />
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center space-x-3">
                <button className="text-text-secondary hover:text-primary p-2 flex-shrink-0">
                  <Plus className="w-5 h-5" />
                </button>
                <div className="flex-1 bg-background rounded-2xl px-4 py-2.5 flex items-center">
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder={`Message #${
                      mockRooms.find((r) => r.id === selectedRoomId)?.name
                    }`}
                    className="w-full bg-transparent resize-none focus:outline-none text-text-primary leading-6"
                    rows={1}
                  />
                </div>
                <button className="text-text-secondary hover:text-primary p-2 flex-shrink-0">
                  <Smile className="w-5 h-5" />
                </button>
                <button
                  onClick={handleSendMessage}
                  className="bg-primary text-white p-3 rounded-2xl hover:bg-secondary transition-colors flex-shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-text-secondary mt-2 ml-2">
                Press Enter to send, Shift + Enter for new line
              </p>
            </div>
          </>
        ) : (
          /* No Room Selected */
          <div className="flex-1 flex items-center justify-center bg-background">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 text-text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Select a chat room
              </h3>
              <p className="text-text-secondary">
                Choose a room from the sidebar to start chatting
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Right Sidebar - Members (optional, shown when room is selected) */}
      {selectedRoomId && (
        <div className="w-64 bg-white border-l border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-text-secondary uppercase mb-4">
            Members
          </h3>
          <div className="space-y-3">
            {["김민수", "田中太郎", "Park Jimin", "佐藤花子"].map(
              (member, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-2 rounded-2xl hover:bg-background cursor-pointer transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
                    {member.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {member}
                    </p>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-text-secondary">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-text-secondary uppercase mb-4">
              Room Info
            </h3>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-text-secondary">Language:</span>
                <span className="text-text-primary font-medium ml-2">
                  Korean
                </span>
              </div>
              <div className="text-sm">
                <span className="text-text-secondary">Type:</span>
                <span className="text-text-primary font-medium ml-2">
                  Public
                </span>
              </div>
              <div className="text-sm">
                <span className="text-text-secondary">Created:</span>
                <span className="text-text-primary font-medium ml-2">
                  Jan 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
