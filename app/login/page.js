import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center">
      {/* Nav */}
      <nav className="w-full py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full"></div>
            <span className="text-white text-2xl font-bold">peopleGPT</span>
          </div>
        </div>
      </nav>

      {/* Login Form */}
      <div className="w-full max-w-2xl px-4 mt-20">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="이메일"
                className="w-full px-8 py-5 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                className="w-full px-8 py-5 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
                <Link href="/qna">
                    <span>Login</span>
                </Link>                
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;