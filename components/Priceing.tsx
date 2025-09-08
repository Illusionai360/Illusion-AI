"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <div id="pricing" className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Get 6 Premium AI Models <br /> for Half the Price of One
        </h2>
        <p className="mt-3 text-green-400 text-sm">
          Limited time: Save 90% compared to individual subscriptions
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 w-full max-w-6xl">
        {/* Individual Subscriptions */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-gray-800 text-gray-300 shadow-lg">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              Individual AI Subscriptions
            </h3>
            <p className="text-2xl font-bold text-white">
              $110 <span className="text-sm text-gray-400">(~₹10,000)</span>
            </p>
            <p className="text-sm text-gray-400 mb-6">What you're paying now</p>

            <ul className="space-y-4">
              {[
                ["ChatGPT 5", "$20/mo"],
                ["Google Gemini 2.5 Pro", "$20/mo"],
                ["Perplexity Sonar Pro", "$20/mo"],
                ["Claude Sonnet 4", "$20/mo"],
                ["Grok 4", "$30/mo"],
              ].map(([name, price]) => (
                <li key={name} className="flex justify-between border-b border-gray-800 pb-2">
                  <span>{name}</span>
                  <span className="text-white">{price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              {[
                "Multiple subscriptions to manage – expensive",
                "Constant tab switching",
                "No comparison features",
              ].map((f) => (
                <div key={f} className="flex items-center text-red-500 text-sm">
                  <X size={16} className="mr-2" /> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Illusion AI Fiesta */}
        <div className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#020617] border border-gray-700 text-white shadow-xl relative">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Illusion AI Fiesta</h3>

              {/* Simple Toggle */}
              <div
                className="relative flex items-center w-28 h-8 bg-gray-800 rounded-full cursor-pointer"
                onClick={() => setYearly(!yearly)}
              >
                <div
                  className={`absolute w-1/2 h-full bg-green-500 rounded-full transition-transform duration-300 ${
                    yearly ? "translate-x-full" : "translate-x-0"
                  }`}
                />
                <span
                  className={`flex-1 text-center text-xs font-medium transition-colors ${
                    !yearly ? "text-black" : "text-gray-400"
                  }`}
                >
                  Monthly
                </span>
                <span
                  className={`flex-1 text-center text-xs font-medium transition-colors ${
                    yearly ? "text-black" : "text-gray-400"
                  }`}
                >
                  Yearly
                </span>
              </div>
            </div>

            <p className="text-3xl font-bold">
              {yearly ? "₹9,999/Year" : "₹999/Month"}
            </p>
            {yearly && (
              <p className="text-green-400 text-sm mt-1">
                Save 17% + Quarterly Webinar Access
              </p>
            )}

            <div className="mt-8 space-y-4">
              {[
                "All premium AI models included",
                "Side-by-side comparison",
                "3 million tokens/month",
                "Instant prompt enhancement",
                "Image generation & Audio transcription",
              ].map((f) => (
                <div key={f} className="flex items-center text-sm">
                  <Check size={18} className="mr-2 text-green-400" /> {f}
                </div>
              ))}
            </div>

            <button className="w-full mt-8 text-lg font-semibold bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl shadow-lg py-3 hover:opacity-90 transition">
              Get Started Now →
            </button>

            <p className="mt-4 text-xs text-gray-400 text-center">
              Payments are processed securely via Razorpay & Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
