import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Routes } from '..';

import { api } from '@/apis';
import Button from '@/components/button';
import Input from '@/components/input';
import { useCartContext } from '@/context/Cart';
import { handleError } from '@/utils/error';
import { isNumber, isValidString } from '@/utils/validation';

const paymentVariants = ['Credit Card', 'PayPal', 'PayPal Credit'];

interface CardErrors {
  cardHolderName: string;
  cardNumber: string;
  cardExpDate: string;
  cardCVV: string;
}

export const PaymentForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart, setPurchasedItems } = useCartContext();

  const [cardValue, setCardValue] = useState({
    cardHolderName: '',
    cardNumber: '',
    cardExpDate: '',
    cardCVV: '',
  });
  const [errors, setErrors] = useState<CardErrors>(
    Object.keys(cardValue).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {} as CardErrors,
    ),
  );

  const goToPrevPage = () => {
    router.back();
  };

  // slash for card exp.date
  const handleInputExpDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 4) value = value.slice(0, 4);

    if (value.length >= 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setCardValue({ ...cardValue, cardExpDate: value });
  };

  // spaces for card number
  const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');

    return digitsOnly.match(/.{1,4}/g)?.join(' ') || '';
  };

  const checkValid = () => {
    const innerErrors: CardErrors = Object.keys(cardValue).reduce(
      (acc, key) => ({ ...acc, [key]: '' }),
      {} as CardErrors,
    );

    if (!isValidString(cardValue.cardHolderName, 6, 50)) {
      innerErrors.cardHolderName =
        'Your name must be between 4 and 20 characters';
    }

    if (!isNumber(cardValue.cardNumber)) {
      innerErrors.cardNumber = 'Your card number must contain 16 digits';
    }

    if (!isNumber(cardValue.cardCVV)) {
      innerErrors.cardCVV = 'Your CVV must contain 3 digits';
    }

    if (!isNumber(cardValue.cardExpDate)) {
      innerErrors.cardExpDate = 'Your exp.date must contain 4 digits';
    }

    setErrors(innerErrors);

    return Object.values(innerErrors).every(value => value === '');
  };

  const submitOrder = async () => {
    setIsLoading(true);

    try {
      const orderWithId = await api.createOrder({ products: cart });

      if (!orderWithId) {
        throw new Error('Order creation failed');
      }

      if (checkValid()) {
        setPurchasedItems([...cart]);

        setCart([]);

        router.push({
          pathname: Routes.success,
          query: { orderId: orderWithId.id },
        });
      }
    } catch (e) {
      handleError(e);
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between">
        {paymentVariants.map((item, index) => (
          <div key={index}>
            <div className="border-b border-transparent cursor-pointer hover:border-black">
              {item}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="flex justify-center my-10 md:justify-start">
          <Image
            src="/img/view/creditcard.png"
            alt="creditCard"
            width={330}
            height={190}
          />
        </div>
        <div className="text-[14px]">
          <Input
            className="w-full border-[#CECECE] p-4"
            placeholder="Cardholder Name"
            value={cardValue.cardHolderName}
            onChange={e =>
              setCardValue({ ...cardValue, cardHolderName: e.target.value })
            }
            errorMsg={errors.cardHolderName}
          />
          <Input
            className="w-full mt-4 border-[#CECECE] p-4"
            placeholder="Card Number"
            inputMode="numeric"
            minLength={19}
            maxLength={19}
            value={cardValue.cardNumber}
            onChange={e => {
              const formatted = formatCardNumber(e.target.value);
              setCardValue({ ...cardValue, cardNumber: formatted });
            }}
            errorMsg={errors.cardNumber}
          />
          <div className="flex mt-4 w-full gap-4">
            <Input
              className="flex-1 border-[#CECECE] p-4"
              placeholder="Exp.Date MM/YY"
              inputMode="numeric"
              value={cardValue.cardExpDate}
              onChange={handleInputExpDate}
              errorMsg={errors.cardExpDate}
            />
            <Input
              className="flex-1 border-[#CECECE] p-4"
              placeholder="CVV"
              inputMode="numeric"
              value={cardValue.cardCVV}
              minLength={3}
              maxLength={3}
              onChange={e =>
                setCardValue({ ...cardValue, cardCVV: e.target.value })
              }
              errorMsg={errors.cardCVV}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 flex gap-6 justify-center xl:justify-end">
        <Button
          className="min-h-16 flex-1 max-w-[150px]"
          onClick={goToPrevPage}
          type="button"
        >
          Back
        </Button>
        <Button
          className="min-h-16 flex-1 max-w-[150px]"
          variant="primary"
          type="button"
          onClick={submitOrder}
          isLoading={isLoading}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
