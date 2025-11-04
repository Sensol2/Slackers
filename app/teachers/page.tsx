"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, MapPin, BookOpen, Clock, Filter } from "lucide-react";

export default function TeachersPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  // Mock teacher data
  const teachers = [
    {
      id: 1,
      name: "김선생님",
      nativeLanguage: "Korean",
      teachingLanguages: ["Korean", "English"],
      bio: "Experienced Korean teacher with 5 years of teaching experience. Specializing in conversation and grammar.",
      rating: 4.9,
      totalLessons: 234,
      hourlyRate: 25,
      location: "Seoul, Korea",
      specialties: ["Conversation", "Grammar", "TOPIK Prep"],
      availability: "Available",
      image: "/teachers/teacher1.jpg",
    },
    {
      id: 2,
      name: "田中先生",
      nativeLanguage: "Japanese",
      teachingLanguages: ["Japanese", "English"],
      bio: "Native Japanese speaker passionate about helping students master conversational Japanese.",
      rating: 4.8,
      totalLessons: 189,
      hourlyRate: 28,
      location: "Tokyo, Japan",
      specialties: ["Conversation", "Business Japanese", "JLPT"],
      availability: "Available",
      image: "/teachers/teacher2.jpg",
    },
    {
      id: 3,
      name: "박지민",
      nativeLanguage: "Korean",
      teachingLanguages: ["Korean", "Japanese"],
      bio: "Bilingual teacher fluent in both Korean and Japanese. Perfect for language exchange!",
      rating: 5.0,
      totalLessons: 156,
      hourlyRate: 30,
      location: "Busan, Korea",
      specialties: ["Language Exchange", "Culture", "Pronunciation"],
      availability: "Available",
      image: "/teachers/teacher3.jpg",
    },
    {
      id: 4,
      name: "佐藤花子",
      nativeLanguage: "Japanese",
      teachingLanguages: ["Japanese", "Korean"],
      bio: "Friendly and patient teacher with a focus on making learning fun and engaging.",
      rating: 4.7,
      totalLessons: 145,
      hourlyRate: 26,
      location: "Osaka, Japan",
      specialties: ["Beginners", "Kids", "Anime Japanese"],
      availability: "Busy",
      image: "/teachers/teacher4.jpg",
    },
  ];

  const filteredTeachers =
    selectedLanguage === "all"
      ? teachers
      : teachers.filter((t) => t.teachingLanguages.includes(selectedLanguage));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Find Your Perfect Teacher
            </h1>
            <p className="text-text-secondary">
              Connect with experienced language teachers for personalized
              lessons
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filters */}
          <div className="mb-6">
            <div className="flex items-center space-x-4 flex-wrap">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-text-secondary" />
                <span className="text-sm font-medium text-text-primary">
                  Filter by language:
                </span>
              </div>
              <button
                onClick={() => setSelectedLanguage("all")}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  selectedLanguage === "all"
                    ? "bg-primary text-white"
                    : "bg-white text-text-secondary hover:bg-background"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedLanguage("Korean")}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  selectedLanguage === "Korean"
                    ? "bg-primary text-white"
                    : "bg-white text-text-secondary hover:bg-background"
                }`}
              >
                Korean
              </button>
              <button
                onClick={() => setSelectedLanguage("Japanese")}
                className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                  selectedLanguage === "Japanese"
                    ? "bg-primary text-white"
                    : "bg-white text-text-secondary hover:bg-background"
                }`}
              >
                Japanese
              </button>
            </div>
          </div>

          {/* Teachers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="hover:shadow-xl cursor-pointer">
                <CardContent className="p-6">
                  {/* Teacher Avatar */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-semibold flex-shrink-0">
                      {teacher.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-text-primary mb-1">
                        {teacher.name}
                      </h3>
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-text-primary">
                          {teacher.rating}
                        </span>
                        <span className="text-sm text-text-secondary">
                          ({teacher.totalLessons} lessons)
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-text-secondary">
                        <MapPin className="w-4 h-4 mr-1" />
                        {teacher.location}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                    {teacher.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-background text-primary text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-text-secondary">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>
                        Teaches: {teacher.teachingLanguages.join(", ")}
                      </span>
                    </div>
                  </div>

                  {/* Price and Availability */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        ${teacher.hourlyRate}
                      </div>
                      <div className="text-xs text-text-secondary">
                        per hour
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          teacher.availability === "Available"
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span className="text-sm text-text-secondary">
                        {teacher.availability}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full mt-4 bg-primary text-white py-3 rounded-2xl hover:bg-secondary transition-colors font-medium">
                    Book Lesson
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredTeachers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-secondary">
                No teachers found for the selected language
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
