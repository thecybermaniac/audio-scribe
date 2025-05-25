
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Zap, Star, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pricing = () => {
  const creditPacks = [
    {
      name: "Starter Pack",
      icon: <Star className="h-6 w-6" />,
      minutes: 100,
      price: 1.50,
      description: "Perfect for trying out our service",
      popular: false,
      features: [
        "100 minutes of transcription",
        "AI-powered summaries",
        "Basic action items",
        "Export to PDF/Word"
      ]
    },
    {
      name: "Small Pack",
      icon: <Clock className="h-6 w-6" />,
      minutes: 500,
      price: 6.50,
      description: "Great for regular users",
      popular: true,
      features: [
        "500 minutes of transcription",
        "AI-powered summaries",
        "Smart action items",
        "Export to PDF/Word",
        "Priority processing"
      ]
    },
    {
      name: "Medium Pack",
      icon: <Zap className="h-6 w-6" />,
      minutes: 1500,
      price: 17.00,
      description: "Ideal for teams and businesses",
      popular: false,
      features: [
        "1,500 minutes of transcription",
        "Advanced AI summaries",
        "Smart action items with assignments",
        "Custom templates",
        "Priority processing",
        "Team collaboration"
      ]
    },
    {
      name: "Large Pack",
      icon: <Coins className="h-6 w-6" />,
      minutes: 5000,
      price: 50.00,
      description: "For heavy users and organizations",
      popular: false,
      features: [
        "5,000 minutes of transcription",
        "Advanced AI summaries",
        "Smart action items with assignments",
        "Custom templates",
        "Priority processing",
        "Team collaboration",
        "Dedicated support"
      ]
    }
  ];

  const faqs = [
    {
      question: "How do transcript credits work?",
      answer: "Each minute of audio you upload consumes 1 credit. For example, a 30-minute meeting will use 30 credits from your balance."
    },
    {
      question: "Do credits expire?",
      answer: "No, your transcript credits never expire. You can use them whenever you need to transcribe audio files."
    },
    {
      question: "What happens if I run out of credits?",
      answer: "You can purchase additional credit packs at any time. Your account will show your current balance and notify you when credits are low."
    },
    {
      question: "Can I get a refund for unused credits?",
      answer: "Credits are non-refundable, but they never expire so you can use them whenever you need transcription services."
    },
    {
      question: "Is there a minimum purchase?",
      answer: "Our smallest pack is the Starter Pack with 100 minutes for $1.50. This is perfect for testing our service quality."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Buy Transcript Credits
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Purchase credits to transcribe your audio files. Pay only for what you use with our flexible credit system.
          </p>
        </div>

        {/* Credit Packs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
          {creditPacks.map((pack, index) => (
            <Card 
              key={index} 
              className={`relative ${pack.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-slate-200 dark:border-slate-700'}`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl mx-auto mb-4">
                  {pack.icon}
                </div>
                <CardTitle className="text-xl font-bold dark:text-slate-100">{pack.name}</CardTitle>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{pack.description}</p>
                
                <div className="mt-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                      ${pack.price}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                    {pack.minutes} minutes
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    ${(pack.price / pack.minutes).toFixed(3)} per minute
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  className={`w-full ${pack.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={pack.popular ? 'default' : 'outline'}
                >
                  <Link to="/signup">
                    Buy Credits
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Learn more about how our credit system works.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-slate-200 dark:border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Start transcribing your audio files today with our flexible credit system.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-slate-50">
              <Link to="/signup">Buy Your First Pack</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
