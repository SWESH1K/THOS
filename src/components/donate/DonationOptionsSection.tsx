import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Heart, ExternalLink } from "lucide-react";

const donationAmounts = [
  { amount: 250, label: "₹250", description: "Provides books for a child" },
  { amount: 500, label: "₹500", description: "Funds a week of meals" },
  { amount: 1000, label: "₹1000", description: "Supports monthly education" },
  { amount: 2500, label: "₹2500", description: "Covers healthcare needs" },
];

export function DonationOptionsSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount && amount > 0) {
      // Redirect to bank portal in new tab
      window.open("https://bank-portal.example", "_blank");
    }
  };

  const isCustomSelected = selectedAmount === null && customAmount !== "";
  const canDonate = selectedAmount !== null || (customAmount !== "" && parseInt(customAmount) > 0);

  return (
    <section id="donation-options" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Donation Amount
          </h2>
          <p className="text-lg text-muted-foreground">
            Select an amount that works for you, or enter a custom donation
          </p>
        </div>

        <Card className="p-8">
          <CardHeader className="text-center pb-8">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Heart className="h-6 w-6 text-primary" />
              Make a Difference Today
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Preset Amounts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {donationAmounts.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => {
                    setSelectedAmount(option.amount);
                    setCustomAmount("");
                  }}
                  className={`p-6 rounded-lg border-2 transition-all text-left hover:border-primary/50 ${
                    selectedAmount === option.amount
                      ? "border-primary bg-primary/5"
                      : "border-border"
                  }`}
                >
                  <div className="text-2xl font-bold text-primary-foreground mb-1">
                    {option.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {option.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-muted-foreground">or</span>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="custom-amount" className="text-sm font-medium text-foreground">
                  Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className={`pl-8 ${
                      isCustomSelected ? "border-primary" : ""
                    }`}
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Donate Button */}
            <div className="pt-6">
              <Button
                onClick={handleDonate}
                disabled={!canDonate}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-muted-foreground text-center mt-3">
                You will be redirected to our secure bank portal to complete your donation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
