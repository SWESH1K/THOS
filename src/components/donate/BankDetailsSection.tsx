import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Copy, Building2, CreditCard, Hash, CheckCircle } from "lucide-react";
import { useState } from "react";

const bankDetails = {
  accountName: "The Hope Orphanage Society",
  accountNumber: "1234567890123456",
  ifscCode: "SBIN0001234",
  bankName: "State Bank of India",
  branch: "Main Branch, Delhi",
  accountType: "Current Account"
};

export function BankDetailsSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const DetailRow = ({ 
    icon: Icon, 
    label, 
    value, 
    field 
  }: { 
    icon: any, 
    label: string, 
    value: string, 
    field: string 
  }) => (
    <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className="flex items-center space-x-3">
        <Icon className="h-5 w-5 text-primary" />
        <div>
          <div className="text-sm text-muted-foreground">{label}</div>
          <div className="font-mono font-medium text-foreground">{value}</div>
        </div>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => copyToClipboard(value, field)}
        className="ml-2"
      >
        {copiedField === field ? (
          <CheckCircle className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bank Details for Direct Transfer
          </h2>
          <p className="text-lg text-muted-foreground">
            You can also donate directly to our bank account using the details below
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Building2 className="h-6 w-6 text-primary" />
              Account Information
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <DetailRow
              icon={Building2}
              label="Account Name"
              value={bankDetails.accountName}
              field="accountName"
            />
            
            <DetailRow
              icon={CreditCard}
              label="Account Number"
              value={bankDetails.accountNumber}
              field="accountNumber"
            />
            
            <DetailRow
              icon={Hash}
              label="IFSC Code"
              value={bankDetails.ifscCode}
              field="ifscCode"
            />
            
            <DetailRow
              icon={Building2}
              label="Bank Name"
              value={bankDetails.bankName}
              field="bankName"
            />
            
            <DetailRow
              icon={Building2}
              label="Branch"
              value={bankDetails.branch}
              field="branch"
            />
            
            <DetailRow
              icon={CreditCard}
              label="Account Type"
              value={bankDetails.accountType}
              field="accountType"
            />

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">!</span>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="text-blue-800 dark:text-blue-200 font-medium mb-1">
                    Important Note
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    After making a direct bank transfer, please send us an email at{" "}
                    <a href="mailto:donations@thos.org" className="underline font-medium">
                      donations@thos.org
                    </a>
                    {" "}with your transaction details so we can acknowledge your donation and provide a receipt.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
