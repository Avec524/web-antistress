"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AfterPayment() {
  const router = useRouter();

  useEffect(() => {
    document.cookie = "access_granted=true; path=/; max-age=3600";
    const timer = setTimeout(() => {
      router.push('/relax');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6 text-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Спасибо за оплату!
      </h1>
      <p className="text-gray-600">
        Вас автоматически перенаправят в антистресс-пространство...
      </p>
    </main>
  );
}
