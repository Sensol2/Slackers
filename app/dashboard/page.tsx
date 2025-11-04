"use client";

import { useAuthStore } from "@/store/authStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  BookOpen,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Star,
  Calendar,
  Award,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuthStore();

  // Mock data
  const stats = [
    {
      title: "Total Lessons",
      value: "24",
      icon: BookOpen,
      change: "+3 this week",
      color: "text-primary",
    },
    {
      title: "Active Chats",
      value: "8",
      icon: MessageSquare,
      change: "2 unread",
      color: "text-secondary",
    },
    {
      title: "Learning Hours",
      value: "48h",
      icon: Clock,
      change: "+5h this week",
      color: "text-green-500",
    },
    {
      title: "Study Streak",
      value: "12 days",
      icon: TrendingUp,
      change: "Keep it up!",
      color: "text-orange-500",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "lesson",
      title: "Completed lesson with 田中先生",
      time: "2 hours ago",
      icon: BookOpen,
    },
    {
      id: 2,
      type: "chat",
      title: "New message in Japanese Practice room",
      time: "4 hours ago",
      icon: MessageSquare,
    },
    {
      id: 3,
      type: "achievement",
      title: "Earned 'Conversation Master' badge",
      time: "Yesterday",
      icon: Award,
    },
  ];

  const upcomingLessons = [
    {
      id: 1,
      teacher: "김선생님",
      subject: "Korean Grammar",
      time: "Today, 3:00 PM",
      duration: "1 hour",
    },
    {
      id: 2,
      teacher: "山田先生",
      subject: "Japanese Conversation",
      time: "Tomorrow, 10:00 AM",
      duration: "1 hour",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-text-primary">
              Welcome back, {user?.name || "Student"}! 👋
            </h1>
            <p className="text-text-secondary mt-2">
              Here&apos;s what&apos;s happening with your learning journey
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-xl cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-text-secondary mb-1">
                        {stat.title}
                      </p>
                      <h3 className="text-3xl font-bold text-text-primary mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {stat.change}
                      </p>
                    </div>
                    <div
                      className={`p-3 rounded-2xl bg-background ${stat.color}`}
                    >
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Upcoming Lessons */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>Upcoming Lessons</span>
                    </CardTitle>
                    <Link
                      href="/teachers"
                      className="text-sm text-primary hover:text-secondary"
                    >
                      Book more
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingLessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-4 bg-background rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                            {lesson.teacher.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-text-primary">
                              {lesson.subject}
                            </h4>
                            <p className="text-sm text-text-secondary">
                              with {lesson.teacher}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-text-primary">
                            {lesson.time}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {lesson.duration}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link
                      href="/teachers"
                      className="flex flex-col items-center p-4 bg-background rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer group"
                    >
                      <Users className="w-8 h-8 mb-2 text-primary group-hover:text-white" />
                      <span className="text-sm font-medium text-center">
                        Find Teachers
                      </span>
                    </Link>
                    <Link
                      href="/chat"
                      className="flex flex-col items-center p-4 bg-background rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer group"
                    >
                      <MessageSquare className="w-8 h-8 mb-2 text-primary group-hover:text-white" />
                      <span className="text-sm font-medium text-center">
                        Join Chat
                      </span>
                    </Link>
                    <div className="flex flex-col items-center p-4 bg-background rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer group">
                      <BookOpen className="w-8 h-8 mb-2 text-primary group-hover:text-white" />
                      <span className="text-sm font-medium text-center">
                        My Lessons
                      </span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-background rounded-2xl hover:bg-primary hover:text-white transition-all cursor-pointer group">
                      <Star className="w-8 h-8 mb-2 text-primary group-hover:text-white" />
                      <span className="text-sm font-medium text-center">
                        Achievements
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Recent Activity */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="flex items-start space-x-3 p-3 rounded-2xl hover:bg-background transition-colors cursor-pointer"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <activity.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-text-primary">
                            {activity.title}
                          </p>
                          <p className="text-xs text-text-secondary mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Learning Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Korean</span>
                        <span className="text-sm text-text-secondary">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Japanese</span>
                        <span className="text-sm text-text-secondary">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
