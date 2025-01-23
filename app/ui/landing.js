"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "사람 기반 AI 인척 답변",
      description: "실제 사람들이 질문에 답변 해드립니다"
    },
    {
      title: "실시간 분석",
      description: "인적 자원 기반의 실시간 질문 분석을 제공합니다"
    },
    {
      title: "맞춤형 솔루션",
      description: "강사님의 맞춤형 일일 강의 노트를 제공합니다"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <nav className="py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2 mt-20">
              <Image src="/logo.png" alt="Logo" width={40} height={49} />
              <span className="text-white text-2xl font-bold">peopleGPT</span>
            </div>
          </div>
        </nav>

        <main className="py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              "최고의 자원은 인적 자원이다"
            </h1>
            
            <div className="flex justify-center mt-12">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200">
                <Link href="login">
                Try PGPT
                </Link>
              </button>
            </div>
          </div>
        </main>

        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`
                  bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white 
                  transform transition-all duration-700 ease-out
                  ${isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;