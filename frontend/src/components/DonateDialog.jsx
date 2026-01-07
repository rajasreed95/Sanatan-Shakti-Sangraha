import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { X, Banknote, Package, Copy, Check } from 'lucide-react';
import { donationInfo } from '../mock';

const DonateDialog = ({ open, onOpenChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [copiedField, setCopiedField] = useState('');

  // Reset to main options when dialog opens
  React.useEffect(() => {
    if (open) {
      setSelectedOption(null);
    }
  }, [open]);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            setSelectedOption(null);
            onOpenChange(false);
          }}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-saffron-800">
            {selectedOption ? (selectedOption === 'money' ? 'Donate Money' : 'Donate Supplies') : 'Choose Donation Type'}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {!selectedOption ? (
            <div className="space-y-4">
              <p className="text-gray-600 mb-6">
                Your contribution makes a real difference in the lives of underprivileged children. Choose how you would like to help:
              </p>
              
              <div className="grid gap-4">
                <Card
                  onClick={() => setSelectedOption('money')}
                  className="p-6 cursor-pointer border-2 border-saffron-200 hover:border-saffron-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-saffron-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Banknote className="w-7 h-7 text-saffron-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-saffron-800 mb-1">Donate Money</h3>
                      <p className="text-gray-600">Contribute financially via UPI</p>
                    </div>
                  </div>
                </Card>

                <Card
                  onClick={() => setSelectedOption('supplies')}
                  className="p-6 cursor-pointer border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="w-7 h-7 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-saffron-800 mb-1">Donate Supplies</h3>
                      <p className="text-gray-600">Send educational materials, books, or essentials</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : selectedOption === 'money' ? (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-xl p-6 border-2 border-saffron-200">
                <h3 className="text-lg font-bold text-saffron-800 mb-4">Bank Account Details</h3>
                <p className="text-gray-700 mb-4">
                  You can donate by transferring money directly to our bank account:
                </p>
                
                <div className="space-y-4">
                  {/* Account Holder */}
                  <div className="bg-white p-4 rounded-lg border border-saffron-300">
                    <p className="text-sm text-gray-600 mb-1">Account Holder Name</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-saffron-700">{donationInfo.bankAccount.accountHolder}</p>
                      <Button
                        onClick={() => copyToClipboard(donationInfo.bankAccount.accountHolder, 'holder')}
                        variant="outline"
                        size="sm"
                        className="border-saffron-300 hover:bg-saffron-50"
                      >
                        {copiedField === 'holder' ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="bg-white p-4 rounded-lg border border-saffron-300">
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono font-semibold text-saffron-700">{donationInfo.bankAccount.accountNumber}</p>
                      <Button
                        onClick={() => copyToClipboard(donationInfo.bankAccount.accountNumber, 'account')}
                        variant="outline"
                        size="sm"
                        className="border-saffron-300 hover:bg-saffron-50"
                      >
                        {copiedField === 'account' ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* IFSC Code */}
                  <div className="bg-white p-4 rounded-lg border border-saffron-300">
                    <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-mono font-semibold text-saffron-700">{donationInfo.bankAccount.ifscCode}</p>
                      <Button
                        onClick={() => copyToClipboard(donationInfo.bankAccount.ifscCode, 'ifsc')}
                        variant="outline"
                        size="sm"
                        className="border-saffron-300 hover:bg-saffron-50"
                      >
                        {copiedField === 'ifsc' ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Account Type */}
                  <div className="bg-white p-4 rounded-lg border border-saffron-300">
                    <p className="text-sm text-gray-600 mb-1">Type of Account</p>
                    <p className="text-lg font-semibold text-saffron-700">{donationInfo.bankAccount.accountType}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p className="font-semibold text-gray-700">Steps to donate:</p>
                  <ol className="list-decimal list-inside space-y-1 ml-2">
                    <li>Open your banking app or visit your bank</li>
                    <li>Select "Transfer" or "NEFT/RTGS/IMPS"</li>
                    <li>Enter the account details above</li>
                    <li>Enter the amount you wish to donate</li>
                    <li>Complete the transfer</li>
                  </ol>
                </div>
              </div>

              <p className="text-center text-gray-600 text-sm">
                Every contribution, big or small, makes a meaningful difference in a child's life.
              </p>

              <Button
                onClick={handleBack}
                variant="outline"
                className="w-full border-saffron-300 hover:bg-saffron-50"
              >
                Back to Options
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="text-lg font-bold text-saffron-800 mb-4">Send Supplies To</h3>
                
                <div className="bg-white p-4 rounded-lg border border-amber-300 space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Address:</p>
                    <p className="text-gray-800 leading-relaxed">
                      {donationInfo.suppliesAddress}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Contact Numbers:</p>
                    <div className="space-y-1">
                      {donationInfo.phones.map((phone, index) => (
                        <p key={index} className="text-gray-800">
                          <a href={`tel:${phone}`} className="hover:text-saffron-600 transition-colors">
                            {phone}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2 text-sm text-gray-600">
                  <p className="font-semibold text-gray-700">Items you can donate:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>School supplies (notebooks, pens, pencils)</li>
                    <li>Educational books and learning materials</li>
                    <li>Clothing and daily necessities</li>
                    <li>Sports equipment</li>
                    <li>Food grains and ration</li>
                  </ul>
                </div>
              </div>

              <p className="text-center text-gray-600 text-sm">
                Thank you for your generosity! Your supplies will directly benefit the children at our ashram.
              </p>

              <Button
                onClick={handleBack}
                variant="outline"
                className="w-full border-amber-300 hover:bg-amber-50"
              >
                Back to Options
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonateDialog;
