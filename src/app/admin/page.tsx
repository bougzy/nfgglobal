import { Card } from "@/components/ui/card";
import { LoginForm } from "@/components/admin/login-form";

export const metadata = {
  title: "Admin Login",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] px-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gradient">Admin Login</h1>
          <p className="text-sm text-white/50 mt-2">
            Sign in to manage your store
          </p>
        </div>
        <LoginForm />
      </Card>
    </div>
  );
}
