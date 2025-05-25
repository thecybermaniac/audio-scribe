
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";

const ConfirmEmail = () => {
  const [searchParams] = useSearchParams();
  const [verificationCode, setVerificationCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [resendCooldown, setResendCooldown] = useState(0);
  
  const email = searchParams.get('email') || 'user@example.com';

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => setResendCooldown(resendCooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  const handleVerify = async () => {
    if (!verificationCode.trim()) return;
    
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      if (verificationCode === '123456') {
        setVerificationStatus('success');
      } else {
        setVerificationStatus('error');
      }
      setIsVerifying(false);
    }, 2000);
  };

  const handleResendCode = () => {
    setResendCooldown(60);
    setVerificationStatus('pending');
    setVerificationCode('');
    console.log('Resending verification code to:', email);
  };

  if (verificationStatus === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <Navigation />
        <div className="flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Email Verified!
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Your email has been successfully verified. You can now access all features of AudioScribe.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navigation />
      <div className="flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Verify Your Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-2">
                We've sent a verification code to:
              </p>
              <p className="font-medium text-slate-900 dark:text-slate-100">{email}</p>
            </div>

            {verificationStatus === 'error' && (
              <div className="flex items-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                <p className="text-sm text-red-700 dark:text-red-300">
                  Invalid verification code. Please try again.
                </p>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="verification-code">Verification Code</Label>
              <Input
                id="verification-code"
                type="text"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
            </div>

            <Button 
              onClick={handleVerify}
              disabled={!verificationCode.trim() || isVerifying}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isVerifying ? "Verifying..." : "Verify Email"}
            </Button>

            <div className="text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                Didn't receive the code?
              </p>
              <Button
                variant="link"
                onClick={handleResendCode}
                disabled={resendCooldown > 0}
                className="text-blue-600 dark:text-blue-400"
              >
                {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : "Resend Code"}
              </Button>
            </div>

            <div className="text-center">
              <Button variant="link" asChild className="text-slate-600 dark:text-slate-400">
                <Link to="/login" className="flex items-center justify-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Back to Login
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmEmail;
