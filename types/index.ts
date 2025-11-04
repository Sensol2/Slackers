// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: "student" | "teacher";
  languages: {
    native: string;
    learning: string[];
  };
  createdAt: string;
}

// Teacher types
export interface Teacher extends User {
  role: "teacher";
  bio: string;
  hourlyRate: number;
  rating: number;
  totalLessons: number;
  specialties: string[];
  availability: Availability[];
}

export interface Availability {
  day: string;
  slots: TimeSlot[];
}

export interface TimeSlot {
  start: string;
  end: string;
}

// Chat types
export interface ChatRoom {
  id: string;
  name: string;
  description?: string;
  type: "public" | "private" | "direct";
  language: string;
  members: string[];
  createdAt: string;
  lastMessage?: Message;
}

export interface Message {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: string;
  reactions?: Reaction[];
}

export interface Reaction {
  emoji: string;
  userId: string;
}

// Subscription types
export interface Subscription {
  id: string;
  userId: string;
  plan: "free" | "basic" | "premium";
  status: "active" | "cancelled" | "expired";
  startDate: string;
  endDate?: string;
  features: string[];
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  features: string[];
  popular?: boolean;
}
