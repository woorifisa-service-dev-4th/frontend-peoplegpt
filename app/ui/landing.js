import Link from 'next/link';
import React from 'react';


const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <nav className="py-6">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full"></div>
              <span className="text-white text-2xl font-bold">peopleGPT</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              "최고의 자원은 인적 자원이다"
            </h1>
            
            <div className="flex justify-center mt-12">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
                <Link href="/login">
                    <span>Try PGPT</span>
                </Link>
              </button>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
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