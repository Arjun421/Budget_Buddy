import { Link } from 'react-router-dom'
import { useState } from 'react'

function Welcome() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Welcome to Budget Buddy!",
      description: "Your personal finance companion that helps you take control of your money with smart tracking and insights.",
      icon: "₹",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Track Your Transactions",
      description: "Easily add and categorize your income and expenses to see exactly where your money goes each month.",
      icon: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Set Smart Budgets",
      description: "Create category-wise budgets and get real-time alerts when you're approaching your spending limits.",
      icon: "🎯",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Get Powerful Insights",
      description: "View beautiful charts and analytics to understand your spending patterns and make informed financial decisions.",
      icon: "📈",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600 font-medium">Step {currentStep + 1} of {steps.length}</span>
            <Link to="/" className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
              Skip
            </Link>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className={`w-20 h-20 bg-gradient-to-br ${steps[currentStep].color} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <span className="text-white text-3xl font-bold">
              {steps[currentStep].icon}
            </span>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {steps[currentStep].title}
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {steps[currentStep].description}
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-medium transition-all duration-200"
              >
                Next
              </button>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/signup"
                  className="block px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-lg font-medium transition-all duration-200 text-center"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="block px-6 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg font-medium transition-colors text-center"
                >
                  I have an account
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep
                  ? 'bg-emerald-600'
                  : index < currentStep
                  ? 'bg-emerald-300'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Welcome